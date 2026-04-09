// script-integrated.js
// Two-phase Reed-Kellogg sentence diagramming game.
//
// Zones: subject | verb | object | adjective | adverb | conjunction |
//        subjectModifier | dependentClause | prepositional | secondClause

class SentenceDiagrammingGame {
    constructor() {
        this.sentences       = (typeof professionalSentences !== 'undefined') ? professionalSentences : {};
        this.currentSentence = null;
        this.difficulty      = 1;
        this.level           = 1;
        this.score           = 0;
        this.streak          = 0;
        this.totalAttempts   = 0;
        this.correctAttempts = 0;

        this.phase             = 'A';
        this.phaseQueue        = [];
        this.currentQueueIndex = 0;
        this.phaseSentenceCount = 3;

        this.initializeElements();
        this.attachEventListeners();
        this.startLevel();
    }

    // ─── All ten zone keys ─────────────────────────────────────────────────────
    get allZones() {
        return [
            'subject', 'verb', 'object',
            'adjective', 'adverb', 'conjunction',
            'subjectModifier', 'dependentClause',
            'prepositional', 'secondClause'
        ];
    }

    // ─── Element wiring ────────────────────────────────────────────────────────

    initializeElements() {
        this.sentenceDisplay   = document.getElementById('sentence');
        this.sentenceTypeEl    = document.getElementById('sentence-type');
        this.wordBankContainer = document.getElementById('word-bank');

        this.scoreEl    = document.getElementById('score');
        this.levelEl    = document.getElementById('level');
        this.streakEl   = document.getElementById('streak');
        this.accuracyEl = document.getElementById('accuracy');

        this.checkAnswerBtn  = document.getElementById('check-answer');
        this.hintBtn         = document.getElementById('hint');
        this.skipBtn         = document.getElementById('skip');
        this.resetBtn        = document.getElementById('reset');
        this.nextSentenceBtn = document.getElementById('next-sentence');
        this.shareBtn        = document.getElementById('share-btn');
        this.shareMessage    = document.getElementById('share-message');

        this.feedbackSection   = document.getElementById('feedback');
        this.feedbackTitle     = document.getElementById('feedback-title');
        this.feedbackMessage   = document.getElementById('feedback-message');
        this.explanationDiv    = document.getElementById('explanation');
        this.correctDiagramDiv = document.getElementById('correct-diagram');

        this.hintModal     = document.getElementById('hint-modal');
        this.hintText      = document.getElementById('hint-text');
        this.closeModalBtn = document.querySelector('#hint-modal .close');

        this.phaseBadge       = document.getElementById('phase-badge');
        this.phaseDescription = document.getElementById('phase-description');

        // Collect drop zones via data-zone
        this.dropZones = {};
        document.querySelectorAll('.diagram-zone').forEach(zone => {
            const key = zone.dataset.zone;
            if (key) this.dropZones[key] = zone.querySelector('.zone-drop-area');
        });
    }

    // ─── Event listeners ───────────────────────────────────────────────────────

    attachEventListeners() {
        this.checkAnswerBtn.addEventListener('click',  () => this.checkAnswer());
        this.hintBtn.addEventListener('click',         () => this.showHint());
        this.skipBtn.addEventListener('click',         () => this.skipSentence());
        this.resetBtn.addEventListener('click',        () => this.resetDiagram());
        this.nextSentenceBtn.addEventListener('click', () => this.loadSentenceFromQueue());
        this.shareBtn.addEventListener('click',        () => this.shareGame());
        this.closeModalBtn.addEventListener('click',   () => this.hideHint());
        this.hintModal.addEventListener('click', e => {
            if (e.target === this.hintModal) this.hideHint();
        });

        this.wordBankContainer.addEventListener('dragstart', e => this.handleDragStart(e));
        this.wordBankContainer.addEventListener('dragend',   e => this.handleDragEnd(e));
        this.wordBankContainer.addEventListener('dragover',  e => this.handleDragOver(e));
        this.wordBankContainer.addEventListener('dragleave', e => this.handleDragLeave(e));
        this.wordBankContainer.addEventListener('drop',      e => this.handleDropToBank(e));

        Object.values(this.dropZones).forEach(zone => {
            if (!zone) return;
            zone.addEventListener('dragover',  e => this.handleDragOver(e));
            zone.addEventListener('dragleave', e => this.handleDragLeave(e));
            zone.addEventListener('drop',      e => this.handleDrop(e, zone));
        });

        document.getElementById('diagram-canvas').addEventListener('dragstart', e => {
            if (e.target.classList.contains('word-item')) this.handleDragStart(e);
        });
        document.getElementById('diagram-canvas').addEventListener('dragend', e => {
            if (e.target.classList.contains('word-item')) this.handleDragEnd(e);
        });
    }

    // ─── Level / phase management ──────────────────────────────────────────────

    startLevel() {
        const available = this.sentences[this.difficulty];
        if (!available || available.length === 0) {
            this.difficulty = Math.min(this.difficulty + 1, 5);
            this.level = this.difficulty;
            this.startLevel();
            return;
        }
        const count   = Math.min(this.phaseSentenceCount, available.length);
        const indices = this.shuffleArray([...Array(available.length).keys()]);
        this.phaseQueue        = indices.slice(0, count);
        this.currentQueueIndex = 0;
        this.phase             = 'A';
        this.updatePhaseIndicator();
        this.loadSentenceFromQueue();
    }

    loadSentenceFromQueue() {
        this.feedbackSection.classList.add('hidden');
        this.clearZoneHighlights();

        if (this.currentQueueIndex >= this.phaseQueue.length) {
            if (this.phase === 'A') {
                this.phase = 'B';
                this.currentQueueIndex = 0;
                this.updatePhaseIndicator();
                this.showTransitionMessage();
                return;
            } else {
                this.advanceLevel();
                return;
            }
        }

        const available = this.sentences[this.difficulty];
        const idx = this.phaseQueue[this.currentQueueIndex++];
        this.currentSentence = available[idx];

        this.displaySentence();
        this.resetDiagram();
        this.populateWordBank();
        this.updateStats();
    }

    advanceLevel() {
        if (this.difficulty < 5) {
            this.difficulty++;
            this.level = this.difficulty;
        }
        this.startLevel();
    }

    showTransitionMessage() {
        this.feedbackSection.classList.remove('hidden');
        this.feedbackTitle.textContent             = '🎉 Phase A Complete!';
        this.feedbackMessage.textContent           = 'Well done placing the chunks! Now the same sentences return — this time place every individual word in the correct zone.';
        this.explanationDiv.textContent            = '';
        this.correctDiagramDiv.innerHTML           = '';
        this.feedbackSection.style.borderLeftColor = 'var(--primary)';
        this.updateStats();
    }

    updatePhaseIndicator() {
        if (!this.phaseBadge) return;
        if (this.phase === 'A') {
            this.phaseBadge.textContent       = 'Phase A — Chunks';
            this.phaseBadge.className         = 'phase-badge phase-a';
            this.phaseDescription.textContent = 'Drag the labeled phrase chunks to the correct zones on the diagram.';
        } else {
            this.phaseBadge.textContent       = 'Phase B — Words';
            this.phaseBadge.className         = 'phase-badge phase-b';
            this.phaseDescription.textContent = 'Now place each individual word in the correct zone.';
        }
    }

    // ─── Sentence display ──────────────────────────────────────────────────────

    displaySentence() {
        if (!this.currentSentence) return;
        this.sentenceDisplay.textContent  = this.currentSentence.text;
        const type = this.currentSentence.type || '';
        this.sentenceTypeEl.textContent   = type.charAt(0).toUpperCase() + type.slice(1);
        this.sentenceTypeEl.style.display = 'inline-block';
    }

    // ─── Word bank ─────────────────────────────────────────────────────────────

    populateWordBank() {
        this.wordBankContainer.innerHTML = '';
        if (!this.currentSentence) return;

        const data = this.phase === 'A'
            ? this.currentSentence.diagram.chunks
            : this.currentSentence.diagram.words;
        if (!data) return;

        if (this.phase === 'A') {
            const allChunks = [];
            Object.entries(data).forEach(([zone, phrases]) => {
                if (!Array.isArray(phrases)) return;
                phrases.forEach((phrase, i) => {
                    allChunks.push({ text: phrase, zone, id: `${zone}_${i}` });
                });
            });
            this.shuffleArray(allChunks).forEach((chunk, i) => {
                const el = this.makeTile(chunk.text, i, true);
                el.dataset.correctZone = chunk.zone;
                this.wordBankContainer.appendChild(el);
            });
        } else {
            const words = this.currentSentence.text.split(/\s+/);
            words.forEach((word, i) => {
                this.wordBankContainer.appendChild(this.makeTile(word, i, false));
            });
        }
    }

    makeTile(text, index, isChunk) {
        const el = document.createElement('div');
        el.className     = isChunk ? 'word-item chunk-item' : 'word-item';
        el.draggable     = true;
        el.dataset.word  = text;
        el.dataset.index = index;
        el.textContent   = text;
        return el;
    }

    // ─── Drag and drop ─────────────────────────────────────────────────────────

    handleDragStart(e) {
        if (!e.target.classList.contains('word-item')) return;
        e.target.classList.add('dragging');
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', e.target.dataset.index);
    }
    handleDragEnd(e) {
        if (e.target.classList.contains('word-item')) e.target.classList.remove('dragging');
    }
    handleDragOver(e) {
        e.preventDefault(); e.currentTarget.classList.add('drag-over');
    }
    handleDragLeave(e) {
        e.currentTarget.classList.remove('drag-over');
    }
    handleDrop(e, dropZone) {
        e.preventDefault(); dropZone.classList.remove('drag-over');
        const el = document.querySelector('.word-item.dragging');
        if (el) { el.classList.remove('dragging'); dropZone.appendChild(el); }
    }
    handleDropToBank(e) {
        e.preventDefault(); this.wordBankContainer.classList.remove('drag-over');
        const el = document.querySelector('.word-item.dragging');
        if (!el) return;
        el.classList.remove('dragging');
        this.wordBankContainer.appendChild(el);
        this.restoreWordBankOrder();
    }

    // ─── Diagram reset ─────────────────────────────────────────────────────────

    resetDiagram() {
        Object.values(this.dropZones).forEach(zone => {
            if (!zone) return;
            while (zone.firstChild) this.wordBankContainer.appendChild(zone.firstChild);
        });
        this.restoreWordBankOrder();
        this.clearZoneHighlights();
    }

    restoreWordBankOrder() {
        const items = Array.from(this.wordBankContainer.children);
        items.sort((a, b) => parseInt(a.dataset.index) - parseInt(b.dataset.index));
        items.forEach(el => this.wordBankContainer.appendChild(el));
    }

    clearZoneHighlights() {
        document.querySelectorAll('.diagram-zone').forEach(z => z.classList.remove('correct', 'incorrect'));
    }

    // ─── Answer checking ───────────────────────────────────────────────────────

    checkAnswer() {
        if (!this.currentSentence) return;
        this.totalAttempts++;

        const data = this.phase === 'A'
            ? this.currentSentence.diagram.chunks
            : this.currentSentence.diagram.words;
        if (!data) return;

        let allCorrect = true;

        this.allZones.forEach(key => {
            const dropArea = this.dropZones[key];
            if (!dropArea) return;

            const placed = Array.from(dropArea.querySelectorAll('.word-item'))
                               .map(el => this.clean(el.dataset.word));
            const exp    = (data[key] || []).map(w => this.clean(w));

            const correct   = this.arraysMatch([...placed].sort(), [...exp].sort());
            const zoneWrong = (exp.length > 0 && !correct) || (exp.length === 0 && placed.length > 0);
            if (zoneWrong) allCorrect = false;

            const zoneEl = dropArea.closest('.diagram-zone');
            if (zoneEl) {
                zoneEl.classList.remove('correct', 'incorrect');
                if (exp.length > 0 || placed.length > 0) {
                    zoneEl.classList.add(correct ? 'correct' : 'incorrect');
                }
            }
        });

        if (allCorrect) {
            this.correctAttempts++;
            this.streak++;
            const pts = Math.max(10, 10 * this.streak);
            this.score += pts;
            this.showFeedback(true, data, pts);
        } else {
            this.streak = 0;
            this.showFeedback(false, data, 0);
        }
        this.updateStats();
    }

    clean(word) {
        return (word || '').replace(/[.,!?;:'"()\[\]]+$/g, '').toLowerCase().trim();
    }

    arraysMatch(a, b) {
        return a.length === b.length && a.every((v, i) => v === b[i]);
    }

    // ─── Feedback ──────────────────────────────────────────────────────────────

    showFeedback(correct, data, points) {
        this.feedbackSection.classList.remove('hidden');
        if (correct) {
            this.feedbackTitle.textContent             = '✅ Correct!';
            this.feedbackMessage.textContent           = `Great work! +${points} points`;
            this.feedbackSection.style.borderLeftColor = 'var(--success)';
        } else {
            this.feedbackTitle.textContent             = '❌ Not quite!';
            this.feedbackMessage.textContent           = 'Review the correct placement below, then continue.';
            this.feedbackSection.style.borderLeftColor = 'var(--error)';
        }
        this.explanationDiv.textContent = this.currentSentence.explanation || '';

        const labels = {
            subject:         'Subject',
            verb:            'Verb',
            object:          'Direct Object',
            adjective:       'Adjective',
            adverb:          'Adverb',
            conjunction:     'Conjunction',
            subjectModifier: 'Modifier of Subject',
            dependentClause: 'Dependent Clause',
            prepositional:   'Prepositional Phrase',
            secondClause:    'Second Independent Clause'
        };

        let html = '<strong>Correct placement:</strong><br><br>';
        this.allZones.forEach(zone => {
            const words = data[zone] || [];
            if (words.length > 0) {
                html += `<span class="feedback-zone-label">${labels[zone]}:</span> ${words.join(' ')}<br>`;
            }
        });
        this.correctDiagramDiv.innerHTML = html;
        this.feedbackSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    // ─── Stats ─────────────────────────────────────────────────────────────────

    updateStats() {
        this.scoreEl.textContent  = this.score;
        this.levelEl.textContent  = this.level;
        this.streakEl.textContent = this.streak;
        const pct = this.totalAttempts > 0
            ? Math.round((this.correctAttempts / this.totalAttempts) * 100)
            : 100;
        this.accuracyEl.textContent = `${pct}%`;
    }

    // ─── Skip ──────────────────────────────────────────────────────────────────

    skipSentence() {
        this.streak = 0; this.totalAttempts++;
        this.updateStats(); this.loadSentenceFromQueue();
    }

    // ─── Hint ──────────────────────────────────────────────────────────────────

    showHint() {
        if (!this.currentSentence) return;
        this.hintText.textContent = this.currentSentence.explanation || 'Study the sentence structure carefully.';
        this.hintModal.classList.remove('hidden');
    }
    hideHint() { this.hintModal.classList.add('hidden'); }

    // ─── Share ─────────────────────────────────────────────────────────────────

    shareGame() {
        const url = window.location.href;
        if (navigator.share) {
            navigator.share({ title: 'Sentence Diagramming Game', url }).catch(() => {});
        } else {
            navigator.clipboard.writeText(url)
                .then(() => this.showShareMessage('Link copied!'))
                .catch(() => this.showShareMessage('Could not copy link.'));
        }
    }
    showShareMessage(msg) {
        this.shareMessage.textContent = msg;
        this.shareMessage.classList.remove('hidden');
        setTimeout(() => this.shareMessage.classList.add('hidden'), 3000);
    }

    // ─── Utilities ─────────────────────────────────────────────────────────────

    shuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }
}

document.addEventListener('DOMContentLoaded', () => { new SentenceDiagrammingGame(); });

// Sentence Diagramming Game - script-integrated.js
// Fixes:
//   1. Answer checking is now order-independent and punctuation-tolerant
//   2. POS tags removed from word bank (no spoilers)
//   3. Players advance through levels after 3 sentences regardless of score

class SentenceDiagrammingGame {
    constructor() {
        this.sentences = (typeof professionalSentences !== 'undefined') ? professionalSentences : {};
        this.currentSentence = null;
        this.currentIndex = -1;
        this.score = 0;
        this.level = 1;
        this.streak = 0;
        this.totalAttempts = 0;
        this.correctAttempts = 0;
        this.difficulty = 1;
        this.sentencesAtCurrentLevel = 0;  // tracks how many sentences played at this level
        this.sentencesPerLevel = 3;        // advance after this many sentences

        this.initializeElements();
        this.attachEventListeners();
        this.loadNewSentence();
    }

    // ─── Element Wiring ────────────────────────────────────────────────────────

    initializeElements() {
        this.sentenceDisplay    = document.getElementById('sentence');
        this.sentenceTypeEl     = document.getElementById('sentence-type');
        this.wordBankContainer  = document.getElementById('word-bank');

        this.scoreEl            = document.getElementById('score');
        this.levelEl            = document.getElementById('level');
        this.streakEl           = document.getElementById('streak');
        this.accuracyEl         = document.getElementById('accuracy');

        this.checkAnswerBtn     = document.getElementById('check-answer');
        this.hintBtn            = document.getElementById('hint');
        this.skipBtn            = document.getElementById('skip');
        this.resetBtn           = document.getElementById('reset');
        this.nextSentenceBtn    = document.getElementById('next-sentence');
        this.shareBtn           = document.getElementById('share-btn');
        this.shareMessage       = document.getElementById('share-message');

        this.feedbackSection    = document.getElementById('feedback');
        this.feedbackTitle      = document.getElementById('feedback-title');
        this.feedbackMessage    = document.getElementById('feedback-message');
        this.explanationDiv     = document.getElementById('explanation');
        this.correctDiagramDiv  = document.getElementById('correct-diagram');

        this.hintModal          = document.getElementById('hint-modal');
        this.hintText           = document.getElementById('hint-text');
        this.closeModalBtn      = document.querySelector('#hint-modal .close');

        // Drop zones keyed by data-zone attribute
        this.dropZones = {};
        document.querySelectorAll('.diagram-zone').forEach(zone => {
            const key = zone.dataset.zone;
            this.dropZones[key] = zone.querySelector('.zone-drop-area');
        });
    }

    // ─── Event Listeners ───────────────────────────────────────────────────────

    attachEventListeners() {
        this.checkAnswerBtn.addEventListener('click',  () => this.checkAnswer());
        this.hintBtn.addEventListener('click',         () => this.showHint());
        this.skipBtn.addEventListener('click',         () => this.skipSentence());
        this.resetBtn.addEventListener('click',        () => this.resetDiagram());
        this.nextSentenceBtn.addEventListener('click', () => this.loadNewSentence());
        this.shareBtn.addEventListener('click',        () => this.shareGame());
        this.closeModalBtn.addEventListener('click',   () => this.hideHint());

        this.hintModal.addEventListener('click', (e) => {
            if (e.target === this.hintModal) this.hideHint();
        });

        // Drag events on word bank
        this.wordBankContainer.addEventListener('dragstart', (e) => this.handleDragStart(e));
        this.wordBankContainer.addEventListener('dragend',   (e) => this.handleDragEnd(e));
        this.wordBankContainer.addEventListener('dragover',  (e) => this.handleDragOver(e));
        this.wordBankContainer.addEventListener('dragleave', (e) => this.handleDragLeave(e));
        this.wordBankContainer.addEventListener('drop',      (e) => this.handleDropToBank(e));

        // Drag events on each drop zone
        Object.values(this.dropZones).forEach(zone => {
            zone.addEventListener('dragover',  (e) => this.handleDragOver(e));
            zone.addEventListener('dragleave', (e) => this.handleDragLeave(e));
            zone.addEventListener('drop',      (e) => this.handleDrop(e, zone));
        });

        // Allow dragging between zones
        document.getElementById('diagram-canvas').addEventListener('dragstart', (e) => {
            if (e.target.classList.contains('word-item')) this.handleDragStart(e);
        });
        document.getElementById('diagram-canvas').addEventListener('dragend', (e) => {
            if (e.target.classList.contains('word-item')) this.handleDragEnd(e);
        });
    }

    // ─── Sentence Loading & Level Progression ──────────────────────────────────

    loadNewSentence() {
        this.feedbackSection.classList.add('hidden');
        this.clearZoneHighlights();

        // Advance level after sentencesPerLevel sentences
        if (this.sentencesAtCurrentLevel >= this.sentencesPerLevel) {
            this.advanceLevel();
            return;
        }

        const available = this.sentences[this.difficulty];

        if (!available || available.length === 0) {
            this.advanceLevel();
            return;
        }

        let idx;
        do {
            idx = Math.floor(Math.random() * available.length);
        } while (idx === this.currentIndex && available.length > 1);

        this.currentIndex    = idx;
        this.currentSentence = available[idx];
        this.sentencesAtCurrentLevel++;

        this.displaySentence();
        this.resetDiagram();
        this.populateWordBank();
        this.updateStats();
    }

    advanceLevel() {
        if (this.difficulty < 5) {
            this.difficulty++;
            this.level = this.difficulty;
            this.sentencesAtCurrentLevel = 0;
            this.showLevelUpMessage();
        } else {
            // All levels complete — keep cycling level 5
            this.sentencesAtCurrentLevel = 0;
            this.loadNewSentence();
        }
    }

    showLevelUpMessage() {
        this.feedbackSection.classList.remove('hidden');
        this.feedbackTitle.textContent             = `🎉 Level ${this.difficulty} Unlocked!`;
        this.feedbackMessage.textContent           = `You've completed Level ${this.difficulty - 1}. Ready for harder sentences?`;
        this.explanationDiv.textContent            = '';
        this.correctDiagramDiv.innerHTML           = '';
        this.feedbackSection.style.borderLeftColor = 'var(--primary-color)';
        this.updateStats();
    }

    displaySentence() {
        if (!this.currentSentence) return;
        this.sentenceDisplay.textContent  = this.currentSentence.text;

        const type = this.currentSentence.type || '';
        this.sentenceTypeEl.textContent   = type.charAt(0).toUpperCase() + type.slice(1);
        this.sentenceTypeEl.style.display = 'inline-block';
    }

    // ─── Word Bank — plain words only, no POS tags ─────────────────────────────

    populateWordBank() {
        this.wordBankContainer.innerHTML = '';
        if (!this.currentSentence) return;

        const words = this.currentSentence.text.split(/\s+/);

        words.forEach((word, index) => {
            const wordEl = document.createElement('div');
            wordEl.className     = 'word-item';
            wordEl.draggable     = true;
            wordEl.dataset.word  = word;
            wordEl.dataset.index = index;
            wordEl.textContent   = word;  // plain text only — no POS tag spoilers
            this.wordBankContainer.appendChild(wordEl);
        });
    }

    // ─── Drag and Drop ─────────────────────────────────────────────────────────

    handleDragStart(e) {
        if (!e.target.classList.contains('word-item')) return;
        e.target.classList.add('dragging');
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', e.target.dataset.index);
    }

    handleDragEnd(e) {
        if (e.target.classList.contains('word-item')) {
            e.target.classList.remove('dragging');
        }
    }

    handleDragOver(e) {
        e.preventDefault();
        e.currentTarget.classList.add('drag-over');
        e.dataTransfer.dropEffect = 'move';
    }

    handleDragLeave(e) {
        e.currentTarget.classList.remove('drag-over');
    }

    handleDrop(e, dropZone) {
        e.preventDefault();
        dropZone.classList.remove('drag-over');
        const dragging = document.querySelector('.word-item.dragging');
        if (!dragging) return;
        dragging.classList.remove('dragging');
        dropZone.appendChild(dragging);
    }

    handleDropToBank(e) {
        e.preventDefault();
        this.wordBankContainer.classList.remove('drag-over');
        const dragging = document.querySelector('.word-item.dragging');
        if (!dragging) return;
        dragging.classList.remove('dragging');
        this.wordBankContainer.appendChild(dragging);
        this.restoreWordBankOrder();
    }

    // ─── Diagram Reset ─────────────────────────────────────────────────────────

    resetDiagram() {
        Object.values(this.dropZones).forEach(zone => {
            while (zone.firstChild) {
                this.wordBankContainer.appendChild(zone.firstChild);
            }
        });
        this.restoreWordBankOrder();
        this.clearZoneHighlights();
    }

    restoreWordBankOrder() {
        const words = Array.from(this.wordBankContainer.children);
        words.sort((a, b) => parseInt(a.dataset.index) - parseInt(b.dataset.index));
        words.forEach(w => this.wordBankContainer.appendChild(w));
    }

    clearZoneHighlights() {
        document.querySelectorAll('.diagram-zone').forEach(z => {
            z.classList.remove('correct', 'incorrect');
        });
    }

    // ─── Answer Checking ───────────────────────────────────────────────────────
    // Order-independent: words can be placed in any order within a zone.
    // Punctuation-tolerant: trailing commas/periods are stripped before comparing.

    checkAnswer() {
        if (!this.currentSentence) return;

        this.totalAttempts++;

        const expected = this.normalizeDiagram(this.currentSentence.diagram);
        const zoneKeys = Object.keys(this.dropZones);
        let allCorrect = true;

        zoneKeys.forEach(key => {
            const dropZone = this.dropZones[key];
            if (!dropZone) return;

            const placed = Array.from(dropZone.querySelectorAll('.word-item'))
                               .map(el => this.cleanWord(el.dataset.word));
            const exp    = (expected[key] || []).map(w => this.cleanWord(w));

            // Sort both so placement order within a zone doesn't matter
            const placedSorted = [...placed].sort();
            const expSorted    = [...exp].sort();

            const correct  = this.arraysMatch(placedSorted, expSorted);
            const zoneWrong = (exp.length > 0 && !correct) ||
                              (exp.length === 0 && placed.length > 0);
            if (zoneWrong) allCorrect = false;

            const zoneEl = dropZone.closest('.diagram-zone');
            zoneEl.classList.remove('correct', 'incorrect');
            if (exp.length > 0 || placed.length > 0) {
                zoneEl.classList.add(correct ? 'correct' : 'incorrect');
            }
        });

        if (allCorrect) {
            this.correctAttempts++;
            this.streak++;
            const points = Math.max(10, 10 * this.streak);
            this.score  += points;
            this.showFeedback(true, expected, points);
        } else {
            this.streak = 0;
            this.showFeedback(false, expected, 0);
        }

        this.updateStats();
    }

    // Strip trailing punctuation and lowercase for reliable comparison
    cleanWord(word) {
        return word.replace(/[.,!?;:'"()\-]+$/g, '').toLowerCase();
    }

    // Flatten all diagram formats into the 6 display zones
    normalizeDiagram(diagram) {
        const result = {
            subject: [], verb: [], object: [],
            adjective: [], adverb: [], prepositional: []
        };
        if (!diagram) return result;

        const merge = (target, src) => {
            if (Array.isArray(src)) result[target].push(...src);
        };

        // Flat format
        merge('subject',       diagram.subject);
        merge('verb',          diagram.verb);
        merge('object',        diagram.object);
        merge('adjective',     diagram.adjective);
        merge('adverb',        diagram.adverb);
        merge('prepositional', diagram.prepositional);

        // Compound format (clause1 / clause2)
        if (diagram.clause1) {
            merge('subject', diagram.clause1.subject);
            merge('verb',    diagram.clause1.verb);
            merge('object',  diagram.clause1.object);
        }
        if (diagram.clause2) {
            merge('subject', diagram.clause2.subject);
            merge('verb',    diagram.clause2.verb);
            merge('object',  diagram.clause2.object);
        }

        // Complex format (independent / dependent)
        if (diagram.independent && !Array.isArray(diagram.independent)) {
            merge('subject', diagram.independent.subject);
            merge('verb',    diagram.independent.verb);
            merge('object',  diagram.independent.object);
        }
        if (diagram.dependent && Array.isArray(diagram.dependent)) {
            merge('prepositional', diagram.dependent);
        }

        return result;
    }

    arraysMatch(a, b) {
        return a.length === b.length && a.every((v, i) => v === b[i]);
    }

    // ─── Feedback ──────────────────────────────────────────────────────────────

    showFeedback(correct, expected, points) {
        this.feedbackSection.classList.remove('hidden');

        if (correct) {
            this.feedbackTitle.textContent             = '✅ Correct!';
            this.feedbackMessage.textContent           = `Great work! +${points} points`;
            this.feedbackSection.style.borderLeftColor = 'var(--success-color)';
        } else {
            this.feedbackTitle.textContent             = '❌ Not quite!';
            this.feedbackMessage.textContent           = 'Review the correct placement below, then continue.';
            this.feedbackSection.style.borderLeftColor = 'var(--error-color)';
        }

        this.explanationDiv.textContent = this.currentSentence.explanation || '';

        const labels = {
            subject: 'Subject', verb: 'Verb', object: 'Object',
            adjective: 'Adjectives', adverb: 'Adverbs',
            prepositional: 'Prepositional Phrases'
        };

        let html = '<strong>Correct placement:</strong><br><br>';
        Object.entries(expected).forEach(([zone, words]) => {
            if (words.length > 0) {
                html += `<strong>${labels[zone]}:</strong> ${words.join(' ')}<br>`;
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
        this.streak = 0;
        this.totalAttempts++;
        this.sentencesAtCurrentLevel++;  // skipping still counts toward progression
        this.updateStats();
        this.loadNewSentence();
    }

    // ─── Hint ──────────────────────────────────────────────────────────────────

    showHint() {
        if (!this.currentSentence) return;
        this.hintText.textContent = this.currentSentence.explanation ||
                                    'Study the sentence structure carefully.';
        this.hintModal.classList.remove('hidden');
    }

    hideHint() {
        this.hintModal.classList.add('hidden');
    }

    // ─── Share ─────────────────────────────────────────────────────────────────

    shareGame() {
        const url = window.location.href;
        if (navigator.share) {
            navigator.share({
                title: 'Sentence Diagramming Game',
                text: 'Master SAT/ACT grammar through interactive sentence diagramming!',
                url
            }).catch(() => {});
        } else {
            navigator.clipboard.writeText(url)
                .then(()  => this.showShareMessage('Link copied to clipboard!'))
                .catch(() => this.showShareMessage('Failed to copy link.'));
        }
    }

    showShareMessage(msg) {
        this.shareMessage.textContent = msg;
        this.shareMessage.classList.remove('hidden');
        setTimeout(() => this.shareMessage.classList.add('hidden'), 3000);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new SentenceDiagrammingGame();
});

// Sentence Diagramming Game - script-integrated.js
// Fixed: ID mismatches, drop zone architecture, word bank population,
//        checkWin logic, accuracy stat, and sentences data wiring.

class SentenceDiagrammingGame {
    constructor() {
        // professionalSentences is declared globally by sentences-100-complete.js
        this.sentences = (typeof professionalSentences !== 'undefined') ? professionalSentences : {};
        this.currentSentence = null;
        this.currentIndex = -1;
        this.score = 0;
        this.level = 1;
        this.streak = 0;
        this.totalAttempts = 0;
        this.correctAttempts = 0;
        this.difficulty = 1;

        this.initializeElements();
        this.attachEventListeners();
        this.loadNewSentence();
    }

    // ─── Element Wiring ────────────────────────────────────────────────────────

    initializeElements() {
        // Sentence display — matches id="sentence" in index.html
        this.sentenceDisplay    = document.getElementById('sentence');
        this.sentenceTypeEl     = document.getElementById('sentence-type');

        // Word bank — matches id="word-bank" in index.html
        this.wordBankContainer  = document.getElementById('word-bank');

        // Stats — all present in index.html
        this.scoreEl            = document.getElementById('score');
        this.levelEl            = document.getElementById('level');
        this.streakEl           = document.getElementById('streak');
        this.accuracyEl         = document.getElementById('accuracy');

        // Buttons — corrected IDs to match index.html
        this.checkAnswerBtn     = document.getElementById('check-answer');
        this.hintBtn            = document.getElementById('hint');
        this.skipBtn            = document.getElementById('skip');
        this.resetBtn           = document.getElementById('reset');
        this.nextSentenceBtn    = document.getElementById('next-sentence');
        this.shareBtn           = document.getElementById('share-btn');
        this.shareMessage       = document.getElementById('share-message');

        // Feedback section
        this.feedbackSection    = document.getElementById('feedback');
        this.feedbackTitle      = document.getElementById('feedback-title');
        this.feedbackMessage    = document.getElementById('feedback-message');
        this.explanationDiv     = document.getElementById('explanation');
        this.correctDiagramDiv  = document.getElementById('correct-diagram');

        // Hint modal — uses .close class inside the modal
        this.hintModal          = document.getElementById('hint-modal');
        this.hintText           = document.getElementById('hint-text');
        this.closeModalBtn      = document.querySelector('#hint-modal .close');

        // Drop zones — keyed by data-zone attribute, target the inner drop area
        // Zones in HTML: subject, verb, object, adjective, adverb, prepositional
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

        // Close hint modal on backdrop click
        this.hintModal.addEventListener('click', (e) => {
            if (e.target === this.hintModal) this.hideHint();
        });

        // Drag events on word bank (source)
        this.wordBankContainer.addEventListener('dragstart', (e) => this.handleDragStart(e));
        this.wordBankContainer.addEventListener('dragend',   (e) => this.handleDragEnd(e));

        // Allow words to be dragged back into word bank
        this.wordBankContainer.addEventListener('dragover',  (e) => this.handleDragOver(e));
        this.wordBankContainer.addEventListener('dragleave', (e) => this.handleDragLeave(e));
        this.wordBankContainer.addEventListener('drop',      (e) => this.handleDropToBank(e));

        // Drag events on each drop zone
        Object.values(this.dropZones).forEach(zone => {
            zone.addEventListener('dragover',  (e) => this.handleDragOver(e));
            zone.addEventListener('dragleave', (e) => this.handleDragLeave(e));
            zone.addEventListener('drop',      (e) => this.handleDrop(e, zone));
        });

        // Also allow dragging between zones — attach dragstart to the diagram canvas
        document.getElementById('diagram-canvas').addEventListener('dragstart', (e) => {
            if (e.target.classList.contains('word-item')) this.handleDragStart(e);
        });
        document.getElementById('diagram-canvas').addEventListener('dragend', (e) => {
            if (e.target.classList.contains('word-item')) this.handleDragEnd(e);
        });
    }

    // ─── Sentence Loading ──────────────────────────────────────────────────────

    loadNewSentence() {
        this.feedbackSection.classList.add('hidden');
        this.clearZoneHighlights();

        const available = this.sentences[this.difficulty];

        if (!available || available.length === 0) {
            if (this.difficulty < 5) {
                this.difficulty++;
                this.level = this.difficulty;
                this.loadNewSentence();
            } else {
                this.feedbackTitle.textContent   = '🎉 Congratulations!';
                this.feedbackMessage.textContent = 'You have completed all levels!';
                this.feedbackSection.classList.remove('hidden');
            }
            return;
        }

        let idx;
        do {
            idx = Math.floor(Math.random() * available.length);
        } while (idx === this.currentIndex && available.length > 1);

        this.currentIndex    = idx;
        this.currentSentence = available[idx];

        this.displaySentence();
        this.resetDiagram();
        this.populateWordBank();
        this.updateStats();
    }

    displaySentence() {
        if (!this.currentSentence) return;
        this.sentenceDisplay.textContent = this.currentSentence.text;

        const type = this.currentSentence.type || '';
        this.sentenceTypeEl.textContent = type.charAt(0).toUpperCase() + type.slice(1);
        this.sentenceTypeEl.style.display = 'inline-block';
    }

    // ─── Word Bank ─────────────────────────────────────────────────────────────

    populateWordBank() {
        this.wordBankContainer.innerHTML = '';
        if (!this.currentSentence) return;

        // Split on spaces; preserve punctuation attached to words as displayed
        const words = this.currentSentence.text.split(/\s+/);

        words.forEach((word, index) => {
            const wordEl = document.createElement('div');
            wordEl.className    = 'word-item';
            wordEl.draggable    = true;
            wordEl.dataset.word  = word;
            wordEl.dataset.index = index;

            const wordText = document.createElement('span');
            wordText.className   = 'word-text';
            wordText.textContent = word;
            wordEl.appendChild(wordText);

            // POS tag lookup — try the raw word and a punctuation-stripped version
            const pos = this.lookupPos(word);
            if (pos) {
                const posTag = document.createElement('span');
                posTag.className   = `word-pos-tag ${pos}`;
                posTag.textContent = this.getPosAbbreviation(pos);
                wordEl.appendChild(posTag);
            }

            this.wordBankContainer.appendChild(wordEl);
        });
    }

    lookupPos(word) {
        if (!this.currentSentence || !this.currentSentence.partsOfSpeech) return null;
        const pos = this.currentSentence.partsOfSpeech;
        // Try exact match first, then strip punctuation
        return pos[word] || pos[word.replace(/[,.'";:!?()]/g, '')] || null;
    }

    getPosAbbreviation(pos) {
        const map = {
            subject: 'SUBJ', verb: 'VERB', object: 'OBJ',
            adjective: 'ADJ', adverb: 'ADV', preposition: 'PREP',
            conjunction: 'CONJ', article: 'ART', pronoun: 'PRO',
            noun: 'NOUN', subordinating_conjunction: 'SCONJ',
            coordinating_conjunction: 'CCONJ', participle: 'PART',
            infinitive: 'INF', interjection: 'INTJ', transition: 'TRANS'
        };
        return map[pos] || pos.slice(0, 4).toUpperCase();
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
        // Return all words from drop zones to the word bank
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

    checkAnswer() {
        if (!this.currentSentence) return;

        this.totalAttempts++;

        const expected = this.normalizeDiagram(this.currentSentence.diagram);
        const zoneKeys = Object.keys(this.dropZones);

        let allCorrect = true;

        zoneKeys.forEach(key => {
            const dropZone = this.dropZones[key];
            if (!dropZone) return;

            const placed   = Array.from(dropZone.querySelectorAll('.word-item')).map(el => el.dataset.word);
            const exp      = expected[key] || [];
            const correct  = this.arraysMatch(placed, exp);

            // A zone is wrong if: it has expected words placed incorrectly,
            // OR it has unexpected words placed in it.
            const zoneWrong = (exp.length > 0 && !correct) || (exp.length === 0 && placed.length > 0);
            if (zoneWrong) allCorrect = false;

            // Visual highlight on the parent .diagram-zone
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

    // Flatten the many diagram formats into the 6 zones we show on screen.
    normalizeDiagram(diagram) {
        const result = { subject: [], verb: [], object: [], adjective: [], adverb: [], prepositional: [] };
        if (!diagram) return result;

        const merge = (target, src) => { if (Array.isArray(src)) result[target].push(...src); };

        // Flat format (Levels 1, most of 3)
        merge('subject',       diagram.subject);
        merge('verb',          diagram.verb);
        merge('object',        diagram.object);
        merge('adjective',     diagram.adjective);
        merge('adverb',        diagram.adverb);
        merge('prepositional', diagram.prepositional);

        // Compound format with clause1 / clause2
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

        // Complex format with independent / dependent sub-objects
        if (diagram.independent && typeof diagram.independent === 'object' && !Array.isArray(diagram.independent)) {
            merge('subject', diagram.independent.subject);
            merge('verb',    diagram.independent.verb);
            merge('object',  diagram.independent.object);
        }
        if (diagram.dependent) {
            if (Array.isArray(diagram.dependent)) {
                merge('prepositional', diagram.dependent);
            } else if (diagram.dependent.subject) {
                // Nested dependent clause — flatten subject/verb/object into prepositional zone
                const words = [
                    ...(diagram.dependent.subject || []),
                    ...(diagram.dependent.verb    || []),
                    ...(diagram.dependent.object  || [])
                ];
                if (words.length) result.prepositional.push(...words);
            }
        }

        return result;
    }

    arraysMatch(a, b) {
        return a.length === b.length && a.every((v, i) => v === b[i]);
    }

    // ─── Feedback Display ──────────────────────────────────────────────────────

    showFeedback(correct, expected, points) {
        this.feedbackSection.classList.remove('hidden');

        if (correct) {
            this.feedbackTitle.textContent       = '✅ Correct!';
            this.feedbackMessage.textContent     = `Great work! +${points} points`;
            this.feedbackSection.style.borderLeftColor = 'var(--success-color)';
        } else {
            this.feedbackTitle.textContent       = '❌ Not quite!';
            this.feedbackMessage.textContent     = 'Check the correct placement below, then move on.';
            this.feedbackSection.style.borderLeftColor = 'var(--error-color)';
        }

        this.explanationDiv.textContent = this.currentSentence.explanation || '';

        const labels = {
            subject: 'Subject', verb: 'Verb', object: 'Object',
            adjective: 'Adjectives', adverb: 'Adverbs', prepositional: 'Prepositional Phrases'
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
        this.scoreEl.textContent   = this.score;
        this.levelEl.textContent   = this.level;
        this.streakEl.textContent  = this.streak;
        const pct = this.totalAttempts > 0
            ? Math.round((this.correctAttempts / this.totalAttempts) * 100)
            : 100;
        this.accuracyEl.textContent = `${pct}%`;
    }

    // ─── Skip ──────────────────────────────────────────────────────────────────

    skipSentence() {
        this.streak = 0;
        this.totalAttempts++;
        this.updateStats();
        this.loadNewSentence();
    }

    // ─── Hint Modal ────────────────────────────────────────────────────────────

    showHint() {
        if (!this.currentSentence) return;
        this.hintText.textContent = this.currentSentence.explanation || 'Study the sentence structure carefully.';
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

// Boot once the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new SentenceDiagrammingGame();
});

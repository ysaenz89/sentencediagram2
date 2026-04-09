// sentences-100-complete.js
// Each sentence has two diagram definitions:
//   chunks — phrase-level (Phase A): emphasizes clause relationships and modifiers
//   words  — word-level   (Phase B): individual words assigned to RK zones
//
// Zones in both phases:
//   subject        → main baseline, left
//   verb           → main baseline, center
//   object         → main baseline, right
//   subjectModifier→ diagonal below subject (adjectives, relative/participial clauses)
//   adverb         → diagonal below verb (adverbs, adverbial phrases)
//   prepositional  → sub-baseline (dependent clauses, prep phrases, second IC)

const professionalSentences = {

    // ── Level 1 — Basic Sentences ────────────────────────────────────────────
    1: [
        {
            text: "The philosopher contemplated existence.",
            type: "simple",
            difficulty: 1,
            explanation: "A simple sentence. 'The philosopher' is the subject. 'contemplated' is the verb. 'existence' is the direct object.",
            partsOfSpeech: {
                "The": "article", "philosopher": "subject",
                "contemplated": "verb", "existence": "object"
            },
            diagram: {
                chunks: {
                    subject: ["The philosopher"],
                    verb: ["contemplated"],
                    object: ["existence"]
                },
                words: {
                    subject: ["The", "philosopher"],
                    verb: ["contemplated"],
                    object: ["existence"]
                }
            }
        },
        {
            text: "Scientists analyze data carefully.",
            type: "simple",
            difficulty: 1,
            explanation: "A simple sentence. 'Scientists' is the subject. 'analyze' is the verb. 'data' is the direct object. 'carefully' is an adverb modifying the verb.",
            partsOfSpeech: {
                "Scientists": "subject", "analyze": "verb",
                "data": "object", "carefully": "adverb"
            },
            diagram: {
                chunks: {
                    subject: ["Scientists"],
                    verb: ["analyze"],
                    object: ["data"],
                    adverb: ["carefully"]
                },
                words: {
                    subject: ["Scientists"],
                    verb: ["analyze"],
                    object: ["data"],
                    adverb: ["carefully"]
                }
            }
        },
        {
            text: "Students study diligently.",
            type: "simple",
            difficulty: 1,
            explanation: "A simple sentence. 'Students' is the subject. 'study' is the verb. 'diligently' is an adverb modifying the verb.",
            partsOfSpeech: {
                "Students": "subject", "study": "verb", "diligently": "adverb"
            },
            diagram: {
                chunks: {
                    subject: ["Students"],
                    verb: ["study"],
                    adverb: ["diligently"]
                },
                words: {
                    subject: ["Students"],
                    verb: ["study"],
                    adverb: ["diligently"]
                }
            }
        }
    ],

    // ── Level 2 — Compound Sentences ─────────────────────────────────────────
    2: [
        {
            text: "The historian researched primary sources, and the archaeologist uncovered artifacts.",
            type: "compound",
            difficulty: 2,
            explanation: "A compound sentence: two independent clauses joined by the coordinating conjunction 'and.' Each independent clause has its own subject and verb. In Phase A, the second independent clause appears as a chunk on the sub-baseline to show how the two clauses connect.",
            partsOfSpeech: {
                "The": "article", "historian": "subject", "researched": "verb",
                "primary": "adjective", "sources,": "object", "and": "conjunction",
                "the": "article", "archaeologist": "subject",
                "uncovered": "verb", "artifacts": "object"
            },
            diagram: {
                chunks: {
                    subject: ["The historian"],
                    verb: ["researched"],
                    object: ["primary sources,"],
                    prepositional: ["[INDEPENDENT CLAUSE 2] and the archaeologist uncovered artifacts"]
                },
                words: {
                    subject: ["The", "historian"],
                    verb: ["researched"],
                    object: ["primary", "sources,"],
                    prepositional: ["and", "the", "archaeologist", "uncovered", "artifacts"]
                }
            }
        },
        {
            text: "Politicians debate policies; journalists report on their decisions.",
            type: "compound",
            difficulty: 2,
            explanation: "A compound sentence: two independent clauses joined by a semicolon. Each clause has its own subject and verb. On the sub-baseline, the second independent clause shows how the two thoughts connect without a conjunction.",
            partsOfSpeech: {
                "Politicians": "subject", "debate": "verb", "policies;": "object",
                "journalists": "subject", "report": "verb",
                "on": "preposition", "their": "pronoun", "decisions": "noun"
            },
            diagram: {
                chunks: {
                    subject: ["Politicians"],
                    verb: ["debate"],
                    object: ["policies;"],
                    prepositional: ["[INDEPENDENT CLAUSE 2] journalists report on their decisions"]
                },
                words: {
                    subject: ["Politicians"],
                    verb: ["debate"],
                    object: ["policies;"],
                    prepositional: ["journalists", "report", "on", "their", "decisions"]
                }
            }
        }
    ],

    // ── Level 3 — Complex Sentences ───────────────────────────────────────────
    3: [
        {
            text: "The concept of the 'social contract,' which was articulated most famously by Rousseau in his treatise of 1762, presupposes that individuals willingly surrender certain natural freedoms to a governing authority in exchange for the protection of their remaining rights and the maintenance of civil order.",
            type: "complex",
            difficulty: 3,
            explanation: "The main subject is 'The concept.' It is modified by the prepositional phrase 'of the social contract' and by the non-restrictive relative clause 'which was articulated...1762,' — both hang below the subject. The main verb is 'presupposes.' The direct object is the entire noun clause 'that individuals...authority,' which acts as a thing that is presupposed. The prepositional phrases 'in exchange for...civil order' modify within that noun clause and appear on the sub-baseline.",
            partsOfSpeech: {
                "The": "article", "concept": "subject", "of": "preposition",
                "the": "article", "'social": "adjective", "contract,'": "noun",
                "which": "pronoun", "was": "verb", "articulated": "participle",
                "most": "adverb", "famously": "adverb", "by": "preposition",
                "Rousseau": "noun", "in": "preposition", "his": "pronoun",
                "treatise": "noun", "1762,": "noun", "presupposes": "verb",
                "that": "subordinating_conjunction", "individuals": "noun",
                "willingly": "adverb", "surrender": "verb", "certain": "adjective",
                "natural": "adjective", "freedoms": "noun", "to": "preposition",
                "a": "article", "governing": "adjective", "authority": "noun"
            },
            diagram: {
                chunks: {
                    subject: ["The concept of the 'social contract,'"],
                    subjectModifier: ["which was articulated most famously by Rousseau in his treatise of 1762,"],
                    verb: ["presupposes"],
                    object: ["that individuals willingly surrender certain natural freedoms to a governing authority"],
                    prepositional: ["in exchange for the protection of their remaining rights and the maintenance of civil order"]
                },
                words: {
                    subject: ["The", "concept"],
                    subjectModifier: ["of", "the", "'social", "contract,'", "which", "was", "articulated", "most", "famously", "by", "Rousseau", "in", "his", "treatise", "of", "1762,"],
                    verb: ["presupposes"],
                    object: ["that", "individuals", "willingly", "surrender", "certain", "natural", "freedoms", "to", "a", "governing", "authority"],
                    prepositional: ["in", "exchange", "for", "the", "protection", "of", "their", "remaining", "rights", "and", "the", "maintenance", "of", "civil", "order"]
                }
            }
        },
        {
            text: "The Renaissance, which originated in the prosperous city-states of northern Italy during the fourteenth century, represented a dramatic cultural and intellectual transformation that fundamentally redefined European conceptions of art, science, and humanity's relationship to the divine.",
            type: "complex",
            difficulty: 3,
            explanation: "The main subject is 'The Renaissance.' The non-restrictive relative clause 'which originated...fourteenth century,' modifies the subject and hangs below it. The main verb is 'represented.' The direct object is 'a dramatic cultural and intellectual transformation.' The relative clause 'that fundamentally redefined...divine' modifies 'transformation' and appears on the sub-baseline.",
            partsOfSpeech: {
                "The": "article", "Renaissance,": "subject", "which": "pronoun",
                "originated": "verb", "in": "preposition", "the": "article",
                "prosperous": "adjective", "city-states": "noun", "of": "preposition",
                "northern": "adjective", "Italy": "noun", "during": "preposition",
                "fourteenth": "adjective", "century,": "noun", "represented": "verb",
                "a": "article", "dramatic": "adjective", "cultural": "adjective",
                "and": "coordinating_conjunction", "intellectual": "adjective",
                "transformation": "noun"
            },
            diagram: {
                chunks: {
                    subject: ["The Renaissance,"],
                    subjectModifier: ["which originated in the prosperous city-states of northern Italy during the fourteenth century,"],
                    verb: ["represented"],
                    object: ["a dramatic cultural and intellectual transformation"],
                    prepositional: ["that fundamentally redefined European conceptions of art, science, and humanity's relationship to the divine"]
                },
                words: {
                    subject: ["The", "Renaissance,"],
                    subjectModifier: ["which", "originated", "in", "the", "prosperous", "city-states", "of", "northern", "Italy", "during", "the", "fourteenth", "century,"],
                    verb: ["represented"],
                    object: ["a", "dramatic", "cultural", "and", "intellectual", "transformation"],
                    prepositional: ["that", "fundamentally", "redefined", "European", "conceptions", "of", "art,", "science,", "and", "humanity's", "relationship", "to", "the", "divine"]
                }
            }
        },
        {
            text: "Because the oral traditions of indigenous cultures were systematically suppressed during centuries of colonial expansion, contemporary anthropologists face the formidable challenge of reconstructing these rich epistemological frameworks from fragmentary evidence and the often biased accounts of European observers.",
            type: "complex",
            difficulty: 3,
            explanation: "The sentence opens with an adverbial dependent clause, 'Because the oral traditions...colonial expansion,' — it modifies the main verb and goes on the sub-baseline. The main subject is 'contemporary anthropologists.' The main verb is 'face.' The direct object is 'the formidable challenge,' and the long prepositional phrase 'of reconstructing...observers' modifies 'challenge' on the sub-baseline.",
            partsOfSpeech: {
                "Because": "subordinating_conjunction", "the": "article",
                "oral": "adjective", "traditions": "noun", "contemporary": "adjective",
                "anthropologists": "subject", "face": "verb", "formidable": "adjective",
                "challenge": "object"
            },
            diagram: {
                chunks: {
                    prepositional: ["[ADVERBIAL CLAUSE] Because the oral traditions of indigenous cultures were systematically suppressed during centuries of colonial expansion,"],
                    subject: ["contemporary anthropologists"],
                    verb: ["face"],
                    object: ["the formidable challenge of reconstructing these rich epistemological frameworks from fragmentary evidence and the often biased accounts of European observers"]
                },
                words: {
                    prepositional: ["Because", "the", "oral", "traditions", "of", "indigenous", "cultures", "were", "systematically", "suppressed", "during", "centuries", "of", "colonial", "expansion,", "of", "reconstructing", "these", "rich", "epistemological", "frameworks", "from", "fragmentary", "evidence", "and", "the", "often", "biased", "accounts", "of", "European", "observers"],
                    subject: ["contemporary", "anthropologists"],
                    verb: ["face"],
                    object: ["the", "formidable", "challenge"]
                }
            }
        },
        {
            text: "The existentialist philosophy of Jean-Paul Sartre, which emerged from the devastation of World War II, posits that human existence precedes essence and that individuals must therefore construct their own meaning in an inherently indifferent universe.",
            type: "complex",
            difficulty: 3,
            explanation: "The main subject is 'The existentialist philosophy of Jean-Paul Sartre,' — the prepositional phrase 'of Jean-Paul Sartre' modifies 'philosophy.' The non-restrictive relative clause 'which emerged from the devastation of World War II,' further modifies the subject. The verb is 'posits.' The object consists of two parallel noun clauses: 'that human existence precedes essence' and 'that individuals must therefore construct their own meaning.'",
            partsOfSpeech: {
                "The": "article", "existentialist": "adjective", "philosophy": "subject",
                "posits": "verb"
            },
            diagram: {
                chunks: {
                    subject: ["The existentialist philosophy of Jean-Paul Sartre,"],
                    subjectModifier: ["which emerged from the devastation of World War II,"],
                    verb: ["posits"],
                    object: ["that human existence precedes essence"],
                    prepositional: ["and that individuals must therefore construct their own meaning in an inherently indifferent universe"]
                },
                words: {
                    subject: ["The", "existentialist", "philosophy"],
                    subjectModifier: ["of", "Jean-Paul", "Sartre,", "which", "emerged", "from", "the", "devastation", "of", "World", "War", "II,"],
                    verb: ["posits"],
                    object: ["that", "human", "existence", "precedes", "essence"],
                    prepositional: ["and", "that", "individuals", "must", "therefore", "construct", "their", "own", "meaning", "in", "an", "inherently", "indifferent", "universe"]
                }
            }
        },
        {
            text: "The Harlem Renaissance of the 1920s, though primarily recognized for its extraordinary literary and musical achievements, also catalyzed a broader intellectual movement that challenged prevailing racial hierarchies and articulated a distinctly African American cultural identity.",
            type: "complex",
            difficulty: 3,
            explanation: "The main subject is 'The Harlem Renaissance of the 1920s.' The concessive participial phrase 'though primarily recognized for its extraordinary literary and musical achievements,' modifies the subject and shows contrast. The main verb is 'catalyzed.' The object is 'a broader intellectual movement.' The relative clause 'that challenged...cultural identity' modifies 'movement' and appears on the sub-baseline.",
            partsOfSpeech: {
                "The": "article", "Harlem": "adjective", "Renaissance": "subject",
                "catalyzed": "verb"
            },
            diagram: {
                chunks: {
                    subject: ["The Harlem Renaissance of the 1920s,"],
                    subjectModifier: ["though primarily recognized for its extraordinary literary and musical achievements,"],
                    verb: ["also catalyzed"],
                    object: ["a broader intellectual movement"],
                    prepositional: ["that challenged prevailing racial hierarchies and articulated a distinctly African American cultural identity"]
                },
                words: {
                    subject: ["The", "Harlem", "Renaissance"],
                    subjectModifier: ["of", "the", "1920s,", "though", "primarily", "recognized", "for", "its", "extraordinary", "literary", "and", "musical", "achievements,"],
                    verb: ["also", "catalyzed"],
                    object: ["a", "broader", "intellectual", "movement"],
                    prepositional: ["that", "challenged", "prevailing", "racial", "hierarchies", "and", "articulated", "a", "distinctly", "African", "American", "cultural", "identity"]
                }
            }
        },
        {
            text: "The development of quantum mechanics during the early twentieth century fundamentally challenged classical physics by demonstrating that subatomic particles exhibit both wave-like and particle-like properties.",
            type: "complex",
            difficulty: 3,
            explanation: "The main subject is 'The development of quantum mechanics during the early twentieth century' — the two prepositional phrases 'of quantum mechanics' and 'during the early twentieth century' both modify 'development.' The verb is 'fundamentally challenged.' The object is 'classical physics.' The participial phrase 'by demonstrating that subatomic particles exhibit both wave-like and particle-like properties' modifies the verb and appears on the sub-baseline.",
            partsOfSpeech: {
                "The": "article", "development": "subject",
                "challenged": "verb", "classical": "adjective", "physics": "object"
            },
            diagram: {
                chunks: {
                    subject: ["The development of quantum mechanics during the early twentieth century"],
                    verb: ["fundamentally challenged"],
                    object: ["classical physics"],
                    prepositional: ["by demonstrating that subatomic particles exhibit both wave-like and particle-like properties"]
                },
                words: {
                    subject: ["The", "development"],
                    subjectModifier: ["of", "quantum", "mechanics", "during", "the", "early", "twentieth", "century"],
                    verb: ["fundamentally", "challenged"],
                    object: ["classical", "physics"],
                    prepositional: ["by", "demonstrating", "that", "subatomic", "particles", "exhibit", "both", "wave-like", "and", "particle-like", "properties"]
                }
            }
        },
        {
            text: "Although the Industrial Revolution brought unprecedented economic prosperity to many Western nations, it also created severe environmental degradation and exploitative labor conditions that would eventually inspire social reform movements.",
            type: "complex",
            difficulty: 3,
            explanation: "The sentence opens with an adverbial dependent clause, 'Although the Industrial Revolution brought unprecedented economic prosperity to many Western nations,' — this subordinate clause modifies the main verb and goes on the sub-baseline. The main subject of the independent clause is 'it.' The verb is 'created.' The object is 'severe environmental degradation and exploitative labor conditions.' The relative clause 'that would eventually inspire social reform movements' modifies 'conditions.'",
            partsOfSpeech: {
                "Although": "subordinating_conjunction",
                "it": "subject", "created": "verb"
            },
            diagram: {
                chunks: {
                    prepositional: ["[ADVERBIAL CLAUSE] Although the Industrial Revolution brought unprecedented economic prosperity to many Western nations,"],
                    subject: ["it"],
                    adverb: ["also"],
                    verb: ["created"],
                    object: ["severe environmental degradation and exploitative labor conditions that would eventually inspire social reform movements"]
                },
                words: {
                    prepositional: ["Although", "the", "Industrial", "Revolution", "brought", "unprecedented", "economic", "prosperity", "to", "many", "Western", "nations,", "that", "would", "eventually", "inspire", "social", "reform", "movements"],
                    subject: ["it"],
                    adverb: ["also"],
                    verb: ["created"],
                    object: ["severe", "environmental", "degradation", "and", "exploitative", "labor", "conditions"]
                }
            }
        },
        {
            text: "The feminist movement of the late twentieth century, building upon earlier suffragist victories, successfully challenged patriarchal institutions and expanded opportunities for women in education, politics, and professional careers.",
            type: "complex",
            difficulty: 3,
            explanation: "The main subject is 'The feminist movement of the late twentieth century.' The participial phrase 'building upon earlier suffragist victories,' modifies the subject — it tells us what the movement was doing while acting, and hangs below the subject line. The verb is 'successfully challenged.' The object is 'patriarchal institutions.' The additional verb phrase 'and expanded opportunities for women...' continues on the sub-baseline.",
            partsOfSpeech: {
                "The": "article", "feminist": "adjective", "movement": "subject",
                "challenged": "verb"
            },
            diagram: {
                chunks: {
                    subject: ["The feminist movement of the late twentieth century,"],
                    subjectModifier: ["building upon earlier suffragist victories,"],
                    verb: ["successfully challenged"],
                    object: ["patriarchal institutions"],
                    prepositional: ["and expanded opportunities for women in education, politics, and professional careers"]
                },
                words: {
                    subject: ["The", "feminist", "movement"],
                    subjectModifier: ["of", "the", "late", "twentieth", "century,", "building", "upon", "earlier", "suffragist", "victories,"],
                    verb: ["successfully", "challenged"],
                    object: ["patriarchal", "institutions"],
                    prepositional: ["and", "expanded", "opportunities", "for", "women", "in", "education,", "politics,", "and", "professional", "careers"]
                }
            }
        },
        {
            text: "The discovery of DNA's double helix structure by Watson and Crick in 1953 revolutionized biological sciences and opened new frontiers in genetic research, medicine, and forensic science.",
            type: "complex",
            difficulty: 3,
            explanation: "The subject is 'The discovery of DNA's double helix structure by Watson and Crick in 1953' — three prepositional phrases ('of DNA's double helix structure,' 'by Watson and Crick,' 'in 1953') all modify 'discovery.' The compound verb is 'revolutionized...and opened.' The first object is 'biological sciences.' The compound verb's continuation and second object appear on the sub-baseline.",
            partsOfSpeech: {
                "The": "article", "discovery": "subject", "revolutionized": "verb"
            },
            diagram: {
                chunks: {
                    subject: ["The discovery of DNA's double helix structure by Watson and Crick in 1953"],
                    verb: ["revolutionized"],
                    object: ["biological sciences"],
                    prepositional: ["and opened new frontiers in genetic research, medicine, and forensic science"]
                },
                words: {
                    subject: ["The", "discovery"],
                    subjectModifier: ["of", "DNA's", "double", "helix", "structure", "by", "Watson", "and", "Crick", "in", "1953"],
                    verb: ["revolutionized"],
                    object: ["biological", "sciences"],
                    prepositional: ["and", "opened", "new", "frontiers", "in", "genetic", "research,", "medicine,", "and", "forensic", "science"]
                }
            }
        },
        {
            text: "While ancient Greek philosophers primarily focused on metaphysical questions about the nature of reality and knowledge, modern philosophers have increasingly turned their attention to practical ethical dilemmas and political theory.",
            type: "complex",
            difficulty: 3,
            explanation: "The sentence opens with an adverbial dependent clause, 'While ancient Greek philosophers primarily focused on metaphysical questions about the nature of reality and knowledge,' — the subordinating conjunction 'While' signals a contrast. This clause modifies the main verb and goes on the sub-baseline. The main subject is 'modern philosophers.' The verb is 'have increasingly turned.' The object is 'their attention to practical ethical dilemmas and political theory.'",
            partsOfSpeech: {
                "While": "subordinating_conjunction",
                "modern": "adjective", "philosophers": "subject",
                "turned": "verb"
            },
            diagram: {
                chunks: {
                    prepositional: ["[ADVERBIAL CLAUSE] While ancient Greek philosophers primarily focused on metaphysical questions about the nature of reality and knowledge,"],
                    subject: ["modern philosophers"],
                    verb: ["have increasingly turned"],
                    object: ["their attention to practical ethical dilemmas and political theory"]
                },
                words: {
                    prepositional: ["While", "ancient", "Greek", "philosophers", "primarily", "focused", "on", "metaphysical", "questions", "about", "the", "nature", "of", "reality", "and", "knowledge,"],
                    subject: ["modern", "philosophers"],
                    verb: ["have", "increasingly", "turned"],
                    object: ["their", "attention", "to", "practical", "ethical", "dilemmas", "and", "political", "theory"]
                }
            }
        },
        {
            text: "The invention of the printing press by Johannes Gutenberg around 1440 democratized knowledge by making books more accessible and affordable, thereby accelerating the spread of Renaissance humanism throughout Europe.",
            type: "complex",
            difficulty: 3,
            explanation: "The subject is 'The invention of the printing press by Johannes Gutenberg around 1440' — multiple prepositional phrases modify 'invention.' The verb is 'democratized.' The object is 'knowledge.' The participial phrase 'by making books more accessible and affordable, thereby accelerating the spread of Renaissance humanism throughout Europe' modifies the verb and appears on the sub-baseline.",
            partsOfSpeech: {
                "The": "article", "invention": "subject", "democratized": "verb",
                "knowledge": "object"
            },
            diagram: {
                chunks: {
                    subject: ["The invention of the printing press by Johannes Gutenberg around 1440"],
                    verb: ["democratized"],
                    object: ["knowledge"],
                    prepositional: ["by making books more accessible and affordable, thereby accelerating the spread of Renaissance humanism throughout Europe"]
                },
                words: {
                    subject: ["The", "invention"],
                    subjectModifier: ["of", "the", "printing", "press", "by", "Johannes", "Gutenberg", "around", "1440"],
                    verb: ["democratized"],
                    object: ["knowledge"],
                    prepositional: ["by", "making", "books", "more", "accessible", "and", "affordable,", "thereby", "accelerating", "the", "spread", "of", "Renaissance", "humanism", "throughout", "Europe"]
                }
            }
        },
        {
            text: "The environmental movement that emerged during the 1960s and 1970s successfully raised public awareness about pollution, conservation, and climate change, leading to landmark legislation such as the Clean Air Act.",
            type: "complex",
            difficulty: 3,
            explanation: "The subject is 'The environmental movement.' The restrictive relative clause 'that emerged during the 1960s and 1970s' modifies 'movement' — it is essential to identifying which movement we mean, so it hangs below the subject. The verb is 'successfully raised.' The object is 'public awareness about pollution, conservation, and climate change.' The participial phrase 'leading to landmark legislation' modifies the verb.",
            partsOfSpeech: {
                "The": "article", "environmental": "adjective", "movement": "subject",
                "raised": "verb"
            },
            diagram: {
                chunks: {
                    subject: ["The environmental movement"],
                    subjectModifier: ["that emerged during the 1960s and 1970s"],
                    verb: ["successfully raised"],
                    object: ["public awareness about pollution, conservation, and climate change,"],
                    prepositional: ["leading to landmark legislation such as the Clean Air Act"]
                },
                words: {
                    subject: ["The", "environmental", "movement"],
                    subjectModifier: ["that", "emerged", "during", "the", "1960s", "and", "1970s"],
                    verb: ["successfully", "raised"],
                    object: ["public", "awareness", "about", "pollution,", "conservation,", "and", "climate", "change,"],
                    prepositional: ["leading", "to", "landmark", "legislation", "such", "as", "the", "Clean", "Air", "Act"]
                }
            }
        },
        {
            text: "The cognitive revolution in psychology during the 1950s and 1960s challenged behaviorist assumptions by emphasizing mental processes such as memory, attention, and problem-solving.",
            type: "complex",
            difficulty: 3,
            explanation: "The subject is 'The cognitive revolution in psychology during the 1950s and 1960s' — two prepositional phrases modify 'revolution.' The verb is 'challenged.' The object is 'behaviorist assumptions.' The participial phrase 'by emphasizing mental processes such as memory, attention, and problem-solving' modifies the verb and sits on the sub-baseline.",
            partsOfSpeech: {
                "The": "article", "cognitive": "adjective", "revolution": "subject",
                "challenged": "verb"
            },
            diagram: {
                chunks: {
                    subject: ["The cognitive revolution in psychology during the 1950s and 1960s"],
                    verb: ["challenged"],
                    object: ["behaviorist assumptions"],
                    prepositional: ["by emphasizing mental processes such as memory, attention, and problem-solving"]
                },
                words: {
                    subject: ["The", "cognitive", "revolution"],
                    subjectModifier: ["in", "psychology", "during", "the", "1950s", "and", "1960s"],
                    verb: ["challenged"],
                    object: ["behaviorist", "assumptions"],
                    prepositional: ["by", "emphasizing", "mental", "processes", "such", "as", "memory,", "attention,", "and", "problem-solving"]
                }
            }
        },
        {
            text: "The civil rights movement of the 1950s and 1960s, led by charismatic figures like Martin Luther King Jr. and Malcolm X, successfully dismantled legal segregation and inspired subsequent social justice movements across the United States.",
            type: "complex",
            difficulty: 3,
            explanation: "The subject is 'The civil rights movement of the 1950s and 1960s.' The participial phrase 'led by charismatic figures like Martin Luther King Jr. and Malcolm X,' is a past-participial modifier of the subject. The verb is 'successfully dismantled.' The object is 'legal segregation.' The compound continuation 'and inspired subsequent social justice movements...' goes on the sub-baseline.",
            partsOfSpeech: {
                "The": "article", "civil": "adjective", "rights": "noun",
                "movement": "subject", "dismantled": "verb"
            },
            diagram: {
                chunks: {
                    subject: ["The civil rights movement of the 1950s and 1960s,"],
                    subjectModifier: ["led by charismatic figures like Martin Luther King Jr. and Malcolm X,"],
                    verb: ["successfully dismantled"],
                    object: ["legal segregation"],
                    prepositional: ["and inspired subsequent social justice movements across the United States"]
                },
                words: {
                    subject: ["The", "civil", "rights", "movement"],
                    subjectModifier: ["of", "the", "1950s", "and", "1960s,", "led", "by", "charismatic", "figures", "like", "Martin", "Luther", "King", "Jr.", "and", "Malcolm", "X,"],
                    verb: ["successfully", "dismantled"],
                    object: ["legal", "segregation"],
                    prepositional: ["and", "inspired", "subsequent", "social", "justice", "movements", "across", "the", "United", "States"]
                }
            }
        },
        {
            text: "The development of artificial intelligence since the mid-twentieth century has transformed numerous industries while raising profound ethical questions about machine consciousness, data privacy, and the future of human employment.",
            type: "complex",
            difficulty: 3,
            explanation: "The subject is 'The development of artificial intelligence since the mid-twentieth century.' The verb is 'has transformed.' The object is 'numerous industries.' The adverbial phrase 'while raising profound ethical questions...' modifies the verb — the subordinating conjunction 'while' signals a concurrent action, and this phrase hangs on the sub-baseline.",
            partsOfSpeech: {
                "The": "article", "development": "subject", "transformed": "verb"
            },
            diagram: {
                chunks: {
                    subject: ["The development of artificial intelligence since the mid-twentieth century"],
                    verb: ["has transformed"],
                    object: ["numerous industries"],
                    prepositional: ["while raising profound ethical questions about machine consciousness, data privacy, and the future of human employment"]
                },
                words: {
                    subject: ["The", "development"],
                    subjectModifier: ["of", "artificial", "intelligence", "since", "the", "mid-twentieth", "century"],
                    verb: ["has", "transformed"],
                    object: ["numerous", "industries"],
                    prepositional: ["while", "raising", "profound", "ethical", "questions", "about", "machine", "consciousness,", "data", "privacy,", "and", "the", "future", "of", "human", "employment"]
                }
            }
        },
        {
            text: "The scientific method, which emphasizes empirical observation, hypothesis testing, and peer review, provides a systematic framework for advancing human knowledge while minimizing the influence of bias and superstition.",
            type: "complex",
            difficulty: 3,
            explanation: "The subject is 'The scientific method.' The non-restrictive relative clause 'which emphasizes empirical observation, hypothesis testing, and peer review,' defines the method and hangs below the subject. The verb is 'provides.' The object is 'a systematic framework.' The purpose phrase 'for advancing human knowledge while minimizing the influence of bias and superstition' hangs on the sub-baseline.",
            partsOfSpeech: {
                "The": "article", "scientific": "adjective", "method,": "subject",
                "provides": "verb"
            },
            diagram: {
                chunks: {
                    subject: ["The scientific method,"],
                    subjectModifier: ["which emphasizes empirical observation, hypothesis testing, and peer review,"],
                    verb: ["provides"],
                    object: ["a systematic framework"],
                    prepositional: ["for advancing human knowledge while minimizing the influence of bias and superstition"]
                },
                words: {
                    subject: ["The", "scientific", "method,"],
                    subjectModifier: ["which", "emphasizes", "empirical", "observation,", "hypothesis", "testing,", "and", "peer", "review,"],
                    verb: ["provides"],
                    object: ["a", "systematic", "framework"],
                    prepositional: ["for", "advancing", "human", "knowledge", "while", "minimizing", "the", "influence", "of", "bias", "and", "superstition"]
                }
            }
        },
        {
            text: "The globalization of economic markets since the 1990s has created unprecedented opportunities for international trade while simultaneously generating concerns about cultural homogenization and environmental sustainability.",
            type: "complex",
            difficulty: 3,
            explanation: "The subject is 'The globalization of economic markets since the 1990s.' The verb is 'has created.' The object is 'unprecedented opportunities for international trade.' The adverbial phrase 'while simultaneously generating concerns...' modifies the verb and goes on the sub-baseline, showing a concurrent consequence.",
            partsOfSpeech: {
                "The": "article", "globalization": "subject", "created": "verb"
            },
            diagram: {
                chunks: {
                    subject: ["The globalization of economic markets since the 1990s"],
                    verb: ["has created"],
                    object: ["unprecedented opportunities for international trade"],
                    prepositional: ["while simultaneously generating concerns about cultural homogenization and environmental sustainability"]
                },
                words: {
                    subject: ["The", "globalization"],
                    subjectModifier: ["of", "economic", "markets", "since", "the", "1990s"],
                    verb: ["has", "created"],
                    object: ["unprecedented", "opportunities", "for", "international", "trade"],
                    prepositional: ["while", "simultaneously", "generating", "concerns", "about", "cultural", "homogenization", "and", "environmental", "sustainability"]
                }
            }
        },
        {
            text: "The psychological theory of cognitive dissonance, first proposed by Leon Festinger in 1957, explains how individuals experience mental discomfort when holding conflicting beliefs and how they resolve this tension through various psychological mechanisms.",
            type: "complex",
            difficulty: 3,
            explanation: "The subject is 'The psychological theory of cognitive dissonance.' The participial phrase 'first proposed by Leon Festinger in 1957,' modifies the subject and hangs below it. The verb is 'explains.' The object consists of two parallel noun clauses: 'how individuals experience mental discomfort when holding conflicting beliefs' and 'how they resolve this tension through various psychological mechanisms.' Both noun clauses go on the sub-baseline.",
            partsOfSpeech: {
                "The": "article", "psychological": "adjective", "theory": "subject",
                "explains": "verb"
            },
            diagram: {
                chunks: {
                    subject: ["The psychological theory of cognitive dissonance,"],
                    subjectModifier: ["first proposed by Leon Festinger in 1957,"],
                    verb: ["explains"],
                    object: ["how individuals experience mental discomfort when holding conflicting beliefs"],
                    prepositional: ["and how they resolve this tension through various psychological mechanisms"]
                },
                words: {
                    subject: ["The", "psychological", "theory"],
                    subjectModifier: ["of", "cognitive", "dissonance,", "first", "proposed", "by", "Leon", "Festinger", "in", "1957,"],
                    verb: ["explains"],
                    object: ["how", "individuals", "experience", "mental", "discomfort", "when", "holding", "conflicting", "beliefs"],
                    prepositional: ["and", "how", "they", "resolve", "this", "tension", "through", "various", "psychological", "mechanisms"]
                }
            }
        },
        {
            text: "The anthropological concept of cultural relativism, which challenges ethnocentric judgments about other societies, emphasizes understanding cultural practices within their own historical and social contexts rather than applying universal moral standards.",
            type: "complex",
            difficulty: 3,
            explanation: "The subject is 'The anthropological concept of cultural relativism.' The non-restrictive relative clause 'which challenges ethnocentric judgments about other societies,' defines the concept and hangs below the subject. The verb is 'emphasizes.' The object is 'understanding cultural practices.' The contrast phrase 'within their own historical and social contexts rather than applying universal moral standards' modifies the object.",
            partsOfSpeech: {
                "The": "article", "anthropological": "adjective", "concept": "subject",
                "emphasizes": "verb"
            },
            diagram: {
                chunks: {
                    subject: ["The anthropological concept of cultural relativism,"],
                    subjectModifier: ["which challenges ethnocentric judgments about other societies,"],
                    verb: ["emphasizes"],
                    object: ["understanding cultural practices"],
                    prepositional: ["within their own historical and social contexts rather than applying universal moral standards"]
                },
                words: {
                    subject: ["The", "anthropological", "concept"],
                    subjectModifier: ["of", "cultural", "relativism,", "which", "challenges", "ethnocentric", "judgments", "about", "other", "societies,"],
                    verb: ["emphasizes"],
                    object: ["understanding", "cultural", "practices"],
                    prepositional: ["within", "their", "own", "historical", "and", "social", "contexts", "rather", "than", "applying", "universal", "moral", "standards"]
                }
            }
        },
        {
            text: "The economic theory of supply and demand, which forms the foundation of market capitalism, explains how prices are determined through the interaction of consumer preferences and producer costs in competitive markets.",
            type: "complex",
            difficulty: 3,
            explanation: "The subject is 'The economic theory of supply and demand.' The non-restrictive relative clause 'which forms the foundation of market capitalism,' adds context and hangs below the subject. The verb is 'explains.' The object is the noun clause 'how prices are determined.' The prepositional phrase 'through the interaction of consumer preferences and producer costs in competitive markets' expands on that clause.",
            partsOfSpeech: {
                "The": "article", "economic": "adjective", "theory": "subject",
                "explains": "verb"
            },
            diagram: {
                chunks: {
                    subject: ["The economic theory of supply and demand,"],
                    subjectModifier: ["which forms the foundation of market capitalism,"],
                    verb: ["explains"],
                    object: ["how prices are determined"],
                    prepositional: ["through the interaction of consumer preferences and producer costs in competitive markets"]
                },
                words: {
                    subject: ["The", "economic", "theory"],
                    subjectModifier: ["of", "supply", "and", "demand,", "which", "forms", "the", "foundation", "of", "market", "capitalism,"],
                    verb: ["explains"],
                    object: ["how", "prices", "are", "determined"],
                    prepositional: ["through", "the", "interaction", "of", "consumer", "preferences", "and", "producer", "costs", "in", "competitive", "markets"]
                }
            }
        }
    ],

    // ── Level 4 — Hard Compound-Complex Sentences ─────────────────────────────
    4: [
        {
            text: "Despite the pervasive influence of Marxist theory on twentieth-century political movements across multiple continents, the fundamental tension between its utopian aspirations and the authoritarian regimes that claimed its mantle remains one of the most debated paradoxes in modern historiography.",
            type: "compound-complex",
            difficulty: 4,
            explanation: "The sentence opens with a long prepositional phrase, 'Despite the pervasive influence of Marxist theory on twentieth-century political movements across multiple continents,' — this adverbial modifier sets up a contrast and goes on the sub-baseline. The subject is 'the fundamental tension between its utopian aspirations and the authoritarian regimes that claimed its mantle.' The verb is 'remains.' The object is 'one of the most debated paradoxes in modern historiography.'",
            partsOfSpeech: {
                "Despite": "preposition", "tension": "subject", "remains": "verb"
            },
            diagram: {
                chunks: {
                    prepositional: ["[PREPOSITIONAL PHRASE] Despite the pervasive influence of Marxist theory on twentieth-century political movements across multiple continents,"],
                    subject: ["the fundamental tension between its utopian aspirations and the authoritarian regimes that claimed its mantle"],
                    verb: ["remains"],
                    object: ["one of the most debated paradoxes in modern historiography"]
                },
                words: {
                    prepositional: ["Despite", "the", "pervasive", "influence", "of", "Marxist", "theory", "on", "twentieth-century", "political", "movements", "across", "multiple", "continents,"],
                    subject: ["the", "fundamental", "tension"],
                    subjectModifier: ["between", "its", "utopian", "aspirations", "and", "the", "authoritarian", "regimes", "that", "claimed", "its", "mantle"],
                    verb: ["remains"],
                    object: ["one", "of", "the", "most", "debated", "paradoxes", "in", "modern", "historiography"]
                }
            }
        },
        {
            text: "Although the standard model of particle physics has successfully predicted the existence of numerous subatomic particles, including the Higgs boson confirmed at CERN in 2012, it nevertheless fails to account for several fundamental phenomena such as dark matter, dark energy, and the observed asymmetry between matter and antimatter.",
            type: "compound-complex",
            difficulty: 4,
            explanation: "The sentence opens with a concessive dependent clause: 'Although the standard model of particle physics has successfully predicted the existence of numerous subatomic particles, including the Higgs boson confirmed at CERN in 2012,' — 'Although' signals that what follows will contrast. This clause goes on the sub-baseline. The main subject is 'it' (referring to the standard model). The adverb 'nevertheless' modifies the verb. The verb is 'fails.' The object is 'to account for several fundamental phenomena...'",
            partsOfSpeech: {
                "Although": "subordinating_conjunction",
                "it": "subject", "fails": "verb"
            },
            diagram: {
                chunks: {
                    prepositional: ["[CONCESSIVE CLAUSE] Although the standard model of particle physics has successfully predicted the existence of numerous subatomic particles, including the Higgs boson confirmed at CERN in 2012,"],
                    subject: ["it"],
                    adverb: ["nevertheless"],
                    verb: ["fails to account for"],
                    object: ["several fundamental phenomena such as dark matter, dark energy, and the observed asymmetry between matter and antimatter"]
                },
                words: {
                    prepositional: ["Although", "the", "standard", "model", "of", "particle", "physics", "has", "successfully", "predicted", "the", "existence", "of", "numerous", "subatomic", "particles,", "including", "the", "Higgs", "boson", "confirmed", "at", "CERN", "in", "2012,"],
                    subject: ["it"],
                    adverb: ["nevertheless"],
                    verb: ["fails", "to", "account", "for"],
                    object: ["several", "fundamental", "phenomena", "such", "as", "dark", "matter,", "dark", "energy,", "and", "the", "observed", "asymmetry", "between", "matter", "and", "antimatter"]
                }
            }
        },
        {
            text: "The Enlightenment's emphasis on reason and individual rights fundamentally reshaped Western political philosophy, yet the revolutionary movements it inspired frequently descended into violence and authoritarian excess, suggesting that abstract ideals are difficult to translate into stable governance.",
            type: "compound-complex",
            difficulty: 4,
            explanation: "The subject of the first independent clause is 'The Enlightenment's emphasis on reason and individual rights.' The verb is 'fundamentally reshaped.' The object is 'Western political philosophy.' The coordinating conjunction 'yet' signals a compound sentence: the second independent clause 'the revolutionary movements it inspired frequently descended into violence and authoritarian excess' contrasts with the first. The participial phrase 'suggesting that abstract ideals are difficult to translate into stable governance' modifies the second clause.",
            partsOfSpeech: {
                "The": "article", "emphasis": "subject", "reshaped": "verb"
            },
            diagram: {
                chunks: {
                    subject: ["The Enlightenment's emphasis on reason and individual rights"],
                    verb: ["fundamentally reshaped"],
                    object: ["Western political philosophy,"],
                    prepositional: ["[CONTRASTING INDEPENDENT CLAUSE] yet the revolutionary movements it inspired frequently descended into violence and authoritarian excess, suggesting that abstract ideals are difficult to translate into stable governance"]
                },
                words: {
                    subject: ["The", "Enlightenment's", "emphasis"],
                    subjectModifier: ["on", "reason", "and", "individual", "rights"],
                    verb: ["fundamentally", "reshaped"],
                    object: ["Western", "political", "philosophy,"],
                    prepositional: ["yet", "the", "revolutionary", "movements", "it", "inspired", "frequently", "descended", "into", "violence", "and", "authoritarian", "excess,", "suggesting", "that", "abstract", "ideals", "are", "difficult", "to", "translate", "into", "stable", "governance"]
                }
            }
        },
        {
            text: "Because colonialism systematically dismantled indigenous economic and social structures, post-colonial nations faced enormous challenges in building stable governments, and many former colonies continue to grapple with the lasting economic inequalities that were deliberately engineered during the colonial period.",
            type: "compound-complex",
            difficulty: 4,
            explanation: "The adverbial dependent clause 'Because colonialism systematically dismantled indigenous economic and social structures,' explains the cause — it goes on the sub-baseline. The first independent clause has subject 'post-colonial nations,' verb 'faced,' and object 'enormous challenges in building stable governments.' The coordinating conjunction 'and' joins a second independent clause: 'many former colonies continue to grapple with the lasting economic inequalities that were deliberately engineered during the colonial period.'",
            partsOfSpeech: {
                "Because": "subordinating_conjunction",
                "nations": "subject", "faced": "verb"
            },
            diagram: {
                chunks: {
                    prepositional: ["[ADVERBIAL CLAUSE] Because colonialism systematically dismantled indigenous economic and social structures,", "[SECOND INDEPENDENT CLAUSE] and many former colonies continue to grapple with the lasting economic inequalities that were deliberately engineered during the colonial period"],
                    subject: ["post-colonial nations"],
                    verb: ["faced"],
                    object: ["enormous challenges in building stable governments,"]
                },
                words: {
                    prepositional: ["Because", "colonialism", "systematically", "dismantled", "indigenous", "economic", "and", "social", "structures,", "and", "many", "former", "colonies", "continue", "to", "grapple", "with", "the", "lasting", "economic", "inequalities", "that", "were", "deliberately", "engineered", "during", "the", "colonial", "period"],
                    subject: ["post-colonial", "nations"],
                    verb: ["faced"],
                    object: ["enormous", "challenges", "in", "building", "stable", "governments,"]
                }
            }
        },
        {
            text: "The rise of nationalism in nineteenth-century Europe both unified previously fragmented regions into cohesive nation-states and simultaneously generated exclusionary ideologies that would ultimately contribute to the catastrophic conflicts of the twentieth century.",
            type: "compound-complex",
            difficulty: 4,
            explanation: "The subject is 'The rise of nationalism in nineteenth-century Europe.' The verb is compound: 'both unified...and simultaneously generated.' The correlative conjunction 'both...and' shows two parallel results. The first object is 'previously fragmented regions into cohesive nation-states.' The second object is 'exclusionary ideologies that would ultimately contribute to the catastrophic conflicts of the twentieth century' — the relative clause modifying 'ideologies' goes on the sub-baseline.",
            partsOfSpeech: {
                "The": "article", "rise": "subject", "unified": "verb"
            },
            diagram: {
                chunks: {
                    subject: ["The rise of nationalism in nineteenth-century Europe"],
                    verb: ["both unified"],
                    object: ["previously fragmented regions into cohesive nation-states"],
                    prepositional: ["and simultaneously generated exclusionary ideologies that would ultimately contribute to the catastrophic conflicts of the twentieth century"]
                },
                words: {
                    subject: ["The", "rise"],
                    subjectModifier: ["of", "nationalism", "in", "nineteenth-century", "Europe"],
                    verb: ["both", "unified"],
                    object: ["previously", "fragmented", "regions", "into", "cohesive", "nation-states"],
                    prepositional: ["and", "simultaneously", "generated", "exclusionary", "ideologies", "that", "would", "ultimately", "contribute", "to", "the", "catastrophic", "conflicts", "of", "the", "twentieth", "century"]
                }
            }
        }
    ],

    // ── Level 5 — Very Hard Academic Sentences ────────────────────────────────
    5: [
        {
            text: "Although the Enlightenment philosophers of the eighteenth century championed reason as the supreme arbiter of truth, many subsequent critics have argued, with considerable justification, that this unwavering commitment to rationality inadvertently marginalized other equally valid forms of human understanding, including emotional intuition and cultural tradition.",
            type: "compound-complex",
            difficulty: 5,
            explanation: "The concessive dependent clause 'Although the Enlightenment philosophers of the eighteenth century championed reason as the supreme arbiter of truth,' goes on the sub-baseline. The main subject is 'many subsequent critics.' The verb is 'have argued.' The parenthetical 'with considerable justification,' is an adverbial modifier of the verb. The object is the long noun clause 'that this unwavering commitment to rationality inadvertently marginalized other equally valid forms of human understanding, including emotional intuition and cultural tradition.'",
            partsOfSpeech: {
                "Although": "subordinating_conjunction",
                "critics": "subject", "argued": "verb"
            },
            diagram: {
                chunks: {
                    prepositional: ["[CONCESSIVE CLAUSE] Although the Enlightenment philosophers of the eighteenth century championed reason as the supreme arbiter of truth,"],
                    subject: ["many subsequent critics"],
                    adverb: ["with considerable justification,"],
                    verb: ["have argued"],
                    object: ["that this unwavering commitment to rationality inadvertently marginalized other equally valid forms of human understanding, including emotional intuition and cultural tradition"]
                },
                words: {
                    prepositional: ["Although", "the", "Enlightenment", "philosophers", "of", "the", "eighteenth", "century", "championed", "reason", "as", "the", "supreme", "arbiter", "of", "truth,"],
                    subject: ["many", "subsequent", "critics"],
                    adverb: ["with", "considerable", "justification,"],
                    verb: ["have", "argued"],
                    object: ["that", "this", "unwavering", "commitment", "to", "rationality", "inadvertently", "marginalized", "other", "equally", "valid", "forms", "of", "human", "understanding,", "including", "emotional", "intuition", "and", "cultural", "tradition"]
                }
            }
        },
        {
            text: "According to poststructuralist literary theory, the meaning of any given text is not fixed by the author's original intention but is instead continuously constructed and reconstructed through the dynamic interplay between the reader's interpretive framework and the text's inherent ambiguities.",
            type: "compound-complex",
            difficulty: 5,
            explanation: "The sentence opens with the prepositional phrase 'According to poststructuralist literary theory,' — this adverbial phrase establishes the theoretical frame and goes on the sub-baseline. The subject is 'the meaning of any given text.' The compound verb is 'is not fixed...but is instead continuously constructed and reconstructed.' The prepositional phrase 'through the dynamic interplay...' modifies the second part of the verb.",
            partsOfSpeech: {
                "According": "preposition", "meaning": "subject", "is": "verb"
            },
            diagram: {
                chunks: {
                    prepositional: ["[FRAMING PHRASE] According to poststructuralist literary theory,"],
                    subject: ["the meaning of any given text"],
                    verb: ["is not fixed by the author's original intention but is instead continuously constructed and reconstructed"],
                    adverb: ["through the dynamic interplay between the reader's interpretive framework and the text's inherent ambiguities"]
                },
                words: {
                    prepositional: ["According", "to", "poststructuralist", "literary", "theory,"],
                    subject: ["the", "meaning"],
                    subjectModifier: ["of", "any", "given", "text"],
                    verb: ["is", "not", "fixed", "by", "the", "author's", "original", "intention", "but", "is", "instead", "continuously", "constructed", "and", "reconstructed"],
                    adverb: ["through", "the", "dynamic", "interplay", "between", "the", "reader's", "interpretive", "framework", "and", "the", "text's", "inherent", "ambiguities"]
                }
            }
        },
        {
            text: "The concept of intersectionality, first theorized by legal scholar Kimberlé Crenshaw in 1989, posits that systems of oppression such as racism, sexism, and classism do not operate independently but rather compound and reinforce one another in ways that produce qualitatively distinct experiences for individuals who occupy multiple marginalized identities simultaneously.",
            type: "compound-complex",
            difficulty: 5,
            explanation: "The subject is 'The concept of intersectionality.' The participial phrase 'first theorized by legal scholar Kimberlé Crenshaw in 1989,' modifies and attributes the concept — it hangs below the subject. The verb is 'posits.' The object is the noun clause 'that systems of oppression such as racism, sexism, and classism do not operate independently.' The continuation 'but rather compound and reinforce one another in ways that produce qualitatively distinct experiences...' extends the clause on the sub-baseline.",
            partsOfSpeech: {
                "The": "article", "concept": "subject", "posits": "verb"
            },
            diagram: {
                chunks: {
                    subject: ["The concept of intersectionality,"],
                    subjectModifier: ["first theorized by legal scholar Kimberlé Crenshaw in 1989,"],
                    verb: ["posits"],
                    object: ["that systems of oppression such as racism, sexism, and classism do not operate independently"],
                    prepositional: ["but rather compound and reinforce one another in ways that produce qualitatively distinct experiences for individuals who occupy multiple marginalized identities simultaneously"]
                },
                words: {
                    subject: ["The", "concept"],
                    subjectModifier: ["of", "intersectionality,", "first", "theorized", "by", "legal", "scholar", "Kimberlé", "Crenshaw", "in", "1989,"],
                    verb: ["posits"],
                    object: ["that", "systems", "of", "oppression", "such", "as", "racism,", "sexism,", "and", "classism", "do", "not", "operate", "independently"],
                    prepositional: ["but", "rather", "compound", "and", "reinforce", "one", "another", "in", "ways", "that", "produce", "qualitatively", "distinct", "experiences", "for", "individuals", "who", "occupy", "multiple", "marginalized", "identities", "simultaneously"]
                }
            }
        },
        {
            text: "While neoliberal economic policies have generated unprecedented levels of global wealth since the 1980s, critics contend that the benefits have been so unevenly distributed that the resulting concentration of capital among a narrow elite has undermined the democratic institutions and social solidarity upon which sustainable prosperity ultimately depends.",
            type: "compound-complex",
            difficulty: 5,
            explanation: "The adverbial clause 'While neoliberal economic policies have generated unprecedented levels of global wealth since the 1980s,' goes on the sub-baseline — 'While' signals a concessive contrast. The main subject is 'critics.' The verb is 'contend.' The first noun clause 'that the benefits have been so unevenly distributed' is the object. The second noun clause 'that the resulting concentration of capital...ultimately depends' is an intensifying result clause also on the sub-baseline.",
            partsOfSpeech: {
                "While": "subordinating_conjunction",
                "critics": "subject", "contend": "verb"
            },
            diagram: {
                chunks: {
                    prepositional: ["[CONCESSIVE CLAUSE] While neoliberal economic policies have generated unprecedented levels of global wealth since the 1980s,", "[RESULT CLAUSE] that the resulting concentration of capital among a narrow elite has undermined the democratic institutions and social solidarity upon which sustainable prosperity ultimately depends"],
                    subject: ["critics"],
                    verb: ["contend"],
                    object: ["that the benefits have been so unevenly distributed"]
                },
                words: {
                    prepositional: ["While", "neoliberal", "economic", "policies", "have", "generated", "unprecedented", "levels", "of", "global", "wealth", "since", "the", "1980s,", "that", "the", "resulting", "concentration", "of", "capital", "among", "a", "narrow", "elite", "has", "undermined", "the", "democratic", "institutions", "and", "social", "solidarity", "upon", "which", "sustainable", "prosperity", "ultimately", "depends"],
                    subject: ["critics"],
                    verb: ["contend"],
                    object: ["that", "the", "benefits", "have", "been", "so", "unevenly", "distributed"]
                }
            }
        },
        {
            text: "The epistemological crisis precipitated by the advent of social media and algorithmic information curation has not merely complicated the traditional distinction between fact and opinion but has fundamentally destabilized the shared epistemic foundations upon which democratic deliberation, scientific consensus, and civic trust have historically depended.",
            type: "compound-complex",
            difficulty: 5,
            explanation: "The subject is 'The epistemological crisis precipitated by the advent of social media and algorithmic information curation' — the participial phrase 'precipitated by...' modifies 'crisis' and hangs below the subject. The compound verb is 'has not merely complicated...but has fundamentally destabilized.' The first object is 'the traditional distinction between fact and opinion.' The second object 'the shared epistemic foundations upon which democratic deliberation, scientific consensus, and civic trust have historically depended' goes on the sub-baseline.",
            partsOfSpeech: {
                "The": "article", "crisis": "subject", "complicated": "verb"
            },
            diagram: {
                chunks: {
                    subject: ["The epistemological crisis"],
                    subjectModifier: ["precipitated by the advent of social media and algorithmic information curation"],
                    verb: ["has not merely complicated"],
                    object: ["the traditional distinction between fact and opinion"],
                    prepositional: ["but has fundamentally destabilized the shared epistemic foundations upon which democratic deliberation, scientific consensus, and civic trust have historically depended"]
                },
                words: {
                    subject: ["The", "epistemological", "crisis"],
                    subjectModifier: ["precipitated", "by", "the", "advent", "of", "social", "media", "and", "algorithmic", "information", "curation"],
                    verb: ["has", "not", "merely", "complicated"],
                    object: ["the", "traditional", "distinction", "between", "fact", "and", "opinion"],
                    prepositional: ["but", "has", "fundamentally", "destabilized", "the", "shared", "epistemic", "foundations", "upon", "which", "democratic", "deliberation,", "scientific", "consensus,", "and", "civic", "trust", "have", "historically", "depended"]
                }
            }
        }
    ]
};

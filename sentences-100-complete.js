// 100 Complete Professional Sentences for SAT/ACT Preparation
// Fully formatted with parts of speech, diagrams, and explanations
// Levels 1-5 — loaded before script-integrated.js

const professionalSentences = {

    // ── Level 1 — Basic Sentences ────────────────────────────────────────────
    1: [
        {
            text: "The philosopher contemplated existence.",
            type: "simple",
            difficulty: 1,
            explanation: "Simple sentence with a subject (philosopher) and predicate (contemplated existence).",
            partsOfSpeech: {
                "The": "article",
                "philosopher": "subject",
                "contemplated": "verb",
                "existence": "object"
            },
            diagram: {
                subject: ["The", "philosopher"],
                verb: ["contemplated"],
                object: ["existence"]
            }
        },
        {
            text: "Scientists analyze data carefully.",
            type: "simple",
            difficulty: 1,
            explanation: "Simple sentence with subject (Scientists), verb (analyze), object (data), and adverb (carefully).",
            partsOfSpeech: {
                "Scientists": "subject",
                "analyze": "verb",
                "data": "object",
                "carefully": "adverb"
            },
            diagram: {
                subject: ["Scientists"],
                verb: ["analyze"],
                object: ["data"],
                adverb: ["carefully"]
            }
        },
        {
            text: "Students study diligently.",
            type: "simple",
            difficulty: 1,
            explanation: "Simple sentence with subject (Students), verb (study), and adverb (diligently).",
            partsOfSpeech: {
                "Students": "subject",
                "study": "verb",
                "diligently": "adverb"
            },
            diagram: {
                subject: ["Students"],
                verb: ["study"],
                adverb: ["diligently"]
            }
        }
    ],

    // ── Level 2 — Compound Sentences ─────────────────────────────────────────
    2: [
        {
            text: "The historian researched primary sources, and the archaeologist uncovered artifacts.",
            type: "compound",
            difficulty: 2,
            explanation: "Compound sentence with two independent clauses joined by 'and'. Each clause has its own subject and verb.",
            partsOfSpeech: {
                "The": "article",
                "historian": "subject",
                "researched": "verb",
                "primary": "adjective",
                "sources,": "object",
                "and": "conjunction",
                "the": "article",
                "archaeologist": "subject",
                "uncovered": "verb",
                "artifacts": "object"
            },
            diagram: {
                clause1: {
                    subject: ["The", "historian"],
                    verb: ["researched"],
                    object: ["primary", "sources,"]
                },
                clause2: {
                    subject: ["the", "archaeologist"],
                    verb: ["uncovered"],
                    object: ["artifacts"]
                },
                conjunction: ["and"]
            }
        },
        {
            text: "Politicians debate policies; journalists report on their decisions.",
            type: "compound",
            difficulty: 2,
            explanation: "Compound sentence using a semicolon to connect two closely related independent clauses.",
            partsOfSpeech: {
                "Politicians": "subject",
                "debate": "verb",
                "policies;": "object",
                "journalists": "subject",
                "report": "verb",
                "on": "preposition",
                "their": "pronoun",
                "decisions": "noun"
            },
            diagram: {
                clause1: {
                    subject: ["Politicians"],
                    verb: ["debate"],
                    object: ["policies;"]
                },
                clause2: {
                    subject: ["journalists"],
                    verb: ["report"],
                    prepositional: ["on", "their", "decisions"]
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
            explanation: "Complex sentence with a non-restrictive clause providing historical context, followed by the main clause with compound object expressing the contract's terms.",
            partsOfSpeech: {
                "The": "article", "concept": "subject", "of": "preposition",
                "the": "article", "'social": "adjective", "contract,'": "noun",
                "which": "pronoun", "was": "verb", "articulated": "participle",
                "most": "adverb", "famously": "adverb", "by": "preposition",
                "Rousseau": "noun", "in": "preposition", "his": "pronoun",
                "treatise": "noun", "1762,": "noun", "presupposes": "verb",
                "that": "subordinating_conjunction", "individuals": "subject",
                "willingly": "adverb", "surrender": "verb", "certain": "adjective",
                "natural": "adjective", "freedoms": "noun", "to": "preposition",
                "a": "article", "governing": "adjective", "authority": "noun",
                "exchange": "noun", "for": "preposition", "protection": "noun",
                "their": "pronoun", "remaining": "adjective", "rights": "noun",
                "and": "coordinating_conjunction", "maintenance": "noun",
                "civil": "adjective", "order": "noun"
            },
            diagram: {
                subject: ["The", "concept"],
                verb: ["presupposes"],
                object: ["that", "individuals", "willingly", "surrender", "certain", "natural", "freedoms"],
                prepositional: ["to", "a", "governing", "authority", "in", "exchange", "for", "the", "protection", "of", "their", "remaining", "rights", "and", "the", "maintenance", "of", "civil", "order"]
            }
        },
        {
            text: "The Renaissance, which originated in the prosperous city-states of northern Italy during the fourteenth century, represented a dramatic cultural and intellectual transformation that fundamentally redefined European conceptions of art, science, and humanity's relationship to the divine.",
            type: "complex",
            difficulty: 3,
            explanation: "Complex sentence featuring a non-restrictive clause detailing the Renaissance's origins, followed by the main clause with a relative clause explaining its impact.",
            partsOfSpeech: {
                "The": "article", "Renaissance,": "subject", "which": "pronoun",
                "originated": "verb", "in": "preposition", "the": "article",
                "prosperous": "adjective", "city-states": "noun", "of": "preposition",
                "northern": "adjective", "Italy": "noun", "during": "preposition",
                "fourteenth": "adjective", "century,": "noun", "represented": "verb",
                "a": "article", "dramatic": "adjective", "cultural": "adjective",
                "and": "coordinating_conjunction", "intellectual": "adjective",
                "transformation": "noun", "that": "pronoun", "fundamentally": "adverb",
                "redefined": "verb", "European": "adjective", "conceptions": "noun",
                "art,": "noun", "science,": "noun", "humanity's": "noun",
                "relationship": "noun", "to": "preposition", "divine": "noun"
            },
            diagram: {
                subject: ["The", "Renaissance,"],
                verb: ["represented"],
                object: ["a", "dramatic", "cultural", "and", "intellectual", "transformation"],
                prepositional: ["that", "fundamentally", "redefined", "European", "conceptions", "of", "art,", "science,", "and", "humanity's", "relationship", "to", "the", "divine"]
            }
        },
        {
            text: "Because the oral traditions of indigenous cultures were systematically suppressed during centuries of colonial expansion, contemporary anthropologists face the formidable challenge of reconstructing these rich epistemological frameworks from fragmentary evidence and the often biased accounts of European observers.",
            type: "complex",
            difficulty: 3,
            explanation: "Complex sentence beginning with a causal dependent clause, followed by an independent clause with a compound object describing the anthropological challenge.",
            partsOfSpeech: {
                "Because": "subordinating_conjunction", "the": "article",
                "oral": "adjective", "traditions": "noun", "of": "preposition",
                "indigenous": "adjective", "cultures": "noun", "were": "verb",
                "systematically": "adverb", "suppressed": "participle",
                "during": "preposition", "centuries": "noun", "colonial": "adjective",
                "expansion,": "noun", "contemporary": "adjective",
                "anthropologists": "subject", "face": "verb", "formidable": "adjective",
                "challenge": "object", "reconstructing": "noun", "these": "adjective",
                "rich": "adjective", "epistemological": "adjective", "frameworks": "noun",
                "from": "preposition", "fragmentary": "adjective", "evidence": "noun",
                "and": "coordinating_conjunction", "often": "adverb", "biased": "adjective",
                "accounts": "noun", "European": "adjective", "observers": "noun"
            },
            diagram: {
                dependent: ["Because", "the", "oral", "traditions", "of", "indigenous", "cultures", "were", "systematically", "suppressed", "during", "centuries", "of", "colonial", "expansion,"],
                subject: ["contemporary", "anthropologists"],
                verb: ["face"],
                object: ["the", "formidable", "challenge"],
                prepositional: ["of", "reconstructing", "these", "rich", "epistemological", "frameworks", "from", "fragmentary", "evidence", "and", "the", "often", "biased", "accounts", "of", "European", "observers"]
            }
        },
        {
            text: "The existentialist philosophy of Jean-Paul Sartre, which emerged from the devastation of World War II, posits that human existence precedes essence and that individuals must therefore construct their own meaning in an inherently indifferent universe.",
            type: "complex",
            difficulty: 3,
            explanation: "Complex sentence with a non-restrictive clause providing historical context, followed by the main clause with compound object expressing core existentialist principles.",
            partsOfSpeech: {
                "The": "article", "existentialist": "adjective", "philosophy": "subject",
                "of": "preposition", "Jean-Paul": "noun", "Sartre,": "noun",
                "which": "pronoun", "emerged": "verb", "from": "preposition",
                "the": "article", "devastation": "noun", "World": "noun",
                "War": "noun", "II,": "noun", "posits": "verb",
                "that": "subordinating_conjunction", "human": "adjective",
                "existence": "noun", "precedes": "verb", "essence": "noun",
                "and": "coordinating_conjunction", "individuals": "subject",
                "must": "verb", "therefore": "adverb", "construct": "verb",
                "their": "pronoun", "own": "adjective", "meaning": "noun",
                "in": "preposition", "an": "article", "inherently": "adverb",
                "indifferent": "adjective", "universe": "noun"
            },
            diagram: {
                subject: ["The", "existentialist", "philosophy", "of", "Jean-Paul", "Sartre,"],
                verb: ["posits"],
                object: ["that", "human", "existence", "precedes", "essence"],
                prepositional: ["and", "that", "individuals", "must", "therefore", "construct", "their", "own", "meaning", "in", "an", "inherently", "indifferent", "universe"]
            }
        },
        {
            text: "The Harlem Renaissance of the 1920s, though primarily recognized for its extraordinary literary and musical achievements, also catalyzed a broader intellectual movement that challenged prevailing racial hierarchies and articulated a distinctly African American cultural identity.",
            type: "complex",
            difficulty: 3,
            explanation: "Complex sentence with a concessive clause, main clause, and relative clause describing the multifaceted impact of the Harlem Renaissance.",
            partsOfSpeech: {
                "The": "article", "Harlem": "adjective", "Renaissance": "subject",
                "of": "preposition", "the": "article", "1920s,": "noun",
                "though": "subordinating_conjunction", "primarily": "adverb",
                "recognized": "participle", "for": "preposition", "its": "pronoun",
                "extraordinary": "adjective", "literary": "adjective", "and": "coordinating_conjunction",
                "musical": "adjective", "achievements,": "noun", "also": "adverb",
                "catalyzed": "verb", "a": "article", "broader": "adjective",
                "intellectual": "adjective", "movement": "noun", "that": "pronoun",
                "challenged": "verb", "prevailing": "adjective", "racial": "adjective",
                "hierarchies": "noun", "articulated": "verb", "distinctly": "adverb",
                "African": "adjective", "American": "adjective", "cultural": "adjective",
                "identity": "noun"
            },
            diagram: {
                subject: ["The", "Harlem", "Renaissance", "of", "the", "1920s,"],
                verb: ["also", "catalyzed"],
                object: ["a", "broader", "intellectual", "movement"],
                prepositional: ["that", "challenged", "prevailing", "racial", "hierarchies", "and", "articulated", "a", "distinctly", "African", "American", "cultural", "identity"]
            }
        },
        {
            text: "The development of quantum mechanics during the early twentieth century fundamentally challenged classical physics by demonstrating that subatomic particles exhibit both wave-like and particle-like properties.",
            type: "complex",
            difficulty: 3,
            explanation: "Complex sentence with main clause describing quantum mechanics' challenge to classical physics, followed by a participial phrase explaining wave-particle duality.",
            partsOfSpeech: {
                "The": "article", "development": "subject", "of": "preposition",
                "quantum": "adjective", "mechanics": "noun", "during": "preposition",
                "the": "article", "early": "adjective", "twentieth": "adjective",
                "century": "noun", "fundamentally": "adverb", "challenged": "verb",
                "classical": "adjective", "physics": "object", "by": "preposition",
                "demonstrating": "participle", "that": "subordinating_conjunction",
                "subatomic": "adjective", "particles": "noun", "exhibit": "verb",
                "both": "adjective", "wave-like": "adjective", "and": "coordinating_conjunction",
                "particle-like": "adjective", "properties": "noun"
            },
            diagram: {
                subject: ["The", "development", "of", "quantum", "mechanics"],
                verb: ["fundamentally", "challenged"],
                object: ["classical", "physics"],
                prepositional: ["by", "demonstrating", "that", "subatomic", "particles", "exhibit", "both", "wave-like", "and", "particle-like", "properties"]
            }
        },
        {
            text: "Although the Industrial Revolution brought unprecedented economic prosperity to many Western nations, it also created severe environmental degradation and exploitative labor conditions that would eventually inspire social reform movements.",
            type: "complex",
            difficulty: 3,
            explanation: "Complex sentence with a concessive clause, main clause with compound object, and relative clause describing long-term consequences.",
            partsOfSpeech: {
                "Although": "subordinating_conjunction", "the": "article",
                "Industrial": "adjective", "Revolution": "noun", "brought": "verb",
                "unprecedented": "adjective", "economic": "adjective", "prosperity": "noun",
                "to": "preposition", "many": "adjective", "Western": "adjective",
                "nations,": "noun", "it": "subject", "also": "adverb",
                "created": "verb", "severe": "adjective", "environmental": "adjective",
                "degradation": "noun", "and": "coordinating_conjunction",
                "exploitative": "adjective", "labor": "adjective", "conditions": "object",
                "that": "pronoun", "would": "verb", "eventually": "adverb",
                "inspire": "verb", "social": "adjective", "reform": "adjective",
                "movements": "noun"
            },
            diagram: {
                dependent: ["Although", "the", "Industrial", "Revolution", "brought", "unprecedented", "economic", "prosperity", "to", "many", "Western", "nations,"],
                subject: ["it"],
                adverb: ["also"],
                verb: ["created"],
                object: ["severe", "environmental", "degradation", "and", "exploitative", "labor", "conditions"],
                prepositional: ["that", "would", "eventually", "inspire", "social", "reform", "movements"]
            }
        },
        {
            text: "The feminist movement of the late twentieth century, building upon earlier suffragist victories, successfully challenged patriarchal institutions and expanded opportunities for women in education, politics, and professional careers.",
            type: "complex",
            difficulty: 3,
            explanation: "Complex sentence with a participial phrase showing historical continuity, followed by the main clause with compound verbs and objects.",
            partsOfSpeech: {
                "The": "article", "feminist": "adjective", "movement": "subject",
                "of": "preposition", "the": "article", "late": "adjective",
                "twentieth": "adjective", "century,": "noun", "building": "participle",
                "upon": "preposition", "earlier": "adjective", "suffragist": "adjective",
                "victories,": "noun", "successfully": "adverb", "challenged": "verb",
                "patriarchal": "adjective", "institutions": "noun", "and": "coordinating_conjunction",
                "expanded": "verb", "opportunities": "object", "for": "preposition",
                "women": "noun", "in": "preposition", "education,": "noun",
                "politics,": "noun", "professional": "adjective", "careers": "noun"
            },
            diagram: {
                subject: ["The", "feminist", "movement", "of", "the", "late", "twentieth", "century,"],
                verb: ["successfully", "challenged"],
                object: ["patriarchal", "institutions"],
                prepositional: ["and", "expanded", "opportunities", "for", "women", "in", "education,", "politics,", "and", "professional", "careers"]
            }
        },
        {
            text: "The discovery of DNA's double helix structure by Watson and Crick in 1953 revolutionized biological sciences and opened new frontiers in genetic research, medicine, and forensic science.",
            type: "complex",
            difficulty: 3,
            explanation: "Complex sentence with main clause describing a scientific revolution, followed by a compound object listing affected fields.",
            partsOfSpeech: {
                "The": "article", "discovery": "subject", "of": "preposition",
                "DNA's": "noun", "double": "adjective", "helix": "adjective",
                "structure": "noun", "by": "preposition", "Watson": "noun",
                "and": "coordinating_conjunction", "Crick": "noun", "in": "preposition",
                "1953": "noun", "revolutionized": "verb", "biological": "adjective",
                "sciences": "object", "opened": "verb", "new": "adjective",
                "frontiers": "noun", "genetic": "adjective", "research,": "noun",
                "medicine,": "noun", "forensic": "adjective", "science": "noun"
            },
            diagram: {
                subject: ["The", "discovery", "of", "DNA's", "double", "helix", "structure", "by", "Watson", "and", "Crick", "in", "1953"],
                verb: ["revolutionized"],
                object: ["biological", "sciences"],
                prepositional: ["and", "opened", "new", "frontiers", "in", "genetic", "research,", "medicine,", "and", "forensic", "science"]
            }
        },
        {
            text: "While ancient Greek philosophers primarily focused on metaphysical questions about the nature of reality and knowledge, modern philosophers have increasingly turned their attention to practical ethical dilemmas and political theory.",
            type: "complex",
            difficulty: 3,
            explanation: "Complex sentence with a temporal contrast clause comparing ancient and modern philosophical focus.",
            partsOfSpeech: {
                "While": "subordinating_conjunction", "ancient": "adjective",
                "Greek": "adjective", "philosophers": "subject", "primarily": "adverb",
                "focused": "verb", "on": "preposition", "metaphysical": "adjective",
                "questions": "noun", "about": "preposition", "the": "article",
                "nature": "noun", "of": "preposition", "reality": "noun",
                "and": "coordinating_conjunction", "knowledge,": "noun",
                "modern": "adjective", "have": "verb", "increasingly": "adverb",
                "turned": "verb", "their": "pronoun", "attention": "object",
                "to": "preposition", "practical": "adjective", "ethical": "adjective",
                "dilemmas": "noun", "political": "adjective", "theory": "noun"
            },
            diagram: {
                dependent: ["While", "ancient", "Greek", "philosophers", "primarily", "focused", "on", "metaphysical", "questions", "about", "the", "nature", "of", "reality", "and", "knowledge,"],
                subject: ["modern", "philosophers"],
                verb: ["have", "increasingly", "turned"],
                object: ["their", "attention"],
                prepositional: ["to", "practical", "ethical", "dilemmas", "and", "political", "theory"]
            }
        },
        {
            text: "The invention of the printing press by Johannes Gutenberg around 1440 democratized knowledge by making books more accessible and affordable, thereby accelerating the spread of Renaissance humanism throughout Europe.",
            type: "complex",
            difficulty: 3,
            explanation: "Complex sentence with main clause describing the press invention's impact, followed by participial phrases explaining cultural consequences.",
            partsOfSpeech: {
                "The": "article", "invention": "subject", "of": "preposition",
                "the": "article", "printing": "adjective", "press": "noun",
                "by": "preposition", "Johannes": "noun", "Gutenberg": "noun",
                "around": "preposition", "1440": "noun", "democratized": "verb",
                "knowledge": "object", "making": "participle", "books": "noun",
                "more": "adverb", "accessible": "adjective", "and": "coordinating_conjunction",
                "affordable,": "adjective", "thereby": "adverb", "accelerating": "participle",
                "spread": "noun", "Renaissance": "adjective", "humanism": "noun",
                "throughout": "preposition", "Europe": "noun"
            },
            diagram: {
                subject: ["The", "invention", "of", "the", "printing", "press", "by", "Johannes", "Gutenberg", "around", "1440"],
                verb: ["democratized"],
                object: ["knowledge"],
                prepositional: ["by", "making", "books", "more", "accessible", "and", "affordable,", "thereby", "accelerating", "the", "spread", "of", "Renaissance", "humanism", "throughout", "Europe"]
            }
        },
        {
            text: "The environmental movement that emerged during the 1960s and 1970s successfully raised public awareness about pollution, conservation, and climate change, leading to landmark legislation such as the Clean Air Act.",
            type: "complex",
            difficulty: 3,
            explanation: "Complex sentence with a relative clause, main clause with compound object, and participial phrase showing legislative outcomes.",
            partsOfSpeech: {
                "The": "article", "environmental": "adjective", "movement": "subject",
                "that": "pronoun", "emerged": "verb", "during": "preposition",
                "the": "article", "1960s": "noun", "and": "coordinating_conjunction",
                "1970s": "noun", "successfully": "adverb", "raised": "verb",
                "public": "adjective", "awareness": "object", "about": "preposition",
                "pollution,": "noun", "conservation,": "noun", "climate": "adjective",
                "change,": "noun", "leading": "participle", "to": "preposition",
                "landmark": "adjective", "legislation": "noun", "such": "adverb",
                "as": "preposition", "Clean": "adjective", "Air": "noun", "Act": "noun"
            },
            diagram: {
                subject: ["The", "environmental", "movement", "that", "emerged", "during", "the", "1960s", "and", "1970s"],
                verb: ["successfully", "raised"],
                object: ["public", "awareness"],
                prepositional: ["about", "pollution,", "conservation,", "and", "climate", "change,", "leading", "to", "landmark", "legislation", "such", "as", "the", "Clean", "Air", "Act"]
            }
        },
        {
            text: "The cognitive revolution in psychology during the 1950s and 1960s challenged behaviorist assumptions by emphasizing mental processes such as memory, attention, and problem-solving.",
            type: "complex",
            difficulty: 3,
            explanation: "Complex sentence describing the cognitive revolution's challenge to behaviorism with participial consequences.",
            partsOfSpeech: {
                "The": "article", "cognitive": "adjective", "revolution": "subject",
                "in": "preposition", "psychology": "noun", "during": "preposition",
                "the": "article", "1950s": "noun", "and": "coordinating_conjunction",
                "1960s": "noun", "challenged": "verb", "behaviorist": "adjective",
                "assumptions": "object", "by": "preposition", "emphasizing": "participle",
                "mental": "adjective", "processes": "noun", "such": "adverb",
                "as": "preposition", "memory,": "noun", "attention,": "noun",
                "problem-solving": "noun"
            },
            diagram: {
                subject: ["The", "cognitive", "revolution", "in", "psychology", "during", "the", "1950s", "and", "1960s"],
                verb: ["challenged"],
                object: ["behaviorist", "assumptions"],
                prepositional: ["by", "emphasizing", "mental", "processes", "such", "as", "memory,", "attention,", "and", "problem-solving"]
            }
        },
        {
            text: "The civil rights movement of the 1950s and 1960s, led by charismatic figures like Martin Luther King Jr. and Malcolm X, successfully dismantled legal segregation and inspired subsequent social justice movements across the United States.",
            type: "complex",
            difficulty: 3,
            explanation: "Complex sentence with an appositive phrase describing leadership, followed by a main clause with compound verbs showing achievements.",
            partsOfSpeech: {
                "The": "article", "civil": "adjective", "rights": "adjective",
                "movement": "subject", "of": "preposition", "the": "article",
                "1950s": "noun", "and": "coordinating_conjunction", "1960s,": "noun",
                "led": "participle", "by": "preposition", "charismatic": "adjective",
                "figures": "noun", "like": "preposition", "Martin": "noun",
                "Luther": "noun", "King": "noun", "Jr.": "noun", "Malcolm": "noun",
                "X,": "noun", "successfully": "adverb", "dismantled": "verb",
                "legal": "adjective", "segregation": "object", "inspired": "verb",
                "subsequent": "adjective", "social": "adjective", "justice": "adjective",
                "movements": "noun", "across": "preposition", "United": "adjective",
                "States": "noun"
            },
            diagram: {
                subject: ["The", "civil", "rights", "movement", "of", "the", "1950s", "and", "1960s,"],
                verb: ["successfully", "dismantled"],
                object: ["legal", "segregation"],
                prepositional: ["and", "inspired", "subsequent", "social", "justice", "movements", "across", "the", "United", "States"]
            }
        },
        {
            text: "The development of artificial intelligence since the mid-twentieth century has transformed numerous industries while raising profound ethical questions about machine consciousness, data privacy, and the future of human employment.",
            type: "complex",
            difficulty: 3,
            explanation: "Complex sentence with main clause describing AI's impact, followed by a concessive clause with compound object listing ethical concerns.",
            partsOfSpeech: {
                "The": "article", "development": "subject", "of": "preposition",
                "artificial": "adjective", "intelligence": "noun", "since": "preposition",
                "the": "article", "mid-twentieth": "adjective", "century": "noun",
                "has": "verb", "transformed": "verb", "numerous": "adjective",
                "industries": "object", "while": "subordinating_conjunction",
                "raising": "participle", "profound": "adjective", "ethical": "adjective",
                "questions": "noun", "about": "preposition", "machine": "adjective",
                "consciousness,": "noun", "data": "adjective", "privacy,": "noun",
                "and": "coordinating_conjunction", "the": "article", "future": "noun",
                "of": "preposition", "human": "adjective", "employment": "noun"
            },
            diagram: {
                subject: ["The", "development", "of", "artificial", "intelligence", "since", "the", "mid-twentieth", "century"],
                verb: ["has", "transformed"],
                object: ["numerous", "industries"],
                prepositional: ["while", "raising", "profound", "ethical", "questions", "about", "machine", "consciousness,", "data", "privacy,", "and", "the", "future", "of", "human", "employment"]
            }
        },
        {
            text: "The scientific method, which emphasizes empirical observation, hypothesis testing, and peer review, provides a systematic framework for advancing human knowledge while minimizing the influence of bias and superstition.",
            type: "complex",
            difficulty: 3,
            explanation: "Complex sentence with a non-restrictive clause explaining the scientific method's components, followed by the main clause describing its purpose.",
            partsOfSpeech: {
                "The": "article", "scientific": "adjective", "method,": "subject",
                "which": "pronoun", "emphasizes": "verb", "empirical": "adjective",
                "observation,": "noun", "hypothesis": "adjective", "testing,": "noun",
                "and": "coordinating_conjunction", "peer": "adjective", "review,": "noun",
                "provides": "verb", "a": "article", "systematic": "adjective",
                "framework": "object", "for": "preposition", "advancing": "participle",
                "human": "adjective", "knowledge": "noun", "while": "subordinating_conjunction",
                "minimizing": "participle", "the": "article", "influence": "noun",
                "of": "preposition", "bias": "noun", "superstition": "noun"
            },
            diagram: {
                subject: ["The", "scientific", "method,"],
                verb: ["provides"],
                object: ["a", "systematic", "framework"],
                prepositional: ["for", "advancing", "human", "knowledge", "while", "minimizing", "the", "influence", "of", "bias", "and", "superstition"]
            }
        },
        {
            text: "The globalization of economic markets since the 1990s has created unprecedented opportunities for international trade while simultaneously generating concerns about cultural homogenization and environmental sustainability.",
            type: "complex",
            difficulty: 3,
            explanation: "Complex sentence with main clause describing globalization's benefits, followed by a concessive clause listing concerns.",
            partsOfSpeech: {
                "The": "article", "globalization": "subject", "of": "preposition",
                "economic": "adjective", "markets": "noun", "since": "preposition",
                "the": "article", "1990s": "noun", "has": "verb", "created": "verb",
                "unprecedented": "adjective", "opportunities": "object",
                "for": "preposition", "international": "adjective", "trade": "noun",
                "while": "subordinating_conjunction", "simultaneously": "adverb",
                "generating": "participle", "concerns": "noun", "about": "preposition",
                "cultural": "adjective", "homogenization": "noun",
                "and": "coordinating_conjunction", "environmental": "adjective",
                "sustainability": "noun"
            },
            diagram: {
                subject: ["The", "globalization", "of", "economic", "markets", "since", "the", "1990s"],
                verb: ["has", "created"],
                object: ["unprecedented", "opportunities", "for", "international", "trade"],
                prepositional: ["while", "simultaneously", "generating", "concerns", "about", "cultural", "homogenization", "and", "environmental", "sustainability"]
            }
        },
        {
            text: "The psychological theory of cognitive dissonance, first proposed by Leon Festinger in 1957, explains how individuals experience mental discomfort when holding conflicting beliefs and how they resolve this tension through various psychological mechanisms.",
            type: "complex",
            difficulty: 3,
            explanation: "Complex sentence with an appositive clause providing attribution, followed by the main clause with compound object explaining the theory.",
            partsOfSpeech: {
                "The": "article", "psychological": "adjective", "theory": "subject",
                "of": "preposition", "cognitive": "adjective", "dissonance,": "noun",
                "first": "adverb", "proposed": "participle", "by": "preposition",
                "Leon": "noun", "Festinger": "noun", "in": "preposition", "1957,": "noun",
                "explains": "verb", "how": "adverb", "individuals": "noun",
                "experience": "verb", "mental": "adjective", "discomfort": "object",
                "when": "subordinating_conjunction", "holding": "participle",
                "conflicting": "adjective", "beliefs": "noun",
                "and": "coordinating_conjunction", "they": "pronoun", "resolve": "verb",
                "this": "adjective", "tension": "noun", "through": "preposition",
                "various": "adjective", "mechanisms": "noun"
            },
            diagram: {
                subject: ["The", "psychological", "theory", "of", "cognitive", "dissonance,"],
                verb: ["explains"],
                object: ["how", "individuals", "experience", "mental", "discomfort", "when", "holding", "conflicting", "beliefs"],
                prepositional: ["and", "how", "they", "resolve", "this", "tension", "through", "various", "psychological", "mechanisms"]
            }
        },
        {
            text: "The anthropological concept of cultural relativism, which challenges ethnocentric judgments about other societies, emphasizes understanding cultural practices within their own historical and social contexts rather than applying universal moral standards.",
            type: "complex",
            difficulty: 3,
            explanation: "Complex sentence with an appositive clause defining cultural relativism, followed by main clause explaining its methodological approach.",
            partsOfSpeech: {
                "The": "article", "anthropological": "adjective", "concept": "subject",
                "of": "preposition", "cultural": "adjective", "relativism,": "noun",
                "which": "pronoun", "challenges": "verb", "ethnocentric": "adjective",
                "judgments": "noun", "about": "preposition", "other": "adjective",
                "societies,": "noun", "emphasizes": "verb", "understanding": "noun",
                "practices": "object", "within": "preposition", "their": "pronoun",
                "own": "adjective", "historical": "adjective", "and": "coordinating_conjunction",
                "social": "adjective", "contexts": "noun", "rather": "adverb",
                "than": "preposition", "applying": "participle", "universal": "adjective",
                "moral": "adjective", "standards": "noun"
            },
            diagram: {
                subject: ["The", "anthropological", "concept", "of", "cultural", "relativism,"],
                verb: ["emphasizes"],
                object: ["understanding", "cultural", "practices"],
                prepositional: ["within", "their", "own", "historical", "and", "social", "contexts", "rather", "than", "applying", "universal", "moral", "standards"]
            }
        },
        {
            text: "The economic theory of supply and demand, which forms the foundation of market capitalism, explains how prices are determined through the interaction of consumer preferences and producer costs in competitive markets.",
            type: "complex",
            difficulty: 3,
            explanation: "Complex sentence with an appositive clause, followed by main clause describing the price determination mechanism.",
            partsOfSpeech: {
                "The": "article", "economic": "adjective", "theory": "subject",
                "of": "preposition", "supply": "noun", "and": "coordinating_conjunction",
                "demand,": "noun", "which": "pronoun", "forms": "verb",
                "the": "article", "foundation": "noun", "market": "adjective",
                "capitalism,": "noun", "explains": "verb", "how": "adverb",
                "prices": "noun", "are": "verb", "determined": "participle",
                "through": "preposition", "interaction": "noun", "consumer": "adjective",
                "preferences": "noun", "producer": "adjective", "costs": "noun",
                "in": "preposition", "competitive": "adjective", "markets": "noun"
            },
            diagram: {
                subject: ["The", "economic", "theory", "of", "supply", "and", "demand,"],
                verb: ["explains"],
                object: ["how", "prices", "are", "determined"],
                prepositional: ["through", "the", "interaction", "of", "consumer", "preferences", "and", "producer", "costs", "in", "competitive", "markets"]
            }
        }
    ],

    // ── Level 4 — Hard Compound-Complex Sentences ─────────────────────────────
    4: [
        {
            text: "Despite the pervasive influence of Marxist theory on twentieth-century political movements across multiple continents, the fundamental tension between its utopian aspirations and the authoritarian regimes that claimed its mantle remains one of the most debated paradoxes in modern historiography.",
            type: "compound-complex",
            difficulty: 4,
            explanation: "Compound-complex sentence opening with a prepositional phrase, featuring a complex subject with relative clause, and concluding with prepositional phrases.",
            partsOfSpeech: {
                "Despite": "preposition", "the": "article", "pervasive": "adjective",
                "influence": "noun", "of": "preposition", "Marxist": "adjective",
                "theory": "noun", "on": "preposition", "twentieth-century": "adjective",
                "political": "adjective", "movements": "noun", "across": "preposition",
                "multiple": "adjective", "continents,": "noun", "fundamental": "adjective",
                "tension": "subject", "between": "preposition", "its": "pronoun",
                "utopian": "adjective", "aspirations": "noun", "and": "coordinating_conjunction",
                "authoritarian": "adjective", "regimes": "noun", "that": "pronoun",
                "claimed": "verb", "mantle": "noun", "remains": "verb",
                "one": "noun", "most": "adverb", "debated": "participle",
                "paradoxes": "noun", "in": "preposition", "modern": "adjective",
                "historiography": "noun"
            },
            diagram: {
                prepositional: ["Despite", "the", "pervasive", "influence", "of", "Marxist", "theory", "on", "twentieth-century", "political", "movements", "across", "multiple", "continents,"],
                subject: ["the", "fundamental", "tension"],
                verb: ["remains"],
                object: ["one", "of", "the", "most", "debated", "paradoxes", "in", "modern", "historiography"]
            }
        },
        {
            text: "Although the standard model of particle physics has successfully predicted the existence of numerous subatomic particles, including the Higgs boson confirmed at CERN in 2012, it nevertheless fails to account for several fundamental phenomena such as dark matter, dark energy, and the observed asymmetry between matter and antimatter.",
            type: "compound-complex",
            difficulty: 4,
            explanation: "Compound-complex sentence with a concessive clause, parenthetical phrase, and compound object listing unresolved physics mysteries.",
            partsOfSpeech: {
                "Although": "subordinating_conjunction", "the": "article",
                "standard": "adjective", "model": "noun", "of": "preposition",
                "particle": "adjective", "physics": "noun", "has": "verb",
                "successfully": "adverb", "predicted": "verb", "existence": "noun",
                "numerous": "adjective", "subatomic": "adjective", "particles,": "noun",
                "including": "preposition", "Higgs": "adjective", "boson": "noun",
                "confirmed": "participle", "at": "preposition", "CERN": "noun",
                "in": "preposition", "2012,": "noun", "it": "subject",
                "nevertheless": "adverb", "fails": "verb", "to": "infinitive",
                "account": "infinitive", "for": "preposition", "several": "adjective",
                "fundamental": "adjective", "phenomena": "object", "such": "adverb",
                "as": "preposition", "dark": "adjective", "matter,": "noun",
                "energy,": "noun", "and": "coordinating_conjunction",
                "observed": "participle", "asymmetry": "noun", "between": "preposition",
                "antimatter": "noun"
            },
            diagram: {
                dependent: ["Although", "the", "standard", "model", "of", "particle", "physics", "has", "successfully", "predicted", "the", "existence", "of", "numerous", "subatomic", "particles,", "including", "the", "Higgs", "boson", "confirmed", "at", "CERN", "in", "2012,"],
                subject: ["it"],
                adverb: ["nevertheless"],
                verb: ["fails"],
                object: ["to", "account", "for", "several", "fundamental", "phenomena"],
                prepositional: ["such", "as", "dark", "matter,", "dark", "energy,", "and", "the", "observed", "asymmetry", "between", "matter", "and", "antimatter"]
            }
        },
        {
            text: "The Enlightenment's emphasis on reason and individual rights fundamentally reshaped Western political philosophy, yet the revolutionary movements it inspired frequently descended into violence and authoritarian excess, suggesting that abstract ideals are difficult to translate into stable governance.",
            type: "compound-complex",
            difficulty: 4,
            explanation: "Compound-complex sentence with a main clause, a contrasting clause joined by 'yet', and a participial phrase offering a philosophical conclusion.",
            partsOfSpeech: {
                "The": "article", "Enlightenment's": "noun", "emphasis": "subject",
                "on": "preposition", "reason": "noun", "and": "coordinating_conjunction",
                "individual": "adjective", "rights": "noun", "fundamentally": "adverb",
                "reshaped": "verb", "Western": "adjective", "political": "adjective",
                "philosophy,": "object", "yet": "coordinating_conjunction", "revolutionary": "adjective",
                "movements": "subject", "it": "pronoun", "inspired": "verb",
                "frequently": "adverb", "descended": "verb", "into": "preposition",
                "violence": "noun", "authoritarian": "adjective", "excess,": "noun",
                "suggesting": "participle", "that": "subordinating_conjunction",
                "abstract": "adjective", "ideals": "noun", "are": "verb",
                "difficult": "adjective", "to": "preposition", "translate": "verb",
                "stable": "adjective", "governance": "noun"
            },
            diagram: {
                subject: ["The", "Enlightenment's", "emphasis", "on", "reason", "and", "individual", "rights"],
                verb: ["fundamentally", "reshaped"],
                object: ["Western", "political", "philosophy,"],
                prepositional: ["yet", "the", "revolutionary", "movements", "it", "inspired", "frequently", "descended", "into", "violence", "and", "authoritarian", "excess,", "suggesting", "that", "abstract", "ideals", "are", "difficult", "to", "translate", "into", "stable", "governance"]
            }
        },
        {
            text: "Because colonialism systematically dismantled indigenous economic and social structures, post-colonial nations faced enormous challenges in building stable governments, and many former colonies continue to grapple with the lasting economic inequalities that were deliberately engineered during the colonial period.",
            type: "compound-complex",
            difficulty: 4,
            explanation: "Compound-complex sentence with a causal dependent clause, a main clause, and a second independent clause joined by 'and'.",
            partsOfSpeech: {
                "Because": "subordinating_conjunction", "colonialism": "noun",
                "systematically": "adverb", "dismantled": "verb", "indigenous": "adjective",
                "economic": "adjective", "and": "coordinating_conjunction", "social": "adjective",
                "structures,": "noun", "post-colonial": "adjective", "nations": "subject",
                "faced": "verb", "enormous": "adjective", "challenges": "object",
                "in": "preposition", "building": "participle", "stable": "adjective",
                "governments,": "noun", "many": "adjective", "former": "adjective",
                "colonies": "subject", "continue": "verb", "to": "preposition",
                "grapple": "verb", "with": "preposition", "lasting": "adjective",
                "inequalities": "noun", "that": "pronoun", "were": "verb",
                "deliberately": "adverb", "engineered": "participle", "during": "preposition",
                "colonial": "adjective", "period": "noun"
            },
            diagram: {
                dependent: ["Because", "colonialism", "systematically", "dismantled", "indigenous", "economic", "and", "social", "structures,"],
                subject: ["post-colonial", "nations"],
                verb: ["faced"],
                object: ["enormous", "challenges", "in", "building", "stable", "governments,"],
                prepositional: ["and", "many", "former", "colonies", "continue", "to", "grapple", "with", "the", "lasting", "economic", "inequalities", "that", "were", "deliberately", "engineered", "during", "the", "colonial", "period"]
            }
        },
        {
            text: "The rise of nationalism in nineteenth-century Europe both unified previously fragmented regions into cohesive nation-states and simultaneously generated exclusionary ideologies that would ultimately contribute to the catastrophic conflicts of the twentieth century.",
            type: "compound-complex",
            difficulty: 4,
            explanation: "Compound-complex sentence with a compound predicate and a relative clause describing nationalism's dual legacy.",
            partsOfSpeech: {
                "The": "article", "rise": "subject", "of": "preposition",
                "nationalism": "noun", "in": "preposition", "nineteenth-century": "adjective",
                "Europe": "noun", "both": "adverb", "unified": "verb",
                "previously": "adverb", "fragmented": "adjective", "regions": "noun",
                "into": "preposition", "cohesive": "adjective", "nation-states": "noun",
                "and": "coordinating_conjunction", "simultaneously": "adverb",
                "generated": "verb", "exclusionary": "adjective", "ideologies": "object",
                "that": "pronoun", "would": "verb", "ultimately": "adverb",
                "contribute": "verb", "to": "preposition", "catastrophic": "adjective",
                "conflicts": "noun", "twentieth": "adjective", "century": "noun"
            },
            diagram: {
                subject: ["The", "rise", "of", "nationalism", "in", "nineteenth-century", "Europe"],
                verb: ["both", "unified"],
                object: ["previously", "fragmented", "regions", "into", "cohesive", "nation-states"],
                prepositional: ["and", "simultaneously", "generated", "exclusionary", "ideologies", "that", "would", "ultimately", "contribute", "to", "the", "catastrophic", "conflicts", "of", "the", "twentieth", "century"]
            }
        }
    ],

    // ── Level 5 — Very Hard Academic Sentences ────────────────────────────────
    5: [
        {
            text: "Although the Enlightenment philosophers of the eighteenth century championed reason as the supreme arbiter of truth, many subsequent critics have argued, with considerable justification, that this unwavering commitment to rationality inadvertently marginalized other equally valid forms of human understanding, including emotional intuition and cultural tradition.",
            type: "compound-complex",
            difficulty: 5,
            explanation: "Sophisticated compound-complex sentence featuring a concessive clause, parenthetical phrase, and complex object with multiple modifiers and examples.",
            partsOfSpeech: {
                "Although": "subordinating_conjunction", "the": "article",
                "Enlightenment": "adjective", "philosophers": "subject",
                "of": "preposition", "eighteenth": "adjective", "century": "noun",
                "championed": "verb", "reason": "object", "as": "preposition",
                "supreme": "adjective", "arbiter": "noun", "truth,": "noun",
                "many": "adjective", "subsequent": "adjective", "critics": "subject",
                "have": "verb", "argued,": "verb", "with": "preposition",
                "considerable": "adjective", "justification,": "noun",
                "that": "subordinating_conjunction", "this": "adjective",
                "unwavering": "adjective", "commitment": "noun", "to": "preposition",
                "rationality": "noun", "inadvertently": "adverb", "marginalized": "verb",
                "other": "adjective", "equally": "adverb", "valid": "adjective",
                "forms": "noun", "human": "adjective", "understanding,": "noun",
                "including": "preposition", "emotional": "adjective", "intuition": "noun",
                "and": "coordinating_conjunction", "cultural": "adjective",
                "tradition": "noun"
            },
            diagram: {
                dependent: ["Although", "the", "Enlightenment", "philosophers", "of", "the", "eighteenth", "century", "championed", "reason", "as", "the", "supreme", "arbiter", "of", "truth,"],
                subject: ["many", "subsequent", "critics"],
                verb: ["have", "argued,"],
                object: ["that", "this", "unwavering", "commitment", "to", "rationality", "inadvertently", "marginalized", "other", "equally", "valid", "forms", "of", "human", "understanding,"],
                prepositional: ["including", "emotional", "intuition", "and", "cultural", "tradition"]
            }
        },
        {
            text: "According to poststructuralist literary theory, the meaning of any given text is not fixed by the author's original intention but is instead continuously constructed and reconstructed through the dynamic interplay between the reader's interpretive framework and the text's inherent ambiguities.",
            type: "compound-complex",
            difficulty: 5,
            explanation: "Advanced compound-complex sentence with a compound predicate, sophisticated academic terminology, and complex prepositional phrases describing literary theory concepts.",
            partsOfSpeech: {
                "According": "preposition", "to": "preposition",
                "poststructuralist": "adjective", "literary": "adjective",
                "theory,": "noun", "the": "article", "meaning": "subject",
                "of": "preposition", "any": "adjective", "given": "participle",
                "text": "noun", "is": "verb", "not": "adverb", "fixed": "participle",
                "by": "preposition", "author's": "noun", "original": "adjective",
                "intention": "noun", "but": "coordinating_conjunction", "instead": "adverb",
                "continuously": "adverb", "constructed": "participle",
                "and": "coordinating_conjunction", "reconstructed": "participle",
                "through": "preposition", "dynamic": "adjective", "interplay": "noun",
                "between": "preposition", "reader's": "noun", "interpretive": "adjective",
                "framework": "noun", "text's": "noun", "inherent": "adjective",
                "ambiguities": "noun"
            },
            diagram: {
                prepositional: ["According", "to", "poststructuralist", "literary", "theory,"],
                subject: ["the", "meaning", "of", "any", "given", "text"],
                verb: ["is"],
                object: ["not", "fixed", "by", "the", "author's", "original", "intention"],
                adverb: ["but", "instead", "continuously", "constructed", "and", "reconstructed", "through", "the", "dynamic", "interplay", "between", "the", "reader's", "interpretive", "framework", "and", "the", "text's", "inherent", "ambiguities"]
            }
        },
        {
            text: "The concept of intersectionality, first theorized by legal scholar Kimberlé Crenshaw in 1989, posits that systems of oppression such as racism, sexism, and classism do not operate independently but rather compound and reinforce one another in ways that produce qualitatively distinct experiences for individuals who occupy multiple marginalized identities simultaneously.",
            type: "compound-complex",
            difficulty: 5,
            explanation: "Highly complex sentence with appositive clause, compound subject predicate, and detailed object clause explaining intersectionality.",
            partsOfSpeech: {
                "The": "article", "concept": "subject", "of": "preposition",
                "intersectionality,": "noun", "first": "adverb", "theorized": "participle",
                "by": "preposition", "legal": "adjective", "scholar": "noun",
                "Kimberlé": "noun", "Crenshaw": "noun", "in": "preposition",
                "1989,": "noun", "posits": "verb", "that": "subordinating_conjunction",
                "systems": "noun", "oppression": "noun", "such": "adverb",
                "as": "preposition", "racism,": "noun", "sexism,": "noun",
                "and": "coordinating_conjunction", "classism": "noun", "do": "verb",
                "not": "adverb", "operate": "verb", "independently": "adverb",
                "but": "coordinating_conjunction", "rather": "adverb", "compound": "verb",
                "reinforce": "verb", "one": "pronoun", "another": "pronoun",
                "in": "preposition", "ways": "noun", "that": "pronoun",
                "produce": "verb", "qualitatively": "adverb", "distinct": "adjective",
                "experiences": "object", "for": "preposition", "individuals": "noun",
                "who": "pronoun", "occupy": "verb", "multiple": "adjective",
                "marginalized": "adjective", "identities": "noun", "simultaneously": "adverb"
            },
            diagram: {
                subject: ["The", "concept", "of", "intersectionality,"],
                verb: ["posits"],
                object: ["that", "systems", "of", "oppression", "such", "as", "racism,", "sexism,", "and", "classism", "do", "not", "operate", "independently"],
                prepositional: ["but", "rather", "compound", "and", "reinforce", "one", "another", "in", "ways", "that", "produce", "qualitatively", "distinct", "experiences", "for", "individuals", "who", "occupy", "multiple", "marginalized", "identities", "simultaneously"]
            }
        },
        {
            text: "While neoliberal economic policies have generated unprecedented levels of global wealth since the 1980s, critics contend that the benefits have been so unevenly distributed that the resulting concentration of capital among a narrow elite has undermined the democratic institutions and social solidarity upon which sustainable prosperity ultimately depends.",
            type: "compound-complex",
            difficulty: 5,
            explanation: "Compound-complex sentence with a concessive clause, main clause, and embedded subordinate clause arguing against neoliberalism.",
            partsOfSpeech: {
                "While": "subordinating_conjunction", "neoliberal": "adjective",
                "economic": "adjective", "policies": "noun", "have": "verb",
                "generated": "verb", "unprecedented": "adjective", "levels": "noun",
                "of": "preposition", "global": "adjective", "wealth": "noun",
                "since": "preposition", "the": "article", "1980s,": "noun",
                "critics": "subject", "contend": "verb", "that": "subordinating_conjunction",
                "benefits": "noun", "been": "verb", "so": "adverb",
                "unevenly": "adverb", "distributed": "participle",
                "resulting": "adjective", "concentration": "noun", "capital": "noun",
                "among": "preposition", "narrow": "adjective", "elite": "noun",
                "has": "verb", "undermined": "verb", "democratic": "adjective",
                "institutions": "object", "and": "coordinating_conjunction",
                "social": "adjective", "solidarity": "noun", "upon": "preposition",
                "which": "pronoun", "sustainable": "adjective", "prosperity": "noun",
                "ultimately": "adverb", "depends": "verb"
            },
            diagram: {
                dependent: ["While", "neoliberal", "economic", "policies", "have", "generated", "unprecedented", "levels", "of", "global", "wealth", "since", "the", "1980s,"],
                subject: ["critics"],
                verb: ["contend"],
                object: ["that", "the", "benefits", "have", "been", "so", "unevenly", "distributed"],
                prepositional: ["that", "the", "resulting", "concentration", "of", "capital", "among", "a", "narrow", "elite", "has", "undermined", "the", "democratic", "institutions", "and", "social", "solidarity", "upon", "which", "sustainable", "prosperity", "ultimately", "depends"]
            }
        },
        {
            text: "The epistemological crisis precipitated by the advent of social media and algorithmic information curation has not merely complicated the traditional distinction between fact and opinion but has fundamentally destabilized the shared epistemic foundations upon which democratic deliberation, scientific consensus, and civic trust have historically depended.",
            type: "compound-complex",
            difficulty: 5,
            explanation: "Highly sophisticated sentence with compound predicate, embedded relative clause, and academic vocabulary exploring epistemology and democracy.",
            partsOfSpeech: {
                "The": "article", "epistemological": "adjective", "crisis": "subject",
                "precipitated": "participle", "by": "preposition", "the": "article",
                "advent": "noun", "of": "preposition", "social": "adjective",
                "media": "noun", "and": "coordinating_conjunction", "algorithmic": "adjective",
                "information": "noun", "curation": "noun", "has": "verb",
                "not": "adverb", "merely": "adverb", "complicated": "verb",
                "traditional": "adjective", "distinction": "object", "between": "preposition",
                "fact": "noun", "opinion": "noun", "but": "coordinating_conjunction",
                "fundamentally": "adverb", "destabilized": "verb", "shared": "adjective",
                "epistemic": "adjective", "foundations": "noun", "upon": "preposition",
                "which": "pronoun", "democratic": "adjective", "deliberation,": "noun",
                "scientific": "adjective", "consensus,": "noun", "civic": "adjective",
                "trust": "noun", "historically": "adverb", "depended": "verb"
            },
            diagram: {
                subject: ["The", "epistemological", "crisis", "precipitated", "by", "the", "advent", "of", "social", "media", "and", "algorithmic", "information", "curation"],
                verb: ["has", "not", "merely", "complicated"],
                object: ["the", "traditional", "distinction", "between", "fact", "and", "opinion"],
                prepositional: ["but", "has", "fundamentally", "destabilized", "the", "shared", "epistemic", "foundations", "upon", "which", "democratic", "deliberation,", "scientific", "consensus,", "and", "civic", "trust", "have", "historically", "depended"]
            }
        }
    ]
};

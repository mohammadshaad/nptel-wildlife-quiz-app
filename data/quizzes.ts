interface Question {
    question: string;
    options: string[];
    correctAnswer: number;
}

interface Quiz {
    week: number;
    questions: Question[];
}

export const quizzes: Quiz[] = [
    {
        week: 1,
        questions: [
            {
                question: `"Enquiry into plants" is a book written by`,
                options: ["Theophrastus", "Linnaeus", "Malthus", "Humboldt"],
                correctAnswer: 0,
            },
            {
                question: `In the Greek word root of Ecology, Oikos refers to`,
                options: ["household", "preservation", "environment", "study"],
                correctAnswer: 0,
            },
            {
                question: `In the Greek word root of Ecology, logos refers to`,
                options: ["household", "preservation", "environment", "study"],
                correctAnswer: 3,
            },
            {
                question: `Ecology is the scientific study of interactions among organisms and their_____. (fill in the blanks)`,
                options: ["habitat", "niche", "environment", "population"],
                correctAnswer: 2,
            },
            {
                question: `Who amongst these is considered the father of Biogeography?`,
                options: ["Theophrastus", "Linnaeus", "Malthus", "Humboldt"],
                correctAnswer: 3,
            },
            {
                question: `Which of these is not a characteristic of fitness?`,
                options: [
                    "Fitness is environment-specific",
                    "Fitness is species-specific",
                    "Higher reproductive rate means higher fitness",
                    "Fitness should be measured across several generations",
                ],
                correctAnswer: 2,
            },
            {
                question: `Which of these is not a kind of selection?`,
                options: ["directional", "stochastic", "disruptive", "stabilising"],
                correctAnswer: 1,
            },
            {
                question: `Ecology is the scientific study of _______ that determine the distribution and abundance of organisms. (Fill in the blanks)`,
                options: ["statics", "interactions", "dynamics", "habitat"],
                correctAnswer: 1,
            },
            {
                question: `Which of these is not a characteristic of fitness?`,
                options: [
                    "Fitness is environment-specific.",
                    "Fitness is species-specific.",
                    "Fitness works on traits such as size and speed.",
                    "Fitness should be measured across several generations.",
                ],
                correctAnswer: 2,
            },
            {
                question: `Which of these is not a step in natural selection?`,
                options: [
                    "variation",
                    "underpopulation",
                    "struggle for existence",
                    "survival of the fittest",
                ],
                correctAnswer: 1,
            },
        ],
    },
    {
        week: 2,
        questions: [
            {
                question: `Hierarchy emerges almost inevitably through a wide variety of evolutionary processes, for the simple reason that hierarchical structures are _____ (fill in the blank)`,
                options: ["perfect", "imperfect", "stable", "unstable"],
                correctAnswer: 2,
            },
            {
                question: `The mitochondrion is a/an`,
                options: ["sub-cellular organelle", "cell", "tissue", "organ"],
                correctAnswer: 0,
            },
            {
                question: `The laboratory approach to ecology uses`,
                options: ["equations", "models", "observations", "experiments"],
                correctAnswer: 3,
            },
            {
                question: `"The diversity that exists among different geographies" is`,
                options: ["alpha biodiversity", "beta biodiversity", "gamma biodiversity", "delta biodiversity"],
                correctAnswer: 2,
            },
            {
                question: `The hierarchical system was given by`,
                options: ["Simon", "Watson", "Hutchinson", "Humboldt"],
                correctAnswer: 0,
            },
            {
                question: `"Groups of actually or potentially interbreeding natural populations, which are reproductively isolated from other such species" is a definition of`,
                options: ["cells", "species", "ecosystems", "biomes"],
                correctAnswer: 1,
            },
            {
                question: `"The diversity that exists within an ecosystem" is`,
                options: ["alpha biodiversity", "beta biodiversity", "gamma biodiversity", "delta biodiversity"],
                correctAnswer: 0,
            },
            {
                question: `The emergent principle can be stated as`,
                options: [
                    "whole = sum of parts",
                    "whole < sum of parts",
                    "whole > sum of parts",
                    "none of these",
                ],
                correctAnswer: 2,
            },
            {
                question: `There is more biodiversity in areas with`,
                options: [
                    "less competition, less predation",
                    "less competition, more predation",
                    "more competition, more predation",
                    "more competition, less predation",
                ],
                correctAnswer: 2,
            },
            {
                question: `For more biodiversity, the level of disturbance should be`,
                options: ["less", "intermediate", "more", "none of these"],
                correctAnswer: 1,
            },
        ],
    },
    {
        week: 3,
        questions: [
            {
                question: `Birds on giraffe are an example of`,
                options: ["colony", "commensalism", "protocooperation", "allelopathy"],
                correctAnswer: 2,
            },
            {
                question: `Egrets with buffaloes are an example of`,
                options: ["colony", "commensalism", "protocooperation", "allelopathy"],
                correctAnswer: 1,
            },
            {
                question: `The scientific study of animal behaviour is called`,
                options: ["behaviourism", "ecology", "ethology", "prey-predator dynamics"],
                correctAnswer: 2,
            },
            {
                question: `The interaction between exotic shrubs and trees through the action of seed predators is an example of`,
                options: [
                    "infraspecific competition",
                    "apparent competition",
                    "disguised competition",
                    "harmonious competition",
                ],
                correctAnswer: 1,
            },
            {
                question: `Harmonious competition occurs where`,
                options: [
                    "at least one participant is benefited",
                    "at least one participant is unharmed",
                    "both participants are benefited",
                    "both participants are unharmed",
                ],
                correctAnswer: 3,
            },
            {
                question: `Hamilton's rule can be stated as`,
                options: ["rB < C", "rB > C", "rB = C", "rB + C = 0"],
                correctAnswer: 1,
            },
            {
                question: `Trampling of grass due to the movement of animals is an example of`,
                options: ["mutualism", "ammensalism", "commensalism", "protocooperation"],
                correctAnswer: 1,
            },
            {
                question: `I observe a monkey take a tick out of another monkey's head and eat it. In the social context, this behaviour would be called`,
                options: ["tick hunting", "auto grooming", "allo grooming", "foraging"],
                correctAnswer: 2,
            },
            {
                question: `An inventory of behaviours exhibited by an animal during a behaviour exercise is called`,
                options: ["ecogram", "ethogram", "behaviourogram", "animalogram"],
                correctAnswer: 1,
            },
            {
                question: `I observe a bird take a tick out of another bird's head and eat it. In the social context, this behaviour would be called`,
                options: ["tick hunting", "auto grooming", "allo grooming", "foraging"],
                correctAnswer: 2,
            },
        ],
    },
    {
        week: 4,
        questions: [
            {
                question: `Consider the food chain: grass --> grasshopper --> frog --> snake --> hawk. As we move up the food chain,`,
                options: [
                    "available energy decreases",
                    "available energy increases",
                    "available energy remains same",
                    "available energy is zero everywhere",
                ],
                correctAnswer: 0,
            },
            {
                question: `Consider the food chain: grass --> grasshopper --> frog --> snake --> hawk. In this food chain,`,
                options: [
                    "hawk is producer",
                    "hawk is consumer and carnivore",
                    "hawk is consumer and herbivore",
                    "hawk is decomposer",
                ],
                correctAnswer: 1,
            },
            {
                question: `Trees --> birds --> parasites --> hyperparasites represent`,
                options: [
                    "upright pyramid of numbers",
                    "inverted pyramid of numbers",
                    "spindle pyramid of numbers",
                    "dumb-bell pyramid of numbers",
                ],
                correctAnswer: 1,
            },
            {
                question: `Consider the food chain: grass --> grasshopper --> frog --> snake --> hawk. In this food chain,`,
                options: [
                    "frog is producer",
                    "frog is consumer and carnivore",
                    "frog is consumer and herbivore",
                    "frog is decomposer",
                ],
                correctAnswer: 1,
            },
            {
                question: `At the compensation point`,
                options: [
                    "photosynthesis = respiration",
                    "photosynthesis < respiration",
                    "photosynthesis > respiration",
                    "photosynthesis = 0",
                ],
                correctAnswer: 0,
            },
            {
                question: `Tree --> frugivorous birds --> hawk represents`,
                options: [
                    "upright pyramid of numbers",
                    "inverted pyramid of numbers",
                    "spindle pyramid of numbers",
                    "dumb-bell pyramid of numbers",
                ],
                correctAnswer: 2,
            },
            {
                question: `Glacial lakes are typical examples of`,
                options: [
                    "eutrophic lakes",
                    "hypereutrophic lakes",
                    "oligotrophic lakes",
                    "mesotrophic lakes",
                ],
                correctAnswer: 2,
            },
            {
                question: `Consider the food chain: grass --> grasshopper --> frog --> snake --> hawk. In this food chain,`,
                options: [
                    "more numbers of hawks than grasshoppers can be supported",
                    "more numbers of grasshoppers than hawks can be supported",
                    "equal numbers of hawks and grasshoppers can be supported",
                    "none of these",
                ],
                correctAnswer: 1,
            },
            {
                question: `If we all become vegetarians, we'll be able to support our large populations. This can be explained through`,
                options: [
                    "10% rule",
                    "1% rule",
                    "trophic cascades",
                    "biodiversity",
                ],
                correctAnswer: 0,
            },
            {
                question: `Net primary productivity is given by`,
                options: [
                    "APAR x LUE",
                    "APAR + LUE",
                    "APAR - LUE",
                    "APAR / LUE",
                ],
                correctAnswer: 0,
            },
        ],
    },    
    {
        "week": 5,
        "questions": [
            {
                "question": "____ is how close the measured values are to the correct value",
                "options": ["accuracy", "precision", "bias", "variance"],
                "correctAnswer": 0
            },
            {
                "question": "Which of these is not a measure of absolute population density?",
                "options": ["total count", "pelt count", "capture-recapture method", "removal method"],
                "correctAnswer": 1
            },
            {
                "question": "The logistic growth equation, when plotted, appears",
                "options": ["I shaped", "J shaped", "S shaped", "O shaped"],
                "correctAnswer": 2
            },
            {
                "question": "______ employs a simple rule of selecting every kth unit starting with a number chosen at random from 1 to k as the random start",
                "options": ["simple random sampling", "systematic sampling", "stratified sampling", "multistage sampling"],
                "correctAnswer": 1
            },
            {
                "question": "The juvenile mortality rate is the annual number of deaths of juveniles per",
                "options": ["100 births", "1000 births", "100 live births", "1000 live births"],
                "correctAnswer": 3
            },
            {
                "question": "The minimum replacement level fertility for a population to grow should be greater than",
                "options": ["1", "2", "3", "4"],
                "correctAnswer": 1
            },
            {
                "question": "Pan traps are used for sampling",
                "options": ["bees", "butterflies", "non-pollinator insects", "pollinator insects"],
                "correctAnswer": 3
            },
            {
                "question": "Which of these is true?",
                "options": [
                    "physiological longevity > ecological longevity",
                    "physiological longevity = ecological longevity",
                    "physiological longevity < ecological longevity",
                    "a or b"
                ],
                "correctAnswer": 3
            },
            {
                "question": "A sampling procedure such that each possible combination of sampling units out of the population has the same chance of being selected is referred to as",
                "options": ["simple random sampling", "systematic sampling", "stratified sampling", "multistage sampling"],
                "correctAnswer": 0
            },
            {
                "question": "Cover board surveys are typically used for sampling",
                "options": ["herpetofauna", "fishes", "large mammals", "carnivores"],
                "correctAnswer": 0
            }
        ]
    },    
    {
        week: 6,
        questions: [
            {
                question: "A climax caused by wildfires is an example of",
                options: ["climatic climax", "edaphic climax", "disclimax", "catastrophic climax"],
                correctAnswer: 3,
            },
            {
                question: "When compared to generalist species, specialist species have",
                options: ["narrower niches", "broader niches", "same-size niches", "none of these"],
                correctAnswer: 0,
            },
            {
                question: "Which of these depicts correctly the lithosere primary succession",
                options: [
                    "rock --> crustose lichen --> foliose lichen --> moss --> herbaceous stage --> shrub --> woodland --> climax",
                    "rock --> foliose lichen --> crustose lichen --> moss --> herbaceous stage --> shrub --> woodland --> climax",
                    "moss --> crustose lichen --> foliose lichen --> rock --> herbaceous stage --> shrub --> woodland --> climax",
                    "rock --> crustose lichen --> foliose lichen --> shrub --> herbaceous stage --> moss --> woodland --> climax"
                ],
                correctAnswer: 0,
            },
            {
                question: "Importance value can be written as",
                options: [
                    "relative density + relative frequency X relative dominance",
                    "relative density X relative frequency + relative dominance",
                    "relative density + relative frequency + relative dominance",
                    "relative density X relative frequency X relative dominance"
                ],
                correctAnswer: 2,
            },
            {
                question: "Lithosere is an example of",
                options: ["hydrosere", "xerosere", "psammosere", "halosere"],
                correctAnswer: 1,
            },
            {
                question: "Importance value varies from",
                options: ["0 to 10", "0 to 50", "0 to 100", "0 to 300"],
                correctAnswer: 3,
            },
            {
                question: "A species found most frequently in a particular community, but also present occasionally in others is called",
                options: ["accidental species", "indifferent species", "selective species", "exclusive species"],
                correctAnswer: 2,
            },
            {
                question: "The climax near Tindi village is being controlled by disturbance by cattle. This is an example of",
                options: ["climatic climax", "edaphic climax", "disclimax", "catastrophic climax"],
                correctAnswer: 2,
            },
            {
                question: "Which of these is correct?",
                options: [
                    "fundamental niche > realised niche",
                    "fundamental niche = realised niche",
                    "fundamental niche < realised niche",
                    "a or b"
                ],
                correctAnswer: 3,
            },
            {
                question: "Which of these is not a characteristic of pioneer species",
                options: ["ability to grow on bare rocks", "ability to tolerate extreme temperatures", "large size", "short life span"],
                correctAnswer: 2,
            },
        ],
    },
    {
        week: 7,
        questions: [
            {
                question: `I tried growing vegetables under my teak plantation, but the vegetable plants died out. I should be concerned about`,
                options: ["autophagy", "allelophagy", "autopathy", "allelopathy"],
                correctAnswer: 3,
            },
            {
                question: `Which of these is a physical factor of habitat?`,
                options: ["soil", "moisture", "predators", "temperatures"],
                correctAnswer: 3,
            },
            {
                question: `"The rate of biological process is limited by that factor in least amount relative to requirement, so there is a single limiting factor" this is the statement for`,
                options: [
                    "Liebig's law of minimum",
                    "Liebig's law of maximum",
                    "Shelford's law of tolerance",
                    "Shelford's law of intolerance",
                ],
                correctAnswer: 0,
            },
            {
                question: `Transplantation experiments are used to find`,
                options: ["potential range", "effective range", "actual range", "economic range"],
                correctAnswer: 0,
            },
            {
                question: `"Quick movement over large distances, often across unsuitable terrain" is a definition of`,
                options: ["diffusion", "secular dispersal", "jump dispersal", "drifting"],
                correctAnswer: 2,
            },
            {
                question: `The movement of lions across the Gir landscape is an example of`,
                options: ["diffusion", "secular dispersal", "jump dispersal", "drifting"],
                correctAnswer: 0,
            },
            {
                question: `Good climate is a`,
                options: ["chemical factor", "demographic factor", "push factor", "pull factor"],
                correctAnswer: 3,
            },
            {
                question: `Scarcity of food is a`,
                options: ["chemical factor", "demographic factor", "push factor", "pull factor"],
                correctAnswer: 2,
            },
            {
                question: `"The geographical distribution of a species will be controlled by that environment factor for which the organism has the narrowest range of tolerance" this is the statement for`,
                options: [
                    "Liebig's law of minimum",
                    "Liebig's law of maximum",
                    "Shelford's law of tolerance",
                    "Shelford's law of intolerance",
                ],
                correctAnswer: 2,
            },
            {
                question: `The movement of individuals away from their place of birth or hatching or seed production into a new habitat or area to survive and reproduce is called`,
                options: ["translocation", "migration", "dispersal", "drifting"],
                correctAnswer: 2,
            },
            {
                question: `Which of the following describes the primary productivity of an ecosystem?`,
                options: [
                    "The total amount of biomass produced",
                    "The rate of biomass production per unit area",
                    "The efficiency of energy transfer",
                    "The diversity of species present",
                ],
                correctAnswer: 1,
            },
            {
                question: `What is the term for the variety of life in a particular habitat?`,
                options: [
                    "Genetic diversity",
                    "Species diversity",
                    "Ecosystem diversity",
                    "Community diversity",
                ],
                correctAnswer: 1,
            },
            {
                question: `What type of relationship exists between bees and flowering plants?`,
                options: [
                    "Parasitism",
                    "Mutualism",
                    "Commensalism",
                    "Competition",
                ],
                correctAnswer: 1,
            },
            {
                question: `What is the primary cause of habitat loss?`,
                options: [
                    "Climate change",
                    "Pollution",
                    "Urbanization",
                    "Invasive species",
                ],
                correctAnswer: 2,
            },
            {
                question: `Which of the following is a characteristic of r-strategists?`,
                options: [
                    "Low reproductive rate",
                    "Long lifespan",
                    "High parental care",
                    "Rapid reproduction",
                ],
                correctAnswer: 3,
            },
            {
                question: `The interaction between two species where one benefits and the other is neither helped nor harmed is called`,
                options: [
                    "Mutualism",
                    "Commensalism",
                    "Parasitism",
                    "Competition",
                ],
                correctAnswer: 1,
            },
            {
                question: `Which process is responsible for the water cycle?`,
                options: [
                    "Evaporation",
                    "Precipitation",
                    "Transpiration",
                    "All of the above",
                ],
                correctAnswer: 3,
            },
            {
                question: `Which of these gases is a greenhouse gas?`,
                options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
                correctAnswer: 2,
            },
            {
                question: `Which of the following best describes an ecological niche?`,
                options: [
                    "The role an organism plays in its ecosystem",
                    "The physical space an organism occupies",
                    "The evolutionary history of a species",
                    "The genetic makeup of a population",
                ],
                correctAnswer: 0,
            },
            {
                question: `Which of the following factors contributes to global warming?`,
                options: [
                    "Decreased carbon emissions",
                    "Increased deforestation",
                    "Increased solar energy",
                    "Increased biodiversity",
                ],
                correctAnswer: 1,
            },
        ],
    },
    {
        "week": 8,
        "questions": [
            {
                "question": "Which biome has the highest annual rainfall?",
                "options": [
                    "Tundra",
                    "Desert",
                    "Tropical rainforest",
                    "Temperate forest"
                ],
                "correctAnswer": 2
            },
            {
                "question": "What term describes the movement of energy through an ecosystem?",
                "options": [
                    "Nutrient cycling",
                    "Food chain",
                    "Trophic level",
                    "Biomagnification"
                ],
                "correctAnswer": 1
            },
            {
                "question": "Which type of ecological succession occurs in an area where no soil exists?",
                "options": [
                    "Primary succession",
                    "Secondary succession",
                    "Climatic succession",
                    "Zonal succession"
                ],
                "correctAnswer": 0
            },
            {
                "question": "Which of these processes is a method of nitrogen cycling?",
                "options": [
                    "Nitrification",
                    "Eutrophication",
                    "Photosynthesis",
                    "Respiration"
                ],
                "correctAnswer": 0
            },
            {
                "question": "Which of the following best describes biodiversity hotspots?",
                "options": [
                    "Areas with high species richness and high endemism",
                    "Areas with low species diversity",
                    "Areas undergoing significant deforestation",
                    "Areas with high pollution levels"
                ],
                "correctAnswer": 0
            },
            {
                "question": "Which of the following is a direct effect of climate change?",
                "options": [
                    "Increased biodiversity",
                    "Decreased ocean levels",
                    "More extreme weather patterns",
                    "Enhanced photosynthesis"
                ],
                "correctAnswer": 2
            },
            {
                "question": "The primary cause of the greenhouse effect is",
                "options": [
                    "Ozone depletion",
                    "Carbon dioxide emissions",
                    "Water vapor",
                    "Methane production"
                ],
                "correctAnswer": 1
            },
            {
                "question": "What is the term for species that are at risk of extinction?",
                "options": [
                    "Endangered species",
                    "Invasive species",
                    "Keystone species",
                    "Threatened species"
                ],
                "correctAnswer": 0
            },
            {
                "question": "The term for the gradual replacement of one community by another is",
                "options": [
                    "Ecological succession",
                    "Migration",
                    "Adaptation",
                    "Natural selection"
                ],
                "correctAnswer": 0
            },
            {
                "question": "Which of the following is an example of an abiotic factor in an ecosystem?",
                "options": [
                    "Plants",
                    "Animals",
                    "Temperature",
                    "Fungi"
                ],
                "correctAnswer": 2
            }
        ]
    },
    {
        "week": 9,
        "questions": [
            {
                "question": "Which of these is a positive check according to Malthus?",
                "options": [
                    "Late marriage",
                    "War",
                    "Celibacy",
                    "Moral restraint"
                ],
                "correctAnswer": 1
            },
            {
                "question": "The demographic transition sees a society move from",
                "options": [
                    "High birth rate, low death rate to low birth rate, low death rate",
                    "Low birth rate, high death rate to low birth rate, low death rate",
                    "High birth rate, high death rate to low birth rate, low death rate",
                    "High birth rate, high death rate to low birth rate, high death rate"
                ],
                "correctAnswer": 2
            },
            {
                "question": "According to the Malthusian model",
                "options": [
                    "Population grows in geometric progression, food supply increases in arithmetic progression",
                    "Population grows in geometric progression, food supply increases in geometric progression",
                    "Population grows in arithmetic progression, food supply increases in arithmetic progression",
                    "Population grows in arithmetic progression, food supply increases in geometric progression"
                ],
                "correctAnswer": 0
            },
            {
                "question": "The book 'An Essay on the Principle of Population' was written by",
                "options": [
                    "Darwin",
                    "Malthus",
                    "Spencer",
                    "Owens"
                ],
                "correctAnswer": 1
            },
            {
                "question": "_______ is used to identify which potential impacts are relevant to assess. (fill in the blank)",
                "options": [
                    "Screening",
                    "Scoping",
                    "Reporting",
                    "Review"
                ],
                "correctAnswer": 1
            },
            {
                "question": "Which of these is a preventive check according to Malthus?",
                "options": [
                    "Foresight",
                    "Vice",
                    "Misery",
                    "Flood"
                ],
                "correctAnswer": 0
            },
            {
                "question": "______ determines which projects or developments require a full or partial impact assessment study. (fill in the blank)",
                "options": [
                    "Screening",
                    "Scoping",
                    "Reporting",
                    "Review"
                ],
                "correctAnswer": 0
            },
            {
                "question": "Which of these is a pillar of sustainability?",
                "options": [
                    "Social sustainability",
                    "Industrial sustainability",
                    "Agricultural sustainability",
                    "Trans-boundary sustainability"
                ],
                "correctAnswer": 0
            },
            {
                "question": "Which of these is not a pillar of sustainability?",
                "options": [
                    "Environmental sustainability",
                    "Economic sustainability",
                    "Trans-boundary sustainability",
                    "Agricultural sustainability"
                ],
                "correctAnswer": 2
            },
            {
                "question": "The quantum of human impacts is given by",
                "options": [
                    "I = P X A X T",
                    "I = P + A + T",
                    "I = P + A - T",
                    "I = P - (A+T)"
                ],
                "correctAnswer": 0
            }
        ]
    },
    {
        "week": 10,
        "questions": [
            {
                "question": "What is the main process by which carbon is stored in plants?",
                "options": [
                    "Respiration",
                    "Photosynthesis",
                    "Decomposition",
                    "Combustion"
                ],
                "correctAnswer": 1
            },
            {
                "question": "Which of the following ecosystems is most threatened by climate change?",
                "options": [
                    "Coral reefs",
                    "Temperate forests",
                    "Grasslands",
                    "Deserts"
                ],
                "correctAnswer": 0
            },
            {
                "question": "The primary purpose of biodiversity conservation is to",
                "options": [
                    "Protect endangered species",
                    "Maintain ecosystem services",
                    "Preserve genetic diversity",
                    "All of the above"
                ],
                "correctAnswer": 3
            },
            {
                "question": "Which of the following is a major consequence of deforestation?",
                "options": [
                    "Increased biodiversity",
                    "Reduced carbon dioxide levels",
                    "Habitat loss",
                    "Enhanced soil fertility"
                ],
                "correctAnswer": 2
            },
            {
                "question": "What type of symbiotic relationship benefits one organism while harming the other?",
                "options": [
                    "Commensalism",
                    "Mutualism",
                    "Parasitism",
                    "Competition"
                ],
                "correctAnswer": 2
            },
            {
                "question": "What is the primary function of the ozone layer?",
                "options": [
                    "To absorb ultraviolet radiation",
                    "To regulate temperature",
                    "To provide oxygen",
                    "To trap greenhouse gases"
                ],
                "correctAnswer": 0
            },
            {
                "question": "What term describes the gradual change in species composition of a community over time?",
                "options": [
                    "Ecological succession",
                    "Migration",
                    "Adaptation",
                    "Natural selection"
                ],
                "correctAnswer": 0
            },
            {
                "question": "Which of the following is a potential solution to climate change?",
                "options": [
                    "Reducing fossil fuel consumption",
                    "Increasing deforestation",
                    "Using more plastic products",
                    "Decreasing renewable energy use"
                ],
                "correctAnswer": 0
            },
            {
                "question": "What is the term for a group of ecosystems that share similar climate and organisms?",
                "options": [
                    "Biome",
                    "Habitat",
                    "Niche",
                    "Community"
                ],
                "correctAnswer": 0
            },
            {
                "question": "Which of the following is not a method of biodiversity conservation?",
                "options": [
                    "Establishing protected areas",
                    "Restoring degraded ecosystems",
                    "Invasive species removal",
                    "Promoting monoculture farming"
                ],
                "correctAnswer": 3
            }
        ]
    },
    {
        week: 11,
        questions: [
            {
                question: `which of these is correct?`,
                options: [
                    "R + G = M + F",
                    "R + M = G + F",
                    "R + F = M + G",
                    "R + G + M + F = 0",
                ],
                correctAnswer: 0,
            },
            {
                question: `which of these is not an impact of toxic chemicals?`,
                options: [
                    "lethal effects",
                    "sub-lethal effects",
                    "reduction of existing stressors",
                    "reduced fecundity",
                ],
                correctAnswer: 2,
            },
            {
                question: `a pest population is called controlled when`,
                options: [
                    "it is not increasing",
                    "it is decreasing",
                    "it is not causing any economic damage",
                    "it is not causing excessive economic damage",
                ],
                correctAnswer: 3,
            },
            {
                question: `a deciduous forest in Madhya Pradesh was converted to a mine. after the mining operations were over, the pits were filled up with soil and species of deciduous forest planted again. this is an example of`,
                options: ["recovery", "restoration", "enhancement", "replacement"],
                correctAnswer: 1,
            },
            {
                question: `the root zone treatment plant is an example of`,
                options: [
                    "phytoremediation",
                    "biological control",
                    "biomagnification",
                    "bioaccumulation",
                ],
                correctAnswer: 0,
            },
            {
                question: `a pest population called uncontrolled when`,
                options: [
                    "it is increasing",
                    "it is not decreasing",
                    "it is causing some economic damage",
                    "it is causing excessive economic damage",
                ],
                correctAnswer: 3,
            },
            {
                question: `the impact of El Nino on fishery in Peru is explained by`,
                options: [
                    "match hypothesis",
                    "mismatch hypothesis",
                    "match-mismatch hypothesis",
                    "none of these",
                ],
                correctAnswer: 2,
            },
            {
                question: `which of these is correct`,
                options: [
                    "the maximum sustainable yield is near the beginning of the sigmoidal curve",
                    "the maximum sustainable yield is near the mid-point of the sigmoidal curve",
                    "the maximum sustainable yield is near the end of the sigmoidal curve",
                    "none of these",
                ],
                correctAnswer: 1,
            },
            {
                question: `Ludwig's ratchet predicts`,
                options: [
                    "decreasing harvesting rate",
                    "constant harvesting rate",
                    "increasing harvesting rate",
                    "fluctuating harvesting rate",
                ],
                correctAnswer: 2,
            },
            {
                question: `a deciduous forest in Madhya Pradesh was converted to a mine. after the mining operations were over, the pits were filled up with water and a lake was created. it is now visited by several migratory birds. this is an example of`,
                options: ["recovery", "restoration", "enhancement", "replacement"],
                correctAnswer: 3,
            },
        ],
    },
    {
        week: 12,
        questions: [
            {
                question: `"Enquiry into plants" is a book written by`,
                options: ["Theophrastus", "Linnaeus", "Malthus", "Humboldt"],
                correctAnswer: 0,
            },
            {
                question: `the mitochondrion is a/an`,
                options: ["sub-cellular organelle", "cell", "tissue", "organ"],
                correctAnswer: 0,
            },
            {
                question: `which of these is not a pillar of sustainability?`,
                options: [
                    "environmental sustainability",
                    "economic sustainability",
                    "trans-boundary sustainability",
                    "social sustainability",
                ],
                correctAnswer: 2,
            },
            {
                question: `good climate is a`,
                options: ["chemical factor", "demographic factor", "push factor", "pull factor"],
                correctAnswer: 3,
            },
            {
                question: `importance value varies from`,
                options: ["0 to 10", "0 to 50", "0 to 100", "0 to 300"],
                correctAnswer: 3,
            },
            {
                question: `consider the food chain: grass --> grasshopper --> frog --> snake --> hawk. in this food chain`,
                options: [
                    "frog is producer",
                    "frog is consumer and carnivore",
                    "frog is consumer and herbivore",
                    "frog is decomposer",
                ],
                correctAnswer: 1,
            },
            {
                question: `the juvenile mortality rate is the annual number of deaths of juvenile per`,
                options: ["100 births", "1000 births", "100 live births", "1000 live births"],
                correctAnswer: 3,
            },
            {
                question: `because of climate change, Mudumalai Tiger Reserve is suffering from frequent droughts. the management has built several artificial water holes for animals, and fills them up regularly with tankers. in the context of climate change, such an action would be called`,
                options: ["adaptation", "mitigation", "deceleration", "maladaptation"],
                correctAnswer: 0,
            },
            {
                question: `the scientific study of animal behaviour is called`,
                options: ["behaviourism", "ecology", "ethology", "prey-predator dynamics"],
                correctAnswer: 2,
            },
            {
                question: `zoo is an example of`,
                options: ["in-situ conservation", "ex-situ conservation", "in-situ preservation", "ex-situ preservation"],
                correctAnswer: 1,
            },
        ],
    },
];

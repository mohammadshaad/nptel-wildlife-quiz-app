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
                question: `At the compensation point, photosynthesis rate equals to`,
                options: [
                    "maximum respiration rate",
                    "minimum respiration rate",
                    "maximum assimilation rate",
                    "minimum assimilation rate",
                ],
                correctAnswer: 1,
            },
            {
                question: `Plants do not have a true nervous system, but they do exhibit a range of behaviour. Such behaviour is called`,
                options: [
                    "adaptation",
                    "responsiveness",
                    "movement",
                    "reaction",
                ],
                correctAnswer: 1,
            },
            {
                question: `Which of the following is not an example of homeostasis?`,
                options: [
                    "the regulation of blood sugar levels",
                    "the regulation of body temperature",
                    "the regulation of metabolic rates",
                    "the regulation of ecological zones",
                ],
                correctAnswer: 3,
            },
            {
                question: `What type of evolution takes place when two different species evolve similar traits due to similar environments?`,
                options: [
                    "convergent evolution",
                    "divergent evolution",
                    "parallel evolution",
                    "adaptive radiation",
                ],
                correctAnswer: 0,
            },
            {
                question: `Which of the following levels of ecological organization is most specific?`,
                options: [
                    "population",
                    "community",
                    "ecosystem",
                    "biosphere",
                ],
                correctAnswer: 0,
            },
            {
                question: `Which of the following is not a biotic factor?`,
                options: [
                    "temperature",
                    "food availability",
                    "competition",
                    "predation",
                ],
                correctAnswer: 0,
            },
        ],
    },
    {
        week: 5,
        questions: [
            {
                question: `The type of biodiversity that occurs within a single habitat is called`,
                options: ["Alpha biodiversity", "Beta biodiversity", "Gamma biodiversity", "Delta biodiversity"],
                correctAnswer: 0,
            },
            {
                question: `Which of these processes is essential for plant survival?`,
                options: ["Photosynthesis", "Respiration", "Reproduction", "None of the above"],
                correctAnswer: 0,
            },
            {
                question: `Which type of ecosystem typically has the highest biodiversity?`,
                options: ["Tropical rainforest", "Desert", "Tundra", "Grassland"],
                correctAnswer: 0,
            },
            {
                question: `Which of these elements is not part of the ecosystem?`,
                options: ["Producers", "Consumers", "Decomposers", "Energy"],
                correctAnswer: 3,
            },
            {
                question: `Which of these is not a characteristic of a sustainable ecosystem?`,
                options: ["Diversity", "Stability", "Vulnerability", "Resilience"],
                correctAnswer: 2,
            },
            {
                question: `Photosynthesis primarily occurs in which part of the plant?`,
                options: ["Roots", "Stem", "Leaves", "Flowers"],
                correctAnswer: 2,
            },
            {
                question: `The role of decomposers in an ecosystem is to`,
                options: ["produce energy", "consume producers", "break down dead matter", "compete for resources"],
                correctAnswer: 2,
            },
            {
                question: `What is the primary source of energy for almost all ecosystems?`,
                options: ["Wind", "Geothermal", "Sunlight", "Water"],
                correctAnswer: 2,
            },
            {
                question: `Which type of biome is characterized by low rainfall and extreme temperature fluctuations?`,
                options: ["Desert", "Tundra", "Temperate forest", "Grassland"],
                correctAnswer: 0,
            },
            {
                question: `The main reason for the seasonal changes in climate is`,
                options: ["the Earth's tilt", "the Earth's rotation", "the distance from the sun", "ocean currents"],
                correctAnswer: 0,
            },
        ],
    },
    {
        week: 6,
        questions: [
            {
                question: `Which of the following elements is most abundant in the Earth's atmosphere?`,
                options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
                correctAnswer: 1,
            },
            {
                question: `The branch of ecology that deals with the study of ecosystems is called`,
                options: ["Community ecology", "Population ecology", "Ecosystem ecology", "Organismal ecology"],
                correctAnswer: 2,
            },
            {
                question: `Which of these is a non-renewable resource?`,
                options: ["Solar energy", "Wind energy", "Coal", "Geothermal energy"],
                correctAnswer: 2,
            },
            {
                question: `Which of the following describes the process of nitrogen fixation?`,
                options: [
                    "Conversion of atmospheric nitrogen to ammonia",
                    "Conversion of ammonia to nitrate",
                    "Conversion of nitrate to nitrogen gas",
                    "Conversion of nitrogen gas to organic nitrogen",
                ],
                correctAnswer: 0,
            },
            {
                question: `What is the primary driver of ocean currents?`,
                options: ["Wind", "Temperature", "Salinity", "Earth's rotation"],
                correctAnswer: 0,
            },
            {
                question: `Which biome is characterized by permafrost?`,
                options: ["Tundra", "Desert", "Tropical rainforest", "Temperate forest"],
                correctAnswer: 0,
            },
            {
                question: `In a food web, producers are organisms that`,
                options: [
                    "consume other organisms",
                    "decompose dead matter",
                    "make their own food",
                    "none of the above",
                ],
                correctAnswer: 2,
            },
            {
                question: `Which of the following is a characteristic of K-strategists?`,
                options: [
                    "High reproductive rate",
                    "Short lifespan",
                    "Parental care",
                    "Rapid population growth",
                ],
                correctAnswer: 2,
            },
            {
                question: `Which of the following biogeochemical cycles does not include the atmosphere?`,
                options: [
                    "Carbon cycle",
                    "Nitrogen cycle",
                    "Phosphorus cycle",
                    "Water cycle",
                ],
                correctAnswer: 2,
            },
            {
                question: `The phenomenon of increased nutrient input into aquatic systems, leading to excessive growth of algae, is known as`,
                options: [
                    "Eutrophication",
                    "Acidification",
                    "Pollution",
                    "Overfishing",
                ],
                correctAnswer: 0,
            },
        ],
    },
    {
        week: 7,
        questions: [
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
        week: 8,
        questions: [
            {
                question: `Which biome has the highest annual rainfall?`,
                options: [
                    "Tundra",
                    "Desert",
                    "Tropical rainforest",
                    "Temperate forest",
                ],
                correctAnswer: 2,
            },
            {
                question: `What term describes the movement of energy through an ecosystem?`,
                options: [
                    "Nutrient cycling",
                    "Food chain",
                    "Trophic level",
                    "Biomagnification",
                ],
                correctAnswer: 1,
            },
            {
                question: `Which type of ecological succession occurs in an area where no soil exists?`,
                options: [
                    "Primary succession",
                    "Secondary succession",
                    "Climatic succession",
                    "Zonal succession",
                ],
                correctAnswer: 0,
            },
            {
                question: `Which of these processes is a method of nitrogen cycling?`,
                options: [
                    "Nitrification",
                    "Eutrophication",
                    "Photosynthesis",
                    "Respiration",
                ],
                correctAnswer: 0,
            },
            {
                question: `Which of the following best describes biodiversity hotspots?`,
                options: [
                    "Areas with high species richness and high endemism",
                    "Areas with low species diversity",
                    "Areas undergoing significant deforestation",
                    "Areas with high pollution levels",
                ],
                correctAnswer: 0,
            },
            {
                question: `Which of the following is a direct effect of climate change?`,
                options: [
                    "Increased biodiversity",
                    "Decreased ocean levels",
                    "More extreme weather patterns",
                    "Enhanced photosynthesis",
                ],
                correctAnswer: 2,
            },
            {
                question: `The primary cause of the greenhouse effect is`,
                options: [
                    "Ozone depletion",
                    "Carbon dioxide emissions",
                    "Water vapor",
                    "Methane production",
                ],
                correctAnswer: 1,
            },
            {
                question: `What is the term for species that are at risk of extinction?`,
                options: [
                    "Endangered species",
                    "Invasive species",
                    "Keystone species",
                    "Threatened species",
                ],
                correctAnswer: 0,
            },
            {
                question: `The term for the gradual replacement of one community by another is`,
                options: [
                    "Ecological succession",
                    "Migration",
                    "Adaptation",
                    "Natural selection",
                ],
                correctAnswer: 0,
            },
            {
                question: `Which of the following is an example of an abiotic factor in an ecosystem?`,
                options: [
                    "Plants",
                    "Animals",
                    "Temperature",
                    "Fungi",
                ],
                correctAnswer: 2,
            },
        ],
    },
    {
        week: 9,
        questions: [
            {
                question: `What is the primary source of energy for living organisms?`,
                options: [
                    "Sunlight",
                    "Water",
                    "Soil",
                    "Air",
                ],
                correctAnswer: 0,
            },
            {
                question: `Which of the following processes does not require oxygen?`,
                options: [
                    "Aerobic respiration",
                    "Photosynthesis",
                    "Anaerobic respiration",
                    "Fermentation",
                ],
                correctAnswer: 2,
            },
            {
                question: `The process by which plants release water vapor is known as`,
                options: [
                    "Transpiration",
                    "Evaporation",
                    "Condensation",
                    "Precipitation",
                ],
                correctAnswer: 0,
            },
            {
                question: `Which of the following describes the concept of carrying capacity?`,
                options: [
                    "The maximum population size an environment can sustain",
                    "The minimum population size needed for survival",
                    "The average lifespan of a species",
                    "The rate of population growth",
                ],
                correctAnswer: 0,
            },
            {
                question: `What is the main cause of ocean acidification?`,
                options: [
                    "Increased carbon dioxide levels",
                    "Excessive fishing",
                    "Plastic pollution",
                    "Oil spills",
                ],
                correctAnswer: 0,
            },
            {
                question: `What is the role of chlorophyll in photosynthesis?`,
                options: [
                    "To absorb light energy",
                    "To produce glucose",
                    "To release oxygen",
                    "To store energy",
                ],
                correctAnswer: 0,
            },
            {
                question: `Which of the following is a producer in an aquatic ecosystem?`,
                options: [
                    "Plankton",
                    "Fish",
                    "Crustaceans",
                    "Mollusks",
                ],
                correctAnswer: 0,
            },
            {
                question: `Which term describes a species that has a disproportionately large impact on its environment relative to its abundance?`,
                options: [
                    "Endemic species",
                    "Invasive species",
                    "Keystone species",
                    "Dominant species",
                ],
                correctAnswer: 2,
            },
            {
                question: `The primary method of energy transfer in an ecosystem is through`,
                options: [
                    "Food chains",
                    "Food webs",
                    "Nutrient cycles",
                    "Photosynthesis",
                ],
                correctAnswer: 1,
            },
            {
                question: `What is the primary function of a wetland?`,
                options: [
                    "To filter pollutants",
                    "To provide habitat for wildlife",
                    "To store water",
                    "All of the above",
                ],
                correctAnswer: 3,
            },
        ],
    },
    {
        week: 10,
        questions: [
            {
                question: `What is the main process by which carbon is stored in plants?`,
                options: [
                    "Respiration",
                    "Photosynthesis",
                    "Decomposition",
                    "Combustion",
                ],
                correctAnswer: 1,
            },
            {
                question: `Which of the following ecosystems is most threatened by climate change?`,
                options: [
                    "Coral reefs",
                    "Temperate forests",
                    "Grasslands",
                    "Deserts",
                ],
                correctAnswer: 0,
            },
            {
                question: `The primary purpose of biodiversity conservation is to`,
                options: [
                    "Protect endangered species",
                    "Maintain ecosystem services",
                    "Preserve genetic diversity",
                    "All of the above",
                ],
                correctAnswer: 3,
            },
            {
                question: `Which of the following is a major consequence of deforestation?`,
                options: [
                    "Increased biodiversity",
                    "Reduced carbon dioxide levels",
                    "Habitat loss",
                    "Enhanced soil fertility",
                ],
                correctAnswer: 2,
            },
            {
                question: `What type of symbiotic relationship benefits one organism while harming the other?`,
                options: [
                    "Commensalism",
                    "Mutualism",
                    "Parasitism",
                    "Competition",
                ],
                correctAnswer: 2,
            },
            {
                question: `What is the primary function of the ozone layer?`,
                options: [
                    "To absorb ultraviolet radiation",
                    "To regulate temperature",
                    "To provide oxygen",
                    "To trap greenhouse gases",
                ],
                correctAnswer: 0,
            },
            {
                question: `What term describes the gradual change in species composition of a community over time?`,
                options: [
                    "Ecological succession",
                    "Migration",
                    "Adaptation",
                    "Natural selection",
                ],
                correctAnswer: 0,
            },
            {
                question: `Which of the following is a potential solution to climate change?`,
                options: [
                    "Reducing fossil fuel consumption",
                    "Increasing deforestation",
                    "Using more plastic products",
                    "Decreasing renewable energy use",
                ],
                correctAnswer: 0,
            },
            {
                question: `What is the term for a group of ecosystems that share similar climate and organisms?`,
                options: [
                    "Biome",
                    "Habitat",
                    "Niche",
                    "Community",
                ],
                correctAnswer: 0,
            },
            {
                question: `Which of the following is not a method of biodiversity conservation?`,
                options: [
                    "Establishing protected areas",
                    "Restoring degraded ecosystems",
                    "Invasive species removal",
                    "Promoting monoculture farming",
                ],
                correctAnswer: 3,
            },
        ],
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

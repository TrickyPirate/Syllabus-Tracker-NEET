// NEET Syllabus Tracker - Enhanced with Dark Theme
// Note: Persistent storage (localStorage) is not available in this sandboxed environment
// All progress is maintained in memory during your session

// NEET Syllabus Data with detailed topics
const syllabusData = {
    physics: {
        class_11: [
            {
                name: "Physical World and Measurement",
                topics: [
                    "Units of measurements and System of Units",
                    "SI Units - fundamental and derived units",
                    "Least count and significant figures",
                    "Errors in measurements",
                    "Dimensions of Physics quantities",
                    "Dimensional analysis and applications"
                ]
            },
            {
                name: "Kinematics",
                topics: [
                    "Frame of reference and motion in straight line",
                    "Position-time graph, speed and velocity",
                    "Uniform and non-uniform motion",
                    "Velocity-time and position-time graphs",
                    "Scalars and Vectors, Vector operations",
                    "Relative Velocity",
                    "Motion in a plane and Projectile Motion",
                    "Uniform Circular Motion"
                ]
            },
            {
                name: "Laws of Motion",
                topics: [
                    "Force and inertia, Newton's First Law",
                    "Momentum and Newton's Second Law",
                    "Newton's Third Law",
                    "Conservation of linear momentum",
                    "Static and Kinetic friction",
                    "Dynamics of circular motion",
                    "Centripetal force applications"
                ]
            },
            {
                name: "Work, Energy and Power",
                topics: [
                    "Work done by constant and variable forces",
                    "Kinetic and potential energies",
                    "Work-energy theorem",
                    "Power and its applications",
                    "Conservation of mechanical energy",
                    "Elastic and inelastic collisions"
                ]
            },
            {
                name: "Rotational Motion",
                topics: [
                    "Centre of mass",
                    "Moment of force and torque",
                    "Angular momentum",
                    "Conservation of angular momentum",
                    "Moment of inertia",
                    "Parallel and perpendicular axes theorems",
                    "Rotational motion equations"
                ]
            },
            {
                name: "Gravitation",
                topics: [
                    "Universal law of gravitation",
                    "Acceleration due to gravity and variations",
                    "Kepler's laws of planetary motion",
                    "Gravitational potential energy and potential",
                    "Escape velocity",
                    "Satellite motion and orbital velocity"
                ]
            },
            {
                name: "Properties of Solids and Liquids",
                topics: [
                    "Elastic behaviour and Hooke's Law",
                    "Stress-strain relationship",
                    "Young's modulus, bulk modulus, rigidity",
                    "Pressure in fluids and Pascal's law",
                    "Viscosity and Stokes' law",
                    "Bernoulli's principle",
                    "Surface tension and capillary rise",
                    "Thermal expansion and specific heat",
                    "Heat transfer methods"
                ]
            },
            {
                name: "Thermodynamics",
                topics: [
                    "Thermal equilibrium and zeroth law",
                    "Heat, work, and internal energy",
                    "First law of thermodynamics",
                    "Isothermal and adiabatic processes",
                    "Second law of thermodynamics"
                ]
            },
            {
                name: "Kinetic Theory of Gases",
                topics: [
                    "Equation of state of perfect gas",
                    "Kinetic theory assumptions",
                    "Kinetic interpretation of temperature",
                    "RMS speed of gas molecules",
                    "Degrees of freedom",
                    "Law of equipartition of energy",
                    "Mean free path"
                ]
            },
            {
                name: "Oscillations and Waves",
                topics: [
                    "Periodic motion and SHM",
                    "Oscillations of a spring",
                    "Energy in SHM",
                    "Simple pendulum",
                    "Wave motion - longitudinal and transverse",
                    "Standing waves and harmonics",
                    "Beats"
                ]
            }
        ],
        class_12: [
            {
                name: "Electrostatics",
                topics: [
                    "Electric charges and conservation",
                    "Coulomb's law",
                    "Electric field and field lines",
                    "Electric dipole",
                    "Gauss's law and applications",
                    "Electric potential",
                    "Capacitors and capacitance",
                    "Energy stored in capacitor"
                ]
            },
            {
                name: "Current Electricity",
                topics: [
                    "Electric current and drift velocity",
                    "Ohm's law",
                    "Electrical resistance and resistivity",
                    "Series and parallel resistors",
                    "Kirchhoff's laws",
                    "Wheatstone bridge and Metre Bridge"
                ]
            },
            {
                name: "Magnetic Effects of Current and Magnetism",
                topics: [
                    "Biot-Savart law",
                    "Ampere's law",
                    "Force on moving charge in magnetic field",
                    "Force on current-carrying conductor",
                    "Torque on current loop",
                    "Moving coil galvanometer",
                    "Magnetic dipole and bar magnet",
                    "Para, dia, and ferromagnetic substances"
                ]
            },
            {
                name: "Electromagnetic Induction and Alternating Currents",
                topics: [
                    "Faraday's law",
                    "Lenz's Law and Eddy currents",
                    "Self and mutual inductance",
                    "AC - peak and RMS values",
                    "LCR series circuit",
                    "AC generator and transformer"
                ]
            },
            {
                name: "Electromagnetic Waves",
                topics: [
                    "Displacement current",
                    "Characteristics of EM waves",
                    "Electromagnetic spectrum",
                    "Applications of EM waves"
                ]
            },
            {
                name: "Optics",
                topics: [
                    "Reflection and spherical mirrors",
                    "Refraction at plane and spherical surfaces",
                    "Thin lens formula",
                    "Total internal reflection",
                    "Prism and dispersion",
                    "Microscope and telescope",
                    "Wave optics and Huygens principle",
                    "Interference and Young's double slit",
                    "Diffraction",
                    "Polarization"
                ]
            },
            {
                name: "Dual Nature of Matter and Radiation",
                topics: [
                    "Photoelectric effect",
                    "Einstein's photoelectric equation",
                    "Matter waves and de Broglie relation"
                ]
            },
            {
                name: "Atoms and Nuclei",
                topics: [
                    "Rutherford's model and alpha scattering",
                    "Bohr model and energy levels",
                    "Hydrogen spectrum",
                    "Nuclear composition",
                    "Mass-energy relation",
                    "Nuclear fission and fusion"
                ]
            },
            {
                name: "Electronic Devices",
                topics: [
                    "Semiconductors and diodes",
                    "I-V characteristics",
                    "LED, photodiode, solar cell",
                    "Zener diode as voltage regulator",
                    "Logic gates"
                ]
            }
        ]
    },
    chemistry: {
        class_11: [
            {
                name: "Some Basic Concepts in Chemistry",
                topics: [
                    "Matter and Dalton's atomic theory",
                    "Atom, molecule, element, compound",
                    "Laws of chemical combination",
                    "Atomic and molecular masses",
                    "Mole concept and molar mass",
                    "Percentage composition",
                    "Empirical and molecular formulae",
                    "Chemical equations and stoichiometry"
                ]
            },
            {
                name: "Atomic Structure",
                topics: [
                    "Nature of electromagnetic radiation",
                    "Photoelectric effect",
                    "Spectrum of hydrogen atom",
                    "Bohr model",
                    "Dual nature of matter",
                    "Heisenberg uncertainty principle",
                    "Quantum mechanical model",
                    "Quantum numbers",
                    "Shapes of orbitals",
                    "Electronic configuration"
                ]
            },
            {
                name: "Classification of Elements and Periodicity",
                topics: [
                    "Modern periodic law",
                    "s, p, d, f block elements",
                    "Periodic trends in atomic radii",
                    "Ionization enthalpy",
                    "Electron gain enthalpy",
                    "Electronegativity",
                    "Valence and oxidation states"
                ]
            },
            {
                name: "Chemical Bonding and Molecular Structure",
                topics: [
                    "Ionic bonding and lattice enthalpy",
                    "Covalent bonding",
                    "VSEPR theory",
                    "Valence bond theory",
                    "Hybridization",
                    "Molecular orbital theory",
                    "Hydrogen bonding"
                ]
            },
            {
                name: "Chemical Thermodynamics",
                topics: [
                    "System and surroundings",
                    "First law of thermodynamics",
                    "Enthalpy and heat capacity",
                    "Hess's law",
                    "Enthalpies of reactions",
                    "Second law and spontaneity",
                    "Gibbs energy and equilibrium constant"
                ]
            },
            {
                name: "Equilibrium",
                topics: [
                    "Dynamic equilibrium concept",
                    "Physical equilibria and Henry's law",
                    "Chemical equilibrium and constants",
                    "Le Chatelier's principle",
                    "Ionic equilibrium",
                    "Acid-base concepts",
                    "pH scale",
                    "Buffer solutions",
                    "Solubility product"
                ]
            },
            {
                name: "Redox Reactions",
                topics: [
                    "Oxidation and reduction concepts",
                    "Oxidation number",
                    "Balancing redox reactions",
                    "Electrochemical cells",
                    "Electrode potentials",
                    "Nernst equation"
                ]
            },
            {
                name: "Organic Chemistry - Basic Principles",
                topics: [
                    "Tetravalency of carbon",
                    "Hybridization and shapes",
                    "Classification of organic compounds",
                    "Isomerism",
                    "IUPAC nomenclature",
                    "Reaction mechanisms",
                    "Inductive effect and resonance",
                    "Types of organic reactions"
                ]
            },
            {
                name: "Hydrocarbons",
                topics: [
                    "Alkanes and conformations",
                    "Halogenation mechanism",
                    "Alkenes and geometrical isomerism",
                    "Electrophilic addition",
                    "Markownikoff's rule",
                    "Alkynes and acidic character",
                    "Aromatic hydrocarbons",
                    "Electrophilic substitution in benzene"
                ]
            },
            {
                name: "P-Block Elements (Part 1)",
                topics: [
                    "Group 13 elements",
                    "Group 14 elements",
                    "Group 15 elements",
                    "Group 16 elements",
                    "Group 17 - Halogens",
                    "Group 18 - Noble gases"
                ]
            }
        ],
        class_12: [
            {
                name: "Solutions",
                topics: [
                    "Concentration expressions",
                    "Raoult's Law",
                    "Ideal and non-ideal solutions",
                    "Colligative properties",
                    "Depression of freezing point",
                    "Elevation of boiling point",
                    "Osmotic pressure",
                    "Van't Hoff factor"
                ]
            },
            {
                name: "Electrochemistry",
                topics: [
                    "Conductance in solutions",
                    "Kohlrausch's law",
                    "Electrochemical cells",
                    "Electrode potentials",
                    "Nernst equation",
                    "Fuel cells",
                    "Corrosion"
                ]
            },
            {
                name: "Chemical Kinetics",
                topics: [
                    "Rate of reaction",
                    "Factors affecting rate",
                    "Order and molecularity",
                    "Rate law and rate constant",
                    "Zero and first order reactions",
                    "Arrhenius equation",
                    "Collision theory"
                ]
            },
            {
                name: "d and f Block Elements",
                topics: [
                    "Electronic configuration",
                    "Properties of transition elements",
                    "Oxidation states",
                    "Magnetic properties",
                    "K2Cr2O7 and KMnO4",
                    "Lanthanoids",
                    "Actinoids"
                ]
            },
            {
                name: "Coordination Compounds",
                topics: [
                    "Werner's theory",
                    "Ligands and coordination number",
                    "IUPAC nomenclature",
                    "Isomerism",
                    "Valence bond theory",
                    "Crystal field theory",
                    "Colour and magnetic properties"
                ]
            },
            {
                name: "Organic Compounds Containing Halogens",
                topics: [
                    "Nomenclature and preparation",
                    "Nature of C-X bond",
                    "Substitution reactions",
                    "Uses and environmental effects"
                ]
            },
            {
                name: "Organic Compounds Containing Oxygen",
                topics: [
                    "Alcohols - types and reactions",
                    "Phenols - acidic nature",
                    "Ethers - structure and properties",
                    "Aldehydes and ketones",
                    "Nucleophilic addition",
                    "Carboxylic acids"
                ]
            },
            {
                name: "Organic Compounds Containing Nitrogen",
                topics: [
                    "Amines - classification",
                    "Basic character of amines",
                    "Preparation and reactions",
                    "Diazonium salts"
                ]
            },
            {
                name: "Biomolecules",
                topics: [
                    "Carbohydrates classification",
                    "Monosaccharides and oligosaccharides",
                    "Proteins and peptide bonds",
                    "Structure of proteins",
                    "Enzymes",
                    "Vitamins",
                    "Nucleic acids - DNA and RNA",
                    "Hormones"
                ]
            },
            {
                name: "Principles Related to Practical Chemistry",
                topics: [
                    "Detection of elements",
                    "Detection of functional groups",
                    "Inorganic compound preparation",
                    "Organic compound preparation",
                    "Titrimetric exercises",
                    "Qualitative salt analysis"
                ]
            },
            {
                name: "P-Block Elements (Part 2)",
                topics: [
                    "Group 15 compounds",
                    "Group 16 compounds",
                    "Group 17 compounds",
                    "Group 18 compounds"
                ]
            }
        ]
    },
    botany: {
        class_11: [
            {
                name: "The Living World",
                topics: [
                    "What is living?",
                    "Biodiversity",
                    "Need for classification",
                    "Taxonomy and Systematics",
                    "Species concept",
                    "Taxonomical hierarchy",
                    "Binomial nomenclature"
                ]
            },
            {
                name: "Biological Classification",
                topics: [
                    "Five kingdom classification",
                    "Kingdom Monera",
                    "Kingdom Protista",
                    "Kingdom Fungi",
                    "Lichens",
                    "Viruses and Viroids"
                ]
            },
            {
                name: "Plant Kingdom",
                topics: [
                    "Algae - features and examples",
                    "Bryophytes - features and examples",
                    "Pteridophytes - features and examples",
                    "Gymnosperms - features and examples",
                    "Classification of plants"
                ]
            },
            {
                name: "Morphology of Flowering Plants",
                topics: [
                    "Root morphology and modifications",
                    "Stem morphology and modifications",
                    "Leaf morphology",
                    "Inflorescence - cymose and racemose",
                    "Flower structure",
                    "Fruit and seed",
                    "Important plant families"
                ]
            },
            {
                name: "Anatomy of Flowering Plants",
                topics: [
                    "Plant tissues",
                    "Tissue systems",
                    "Anatomy of root",
                    "Anatomy of stem",
                    "Anatomy of leaf",
                    "Secondary growth"
                ]
            },
            {
                name: "Cell - The Unit of Life",
                topics: [
                    "Cell theory",
                    "Prokaryotic vs eukaryotic cell",
                    "Cell envelope and membrane",
                    "Cell organelles",
                    "Endomembrane system",
                    "Mitochondria and plastids",
                    "Cytoskeleton",
                    "Nucleus structure"
                ]
            },
            {
                name: "Cell Cycle and Cell Division",
                topics: [
                    "Cell cycle phases",
                    "Mitosis and its stages",
                    "Meiosis and its stages",
                    "Significance of cell division"
                ]
            },
            {
                name: "Photosynthesis in Higher Plants",
                topics: [
                    "Site of photosynthesis",
                    "Pigments in photosynthesis",
                    "Photochemical phase",
                    "Biosynthetic phase",
                    "Cyclic and non-cyclic photophosphorylation",
                    "C3 and C4 pathways",
                    "Photorespiration",
                    "Factors affecting photosynthesis"
                ]
            },
            {
                name: "Respiration in Plants",
                topics: [
                    "Exchange of gases",
                    "Glycolysis",
                    "Fermentation",
                    "TCA cycle",
                    "Electron transport system",
                    "ATP generation",
                    "Respiratory quotient"
                ]
            },
            {
                name: "Plant Growth and Development",
                topics: [
                    "Seed germination",
                    "Phases of plant growth",
                    "Differentiation and dedifferentiation",
                    "Plant growth regulators",
                    "Auxin, Gibberellin, Cytokinin",
                    "Ethylene and ABA"
                ]
            }
        ],
        class_12: [
            {
                name: "Sexual Reproduction in Flowering Plants",
                topics: [
                    "Flower structure",
                    "Male and female gametophytes",
                    "Pollination types and agencies",
                    "Pollen-pistil interaction",
                    "Double fertilization",
                    "Endosperm and embryo development",
                    "Seed and fruit formation",
                    "Apomixis and parthenocarpy"
                ]
            },
            {
                name: "Principles of Inheritance and Variation",
                topics: [
                    "Mendelian Inheritance",
                    "Monohybrid and dihybrid cross",
                    "Incomplete dominance",
                    "Multiple alleles and blood groups",
                    "Pleiotropy",
                    "Polygenic inheritance",
                    "Chromosome theory",
                    "Sex determination",
                    "Linkage and crossing over",
                    "Sex-linked inheritance",
                    "Chromosomal disorders"
                ]
            },
            {
                name: "Molecular Basis of Inheritance",
                topics: [
                    "DNA as genetic material",
                    "Structure of DNA and RNA",
                    "DNA packaging",
                    "DNA replication",
                    "Central dogma",
                    "Transcription",
                    "Genetic code",
                    "Translation",
                    "Gene expression and regulation",
                    "Human genome project"
                ]
            },
            {
                name: "Biotechnology - Principles and Processes",
                topics: [
                    "Principles of biotechnology",
                    "Recombinant DNA technology",
                    "Genetic engineering tools",
                    "Cloning vectors",
                    "Gene cloning"
                ]
            },
            {
                name: "Biotechnology and Its Applications",
                topics: [
                    "Biotechnology in health",
                    "Human insulin production",
                    "Vaccine production",
                    "Gene therapy",
                    "Genetically modified organisms",
                    "Bt crops",
                    "Transgenic animals",
                    "Biosafety issues"
                ]
            },
            {
                name: "Organisms and Population",
                topics: [
                    "Organism and environment",
                    "Population interactions",
                    "Mutualism and competition",
                    "Predation and parasitism",
                    "Population attributes",
                    "Population growth"
                ]
            },
            {
                name: "Ecosystem",
                topics: [
                    "Ecosystem components",
                    "Productivity",
                    "Decomposition",
                    "Energy flow",
                    "Food chain and food web",
                    "Ecological pyramids"
                ]
            },
            {
                name: "Biodiversity and Conservation",
                topics: [
                    "Concept of biodiversity",
                    "Patterns of biodiversity",
                    "Importance of biodiversity",
                    "Loss of biodiversity",
                    "Biodiversity conservation",
                    "Hotspots",
                    "Endangered organisms",
                    "Red Data Book",
                    "Protected areas"
                ]
            },
            {
                name: "Microbes in Human Welfare",
                topics: [
                    "Microbes in household products",
                    "Industrial production",
                    "Sewage treatment",
                    "Biogas production",
                    "Biocontrol agents",
                    "Biofertilizers"
                ]
            }
        ]
    },
    zoology: {
        class_11: [
            {
                name: "Animal Kingdom",
                topics: [
                    "Basis of classification",
                    "Classification of animals",
                    "Phylum characteristics",
                    "Chordate classification"
                ]
            },
            {
                name: "Structural Organization in Animals",
                topics: [
                    "Animal tissues - epithelial",
                    "Connective tissue",
                    "Muscular tissue",
                    "Neural tissue",
                    "Organ systems"
                ]
            },
            {
                name: "Biomolecules",
                topics: [
                    "Chemical constituents of cells",
                    "Structure of proteins",
                    "Structure of carbohydrates",
                    "Structure of lipids",
                    "Structure of nucleic acids",
                    "Enzymes - types and properties",
                    "Classification of enzymes"
                ]
            },
            {
                name: "Digestion and Absorption",
                topics: [
                    "Digestive system",
                    "Digestion process",
                    "Absorption of nutrients",
                    "Disorders of digestive system"
                ]
            },
            {
                name: "Breathing and Exchange of Gases",
                topics: [
                    "Respiratory organs",
                    "Mechanism of breathing",
                    "Exchange of gases",
                    "Transport of gases",
                    "Regulation of respiration",
                    "Respiratory disorders"
                ]
            },
            {
                name: "Body Fluids and Circulation",
                topics: [
                    "Composition of blood",
                    "Blood groups",
                    "Coagulation of blood",
                    "Lymph and its function",
                    "Human heart structure",
                    "Cardiac cycle",
                    "ECG and double circulation",
                    "Circulatory disorders"
                ]
            },
            {
                name: "Excretory Products and their Elimination",
                topics: [
                    "Modes of excretion",
                    "Human excretory system",
                    "Urine formation",
                    "Osmoregulation",
                    "Kidney function regulation",
                    "Excretory disorders"
                ]
            },
            {
                name: "Locomotion and Movement",
                topics: [
                    "Types of movement",
                    "Skeletal muscle structure",
                    "Muscle contraction",
                    "Skeletal system",
                    "Joints",
                    "Muscular and skeletal disorders"
                ]
            },
            {
                name: "Neural Control and Coordination",
                topics: [
                    "Neuron and nerves",
                    "Nervous system structure",
                    "Central nervous system",
                    "Peripheral nervous system",
                    "Generation of nerve impulse",
                    "Conduction of impulse"
                ]
            },
            {
                name: "Chemical Coordination and Integration",
                topics: [
                    "Endocrine glands",
                    "Human endocrine system",
                    "Hypothalamus and Pituitary",
                    "Thyroid and Parathyroid",
                    "Adrenal and Pancreas",
                    "Mechanism of hormone action",
                    "Hormone-related disorders"
                ]
            }
        ],
        class_12: [
            {
                name: "Human Reproduction",
                topics: [
                    "Male reproductive system",
                    "Female reproductive system",
                    "Gametogenesis",
                    "Menstrual cycle",
                    "Fertilization",
                    "Embryo development",
                    "Pregnancy and placenta",
                    "Parturition and lactation"
                ]
            },
            {
                name: "Reproductive Health",
                topics: [
                    "Need for reproductive health",
                    "Prevention of STDs",
                    "Birth control methods",
                    "Contraception",
                    "Medical termination of pregnancy",
                    "Infertility",
                    "Assisted reproductive technologies"
                ]
            },
            {
                name: "Evolution",
                topics: [
                    "Origin of life",
                    "Biological evolution",
                    "Evidence for evolution",
                    "Darwin's contribution",
                    "Modern synthetic theory",
                    "Mechanism of evolution",
                    "Natural selection",
                    "Adaptive radiation",
                    "Human evolution"
                ]
            },
            {
                name: "Human Health and Disease",
                topics: [
                    "Health and disease concept",
                    "Pathogens and parasites",
                    "Common human diseases",
                    "Immunity concepts",
                    "Vaccines",
                    "Cancer",
                    "HIV and AIDS",
                    "Drug and alcohol abuse"
                ]
            },
            {
                name: "Strategies for Enhancement in Food Production",
                topics: [
                    "Animal husbandry",
                    "Plant breeding",
                    "Single cell protein",
                    "Tissue culture"
                ]
            }
        ]
    }
};

// ======================================================================
// 1. APPLICATION STATE (WITH DEFAULTS)
// ======================================================================

// The default state structure. loadSavedProgress will try to overwrite 
// the 'progress' part with saved data.
let appState = {
    currentYear: '2026',
    currentSubject: 'physics',
    expandedChapters: {}, 
    progress: {
        // Initialize with default years/subjects if needed, 
        // or let the loading/saving process create them as you go.
        '2026': {},
        '2027': {}
    }
};


// ======================================================================
// 2. SAVE AND LOAD FUNCTIONS
// ======================================================================

/**
 * Saves the current appState.progress to the browser's localStorage.
 */
function saveProgress() {
    try {
        // Convert the 'progress' data (which contains all completion info) to a JSON string
        const progressJSON = JSON.stringify(appState.progress);
        
        // Store the string using a unique key
        localStorage.setItem('neet-tracker-progress', progressJSON);
        
        console.log('✅ Progress saved successfully to persistent storage!');
    } catch (error) {
        // This handles security errors (e.g., storage denied) or storage full errors
        console.error('❌ Could not save progress to localStorage:', error);
    }
}

/**
 * Loads saved progress from localStorage and updates the appState.
 */
function loadSavedProgress() {
    try {
        const savedData = localStorage.getItem('neet-tracker-progress');
        
        if (savedData) {
            const parsed = JSON.parse(savedData);
            
            // Overwrite the default progress with the saved data
            appState.progress = parsed;
            
            console.log('📚 Progress loaded successfully from previous session!');
            
            // CRITICAL: After loading, call the function that visually updates your UI 
            // to reflect the checked items and progress bar widths.
            // You will need to make sure this function exists in your code:
            // updateTrackerUI(); 
            
            return true;
        }
    } catch (error) {
        console.warn('⚠️ No saved progress found or error parsing data, starting fresh.', error);
    }
    return false;
}


// Initialize progress for both years
function initializeProgress() {
    ['2026', '2027'].forEach(year => {
        appState.progress[year] = {};
        Object.keys(syllabusData).forEach(subject => {
            appState.progress[year][subject] = {
                class_11: {},
                class_12: {}
            };
            
            // Initialize all chapters with topic completion tracking
            ['class_11', 'class_12'].forEach(classLevel => {
                syllabusData[subject][classLevel].forEach(chapterData => {
                    const chapterName = chapterData.name;
                    appState.progress[year][subject][classLevel][chapterName] = {
                        status: 'not_started',
                        topics: {}
                    };
                    
                    // Initialize all topics as uncompleted
                    chapterData.topics.forEach(topic => {
                        appState.progress[year][subject][classLevel][chapterName].topics[topic] = false;
                    });
                });
            });
        });
    });
}

// Get chapter key for unique identification
function getChapterKey(subject, classLevel, chapter) {
    return `${subject}_${classLevel}_${chapter.replace(/[^a-zA-Z0-9]/g, '_')}`;
}

// Toggle chapter expansion
function toggleChapter(chapterKey) {
    appState.expandedChapters[chapterKey] = !appState.expandedChapters[chapterKey];
    renderSubjectContent(appState.currentSubject);
}

// Toggle topic completion
function toggleTopic(subject, classLevel, chapterName, topicName) {
    const currentState = appState.progress[appState.currentYear][subject][classLevel][chapterName].topics[topicName];
    appState.progress[appState.currentYear][subject][classLevel][chapterName].topics[topicName] = !currentState;
    
    // Update chapter status based on topic completion
    updateChapterStatusFromTopics(subject, classLevel, chapterName);
    updateProgressDisplay();
    
  saveProgress();
    
    // Re-render to update progress bars
    renderSubjectContent(appState.currentSubject);
}

// Update chapter status based on topic completion
function updateChapterStatusFromTopics(subject, classLevel, chapterName) {
    const chapterProgress = appState.progress[appState.currentYear][subject][classLevel][chapterName];
    const topics = chapterProgress.topics;
    const totalTopics = Object.keys(topics).length;
    const completedTopics = Object.values(topics).filter(completed => completed).length;
    
    if (completedTopics === 0) {
        chapterProgress.status = 'not_started';
    } else if (completedTopics === totalTopics) {
        chapterProgress.status = 'completed';
    } else {
        chapterProgress.status = 'in_progress';
    }
}

// Calculate topic completion percentage for a chapter
function calculateChapterProgress(subject, classLevel, chapterName) {
    const chapterData = appState.progress[appState.currentYear][subject][classLevel][chapterName];
    if (!chapterData || !chapterData.topics) return 0;
    
    const topics = chapterData.topics;
    const totalTopics = Object.keys(topics).length;
    const completedTopics = Object.values(topics).filter(completed => completed).length;
    
    return totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;
}

// Update chapter status
function updateChapterStatus(subject, classLevel, chapter, status) {
    appState.progress[appState.currentYear][subject][classLevel][chapter].status = status;
    updateProgressDisplay();
    
    // Auto-save progress (mock function)
    mockLocalStorage.setItem('neet-tracker-progress', JSON.stringify(appState.progress));
}

// Calculate progress for a subject based on topics
function calculateSubjectProgress(subject, year = null) {
    const targetYear = year || appState.currentYear;
    const subjectData = appState.progress[targetYear][subject];
    let totalTopics = 0;
    let completedTopics = 0;
    
    ['class_11', 'class_12'].forEach(classLevel => {
        Object.values(subjectData[classLevel]).forEach(chapterData => {
            if (chapterData.topics) {
                const topicValues = Object.values(chapterData.topics);
                totalTopics += topicValues.length;
                completedTopics += topicValues.filter(completed => completed).length;
            }
        });
    });
    
    return totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;
}

// Calculate overall progress
function calculateOverallProgress(year = null) {
    const targetYear = year || appState.currentYear;
    const subjects = Object.keys(syllabusData);
    let totalProgress = 0;
    
    subjects.forEach(subject => {
        totalProgress += calculateSubjectProgress(subject, targetYear);
    });
    
    return Math.round(totalProgress / subjects.length);
}

// Update progress display
function updateProgressDisplay() {
    // Update overall progress
    const overallProgress = calculateOverallProgress();
    document.getElementById('overallProgress').textContent = `${overallProgress}%`;
    document.getElementById('overallProgressBar').style.width = `${overallProgress}%`;
    
    // Update subject progress
    Object.keys(syllabusData).forEach(subject => {
        const progress = calculateSubjectProgress(subject);
        const element = document.getElementById(`${subject}Progress`);
        const bar = document.getElementById(`${subject}ProgressBar`);
        
        if (element && bar) {
            element.textContent = `${progress}%`;
            bar.style.width = `${progress}%`;
        }
    });
}

// Render subject content
function renderSubjectContent(subject) {
    const container = document.getElementById('subjectContent');
    const subjectData = syllabusData[subject];
    
    let html = '';
    
    ['class_11', 'class_12'].forEach(classLevel => {
        const className = classLevel === 'class_11' ? 'Class 11' : 'Class 12';
        const chapters = subjectData[classLevel];
        
        html += `
            <div class="class-section">
                <h3 class="class-title">${className} ${subject.charAt(0).toUpperCase() + subject.slice(1)}</h3>
                <div class="chapters-grid">
        `;
        
        chapters.forEach(chapterData => {
            const chapterName = chapterData.name;
            const chapterKey = getChapterKey(subject, classLevel, chapterName);
            const isExpanded = appState.expandedChapters[chapterKey] || false;
            const currentStatus = appState.progress[appState.currentYear][subject][classLevel][chapterName].status;
            const topicProgress = calculateChapterProgress(subject, classLevel, chapterName);
            const completedTopics = Object.values(appState.progress[appState.currentYear][subject][classLevel][chapterName].topics).filter(completed => completed).length;
            const totalTopics = chapterData.topics.length;
            
            html += `
                <div class="chapter-card ${isExpanded ? 'expanded' : ''}">
                    <div class="chapter-header" onclick="toggleChapter('${chapterKey}')">
                        <div class="chapter-header-content">
                            <h4 class="chapter-title">${chapterName}</h4>
                            <div class="chapter-progress-info">
                                <span class="topic-count">${completedTopics}/${totalTopics} topics completed</span>
                                <div class="mini-progress-bar">
                                    <div class="mini-progress-fill" style="width: ${topicProgress}%"></div>
                                </div>
                            </div>
                        </div>
                        <div class="expand-icon ${isExpanded ? 'rotated' : ''}">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </div>
                    </div>
                    
                    <div class="status-buttons">
                        <button class="status-btn not-started ${currentStatus === 'not_started' ? 'active' : ''}" 
                                onclick="event.stopPropagation(); updateChapterStatus('${subject}', '${classLevel}', '${chapterName}', 'not_started')">
                            Not Started
                        </button>
                        <button class="status-btn in-progress ${currentStatus === 'in_progress' ? 'active' : ''}" 
                                onclick="event.stopPropagation(); updateChapterStatus('${subject}', '${classLevel}', '${chapterName}', 'in_progress')">
                            In Progress
                        </button>
                        <button class="status-btn completed ${currentStatus === 'completed' ? 'active' : ''}" 
                                onclick="event.stopPropagation(); updateChapterStatus('${subject}', '${classLevel}', '${chapterName}', 'completed')">
                            Completed
                        </button>
                        <button class="status-btn revised ${currentStatus === 'revised' ? 'active' : ''}" 
                                onclick="event.stopPropagation(); updateChapterStatus('${subject}', '${classLevel}', '${chapterName}', 'revised')">
                            Revised
                        </button>
                    </div>
                    
                    <div class="chapter-content ${isExpanded ? 'show' : ''}">
                        <div class="chapter-progress-section">
                            <div class="progress-bar-container">
                                <div class="progress-bar-label">
                                    <span>Topic Progress: ${topicProgress}%</span>
                                </div>
                                <div class="progress-bar detailed">
                                    <div class="progress-fill" style="width: ${topicProgress}%"></div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="topics-list">
                            <h5 class="topics-title">Topics:</h5>
                            <div class="topics-checklist">`;
            
            // Add topics with checkboxes
            chapterData.topics.forEach(topic => {
                const isChecked = appState.progress[appState.currentYear][subject][classLevel][chapterName].topics[topic];
                const topicId = `${chapterKey}_${topic.replace(/[^a-zA-Z0-9]/g, '_')}`;
                
                html += `
                                <div class="topic-item">
                                    <label class="topic-label" for="${topicId}">
                                        <input type="checkbox" 
                                               id="${topicId}"
                                               class="topic-checkbox" 
                                               ${isChecked ? 'checked' : ''}
                                               onchange="toggleTopic('${subject}', '${classLevel}', '${chapterName}', '${topic}')">
                                        <span class="checkmark"></span>
                                        <span class="topic-text">${topic}</span>
                                    </label>
                                </div>`;
            });
            
            html += `
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });
        
        html += `
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

// Switch subject tab
function switchSubject(subject) {
    // Update active tab
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelector(`[data-subject="${subject}"]`).classList.add('active');
    
    // Update current subject
    appState.currentSubject = subject;
    
    // Render content
    renderSubjectContent(subject);
}

// Switch year
function switchYear(year) {
    appState.currentYear = year;
    renderSubjectContent(appState.currentSubject);
    updateProgressDisplay();
    
    // Auto-save progress (mock function)
    mockLocalStorage.setItem('neet-tracker-progress', JSON.stringify(appState.progress));
}

// Reset all progress
function resetAllProgress() {
    if (confirm('Are you sure you want to reset all progress? This action cannot be undone.')) {
        // Reset progress for ALL years (2026 and 2027)
        ['2026', '2027'].forEach(year => {
            Object.keys(syllabusData).forEach(subject => {
                ['class_11', 'class_12'].forEach(classLevel => {
                    syllabusData[subject][classLevel].forEach(chapterData => {
                        const chapterName = chapterData.name;
                        appState.progress[year][subject][classLevel][chapterName] = {
                            status: 'not_started',
                            topics: {}
                        };
                        
                        // Reset all topics
                        chapterData.topics.forEach(topic => {
                            appState.progress[year][subject][classLevel][chapterName].topics[topic] = false;
                        });
                    });
                });
            });
        });
        
        // Reset expanded chapters
        appState.expandedChapters = {};
        
        // Re-render current view to show reset state
        renderSubjectContent(appState.currentSubject);
        
        // Update all progress displays to show 0%
        updateProgressDisplay();
    
    // Auto-save progress (mock function)
    mockLocalStorage.setItem('neet-tracker-progress', JSON.stringify(appState.progress));
        
        console.log('All progress has been reset successfully');
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Try to load saved progress first, then initialize if none found
    if (!loadSavedProgress()) {
        initializeProgress();
    }
    
    // Show persistence notification
    setTimeout(() => {
        console.log('🚨 PERSISTENCE NOTE: In a real environment, your progress would be saved to localStorage and persist across sessions. Currently, progress is only maintained during this session due to sandboxed environment limitations.');
    }, 1000);
    
    // Set up year selector
    const yearSelector = document.getElementById('yearSelector');
    yearSelector.addEventListener('change', function() {
        switchYear(this.value);
    });
    
    // Set up subject tabs
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', function() {
            switchSubject(this.dataset.subject);
        });
    });
    
    // Set up reset button
    document.getElementById('resetBtn').addEventListener('click', resetAllProgress);
    
    // Initial render
    renderSubjectContent(appState.currentSubject);
    updateProgressDisplay();
    
    // Auto-save progress (mock function)
    mockLocalStorage.setItem('neet-tracker-progress', JSON.stringify(appState.progress));
});

// Make functions available globally for onclick handlers
window.updateChapterStatus = updateChapterStatus;
window.switchSubject = switchSubject;
window.switchYear = switchYear;
window.resetAllProgress = resetAllProgress;
window.toggleChapter = toggleChapter;
window.toggleTopic = toggleTopic;

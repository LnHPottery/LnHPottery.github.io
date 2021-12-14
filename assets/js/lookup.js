const elements_arr = [
	{
		"namezh": "氫",
		"nameen": "Hydrogen",
		"symbol": "H",
		"period": 1,
		"atomicweight": 1,
		"oxidationstates": "-1, 1"
	},
	{
		"namezh": "氦",
		"nameen": "Helium",
		"symbol": "He",
		"period": 1,
		"atomicweight": 4.002602
	},
	{
		"namezh": "鋰",
		"nameen": "Lithium",
		"symbol": "Li",
		"period": 2,
		"atomicweight": 6.94,
		"oxidationstates": "1"
	},
	{
		"namezh": "鈹",
		"nameen": "Beryllium",
		"symbol": "Be",
		"period": 2,
		"atomicweight": 9.0121831,
		"oxidationstates": "0, 1, 2"
	},
	{
		"namezh": "硼",
		"nameen": "Boron",
		"symbol": "B",
		"period": 2,
		"atomicweight": 10.81,
		"oxidationstates": "-5, -1, 0, 1, 2, 3"
	},
	{
		"namezh": "碳",
		"nameen": "Carbon",
		"symbol": "C",
		"period": 2,
		"atomicweight": 12.011,
		"oxidationstates": "-4, -3, -2, -1, 0, 1, 2, 3, 4"
	},
	{
		"namezh": "氮",
		"nameen": "Nitrogen",
		"symbol": "N",
		"period": 2,
		"atomicweight": 14.007,
		"oxidationstates": "-3, -2, -1, 1, 2, 3, 4, 5"
	},
	{
		"namezh": "氧",
		"nameen": "Oxygen",
		"symbol": "O",
		"period": 2,
		"atomicweight": 15.999,
		"oxidationstates": "-2, -1, 0, 1, 2"
	},
	{
		"namezh": "氟",
		"nameen": "Fluorine",
		"symbol": "F",
		"period": 2,
		"atomicweight": 18.998403163,
		"oxidationstates": "-1"
	},
	{
		"namezh": "氖",
		"nameen": "Neon",
		"symbol": "Ne",
		"period": 2,
		"atomicweight": 20.1797
	},
	{
		"namezh": "鈉",
		"nameen": "Sodium",
		"symbol": "Na",
		"period": 3,
		"atomicweight": 22.98976928,
		"oxidationstates": "-1, 1"
	},
	{
		"namezh": "鎂",
		"nameen": "Magnesium",
		"symbol": "Mg",
		"period": 3,
		"atomicweight": 24.305,
		"oxidationstates": "1, 2"
	},
	{
		"namezh": "鋁",
		"nameen": "Aluminium",
		"symbol": "Al",
		"period": 3,
		"atomicweight": 26.9815384,
		"oxidationstates": "-2, -1, 1, 2, 3"
	},
	{
		"namezh": "矽",
		"nameen": "Silicon",
		"symbol": "Si",
		"period": 3,
		"atomicweight": 28.085,
		"oxidationstates": "-4, -3, -2, -1, 0, 1, 2, 3, 4"
	},
	{
		"namezh": "磷",
		"nameen": "Phosphorus",
		"symbol": "P",
		"period": 3,
		"atomicweight": 30.973761998,
		"oxidationstates": "-3, -2, -1, 0, 1, 2, 3, 4, 5"
	},
	{
		"namezh": "硫",
		"nameen": "Sulfur",
		"symbol": "S",
		"period": 3,
		"atomicweight": 32.06,
		"oxidationstates": "-2, -1, 0, 1, 2, 3, 4, 5, 6"
	},
	{
		"namezh": "氯",
		"nameen": "Chlorine",
		"symbol": "Cl",
		"period": 3,
		"atomicweight": 35.45,
		"oxidationstates": "-1, 1, 2, 3, 4, 5, 6, 7"
	},
	{
		"namezh": "氬",
		"nameen": "Argon",
		"symbol": "Ar",
		"period": 3,
		"atomicweight": 39.95,
		"oxidationstates": "0"
	},
	{
		"namezh": "鉀",
		"nameen": "Potassium",
		"symbol": "K",
		"period": 4,
		"atomicweight": 39.0983,
		"oxidationstates": "-1, 1"
	},
	{
		"namezh": "鈣",
		"nameen": "Calcium",
		"symbol": "Ca",
		"period": 4,
		"atomicweight": 40.078,
		"oxidationstates": "1, 2"
	},
	{
		"namezh": "鈧",
		"nameen": "Scandium",
		"symbol": "Sc",
		"period": 4,
		"atomicweight": 44.955908,
		"oxidationstates": "0, 1, 2, 3"
	},
	{
		"namezh": "鈦",
		"nameen": "Titanium",
		"symbol": "Ti",
		"period": 4,
		"atomicweight": 47.867,
		"oxidationstates": "-2, -1, 0, 1, 2, 3, 4"
	},
	{
		"namezh": "釩",
		"nameen": "Vanadium",
		"symbol": "V",
		"period": 4,
		"atomicweight": 50.9415,
		"oxidationstates": "-3, -1, 0, 1, 2, 3, 4, 5"
	},
	{
		"namezh": "鉻",
		"nameen": "Chromium",
		"symbol": "Cr",
		"period": 4,
		"atomicweight": 51.9961,
		"oxidationstates": "-4, -2, -1, 0, 1, 2, 3, 4, 5, 6"
	},
	{
		"namezh": "錳",
		"nameen": "Manganese",
		"symbol": "Mn",
		"period": 4,
		"atomicweight": 54.938043,
		"oxidationstates": "-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7"
	},
	{
		"namezh": "鐵",
		"nameen": "Iron",
		"symbol": "Fe",
		"period": 4,
		"atomicweight": 55.845,
		"oxidationstates": "-4, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7"
	},
	{
		"namezh": "鈷",
		"nameen": "Cobalt",
		"symbol": "Co",
		"period": 4,
		"atomicweight": 58.933194,
		"oxidationstates": "-3, -1, 0, 1, 2, 3, 4, 5"
	},
	{
		"namezh": "鎳",
		"nameen": "Nickel",
		"symbol": "Ni",
		"period": 4,
		"atomicweight": 58.6934,
		"oxidationstates": "-2, -1, 0, 1, 2, 3, 4"
	},
	{
		"namezh": "銅",
		"nameen": "Copper",
		"symbol": "Cu",
		"period": 4,
		"atomicweight": 63.546,
		"oxidationstates": "-2, 0, 1, 2, 3, 4"
	},
	{
		"namezh": "鋅",
		"nameen": "Zinc",
		"symbol": "Zn",
		"period": 4,
		"atomicweight": 65.38,
		"oxidationstates": "-2, 0, 1, 2"
	},
	{
		"namezh": "鎵",
		"nameen": "Gallium",
		"symbol": "Ga",
		"period": 4,
		"atomicweight": 69.723,
		"oxidationstates": "-5, -4, -3, -2, -1, 1, 2, 3"
	},
	{
		"namezh": "鍺",
		"nameen": "Germanium",
		"symbol": "Ge",
		"period": 4,
		"atomicweight": 72.63,
		"oxidationstates": "-4, -3, -2, -1, 0, 1, 2, 3, 4"
	},
	{
		"namezh": "砷",
		"nameen": "Arsenic",
		"symbol": "As",
		"period": 4,
		"atomicweight": 74.921595,
		"oxidationstates": "-3, -2, -1, 0, 1, 2, 3, 4, 5"
	},
	{
		"namezh": "硒",
		"nameen": "Selenium",
		"symbol": "Se",
		"period": 4,
		"atomicweight": 78.971,
		"oxidationstates": "-2, -1, 1, 2, 3, 4, 5, 6"
	},
	{
		"namezh": "溴",
		"nameen": "Bromine",
		"symbol": "Br",
		"period": 4,
		"atomicweight": 79.904,
		"oxidationstates": "-1, 1, 3, 4, 5, 7"
	},
	{
		"namezh": "氪",
		"nameen": "Krypton",
		"symbol": "Kr",
		"period": 4,
		"atomicweight": 83.798,
		"oxidationstates": "0, 1, 2"
	},
	{
		"namezh": "銣",
		"nameen": "Rubidium",
		"symbol": "Rb",
		"period": 5,
		"atomicweight": 85.4678,
		"oxidationstates": "-1, 1"
	},
	{
		"namezh": "鍶",
		"nameen": "Strontium",
		"symbol": "Sr",
		"period": 5,
		"atomicweight": 87.62,
		"oxidationstates": "1, 2"
	},
	{
		"namezh": "釔",
		"nameen": "Yttrium",
		"symbol": "Y",
		"period": 5,
		"atomicweight": 88.90584,
		"oxidationstates": "0, 1, 2, 3"
	},
	{
		"namezh": "鋯",
		"nameen": "Zirconium",
		"symbol": "Zr",
		"period": 5,
		"atomicweight": 91.224,
		"oxidationstates": "-2, 0, 1, 2, 3, 4"
	},
	{
		"namezh": "鈮",
		"nameen": "Niobium",
		"symbol": "Nb",
		"period": 5,
		"atomicweight": 92.90637,
		"oxidationstates": "-3, -1, 0, 1, 2, 3, 4, 5"
	},
	{
		"namezh": "鉬",
		"nameen": "Molybdenum",
		"symbol": "Mo",
		"period": 5,
		"atomicweight": 95.95,
		"oxidationstates": "-4, -2, -1, 0, 1, 2, 3, 4, 5, 6"
	},
	{
		"namezh": "鎝",
		"nameen": "Technetium",
		"symbol": "Tc",
		"period": 5,
		"atomicweight": 98,
		"oxidationstates": "-3, -1, 0, 1, 2, 3, 4, 5, 6, 7"
	},
	{
		"namezh": "釕",
		"nameen": "Ruthenium",
		"symbol": "Ru",
		"period": 5,
		"atomicweight": 101.07,
		"oxidationstates": "-4, -2, 0, 1, 2, 3, 4, 5, 6, 7, 8"
	},
	{
		"namezh": "銠",
		"nameen": "Rhodium",
		"symbol": "Rh",
		"period": 5,
		"atomicweight": 102.90549,
		"oxidationstates": "-3, -1, 0, 1, 2, 3, 4, 5, 6"
	},
	{
		"namezh": "鈀",
		"nameen": "Palladium",
		"symbol": "Pd",
		"period": 5,
		"atomicweight": 106.42,
		"oxidationstates": "0, 1, 2, 3, 4"
	},
	{
		"namezh": "銀",
		"nameen": "Silver",
		"symbol": "Ag",
		"period": 5,
		"atomicweight": 107.8682,
		"oxidationstates": "-2, -1, 1, 2, 3"
	},
	{
		"namezh": "鎘",
		"nameen": "Cadmium",
		"symbol": "Cd",
		"period": 5,
		"atomicweight": 112.414,
		"oxidationstates": "-2, 1, 2"
	},
	{
		"namezh": "銦",
		"nameen": "Indium",
		"symbol": "In",
		"period": 5,
		"atomicweight": 114.818,
		"oxidationstates": "-5, -2, -1, 1, 2, 3"
	},
	{
		"namezh": "錫",
		"nameen": "Tin",
		"symbol": "Sn",
		"period": 5,
		"atomicweight": 118.71,
		"oxidationstates": "-4, -3, -2, -1, 0, 1, 2, 3, 4"
	},
	{
		"namezh": "銻",
		"nameen": "Antimony",
		"symbol": "Sb",
		"period": 5,
		"atomicweight": 121.76,
		"oxidationstates": "-3, -2, -1, 0, 1, 2, 3, 4, 5"
	},
	{
		"namezh": "碲",
		"nameen": "Tellurium",
		"symbol": "Te",
		"period": 5,
		"atomicweight": 127.6,
		"oxidationstates": "-2, -1, 1, 2, 3, 4, 5, 6"
	},
	{
		"namezh": "碘",
		"nameen": "Iodine",
		"symbol": "I",
		"period": 5,
		"atomicweight": 126.90447,
		"oxidationstates": "-1, 1, 3, 4, 5, 6, 7"
	},
	{
		"namezh": "氙",
		"nameen": "Xenon",
		"symbol": "Xe",
		"period": 5,
		"atomicweight": 131.293,
		"oxidationstates": "0, 1, 2, 4, 6, 8"
	},
	{
		"namezh": "銫",
		"nameen": "Caesium",
		"symbol": "Cs",
		"period": 6,
		"atomicweight": 132.90545196,
		"oxidationstates": "-1, 1"
	},
	{
		"namezh": "鋇",
		"nameen": "Barium",
		"symbol": "Ba",
		"period": 6,
		"atomicweight": 137.327,
		"oxidationstates": "1, 2"
	},
	{
		"namezh": "鑭",
		"nameen": "Lanthanum",
		"symbol": "La",
		"period": 6,
		"atomicweight": 138.90547,
		"oxidationstates": "0, 1, 2, 3"
	},
	{
		"namezh": "鈰",
		"nameen": "Cerium",
		"symbol": "Ce",
		"period": 6,
		"atomicweight": 140.116,
		"oxidationstates": "2, 3, 4"
	},
	{
		"namezh": "鐠",
		"nameen": "Praseodymium",
		"symbol": "Pr",
		"period": 6,
		"atomicweight": 140.90766,
		"oxidationstates": "0, 1, 2, 3, 4, 5"
	},
	{
		"namezh": "釹",
		"nameen": "Neodymium",
		"symbol": "Nd",
		"period": 6,
		"atomicweight": 144.242,
		"oxidationstates": "0, 2, 3, 4"
	},
	{
		"namezh": "鉕",
		"nameen": "Promethium",
		"symbol": "Pm",
		"period": 6,
		"atomicweight": 145,
		"oxidationstates": "2, 3"
	},
	{
		"namezh": "釤",
		"nameen": "Samarium",
		"symbol": "Sm",
		"period": 6,
		"atomicweight": 150.36,
		"oxidationstates": "0, 2, 3"
	},
	{
		"namezh": "銪",
		"nameen": "Europium",
		"symbol": "Eu",
		"period": 6,
		"atomicweight": 151.964,
		"oxidationstates": "0, 2, 3"
	},
	{
		"namezh": "釓",
		"nameen": "Gadolinium",
		"symbol": "Gd",
		"period": 6,
		"atomicweight": 157.25,
		"oxidationstates": "0, 1, 2, 3"
	},
	{
		"namezh": "鋱",
		"nameen": "Terbium",
		"symbol": "Tb",
		"period": 6,
		"atomicweight": 158.925354,
		"oxidationstates": "0, 1, 2, 3, 4"
	},
	{
		"namezh": "鏑",
		"nameen": "Dysprosium",
		"symbol": "Dy",
		"period": 6,
		"atomicweight": 162.5,
		"oxidationstates": "0, 2, 3, 4"
	},
	{
		"namezh": "鈥",
		"nameen": "Holmium",
		"symbol": "Ho",
		"period": 6,
		"atomicweight": 164.930328,
		"oxidationstates": "0, 2, 3"
	},
	{
		"namezh": "鉺",
		"nameen": "Erbium",
		"symbol": "Er",
		"period": 6,
		"atomicweight": 167.259,
		"oxidationstates": "0, 2, 3"
	},
	{
		"namezh": "銩",
		"nameen": "Thulium",
		"symbol": "Tm",
		"period": 6,
		"atomicweight": 168.934218,
		"oxidationstates": "0, 2, 3"
	},
	{
		"namezh": "鐿",
		"nameen": "Ytterbium",
		"symbol": "Yb",
		"period": 6,
		"atomicweight": 173.045,
		"oxidationstates": "0, 2, 3"
	},
	{
		"namezh": "鎦",
		"nameen": "Lutetium",
		"symbol": "Lu",
		"period": 6,
		"atomicweight": 174.9668,
		"oxidationstates": "0, 2, 3"
	},
	{
		"namezh": "鉿",
		"nameen": "Hafnium",
		"symbol": "Hf",
		"period": 6,
		"atomicweight": 178.49,
		"oxidationstates": "-2, 0, 1, 2, 3, 4"
	},
	{
		"namezh": "鉭",
		"nameen": "Tantalum",
		"symbol": "Ta",
		"period": 6,
		"atomicweight": 180.94788,
		"oxidationstates": "-3, -1, 0, 1, 2, 3, 4, 5"
	},
	{
		"namezh": "鎢",
		"nameen": "Tungsten",
		"symbol": "W",
		"period": 6,
		"atomicweight": 183.84,
		"oxidationstates": "-4, -2, -1, 0, 1, 2, 3, 4, 5, 6"
	},
	{
		"namezh": "錸",
		"nameen": "Rhenium",
		"symbol": "Re",
		"period": 6,
		"atomicweight": 186.207,
		"oxidationstates": "-3, -1, 0, 1, 2, 3, 4, 5, 6, 7"
	},
	{
		"namezh": "鋨",
		"nameen": "Osmium",
		"symbol": "Os",
		"period": 6,
		"atomicweight": 190.23,
		"oxidationstates": "-4, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8"
	},
	{
		"namezh": "銥",
		"nameen": "Iridium",
		"symbol": "Ir",
		"period": 6,
		"atomicweight": 192.217,
		"oxidationstates": "-3, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9"
	},
	{
		"namezh": "鉑",
		"nameen": "Platinum",
		"symbol": "Pt",
		"period": 6,
		"atomicweight": 195.084,
		"oxidationstates": "-3, -2, -1, 0, 1, 2, 3, 4, 5, 6"
	},
	{
		"namezh": "金",
		"nameen": "Gold",
		"symbol": "Au",
		"period": 6,
		"atomicweight": 196.96657,
		"oxidationstates": "-3, -2, -1, 0, 1, 2, 3, 5"
	},
	{
		"namezh": "汞",
		"nameen": "Mercury",
		"symbol": "Hg",
		"period": 6,
		"atomicweight": 200.592,
		"oxidationstates": "-2, 1, 2"
	},
	{
		"namezh": "鉈",
		"nameen": "Thallium",
		"symbol": "Tl",
		"period": 6,
		"atomicweight": 204.38,
		"oxidationstates": "-5, -2, -1, 1, 2, 3"
	},
	{
		"namezh": "鉛",
		"nameen": "Lead",
		"symbol": "Pb",
		"period": 6,
		"atomicweight": 207.2,
		"oxidationstates": "-4, -2, -1, 1, 2, 3, 4"
	},
	{
		"namezh": "鉍",
		"nameen": "Bismuth",
		"symbol": "Bi",
		"period": 6,
		"atomicweight": 208.9804,
		"oxidationstates": "-3, -2, -1, 1, 2, 3, 4, 5"
	},
	{
		"namezh": "釙",
		"nameen": "Polonium",
		"symbol": "Po",
		"period": 6,
		"atomicweight": 209,
		"oxidationstates": "-2, 2, 4, 5, 6"
	},
	{
		"namezh": "砈",
		"nameen": "Astatine",
		"symbol": "At",
		"period": 6,
		"atomicweight": 210,
		"oxidationstates": "-1, 1, 3, 5, 7"
	},
	{
		"namezh": "氡",
		"nameen": "Radon",
		"symbol": "Rn",
		"period": 6,
		"atomicweight": 222,
		"oxidationstates": "2, 6"
	},
	{
		"namezh": "鍅",
		"nameen": "Francium",
		"symbol": "Fr",
		"period": 7,
		"atomicweight": 223,
		"oxidationstates": "1"
	},
	{
		"namezh": "鐳",
		"nameen": "Radium",
		"symbol": "Ra",
		"period": 7,
		"atomicweight": 226,
		"oxidationstates": "2"
	},
	{
		"namezh": "錒",
		"nameen": "Actinium",
		"symbol": "Ac",
		"period": 7,
		"atomicweight": 227,
		"oxidationstates": "3"
	},
	{
		"namezh": "釷",
		"nameen": "Thorium",
		"symbol": "Th",
		"period": 7,
		"atomicweight": 232.0377,
		"oxidationstates": "1, 2, 3, 4"
	},
	{
		"namezh": "鏷",
		"nameen": "Protactinium",
		"symbol": "Pa",
		"period": 7,
		"atomicweight": 231.03588,
		"oxidationstates": "3, 4, 5"
	},
	{
		"namezh": "鈾",
		"nameen": "Uranium",
		"symbol": "U",
		"period": 7,
		"atomicweight": 238.02891,
		"oxidationstates": "1, 2, 3, 4, 5, 6"
	},
	{
		"namezh": "錼",
		"nameen": "Neptunium",
		"symbol": "Np",
		"period": 7,
		"atomicweight": 237,
		"oxidationstates": "2, 3, 4, 5, 6, 7"
	},
	{
		"namezh": "鈽",
		"nameen": "Plutonium",
		"symbol": "Pu",
		"period": 7,
		"atomicweight": 244,
		"oxidationstates": "2, 3, 4, 5, 6, 7, 8"
	},
	{
		"namezh": "鋂",
		"nameen": "Americium",
		"symbol": "Am",
		"period": 7,
		"atomicweight": 243,
		"oxidationstates": "2, 3, 4, 5, 6, 7"
	},
	{
		"namezh": "鋦",
		"nameen": "Curium",
		"symbol": "Cm",
		"period": 7,
		"atomicweight": 247,
		"oxidationstates": "3, 4, 5, 6"
	},
	{
		"namezh": "鉳",
		"nameen": "Berkelium",
		"symbol": "Bk",
		"period": 7,
		"atomicweight": 247,
		"oxidationstates": "2, 3, 4, 5"
	},
	{
		"namezh": "鉲",
		"nameen": "Californium",
		"symbol": "Cf",
		"period": 7,
		"atomicweight": 251,
		"oxidationstates": "2, 3, 4, 5"
	},
	{
		"namezh": "鑀",
		"nameen": "Einsteinium",
		"symbol": "Es",
		"period": 7,
		"atomicweight": 252,
		"oxidationstates": "2, 3, 4"
	},
	{
		"namezh": "鐨",
		"nameen": "Fermium",
		"symbol": "Fm",
		"period": 7,
		"atomicweight": 257,
		"oxidationstates": "2, 3"
	},
	{
		"namezh": "鍆",
		"nameen": "Mendelevium",
		"symbol": "Md",
		"period": 7,
		"atomicweight": 258,
		"oxidationstates": "2, 3"
	},
	{
		"namezh": "鍩",
		"nameen": "Nobelium",
		"symbol": "No",
		"period": 7,
		"atomicweight": 259,
		"oxidationstates": "2, 3"
	},
	{
		"namezh": "鐒",
		"nameen": "Lawrencium",
		"symbol": "Lr",
		"period": 7,
		"atomicweight": 266,
		"oxidationstates": "3"
	},
	{
		"namezh": "鑪",
		"nameen": "Rutherfordium",
		"symbol": "Rf",
		"period": 7,
		"atomicweight": 267,
		"oxidationstates": "4"
	},
	{
		"namezh": "𨧀",
		"nameen": "Dubnium",
		"symbol": "Db",
		"period": 7,
		"atomicweight": 268,
		"oxidationstates": "5"
	},
	{
		"namezh": "𨭎",
		"nameen": "Seaborgium",
		"symbol": "Sg",
		"period": 7,
		"atomicweight": 269,
		"oxidationstates": "0, 6"
	},
	{
		"namezh": "𨨏",
		"nameen": "Bohrium",
		"symbol": "Bh",
		"period": 7,
		"atomicweight": 270,
		"oxidationstates": "7"
	},
	{
		"namezh": "𨭆",
		"nameen": "Hassium",
		"symbol": "Hs",
		"period": 7,
		"atomicweight": 270,
		"oxidationstates": "8"
	},
	{
		"namezh": "䥑",
		"nameen": "Meitnerium",
		"symbol": "Mt",
		"period": 7,
		"atomicweight": 278
	},
	{
		"namezh": "鐽",
		"nameen": "Darmstadtium",
		"symbol": "Ds",
		"period": 7,
		"atomicweight": 281
	},
	{
		"namezh": "錀",
		"nameen": "Roentgenium",
		"symbol": "Rg",
		"period": 7,
		"atomicweight": 282
	},
	{
		"namezh": "鎶",
		"nameen": "Copernicium",
		"symbol": "Cn",
		"period": 7,
		"atomicweight": 285,
		"oxidationstates": "2"
	},
	{
		"namezh": "鉨",
		"nameen": "Nihonium",
		"symbol": "Nh",
		"period": 7,
		"atomicweight": 286
	},
	{
		"namezh": "鈇",
		"nameen": "Flerovium",
		"symbol": "Fl",
		"period": 7,
		"atomicweight": 289
	},
	{
		"namezh": "鏌",
		"nameen": "Moscovium",
		"symbol": "Mc",
		"period": 7,
		"atomicweight": 290
	},
	{
		"namezh": "鉝",
		"nameen": "Livermorium",
		"symbol": "Lv",
		"period": 7,
		"atomicweight": 293
	},
	{
		"namezh": "鿬",
		"nameen": "Tennessine",
		"symbol": "Ts",
		"period": 7,
		"atomicweight": 294
	},
	{
		"namezh": "鿫",
		"nameen": "Oganesson",
		"symbol": "Og",
		"period": 7,
		"atomicweight": 294
	}
];
const ions_arr = [
	{
		"namezh": "銨根離子",
		"nameen": "Ammonium",
		"formula": "NH4",
		"state": "+1"
	},
	{
		"namezh": "水合氫離子",
		"nameen": "Hydronium",
		"formula": "H3O",
		"state": "+1"
	},
	{
		"namezh": "硝鎓離子",
		"nameen": "Nitronium",
		"formula": "NO2",
		"state": "+1"
	},
	{
		"namezh": "亞汞（I）",
		"nameen": "Mercury(I)",
		"formula": "Hg2",
		"state": "+2"
	},
	{
		"namezh": "疊氮根離子",
		"nameen": "Azide",
		"formula": "N3",
		"state": "-1",
		"aka": "疊氮化物"
	},
	{
		"namezh": "過氧根離子",
		"nameen": "Oxide",
		"formula": "O2",
		"state": "-2",
		"aka": "過氧化物"
	},
	{
		"namezh": "砷酸根離子",
		"nameen": "Arsenate",
		"formula": "AsO4",
		"state": "-3",
		"aka": "砷酸鹽"
	},
	{
		"namezh": "亞砷酸根離子",
		"nameen": "Arsorite",
		"formula": "AsO3",
		"state": "-3",
		"aka": "亞砷酸鹽"
	},
	{
		"namezh": "硼酸根離子",
		"nameen": "Borate",
		"formula": "BO3",
		"state": "-3",
		"aka": "硼酸鹽"
	},
	{
		"namezh": "溴酸根離子",
		"nameen": "Bromate",
		"formula": "BrO3",
		"state": "-1",
		"aka": "溴酸鹽"
	},
	{
		"namezh": "次溴酸根離子",
		"nameen": "Hypobromite",
		"formula": "BrO",
		"state": "-1",
		"aka": "次溴酸鹽"
	},
	{
		"namezh": "碳酸根離子",
		"nameen": "Carbonate",
		"formula": "CO3",
		"state": "-2",
		"aka": "碳酸鹽"
	},
	{
		"namezh": "碳酸氫根離子",
		"nameen": "Bicarbonate",
		"formula": "HCO3",
		"state": "-1",
		"aka": "碳酸氫鹽"
	},
	{
		"namezh": "氫氧根離子",
		"nameen": "Hydroxide",
		"formula": "OH",
		"state": "-1",
		"aka": "氫氧化物"
	},
	{
		"namezh": "氯酸根離子",
		"nameen": "Chlorate",
		"formula": "ClO3",
		"state": "-1",
		"aka": "氯酸鹽"
	},
	{
		"namezh": "高氯酸根離子",
		"nameen": "Perchlorate",
		"formula": "ClO4",
		"state": "-1",
		"aka": "高氯酸鹽"
	},
	{
		"namezh": "亞氯酸根離子",
		"nameen": "Chlorite",
		"formula": "ClO2",
		"state": "-1",
		"aka": "亞氯酸鹽"
	},
	{
		"namezh": "次氯酸根離子",
		"nameen": "Hypochlorite",
		"formula": "ClO",
		"state": "-1",
		"aka": "次氯酸鹽"
	},
	{
		"namezh": "鉻酸根離子",
		"nameen": "Chromate",
		"formula": "CrO4",
		"state": "-2",
		"aka": "鉻酸鹽"
	},
	{
		"namezh": "重鉻酸根離子",
		"nameen": "Dichromate",
		"formula": "Cr2O7",
		"state": "-2",
		"aka": "重鉻酸鹽"
	},
	{
		"namezh": "碘酸根離子",
		"nameen": "Iodate",
		"formula": "IO3",
		"state": "-1",
		"aka": "碘酸鹽"
	},
	{
		"namezh": "硝酸根離子",
		"nameen": "Nitrate",
		"formula": "NO3",
		"state": "-1",
		"aka": "硝酸鹽"
	},
	{
		"namezh": "亞硝酸根離子",
		"nameen": "Nitrite",
		"formula": "NO2",
		"state": "-1",
		"aka": "亞硝酸鹽"
	},
	{
		"namezh": "磷酸根離子",
		"nameen": "Phosphate",
		"formula": "PO4",
		"state": "-3",
		"aka": "磷酸鹽"
	},
	{
		"namezh": "亞磷酸根離子",
		"nameen": "Metaphosphoric acid",
		"formula": "HPO3",
		"state": "-2",
		"aka": "亞磷酸鹽"
	},
	{
		"namezh": "磷酸一氫根離子",
		"nameen": "Monohydrogen phosphate",
		"formula": "HPO4",
		"state": "-2",
		"aka": "磷酸一氫鹽"
	},
	{
		"namezh": "磷酸二氫根離子",
		"nameen": "Dihydrogen phosphate",
		"formula": "H2PO4",
		"state": "-1",
		"aka": "磷酸二氫鹽"
	},
	{
		"namezh": "錳酸根離子||高錳酸根離子",
		"nameen": "Manganate||Permanganate",
		"formula": "MnO4",
		"state": "-2, -1",
		"aka": "錳酸鹽||高錳酸鹽"
	},
	{
		"namezh": "硫酸根離子",
		"nameen": "Sulfate",
		"formula": "SO4",
		"state": "-2",
		"aka": "硫酸鹽"
	},
	{
		"namezh": "硫代硫酸根離子",
		"nameen": "Thiosulfate",
		"formula": "S2O3",
		"state": "-2",
		"aka": "硫代硫酸鹽"
	},
	{
		"namezh": "硫酸氫根離子",
		"nameen": "Hydrogen sulfate",
		"formula": "HSO4",
		"state": "-1",
		"aka": "硫酸氫鹽"
	},
	{
		"namezh": "亞硫酸根離子",
		"nameen": "Sulfite",
		"formula": "SO3",
		"state": "-2",
		"aka": "亞硫酸鹽"
	},
	{
		"namezh": "亞硫酸氫根離子",
		"nameen": "Hydrogen sulfite",
		"formula": "HSO3",
		"state": "-1",
		"aka": "亞硫酸氫鹽"
	},
	{
		"namezh": "過硫酸根離子",
		"nameen": "Peroxydisulfate",
		"formula": "S2O8",
		"state": "-2",
		"aka": "過硫酸鹽"
	},
	{
		"namezh": "矽酸根離子",
		"nameen": "Silicate",
		"formula": "SiO4",
		"state": "-4",
		"aka": "矽酸鹽"
	},
	{
		"namezh": "偏矽酸根離子",
		"nameen": "Metasilicate",
		"formula": "SiO3",
		"state": "-2",
		"aka": "偏矽酸鹽"
	},
	{
		"namezh": "鋁矽酸根離子",
		"nameen": "Aluminium silicate",
		"formula": "AlSiO4",
		"state": "-1",
		"aka": "鋁矽酸鹽"
	}
];
var cus_arr = getCookie("materials").split(',');
var elements_obj = {};
var html_ele_table = document.getElementById('table');
var html_ele_result = document.getElementById('result');
var chemi_arr = [];
for(var i=0; elements_arr[i]; i++){
	chemi_arr.push(item_name);
	var item_name = elements_arr[i].symbol;
	var tmp_obj = {};
	tmp_obj['weight'] = elements_arr[i].atomicweight;
	tmp_obj['states'] = elements_arr[i].oxidationstates;
	tmp_obj['name'] = elements_arr[i].nameen;
	tmp_obj['aka'] = elements_arr[i].namezh;
	tmp_obj['type'] = "atom";
	elements_obj[item_name] = tmp_obj;
}
for(var i=0; ions_arr[i];i++){
	chemi_arr.push(ions_arr[i].formula);
	var num_formula = ions_arr[i].formula.split(/(\d)/).toString();
	var case_formula = [];
	case_formula = num_formula.split(/(?=[A-Z])/).toString();
	var clean_formula = case_formula.replace(/,,/g, ',').replace(/,/g, ' ').split(" ");
	var result_weight = 0;
	for(var j=0; clean_formula[j];j++){
		var current_item = clean_formula[j];
		var next_item =	clean_formula[j+1] ? clean_formula[j+1] : null;
		if(elements_obj[current_item]){//存在該元素
			if(Number(next_item)){//下一個是數字
			result_weight+=Number(elements_obj[current_item].weight)*Number(next_item);
			j++;
			}
			else result_weight+=Number(elements_obj[current_item].weight);
		}
		else result_weight = "unexpected element here!!!";
	}	
	var item_name = ions_arr[i].formula;
	var tmp_obj = {};
	tmp_obj['weight'] = result_weight;
	tmp_obj['states'] = ions_arr[i].state;
	tmp_obj['name'] = ions_arr[i].nameen;
	tmp_obj['aka'] = ions_arr[i].namezh +" "+ ions_arr[i].aka;
	tmp_obj['type'] = "ion";
	elements_obj[item_name] = tmp_obj;
}
for(var i=0; cus_arr[i];i++){
	chemi_arr.push(cus_arr[i].split(';')[1]);
	var item_name = cus_arr[i].split(';')[1];
	var tmp_obj = {};
	tmp_obj['weight'] = cus_arr[i].split(';')[2];
	tmp_obj['states'] = '';
	tmp_obj['name'] = cus_arr[i].split(';')[0];
	tmp_obj['aka'] = '';
	tmp_obj['type'] = "material";
	elements_obj[item_name] = tmp_obj;
}

autocomplete(document.getElementById("chemi"), chemi_arr);

function autocomplete(inp, arr) {
	var currentFocus;
	inp.addEventListener("input", function(e) {
		var a, b, i, val = this.value;
		closeAllLists();
		if (!val) { return false;}
		currentFocus = -1;
		a = document.createElement("DIV");
		a.setAttribute("id", this.id + "autocomplete-list");
		a.setAttribute("class", "autocomplete-items");
		this.parentNode.appendChild(a);
		for (i = 0; i < arr.length; i++) {
			if(arr[i] === undefined) ;
			else if(arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
				b = document.createElement("DIV");
				b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
				b.innerHTML += arr[i].substr(val.length);
				b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
				b.addEventListener("click", function(e) {
					inp.value = this.getElementsByTagName("input")[0].value;
						displayEle();
					closeAllLists();
				});
				a.appendChild(b);
			}
		}
	});
	inp.addEventListener("keydown", function(e) {
		var x = document.getElementById(this.id + "autocomplete-list");
		if (x) x = x.getElementsByTagName("div");
		if (e.keyCode == 40) {
			currentFocus++;
			addActive(x);
		} 
		else if (e.keyCode == 38) {
			currentFocus--;
			addActive(x);
		} 
		else if (e.keyCode == 13) {
			e.preventDefault();
			if (currentFocus > -1) {
				if (x) x[currentFocus].click();
			}
		}
	});
	function addActive(x) {
		if (!x) return false;
		removeActive(x);
		if (currentFocus >= x.length) currentFocus = 0;
		if (currentFocus < 0) currentFocus = (x.length - 1);
		x[currentFocus].classList.add("autocomplete-active");
	}
	function removeActive(x) {
		for (var i = 0; i < x.length; i++) x[i].classList.remove("autocomplete-active");
	}
	function closeAllLists(elmnt) {
		var x = document.getElementsByClassName("autocomplete-items");
		for (var i = 0; i < x.length; i++) {
			if (elmnt != x[i] && elmnt != inp) x[i].parentNode.removeChild(x[i]);
		}
	}
	document.addEventListener("click", function (e) {
		closeAllLists(e.target);
	});
}

function displayEle(){
	var val = document.getElementById('chemi').value;
	//html_ele_result.innerHTML = val+"<br>莫耳質量:"+elements_obj[val].weight+"<br>可能價數:"+elements_obj[val].states;
	if(!elements_obj[val]){
		document.getElementById('panel_formula').innerHTML = "";
		document.getElementById('panel_weight').innerHTML = "";
		document.getElementById('panel_name').innerHTML = "";
		document.getElementById('panel_aka').innerHTML = "";
		document.getElementById('panel_state').innerHTML = "";
	}
	else{
		document.getElementById('panel_formula').innerHTML = val.replace(/(\d+)/g, '<sub>$1</sub>');
		document.getElementById('panel_weight').innerHTML = elements_obj[val].weight;
		document.getElementById('panel_name').innerHTML = elements_obj[val].name;
		document.getElementById('panel_aka').innerHTML = elements_obj[val].aka;
		document.getElementById('panel_state').innerHTML = formateState(elements_obj[val].states);
	} 
}

function addEle(){
    if(!document.getElementById('chemi').value) return false;
    var val = document.getElementById('chemi').value;
    if(document.getElementById('new_formula').value) document.getElementById('new_formula').value += " · "+val;
	else document.getElementById('new_formula').value += val;
    formateMolecule();
}

function backEle(){
    var current_array = document.getElementById('new_formula').value.split(' · ');
    if(document.getElementById('new_formula').value){
        current_array.pop();
        document.getElementById('new_formula').value = current_array.join(" · ");
        formateMolecule();
    }
    else clearEle();   
}

function clearEle(){
    document.getElementById('new_formula').value = "";
    document.getElementById('result_formula').innerHTML = "";
    document.getElementById('result_weight').innerHTML = "";
    document.getElementById('result_formula').dataset.val = "";
    document.getElementById('result_weight').dataset.val = "";
}

function formateMolecule(){
    document.getElementById('result_formula').innerHTML = "";
    document.getElementById('result_formula').dataset.val = "";
    var current_array = document.getElementById('new_formula').value.split(' · ');
    for(var i=0; current_array[i]; i++){
        if(current_array[i] != current_array[i+1]) {
        	document.getElementById('result_formula').dataset.val += current_array[i];
        	document.getElementById('result_formula').innerHTML += current_array[i].replace(/(\d+)/g, '<sub>$1</sub>');
        }
        else {
            var ele_formula = current_array[i];
            var ele_type = elements_obj[current_array[i]].type;
            var count = 1;
            while(current_array[i] == current_array[i+1]){
                i++;
                count++;
            }
            switch(ele_type){
                case "ion":
                	document.getElementById('result_formula').dataset.val += "("+ele_formula+")"+count;
                    document.getElementById('result_formula').innerHTML += "("+ele_formula.replace(/(\d+)/g, '<sub>$1</sub>')+")"+"<sub>"+count+"</sub>";
                    break; 
                case "atom":
                	document.getElementById('result_formula').dataset.val += ele_formula+count;
                    document.getElementById('result_formula').innerHTML += ele_formula+"<sub>"+count+"</sub>";
                    break; 
                case "material":
                	document.getElementById('result_formula').dataset.val += "("+ele_formula+")"+count;
                    document.getElementById('result_formula').innerHTML += "("+ele_formula.replace(/(\d+)/g, '<sub>$1</sub>')+")"+"<sub>"+count+"</sub>";
                    break; 
            }
        }
    }
    document.getElementById('result_weight').innerHTML = '';
}

function formateState(str){
    var tmp_arr = str.split(", ").reverse();
    var zero_pos = -1;
    for(var i=0; tmp_arr[i]; i++){
        if(Number(tmp_arr[i]) >= 0) tmp_arr[i] = "+" + tmp_arr[i];
        //else if(Number(tmp_arr[i]) == 0) zero_pos = i;
    }
    //if(zero_pos >= 0) tmp_arr.splice(zero_pos, 1);
    return tmp_arr.join(" ");
}

function resultWeight(){
    if(!document.getElementById('new_formula').value) return false;
    var current_array = document.getElementById('new_formula').value.split(' · ');
    var result = 0;
    for(var i=0; current_array[i]; i++) result += Number(elements_obj[current_array[i]].weight);
    document.getElementById("result_weight").dataset.val = result;
    document.getElementById("result_weight").innerHTML = result+' <i>M</i><sub>mol</sub>';
}

function clearQuery(){ document.getElementById('chemi').value = ""; }

function addMaterial(){
	if(document.getElementById('result_weight').innerHTML == "") return false;
	var mat_str = getCookie("materials");
	/* if(mat_str.indexOf(document.getElementById('result_formula').dataset.val)){
		alert("already exist");
		return false;
	} */
	setCookie("materials", mat_str + (document.getElementById('cus_name').value ? document.getElementById('cus_name').value : document.getElementById('result_formula').dataset.val) + ":" + document.getElementById('result_formula').dataset.val + ":" + document.getElementById('result_weight').dataset.val+",");
	document.getElementById('material_count').innerHTML = cus_arr.length - 1;
	document.getElementById('material_list').innerHTML += (document.getElementById('cus_name').value ? document.getElementById('cus_name').value : document.getElementById('result_formula').dataset.val) + "<br>";
	document.getElementById('new_formula').value = "";
	document.getElementById('result_formula').innerHTML = "";
	document.getElementById('result_weight').innerHTML = "";
}
function getMaterial(){
	document.getElementById('material_count').innerHTML = cus_arr.length - 1;
	for(var i = 0; cus_arr[i]; i++){
		document.getElementById('material_list').innerHTML += cus_arr[i].split(':')[0] + "<br>";
	}

}

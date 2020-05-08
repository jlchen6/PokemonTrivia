const mongoose = require("mongoose");
const db = require("../models/trivia");

// 
mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/pokemonTrivia"
  );

  const triviaSeed =[
    {
        dex: [
            "There is a plant seed on its back right from the day this POKéMON is born. The seed slowly grows larger.",
            "A strange seed was planted on its back at birth. The plant sprouts and grows with this POKéMON."
        ],
        dexNumber: 1,
        pokeName: "Bulbasaur",
        type: [
            "GRASS",
            "POISON"
        ],
        hintImage: "../client/public/images/hintImages/1.png",
        pokeSprite: "../client/public/images/sprites/sprite001.gif",
        possibleChoices: [
            "Bellsprout",
            "Tangela",
            "Paras",
            "Weedle"
        ]
    },
    {
        dex: [
            "There is a plant bulb on its back. When it absorbs nutrients, the bulb is said to blossom into a large flower.",
            "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs."
        ],
        dexNumber: 2,
        pokeName: "Ivysaur",
        type: [
            "GRASS",
            "POISON"
        ],
        hintImage: "../client/public/images/hintImages/2.pn",
        pokeSprite: "../client/public/images/sprites/sprite002.gif",
        possibleChoices: [
            "Bulbasaur",
            "Vileplume",
            "Parasect",
            "Bellsprout"
        ]
    },
    {
        dex: [
            "A bewitching aroma wafts from its flower. The fragrance becalms those engaged in a battle.",
            "Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight."
        ],
        dexNumber: 3,
        pokeName: "Venusaur",
        type: [
            "GRASS",
            "POISON"
        ],
        hintImage: "../client/public/images/hintImages/3.pn",
        pokeSprite: "../client/public/images/sprites/sprite003.gif",
        possibleChoices: [
            "Bulbasaur",
            "Vileplume",
            "Weepinbell",
            "Victreebel",
            "Tangela"
        ]
    },
    {
        dex: [
            "From the time it is born, a flame burns at the tip of its tail. Its life would end if the flame were to go out.",
            "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail."
        ],
        dexNumber: 4,
        pokeName: "Charmander",
        type: "FIRE",
        hintImage: "../client/public/images/hintImages/4.pn",
        pokeSprite: "../client/public/images/sprites/sprite004.gif",
        possibleChoices: [
            "Vulpix",
            "Ponyta",
            "Magmar",
            "Rapidash",
            "Moltres"
        ]
    },
    {
        dex: [
            "Without pity, its sharp claws destroy foes. If it encounters a strong enemy, it becomes agitated, and the flame on its tail flares with a bluish white color.",
            "It lashes about with its tail to knock down its foe. It then tears up the fallen opponent with sharp claws.",
            "When it swings its burning tail, it elevates the air temperature to unbearably high levels."
        ],
        dexNumber: 5,
        pokeName: "Charmeleon",
        type: "FIRE",
        hintImage: "../client/public/images/hintImages/5.pn",
        pokeSprite: "../client/public/images/sprites/sprite005.gif",
        possibleChoices: [
            "Charmander",
            "Growlithe",
            "Flareon",
            "Moltres",
            "Dragonite"
        ]
    },
    {
       dex: [
           "It flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.",
           "Its wings can carry this POKéMON close to an altitude of 4,600 feet. It blows out fire at very high temperatures.",
           "	It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames."
       ],
       dexNumber: 6,
       pokeName: "Charizard",
       type: [
           "FIRE",
           "FLYING"
       ],
       hintImage: "../client/public/images/hintImages/6.pn",
       pokeSprite: "../client/public/images/sprites/sprite006.gif",
       possibleChoices: [
            "Charmander",
            "Growlithe",
            "Flareon",
            "Moltres",
            "Dragonite"
       ] 
    },
    {
        dex: [
            "Its shell is not just for protection. Its rounded shape and the grooves on its surface minimize resistance in water, enabling it to swim at high speeds.",
            "When it retracts its long neck into its shell, it squirts out water with vigorous force.",
            "After birth, its back swells and hardens into a shell. It powerfully sprays foam from its mouth."
        ],
        dexNumber: 7,
        pokeName: "Squirtle",
        type: "WATER",
        hintImage: "../client/public/images/hintImages/7.pn",
        pokeSprite: "../client/public/images/sprites/sprite007.gif",
        possibleChoices: [
            "Poliwag",
            "Tentacool",
            "Slowbro",
            "Krabby",
            "Seaking"
        ]   
    },
    {
        dex: [
            "Its large tail is covered with rich, thick fur that deepens in color with age. The scratches on its shell are evidence of this POKéMON's toughness in battle.",
            "This POKéMON is very popular as a pet. Its fur-covered tail is a symbol of its longevity.",
            "It often hides in water to stalk unwary prey. For fast swimming, it moves its ears to maintain balance."
        ],
        dexNumber: 8,
        pokeName: "Wartortle",
        type: "WATER",
        hintImage: "../client/public/images/hintImages/8.pn",
        pokeSprite: "../client/public/images/sprites/sprite008.gif",
        possibleChoices: [
            "Eevee",
            "Wigglytuff",
            "Poliwag",
            "Tentacool",
            "Slowbro",
            "Krabby",
            "Seaking"
        ]
    },
    {
        dex: [
            "The waterspouts that protrude from its shell are highly accurate. Their bullets of water can precisely nail tin cans from a distance of over 160 feet.",
            "It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.",
            "The pressurized water jets on this brutal POKéMON's shell are used for high-speed tackles."
        ],
        dexNumber: 9,
        pokeName: "Blastoise",
        type: "WATER",
        hintImage: "../client/public/images/hintImages/9.pn",
        pokeSprite: "../client/public/images/sprites/sprite009.gif",
        possibleChoices: [
            "Wigglytuff",
            "Poliwag",
            "Tentacool",
            "Slowbro",
            "Krabby",
            "Seaking"
        ]
    },
    {
        dex: [
            "Its voracious appetite compels it to devour leaves bigger than itself without hesitation. It releases a terribly strong odor from its antennae.",
            "It is covered with a green skin. When it grows, it sheds the skin, covers itself with silk, and becomes a cocoon.",
            "Its short feet are tipped with suction pads that enable it to tirelessly climb slopes and walls."
        ],
        dexNumber: 10,
        pokeName: "Caterpie",
        type: "BUG",
        hintImage: "../client/public/images/hintImages/10.pn",
        pokeSprite: "../client/public/images/sprites/sprite010.gif",
        possibleChoices: [
            "Weedle",
            "Venonat",
            "Pinsir",
            "Venomoth",
            "Parasect"
        ]
    },
    {
        dex: [
            "Even though it is encased in a sturdy shell, the body inside is tender. It can't withstand a harsh attack.",
            "This POKéMON is vulnerable to attack while its shell is soft, exposing its weak and tender body."
        ],
        dexNumber: 11,
        pokeName: "Metapod",
        type: "BUG",
        hintImage: "../client/public/images/hintImages/11.pn",
        pokeSprite: "../client/public/images/sprites/sprite011.gif",
        possibleChoices: [
            "Paras",
            "Scyther",
            "Kakuna",
            "Kabuto"
        ]
    },
    {
       dex: [
           "It has a superior ability to search for delicious honey from flowers. It can seek, extract, and carry honey from flowers blooming over six miles away.",
           "The wings are protected by rain-repellent dust. As a result, this POKéMON can fly about even in rain.",
           "In battle, it flaps its wings at great speed to release highly toxic dust into the air."
       ],
       dexNumber: 12,
       pokeName: "Butterfree",
       type: [
           "BUG",
           "FLYING"
       ],
       hintImage: "../client/public/images/hintImages/12.pn",
       pokeSprite: "../client/public/images/sprites/sprite012.gif",
       possibleChoices: [
           "Fearow",
           "Golbat",
           "Beedrill",
           "Venomoth"
       ] 
    },
    {
        dex: [
            "It has an extremely acute sense of smell. It distinguishes its favorite kinds of leaves from those it dislikes by sniffing with its big red proboscis (nose).",
            "Often found in forests and grasslands. It has a sharp, toxic barb of around two inches on top of its head.",
            "Often found in forests, eating leaves. It has a sharp stinger on its head that injects poison."
        ],
        dexNumber: 13,
        pokeName: "Weedle",
        type: [
            "BUG",
            "POISON"
        ],
        hintImage: "../client/public/images/hintImages/13.pn",
        pokeSprite: "../client/public/images/sprites/sprite013.gif",
        possibleChoices: [
            "Weedle",
            "Venonat",
            "Pinsir",
            "Venomoth",
            "Parasect"
        ]
    },
    {
        dex: [
            "It remains virtually immobile while it clings to a tree. However, on the inside, it busily prepares for evolution. This is evident from how hot its shell becomes.",
            "This POKéMON is in a temporary stage while making its body. It is almost completely unable to move on its own.",
            "Almost incapable of moving, this POKéMON can only harden its shell to protect itself when it is in danger."
        ],
        dexNumber: 14,
        pokeName: "Kakuna",
        type: [
            "BUG",
            "POISON"
        ],
        hintImage: "../client/public/images/hintImages/14.pn",
        pokeSprite: "../client/public/images/sprites/sprite014.gif",
        possibleChoices: [
            "Metapod",
            "Paras",
            "Scyther",
            "Kakuna",
            "Kabuto"

        ]
    },
    {
        dex: [
            "It is extremely territorial. For safety reasons, no one should ever approach its nest. If angered, they will attack in a swarm.",
            "May appear in a swarm. Flies at violent speeds, all the while stabbing with the toxic stinger on its rear.",
            "It flies at high speed and attacks using the large venomous stingers on its forelegs and tail."
        ],
        dexNumber: 15,
        pokeName: "Beedrill",
        type: [
            "BUG",
            "POISON"
        ],
        hintImage: "../client/public/images/hintImages/15.pn",
        pokeSprite: "../client/public/images/sprites/sprite015.gif",
        possibleChoices: [
            "Venonat",
            "Pinsir",
            "Venomoth",
            "Parasect"
        ]
    },
    {
        dex: [
            "It has an extremely sharp sense of direction. It can unerringly return home to its nest, however far it may be removed from its familiar surroundings.",
            "Does not like to fight. It hides in tall grass and so on, foraging for food such as small bugs.",
            "A common sight in forests and woods. It flaps its wings at ground level to kick up blinding sand."
        ],
        dexNumber: 16,
        pokeName: "Pidgey",
        type: [
            "NORMAL",
            "FLYING"
        ],
        hintImage: "../client/public/images/hintImages/16.pn",
        pokeSprite: "../client/public/images/sprites/sprite016.gif",
        possibleChoices: [
            "Pidgeot",
            "Spearow",
            "Fearow",
            "Farfetch'd",
            "Doduo"
        ]
    },
    {
        dex: [
            "This POKéMON flies around, patrolling its large territory. If its living space is violated, it shows no mercy in thoroughly punishing the foe with its sharp claws.",
            "The claws on its feet are well developed. It can carry prey such as an EXEGGCUTE to its nest over 60 miles away.",
            "Very protective of its sprawling territorial area, this POKéMON will fiercely peck at any intruder."
        ],
        dexNumber: 17,
        pokeName: "Pidgeotto",
        type: [
            "NORMAL",
            "FLYING"
        ],
        hintImage: "../client/public/images/hintImages/17.pn",
        pokeSprite: "../client/public/images/sprites/sprite017.gif",
        possibleChoices: [
            "Pidgeot",
            "Spearow",
            "Fearow",
            "Farfetch'd",
            "Doduo"
        ]
    },
    {
        dex: [
            "It spreads its gorgeous wings widely to intimidate enemies. It races through the skies at Mach-2 speed.",
            "When hunting, it skims the surface of water at high speed to pick off unwary prey such as MAGIKARP."
        ],
        dexNumber: 18,
        pokeName: "Pidgeot",
        type: [
            "NORMAL",
            "FLYING"
        ],
        hintImage: "../client/public/images/hintImages/18.pn",
        pokeSprite: "../client/public/images/sprites/sprite018.gif",
        possibleChoices: [
            "Spearow",
            "Fearow",
            "Farfetch'd",
            "Doduo",
            "Aerodactyl"
        ]
    },
    {
        dex: [
            "Its fangs are long and very sharp. They grow continuously, so it gnaws on hard things to whittle them down.",
            "Bites anything when it attacks. Small and very quick, it is a common sight in many places."
        ],
        dexNumber: 19,
        pokeName: "Rattata",
        type: "NORMAL",
        hintImage: "../client/public/images/hintImages/19.pn",
        pokeSprite: "../client/public/images/sprites/sprite019.gif",
        possibleChoices: [
            "Meowth",
            "Kangaskhan",
            "Eevee",
            "Tauros",
            "Mankey"
        ]
    },
    {
        dex: [
            "Its rear feet have three toes each. They are webbed, enabling it to swim across rivers.",
            "It uses its whiskers to maintain its balance. It apparently slows down if they are cut off."
        ],
        dexNumber: 20,
        pokeName: "Raticate",
        type: "NORMAL",
        hintImage: "../client/public/images/hintImages/20.pn",
        pokeSprite: "../client/public/images/sprites/sprite020.gif",
        possibleChoices: [
            "Meowth",
            "Kangaskhan",
            "Eevee",
            "Tauros",
            "Mankey"
        ]
    },
    {
        dex: [
            "Its loud cry can be heard over half a mile away. If its high, keening cry is heard echoing all around, it is a sign that they are warning each other of danger.",
            "It busily flits around here and there. Even if it is frail, it can be a tough foe that uses MIRROR MOVE.",
            "Eats bugs in grassy areas. It has to flap its short wings at high speed to stay airborne."
        ],
        dexNumber: 21,
        pokeName: "Spearow",
        type: [
            "NORMAL",
            "FLYING"
        ],
        hintImage: "../client/public/images/hintImages/21.pn",
        pokeSprite: "../client/public/images/sprites/sprite021.gif",
        possibleChoices: [
            "Fearow",
            "Farfetch'd",
            "Doduo",
            "Aerodactyl"
        ]
    },
    {
        dex: [
            "Its long neck and elongated beak are ideal for catching prey in soil or water. It deftly moves this extended and skinny beak to pluck prey.",
            "Its huge and magnificent wings can keep it aloft in the sky. It can remain flying a whole day without landing.",
            "With its huge and magnificent wings, it can keep aloft without ever having to land for rest."
        ],
        dexNumber: 22,
        pokeName: "Fearow",
        type: [
            "NORMAL",
            "FLYING"
        ],
        hintImage: "../client/public/images/hintImages/22.pn",
        pokeSprite: "../client/public/images/sprites/sprite022.gif",
        possibleChoices: [
            "Spearow",
            "Pidgeotto",
            "Farfetch'd",
            "Doduo",
            "Aerodactyl"
        ]
    },
    {
        dex: [
           "A very common sight in grassland, etc. It flicks its tongue in and out to sense danger in its surroundings.",
           "Moving silently and stealthily, it eats the eggs of birds, such as PIDGEY and SPEAROW, whole." 
        ],
        dexNumber: 23,
        pokeName: "Ekans",
        type: "POISON",
        hintImage: "../client/public/images/hintImages/23.pn",
        pokeSprite: "../client/public/images/sprites/sprite023.gif",
        possibleChoices: [
            "Haunter",
            "Gengar",
            "Tentacool",
            "Meowth",
            "Persian"
        ]
    },
    {
        dex: [
            "The pattern on its belly appears to be a frightening face. Weak foes will flee just at the sight of the pattern.",
            "It is rumored that the ferocious warning markings on its belly differ from area to area."
        ],
        dexNumber: 24,
        pokeName: "Arbok",
        type: "POISON",
        hintImage: "../client/public/images/hintImages/24.pn",
        pokeSprite: "../client/public/images/sprites/sprite024.gif",
        possibleChoices: [
            "Tentacool",
            "Meowth",
            "Persian",
            "Rhyhorn",
            "Sandslash",
            "Kabutops"
        ]
    },
    {
        dex: [
            "It stores electricity in the electric sacs on its cheeks. When it releases pent-up energy in a burst, the electric power is equal to a lightning bolt.",
            "It has small electric sacs on both its cheeks. If threatened, it looses electric charges from the sacs.",
            "When several of these POKéMON gather, their electricity can build and cause lightning storms."
        ],
        dexNumber: 25,
        pokeName: "Pikachu",
        type: "ELECTRIC",
        hintImage: "../client/public/images/hintImages/25.pn",
        pokeSprite: "../client/public/images/sprites/sprite025.gif",
        possibleChoices: [
            "Electrabuzz",
            "Jolteon",
            "Zapdos",
            "Ditto",
            "Magnemite",
        ]
    }
  ];
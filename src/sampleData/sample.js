export default [
    {
        "bio": {
            "alias": "Mercy",
            "name": "Angela Ziegler",
            "age": "37",
            "location": ["Zürich, Switzerland (formerly)"],
            "nationality": "Swiss",
            "occupation": ["Field Medic", "First Responder"],
            "role": "Support",
            "health": "200",
            "profile": "https://d1u5p3l4wpay3k.cloudfront.net/overwatch_gamepedia/thumb/d/d2/Mercy-portrait.png/700px-Mercy-portrait.png?version=e5fdf5c2b3ad98b648c585bb631e5dc4",
            "icon": "https://d1u5p3l4wpay3k.cloudfront.net/overwatch_gamepedia/thumb/0/03/Icon-Mercy.png/150px-Icon-Mercy.png?version=00a8268ef6cdb58eaf5fa81a85502083"
        },
        "overview": "Mercy’s Valkyrie Suit helps keep her close to teammates like a guardian angel; healing, resurrecting or strengthening them with the beams emanating from her Caduceus Staff.",
        "skills": [
            {
                "name": "Regeneration",
                "stats": [
                    ["Healing", "20 health per second after not taking damage for 1 second"]
                ],
                "description": "Mercy automatically heals over time.",
                "icon": "iconLink",
                "videos": [{
                    "link": "VIDEOLINK",
                    "type": "video/webm"
                }],
                "type": "Passive"
            },
            {
                "name": "Angelic Descent",
                "stats": [],
                "description": "Propelled by her Valkyrie suit, Mercy slows the speed of her descent from great heights.",
                "icon": "iconLink",
                "videos": [{
                    "link": "VIDEOLINK",
                    "type": "video/webm"
                }],
                "type": "Passive"
            },
            {
                "name": "Caduceus Staff",
                "stats": [
                    ["Type", "Target Locked Beam"],
                    ["Damage", "+30% damage boost"],
                    ["Healing", "50 health per second"],
                    ["Max. Range", "15 meters"],
                    ["Duration", "Until cancelled"],
                    ["Ult. charge gain", "1.3 points per damage amplified"]
                ],
                "description": "Mercy engages one of two beams that connect to an ally. By maintaining the beams, she can either restore that ally’s health or increase the amount of damage they deal.",
                "icon": "iconLink",
                "videos": [{
                    "link": "VIDEOLINK",
                    "type": "video/webm"
                }],
                "type": "Weapon"
            }
            
        ]
    },
    {
        "bio": {
            "alias": "Ashe",
            "name": "Elizabeth Caledonia \"Calamity\" Ashe",
            "age": "39",
            "location": ["Deadlock Gorge, Arizona, USA"],
            "nationality": "American",
            "occupation": ["Thief", "Gang Leader"],
            "role": "Damage",
            "health": "200",
            "profile": "https://d1u5p3l4wpay3k.cloudfront.net/overwatch_gamepedia/4/4f/Ashe-portrait.png?version=c7b56e1a739a8d4346b2251d49f84bac",
            "icon": "https://d1u5p3l4wpay3k.cloudfront.net/overwatch_gamepedia/thumb/8/84/Icon-ashe.png/150px-Icon-ashe.png?version=f618d5a57e1d08e0a915a8ed7210ebae"
        },
        "overview": "Ashe quickly fires her rifle from the hip or uses her weapon’s aim-down sights to line up a high damage shot at the cost of fire-rate. She blasts enemies by throwing dynamite, and her coach gun packs enough punch to put some distance between her and her foes, or gain some air to leap to hard to reach places or for an aerial shot. And Ashe is not alone, as she can call on her omnic ally B.O.B. to join the fray when the need arises.",
        "skills": [
            {
                "name": "The Viper",
                "stats": [
                    ["Type", "Semi-automatic hitscan"],
                    ["Damage", "20 - 40"],
                    ["Falloff range", "20 to 40 meters"],
                    ["Spread angle" , "Max: 1.85 degrees"],
                    ["Rate of fire", "4 rounds per second"],
                    ["Ammo", "12"],
                    ["Reload time", [
                        "0.5 seconds (initial animation)",
                        "+0.3 seconds per bullet",
                        "4.25 seconds (Full reload animation)"
                    ]],
                    ["Headshot", "Yes"]
                ],
                "description": "Ashe's semi-automatic rifle fires quick shots.",
                "icon": "https://d1u5p3l4wpay3k.cloudfront.net/overwatch_gamepedia/4/4e/Ability-ashe1.png?version=d0fe575ed3b4a9314adc5b8061108131",
                "videos": [{
                    "link": "https://d1u1mce87gyfbn.cloudfront.net/hero/ashe/ability-the-viper/video-ability.webm",
                    "type": "video/webm"
                }],
                "type": "Weapon (Primary Fire)"
            },
            {
                "name": "The Viper",
                "stats": [
                    ["Type", "Single shot hitscan"],
                    ["Damage", "42.5 - 85"],
                    ["Falloff range", "30 to 60 meters"],
                    ["Spread angle", "Pinpoint"],
                    ["Move. speed", "20% decreased movement speed"],
                    ["Rate of fire", 
                                    ["1.4 rounds per second",
                                     "1 round every ~0.71 seconds"]],
                    ["Ammo", "12"],
                    ["Reload time", 
                        ["0.5 seconds (initial animation)",
                        "+0.3 seconds per bullet",
                        "4.25 seconds (Full reload animation)"]],
                    ["Headshot", "Yes"]
                 ],
                "description": "Ashe can use her aim-down sights for a more damaging, precise shot.",
                "icon": "https://d1u5p3l4wpay3k.cloudfront.net/overwatch_gamepedia/4/4e/Ability-ashe1.png?version=d0fe575ed3b4a9314adc5b8061108131",
                "videos": [{
                    "link": "VIDEOLINK",
                    "type": "video/webm"
                }],
                "type": "Weapon (Scope)"
            },
            {
                "name": "Dynamite",
                "stats": [["Stat", "StatValue"]],
                "description": "Ashe throws an explosive that detonates after a short delay or immediately when shot. The explosion from Dynamite also lights enemies on fire, dealing damage over time.",
                "icon": "https://d1u5p3l4wpay3k.cloudfront.net/overwatch_gamepedia/d/da/Ability-ashe2.png?version=f9f217e782bd9ada8aaa69972566bdd4",
                "videos": [{
                    "link": "VIDEOLINK",
                    "type": "video/webm"
                }],
                "type": "Ability"
            },
            {
                "name": "B.O.B.",
                "stats": [["Stat", "StatValue"]],
                "description": "Ashe summons her trusted omnic sidekick, B.O.B., who charges forward and knocks enemies into the air, then lays down suppressing fire with his arm cannons.",
                "icon": "https://d1u5p3l4wpay3k.cloudfront.net/overwatch_gamepedia/7/7a/Ability-ashe4.png?version=7a54b9a263a69319c289143bba4ce59a",
                "videos": [{
                    "link": "VIDEOLINK",
                    "type": "video/webm"
                }],
                "type": "Ultimate Ability"
            },
            {
                "name": "Coach Gun",
                "stats": [["Stat", "StatValue"]],
                "description": "Ashe blasts enemies in front of her, knocking them away and propelling herself backward for added mobility.",
                "icon": "https://d1u5p3l4wpay3k.cloudfront.net/overwatch_gamepedia/8/85/Ability-ashe3.png?version=de47b39b889abf4007ebda56955c1a45",
                "videos": [{
                    "link": "VIDEOLINK",
                    "type": "video/webm"
                }],
                "type": "Ability"
            }

        ]
    },
    {
        "bio": {
            "alias": "D.Va",
            "name": "Hana Song (송하나)",
            "age": "19",
            "location": ["Busan, Korea"],
            "nationality": "Korean",
            "occupation": ["Professional gamer (formerly)", "Mech Pilot", "Actress"],
            "role": "Tank",
            "health": ["150 (Pilot)", "400 (Mech)"],
            "armor": ["200 (Mech)"],
            "profile": "https://d1u5p3l4wpay3k.cloudfront.net/overwatch_gamepedia/thumb/b/b0/DVa-portrait.png/672px-DVa-portrait.png?version=d4c75428d60b74d3141a996683b06a1c",
            "icon": "https://d1u5p3l4wpay3k.cloudfront.net/overwatch_gamepedia/thumb/1/19/Icon-D.Va.png/150px-Icon-D.Va.png?version=0c816735f5b230e62aad4c42b873ef4a"
        },
        "overview": "D.Va’s mech, Tokki is nimble and powerful — its twin Fusion Cannons blast away with autofire at short range, and she can use its Boosters to barrel over enemies and obstacles, or absorb attacks with her projectile-dismantling Defense Matrix.",
        "skills": [
            {
                "name": "Fusion Cannons",
                "stats": [
                    ["Type", "Rapid Fire Shotgun"],
                    ["Damage", "0.6–2"],
                    ["Falloff range", "10 to 20 meters"],
                    ["Spread angle", "Constant: 4.15 degrees"],
                    ["Move. speed", "2.75 meters per second (50% slower)"],
                    ["Num. of pellets", "11 per shot"],
                    ["Rate of fire", "6.67 rounds per second"],
                    ["Ammo", "∞"],
                    ["Headshot", "Yes"]
                ],
                "description": "D.Va's mech is equipped with twin short-range rotating cannons. They lay down continuous, high-damage fire without needing to reload, but slow D.Va’s movement while they’re active.",
                "icon": "iconLink",
                "videos": [{
                    "link": "VIDEOLINK",
                    "type": "video/webm"
                }],
                "type": "Weapon"
            },
            {
                "name": "Defense Matrix",
                "stats": [
                    ["Max. range", "15 meters"],
                    ["Duration", ["Up to 2 seconds", "(when fully charged)"]],
                    ["Cooldown",["1 second", "8 seconds recharging"]]
                ],
                "description": "D.Va can activate this forward-facing targeting array to shoot incoming projectiles out of the air.",
                "icon": "iconLink",
                "videos": [{
                    "link": "VIDEOLINK",
                    "type": "video/webm"
                }],
                "type": "Ability"
            },
            {
                "name": "Boosters",
                "stats": [
                    ["Damage", "10"],
                    ["Move. speed", "12.5 meters per second"],
                    ["Max. range", "Up to 25 meters"],
                    ["Duration", ["Up to 2 seconds"]],
                    ["Cooldown", "5 seconds"],
                    ["Headshot", "Yes"]
                ],
                "description": "D.Va’s mech launches into the air, her momentum carrying her forward. She can turn and change directions or barrel through her enemies, knocking them back.",
                "icon": "iconLink",
                "videos": [{
                    "link": "VIDEOLINK",
                    "type": "video/webm"
                }],
                "type": "Ability"
            }
        ]
    }
];
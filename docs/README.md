## Documentation

**ammo**

<details>
<summary>show properties</summary>
.id .name .description .image .type .attackPower .passive

## Sample

```json
{
  "id": "17f699c4de5l0i0a5a69f9ja6l52sm",
  "name": "Bloodbone Bolt",
  "image": "https://eldenring.fanapis.com/images/ammos/17f699c4de5l0i0a5a69f9ja6l52sm.png",
  "description": "Bolt carved from animal bone. The tip is daubed with a blood tincture. Afflicts targets with blood loss. Craftable item. ",
  "type": "Pierce",
  "attackPower": [
    { "name": "physical", "amount": 25 },
    { "name": "magic", "amount": 0 },
    { "name": "fire", "amount": 0 },
    { "name": "lightning", "amount": 0 },
    { "name": "holy", "amount": 0 },
    { "name": "critical", "amount": 100 }
  ],
  "passive": "Causes blood loss buildup (50)"
}
```

</details>
<br>

**armor**

<details>
<summary>show properties</summary>
.id .name .description .image .category .dmgNegation .resistance .weight

## Sample

```json
{
  "id": "17f69515b49l0i0nbno079cqzlskebf",
  "name": "All-knowing Armor",
  "image": "https://eldenring.fanapis.com/images/armors/17f69515b49l0i0nbno079cqzlskebf.png",
  "description": "Armor set with countless eyes and ears. Worn by Gideon Ofnir, the All-Knowing. Knowledge begins with the recognition of one's ignorance. The realization that the search for knowledge is unending. But when Gideon glimpsed into the will of Queen Marika, he shuddered in fear. At the end that should not be.",
  "category": "Chest Armor",
  "dmgNegation": [
    { "name": "Phy", "amount": 12 },
    { "name": "Strike", "amount": 11 },
    { "name": "Slash", "amount": 13 },
    { "name": "Pierce", "amount": 11 },
    { "name": "Magic", "amount": 12 },
    { "name": "Fire", "amount": 9 },
    { "name": "Ligt", "amount": 10 },
    { "name": "Holy", "amount": 8 }
  ],
  "resistance": [
    { "name": "Immunity", "amount": 28 },
    { "name": "Robustness", "amount": 46 },
    { "name": "Focus", "amount": 21 },
    { "name": "Vitality", "amount": 21 },
    { "name": "Poise", "amount": 16 }
  ],
  "weight": 10.6
}
```

</details>
<br>

**ashes**

<details>
<summary>show properties</summary>
.id .name .description .image .affinity .skill

## Sample

```json
{
  "id": "17f699db6b0l0hzn9xsxxwtgyfky3",
  "name": "Ash Of War: Prelate's Charge",
  "image": "https://eldenring.fanapis.com/images/ashes/17f699db6b0l0hzn9xsxxwtgyfky3.png",
  "description": "This Ash of War grants an armament the Flame affinity and the following skill:\"Prelate's Charge: Slam armament into the ground to create a surge of flames, then charge in. Hold to continue the charge.\"Usable on large and colossal axes and hammers.",
  "affinity": "Flame",
  "skill": "Prelate's Charge"
}
```

</details>
<br>

**boss**

<details>
<summary>show properties</summary>
.id .name .description .image .region .description .location .drops

## Sample

```json
{
  "id": "17f69a48308l0i1ux3rigvv37tx84f",
  "name": "Malenia, Blade Of Miquella",
  "image": "https://eldenring.fanapis.com/images/bosses/17f69a48308l0i1ux3rigvv37tx84f.png",
  "region": "Consecrated Snowfield",
  "description": "...Heed my words. I am Malenia. Blade of Miquella. And I have never known defeat.",
  "location": "Elphael, Brace of the Haligtree",
  "drops": [
    "Malenia's Great Rune",
    "Remembrance of the Rot Goddess",
    "480,000 Runes"
  ],
  "healthPoints": "≈26,128"
}
```

</details>
<br>

**classes**

<details>
<summary>show properties</summary>
.id .name .image .description .stats

## Sample

```json
{
  "id": "17f69db959fl0i32hhpwdbjko0bj57",
  "name": "Vagabond",
  "image": "https://eldenring.fanapis.com/images/classes/17f69db959fl0i32hhpwdbjko0bj57.png",
  "description": "A knight exiled from their homeland to wander. A solid, armor-clad origin.",
  "stats": {
    "level": "9",
    "vigor": "15",
    "mind": "10",
    "endurance": "11",
    "strength": "14",
    "dexterity": "13",
    "intelligence": "9",
    "faith": "9",
    "arcane": "7"
  }
}
```

</details>
<br>

**creature**

<details>
<summary>show properties</summary>
.id .name .image .description .location .drops

## Sample

```json
{
  "id": "17f69f93e2cl0i6ywpl2tdr0v79vp8",
  "name": "Turtle",
  "image": "https://eldenring.fanapis.com/images/creatures/17f69f93e2cl0i6ywpl2tdr0v79vp8.png",
  "description": "Turtles are passive creatures almost driven to extinction by those seeking its meat, said to have curative properties",
  "location": "West Limgrave",
  "drops": ["Turtle Neck Meat", "5 Runes"]
}
```

</details>
<br>

**incantation**

<details>
<summary>show properties</summary>
.id .name .image .description .type .cost .slots .effects .requires

## Sample

```json
{
  "id": "17f696c7ce7l0hynrwmh6d0r0rwk2",
  "name": "Ancient Dragons' Lightning Strike",
  "image": "https://eldenring.fanapis.com/images/incantations/17f696c7ce7l0hynrwmh6d0r0rwk2.png",
  "description": "A secret incantation of the capital's ancient dragon cult.",
  "type": "Incantations",
  "cost": 27,
  "slots": 1,
  "effects": "Summons red lightning that spreads from impact",
  "requires": [
    { "name": "Intelligence", "amount": 0 },
    { "name": "Faith", "amount": 26 },
    { "name": "Arcane", "amount": 0 }
  ]
}
```

</details>
<br>

**item**

<details>
<summary>show properties</summary>
.id .name .image .description .type .effect

## Sample

```json
{
  "id": "17f69e47912l0i1z0lip3kamll88h",
  "name": "Blue Cipher Ring",
  "image": "https://eldenring.fanapis.com/images/items/17f69e47912l0i1z0lip3kamll88h.png",
  "description": "Item for online play. Puts the wearer in ready state to answer should someone in another world call for rescue. You will be summoned to their world as a hunter. When summoned to rescue another player, your objective will be to defeat the invader.",
  "type": "Reusable",
  "effect": "Enables the wearer to answer calls for rescue"
}
```

</details>
<br>

**location**

<details>
<summary>show properties</summary>
.id .name .image .region .description

```json
{
  "id": "17f69c5a795l0i2m72bjeqbh713r3o",
  "name": "Bridge Of Sacrifice",
  "image": "https://eldenring.fanapis.com/images/locations/17f69c5a795l0i2m72bjeqbh713r3o.png",
  "region": "Limgrave",
  "description": "A busy bridge swarming with iron-clad foes. Be prepared to engage in an array of melee, ranged and artillery attacks or attempt to push past them"
}
```

</details>
<br>

**npc**

<details>
<summary>show properties</summary>
.id .name .image .quote .location .role
## Sample

```json
{
  "id": "17f69f7be15l0i2oki48thaky6x3tg",
  "name": "War Counselor Iji",
  "image": "https://eldenring.fanapis.com/images/npcs/17f69f7be15l0i2oki48thaky6x3tg.png",
  "quote": "Well, look at you. We don't receive many visitors",
  "location": "Kingsrealm Ruins, Western Liurnia of the Lakes",
  "role": "Blacksmith & Quest NPC"
}
```

</details>
<br>

**shield**

<details>
<summary>show properties</summary>
.id .name .image .description .attack .defence .scalesWith .requiredAttributes .category .weight

## Sample

```json
{
  "id": "17f69c62fe8l0i124u8fi4nc7dbfbf",
  "name": "Buckler",
  "image": "https://eldenring.fanapis.com/images/shields/17f69c62fe8l0i124u8fi4nc7dbfbf.png",
  "description": "A small metal roundshield. The bump in the center enables parrying techniques. A well-timed parry can break an enemy's stance, allowing a critical hit. Best suited for those prepared to take the risk to reap their reward.",
  "attack": [
    { "name": "Phy", "amount": 68 },
    { "name": "Mag", "amount": 0 },
    { "name": "Fire", "amount": 0 },
    { "name": "Ligt", "amount": 0 },
    { "name": "Holy", "amount": 0 },
    { "name": "Crit", "amount": 100 }
  ],
  "defence": [
    { "name": "Phy", "amount": 58 },
    { "name": "Mag", "amount": 28 },
    { "name": "Fire", "amount": 28 },
    { "name": "Ligt", "amount": 14 },
    { "name": "Holy", "amount": 28 },
    { "name": "Boost", "amount": 30 }
  ],
  "scalesWith": [
    { "name": "Str", "scaling": "E" },
    { "name": "Dex", "scaling": "D" }
  ],
  "requiredAttributes": [
    { "name": "Str", "amount": 8 },
    { "name": "Dex", "amount": 13 }
  ],
  "category": "Small Shield",
  "weight": 1.5
}
```

</details>
<br>

**sorcery**

<details>
<summary>show properties</summary>
.id .name .image .description .type .cost .slots .effects .requires

```json
{
  "id": "17f69323f35l0hykrc6d1g3vajyc0n",
  "name": "Briars Of Punishment",
  "image": "https://eldenring.fanapis.com/images/sorceries/17f69323f35l0hykrc6d1g3vajyc0n.png",
  "description": "An aberrant sorcery discovered by exiled criminals. Theirs are the sorceries most reviled by the academy. Wounds the caster with thorns of sin, sending a trail of bloodthorns running over the ground to impale enemies from below. This sorcery can be cast repeatedly. The guilty, their eyes gouged by thorns, lived in eternal darkness. There, they discovered the blood star.",
  "type": "Sorceries",
  "cost": 13,
  "slots": 1,
  "effects": "Wounds caster to unleash trail of bloodthrorns",
  "requires": [
    { "name": "Intelligence", "amount": 0 },
    { "name": "Faith", "amount": 21 },
    { "name": "Arcane", "amount": 0 }
  ]
}
```

</details>
<br>

**spirit**

<details>
<summary>show properties</summary>
.id .name .image .description .fpCost .hpCost .effect

## Sample

```json
{
  "id": "17f698bf108l0i2rc1o532xfaytwzl",
  "name": "Albinauric Ashes",
  "image": "https://eldenring.fanapis.com/images/spirits/17f698bf108l0i2rc1o532xfaytwzl.png",
  "description": "Ashen remains in which spirits yet dwell. Use to summon the spirits of two Albinaurics.",
  "fpCost": "53",
  "hpCost": "0",
  "effect": "Summons two Albinauric spirits"
}
```

</details>
<br>

**talisman**

<details>
<summary>show properties</summary>
.id .name .image .description .effect

## Sample

```json
{
  "id": "17f69dfff40l0i2soo71h481xlxzx8i",
  "name": "Arrow's Reach Talisman",
  "image": "https://eldenring.fanapis.com/images/talismans/17f69dfff40l0i2soo71h481xlxzx8i.png",
  "description": "A talisman depicting three arrows. Carried by hunters of beasts.",
  "effect": "Increases bow effective range."
}
```

</details>
<br>

**utility**

<details>
<summary>show properties</summary>
.search .getAll
</details>
<br>

**weapon**

<details>
<summary>show properties</summary>
.id .name .image .description .attack .defence .scalesWith .requiredAttributes .category .weight

## Sample

```json
{
  "id": "17f69c35d2cl0i1oh7zuqfb3mdvsj",
  "name": "Hand Axe",
  "image": "https://eldenring.fanapis.com/images/weapons/17f69c35d2cl0i1oh7zuqfb3mdvsj.png",
  "description": "Commonly known as a hatchet, this smaller variety of axe is an everyday work tool. Despite its short reach, it is easy to handle, exceling in successive attacks.",
  "attack": [
    { "name": "Phy", "amount": 113 },
    { "name": "Mag", "amount": 0 },
    { "name": "Fire", "amount": 0 },
    { "name": "Ligt", "amount": 0 },
    { "name": "Holy", "amount": 0 },
    { "name": "Crit", "amount": 100 }
  ],
  "defence": [
    { "name": "Phy", "amount": 42 },
    { "name": "Mag", "amount": 28 },
    { "name": "Fire", "amount": 28 },
    { "name": "Ligt", "amount": 28 },
    { "name": "Holy", "amount": 28 },
    { "name": "Boost", "amount": 28 }
  ],
  "scalesWith": [
    { "name": "Str", "scaling": "D" },
    { "name": "Dex", "scaling": "D" }
  ],
  "requiredAttributes": [
    { "name": "Str", "amount": 9 },
    { "name": "Dex", "amount": 8 }
  ],
  "category": "Axe",
  "weight": 3.5
}
```

</details>
<br>

For more detailed documentation, please refer to the [Elden Ring Fan API](https://docs.eldenring.fanapis.com/) documentation.

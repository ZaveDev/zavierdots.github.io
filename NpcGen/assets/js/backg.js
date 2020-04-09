const playName = document.getElementById('nam');
const str_span = document.getElementById('strVal');
const strm_span = document.getElementById('strMod');
const strs_span = document.getElementById('strSave');
const dex_span = document.getElementById('dexVal');
const dexm_span = document.getElementById('dexMod');
const dexs_span = document.getElementById('dexSave');
const con_span = document.getElementById('conVal');
const conm_span = document.getElementById('conMod');
const cons_span = document.getElementById('conSave');
const wis_span = document.getElementById('wisVal');
const wism_span = document.getElementById('wisMod');
const wiss_span = document.getElementById('wisSave');
const int_span = document.getElementById('intVal');
const intm_span = document.getElementById('intMod');
const ints_span = document.getElementById('intSave');
const cha_span = document.getElementById('chaVal');
const cham_span = document.getElementById('chaMod');
const chas_span = document.getElementById('chaSave');
const lvl_span = document.getElementById('level');
const collapse_div = document.getElementById("button");
const cls_span = document.getElementById('cls');
const hp_span = document.getElementById('hp');
const ac_span = document.getElementById('ac');
const spd_span = document.getElementById('spd');
const feat_id = document.getElementById('feat');
const featd = document.getElementById('featd');
var featcls = document.getElementsByClassName("fts");
var ftdesc = document.getElementsByClassName("featd");
const gen_div = document.getElementById('gen');
const race_span = document.getElementById('race');
const athl_span = document.getElementById('athl');
const acro_span = document.getElementById('acro');
const slei_span = document.getElementById('slei');
const stea_span = document.getElementById('stea');
const arca_span = document.getElementById('arca');
const hist_span = document.getElementById('hist');
const inve_span = document.getElementById('inve');
const natu_span = document.getElementById('natu');
const reli_span = document.getElementById('reli');
const anim_span = document.getElementById('anim');
const insi_span = document.getElementById('insi');
const medi_span = document.getElementById('medi');
const perc_span = document.getElementById('perc');
const surv_span = document.getElementById('surv');
const dece_span = document.getElementById('dece');
const inti_span = document.getElementById('inti');
const perf_span = document.getElementById('perf');
const pers_span = document.getElementById('pers');
const invent_span = document.getElementById('invent');
var tool = [];
var abi = document.getElementById('abilities');
var races = ['Tiefling', 'Half-Orc', 'Half-Elf', 'Forest Gnome',
    'Rock Gnome', 'Human', 'Lightfoot Halfling', 'Stout Halfling',
    'High Elf', 'Wood Elf', 'Dark Elf', 'Hill Dwarf', 'Mountain Dwarf'];
var times;
var inventory = [];
var toolup = [];
var tool = [];
var skillprof = 0;
var sk1 = '';
var sk2 = '';
var sk3 = '';
var sk4 = '';
var sk5 = '';
var sk6 = '';
var sk7 = '';
var spd = 0;
var hp = 0;
var hp1 = 0;
var ac = 10;
var str = 0;
var dex = 0;
var con = 0;
var wis = 0;
var int = 0;
var cha = 0;
var strMod = 0;
var dexMod = 0;
var conMod = 0;
var wisMod = 0;
var intMod = 0;
var chaMod = 0;
var strSave = 0;
var dexSave = 0;
var conSave = 0;
var wisSave = 0;
var intSave = 0;
var chaSave = 0;
var athl = 0;
var acro = 0;
var slei = 0;
var stea = 0;
var arca = 0;
var hist = 0;
var inve = 0;
var natu = 0;
var reli = 0;
var anim = 0;
var insi = 0;
var medi = 0;
var perc = 0;
var surv = 0;
var dece = 0;
var inti = 0;
var perf = 0;
var pers = 0;

var t_strSave = false;
var t_dexSave = false;
var t_conSave = false;
var t_wisSave = false;
var t_intSave = false;
var t_chaSave = false;
var t_athl = false;
var t_acro = false;
var t_slei = false;
var t_stea = false;
var t_arca = false;
var t_hist = false;
var t_inve = false;
var t_natu = false;
var t_reli = false;
var t_anim = false;
var t_insi = false;
var t_medi = false;
var t_perc = false;
var t_surv = false;
var t_dece = false;
var t_inti = false;
var t_perf = false;
var t_pers = false;

var lvl = 0;
var cls = "";
var feat = "";
var feats = ['Alert', 'Athlete', 'Actor', 'Charger', 'Dungeon Delver', 'Durable', 'Heavily Armored', 'Keen Mind', 'Lightly Armored', 'Lucky', 'Mage Slayer', 'Mobile', 'Mounted Combatant', 'Observant', 'Sentinel', 'Skilled', 'Tavern Brawler', 'Tough'];
var line = "";
var race = "";
var x = null;
var y = null;
var inventory = [];
var ranStat = [];
var inventory = [];
var rs1;
var rs2;
var stat = [];
var statString = ['str', 'dex', 'con', 'wis', 'int', 'cha'];
var skillString = ['athl', 'acro', 'slei', 'stea', 'arca', 'hist', 'inve', 'natu', 'reli', 'anim', 'insi', 'medi', 'perc', 'surv', 'dece', 'inti', 'perf', 'pers'];
var ask = [];
var sa = [];

gen_div.addEventListener('click', function () {
    npc.reset();
    npc.create();
    if (npc.str > 20 || npc.dex > 20 || npc.con > 20 || npc.wis > 20 || npc.int > 20 || npc.cha > 20) {
        npc.reset();
        console.log(npc.athl);
        npc.create();
    } else {
        print();
    }
    
});

function stats() {
    let n1 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    let n2 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    let n3 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    randomNumber = n1 + n2 + n3;
    if (randomNumber < 8) {
        stats();
    }
    return randomNumber;
}

function profPerLevel(num) {
    let pot;
    if (num < 5) {
        pot = 2;
    }
    if ( num >= 5 && num < 9) {
        pot = 3;
    }
    if ( num >= 9 && num < 13) {
        pot = 4;
    }
    if ( num >= 13 && num < 17) {
        pot = 5;
    }
    if ( num >= 17 && num <= 20) {
        pot = 6;
    }    
    return pot;
}


function background() {
    let x;
    let a;
    let b;
    let c;
    let d;
    let tool = ["Alchemist's supplies", "Tinker's tools", "Glassblower's tools", "Jeweler's tools", "Brewer's supplies", "Smith's tools", "Cartographer's tools", "Mason's tools", "Calligrapher's Supplies", "Painter's supplies", "Potter's tools", "Carpenter's tools", "Cobbler's tools", "Leatherworker's tools", "Cook's utensils", "Weaver's tools", "Woodcarver's tools"];
    var instrument = ['Glaur', 'Hand Drum', 'Longhorn', 'Shawm', 'Songhorn', 'Tantan', 'Thelarr', 'Tocken', 'Wargong', 'Yarting', 'Zulkoon'];

    var lang = [];
    var lang1 = '';
    var lang2 = '';
    var pTrait = [];
    var ideal = [];
    var bond = [];
    var flaw = [];
    rs1 = '';
    rs2 = '';
    invent_span.innerHTML = '';
    lang3 = 'Common';
    x = backArray[Math.floor(Math.random() * backArray.length)];
    //x = ""; // use this for specific Background 

    switch (x) {
        case "Acolyte":
            lang = ["Dwarvish", "Elvish", "Giant", "Gnomish", "Goblin", "Halfling", "Orc"];
            lang3 = 'Common';
            lang1 = lang[Math.floor(Math.random() * lang.length)];
            lang2 = lang[Math.floor(Math.random() * lang.length)];

            pTrait.push(
                "I idolize a particular hero of my faith, and constantly refer to that person's deeds and example.",
                "I can find common ground between the fiercest enemies, empathizing with them and always working toward peace.",
                "I see omens in every event and action, the gods try to speak with us and we just have need to listen.",
                "Nothing can shake my optimistic attitude.",
                "I misquote (or quote) sacred texts and proverbs in almost every situation.",
                "I am intolerant (or tolerant) of any others faith and respect (or condemn) the worship of other gods.",
                "I have enjoyed nice food, drink and high society among my temple's elite. Rough living grates on me.",
                "I have spent so long in the temple that i've little practical experience dealing with people in the outside world."
            );
            a = pTrait[Math.floor(Math.random() * pTrait.length)];

            ideal.push(
                "Tradition. The ancient traditions of worship and sacrifice must be preserved and upheld. (Lawful)",
                "Charity. I always try to help those in need, no matter what the personal cost. (Good)",
                "Change. We must help bring about changes the gods're constantly working in the world. (Chaotic)",
                "Power. I hope to one day rise to the top of my faith's religious hierarchy. (Lawful)",
                "Faith. I trust that my deity will guide my actions. I have faith that if i work hard, things will go well. (Lawful)",
                "Aspiration. I seek to prove my self worthy of my god's favor by matching my actions against her or his teachings. (Any)"
            );
            b = ideal[Math.floor(Math.random() * ideal.length)];

            bond.push(
                "I would die to recover an ancient relic of my faith that was lost long ago.",
                "Some day i will get revenge on the corrupt temple hierarchy who branded me a heretic.",
                "I owe my life to he priest who ever took me in when my parents has died.",
                "Everything i do is only for the common people.",
                "I will do anything to protect the temple where ever i served.",
                "I seek to preserve a sacred text which my enemies consider heretical and seek to destroy."
            );
            c = bond[Math.floor(Math.random() * bond.length)];

            flaw.push(
                "I judge others harshly, myself even more severely.",
                "who wield power within my temple's hierarchy, i put too much trust in them.",
                "My piety sometimes leads me to blindly believe those which profess faith in my god.",
                "I am Inflexible in my thinking.",
                "I am suspicious of strangers and i also expect the worst of them.",
                "Once i pick a goal, i become obsessed with it to the detriment of everything else in my life."
            );
            d = flaw[Math.floor(Math.random() * flaw.length)];
            if (t_insi == false) {npc.insi += npc.prof; t_insi = true;}
            if (t_reli == false) {npc.reli += npc.prof; t_reli = true;}
            npc.proficiencies.push();
            npc.inventory.push('A holy symbol, a prayer book or wheel, 5 sticks of incense, vestments, a set of common clothes, a belt pouch which is containing 15 gp.');
            break;
        case "Anthropologist":
            lang = ["Dwarvish", "Elvish", "Giant", "Gnomish", "Goblin", "Halfling", "Orc"];
            lang3 = 'Common';
            lang1 = lang[Math.floor(Math.random() * lang.length)];
            lang2 = lang[Math.floor(Math.random() * lang.length)];

            pTrait.push(
                "I prefer the company of those who aren't like me, including people of other races.",
                "I'm a stickler when it comes to observing proper etiquette and local customs.",
                "I would rather observe than meddle.",
                "By living among violent people, I have become desensitized to violence.",
                "I would risk life and limb to discover a new culture or unravel the secrets of a dead one.",
                "When I arrive at a new settlement for the first time, I must learn all its customs."
            );
            a = pTrait[Math.floor(Math.random() * pTrait.length)];
            flaw.push(
                "Boats make me seasick.",
                "I talk to myself, and I don't make friends easily.",
                "I believe that I'm intellectually superior to people from other cultures and have much to teach them.",
                "I've picked up some unpleasant habits living among races such as goblins, lizardfolk, or orcs.",
                "I complain about everything.",
                "I wear a tribal mask and never take it off."
            );
            d = flaw[Math.floor(Math.random() * flaw.length)];
            ideal.push(
                "Discovery: I want to be the first person to discover a lost culture. (Any)",
                "Distance: One must not interfere with the affairs of another culture , even one in need of aid. (Lawful)",
                "Knowledge: By understanding other races and cultures, we learn to understand ourselves. (Any)",
                "Power: Common people crave strong leadership, and I do my utmost to provide it. (Lawful)",
                "Protection: I must do everything possible to save a society facing extinction. (Good)",
                "Indifferent: Life is cruel. What's the point in saving people if they're going to die anyway? (Chaotic)"
            );
            b = ideal[Math.floor(Math.random() * ideal.length)];
            bond.push(
                "My mentor gave me a journal filled with lore and wisdom. Losing it would devastate me.",
                "Having lived among the people of a primeval tribe or clan, I long to return and see how they are faring.",
                "Years ago, tragedy struck the members of an isolated society I befriended, and I will honor them.",
                "I want to learn more about a particular humanoid culture that fascinates me.",
                "I seek to avenge a clan, tribe, kingdom, or empire that was wiped out.",
                "I have a trinket that I believe is the key to finding a long-lost society."
            );
            c = bond[Math.floor(Math.random() * bond.length)];
            if (t_insi == false) {npc.insi += npc.prof; t_insi = true;}
            if (t_reli == false) {npc.reli += npc.prof; t_reli = true;}
            npc.proficiencies.push();
            npc.inventory.push("A leather-bound diary, a bottle of ink, an ink pen, a set of traveler's clothes, one trinket of special significance, and a pouch containing 10 gp");
            break;
        case "Archaeologist":
            lang = ["Dwarvish", "Elvish", "Giant", "Gnomish", "Goblin", "Halfling", "Orc"];
            lang3 = 'Common';
            lang1 = lang[Math.floor(Math.random() * lang.length)];

            pTrait.push(
                "I love a good puzzle or mystery.",
                "I'm a pack rat who never throws anything away.",
                "Fame is more important to me than money.",
                "I have no qualms about stealing from the dead.",
                "I'm happier in a dusty old tomb than I am in the centers of civilization.",
                "Traps don't make me nervous. Idiots who trigger traps make me nervous.",
                "I might fail, but I will never give up.",
                "You might think I'm a scholar, but I love a good brawl. These fists were made for punching."
            );
            a = pTrait[Math.floor(Math.random() * pTrait.length)];
            flaw.push(
                "I have a secret fear of some common wild animal , and in my work, I see them everywhere.",
                "I can't leave a room without searching it for secret doors.",
                "When I'm not exploring dungeons or ruins, I get jittery and impatient.",
                "I have no time for friends or family. I spend every waking moment thinking about and preparing for my next expedition.",
                "When given the choice of going left or right, I always go left.",
                "I can't sleep except in total darkness."
            );
            d = flaw[Math.floor(Math.random() * flaw.length)];
            ideal.push(
                "Preservation: That artifact belongs in a museum. (Good)",
                "Greed: I won't risk my life for nothing. I expect some kind of payment. (Any)",
                "Death Wish: Nothing is more exhilarating than a narrow escape from the jaws of death. (Chaotic)",
                "Dignity: The dead and their belongings deserve to be treated with respect. (Lawful)",
                "Immortality: All my exploring is part of a plan to find the secret of everlasting life. (Any)",
                "Danger: With every great discovery comes grave danger. The two walk hand in hand. (Any)"
            );
            b = ideal[Math.floor(Math.random() * ideal.length)];
            bond.push(
                "Ever since I was a child, I've heard stories about a lost city. I aim to find it, learn its secrets, and earn my place in the history books.",
                "I want to find my mentor, who disappeared on an expedition some time ago.",
                "I have a friendly rival. Only one of us can be the best, and I aim to prove it's me.",
                "I won't sell an art object or other treasure that has historical significance or is one of a kind.",
                "I'm secretly in love with the wealthy patron who sponsors my archaeological exploits.",
                "I hope to bring prestige to a library, a museum, or a university."
            );
            c = bond[Math.floor(Math.random() * bond.length)];
            if (t_hist == false) {npc.hist += npc.prof; t_hist = true;}
            if (t_surv == false) {npc.surv += npc.prof; t_surv = true;}
            tool = ["cartographer's tools", "navigator's tools"];
            t1 = tool[Math.floor(Math.random() * tool.length)]
            npc.proficiencies.push(t1);
            npc.inventory.push("A wooden case containing a map to a ruin or dungeon, a bullseye lantern, a miner's pick, a set of traveler's clothes, a shovel, a two-person tent, a trinket recovered from a dig site, and a pouch containing 25 gp.");
            break;
        case "Adopted":
            lang = ["Dwarvish", "Elvish", "Giant", "Gnomish", "Goblin", "Halfling", "Orc"];
            lang3 = 'Common';
            lang1 = lang[Math.floor(Math.random() * lang.length)];
            lang2 = lang[Math.floor(Math.random() * lang.length)];
            pTrait.push(
                "I love learning about new things, partially about other races and sub-races work.",
                "I will often change the way my voice sounds just for fun.",
                "I enjoy puzzles and thinking things through.",
                "I can find the most childish things entertaining.",
                "I am always polite, and use my manners.",
                "I often feel lonely, even when many others are nearby.",
                "I sometimes awaken feeling a sense of lingering emotion, from a dream I can never remember.",
                "I always felt out of place, like a swan raised by ducks, or maybe a duck raised by swans..."
            );
            a = pTrait[Math.floor(Math.random() * pTrait.length)];
            flaw.push(
                "I hoard what's mine, and am quite possessive. I find it hard to allow others to touch my things, or even give away/sell an item of mine.",
                "I am aware of how different I am to those around me, making it hard for myself when I try to get close to others.",
                "I am a passive person (I will lose so you can win), I will do almost anything to avoid conflict with others, and will run and hide if people start yelling.",
                "I am an aggressive person (For me to win you have to lose), quick to anger, and will keep pressing until I get my way, or making the other person seem at fault.",
                "Trusting people just isn't my thing. Forget about even becoming friends.",
                "I have a habit of lying about the most insignificant things."
            );
            d = flaw[Math.floor(Math.random() * flaw.length)];
            ideal.push(
                "Amusement: If there isn't any fun in doing something then why do it (chaotic)",
                "Belonging: Everyone should know where they belong (good).",
                "Rule-follower: Regardless as to what you are, everyone should follow the rules (lawful)",
                "Vengeance: For all that happened at my birth, there will be blood to pay (Evil).",
                "Opinions: Everyone is entitled to there own opinions, of course this includes myself (Any).",
                "Whatever: Everyone just does what they want anyway (neutral)."
            );
            b = ideal[Math.floor(Math.random() * ideal.length)];

            bond.push(
                "What happened at my birth, I know it is important somehow.",
                "I must find my birth parents, they have to be out there.",
                "How can I know another, when I don't even know myself?",
                "I'm not just another of my race/sub-race, I will prove my worth.",
                "What does this mean, this [insert item from birth family], I must know.",
                "All I want is to find a place where I belong."
            );
            c = bond[Math.floor(Math.random() * bond.length)];
            if (t_pers == false){npc.pers += npc.prof;}
            t_pers = true;
            if (t_dece == false){npc.dece += npc.prof;}
            t_dece = true;
            if (t_stea == false){npc.stea += npc.prof;}
            t_stea = true;
            npc.proficiencies.push();
            npc.inventory.push('A set of common clothes matching the style worn by your current family, something of a trinket left from your birth parents (cannot be worth more than 5gp) and pouch with 10gp.');
            break;
        case "Black Fist Double Agent":
            lang3 = 'Common';
            pTrait.push(
                "People are only as trustworthy as you are valuable to them. Always strive to be the most valuable person around.",
                "My eloquence and sophistication are tools I use to avoid arousing suspicion myself.",
                "I am a thrill-seeker, excited by covert and dangerous missions.",
                "I live by my wits and always check every lock twice, just to be certain.",
                "I never admit to my mistakes lest they be used against me.",
                "I take every effort to be unnoticeable and blend into the crowd. Passersby rarely give me a second look.",
                "I am prepared for any eventuality; including the day my usefulness as a spy comes to an end.",
                "I always make certain to know my enemy before acting, lest I bite off more than I can chew."
            );
            a = pTrait[Math.floor(Math.random() * pTrait.length)];
            flaw.push(
                "I think too highly of myself, and have an exaggerated sense of self-importance.",
                "I have difficulty trusting strangers. I see spies and informants everywhere.",
                "Years of getting away with minor crimes has left me believing that I am above the law, and have diplomatic immunity above my station.",
                "Years of seeing innocent people suffer have left me despondent and pessimistic for the future.",
                "My desire for vengeance often gets me into trouble.",
                "I am spendthrift, and share my wealth with the patrons of my favorite tavern."
            );
            d = flaw[Math.floor(Math.random() * flaw.length)];
            ideal.push(
                "Suspicious: In my experience, everybody has something to hide, and what they hide can usually hurt me (Any).",
                "Secretive: I trade in secrets, and am not about to let any of mine slip (Any).",
                "Hedonist: Life is short. I live my life to the fullest, as I know any day could be my last (Chaotic).",
                "Selfless: I use my position to help the downtrodden avoid persecution from the authorities (Good).",
                "Patriotic: I am a loyal supporter of Phlan and its leaders, and see my role as a solemn duty and necessary evil to prevent anarchy (Lawful).",
                "Manipulative: I use my knowledge to blackmail and manipulate others to my own benefit (Evil)."
            );
            b = ideal[Math.floor(Math.random() * ideal.length)];
            bond.push(
                "I was framed for a crime I did not commit, and seek to bring the true culprit to justice.",
                "I am a part of an underground network that smuggles innocent civilians out of the city prior to being raided by the authorities.",
                "I miss the glory days of Phlan, before the coming of the dragon.",
                "I seek to prove myself worthy of joining the Black Fist as a member of their order.",
                "My sister was killed by a Tear of Virulence, and now I feed them false information whenever possible.",
                "My family was wrongly imprisoned, and I act as an informant in order to secure their release."
            );
            c = bond[Math.floor(Math.random() * bond.length)];
            if (t_dece == false){npc.dece += npc.prof;}
            t_dece = true;
            if (t_insi == false){npc.insi += npc.prof;}
            t_insi = true;
            t1 = "Disguise kit, " + tool[Math.floor(Math.random() * tool.length)];
            npc.proficiencies.push(t1);
            npc.inventory.push("Disguise kit, common clothes, a Tears of Virulence emblem, a writ of free agency signed by the Lord Regent, a set of artisan's tools or gaming set you are proficient with, and a pouch with 15 gp (payment for services rendered).");
            break;
        case "Caravan Specialist":
            lang = ["Dwarvish", "Elvish", "Giant", "Gnomish", "Goblin", "Halfling", "Orc"];
            lang3 = 'Common';
            lang1 = lang[Math.floor(Math.random() * lang.length)];
            pTrait.push(
                "Any group is only as strong as its weakest link. Everyone has to pull their own weight.",
                "There's always someone out there trying to take what I've got. Always be vigilant.",
                "Anything can be learned if you have the right teacher. Most folks just need a chance.",
                "Early to bed and early to rise; this much at least is under my control.",
                "You can listen to me or don't and wish you had. Everyone ends up on one side of that fence.",
                "Eventually my hard work will be rewarded. Maybe that time has finally come.",
                "A strong ox or horse is more reliable than most people I've met.",
                "I never had time for books, but wish I had. I admire folks who have taken the time to learn."
            );
            a = pTrait[Math.floor(Math.random() * pTrait.length)];
            flaw.push(
                "I have trouble trusting people I've just met.",
                "I enjoy the open road. Underground and tight spaces make me very nervous.",
                "I expect others to heed my orders and have little respect or sympathy if they don't.",
                "I am very prideful and have trouble admitting when I'm wrong.",
                "Once I decide on a course of action, I do not waiver.",
                "I like to explore, and my curiosity will sometimes get me into trouble."
            );
            d = flaw[Math.floor(Math.random() * flaw.length)];
            ideal.push(
                "Service: Using my talents to help others is the best way of helping myself. (Good)",
                "Selfish: What people don't know WILL hurt them, but why is that my problem? (Evil)",
                "Wanderer: I go where the road takes me. Sometimes, that's a good thing... (Chaotic)",
                "Fittest: On the open road, the law of nature wins. Victims are the unprepared. (Lawful)",
                "Focused: I simply have a job to do, and I'm going to do it. (Neutral)",
                "Motivated: There's a reason I'm good at what I do, I pay attention to the details. (Any)"
            );
            b = ideal[Math.floor(Math.random() * ideal.length)];
            bond.push(
                "My brother has a farm in Elmwood and I've helped him and his neighbors move their goods to Mulmaster and other surrounding towns. Those are good people.",
                "A caravan I lead was attacked by bandits and many innocents died. I swear that I will avenge them by killing any bandits I encounter.",
                "The Soldiery are mostly good guys who understand the importance of protecting the roads. The City Watch is who you have to look out for. If they are inspecting your goods, get ready to pay a fine.",
                "The new commander of Southroad Tower, Capt. Holke, understands the importance of safe roads. He's hired me for several jobs and I'm grateful.",
                "There's always a road I haven't traveled before. I'm always looking for new places to explore.",
                "Wealth and power mean little without the freedom to go where and when you want."
            );
            c = bond[Math.floor(Math.random() * bond.length)];
            if (t_anim == false){npc.anim += npc.prof;}
            t_anim = true;
            if (t_surv == false){npc.surv += npc.prof;}
            t_surv = true;
            t1 = "Land Vehicles";
            npc.proficiencies.push(t1);
            npc.inventory.push("A whip, a two-person tent, a regional map, a set of traveler's clothes, and a belt pouch containing 10 gp");
            break;
        case "Charlatan":
            lang3 = 'Common';
            pTrait.push(
                "I fall in and out of love easily, and am always pursuing someone.",
                "I have a joke for every occasion, especially occasions where humor is inappropriate.",
                "Flattery is my preferred trick for getting what I want.",
                "I'm a born gambler who can't resist taking a risk for a potential payoff.",
                "I lie about almost everything, even when there's no good reason to.",
                "Sarcasm and insults are my weapons of choice.",
                "I keep multiple holy symbols on me and invoke whatever deity might come in useful at any given moment.",
                "I pocket anything I see that might have some value."
            );
            a = pTrait[Math.floor(Math.random() * pTrait.length)];
            flaw.push(
                "I can't resist a pretty face.",
                "I'm always in debt. I spend my ill-gotten gains on decadent luxuries faster than I bring them in.",
                "I'm convinced that no one could ever fool me the way I fool others.",
                "I'm too greedy for my own good. I can't resist taking a risk if there's money involved.",
                "I can't resist swindling people who are more powerful than me.",
                "I hate to admit it and will hate myself for it, but I'll run and preserve my own hide if the going gets tough."
            );
            d = flaw[Math.floor(Math.random() * flaw.length)];
            ideal.push(
                "Independence. I am a free spirit , no one tells me what to do. (Chaotic)",
                "Fairness. I never target people who can't afford to lose a few coins. (Lawful)",
                "Charity. I distribute the money I acquire to the people who really need it. (Good)",
                "Creativity. I never run the same con twice. (Chaotic)",
                "Friendship. Material goods come and go. Bonds of friendship last forever. (Good)",
                "Aspiration. I'm determined to make something of myself. (Any)"
            );
            b = ideal[Math.floor(Math.random() * ideal.length)];
            bond.push(
                "I fleeced the wrong person and must work to ensure that this individual never crosses paths with me or those I care about.",
                "I owe everything to my mentor , a horrible person who's probably rotting in jail somewhere.",
                "Somewhere out there, I have a child who doesn't know me. I'm making the world better for him or her.",
                "I come from a noble family, and one day I'll reclaim my lands and title from those who stole them from me.",
                "A powerful person killed someone I love. Some day soon, I'll have my revenge.",
                "I swindled and ruined a person who didn't deserve it. I seek to atone for my misdeeds but might never be able to forgive myself."
            );
            c = bond[Math.floor(Math.random() * bond.length)];
            if (t_dece == false){npc.dece += npc.prof;}
            t_dece = true;
            if (t_slei == false){npc.slei += npc.prof;}
            t_slei = true;
            t1 = 'Disguise kit, Forgery kit';
            npc.proficiencies.push(t1);
            npc.inventory.push('A set of fine clothes, a disguise kit, tools of the con of your choice (ten stoppered bottles filled with colored liquid, a set of weighted dice, a deck of marked cards, or a signet ring of an imaginary duke), and also a belt pouch which is containing 15 gp.');
            break;
        case "City Watch":
            lang = ["Dwarvish", "Elvish", "Giant", "Gnomish", "Goblin", "Halfling", "Orc"];
            lang3 = 'Common';
            lang1 = lang[Math.floor(Math.random() * lang.length)];
            lang2 = lang[Math.floor(Math.random() * lang.length)];
            pTrait.push(
                "I am always polite and respectful.",
                "I am haunted by memories of war. i can't get the images of violence out of my mind.",
                "I have lost too many friends and i am slow to make a new one.",
                "I am full of inspiring and cautionary tales from my military experience which is relevant to almost every combat situation.",
                "I can stare down a hell hound without flinching.",
                "I enjoy being strong and i like breaking things.",
                "I have a crude sense of humor.",
                "I face problems head-on. A simple, direct solution is the best path to success."
            );
            a = pTrait[Math.floor(Math.random() * pTrait.length)];
            flaw.push(
                "The monstrous enemy which we faced in battle still leaves me quivering with fear.",
                "I have little respect for anyone who is not a proven warrior.",
                "I made a terrible mistake in battle that cost many lives and I would do anything to keep that mistake secret.",
                "My hatred of my enemies is blind and unreasoning.",
                "I obey the law, even if the law causes misery.",
                "I'd rather eat my armor than admit when I'm wrong."
            );
            d = flaw[Math.floor(Math.random() * flaw.length)];
            ideal.push(
                "Greater Good. Our lot is to lay down our lives in defense of others. (Good)",
                "Responsibility. I do what I must and obey just authority. (Lawful)",
                "Independence. When people follow orders blindly, they embrace a kind of tyranny. (Chaotic)",
                "Might. In life as in war, the stronger force wins. (Evil)",
                "Live and Let Live. Ideals aren't worth killing over or going to war for. (Neutral)",
                "Nation. My city, nation, or people are all that matter. (Any)"
            );
            b = ideal[Math.floor(Math.random() * ideal.length)];
            bond.push(
                "I would still lay down my life for the people I served with.",
                "Someone saved my life on the battlefield. To this day, I will never leave a friend behind.",
                "My honor is my life.",
                "I'll never forget the crushing defeat my company suffered or the enemies who dealt it.",
                "Those who fight beside me are those worth dying for.",
                "I fight for those who cannot fight for themselves."
            );
            c = bond[Math.floor(Math.random() * bond.length)];
            if (t_athl == false){npc.athl += npc.prof;}
            t_athl = true;
            if (t_insi == false){npc.insi += npc.prof;}
            t_insi = true;
            npc.proficiencies.push();
            npc.inventory.push('A uniform in the style of your unit and indicative of your rank, a horn with which to summon help, a set of manacles, and a pouch containing 10 gp.');
            break;
        case "Clan Crafter":
            lang = ["Dwarvish", "Elvish", "Giant", "Gnomish", "Goblin", "Halfling", "Orc"];
            lang3 = 'Common';
            lang1 = lang[Math.floor(Math.random() * lang.length)];
            pTrait.push(
                "It's not pompous and boastful if it is true.",
                "I'm a snob who looks down on those who can't appreciate the art.",
                "I always want to know how things work and what makes people tick.",
                "I'm full of witty aphorisms and have a proverb for every occasion.",
                "I'm rude to people who lack my commitment to hard work and fair play.",
                "I like to talk at length about my profession.",
                "I don't part with my money easily and will haggle tirelessly to get the best deal possible.",
                "I'm well known for my work, and I want to make sure everyone appreciates it. I'm always taken aback when people haven't heard of me.",
                "Whittling is how I spend much of my time.",
                "My friends know they can rely on me, no matter what.",
                "I'm always polite and respectful.",
                "I'll settle for nothing less than perfection.",
                "I know that if I present myself in the latest fashions and present myself as a modern avant garde personality, people will take my artisnaship seriously",
                "I often use large, important sounding words when speaking, even if I don't always know what the words actually mean.",
                "I try to infuse my actions with a theatrical flourish, but will never admit that my showmanship is anything but genuine.",
                "As I speak, I can't help but vary my inflections dramatically and gesture wildly.",
                "I speak mostly in cryptic phrases.",
                "I am awkward and uncomfortable around people I am attracted to.",
                "I am always calm, no matter what the situation. I never raise my voice or let my emotions control me.",
                "I are prone to telling stories of my past crafting achievements, even to people who have heard the same stories many times before."
            );
            a = pTrait[Math.floor(Math.random() * pTrait.length)];
            flaw.push(
                "I'11 do anything to get my hands on something rareor priceless.",
                "I'm quick to assume that someone Is trying to cheat me.",
                "No one must ever learn that I once stole money from clan coffers.",
                "I'm never satisfied with what I have I always want more.",
                "I would kill to acquire a noble title.",
                "I'm horribly jealous of anyone who can outshine my handiwork. Everywhere I go, I'm surrounded by rivals.",
                "Once I pick a goal, I become obsessed with it to the detriment of everything else in my life.",
                "I hold to tradition at the expense of adaptability.",
                "I over-plan every endeavor.",
                "I have a weakness for the vices of the city, especially hard drink",
                "I have little respect for anyone outside the realm of crafting.",
                "I have a tendency to be unintentionally insulting or boastful."
            );
            d = flaw[Math.floor(Math.random() * flaw.length)];
            ideal.push(
                "Community: It is the duty of all civilized people to strengthen the bonds of community and the security of civilization. (Lawful)",
                "Generosity: My talents were given to me so that I could use them to benefit the clan. (Good)",
                "Freedom: Everyone should be free to pursue his or her own livelihood. (Chaotic)",
                "Greed: I'm only in it for the money. (Evil)",
                "People: I'm committed to the preserve dwarven traditions of craftsmanship. (Neutral)",
                "Aspiration: I work hard to be the best there is at my craft. (Any)",
                "Greater Good: My gifts are meant to be shared with all, not used for my own benefit. (Good)",
                "Art: Through the eyes and hand of an artist the beauty of even a mundane object can be shown. (Neutral)",
                "Calm: I am content when I'm am working on something. (Any)",
                "Tradition: The ancient traditions of my craft must be preserved and upheld. (Lawful)",
                "Creativity.The world is in need of new ideas and bold action. (Chaotic)",
                "Greed: I do what I do for riches and fame, not some high-minded ideals. (Evil)"
            );
            b = ideal[Math.floor(Math.random() * ideal.length)];
            bond.push(
                "The workshop where I learned my trade is the most important place in the world to me.",
                "I created a great work for someone, and then found them unworthy to receive it. I'm still looking for someone worthy.",
                "One day I will return to my clan and prove that I am the greatest artisan of them all.",
                "I owe my clan a great debt for forging me into the person I am today.",
                "I pursue wealth to secure someone's love.",
                "I will get revenge on the evil forces that destroyed my place of business and ruined my livelihood.",
                "Nothing is more important than the other members of my clan.",
                "My tools are symbols of my past life, and I carry them so that I will never forget my roots.",
                "I have alienated many in my tireless pursuit of my craft.",
                "One of my companions is my sibling or relative who's looking out for me.",
                "My single most important piece of equipment? My tools of course, they have been passed down fromprior generations.",
                "I'm loyal to my mentor first, everything else second."
            );
            c = bond[Math.floor(Math.random() * bond.length)];
            if (t_hist == false){npc.hist += npc.prof;}
            t_hist = true;
            if (t_insi == false){npc.insi += npc.prof;}
            t_insi = true;
            t1 = tool[Math.floor(Math.random() * tool.length)];
            npc.proficiencies.push(t1);
            npc.inventory.push("A set of artisan's tools with which you are proficient, a maker's mark chisel used to mark your handiwork with the symbol of the clan of crafters you learned your skill from, a set of traveler's clothes, and a pouch containing 5 gp and a gem worth 10 gp");
            break;
        case "Cloistered Scholar":
            lang = ["Dwarvish", "Elvish", "Giant", "Gnomish", "Goblin", "Halfling", "Orc"];
            lang3 = 'Common';
            lang1 = lang[Math.floor(Math.random() * lang.length)];
            lang2 = lang[Math.floor(Math.random() * lang.length)];
            pTrait.push(
                "I use polysyllabic words that convey the impression of great erudition.",
                "I've read every book in the world's greatest libraries , or I like to boast that I have.",
                "I'm used to helping out those who aren't as smart as I am, and I patiently explain anything and everything to others.",
                "There's nothing I like more than a good mystery.",
                "I'm willing to listen to every side of an argument before I make my own judgment.",
                "I... speak... slowly... when talking... to idiots,... which... almost... everyone... is... compared... to me.",
                "I am horribly, horribly awkward in social situations.",
                "I'm convinced that people are always trying to steal my secrets."
            );
            a = pTrait[Math.floor(Math.random() * pTrait.length)];
            flaw.push(
                "I am easily distracted by the promise of information.",
                "Most people scream and run when they see a demon. I stop and take notes on its anatomy.",
                "Unlocking an ancient mystery is worth the price of a civilization.",
                "I overlook obvious solutions in favor of complicated ones.",
                "I speak without really thinking through my words, invariably insulting others.",
                "I can't keep a secret to save my life, or anyone else's."
            );
            d = flaw[Math.floor(Math.random() * flaw.length)];
            ideal.push(
                "Knowledge: The path to power and self-improvement is through knowledge. (Neutral)",
                "Beauty: What is beautiful points us beyond itself toward what is true. (Good)",
                "Logic: Emotions must not cloud our logical thinking. (Lawful)",
                "No Limits: Nothing should fetter the infinite possibility inherent in all existence. (Chaotic)",
                "Power: Knowledge is the path to power and domination. (Evil)",
                "Self-Improvement: The goal of a life of study is the betterment of oneself. (Any)"
            );
            b = ideal[Math.floor(Math.random() * ideal.length)];
            bond.push(
                "It is my duty to protect my students.",
                "I have an ancient text that holds terrible secrets that must not fall into the wrong hands.",
                "I work to preserve a library, university, scriptorium, or monastery.",
                "My life's work is a series of tomes related to a specific field of lore.",
                "I've been searching my whole life for the answer to a certain question.",
                "I sold my soul for knowledge. I hope to do great deeds and win it back."
            );
            c = bond[Math.floor(Math.random() * bond.length)];
            if (t_hist == false){npc.hist += npc.prof;}
            t_hist = true;
            ranStat.push('arca', 'natu', 'reli');
            rs1 = ranStat[Math.floor(Math.random() * ranStat.length)];
            if (rs1 == 'arca') {npc.arca += npc.prof;}
            if (rs1 == 'natu') {npc.natu += npc.prof;}
            if (rs1 == 'reli') {npc.reli += npc.prof;}
            npc.proficiencies.push();
            npc.inventory.push("The scholar's robes of your cloister, a writing kit (small pouch with a quill, ink, folded parchment, and a small penknife), a borrowed book on the subject of your current study, and a pouch containing 10 gp.");
            break;
        case "Cormanthor Refugee":
            lang3 = 'Common';
            lang1 = 'Elvish';

            pTrait.push(
                "I long for a home that never really existed,whether in the camps, Hillsfar, or Myth Drannor.",
                "Though I am not an elf, I am a fervent, radical worshipper of the elven gods.",
                "I live in the moment, knowing my life could be turned upside down any day.",
                "I appreciate beauty in all of its forms.",
                "I hate the dark elves and the Netherese for each driving the elves out of Cormanthyr in the past.",
                "I am a forest bumpkin who grew up in a tent in the woods and is wholly ignorant of city life.",
                "I was raised alongside children of many other races. I harbor no racial prejudices at all.",
                "The elves have just the right word for so many things that cannot be expressed as well in other languages. I pepper my speech with elven words, phrases, and sayings.");
            a = pTrait[Math.floor(Math.random() * pTrait.length)];
            flaw.push(
                "I am very uncomfortable indoors and underground.",
                "I am haughty. I grew up among the elves and emulate them. Other races are crude in comparison.",
                "Elf this, elf that. I am sick and tired of the elves.",
                "I am a miser. Having lost everything once before, I clutch my possessions and wealth very tightly.",
                "I am a moocher. I am so used to others providing for me that I have come to expect everyone to do it.",
                "I believe the gods have cursed me, my family, and all of the Cormanthor refugees. We are all doomed, doomed I tell you!"
            );
            d = flaw[Math.floor(Math.random() * flaw.length)];
            ideal.push(
                "Patient: The elves have taught me to think and plan for the long-term. (Lawful)",
                "Rebellious: Governments and politicians drove my family to the camps. I subtly defy authority whenever I think I can get away with it. (Chaotic)",
                "Self-Absorbed: I've had to look out for number one so long that it has become second nature. (Any)",
                "Wanderlust: I want to see as much of the world beyond the camps as I can. (Any)",
                "Generous: I give everything I can to help those in need, regardless of who they are. (Good)",
                "To the Abyss with Them: The people of Hillsfar cast me out. I won't risk my hide to help them. (Evil)"
            );
            b = ideal[Math.floor(Math.random() * ideal.length)];
            bond.push(
                "The elves took me in when I had nowhere else to go. In return, I do what I can to help elves in need.",
                "I seek revenge against the people of Hillsfar for driving my family into the forest.",
                "My family lost everything when they were driven from Hillsfar. I strive to rebuild that fortune.",
                "The forest has provided me with food and shelter. In return, I protect forests and those who dwell within.",
                "I am deeply, tragically in love with someone whose racial lifespan is far longer or shorter than mine.",
                "Members of my extended family did not make it to the camps or have been kidnapped to fight in the Arena. I search for them tirelessly."
            );
            c = bond[Math.floor(Math.random() * bond.length)];
            if (t_natu == false){npc.natu += npc.prof;}
            t_natu = true;
            if (t_surv == false){npc.surv += npc.prof;}
            t_surv = true;
            t1 = tool[Math.floor(Math.random() * tool.length)];
            npc.proficiencies.push(t1);
            npc.inventory.push("A two-person tent, artisan's tools, a holy symbol, a set of traveler's clothes, a belt pouch, 5 gp");
            break;
        case "Courtier":
            lang = ["Dwarvish", "Elvish", "Giant", "Gnomish", "Goblin", "Halfling", "Orc"];
            lang3 = 'Common';
            lang1 = lang[Math.floor(Math.random() * lang.length)];
            lang2 = lang[Math.floor(Math.random() * lang.length)];
            pTrait.push(
                "I am a snob who looks down on those who can not appreciate fine art.",
                "I believe that everything worth doing is worth doing right. i can not help for it. Iam the perfectionist.",
                "I am cold and calculating in my each and every word and also the action, when when furious or frightened.",
                "I like to talk at the length about my profession.",
                "I always want to know how the things work and also what makes people tick.",
                "I am full of witty aphorisms and also have a proverb the every occasion.",
                "I am very good at waiting. Patience is a virtue which i have conquered.",
                "i'm well known or my work, also i want to make sure everyone appreciates it. I am always taken aback when people haven't heard of me.",
                "I'm well known for my work and i would like to make sure everyone appreciates it. I am always taken aback when people haven't heard of me.",
                "i don't part with with the money of mine easily and will haggle tirelessly to get the best deal possible.",
                "I'm rude to people who lack my commitment to hard work and fair play.",
                "It's not pompous and boastful if it is true.",
                "I've met many interesting people in my day, seen many amazing things, and i enjoy regaling others with the tales.",
                "My mustache is a thing of beauty and perfection. Keeping it groomed is time well spent.",
                "When there is not much going on, i would like to eat. My gut would indicate, maybe i like it a bit too much.",
                "There's no point to going to out if you're not having fun. Other people never seem to appreciate my jokes as much as i do."
            );
            a = pTrait[Math.floor(Math.random() * pTrait.length)];
            flaw.push(
                "I too often hear veiled insults and threats in every word addressed to me, and i'm quick to anger.",
                "I'm quick to assume that someone is trying to cheat me.",
                "I'm never satisfied with what i have-i always want more.",
                "I would kill to acquire a noble title.",
                "I secretly believe that everyone is beneath me.",
                "I will do anything to get my hands on something rare or priceless.",
                "No one must ever learn that i once stole money from the court coffers.",
                "I am horribly jealous of anyone who outshines my handwork. Everywhere i go, i am surrounded by rivals.",
                "I hold my own wisdom above that of others.",
                "I think i am better than other court functionaries, and also other people in general.",
                "I have little respect for anyone out side the realm of the court or organization.",
                "I sometimes overestimate my abilities due to years of being sheltered in the court or the organization."
            );
            d = flaw[Math.floor(Math.random() * flaw.length)];
            ideal.push(
                "Community: It is the duty of all civilized people to strengthen the bonds of community and also the security of civilization. (Lawful)",
                "Aspiration: I work hard to be the best there is at my profession. (Any)",
                "Generosity: My talents were given to me so that i could use them to benefit the world. (Good)",
                "People: I'm committed to the people i serve, not to ideals. (Neutral)",
                "Aspiration: I'm determined to make something of myself. (Any)",
                "Creativity: The world is in need of new ideas and bold action. (Chaotic)",
                "Order: Understanding comes from strict systematic procedures. (Lawful)",
                "Greed: I'm only in it for the money. (Evil)",
                "The Game: The game of court or the organization is all that matters, one must advance within this game. Winning or playing the game is what matters (Neutral).",
                "Culture: Learning About others reveals important qualities in us. (Good)"
            );
            b = ideal[Math.floor(Math.random() * ideal.length)];
            bond.push(
                "I did great work for someone, and then found them unworthy to receive it. I'm still looking for someone worthy of my service.",
                "The court i worked in was utterly corrupt, i am sworn to oppose them an cleanup corruption.",
                "I owe my court life a great debt for forging me into the person i am today.",
                "One day i will return to my court and prove that i am the greatest functionary of them all.",
                "My loyalty to my sovereign is unwavering.",
                "I am a loyal servant of my king and country.",
                "I hold no greater cause than my service to my people.",
                "I pursue wealth to secure someone's love.",
                "I owe everything to my mentor-a wonderful person who was taken from this life early.",
                "The court or organization where i learned my trade is the most important place in the world to me.",
                "I'm loyal to my liege or the lord first, everything and everyone else is second.",
                "I will face any challenge to win the approval of my court or the organization.",
                "Nothing is more important than the other members of my clan.",
                "My tools are symbols of my past life, and I carry them so that I will never forget my roots.",
                "I have alienated many in my tireless pursuit of my craft.",
                "One of my companions is my sibling or relative who's looking out for me.",
                "My single most important piece of equipment? My tools of course, they have been passed down fromprior generations.",
                "I'm loyal to my mentor first, everything else second."
            );
            c = bond[Math.floor(Math.random() * bond.length)];
            if (t_insi == false){npc.insi += npc.prof;}
            t_insi = true;
            if (t_pers == false){npc.pers += npc.prof;}
            t_pers = true;
            npc.proficiencies.push();
            npc.inventory.push('A set of fine clothes, Identification Papers with a portrait and a pouch containing 20 gp');

            break;
        case "Criminal":
            lang3 = 'Common';
            lang1 = 'Thieves cant'
            pTrait.push(
                "I always have a plan for what to do when things go wrong.",
                "I am always calm, no matter what the situation. I never raise my voice or let my emotions control me.",
                "The first thing I do in a new place is note the locations of everything valuable-or where such things could be hidden.",
                "I would rather make a new friend than a new enemy.",
                "I am incredibly slow to trust. Those who seem the fairest often have the most to hide.",
                "I don't pay attention to the risks in a situation. Never tell me the odds.",
                "The best way to get me to do something is to tell me I can't do it.",
                "I blow up at the slightest insult."
            );
            a = pTrait[Math.floor(Math.random() * pTrait.length)];
            flaw.push(
                "When I see something valuable, I can't think about anything but how to steal it.",
                "When faced with a choice between money and my friends, I usually choose the money.",
                "If there's a plan, I'll forget it. If I don't forget it, I'll ignore it.",
                "I have a tell that reveals when I'm lying.",
                "I turn tail and run when things look bad.",
                "An innocent person is in prison for a crime that I committed. I'm okay with that."
            );
            d = flaw[Math.floor(Math.random() * flaw.length)];
            ideal.push(
                "Honor: I don't steal from others in the trade. (Lawful)",
                "Freedom: Chains are meant to be broken, as are those who would forge them. (Chaotic)",
                "Charity: I steal from the wealthy so that I can help people in need. (Good)",
                "Greed: I will do whatever it takes to become wealthy. (Evil)",
                "People: I'm loyal to my friends, not to any ideals, and everyone else can take a trip down the Styx for all I care. (Neutral)",
                "Redemption: There's a spark of good in everyone. (Good)"
            );
            b = ideal[Math.floor(Math.random() * ideal.length)];
            bond.push(
                "I'm trying to pay off an old debt I owe to a generous benefactor.",
                "My ill-gotten gains go to support my family.",
                "Something important was taken from me, and I aim to steal it back.",
                "I will become the greatest thief that ever lived.",
                "I'm guilty of a terrible crime. I hope I can redeem myself for it.",
                "Someone I loved died because of a mistake I made. That will never happen again."
            );
            c = bond[Math.floor(Math.random() * bond.length)];
            if (t_dece == false){npc.dece += npc.prof;}
            t_dece = true;
            if (t_stea == false){npc.stea += npc.prof;}
            t_stea = true;
            t1 = "Gaming set, Thieves' tools";
            npc.proficiencies.push(t1);
            npc.inventory.push('A crowbar, a set of dark common clothes including a hood, and a belt pouch containing 15 GP');
            break;
        case "Dragon Casualty":
            lang3 = 'Common';
            lang1 = 'Draconic';

            pTrait.push(
                "I am driven to escape my past, and rarely stay in one place long.",
                "I know secrets of the Maimed Virulence, but fear the harm that may befall me should others learn them.",
                "Speaking of my ordeal helps sooth the still open wounds in my soul.",
                "My former life is meaningless, and was ripped to shreds by the claws of Vorgansharax. All that matters now is what I do with the future.",
                "I have faced the worst a dragon can deliver and survived. I am fearless, and my resolve unshakable.",
                "I am haunted by my tortured past, and wake at night screaming at half-remembered horrors.",
                "I sleep with my back to a wall or tree, and a weapon within arm's reach.",
                "I am slow to trust, but incredibly loyal to those who have earned it."
            );
            a = pTrait[Math.floor(Math.random() * pTrait.length)];
            flaw.push(
                "I have been touched with dragon-greed, and have a lust for wealth which can never be satisfied.",
                "I secretly believe others are plotting to harm me.",
                "I no longer enjoy the simple pleasures in life. Food is but ashes and bile in my throat.",
                "Anyone who refuses to celebrate my celebrity does not deserve my company.",
                "I am paranoid and overly suspicious of others. Anyone may be an agent of the Maimed Virulence.",
                "Once I make up my mind, I follow my chosen course of action regardless of the consequences."
            );
            d = flaw[Math.floor(Math.random() * flaw.length)];
            ideal.push(
                "Survivor: No matter the cost, I will take any action necessary to survive. (Any)",
                "Independence: When in trouble, the only person I can rely on is myself. (Chaotic)",
                "Compassionate: I have suffered long at the hands of a Dragon, and take pity and compassion on the suffering of others. (Good)",
                "Secretive: I am withdrawn, and hide my monstrous appearance for fear of drawing unwanted attention. (Chaotic)",
                "Justice: I have been wronged, and will not allow the same fate to befall others. (Lawful)",
                "Sycophant: During my ordeal, I became a willing servant of the Maimed Virulence, and spy on his behalf. (Evil)"
            );
            b = ideal[Math.floor(Math.random() * ideal.length)];
            bond.push(
                "I have sworn vengeance on the Maimed Virulence and those that follow him.",
                "I long to reunite with friends and family who may dwell among the Phlan Refugees, and protect them.",
                "While a prisoner of the Maimed Virulence, I overheard rumors of an item or treasure the Dragon seeks. I will have that treasure for myself!",
                "I seek to reclaim and rebuild my former life to the best of my ability.",
                "I have been reborn as a child of Vorgansharax. I will claim my birthright as his chosen heir and successor.",
                "I attribute my survival to the work of the divine, and seek to prove myself worthy of the honor."
            );
            c = bond[Math.floor(Math.random() * bond.length)];
            if (t_inti == false){npc.inti += npc.prof;}
            t_inti = true;
            if (t_surv == false){npc.surv += npc.prof;}
            t_surv = true;
            npc.proficiencies.push();
            npc.inventory.push('A dagger, tattered rags, a loaf of moldy bread, a small cast-off scale belonging to Vorgansharax — the Maimed Virulence, and a pouch with 5 gp of various coins (salvaged during your escape from Phlan).');
            break;
        case "Earthspur Miner":
            lang = ["Dwarvish", "Elvish", "Giant", "Gnomish", "Goblin", "Halfling", "Orc"];
            lang3 = 'Common';
            lang1 = "Dwarvish";
            lang2 = 'Undercommon';
            pTrait.push(
                "Nothing bothers me for long.",
                "I hate the horrors of the Underdark with a passion. They took my friends and family and almost got me.",
                "Anything worth doing takes time and patience. I have learned to plan and wait for the things I want and to be patient to achieve my goals.",
                "I can party with everyone. Whether with dwarves, or goliaths, or deep gnomes, I can find a way to have a good time.",
                "I'd rather be mining. This is okay; mining is better.",
                "I think that I will stumble upon great riches if I just keep looking.",
                "People who don't work with their hands and who live in houses are soft and weak.",
                "I wish I were more educated. I look up to people who are."
            );
            a = pTrait[Math.floor(Math.random() * pTrait.length)];
            flaw.push(
                "I'm uncomfortable spending time under the open sky. I'd rather be indoors or underground.",
                "I'm not used to being around other people much and sometimes get grouchy about it.",
                "Good tools are more reliable than people. In a cave in, I would save a sturdy pick before a stranger.",
                "I jealously guard my secrets, because I think others will take advantage of me if they learn what I know.",
                "I am obsessed with getting rich. I always have a scheme brewing for making it big.",
                "I'm afraid of the dark."
            );
            d = flaw[Math.floor(Math.random() * flaw.length)];
            ideal.push(
                "Generosity: The riches of the earth are to be shared by all. (Good)",
                "Greed: Gems and precious metals, I want them all for myself. (Evil)",
                "Mooch: Property, schmoperty. If I need it, I take and use it. If I don't, I leave it for someone else. (Chaotic)",
                "Boundaries: Everything and everyone has its prescribed place; I respect that and expect others to do the same. (Lawful)",
                "Let it Be: I don't meddle in the affairs of others if I can avoid it. They're none of my business. (Neutral)",
                "Materialist: I want riches to improve my life. (Any)"
            );
            b = ideal[Math.floor(Math.random() * ideal.length)];
            bond.push(
                "The people of the Earthspur mines are my family. I will do anything to protect them.",
                "A deep gnome saved my life when I was injured and alone. I owe his people a great debt.",
                "I must behold and preserve the natural beauty of places below the earth.",
                "Gems hold a special fascination for me, more than gold, land, magic, or power.",
                "I want to explore new depths and scale new heights.",
                "Someday I'm going to find the mother lode, then I'll spend the rest of my life in luxury."
            );
            c = bond[Math.floor(Math.random() * bond.length)];
            if (t_athl == false){npc.athl += npc.prof;}
            t_athl = true;
            if (t_surv == false){npc.surv += npc.prof;}
            t_surv = true;
            npc.proficiencies.push();
            npc.inventory.push("A shovel or a miner's pick, a block and tackle, a 5e climber's kit, a set of common clothes, and a belt pouch containing 5 gp");
            break;
        case "Entertainer":
            lang3 = 'Common'
            pTrait.push(
                "I know a story relevant to almost every situation.",
                "Whenever I come to a new place, I collect local rumors and spread gossip.",
                "I'm a hopeless romantic, always searching for that 'special someone.'",
                "Nobody stays angry at me or around me for long, since I can defuse any amount of tension.",
                "I love a good insult, even one directed at me.",
                "I get bitter if I'm not the center of attention.",
                "I'll settle for nothing less than perfection.",
                "I change my mood or my mind as quickly as I change key in a song."
            );
            a = pTrait[Math.floor(Math.random() * pTrait.length)];
            flaw.push(
                "I'll do anything to win fame and renown.",
                "I'm a sucker for a pretty face.",
                "A scandal prevents me from ever going home again. That kind of trouble seems to follow me around.",
                "I once satirized a noble who still wants my head. It was a mistake that I will likely repeat.",
                "I have trouble keeping my true feelings hidden. My sharp tongue lands me in trouble.",
                "Despite my best efforts, I am unreliable to my friends."
            );
            d = flaw[Math.floor(Math.random() * flaw.length)];
            ideal.push(
                "Beauty. When I perform, I make the world better than it was. (Good)",
                "Tradition. The stories, legends, and songs of the past must never be forgotten, for they teach us who we are. (Lawful)",
                "Creativity. The world is in need of new ideas and bold action. (Chaotic)",
                "Greed. I'm only in it for the money and fame. (Evil)",
                "People. I like seeing the smiles on people's faces when I perform. That's all that matters. (Neutral)",
                "Honesty. Art should reflect the soul; it should come from within and reveal who we really are. (Any)"
            );
            b = ideal[Math.floor(Math.random() * ideal.length)];
            bond.push(
                "My instrument is my most treasured possession, and it reminds me of someone I love.",
                "Someone stole my precious instrument, and someday I'll get it back.",
                "I want to be famous, whatever it takes.",
                "I idolize a hero of the old tales and measure my deeds against that person's.",
                "I will do anything to prove myself superior to my hated rival.",
                "I would do anything for the other members of my old troupe."
            );
            c = bond[Math.floor(Math.random() * bond.length)];
            if (t_acro == false){npc.acro += npc.prof;}
            t_acro = true;
            if (t_perf == false){npc.perf += npc.prof;}
            t_perf = true;
            t1 = "Disguise kit";
            npc.proficiencies.push(t1);
            npc.inventory.push(instrument[Math.floor(Math.random() * instrument.length)] + ' , The favor of an admirer (Love Letter, lock of hair, or the trinket), the belt pouch which is containing 15 gp, a costume.');
            break;
        case "Faction Agent":
            lang = ["Dwarvish", "Elvish", "Giant", "Gnomish", "Goblin", "Halfling", "Orc"];
            lang3 = 'Common';
            lang1 = lang[Math.floor(Math.random() * lang.length)];
            lang2 = lang[Math.floor(Math.random() * lang.length)];
            pTrait.push(
                "I idolize a particular hero from my faction, and constantly refer to that person's deeds and example.",
                "I can find common ground between the fiercest enemies; I empathize with them to work towards peace.",
                "I believe if everyone shared the beliefs of my faction the world would be a better place.",
                "Nothing can shake my optimistic attitude.",
                "I quote (or misquote) faction beliefs in almost every situation.",
                "I am tolerant (or intolerant) of other factions and respect (or condemn) the ideals of other organizations.",
                "I've been on missions alongside faction leaders. Being in the company of Initiates is exhausting.",
                "I've spent so long at headquarters that I have little practical experience dealing with people who lack faction training."
            );
            a = pTrait[Math.floor(Math.random() * pTrait.length)];
            flaw.push(
                "I judge others harshly, and myself even more severely.",
                "I put too much trust in those who wield power within my factions rank, especially the Leaders.",
                "My conviction sometimes leads me to blindly trust those that support and praise my faction.",
                "I am inflexible in my thinking.",
                "I am suspicious of strangers and expect the worst of them.",
                "Once I pick a goal, I become obsessed with it to the detriment of everything else in my life."
            );
            d = flaw[Math.floor(Math.random() * flaw.length)];
            ideal.push(
                "Tradition. The principles of my faction must be preserved and upheld. (Lawful)",
                "Charity. I always try to help those in need, no matter what the personal cost. (Good)",
                "Change. We must help bring about the changes our faction is striving towards so that we can change the world. (Chaotic)",
                "Power. I strive to one day rise to the top of my faction's rank. (Lawful)",
                "Faith. I trust that my faction will aid me in times of need. If I work hard, things will go well. (Lawful)",
                "Aspiration. I seek to prove myself a capable member of my faction by mirroring my actions to faction ideals. (Any)"
            );
            b = ideal[Math.floor(Math.random() * ideal.length)];
            bond.push(
                "I would die to recover influential relics that would aid my faction towards our goals.",
                "I will someday get revenge on the corrupt faction Mentor who branded me a traitor.",
                "I owe my life to a faction Stalwart who took me in when my parents died.",
                "Everything I do is for the common people.",
                "I will do anything to protect the faction I represent.",
                "I seek to clear the name of an undercover agent who has been wrongfully declared a turncoat."
            );
            c = bond[Math.floor(Math.random() * bond.length)];
            if (t_insi == false){npc.insi += npc.prof;}
            t_insi = true;
            npc.proficiencies.push();
            npc.inventory.push('a pouch containing 15 gp, a copy of a seminal faction text (or a code-book for a covert faction), a set of common clothes and Badge or emblem of your faction.');
            break;
        case "Far Traveler":
            lang = ["Dwarvish", "Elvish", "Giant", "Gnomish", "Goblin", "Halfling", "Orc"];
            lang3 = 'Common';
            lang1 = lang[Math.floor(Math.random() * lang.length)];
            pTrait.push(
                "I have various assumptions from those who around me concerning personal space.",
                "I have myself my own ideas on what is and what is not food, i find the habits of eating of those around me fascinating, confusing, or revolting.",
                "I have a strong code of honor or sense of propriety that others don't comprehend.",
                "I express affection or contempt in ways that are unfamiliar to others.",
                "I honor my deities through practices that are foreign to this land .",
                "I begin or end my day with small traditional rituals that are unfamiliar to those around me."
            );
            a = pTrait[Math.floor(Math.random() * pTrait.length)];
            flaw.push(
                "I am secretly (or not so secretly) convinced of the superiority of my own culture over that of this foreign land.",
                "I pretend not to understand the local language in order to avoid interactions I would rather not have.",
                "I have a weakness for the new intoxicants and other pleasures of this land.",
                "I don't take kindly to some actions and motivations of the people of this land, because these folk are different from me.",
                "I consider the adherents of other gods to be deluded innocents at best, or ignorant fools at worst.",
                "I have a weakness for the exotic beauty of the people of these lands."
            );
            d = flaw[Math.floor(Math.random() * flaw.length)];
            ideal.push(
                "Open. I have much to learn from the kindly folk I meet along my way. (Good)",
                "Reserved. As someone new to these strange lands, I am cautious and respectful in my dealings. (Lawful)",
                "Adventure. I'm far from home, and everything is strange and wonderful! (Chaotic)",
                "Cunning. Though I may not know their ways, neither do they know mine, which can be to my advantage. (Evil)",
                "Inquisitive. Everything is new, but I have a thirst to learn. (Neutral)",
                "Suspicious. I must be careful, for I have no way of telling friend from foe here. (Any)"
            );
            b = ideal[Math.floor(Math.random() * ideal.length)];
            bond.push(
                "So long as I have this token from my homeland, I can face any adversity in this strange land.",
                "The gods of my people are a comfort to me so far from home.",
                "I hold no greater cause than my service to my people.",
                "My freedom is my most precious possession. I'll never let anyone take it from me again.",
                "I'm fascinated by the beauty and wonder of this new land.",
                "Though I had no choice, I lament having to leave my loved one(s) behind. I hope to see them again one day."
            );
            c = bond[Math.floor(Math.random() * bond.length)];
            if (t_insi == false){npc.insi += npc.prof;}
            t_insi = true;
            if (t_perc == false){npc.perc += npc.prof;}
            t_perc = true;
            tool = ['I', 'G'];
            t1 = tool[Math.floor(Math.random() * tool.length)];
            if (t1 == 'I') {
                t1 = instrument[Math.floor(Math.random() * instrument.length)]
            } else {
                t1 = 'Gaming set';
            }
            npc.proficiencies.push(t1);
            npc.inventory.push("One set of traveler's clothes, poorly wrought maps from your homeland that depict where you are in Faerun, any one musical instrument or gaming set you are proficient with, a pouch containing 5 gp, a small piece of jewelry worth 10 gp in the style of your homeland's craftsmanship");
            break;
        case "Folk Hero":
            lang3 = 'Common';
            pTrait.push(
                "I do judge people by their actions, not their words.",
                "If someone is in trouble, I'm always ready to lend help.",
                "When I set my mind to something, I follow through no matter what gets in my way.",
                "I do have a strong sense of fair play and always try to find the most equitable solution to arguments.",
                "I'm confident in my own abilities and do what I can to instill confidence in others.",
                "Thinking is for other people. I prefer action.",
                "I misuse long words in an attempt to sound smarter.",
                "I get bored easily. When am I going to get on with my destiny?"
            );
            a = pTrait[Math.floor(Math.random() * pTrait.length)];
            flaw.push(
                "The tyrant who rules my land will stop at nothing to see me killed.",
                "I'm convinced of the significance of my destiny, and blind to my shortcomings and the risk of failure.",
                "The people who knew me when I was young know my shameful secret, so I can never go home again.",
                "I have a weakness for the vices of the city, especially hard drink.",
                "Secretly, I believe that things would be better if I were a tyrant lording over the land.",
                "I have trouble trusting in my allies."
            );
            d = flaw[Math.floor(Math.random() * flaw.length)];
            ideal.push(
                "Respect: People deserve to be treated with dignity and respect. (Good)",
                "Fairness: No one should get preferential treatment before the law, and no one is above the law. (Lawful)",
                "Freedom: Tyrants must not be allowed to oppress the people. (Chaotic)",
                "Might: If I become strong, I can take what I want what I deserve. (Evil)",
                "Sincerity: There's no good in pretending to be something I'm not. (Neutral)",
                "Destiny: Nothing and no one can steer me away from my higher calling. (Any)"
            );
            b = ideal[Math.floor(Math.random() * ideal.length)];
            bond.push(
                "I have a family, but I have no idea where they are. One day, I hope to see them again.",
                "I worked the land, I love the land, and I will protect the land.",
                "A proud noble once gave me a horrible beating, and I will take my revenge on any bully I encounter.",
                "My tools are symbols of my past life, and I carry them so that I will never forget my roots.",
                "I protect those who cannot protect themselves.",
                "I wish my childhood sweetheart had come with me to pursue my destiny."
            );
            c = bond[Math.floor(Math.random() * bond.length)];
            if (t_anim == false){npc.anim += npc.prof;}
            t_anim = true;
            if (t_surv == false){npc.surv += npc.prof;}
            t_surv = true;
            t1 = "Land vehicles, " + tool[Math.floor(Math.random() * tool.length)];
            npc.proficiencies.push(t1);
            npc.inventory.push('A set of artisan tools (x1 your choice), a shovel, an iron pot, a set of common clothes and also a pouch containing 10 gp.');
            break;
        case "Gate Urchin":
            lang3 = 'Common';
            pTrait.push(
                "I appreciate the simple things in life. a song, a warm meal, a sunny day. I don't need any more.",
                "My problems are always caused by others. I'm never to blame.",
                "I am afraid I could wind up back on the streets any day.",
                "I get along with everyone.",
                "I see people as marks for a con and have difficulty feeling true empathy for them.",
                "I have a real flair for matchmaking. I can find anyone a spouse!",
                "I think money is the true measure of appreciation and affection. Everything else is talk or an act.",
                "I don't like having a lot of stuff, just a few simple things I need. I don't like being tied down and tend to leave things behind when I don't need them anymore."
            );
            a = pTrait[Math.floor(Math.random() * pTrait.length)];
            flaw.push(
                "Though I no longer live at the Gate, I am still always concerned about where I will get my next meal.",
                "Years of thieving have become habit. I sometimes steal from strangers without thinking about it.",
                "I am ashamed of my origins. I pretend I am higher-born and fear others will find out the truth.",
                "I think people who grew up in houses are soft, spoiled, and ungrateful. I frequently tell them so.",
                "I am still very uncomfortable wearing nice clothes, sleeping in a warm bed, and eating fine food.",
                "I do not trust anyone who has not had a hard life."
            );
            d = flaw[Math.floor(Math.random() * flaw.length)];
            ideal.push(
                "Loyal: I never rat out any of my friends, even when the Red Plumes or the Rogues Guild ask. (Lawful)",
                "Adventurous: I don't like doing the same thing every day. I crave variety. (Chaotic)",
                "Strong: Only the strong survive. I respect those who are strong and powerful. (Any)",
                "Witty: Brains are better than brawn. I rely on my wits and respect others who do the same. (Any)",
                "Honest: Others can do what they want, but I won't lie or steal, even to feed my family. (Good)",
                "Ungrateful: Those who give only do it to make themselves feel better. I steal from them. (Evil)"
            );
            b = ideal[Math.floor(Math.random() * ideal.length)];
            bond.push(
                "The Joydancers of Lliira gave me my instrument when I really needed food. I hate them for that.",
                "Busking has taught me to love music above all else.",
                "The Rogues Guild spared me when I did a job without cutting them in. I owe them a great debt.",
                "I know people hate the Red Plumes, but some of them were really good to me. I help Red Plumes whenever I can, and I respect them. They're just doing what they have to do to get by in this world.",
                "I will be wealthy some day. My descendants will live in comfort and style.",
                "I know how hard life on the streets is. I do everything I can for those who have less than me."
            );
            c = bond[Math.floor(Math.random() * bond.length)];
            if (t_dece == false){npc.dece += npc.prof;}
            t_dece = true;
            if (t_slei == false){npc.slei += npc.prof;}
            t_slei = true;
            npc.proficiencies.push();
            npc.inventory.push(' A battered alms box, a musical instrument, a cast-off military jacket, cap, or scarf, a set of common clothes, a belt pouch, and 10 gp');
            break;
        case "Gladiator":
            lang3 = 'Common';
            pTrait.push(
                "I strongly dislike one type of wild beasts (bears, wolves, lions, etc) that i once faced in combat.",
                "I try to infuse my actions with a theatrical flourish, but will never admit that my showmanship is anything but genuine.",
                "I only ever speak about myself in the third person.",
                "I have a short catch phrase which i try to use in battle (and sometimes",
                "I insist that others always (or never) call me by my ring name and will correct them whenever they do otherwise.",
                "I pretend to be from a foreign land even though i actually grew up nearby (or vice versa).",
                "I often use large, important sounding words when speaking, even if i do not always know what the words actually mean.",
                "I am prone to telling stories of my past arena combats, even to people who have heard the same stories many times before.",
                "I love a good insult, even one directed at me.",
                "I get bitter if i'm not the center of attention.",
                "I give combat pointers to nearly everyone i meet.",
                "I'm confident in my own abilities and do what i can to install confidence in others"
            );
            a = pTrait[Math.floor(Math.random() * pTrait.length)];
            flaw.push(
                "I have become so immersed in your gladiatorial persona that I now have a hard time separating yourself from it.",
                "I can be short-sighted and myopic, pursuing a single goal tenaciously, while overlooking other peripheral matters.",
                "I have a tendency to be unintentionally insulting or boastful.",
                "I sometimes overestimate my abilities due to years of theatrically manufactured success.",
                "I feel like a fraud and fear that your fans will discover that most of my victories were fixed.",
                "I have a hard time trusting people, feeling that everyone is always trying to use you in some way.",
                "I will do anything to win fame and renown.",
                "I'm horribly jealous of anyone who outshines my performance in combat",
            );
            d = flaw[Math.floor(Math.random() * flaw.length)];
            ideal.push(
                "Freedom: Now that I have gained my independence, I will never submit again.",
                "Championship: I turn everything I do into a competition and I always strive to win.",
                "Exaltation: The roar of the crowd chanting my name is all I need to be reinvigorated.(Good)",
                "Greed: I'm only in it for the money and fame. (Evil)",
                "Camaraderie: I treasure the friendship and fraternity of my fellow gladiators above all else. (Lawful)",
                "Anonymity: I have grown tired of fame and fighting and wish now to put my past behind me. (Neutral)",
                "Friendship: Material goods come and go. Bonds of friendship last forever. (Good)",
                "Ambition: History remembers the great, and i want to be remembered. (Any)"
            );
            b = ideal[Math.floor(Math.random() * ideal.length)];
            bond.push(
                "A foe that i once humiliated in the arena has swam vengeance against me (or vise versa)",
                "I have sworn to oppose to oppose the person, organization, or government that forced me into the gladiatorial life.",
                "I have owed to protect the family of a fellow gladiator that i once fought with.",
                "I escaped from gladiatorial service and are now pursued relentlessly by my old masters.",
                "I have visions of my brutal death, and live to undo the prophecy.",
                "Though i has no choice, i lament having to leave my loved one(s) behind. I hope to see them again one day.",
                "I will always make for the most dangerous foe.",
                "I want to be famous, whatever it takes."
            );
            c = bond[Math.floor(Math.random() * bond.length)];
            if (t_acro == false){npc.acro += npc.prof;}
            t_acro = true;
            if (t_perf == false){npc.perf += npc.prof;}
            t_perf = true;
            npc.proficiencies.push();
            npc.inventory.push('A costume, a trinket (such as a title belt, ornate sash, badge, or trophy) from a gladiatorial competition that you won, an unusual weapon (such as a net, scimitar, or trident), and a purse containing 15 gp.');
            break;
        case "Guild Artisan":
            lang = ["Dwarvish", "Elvish", "Giant", "Gnomish", "Goblin", "Halfling", "Orc"];
            lang3 = 'Common';
            lang1 = lang[Math.floor(Math.random() * lang.length)];
            pTrait.push(
                "I believe that anything worth doing is worth doing right. I can't help it , I'm a perfectionist.",
                "I'm a snob who looks down on those who can't appreciate fine art.",
                "I always want to know how things work and what makes people tick.",
                "I'm full of witty aphorisms and have a proverb for every occasion.",
                "I'm rude to people who lack my commitment to hard work and fair play.",
                "I like to talk at length about my profession.",
                "I don't part with my money easily and will haggle tirelessly to get the best deal possible.",
                "I'm well known for my work, and I want to make sure everyone appreciates it. I'm always taken aback when people haven't heard of me."
            );
            a = pTrait[Math.floor(Math.random() * pTrait.length)];
            flaw.push(
                "I'll do anything to get my hands on something rare or priceless.",
                "I'm quick to assume that someone is trying to cheat me.",
                "No one must ever learn that I once stole money from guild coffers.",
                "I'm never satisfied with what I have , I always want more.",
                "I would kill to acquire a noble title.",
                "I'm horribly jealous of anyone who can outshine my handiwork. Everywhere I go, I'm surrounded by rivals."
            );
            d = flaw[Math.floor(Math.random() * flaw.length)];
            ideal.push(
                "Community. It is the duty of all civilized people to strengthen the bonds of community and the security of civilization. (Lawful)",
                "Generosity. My talents were given to me so that I could use them to benefit the world. (Good)",
                "Freedom. Everyone should be free to pursue his or her own livelihood. (Chaotic)",
                "Greed. I'm only in it for the money. (Evil)",
                "People. I'm committed to the people I care about, not to ideals. (Neutral)",
                "Aspiration. I work hard to be the best there is at my craft."
            );
            b = ideal[Math.floor(Math.random() * ideal.length)];
            bond.push(
                "The workshop where I learned my trade is the most important place in the world to me.",
                "I created a great work for someone, and then found them unworthy to receive it. I'm still looking for someone worthy.",
                "I owe my guild a great debt for forging me into the person I am today.",
                "I pursue wealth to secure someone's love.",
                "One day I will return to my guild and prove that I am the greatest artisan of them all.",
                "I will get revenge on the evil forces that destroyed my place of business and ruined my livelihood."
            );
            c = bond[Math.floor(Math.random() * bond.length)];
            if (t_insi == false){npc.insi += npc.prof;}
            t_insi = true;
            if (t_pers == false){npc.pers += npc.prof;}
            t_pers = true;
            npc.proficiencies.push();
            npc.inventory.push("A set of artisan's tools (one of your choice), a letter of introduction from your guild, a set of traveler's clothes, and a belt pouch containing 15 gp");
            break;
        case "Guild Merchant":
            lang = ["Dwarvish", "Elvish", "Giant", "Gnomish", "Goblin", "Halfling", "Orc"];
            lang3 = 'Common';
            lang1 = lang[Math.floor(Math.random() * lang.length)];
            pTrait.push(
                "I am curious. I want to know why things are the way they are and why people do the things that they do.",
                "I can't sing, but that never stops me from doing it, loudly. Everyone loves a good sea chantey!",
                "I think the High Blade is doing a terrific job, don't you?",
                "I'm very excited that the House Built on Gold is being restored. I am a zealous worshiper of Waukeen.",
                "I am quite superstitious. I see portents in everyday occurrences.",
                "I resent the rich and enjoy thwarting their plans and spoiling their fun in small ways.",
                "I have a sea story to fit every occasion.",
                "I'm a fisher, but I secretly detest eating fish. I will do anything to avoid it."
            );
            a = pTrait[Math.floor(Math.random() * pTrait.length)];
            flaw.push(
                "I drink too much, which causes me to miss the tide.",
                "I killed a drunk member of the City Watch in a brawl. I am terrified that they might find out.",
                "I oversell myself and make promises I can't keep when I want to impress someone.",
                "Book learning is a waste of time. I have no patience for people who don't speak from experience.",
                "I almost always cheat. I can't help myself.",
                "I am a secret informant for the Hawks. I send them reports about everything I see and hear, even what my friends and allies are up to."
            );
            d = flaw[Math.floor(Math.random() * flaw.length)];
            ideal.push(
                "Calm: For all things, there is a tide. I set sail when it is right, and mend my nets when it is not. (Lawful)",
                "Windblown: I go where the winds blow. No man or woman tells me where or when to sail. (Chaotic)",
                "Aspiring: I will gain the favor of a Zor or Zora patron, maybe even one of the Blades! (Any)",
                "Salty: I want people to look to me as an expert on plying Mulmaster Harbor. (Any)",
                "Selfless: We are all children of the sea. I help everyone in peril afloat and ashore. (Good)",
                "Let them Drown: I refuse to risk my hide to help others. They wouldn't help me if roles were reversed. (Evil)"
            );
            b = ideal[Math.floor(Math.random() * ideal.length)];
            bond.push(
                "I once lost everything but my rowboat. I'll do anything to protect it.",
                "My brother was in the Soldiery, but he was killed. I really look up to the men and women who serve.",
                "The Cloaks killed my friend for spellcasting. I'll get them back somehow, someday.",
                "The High House of Hurting helped me when I was hurt and asked nothing in return. I owe them my life.",
                "I was robbed in the Zhent ghetto once. It will not happen again.",
                "I would do anything to protect the other harborfolk. They are my family."
            );
            c = bond[Math.floor(Math.random() * bond.length)];
            if (t_insi == false){npc.insi += npc.prof;}
            t_insi = true;
            if (t_pers == false){npc.pers += npc.prof;}
            t_pers = true;
            npc.proficiencies.push();
            npc.inventory.push("A set of artisan's tools (one of your choice), a letter of introduction from your guild, a set of traveler's clothes, and a belt pouch containing 15 gp");
            break;
        case "Harborfolk":
            lang3 = 'Common';
            pTrait.push(
                "I am curious. I want to know why things are the way they are and why people do the things that they do.",
                "I can't sing, but that never stops me from doing it, loudly. Everyone loves a good sea chantey!",
                "I think the High Blade is doing a terrific job, don't you?",
                "I'm very excited that the House Built on Gold is being restored. I am a zealous worshiper of Waukeen.",
                "I am quite superstitious. I see portents in everyday occurrences.",
                "I resent the rich and enjoy thwarting their plans and spoiling their fun in small ways.",
                "I have a sea story to fit every occasion.",
                "I'm a fisher, but I secretly detest eating fish. I will do anything to avoid it."
            );
            a = pTrait[Math.floor(Math.random() * pTrait.length)];
            flaw.push(
                "I drink too much, which causes me to miss the tide.",
                "I killed a drunk member of the City Watch in a brawl. I am terrified that they might find out.",
                "I oversell myself and make promises I can't keep when I want to impress someone.",
                "Book learning is a waste of time. I have no patience for people who don't speak from experience.",
                "I almost always cheat. I can't help myself.",
                "I am a secret informant for the Hawks. I send them reports about everything I see and hear, even what my friends and allies are up to."
            );
            d = flaw[Math.floor(Math.random() * flaw.length)];
            ideal.push(
                "Calm: For all things, there is a tide. I set sail when it is right, and mend my nets when it is not. (Lawful)",
                "Windblown: I go where the winds blow. No man or woman tells me where or when to sail. (Chaotic)",
                "Aspiring: I will gain the favor of a Zor or Zora patron, maybe even one of the Blades! (Any)",
                "Salty: I want people to look to me as an expert on plying Mulmaster Harbor. (Any)",
                "Selfless: We are all children of the sea. I help everyone in peril afloat and ashore. (Good)",
                "Let them Drown: I refuse to risk my hide to help others. They wouldn't help me if roles were reversed. (Evil)"
            );
            b = ideal[Math.floor(Math.random() * ideal.length)];
            bond.push(
                "I once lost everything but my rowboat. I'll do anything to protect it.",
                "My brother was in the Soldiery, but he was killed. I really look up to the men and women who serve.",
                "The Cloaks killed my friend for spellcasting. I'll get them back somehow, someday.",
                "The High House of Hurting helped me when I was hurt and asked nothing in return. I owe them my life.",
                "I was robbed in the Zhent ghetto once. It will not happen again.",
                "I would do anything to protect the other harborfolk. They are my family."
            );
            c = bond[Math.floor(Math.random() * bond.length)];
            if (t_athl == false){npc.athl += npc.prof;}
            t_athl = true;
            if (t_slei == false){npc.slei += npc.prof;}
            t_slei = true;
            npc.proficiencies.push();
            npc.inventory.push('Fishing tackle, dice set, playing card set, or Three-Dragon Ante set, a set of common clothes, rowboat, and a belt pouch containing 5 gp');

            break;
        case "Haunted One":
            lang = ['Abyssal', 'Celestial', 'Draconic', 'Deep Speech', 'Infernal', 'Primordial', 'Sylvan', 'Undercommon', 'Druidic',];
            lang3 = 'Common';
            lang1 = lang[Math.floor(Math.random() * lang.length)];
            pTrait.push(
                "I don't run from evil. The Evil runs from me.",
                "I like to read, write, and memorize poetry. It keeps me calm and brings me fleeting moments of happiness.",
                "I spend money freely and live life to the fullest, knowing that tomorrow I might die.",
                "I live for the thrill of the hunt.",
                "I don't talk about the thing that torments me. I'd rather not burden others with my curse.",
                "I expect danger around every corner.",
                "I refuse to become a victim, and I will not allow others to be victimized.",
                "I put no trust in divine beings."
            );
            a = pTrait[Math.floor(Math.random() * pTrait.length)];
            flaw.push(
                "I have certain rituals that I must follow every day. I can never break them.",
                "I assume the worst in people.",
                "I feel no compassion for the dead. They're the lucky ones.",
                "I have an addiction.",
                "I am a purveyor of doom and gloom who lives in a world without hope.",
                "I talk to spirits that no one else can see."
            );
            d = flaw[Math.floor(Math.random() * flaw.length)];
            ideal.push(
                "I try to help those in need, no matter what the personal cost. (Good)",
                "I'll stop the spirits that haunt me or die trying. (Any)",
                "I kill monsters to make the world a safer place and to exorcise my own demons. (Good)",
                "I have a dark calling that puts me above the law. (Chaotic)",
                "I like to know my enemy's capabilities and weaknesses before rushing into battle. (Lawful)",
                "I'm a monster that destroys other monsters and anything else that gets in my way. (Evil)"
            );
            b = ideal[Math.floor(Math.random() * ideal.length)];
            bond.push(
                "I keep my thoughts and discoveries in a journal. My journal is my legacy.",
                "I would sacrifice my life and my soul to protect the innocent.",
                "My torment drove away the person I love. I strive to win back the love I've lost.",
                "A terrible guilt consumes me. I hope that I can find redemption through my actions.",
                "There's evil in me, I can feel it. It must never be set free.",
                "I have a child to protect. I must make the world a safer place for them."
            );
            c = bond[Math.floor(Math.random() * bond.length)];
            rscheck(1);
            takeoutSkill(rs1);
            takeoutSkill(rs2);
            npc.proficiencies.push();
            npc.inventory.push("A set of common clothes, a monster hunter's pack, and one Gothic Trinket");
            break;
        case "Hermit":
            lang = ["Dwarvish", "Elvish", "Giant", "Gnomish", "Goblin", "Halfling", "Orc"];
            lang3 = 'Common';
            lang1 = lang[Math.floor(Math.random() * lang.length)];
            pTrait.push(
                "I have been isolated for so long that i speak rarely, preferring gestures and also the occasional grunt",
                "I am utterly serene, even in the face of disaster.",
                "The leader of my community had something wise to say on every topic, and I am eager to share that wisdom.",
                "I feel tremendous empathy for all who suffer.",
                "I'm oblivious to etiquette and social expectations.",
                "I connect everything that happens to me to a grand, cosmic plan.",
                "I often get lost in my own thoughts and contemplation, becoming oblivious to my surroundings.",
                "I am working on a grand philosophical theory and love sharing my ideas."
            );
            a = pTrait[Math.floor(Math.random() * pTrait.length)];
            flaw.push(
                "Now that I've returned to the world, I enjoy its delights a little too much",
                "I harbor dark, bloodthirsty thoughts that my isolation and meditation failed to quell.",
                "I am dogmatic in my thoughts and philosophy.",
                "I let my need to win arguments overshadow friendships and harmony.",
                "I'd risk too much to uncover a lost bit of knowledge.",
                "I like keeping secrets and won't share them with anyone."
            );
            d = flaw[Math.floor(Math.random() * flaw.length)];
            ideal.push(
                "Greater Good. My gifts are meant to be shared with all, not used for my own benefit. (Good)",
                "Logic. Emotions must not cloud our sense of what is right and true, or our logical thinking. (Lawful)",
                "Free Thinking. Inquiry and curiosity are the pillars of progress. (Chaotic)",
                "Power. Solitude and contemplation are paths toward mystical or magical power. (Evil)",
                "Live and Let Live. Meddling in the affairs of others only causes trouble. (Neutral)",
                "Self-Knowledge. If you know yourself, there's nothing left to know. (Any)"
            );
            b = ideal[Math.floor(Math.random() * ideal.length)];
            bond.push(
                "Nothing is more important than the other members of my hermitage, order, or association.",
                "I entered seclusion to hide from the ones who might still be hunting me. I must someday confront them.",
                "I'm still seeking the enlightenment I pursued in my seclusion, and it still eludes me.",
                "I entered seclusion because I loved someone I could not have.",
                "Should my discovery come to light, it could bring ruin to the world.",
                "My isolation gave me great insight into a great evil that only I can destroy."
            );
            c = bond[Math.floor(Math.random() * bond.length)];
            if (t_medi == false){npc.medi += npc.prof;}
            t_medi = true;
            if (t_reli == false){npc.reli += npc.prof;}
            t_reli = true;
            npc.proficiencies.push();
            npc.inventory.push('A Winter Blanket, 5gp, a Set of common clothes, a herbalism kit, A scroll case stuffed full of notes from your studies or prayers.');
            break;
        case "Hillsfar Merchant":
            lang3 = 'Common';
            pTrait.push(
                "I fill my evenings with wine or mead and song.",
                "I greatly admire gladiators and enjoy the Arena.",
                "I take my wealth for granted. It seldom occurs to me that others aren't rich themselves.",
                "I leave broken hearts all around the Moonsea and up and down the Sword Coast.",
                "I work hard and seldom make time for fun.",
                "I am a particularly devout and pray often.",
                "The Red Plumes caught me once. I hate them.",
                "I ask a lot of questions to get information about those with whom I am working and dealing."
            );
            a = pTrait[Math.floor(Math.random() * pTrait.length)];
            flaw.push(
                "I am a braggart. I promote myself shamelessly.",
                "I am vain. I always wear the latest fashions.",
                "I am a glutton. I eat and drink to excess.",
                "I am a snob. I want only the finest things in life.",
                "I am lazy. I want others to take care of everything.",
                "I am overconfident. I overestimate my abilities."
            );
            d = flaw[Math.floor(Math.random() * flaw.length)];
            ideal.push(
                "Frugal: I spend my money very carefully. (Lawful)",
                "Profligate: I tend to spend extravagantly. (Chaotic)",
                "Honest: I deal with others above board. (Any)",
                "Sharp: I seek to make the best deal possible. (Any)",
                "Charitable: I give generously to others. (Good)",
                "Greedy: I do not share my wealth with others. (Evil)"
            );
            b = ideal[Math.floor(Math.random() * ideal.length)];
            bond.push(
                "I am fiercely loyal to those with whom I work.",
                "I must uphold the good name of my family.",
                "I will prove myself to my family as an adventurer.",
                "Deals are sacrosanct. I never go back on my word.",
                "I love making deals and negotiating agreements.",
                "I guard my wealth jealously."
            );
            c = bond[Math.floor(Math.random() * bond.length)];
            if (t_insi == false){npc.insi += npc.prof;}
            t_insi = true;
            if (t_pers == false){npc.pers += npc.prof;}
            t_pers = true;
            npc.proficiencies.push();
            npc.inventory.push("A fine set of clothes, a signet ring, a letter of introduction from your family's trading house, and a purse containing 25 gp.");
            break;
        case "Hillsfar Smuggler":
            lang = ["Dwarvish", "Elvish", "Giant", "Gnomish", "Goblin", "Halfling", "Orc"];
            lang3 = 'Common';
            lang1 = lang[Math.floor(Math.random() * lang.length)];
            pTrait.push(
                "When I'm not smuggling, I gamble.",
                "I just love Halfling cooking and baking!",
                "I party with dwarves whenever I can.",
                "I'm a terrible singer, but I love to do it.",
                "I was raised to honor Chauntea and still do.",
                "The blood sports of the Arena sicken me.",
                "I think non-humans are really interesting.",
                "I exaggerate the tales of my exploits."
            );
            a = pTrait[Math.floor(Math.random() * pTrait.length)];
            flaw.push(
                "My hatred for the Red Plumes burns so brightly that I have difficulty suppressing It around them.",
                "The Red Plumes caught me once before, and I was branded for my crime. If they catch me again, for any offense, the punishment will be dire.",
                "I treat all Hillsfarans poorly. I am disgusted with their failure to revolt against the Great Law of Humanity.",
                "I have difficulty trusting strangers. Anyone could be a spy for the authorities.",
                "I am greedy. There Isn't much I won't do for money.",
                "I'm an informant for the Red Plumes. They let me continue my activities, so long as I pass them information about illegal activity in Hillsfar."
            );
            d = flaw[Math.floor(Math.random() * flaw.length)];
            ideal.push(
                "Fair: I think everyone deserves to be treated fairly. I don't play favorites. (Lawful)",
                "Impulsive: Planning is often a waste of time. No plan survives contact with reality. It's easier to dive in and deal with the consequences. (Chaotic)",
                "Curious: I want to learn as much as I can about the people and places I encounter. (Any)",
                "Prepared: I think success depends on preparing as much as possible in advance. (Any)",
                "Respectful: I think everyone deserves to be treated with respect and dignity, regardless of their race, creed, color, or origin. (Good)",
                "Corrupt: I will break the law or act dishonestly if the money is right. (Evil)"
            );
            b = ideal[Math.floor(Math.random() * ideal.length)];
            bond.push(
                "I am loyal to the Rogues Guild and would do anything for them.",
                "I love the city of Hillsfar and my fellow Hillsfarians, despite the recent problems.",
                "I admire the elves. I help them whenever I can.",
                "A gnome helped me once. I pay the favor forward.",
                "I enjoy tricking the Red Plumes at every opportunity.",
                "I smuggled agricultural goods for non-human farmers. I try to help them when I can."
            );
            c = bond[Math.floor(Math.random() * bond.length)];
            if (t_perc == false){npc.perc += npc.prof;}
            t_perc = true;
            if (t_stea == false){npc.stea += npc.prof;}
            t_stea = true;
            npc.proficiencies.push();
            npc.inventory.push('A forgery kit, a set of common clothes, a belt pouch, and 5 gp');
            break;
        case "House Agent":
            lang3 = 'Common';
            pTrait.push(
                "I never let emotion complicate work.",
                "I'm always working to improve efficiency.",
                "I share trivia about my house business (medicine, ships, warforged).",
                "I hold myself and anyone I work with to extremely high standards.",
                "I never forget an insult made against myself or my house.",
                "I'm very excited and enthusiastic about everything my house does.",
                "I'm representing my house and take great pride in my personal appearance.",
                "I'm critical of monarchies and opposed to any restrictions on the houses."
            );
            a = pTrait[Math.floor(Math.random() * pTrait.length)];
            flaw.push(
                "I'm overly concerned with following established procedures and protocols.",
                "I'm obsessed with conspiracy theories and worried about secret societies and hidden demons.",
                "I believe that my house and bloodline makes me better than everyone else.",
                "I'm concealing a secret that could get me driven from my house.",
                "I have strong religious beliefs that aren't shared by others in my house.",
                "I'm working for a hidden faction in my house that gives me secret assignments."
            );
            d = flaw[Math.floor(Math.random() * flaw.length)];
            ideal.push(
                "Common Good: My house serves a vital function, and its prosperity helps everyone. (Good)",
                "Tradition: I uphold traditions of my house and bring honor to my family. (Lawful)",
                "Innovation: Abandon old traditions and find better ways to do things. (Chaotic)",
                "Power: I want to ensure the prosperity of my house and wield its power myself. (Evil)",
                "Discovery: I want to learn all I can, both for my house and for my own curiosity. (Any)",
                "Comfort: I want to ensure that me and mine enjoy the best things in life. (Any)"
            );
            b = ideal[Math.floor(Math.random() * ideal.length)];
            bond.push(
                "My house is my family, and I would do anything for my family.",
                "I love someone from another house, but such relationships are forbidden.",
                "Someone I love was killed by a rival faction within my house, and I will have revenge.",
                "I don't care about the house as a whole, but I would do anything for my old mentor.",
                "I believe my house needs to evolve to survive, and I need to lead that change.",
                "I am determined to impress the leaders of my house, and to become a leader myself."
            );
            c = bond[Math.floor(Math.random() * bond.length)];
            if (t_inve == false){npc.inve += npc.prof;}
            t_inve = true;
            if (t_pers == false){npc.pers += npc.prof;}
            t_pers = true;
            npc.proficiencies.push();
            npc.inventory.push(' A set of fine clothes, house signet ring, ID papers, and a purse containing 20 gp');
            break;
        case "Inheritor":
            lang3 = 'Common';
            pTrait.push(
                "You are a hard worker from you simple life, and appreciate a job well done.",
                "You believe you are the chosen one and that your newfound powers mean you have a great destiny.",
                "You are new to the adventuring scene. It can't be that bad, right?",
                "You are very haughty, believing that your new abilities mean that you are above others.",
                "You are resistant to your destiny and wish things would go back to the way they were before.",
                "You know your powers have a purpose, but really you feel quite homesick."
            );
            a = pTrait[Math.floor(Math.random() * pTrait.length)];
            flaw.push(
                "You feel untouchable, overestimating your abilities and getting yourself into trouble.",
                "With all of this new knowledge in your head you have a hard time remembering what's real and what isn't.",
                "You have a hard time with your powers and sometimes shoot out cantrips without meaning to.",
                "You are horribly embarrassed by your powers and don't like to use them unless absolutely necessary.",
                "With your powers and your knowledge comes horrible nightmares that you can't understand.",
                "You feel like a danger to society and don't want anyone to get too close."
            );
            d = flaw[Math.floor(Math.random() * flaw.length)];
            ideal.push(
                "Your powers were given to you so you can make changes in this broken world. (Chaotic)",
                "You use your powers to do good in this world and help those that need it. (Good)",
                "What's the point in powers if you aren't powerful? You plan to make your enemies kneel before you. (Evil)",
                "This world is in anarchy and you must use your abilities to restore order. (Lawful)",
                "You have a great destiny ahead of you, better go out there and find it. (Any)",
                "Your powers are foreign to you and you are determined to learn how to harness them properly. (Neutral)"
            );
            b = ideal[Math.floor(Math.random() * ideal.length)];
            bond.push(
                "You feel indebted to the being that gave you your powers and want to sing their praise.",
                "You use your powers to protect those closest to you.",
                "You want to make your family proud by becoming rich and powerful.",
                "You are searching for someone who disappeared when you were young.",
                "You seek revenge on the entity that gave you your powers and ruined your life.",
                "You only want to help those living rough lives, as you've been there before."
            );
            c = bond[Math.floor(Math.random() * bond.length)];
            ranStat.push('arca', 'hist', 'reli');
            rs1 = ranStat[Math.floor(Math.random() * ranStat.length)];
            if (t_surv == false){npc.surv += npc.prof;}
            t_surv = true;
            if (rs1 == "arca") {npc.arca += npc.prof;}
            if (rs1 == "hist") {npc.hist += npc.prof;}
            if (rs1 == "reli") {npc.reli += npc.prof;}
            npc.proficiencies.push();
            npc.inventory.push("You gain one explorer kit, one memento from own home of your's and also a small chunk of the unidentifiable crystal and 10gp");
            break;
        case "Initiate":
            lang3 = 'Common';
            pTrait.push(
                "I always have a joke on hand when the mood gets too serious.",
                "I use sarcasm and insults to keep a distance between myself and my crop-mates, because I don't want to get attached to them.",
                "I'll settle for nothing less than perfection , in myself, in my cropmates, in everything.",
                "I'm so focused on the glorious afterlife that nothing in this life can shake my calm resolve.",
                "I enjoy using my skills to help those who lack those same skills.",
                "I train hard so that I can play hard at the end of the day. I fully expect to play even harder in the glorious afterlife, but I'm not in a hurry to get there.",
                "I'm perfectly happy letting others pick up the slack for me while I take it easy.",
                "I'm constantly sizing up everyone around me, thinking about what kind of opponent they'll be in the final trial."
            );
            a = pTrait[Math.floor(Math.random() * pTrait.length)];
            flaw.push(
                "I'm easily distracted by an attractive person, which could be the death of me in the trials.",
                "I really wanted to be a vizier, and I'm angry at the god who didn't choose me.",
                "Training for a lifetime to die in the end seems like a big waste of energy.",
                "I'm not at all sure I'll be able to grant a glorified death to any of my crop-mates.",
                "I have a lasting grudge against one of my crop-mates, and each of us wants to see the other fail.",
                "I think I've figured out that this world is not what it seems. Something dark is going on here."
            );
            d = flaw[Math.floor(Math.random() * flaw.length)];
            ideal.push(
                "Solidarity. The thing that matters most of all is that we're there for each other. (Lawful)",
                "Knowledge. The world is a puzzle , a mystery waiting to be solved. (Neutral)",
                "Strength. All that matters to me is my own perfection. Let everyone else seek that perfection in their own way. (Any)",
                "Ambition. I'm going to prove that I deserve only the best , of everything. (Evil)",
                "Zeal. Anything worth doing is worth throwing my whole self into. (Any)",
                "Redemption. I will train all the harder to make up for the doubt I entertained when I was younger. (Any)"
            );
            b = ideal[Math.floor(Math.random() * ideal.length)];
            bond.push(
                "Solidarity. The thing that matters most of all is that we're there for each other. (Lawful)",
                "Knowledge. The world is a puzzle , a mystery waiting to be solved. (Neutral)",
                "Strength. All that matters to me is my own perfection. Let everyone else seek that perfection in their own way. (Any)",
                "Ambition. I'm going to prove that I deserve only the best , of everything. (Evil)",
                "Zeal. Anything worth doing is worth throwing my whole self into. (Any)",
                "Redemption. I will train all the harder to make up for the doubt I entertained when I was younger. (Any)"
            );
            c = bond[Math.floor(Math.random() * bond.length)];
            if (t_athl == false){npc.athl += npc.prof;}
            t_athl = true;
            if (t_inti == false){npc.inti += npc.prof;}
            t_inti = true;
            npc.proficiencies.push();
            npc.inventory.push('A simple puzzle box, a scroll containing the basic teachings of the five gods, a gaming set, a set of common clothes, and a belt pouch containing 15 gp. If you have completed any trials before the start of the campaign, you also have any cartouches you have earned.');
            break;
        case "Inquisitor":
            lang3 = 'Common';
            pTrait.push(
                "It will all go smoothly if everyone just does as I say.",
                "Despair is an extravagance we can ill afford.",
                "I know the writings of Saint Raban backward and forward.",
                "I try to see the bright side in the very worst situations.",
                "It helps me feel better when others show sympathy or appreciation for the horrors I've endured.",
                "I prefer to face evil with a strong group of friends in front of me.",
                "I want to see the wicked burn for the evil they've brought on us.",
                "I feel the sin being purged from me as I help cleanse the world."
            );
            a = pTrait[Math.floor(Math.random() * pTrait.length)];
            flaw.push(
                "I am troubled by the wild rage and bloodlust that lurks in my own heart.",
                "I have come to believe that I executed an innocent person.",
                "I enjoy the prestige of my position more than service to the angels.",
                "I drink to forget the horrors I've seen.",
                "I might have made a promise to a demon that I can't keep.",
                "I'll do whatever grim task must be done, for my soul is already lost."
            );
            d = flaw[Math.floor(Math.random() * flaw.length)];
            ideal.push(
                "Honesty: The smallest deception paves the way to grievous sin. (Lawful)",
                "Piety: Devotion to the angels and the rites of the church is all that keeps the world from destruction. (Good)",
                "Order: The laws of Avacyn are meant to preserve the social order everything in its proper place. (Lawful)",
                "Humanity: Human life is to be cherished and preserved against the horrors of the night. (Good)",
                "Knowledge: The path to holiness comes through understanding of the world. (Any)",
                "Punishment: It is better for the innocent to suffer than for the guilty to escape their due. (Evil)"
            );
            b = ideal[Math.floor(Math.random() * ideal.length)];
            bond.push(
                "Thraben is the heart of the world. The cathedral must stand even if the hinterlands are lost.",
                "One day, I will claim vengeance against the monster that took my family from me.",
                "My weapon is all I have to remember my beloved mentor by.",
                "The geist of my beloved speaks to me sometimes.",
                "My dear sibling is now a werewolf.",
                "A small crossways chapel is my spiritual home."
            );
            c = bond[Math.floor(Math.random() * bond.length)];
            if (t_inve == false){npc.inve += npc.prof;}
            t_inve = true;
            if (t_reli == false){npc.reli += npc.prof;}
            t_reli = true;
            npc.proficiencies.push();
            npc.inventory.push("A holy symbol, a set of traveler's clothes, and a belt pouch containing 15 gp");
            break;
        case "Investigator":
            lang = ["Dwarvish", "Elvish", "Giant", "Gnomish", "Goblin", "Halfling", "Orc"];
            lang3 = 'Common';
            lang1 = lang[Math.floor(Math.random() * lang.length)];
            lang2 = lang[Math.floor(Math.random() * lang.length)];
            pTrait.push(
                "You have an addiction problem.",
                "You are very genre savvy.",
                "You are a braggart.",
                "You are a cynic.",
                "You often gamble.",
                "You let others do the dirty work.",
                "You are friendly with your clients.",
                "You do everything yourself."
            );
            a = pTrait[Math.floor(Math.random() * pTrait.length)];
            flaw.push(
                "My cynicism can make me a turncoat.",
                "I have waxing addiction problems.",
                "I tend to make terrible bets, especially when gambling.",
                "I care only for myself.",
                "I am a smart aleck, and I don't stifle my showing it.",
                "I charge exorbitant prices for my taking a case, almost to the point of not receiving any."
            );
            d = flaw[Math.floor(Math.random() * flaw.length)];
            ideal.push(
                "Honor: I will honor my word, even if it harms me. (Good)",
                "Greed: I only do this for the money. (Evil)",
                "Justice: If I find my client is a traitor, I will do the same. (Lawful)",
                "Vigilantism: The law is a burden that I must not adhere. (Chaotic)",
                "Privacy: The case is a means to an end. That end is not my business. (Neutral)",
                "Ambition: My name shall me made through detective work. (Any)"
            );
            b = ideal[Math.floor(Math.random() * ideal.length)];
            bond.push(
                "My bond is to the people who write mystery novels. They helped me get where I am.",
                "I am in the job to escape justice, in a way.",
                "I am in a debt of one hundred platinum, due to a terrible bet.",
                "The bartender at the local tavern has been awfully kind these past few decades. I should probably repay his generosity.",
                "One criminal betrayed me, when my villainy was less honest. When we cross paths again, only one of us will leave that place.",
                "I have no bond. I am my own creature!"
            );
            c = bond[Math.floor(Math.random() * bond.length)];
            if (t_insi == false){npc.insi += npc.prof;}
            t_insi = true;
            if (t_inve == false){npc.inve += npc.prof;}
            t_inve = true;
            npc.proficiencies.push();
            npc.inventory.push('Small book and charcoal, Magnifying Glass, telescope, small pouch with 15 gp');
            break;
        case "Iron Route Bandit":
            lang3 = 'Common';
            pTrait.push(
                "If people leave their gear unsecured, they must not want it very much.",
                "I feel more comfortable sleeping under the open sky.",
                "I always pre-plan my escape should things go bad; I always like to have an exit strategy.",
                "I tend to give animal owners breeding and care advice whether or not they want it.",
                "I lost a pet as a child and sadly reflect on it to this day.",
                "I always form a powerful, emotional bond with my mount.",
                "I recoil at the thought of killing someone else's pet or mount.",
                "I prefer to hang to the back of a scuffle or discussion. Better to have my enemies in front of me."
            );
            a = pTrait[Math.floor(Math.random() * pTrait.length)];
            flaw.push(
                "I talk to animals; I believe they understand me, even if they do not.",
                "I growl at and bite anyone who gets too close to my food while I am eating.",
                "I strongly dislike enclosed spaces and require intoxication or firm encouragement to enter them.",
                "I robbed the wrong caravan once. The owner is a powerful merchant who holds a grudge.",
                "I'm an inveterate gambler.",
                "I judge people based on how well they stand their ground in a fight. I've got not time for cowards..."
            );
            d = flaw[Math.floor(Math.random() * flaw.length)];
            ideal.push(
                "Loyalty: Never bite the hand that feeds. (Good)",
                "Unpredictability: Keep your enemy guessing and off-balance like a confused deer. (Chaotic)",
                "Power: I strive to become leader of the pack at all costs. (Lawful)",
                "Freedom: I bow to no one I don't respect. (Chaotic)",
                "Resourcefulness: Our wits are our most valuable resource in troubled times. (Any)",
                "Unity: Lone wolves fail where the pack succeeds. (Any)"
            );
            b = ideal[Math.floor(Math.random() * ideal.length)];
            bond.push(
                "I cannot leave a harmed animal behind; I must save it or put it out of its misery.",
                "I leave behind my own personal calling cards when I do a job.",
                "I do not trust people who do not have a pet, mount, or furry companion.",
                "The pelt I wear on my back was from an animal that died saving my life, I will always cherish it.",
                "If my pet does not like you, I do not like you!",
                "Once you've ridden with me and fought by my side, I'll be there for you odds be damned."
            );
            c = bond[Math.floor(Math.random() * bond.length)];
            if (t_anim == false){npc.anim += npc.prof;}
            t_anim = true;
            if (t_stea == false){npc.stea += npc.prof;}
            t_stea = true;
            npc.proficiencies.push();
            npc.inventory.push("A set of dark common clothes, pack saddle, burglar's pack and a belt pouch containing 5 gp");
            break;
        case "Knight":
            lang = ["Dwarvish", "Elvish", "Giant", "Gnomish", "Goblin", "Halfling", "Orc"];
            lang3 = 'Common';
            lang1 = lang[Math.floor(Math.random() * lang.length)];
            pTrait.push(
                "You are a person of few words, who prefers to let your actions do all the talking.",
                "You demand respect from everyone you deal with and will not tolerate any perceived slights to your personal honor.",
                "You are prone to making lengthy speeches in an attempt to rally your allies, even when there is little time for words.",
                "You see every coincidence as the hand of your deity guiding you in a certain direction.",
                "You never back down from a fight or a challenge, even in the face of overwhelming odds.",
                "You are obsessed with a historical figure and constantly explain to everyone all of the parallels (no matter how thin) between your current adventures and theirs.",
                "You are slow to anger but can be merciless and relentless once a situation has escalated to violence.",
                "You speak in a very proper, formal manner and always address everyone with their full name and title as befits their station."
            );
            a = pTrait[Math.floor(Math.random() * pTrait.length)];
            flaw.push(
                "You are unshakable in the belief that you always have the higher moral ground.",
                "You are always willing to loudly recount the tales of your daring deeds to anyone that will listen, and even some who will not.",
                "You secretly doubt the veracity of the cause or ruler that you serve.",
                "While you love the status conveyed by your knighthood, you value your own life too much to sacrifice it for mere ideals.",
                "You are prone to falling in love at first sight.",
                "You are very vain and work hard to make sure that your armor is polished, your hair is perfectly coifed and your appearance is meticulously without flaw."
            );
            d = flaw[Math.floor(Math.random() * flaw.length)];
            ideal.push(
                "Equality: The downtrodden among us must be protected and uplifted in the face of injustice.",
                "The Crown: Enemies of the church and king (or whatever ruler you follow) must be rooted out wherever they are found.",
                "Battle: When I die, I will make sure that it is a meaningful death and I will slay as many of my enemies as I can before I succumb.",
                "Honor: My word is my reputation and I will always honor it.",
                "Glory: Someday my name will be honored as an equal to the heroes of legend.",
                "Self: I will use my position to increase my own status and wealth whenever I am able."
            );
            b = ideal[Math.floor(Math.random() * ideal.length)];
            bond.push(
                "You idealize a heroic figure or ancestor that you believe embodies the spirit of what it truly means to be a knight.",
                "You owe all that you have to a noble lord or lady that sponsored your knighthood and now acts as your benefactor.",
                "You are consumed by guilt for some past sin or misdeed that you committed and you are determined to atone for that act.",
                "You have been granted a vision of an ancient holy relic that was lost ages ago and you have made it your personal quest to recover the lost artifact.",
                "You are madly in love with another noble's betrothed, a love that can never be.",
                "The land where you were born is under siege from outside (possibly figurative) threat and you will see the land saved, even if it's the last thing you do."
            );
            c = bond[Math.floor(Math.random() * bond.length)];
            if (t_hist == false){npc.hist += npc.prof;}
            t_hist = true;
            if (t_pers == false){npc.pers += npc.prof;}
            t_pers = true;
            npc.proficiencies.push();
            npc.inventory.push('A set of fine clothes, a tabard or banner displaying your personal coat of arms, a scarf or flower or other token given to you by a lord or lady that signifies their courtly favor, and a purse containing 25 gp');
            break;
        case "Mercenary Veteran":
            lang3 = 'Common';
            pTrait.push(
                "I like to show off, particularly if there's a chance to get a job offer in it.",
                "I am always gregarious and cheerful, no matter the situation, as long as I am paid well.",
                "To me, the whisper of steel and the clash of weapons is just as pleasing as any amount of gold.",
                "I always train because training leaves the person ready even in a moment of respite or weakness.",
                "I hold myself to a strict code of ideals.",
                "I keep my personal possessions in secret places which are known only to me.",
                "I would do anything to protect my weapons of arm, for I know it will protect me in return.",
                "I do nothing, move no finger or a blade, unless I hear the jingling sound of coins."
            );
            a = pTrait[Math.floor(Math.random() * pTrait.length)];
            flaw.push(
                "I'll do anything for coin, damn the consequences.",
                "As much as I pretend to love fighting, I secretly hate hurting others.",
                "I have crippling debts that my work barely pays it off.",
                "I never fail at my tasks, even if I have to resort to less honourable means to complete them.",
                "I would send an innocent to face his death if it means I will win the fight.",
                "Someone powerful would do anything to have my head, so I seek to gain his or her head first."
            );
            d = flaw[Math.floor(Math.random() * flaw.length)];
            ideal.push(
                "Golden Soul: I fight for money, and nothing else. (Neutral)",
                "Great Publicity: I will be known for my deeds, sooner rather than later. (Any)",
                "Power or Death: In my line of profession, the strong live and the weak starve. (Evil)",
                "Non-Sold Honor: I never break my promises. Never. (Lawful)",
                "War and Crime: Whenever chaos flourishes, so too does my work. (Chaotic)",
                "Good for Sale: I am a sellsword who swings his weapon only in the name of good. (Good)"
            );
            b = ideal[Math.floor(Math.random() * ideal.length)];
            bond.push(
                "I became a mercenary to support my family, who would have probably starved in a slum somewhere if not for me.",
                "I fight for a lover that knows little if not nothing of me.",
                "I was inspired by a great hero to become a mercenary.",
                "I treat my valued comrades like brothers, and I will let no insult or injury fall upon them.",
                "I seek to protect something of great importance to me by keeping it a secret, so you better forget what you just heard.",
                "I never disrespect an employer, if they never disrespect me or stop giving me money."
            );
            c = bond[Math.floor(Math.random() * bond.length)];
            if (t_athl == false){npc.athl += npc.prof;}
            t_athl = true;
            if (t_pers == false){npc.pers += npc.prof;}
            t_pers = true;
            npc.proficiencies.push();
            npc.inventory.push("A uniform of your company (traveler's clothes in quality), an insignia of your rank, a gaming set of your choice, and a pouch containing the remainder of your last wages (10 gp)");
            break;
        case "Mulmaster Aristocrat":
            lang3 = 'Common';
            pTrait.push(
                "My ambitions are boundless. I will be a Zor or Zora one day!",
                "I must always look my best.",
                "Beauty is everywhere. I can find it in even the homeliest person and the most horrible tragedy.",
                "Decorum must be preserved at all costs.",
                "I will not admit I am wrong if I can avoid it.",
                "I am extremely well-educated and frequently remind others of that fact.",
                "I take what I can today, because I do not know what tomorrow holds.",
                "My life is full of dance, song, drink, and love."
            );
            a = pTrait[Math.floor(Math.random() * pTrait.length)];
            flaw.push(
                "I have difficulty caring about anyone or anything other than myself.",
                "Having grown up with wealth, I am careless with my finances. I overspend and am overly generous.",
                "The ends (my advancement) justify any means.",
                "I must have what I want and will brook no delay.",
                "My family has lost everything. I must keep up appearances, lest we become a laughingstock.",
                "I have no artistic sense. I hide that fact behind extreme opinions and have become a trendsetter."
            );
            d = flaw[Math.floor(Math.random() * flaw.length)];
            ideal.push(
                "Generous: I have a responsibility to help and protect the less fortunate. (Good)",
                "Loyal: My word, once given, is my bond. (Lawful)",
                "Callous: I am unconcerned with any negative effects my actions may have on the lives and fortunes of others. (Evil)",
                "Impulsive: I follow my heart. (Chaotic)",
                "Ignorant: Explanations bore me. (Neutral)",
                "Isolationist: I am concerned with the fortunes of my friends and family. Others must see to themselves. (Any)"
            );
            b = ideal[Math.floor(Math.random() * ideal.length)];
            bond.push(
                "I have dedicated my wealth and my talents to the service of one of the city's many temples.",
                "My family and I are loyal supporters of High Blade Jaseen Drakehorn. Our fortunes are inexorably tied to hers. I would do anything to support her.",
                "Like many families who were close to High Blade Selfaril Uoumdolphin, mine has suffered greatly since his fall. We honor his memory in secret.",
                "My family plotted with Rassendyll Uoumdolphin brother usurped brother as High Blade. Betrayal is the quickest route to power.",
                "Wealth and power are nothing. Fulfillment can only be found in artistic expression.",
                "It's not how you feel, who you know, or what you can do - it's how you look, and I look fabulous."
            );
            c = bond[Math.floor(Math.random() * bond.length)];
            if (t_dece == false){npc.dece += npc.prof;}
            t_dece = true;
            if (t_perf == false){npc.perf += npc.prof;}
            t_perf = true;
            npc.proficiencies.push();
            npc.inventory.push("One set of artisan's tools or musical instrument, a set of fine clothes, and a purse containing 10 gp.");
            break;
        case "Noble":
            lang = ["Dwarvish", "Elvish", "Giant", "Gnomish", "Goblin", "Halfling", "Orc"];
            lang3 = 'Common';
            lang1 = lang[Math.floor(Math.random() * lang.length)];
            pTrait.push(
                "My eloquent flattery makes everyone I talk to feel like the most wonderful and important person in the world.",
                "The common folk love me for my kindness and generosity.",
                "No one could doubt by looking at my regal bearing that I am a cut above the unwashed masses.",
                "I take great pains to always look my best and follow the latest fashions.",
                "I don't like to get my hands dirty, and I won't be caught dead in unsuitable accommodations.",
                "Despite my noble birth, I do not place myself above other folk. We all have the same blood.",
                "My favor, once lost, is lost forever.",
                "If you do me an injury, I will crush you, ruin your name, and salt your fields."
            );
            a = pTrait[Math.floor(Math.random() * pTrait.length)];
            flaw.push(
                "I secretly believe that everyone is beneath me.",
                "I hide a truly scandalous secret that could ruin my family forever.",
                "I too often hear veiled insults and threats in every word addressed to me, and I'm quick to anger.",
                "I have an insatiable desire for carnal pleasures.",
                "In fact, the world does revolve around me.",
                "By my words and actions, I often bring shame to my family."
            );
            d = flaw[Math.floor(Math.random() * flaw.length)];
            ideal.push(
                "Respect: Respect is due to me because of my position, but all people regardless of station deserve to be treated with dignity. (Good)",
                "Responsibility: It is my duty to respect the authority of those above me, just as those below me must respect mine. (Lawful)",
                "Independence: I must prove that I can handle myself without the coddling of my family. (Chaotic)",
                "Power: If I can attain more power, no one will tell me what to do. (Evil)",
                "Family: Blood runs thicker than water. (Any)",
                "Noble Obligation: It is my duty to protect and care for the people beneath me. (Good)"
            );
            b = ideal[Math.floor(Math.random() * ideal.length)];
            bond.push(
                "I will face any challenge to win the approval of my family.",
                "My house's alliance with another noble family must be sustained at all costs.",
                "Nothing is more important than the other members of my family.",
                "I am in love with the heir of a family that my family despises.",
                "My loyalty to my sovereign is unwavering.",
                "The common folk must see me as a hero of the people."
            );
            c = bond[Math.floor(Math.random() * bond.length)];
            if (t_hist == false){npc.hist += npc.prof;}
            t_hist = true;
            if (t_pers == false){npc.pers += npc.prof;}
            t_pers = true;
            npc.proficiencies.push();
            npc.inventory.push('A set of fine clothes, a signet ring, a scroll of pedigree, and a purse containing 25 gp');
            break;
        case "Outlander":
            lang = ["Dwarvish", "Elvish", "Giant", "Gnomish", "Goblin", "Halfling", "Orc"];
            lang3 = 'Common';
            lang1 = lang[Math.floor(Math.random() * lang.length)];
            pTrait.push(
                "I'm driven by a wanderlust that led me away from home.",
                "I watch over my friends as if they were a litter of newborn pups.",
                "I once ran twenty-five miles without stopping to warn to my clan of an approaching orc horde. I'd do it again if I had to.",
                "I have a lesson for every situation, drawn from observing nature.",
                "I place no stock in wealthy or well-mannered folk. Money and manners won't save you from a hungry owlbear.",
                "I'm always picking things up, absently fiddling with them, and sometimes accidentally breaking them.",
                "I feel far more comfortable around animals than people.",
                "I was, in fact, raised by wolves."
            );
            a = pTrait[Math.floor(Math.random() * pTrait.length)];
            flaw.push(
                "I am too enamored of ale, wine, and other intoxicants.",
                "There's no room for caution in a life lived to the fullest.",
                "I remember every insult I've received and nurse a silent resentment toward anyone who's ever wronged me.",
                "I am slow to trust members of other races, tribes, and societies.",
                "Violence is my answer to almost any challenge.",
                "Don't expect me to save those who can't save themselves. It is nature's way that the strong thrive and the weak perish."
            );
            d = flaw[Math.floor(Math.random() * flaw.length)];
            ideal.push(
                "Change. Life is like the seasons, in constant change, and we must change with it. (Chaotic)",
                "Greater Good. It is each person's responsibility to make the most happiness for the whole tribe. (Good)",
                "Honor. If I dishonor myself, I dishonor my whole clan. (Lawful)",
                "Might. The strongest are meant to rule. (Evil)",
                "Nature. The natural world is more important than all the constructs of civilization. (Neutral)",
                "Glory. I must earn glory in battle, for myself and my clan. (Any)"
            );
            b = ideal[Math.floor(Math.random() * ideal.length)];
            bond.push(
                "My family, clan, or tribe is the most important thing in my life, even when they are far from me.",
                "An injury to the unspoiled wilderness of my home is an injury to me.",
                "I will bring terrible wrath down on the evildoers who destroyed my homeland.",
                "I am the last of my tribe, and it is up to me to ensure their names enter legend.",
                "I suffer awful visions of a coming disaster and will do anything to prevent it.",
                "It is my duty to provide children to sustain my tribe."
            );
            c = bond[Math.floor(Math.random() * bond.length)];
            if (t_athl == false){npc.athl += npc.prof;}
            t_athl = true;
            if (t_surv == false){npc.surv += npc.prof;}
            t_surv = true;
            npc.proficiencies.push();
            npc.inventory.push("outlander staff, a trophy from an animal you killed, belt pouch containing 10 gp, a hunting trap and a set of traveler's clothes.");
            break;
        case "Phlan Insurgent":
            lang3 = 'Common';
            pTrait.push(
                "My patience knows no bounds, so long as my goal is in sight.",
                "In life and in struggle, the ends justify my actions.",
                "If you aren't helping me, you'd best at least stay out of my way.",
                "I long for the life that was taken away from me.",
                "Friends and family perished, tragically, before my eyes. I hope never to undergo that again.",
                "Making the right choices in life are important to me. The choices I make might save not just my life, but the lives of others as well.",
                "I can never allow my foes to get the drop on me.",
                "Time is a precious resource that I must spend wisely."
            );
            a = pTrait[Math.floor(Math.random() * pTrait.length)];
            flaw.push(
                "I have no respect for those who flee. I harbor a deep grudge against the citizens who abandoned Phlan.",
                "Ale is the only way I can escape the desperation of my circumstances.",
                "It doesn't take much to get me into a fight.",
                "Being an insurgent means doing things that aren't always ethical. I'm still learning to live with that.",
                "My desire to liberate Phlan oftentimes clouds my judgement, despite my best efforts.",
                "I relentlessly despise the Maimed Virulence and his allies. I'd abandon other goals in order to strike out at them."
            );
            d = flaw[Math.floor(Math.random() * flaw.length)];
            ideal.push(
                "Leadership: The oppressed need someone to inspire them to courageous acts. (Good)",
                "Unpredictability: Keeping the enemy guessing and off-balance is my tactical strength. (Chaos)",
                "Determination: Threats to my home must be eliminated at all costs. (Any)",
                "Freedom: Those who are enslaved and unjustly imprisoned deserve my aid. (Good)",
                "Resourcefulness: Our wits are our most valuable resource in troubled times. (Any)",
                "Unity: Working together, we can overcome all obstacles, even the most seemingly insurmountable ones. (Any)"
            );
            b = ideal[Math.floor(Math.random() * ideal.length)];
            bond.push(
                "I'll never let my fellow insurgents down. They are my only remaining friends.",
                "I was separated from a loved one during my escape from town. I will find them.",
                "One of the Tears of the Virulence was a trusted friend, until the day they betrayed the city. They will pay harshly for their transgressions.",
                "An item I hold close is my last remaining connection to the family I lost during the fall.",
                "The dragon who took my past life away from me will feel the full extent of my vengeance.",
                "The knowledge in Mantor's Library is an irreplaceable treasure that must be protected."
            );
            c = bond[Math.floor(Math.random() * bond.length)];
            if (t_stea == false){npc.stea += npc.prof;}
            t_stea = true;
            if (t_surv == false){npc.surv += npc.prof;}
            t_surv = true;
            npc.proficiencies.push();
            npc.inventory.push("A bag of caltrops (20), a small trinket that connects you to the life you once had before the occupation of Phlan, a healer's kit, a set of dark common clothes that includes a cloak and hood, and a belt pouch containing 5 gp.");
            break;
        case "Phlan Refugee":
            lang = ["Dwarvish", "Elvish", "Giant", "Gnomish", "Goblin", "Halfling", "Orc"];
            lang3 = 'Common';
            lang1 = lang[Math.floor(Math.random() * lang.length)];
            pTrait.push(
                "I may have lost everything I worked for most of my life, but there's work to be done. No time to linger on the past.",
                "I worked hard to get where I am and I refuse to let a little hardship stop me from succeeding.",
                "I protect those around me. You never know when one of them will be useful.",
                "I have always gotten ahead by giving. Why change now?",
                "I prepare for everything. It paid off in Phlan and it will pay off again.",
                "I will reclaim my home. Though the path may be long, I will never give up hope.",
                "I never cared for personal hygiene and am amazed that it bothers others.",
                "I am always willing to volunteer my services, just as long as don't have to do anything."
            );
            a = pTrait[Math.floor(Math.random() * pTrait.length)];
            flaw.push(
                "I used the lives of children to facilitate my escape from Phlan.",
                "I am a sucker for the underdog, and always bet on the losing team.",
                "I am incapable of standing up for myself.",
                "I will borrow money from friends with no intention to repay it.",
                "I am unable to keep secrets. A secret is just an untold story.",
                "When something goes wrong, it's never my fault."
            );
            d = flaw[Math.floor(Math.random() * flaw.length)];
            ideal.push(
                "Justice: Corruption brought Phlan down. I will not tolerate that any longer. (Lawful)",
                "Acceptance: Stability is a myth. To think you can control your future is futile. (Chaotic)",
                "Hope: I am guided by a higher power and I trust that everything will be right in the end. (Good)",
                "Restraint: I hate those who caused my loss. It is all I can do not to lash out at them. (Any)",
                "Strength: As shown in Phlan, the strong survive. If you are weak you deserve what you get. (Evil)",
                "Openness: I am always willing to share my life story with anyone who will listen. (Any)"
            );
            b = ideal[Math.floor(Math.random() * ideal.length)];
            bond.push(
                "I have the chance at a new life and this time I am going to do things right.",
                "The Lord Regent brought this suffering upon his people. I will see him brought to justice.",
                "I await the day I will be able to return to my home in Phlan.",
                "I will never forget the debt owed to Glevith of the Welcomers. I will be ready to repay that debt when called upon.",
                "There was someone I cared about in Phlan, I will find out what happened to them.",
                "Some say my life wasn't worth saving, I will prove them wrong."
            );
            c = bond[Math.floor(Math.random() * bond.length)];
            if (t_athl == false){npc.athl += npc.prof;}
            t_athl = true;
            if (t_insi == false){npc.insi += npc.prof;}
            t_insi = true;
            npc.proficiencies.push();
            npc.inventory.push("A set of artisan's tools (one of your choice), a token of the life you once knew, a set of traveler's clothes, and a belt pouch containing 15 gp");
            break;
        case "Pirate":
            lang3 = 'Common';
            pTrait.push(
                "I always have a plan for what to do when things go wrong.",
                "I am incredibly slow to trust, those who seem fairest often have to most to hide.",
                "I don't pay attention to the risks, never tell me the odds.",
                "I am always calm, no after the situation. I never raise my voice or let my emotions control me.",
                "My freinds know they can rely on me, no matter what.",
                "I stretch the truth for the sake of a good story.",
                "To me a tavern brawl is a nice way to get to know a new city.",
                "I enjoy sailing into new ports and making new friends over a flagon of ale."
            );
            a = pTrait[Math.floor(Math.random() * pTrait.length)];
            flaw.push(
                "An innocent person is in prison for a crime that I committed, I'm ok with that.",
                "If there's a plan ill forget it. If I don't forget it, i will ignore it.",
                "When i see something valuable i cant think about anything but how to steal it.",
                "Once someone questions my courage i never back down, no matter how dangerous the situation.",
                "I cant help but to pocket loose coins and other trinkets that i come across.",
                "My pride will probably lead to my destruction."
            );
            d = flaw[Math.floor(Math.random() * flaw.length)];
            ideal.push(
                "Honour. I don't steal from others in the trade. (Lawful)",
                "Charity. I steal from the wealthy to help those in need. (Good)",
                "Greed. I will do whatever it takes to become wealthy. (Evil)",
                "Freedom. The sea is freedom, the freedom to go anywhere and do anything. (Chaotic)",
                "Mastery. I am a predator and the other ships are my prey. (Evil)",
                "People. I'm committed to my crewmates not ideals. (Neutral)"
            );
            b = ideal[Math.floor(Math.random() * ideal.length)];
            bond.push(
                "I'm loyal to my captain first everything else second.",
                "The ship is most important, crewmates and captains come and go.",
                "In a harbour town i have a paramour whose eyes nearly stole me from the sea.",
                "Something important was taken from me. I aim to get it back.",
                "I will become the greatest pirate who ever lived.",
                "Someone i loved died because of a mistake that i made. That will never happen again."
            );
            c = bond[Math.floor(Math.random() * bond.length)];
            if (t_athl == false){npc.athl += npc.prof;}
            t_athl = true;
            if (t_perc == false){npc.perc += npc.prof;}
            t_perc = true;
            npc.proficiencies.push();
            npc.inventory.push(' a flask, grappling hook, a rapier');
            break;
        case "Sage":
            lang = ["Dwarvish", "Elvish", "Giant", "Gnomish", "Goblin", "Halfling", "Orc"];
            lang3 = 'Common';
            lang1 = lang[Math.floor(Math.random() * lang.length)];
            lang2 = lang[Math.floor(Math.random() * lang.length)];
            pTrait.push(
                "I use polysyllabic words that convey the impression of great erudition.",
                "I've read every book in the world's greatest libraries or I like to boast that I have.",
                "I'm used to helping out those who aren't as smart as I am, and I patiently explain anything and everything to others.",
                "There's nothing I like more than a good mystery.",
                "I'm willing to listen to every side of an argument before I make my own judgment.",
                "I . . . speak . . . slowly . . . when talking . . . to idiots, . . . which . . . almost . . . everyone . . . is . . . compared . . . to me.",
                "I am horribly, horribly awkward in social situations.",
                "I'm convinced that people are always trying to steal my secrets."
            );
            a = pTrait[Math.floor(Math.random() * pTrait.length)];
            flaw.push(
                "I am easily distracted by the promise of information.",
                "Most people scream and run when they see a demon. I stop and take notes on its anatomy.",
                "Unlocking an ancient mystery is worth the price of a civilization.",
                "I overlook obvious solutions in favor of complicated ones.",
                "I speak without really thinking through my words, invariably insulting others.",
                "I can't keep a secret to save my life, or anyone else's."
            );
            d = flaw[Math.floor(Math.random() * flaw.length)];
            ideal.push(
                "Knowledge: The path to power and self-improvement is through knowledge. (Neutral)",
                "Beauty: What is beautiful points us beyond itself toward what is true. (Good)",
                "Logic: Emotions must not cloud our logical thinking. (Lawful)",
                "No Limits: Nothing should fetter the infinite possibility inherent in all existence. (Chaotic)",
                "Power: Knowledge is the path to power and domination. (Evil)",
                "Self-Improvement: The goal of a life of study is the betterment of oneself. (Any)"
            );
            b = ideal[Math.floor(Math.random() * ideal.length)];
            bond.push(
                "It is my duty to protect my students.",
                "I have an ancient text that holds terrible secrets that must not fall into the wrong hands.",
                "I work to preserve a library, university, scriptorium, or monastery.",
                "My life's work is a series of tomes related to a specific field of lore.",
                "I've been searching my whole life for the answer to a certain question.",
                "I sold my soul for knowledge. I hope to do great deeds and win it back."
            );
            c = bond[Math.floor(Math.random() * bond.length)];
            if (t_arca == false){npc.arca += npc.prof;}
            t_arca = true;
            if (t_hist == false){npc.hist += npc.prof;}
            t_hist = true;
            npc.proficiencies.push();
            npc.inventory.push('A quill, a belt pouch containing 10 gp, a small knife, a bottle of black ink, a letter from a dead colleague posing a question which you have not yet been able to answer and a set of common clothes.');
            break;
        case "Sailor":
            lang3 = 'Common';
            pTrait.push(
                "My friends know they can rely on me, no matter what.",
                "I work hard so that I can play hard when the work is done.",
                "I enjoy sailing into new ports and making new friends over a flagon of ale.",
                "I stretch the truth for the sake of a good story.",
                "To me, a tavern brawl is a nice way to get to know a new city.",
                "I never pass up a friendly wager.",
                "My language is as foul as an otyugh nest.",
                "I like a job well done, especially if I can convince someone else to do it."
            );
            a = pTrait[Math.floor(Math.random() * pTrait.length)];
            flaw.push(
                "I follow orders, even if I think they're wrong.",
                "I'll say anything to avoid having to do extra work.",
                "Once someone questions my courage, I never back down no matter how dangerous the situation.",
                "Once I start drinking, it's hard for me to stop.",
                "I can't help but pocket loose coins and other trinkets I come across.",
                "My pride will probably lead to my destruction."
            );
            d = flaw[Math.floor(Math.random() * flaw.length)];
            ideal.push(
                "Respect: The thing that keeps a ship together is mutual respect between captain and crew. (Good)",
                "Fairness: We all do the work, so we all share in the rewards. (Lawful)",
                "Freedom: The sea is freedom-the freedom to go anywhere and do anything. (Chaotic)",
                "Mastery: I'm a predator, and the other ships on the sea are my prey. (Evil)",
                "People: I'm committed to my crewmates, not to ideals. (Neutral)",
                "Aspiration: Someday I'll own my own ship and chart my own destiny. (Any)"
            );
            b = ideal[Math.floor(Math.random() * ideal.length)];
            bond.push(
                "I'm loyal to my captain first, everything else second.",
                "The ship is most important , crewmates and captains come and go.",
                "I'll always remember my first ship.",
                "In a harbor town, I have a paramour whose eyes nearly stole me from the sea.",
                "I was cheated out of my fair share of the profits, and I want to get my due.",
                "Ruthless pirates murdered my captain and crewmates, plundered our ship, and left me to die. Vengeance will be mine."
            );
            c = bond[Math.floor(Math.random() * bond.length)];
            if (t_athl == false){npc.athl += npc.prof;}
            t_athl = true;
            if (t_perc == false){npc.perc += npc.prof;}
            t_perc = true;
            npc.proficiencies.push();
            npc.inventory.push('A belaying pin (club), 50 feet of silk rope, a lucky charm such as a rabbit foot or a small stone with a hole in the center (or you may roll for a random trinket on the Trinkets table in chapter 5), a set of common clothes, and a belt pouch containing 10 gp.');
            break;
        case "Secret Identity":
            lang3 = 'Common';
            pTrait.push(
                "Despite its problems, I love Hillsfar. It's the greatest city in the world, the only one for me.",
                "I move from place to place, never staying anywhere long and leaving nothing behind.",
                "I think flattery is the best way to direct attention away from me.",
                "I don't make friends easily. They're a liability I cannot afford.",
                "Risk and danger are exhilarate me. Pulling off schemes and deceptions is a rush.",
                "The First Lord is right, humans are superior. I really admire them, despite the atrocities.",
                "I avoid people of my own race, as well as things associated with my race, lest they give me away.",
                "I live for the Arena. I admire gladiators and enjoy the thrill of blood on the sands!"
            );
            a = pTrait[Math.floor(Math.random() * pTrait.length)];
            flaw.push(
                "After years of denying who I am, I now despise myself and other members of my pathetic race.",
                "Years of hiding have made me somewhat paranoid. I trust no one.",
                "I've been lying so often and for so long that I can't help it anymore. I frequently lie for no reason at all.",
                "I am ashamed. I failed to protect a member of my family who was seized and thrown into the Arena.",
                "I am struggling with maintaining my secret identity. I subconsciously want to get caught and therefore sometimes let my secret identity slip.",
                "Years of successfully deceiving others have made me cocky. I think no one can see through my lies."
            );
            d = flaw[Math.floor(Math.random() * flaw.length)];
            ideal.push(
                "Quisling: Supporting the rulers of the land and following the laws is the road to salvation. (Lawful)",
                "Scofflaw: The laws and lawmakers are corrupt. I follow laws only when it suits me. (Chaotic)",
                "Optimist: Everyone is basically good. Though the government is misguided, it will all be okay. (Any)",
                "Secretive: I am in the habit of not talking about myself. My business is none of yours. (Any)",
                "Heroic: I do everything I can to help non-humans, regardless of the personal cost to me. (Good)",
                "Depraved: I have lost my moral compass. The ends justify most any means. (Evil)"
            );
            b = ideal[Math.floor(Math.random() * ideal.length)];
            bond.push(
                "The humans of Hillsfar have inflicted terrible harm on me, my family, and my race. I will have revenge.",
                "I am part of an underground network that smuggles non-humans into and out of the city.",
                "I am a partisan. I commit minor acts of defiance against the First Lord and Red Plumes when I can.",
                "I am a spy. I report on events in and around Hillfar.",
                "My secret identity is the only thing protecting me from the Arena. I will stop at nothing to maintain it.",
                "I am madly in love with a human who does not know my true identity, and I fear rejection if I reveal it."
            );
            c = bond[Math.floor(Math.random() * bond.length)];
            if (t_dece == false){npc.dece += npc.prof;}
            t_dece = true;
            if (t_stea == false){npc.stea += npc.prof;}
            t_stea = true;
            npc.proficiencies.push();
            npc.inventory.push('A disguise kit, a forgery kit, a set of common clothes, a belt pouch, 5 gp');
            break;
        case "Shade Fanatic":
            lang3 = 'Common';
            lang1 = 'Netherese';
            pTrait.push(
                "I am a bully; I try to hide it though.",
                "I let my actions speak for themselves.",
                "I am important; I will not let anyone forget that.",
                "You are either with me or against me.",
                "I know it is only a time before I am betrayed by those I care for.",
                "I never understand why people get so emotional.",
                "They are out to get me. It is only my cunning that keeps me ahead of them.",
                "Everyone has a choice, the one I make is always right though."
            );
            a = pTrait[Math.floor(Math.random() * pTrait.length)];
            flaw.push(
                "I always over exaggerate my abilities.",
                "I cannot bear to let those I care for out of my sight.",
                "I am incapable of standing up for myself.",
                "The group I am with has committed atrocities; I am always worried their actions will become public.",
                "I always enjoy a good mug of ale ... or five.",
                "I know what I do is wrong, but am afraid to speak up about it."
            );
            d = flaw[Math.floor(Math.random() * flaw.length)];
            ideal.push(
                "Hope: I know even if I need do evil acts, history will be my redemption. (Chaos)",
                "Dedicated: I can do anything I put my mind to (Lawful)",
                "Exciting: I have found the truth of the Shadovar and want to share it with everyone. (Any)",
                "Frugal: I horde my possessions knowing that someday I will be called upon to give everything I have to the cause (Any)",
                "Eloquent: I use my words to sway others to my beliefs. (Any)",
                "Compassionate: It is through love that others will join In our cause. (Good)"
            );
            b = ideal[Math.floor(Math.random() * ideal.length)];
            bond.push(
                "They say the Shade broke the bonds of mortality; I want to find out how.",
                "The whispers in my head remind me that there is power to be found in the shadows.",
                "For the glory of Netheril, I will grow in power.",
                "I once lived in Hillsfar, I was chased out before I was able to say farewell.",
                "My true love was a killed by the Red Plumes; I plot to make them suffer.",
                "I had a loved one die in the arena at Hillsfar; I am out to prove I am stronger than them!"
            );
            c = bond[Math.floor(Math.random() * bond.length)];
            if (t_dece == false){npc.dece += npc.prof;}
            t_dece = true;
            if (t_inti == false){npc.inti += npc.prof;}
            t_inti = true;
            npc.proficiencies.push();
            npc.inventory.push('A forgery kit, a transparent cylinder of shadow that has no opening, a signet ring, a set of fine clothes, and 15 gp.');
            break;
        case "Soldier":
            lang3 = 'Common';
            pTrait.push(
                "I am always polite and respectful.",
                "I am haunted by memories of war. i can't get the images of violence out of my mind.",
                "I have lost too many friends and i am slow to make a new one.",
                "I am full of inspiring and cautionary tales from my military experience which is relevant to almost every combat situation.",
                "I can stare down a hell hound without flinching.",
                "I enjoy being strong and i like breaking things.",
                "I have a crude sense of humor.",
                "I face problems head-on. A simple, direct solution is the best path to success."
            );
            a = pTrait[Math.floor(Math.random() * pTrait.length)];
            flaw.push(
                "The monstrous enemy which we faced in battle still leaves me quivering with fear.",
                "I have little respect for anyone who is not a proven warrior.",
                "I made a terrible mistake in battle that cost many lives and I would do anything to keep that mistake secret.",
                "My hatred of my enemies is blind and unreasoning.",
                "I obey the law, even if the law causes misery.",
                "I'd rather eat my armor than admit when I'm wrong."
            );
            d = flaw[Math.floor(Math.random() * flaw.length)];
            ideal.push(
                "Greater Good. Our lot is to lay down our lives in defense of others. (Good)",
                "Responsibility. I do what I must and obey just authority. (Lawful)",
                "Independence. When people follow orders blindly, they embrace a kind of tyranny. (Chaotic)",
                "Might. In life as in war, the stronger force wins. (Evil)",
                "Live and Let Live. Ideals aren't worth killing over or going to war for. (Neutral)",
                "Nation. My city, nation, or people are all that matter. (Any)"
            );
            b = ideal[Math.floor(Math.random() * ideal.length)];
            bond.push(
                "I would still lay down my life for the people I served with.",
                "Someone saved my life on the battlefield. To this day, I will never leave a friend behind.",
                "My honor is my life.",
                "I'll never forget the crushing defeat my company suffered or the enemies who dealt it.",
                "Those who fight beside me are those worth dying for.",
                "I fight for those who cannot fight for themselves."
            );
            c = bond[Math.floor(Math.random() * bond.length)];
            if (t_athl == false){npc.athl += npc.prof;}
            t_athl = true;
            if (t_inti == false){npc.inti += npc.prof;}
            t_inti = true;
            npc.proficiencies.push();
            npc.inventory.push('a set of bone dice or deck of cards, a belt pouch containing 10 gp, An insignia of rank, a set of common clothes, a trophy taken from a fallen enemy (a dagger, broken blade, or piece of a banner).');
            break;
        case "Spy":
            lang3 = 'Common';
            pTrait.push(
                "I always have an aloof smile plastered on my face, no matter the situation.",
                "I am uncomfortable in open spaces, where I'm too exposed.",
                "I change my attitude and personality to blend in with the people around me.",
                "I always check the escape routes of every building I enter.",
                "I have trouble trusting people, especially those closest to me.",
                "I have a habit of listening in on the conversations of others.",
                "I prefer not to talk unless it's necessary.",
                "I write anything I think is important in code."
            );
            a = pTrait[Math.floor(Math.random() * pTrait.length)];
            flaw.push(
                "I have no problem with betraying people who trust me.",
                "Some people want to kill me, to make sure I never tell a secret they'd rather have untold.",
                "I've worn so many disguises, I've lost sight of who I truly am.",
                "I never share secrets with anyone.",
                "I don't save people who can't save themselves. The Game is harsh and the stupid and flamboyant tend to die the first.",
                "I never forget an insult, and I bide my time for revenge."
            );
            d = flaw[Math.floor(Math.random() * flaw.length)];
            ideal.push(
                "Exposure: The evils of the world must be exposed. (Good)",
                "Blackmail: Ooh, isn't this a dirty secret...? Shame if it fell into the wrong hands: mine. (Evil)",
                "Contract: The information is bound to the person who hires me, no one else may see it. (Lawful)",
                "The Game: If this came out to the public... That noble would be done for... That one too... Oh what fun! (Chaotic)",
                "Self: The information is good, coming out alive better, the coin I'll get from this, totally worth it. (Neutral)",
                "Knowledge: He knows something, and I need to know it too. (Any)"
            );
            b = ideal[Math.floor(Math.random() * ideal.length)];
            bond.push(
                "I fell in love with someone I was spying on.",
                "I had some colleagues in a spy ring I used to be a part of that I trade information with from time to time.",
                "I have secrets that I've uncovered that should never see the light of day.",
                "One of my friends was hanged for treason. My helplessness to aid him still haunts me today.",
                "A good person was ruined with information I gathered on him. I am trying to atone.",
                "A servant in a castle saw me spying on her lord. I fled and hope I will never have to see her face again."
            );
            c = bond[Math.floor(Math.random() * bond.length)];
            if (t_dece == false){npc.dece += npc.prof;}
            t_dece = true;
            if (t_stea == false){npc.stea += npc.prof;}
            t_stea = true;
            npc.proficiencies.push();
            npc.inventory.push('A disguise kit, a dagger, a small mirror, a small crumpled note with secrets you stole (could be battle plans, blackmail material, or coordinates to an unknown place), a set of common clothes, and a small pouch with 15gp.');
            break;
        case "Student Of Magic":
            lang3 = 'Common';
            pTrait.push(
                "I tend to talk about magic as if everyone understands it, and cannot comprehend the ignorance of those who do not.",
                "I consider my Master to have been a font of wisdom, and have a quote from him for almost every situation.",
                "My Master taught me the value of secrets, I keep them very well and have a few of my own.",
                "I have a grand magical theory that I can't wait to tell other people about.",
                "I am seldom seen without my nose stuck firmly in a book or scroll.",
                "When exposed to some new piece of magic, I can't help but try to figure out what it does and how it works.",
                "I am extremely proud of the school I attended, and will boast of it often.",
                "I have no patience for ridiculous superstitions about magic."
            );
            a = pTrait[Math.floor(Math.random() * pTrait.length)];
            flaw.push(
                "People who are superstitious about Magic are idiots, and not worth my time.",
                "I look down on anyone who was not properly trained in the Magic they wield.",
                "If my Master calls me, I'll abandon what I'm doing to go to him.",
                "I can get so distracted by the mystery and wonder of magic, that I can forget I'm supposed to be fighting that other Wizard.",
                "A scandal prevents me from returning to my place of education, I'm trying to stay ahead of the rumors.",
                "I believe that the world would be better off if Magic-users ran everything."
            );
            d = flaw[Math.floor(Math.random() * flaw.length)];
            ideal.push(
                "Magic For Magic's Sake I seek to study and improve Magic, simply for the betterment of Magic (Neutral)",
                "Greater Good Magic should be used to protect and improve the lives of the common people (Good)",
                "Power Through my Power, I will conquer and gain victory (Evil)",
                "Tradition I will uphold the standards of Magic that were taught to me by my Master (Lawful)",
                "Independence I have cast off the shackles of my tutelage and will seek my own path (Chaotic)",
                "Spirit I will make my Master proud (Any)"
            );
            b = ideal[Math.floor(Math.random() * ideal.length)];
            bond.push(
                "I often think of the family I left behind when I became an apprentice, I would like to find them some day.",
                "I had a romantic relationship with a fellow student, I still love them.",
                "I am utterly loyal to my Master, everything else comes second.",
                "I am hunting the one who is responsible for the end of my apprenticeship.",
                "I had a rival all throughout my training, we still compete.",
                "I idolize a historical magic user, and measure my accomplishments against theirs."
            );
            c = bond[Math.floor(Math.random() * bond.length)];
            if (t_arca == false){npc.arca += npc.prof;}
            t_arca = true;
            ranStat.push('hist', 'reli');
            rs1 = ranStat[Math.floor(Math.random() * ranStat.length)];
            if (rs1 == 'hist' && t_hist == false) {npc.hist += npc.prof; t_hist = true;}
            if (rs1 == 'hist' && t_hist == true) {npc.reli += npc.prof; t_reli = true;}
            if (rs1 == 'reli' && t_reli == false) {npc.reli += npc.prof; t_reli = true;}
            if (rs1 == 'reli' && t_reli == true) {npc.hist += npc.prof; t_hist = true;}
            npc.proficiencies.push();
            npc.inventory.push("A bottle of black ink, a quill, 3 rolls of blank parchment, Potionmaker's Lab, 1d4 Books (about Arcana), a letter from your Master, a set of apprentice robes, and a belt pouch containing 20gp");
            break;
        case "Trade Sheriff":
            lang3 = 'Common';
            lang1 = 'Elvish';
            pTrait.push(
                "I am always polite and respectful.",
                "I let my actions speak for themselves.",
                "I am haunted by my past having seen the murder of a close friend or family member and it is the one case I always needed to solve but have not been able to.",
                "I am quick to judge and slow to vindicate.",
                "I can be very persuasive and am able to ask questions where others might not be able to.",
                "I have a quirky personality that seems to take others off their guard.",
                "My sense of humor is considered by most to be awkward.",
                "Everyone has a choice, and they can always make the right choice: mine!"
            );
            a = pTrait[Math.floor(Math.random() * pTrait.length)];
            flaw.push(
                "I always over exaggerate my abilities.",
                "I cannot bear to let those I care for out of my sight.",
                "I took a bribe to tank an investigation and I would do anything to keep it secret.",
                'I have little respect for those that are of "low" intelligence/race.',
                "I always enjoy a good mug of ale or five to cover up my past.",
                "I speak for the First Lord of Hillsfar and make sure everyone knows it."
            );
            d = flaw[Math.floor(Math.random() * flaw.length)];
            ideal.push(
                "Hope: My job is to speak for the victim. (Good)",
                "Dedicated: Once I start an investigation, until told to do so, I do not quit, no matter where it leads. (Lawful)",
                "Nation: My city, nation, or people are all that matter. (Any)",
                "Mercenary: When I do investigations, I expect answers immediately. (Any)",
                "Eloquent: I use my words to sway others to give me answers. (Good)",
                "Might: It is through threats and force that I get my answers. (Lawful)"
            );
            b = ideal[Math.floor(Math.random() * ideal.length)];
            bond.push(
                "To this day an unsolved case will always leave me haunted and bother me.",
                "Through the might of my personality I will solve an investigation or puzzle.",
                "It is my right to believe what I will, just try and stop me.",
                "I need to prove my worth to my fellow sheriffs.",
                "Someone I cared for died under suspicious circumstances. I will find out what happened to them and bring their killer to justice.",
                "I speak for those that cannot speak for themselves."
            );
            c = bond[Math.floor(Math.random() * bond.length)];
            if (t_inve == false){npc.inve += npc.prof;}
            t_inve = true;
            if (t_pers == false){npc.pers += npc.prof;}
            t_pers = true;
            npc.proficiencies.push();
            npc.inventory.push("Thieves' tools, a gray cloak, Sheriff's insignia (badge) a set of fine clothes, and 17 gp");
            break;
        case "Urban Bounty Hunter":
            lang3 = 'Common';
            pTrait.push(
                "I always have a plan for what to do when things go wrong.",
                "I am always calm, no matter what the situation. I never raise my voice or let my emotions control me.",
                "The first thing I do in a new place is note the locations of everything valuable-or where such things could be hidden.",
                "I would rather make a new friend than a new enemy.",
                "I am incredibly slow to trust. Those who seem the fairest often have the most to hide.",
                "I don't pay attention to the risks in a situation. Never tell me the odds.",
                "The best way to get me to do something is to tell me I can't do it.",
                "I blow up at the slightest insult."
            );
            a = pTrait[Math.floor(Math.random() * pTrait.length)];
            flaw.push(
                "When I see something valuable, I can't think about anything but how to steal it.",
                "When faced with a choice between money and my friends, I usually choose the money.",
                "If there's a plan, I'll forget it. If I don't forget it, I'll ignore it.",
                "I have a tell that reveals when I'm lying.",
                "I turn tail and run when things look bad.",
                "An innocent person is in prison for a crime that I committed. I'm okay with that."
            );
            d = flaw[Math.floor(Math.random() * flaw.length)];
            ideal.push(
                "Honor: I don't steal from others in the trade. (Lawful)",
                "Freedom: Chains are meant to be broken, as are those who would forge them. (Chaotic)",
                "Charity: I steal from the wealthy so that I can help people in need. (Good)",
                "Greed: I will do whatever it takes to become wealthy. (Evil)",
                "People: I'm loyal to my friends, not to any ideals, and everyone else can take a trip down the Styx for all I care. (Neutral)",
                "Redemption: There's a spark of good in everyone. (Good)"
            );
            b = ideal[Math.floor(Math.random() * ideal.length)];
            bond.push(
                "I'm trying to pay off an old debt I owe to a generous benefactor.",
                "My ill-gotten gains go to support my family.",
                "Something important was taken from me, and I aim to steal it back.",
                "I will become the greatest thief that ever lived.",
                "I'm guilty of a terrible crime. I hope I can redeem myself for it.",
                "Someone I loved died because of a mistake I made. That will never happen again."
            );
            c = bond[Math.floor(Math.random() * bond.length)];
            rscheck(2);
            takeoutSkill(rs1);
            takeoutSkill(rs2);
            npc.proficiencies.push();
            npc.inventory.push('A set of clothes appropriate to your duties and a pouch containing 20 gp');
            break;
        case "Urchin":
            lang3 = 'Common';
            pTrait.push(
                "I hide scraps of food and trinkets away in my pockets.",
                "I ask a lot of questions.",
                "I like to squeeze into small places where no one else can get to me.",
                "I sleep with my back to a wall or tree, with everything I own wrapped in a bundle in my arms.",
                "I eat like a pig and have bad manners.",
                "I think anyone who's nice to me is hiding evil intent.",
                "I don't like to bathe.",
                "I bluntly say what other people are hinting at or hiding."
            );
            a = pTrait[Math.floor(Math.random() * pTrait.length)];
            flaw.push(
                "If I'm outnumbered, I will run away from a fight.",
                "Gold seems like a lot of money to me, and I'll do just about anything for more of it.",
                "I will never fully trust anyone other than myself.",
                "I'd rather kill someone in their sleep then fight fair.",
                "It's not stealing if I need it more than someone else.",
                "People who can't take care of themselves get what they deserve."
            );
            d = flaw[Math.floor(Math.random() * flaw.length)];
            ideal.push(
                "Respect: All people, rich or poor, deserve respect. (Good)",
                "Community: We have to take care of each other, because no one else is going to do it. (Lawful)",
                "Change: The low are lifted up, and the high and mighty are brought down. Change is the nature of things. (Chaotic)",
                "Retribution: The rich need to be shown what life and death are like in the gutters. (Evil)",
                "People: I help the people who help me-that's what keeps us alive. (Neutral)",
                "Aspiration: I'm going to prove that I'm worthy of a better life. (Any)"
            );
            b = ideal[Math.floor(Math.random() * ideal.length)];
            bond.push(
                "My town or city is my home, and I'll fight to defend it.",
                "I sponsor an orphanage to keep others from enduring what I was forced to endure.",
                "I owe my survival to another urchin who taught me to live on the streets.",
                "I owe a debt I can never repay to the person who took pity on me.",
                "I escaped my life of poverty by robbing an important person, and I'm wanted for it.",
                "No one else should have to endure the hardships I've been through."
            );
            c = bond[Math.floor(Math.random() * bond.length)];
            if (t_slei == false){npc.slei += npc.prof;}
            t_slei = true;
            if (t_stea == false){npc.stea += npc.prof;}
            t_stea = true;
            npc.proficiencies.push();
            npc.inventory.push('a belt pouch containing 10 gp, a set of common clothes, a token to remember your parents by, a d&d 5e urchin pet mouse, a map of the city you grew up in and also a small knife.');
            break;
        case "Uthgardt Tribe Member":
            lang = ["Dwarvish", "Elvish", "Giant", "Gnomish", "Goblin", "Halfling", "Orc"];
            lang3 = 'Common';
            lang1 = lang[Math.floor(Math.random() * lang.length)];
            pTrait.push(
                "Everything I do, I do gracefully and deliberately, and with complete confidence. (Oketra)",
                "Nothing can shake my rock-hard focus. (Oketra)",
                "When I am at peace, I am an oasis of perfect calm in the world. When I am roused to anger, I am an embodiment of terror. (Kefnet)",
                "I enjoy teasing acolytes and initiates with juicy tidbits of knowledge wrapped up in fiendishly difficult puzzles. (Kefnet)",
                "I have the utmost faith in myself and my abilities. (Rhonas)",
                "I get restless when life in the city feels too tame, too safe. (Rhonas)",
                "I enjoy solitude as an opportunity to plan my victory. (Bontu)",
                "I use satire as a way to undermine the teachings of the other gods. (Bontu)",
                "I love, fight, and feast with equal zeal. (Hazoret)",
                "I think of those in my care as my family, in a way that most people have trouble understanding. (Hazoret)"
            );
            a = pTrait[Math.floor(Math.random() * pTrait.length)];
            flaw.push(
                "I am in love with an initiate, and I want to shield this person from death in the trials.",
                "I secretly wish I had not been chosen as a vizier, so I could participate in the trials as an initiate.",
                "I secretly question whether the gods care at all about us or what we do.",
                "A vizier of another god seeks my death in retribution for a past insult.",
                "I am terrified of what lies beyond the Gate to the Afterlife.",
                "I secretly believe the God-Pharaoh's return will not bring blessing to this world."
            );
            d = flaw[Math.floor(Math.random() * flaw.length)];
            ideal.push(
                "Solidarity: The worthy must respect the worthy. In the afterlife, all will be united in goal and action. (Oketra)",
                "Knowledge: The worthy shall cultivate a nimble mind, so as to perceive the wonders beyond imagination that wait in the afterlife. (Kefnet)",
                "Strength: The worthy shall hone a strong body that can withstand the boundless energies of the afterlife. (Rhonas)",
                "Ambition: The worthy shall strive for greatness, for supremacy in life leads to supremacy in the afterlife. (Bontu)",
                "Zeal: The worthy shall rush to the God-Pharaoh's side with relentless passion, rising to overcome every obstacle in their way. (Hazoret)",
                "Naktamun: The life of the city is ordered according to the plan of the God-Pharaoh, and that order must be preserved at all costs."
            );
            b = ideal[Math.floor(Math.random() * ideal.length)];
            bond.push(
                "My loyalty to my companions embodies the ideal of loyalty to my god. (Oketra)",
                "The teachings of my god are more precious to me than any possession. (Kefnet)",
                "I would do anything to defend the temple of my god from any harm or desecration. (Rhonas)",
                "I am committed to the service of my god   because it's my sure ticket into the afterlife. (Bontu)",
                "I love my god and never want my service to end. (Hazoret)",
                "I have a close friend or lover who is also a vizier."
            );
            c = bond[Math.floor(Math.random() * bond.length)];
            if (t_athl == false){npc.athl += npc.prof;}
            t_athl = true;
            if (t_surv == false){npc.surv += npc.prof;}
            t_surv = true;
            npc.proficiencies.push();
            npc.inventory.push("A hunting trap, a totemic token or set of tattoos marking your loyalty to Uthgar and your tribal totem, a set of traveler's clothes, and a pouch containing 10 gp");
            break;
        case "Vizier":
            lang3 = 'Common';
            pTrait.push(
                "Everything I do, I do gracefully and deliberately, and with complete confidence. (Oketra)",
                "Nothing can shake my rock-hard focus. (Oketra)",
                "When I am at peace, I am an oasis of perfect calm in the world. When I am roused to anger, I am an embodiment of terror. (Kefnet)",
                "I enjoy teasing acolytes and initiates with juicy tidbits of knowledge wrapped up in fiendishly difficult puzzles. (Kefnet)",
                "I have the utmost faith in myself and my abilities. (Rhonas)",
                "I get restless when life in the city feels too tame, too safe. (Rhonas)",
                "I enjoy solitude as an opportunity to plan my victory. (Bontu)",
                "I use satire as a way to undermine the teachings of the other gods. (Bontu)",
                "I love, fight, and feast with equal zeal. (Hazoret)",
                "I think of those in my care as my family, in a way that most people have trouble understanding. (Hazoret)"
            );
            a = pTrait[Math.floor(Math.random() * pTrait.length)];
            flaw.push(
                "I am in love with an initiate, and I want to shield this person from death in the trials.",
                "I secretly wish I had not been chosen as a vizier, so I could participate in the trials as an initiate.",
                "I secretly question whether the gods care at all about us or what we do.",
                "A vizier of another god seeks my death in retribution for a past insult.",
                "I am terrified of what lies beyond the Gate to the Afterlife.",
                "I secretly believe the God-Pharaoh's return will not bring blessing to this world."
            );
            d = flaw[Math.floor(Math.random() * flaw.length)];
            ideal.push(
                "Solidarity: The worthy must respect the worthy. In the afterlife, all will be united in goal and action. (Oketra)",
                "Knowledge: The worthy shall cultivate a nimble mind, so as to perceive the wonders beyond imagination that wait in the afterlife. (Kefnet)",
                "Strength: The worthy shall hone a strong body that can withstand the boundless energies of the afterlife. (Rhonas)",
                "Ambition: The worthy shall strive for greatness, for supremacy in life leads to supremacy in the afterlife. (Bontu)",
                "Zeal: The worthy shall rush to the God-Pharaoh's side with relentless passion, rising to overcome every obstacle in their way. (Hazoret)",
                "Naktamun: The life of the city is ordered according to the plan of the God-Pharaoh, and that order must be preserved at all costs."
            );
            b = ideal[Math.floor(Math.random() * ideal.length)];
            bond.push(
                "My loyalty to my companions embodies the ideal of loyalty to my god. (Oketra)",
                "The teachings of my god are more precious to me than any possession. (Kefnet)",
                "I would do anything to defend the temple of my god from any harm or desecration. (Rhonas)",
                "I am committed to the service of my god   because it's my sure ticket into the afterlife. (Bontu)",
                "I love my god and never want my service to end. (Hazoret)",
                "I have a close friend or lover who is also a vizier."
            );
            c = bond[Math.floor(Math.random() * bond.length)];
            if (t_hist == false){npc.hist += npc.prof;}
            t_hist = true;
            if (t_reli == false){npc.reli += npc.prof;}
            t_reli = true;
            npc.proficiencies.push();
            npc.inventory.push("A set of artisan's tools or a musical instrument (one of your choice), a scroll of your god's teachings, a vizier's cartouche, a set of fine clothes, and a pouch containing 25 gp");
            break;
        case "Waterdhavian Noble":
            lang = ["Dwarvish", "Elvish", "Giant", "Gnomish", "Goblin", "Halfling", "Orc"];
            lang3 = 'Common';
            lang1 = lang[Math.floor(Math.random() * lang.length)];
            pTrait.push(
                "My eloquent flattery makes everyone I talk to feel like the most wonderful and important person in the world.",
                "The common folk love me for my kindness and generosity.",
                "No one could doubt by looking at my regal bearing that I am a cut above the unwashed masses.",
                "I take great pains to always look my best and follow the latest fashions.",
                "I don't like to get my hands dirty, and I won't be caught dead in unsuitable accommodations.",
                "Despite my noble birth, I do not place myself above other folk. We all have the same blood.",
                "My favor, once lost, is lost forever.",
                "If you do me an injury, I will crush you, ruin your name, and salt your fields."
            );
            a = pTrait[Math.floor(Math.random() * pTrait.length)];
            flaw.push(
                "I secretly believe that everyone is beneath me.",
                "I hide a truly scandalous secret that could ruin my family forever.",
                "I too often hear veiled insults and threats in every word addressed to me, and I'm quick to anger.",
                "I have an insatiable desire for carnal pleasures.",
                "In fact, the world does revolve around me.",
                "By my words and actions, I often bring shame to my family."
            );
            d = flaw[Math.floor(Math.random() * flaw.length)];
            ideal.push(
                "Respect: Respect is due to me because of my position, but all people regardless of station deserve to be treated with dignity. (Good)",
                "Responsibility: It is my duty to respect the authority of those above me, just as those below me must respect mine. (Lawful)",
                "Independence: I must prove that I can handle myself without the coddling of my family. (Chaotic)",
                "Power: If I can attain more power, no one will tell me what to do. (Evil)",
                "Family: Blood runs thicker than water. (Any)",
                "Noble Obligation: It is my duty to protect and care for the people beneath me. (Good)"
            );
            b = ideal[Math.floor(Math.random() * ideal.length)];
            bond.push(
                "I will face any challenge to win the approval of my family.",
                "My house's alliance with another noble family must be sustained at all costs.",
                "Nothing is more important than the other members of my family.",
                "I am in love with the heir of a family that my family despises.",
                "My loyalty to my sovereign is unwavering.",
                "The common folk must see me as a hero of the people."
            );
            c = bond[Math.floor(Math.random() * bond.length)];
            if (t_hist == false){npc.hist += npc.prof;}
            t_hist = true;
            if (t_pers == false){npc.pers += npc.prof;}
            t_pers = true;
            npc.proficiencies.push();
            npc.inventory.push('A set of fine clothes, a signet ring or brooch, a scroll of pedigree, a skin of fine zzar or wine, and a purse containing 20 gp');
            break;
    }
    if (lang1 == lang2) {
        background();
    }
    document.getElementById('bg').innerHTML = x;
    document.getElementById('Trait').innerHTML = a;
    document.getElementById('Ideal').innerHTML = b;
    document.getElementById('Bond').innerHTML = c;
    document.getElementById('Flaw').innerHTML = d;
    document.getElementById('language').innerHTML = lang3 + ' ' + lang1 + ' ' + lang2;
    return x;
}

function print() {
    playName.innerHTML = npc.name;
    race_span.innerHTML = npc.race;
    lvl_span.innerHTML = npc.lvl;
    feat_id.innerHTML = npc.feat
    hp_span.innerHTML = npc.hp;
    ac_span.innerHTML = npc.ac;
    spd_span.innerHTML = npc.spd;
    str_span.innerHTML = npc.str;
    strm_span.innerHTML = npc.strMod;
    strs_span.innerHTML = npc.strSave;
    dex_span.innerHTML = npc.dex;
    dexm_span.innerHTML = npc.dexMod;
    dexs_span.innerHTML = npc.dexSave;
    con_span.innerHTML = npc.con;
    conm_span.innerHTML = npc.conMod;
    cons_span.innerHTML = npc.conSave;
    wis_span.innerHTML = npc.wis;
    wism_span.innerHTML = npc.wisMod;
    wiss_span.innerHTML = npc.wisSave;
    int_span.innerHTML = npc.int;
    intm_span.innerHTML = npc.intMod;
    ints_span.innerHTML = npc.intSave;
    cha_span.innerHTML = npc.cha;
    cham_span.innerHTML = npc.chaMod;
    chas_span.innerHTML = npc.chaSave;
    athl_span.innerHTML = npc.athl;
    acro_span.innerHTML = npc.acro;
    slei_span.innerHTML = npc.slei;
    stea_span.innerHTML = npc.stea;
    arca_span.innerHTML = npc.arca;
    hist_span.innerHTML = npc.hist;
    inve_span.innerHTML = npc.inve;
    natu_span.innerHTML = npc.natu;
    reli_span.innerHTML = npc.reli;
    anim_span.innerHTML = npc.anim;
    insi_span.innerHTML = npc.insi;
    medi_span.innerHTML = npc.medi;
    perc_span.innerHTML = npc.perc;
    surv_span.innerHTML = npc.surv;
    dece_span.innerHTML = npc.dece;
    inti_span.innerHTML = npc.inti;
    perf_span.innerHTML = npc.perf;
    pers_span.innerHTML = npc.pers;
    document.getElementById('tool').innerHTML = npc.proficiencies;
    document.getElementById('prof').innerHTML = npc.prof;
    cls_span.innerHTML = npc.class;
    invent_span.innerHTML = npc.inventory;
}

function report() {
    console.log("str: " + npc.str + " || dex: " + dex + " || con: " + con + " || int: " + int + " || wis: " + wis + " || cha: " + cha);
    console.log('athl ' + athl + 'acro ' + acro + 'slei ' + slei + 'stea ' + stea + 'arca ' + arca + 'hist ' + hist + 'inve ' + inve + 'natu ' + natu + 'reli ' + reli + 'anim ' + anim + 'insi ' + insi + 'medi ' + medi + 'perc ' + perc + 'surv ' + surv + 'dece ' + dece + 'inti ' + inti + 'perf ' + perf + 'pers ' + pers);
}


function createChar() {
    reset();
    console.log("post reset");
    report();
    setRace();
    console.log("post set race");
    report();

    fts();
    console.log("post feats");
    report();

    selClass();
    console.log("post select class");
    askill();
    report();

    addSkills();
    console.log("post add skill");
    askill();
    report();

    /*     mods();
        console.log("post mods");
        report(); */

    console.log("LEVEL: " + npc.lvl)
    setHp();
    console.log("post production");
    report();
    mods();
    console.log(charName[0]);
    console.log("-------------------------------END-----------------------------------")
    print();

}
function randStats() {
    let x = statString[Math.floor(Math.random() * statString.length)];
    let y = statString[Math.floor(Math.random() * statString.length)];
    if(x !== y) {
        if (x == 'str') { npc.str += 1; }
        if (x == 'dex') { npc.dex += 1; }
        if (x == 'con') { npc.con += 1; }
        if (x == 'wis') { npc.wis += 1; }
        if (x == 'int') { npc.int += 1; }
        if (x == 'cha') { npc.cha += 1; }
        if (y == 'str') { npc.str += 1; }
        if (y == 'dex') { npc.dex += 1; }
        if (y == 'con') { npc.con += 1; }
        if (y == 'wis') { npc.wis += 1; }
        if (y == 'int') { npc.int += 1; }
        if (y == 'cha') { npc.cha += 1; }
    } else (
        randStats()
    );
}
function setRace() {
    let race = races[Math.floor(Math.random() * races.length)];
    
    switch (race) {
        case 'Tiefling':
            npc.int += 1;
            npc.cha += 2;
            break;
        case 'Half-Orc':
            npc.str += 2;
            npc.con += 1;
            break;
        case 'Half-Elf':
            npc.cha += 2;
            randStats();
            break;
        case 'Forest Gnome':
            npc.int += 2;
            npc.dex += 1;
            break;
        case 'Rock Gnome':
            npc.int += 2;
            npc.con += 1;
            break;
        case 'Human':
            randStats();
            break;
        case 'Lightfoot Halfling':
            npc.cha += 1;
            npc.dex += 2;
            break;
        case 'Stout Halfling':
            npc.con += 1;
            npc.dex += 2;
            break;
        case 'High Elf':
            npc.int += 1;
            npc.dex += 2;
            break;
        case 'Wood Elf':
            npc.wis += 1;
            npc.dex += 2;
            break;
        case 'Dark Elf':
            npc.cha += 1;
            npc.dex += 2;
            break;
        case 'Hill Dwarf':
            npc.spd = 25;
            npc.con += 2;
            npc.wis += 1;
            break;
        case 'Mountain Dwarf':
            npc.spd = 25;
            npc.str += 2;
            npc.con += 2;
            break;
    }
    return race;
}

function fts() {
    let feat = feats[Math.floor(Math.random() * feats.length)];
    let sa = [];
    let z;
    switch (feat) {
        case 'Alert':
            featd.innerHTML = "Always on the lookout for danger, you gain the following benefits You gain a +5 bonus to initiative. You can't be surprised while you are conscious. Other creatures don't gain advantage on attack rolls against you as a result of being hidden from you.";
            break;

        case 'Athlete':
            featd.innerHTML = " You have undergone extensive physical training to gain the following benefits: Increase your Strength or Dexterity score by 1, to a maximum of 20. When you are prone, standing up uses only 5 feet of your movement. Climbing doesn't halve your speed. You can make a running long jump or a running high jump after moving only 5 feet on foot, rather than 10 feet.";
            sa = ['str', 'dex'];
            z = sa[Math.floor(Math.random() * sa.length)];
            if (z == 'str') { npc.str += 1; }
            if (z == 'dex') { npc.dex += 1; }
            break;

        case 'Actor':
            featd.innerHTML = " Skilled at mimicry and dramatics, you gain the following benefits: Increase your Charisma score by 1, to a maximum of 20. You have advantage on Charisma (Deception) and Charisma (Performance) checks when trying to pass yourself off as a different person. You can mimic the speech of another person or the sounds made by other creatures. You must have heard the person speaking, or heard the creature make the sound, for at least 1 minute. A successful Wisdom (Insight) check contested by your Charisma (Deception) check allows a listener to determine that the effect is faked.";
            npc.cha += 1;
            break;

        case 'Charger':
            featd.innerHTML = "When you use your action to Dash, you can use a bonus action to make one melee weapon attack or to shove a creature. If you move at least 10 feet in a straight line immediately before taking this bonus action, you either gain a +5 bonus to the attack's damage roll (if you chose to make a melee attack and hit) or push the target up to 10 feet away from you (if you chose to shove and you succeed).";
            break;

        case 'Dungeon Delver':
            featd.innerHTML = "Alert to the hidden traps and secret doors found in many dungeons, you gain the following benefits: When you roll a Hit Die to regain hit points, the minimum number of hit points you regain from the roll equals twice your Constitution modifier (minimum of 2). You have advantage on wisdom (Perception) and Intelligence (Investigation) checks made to detect the presence of secret doors. You have advantage on saving throws made to avoid or resist traps. You have resistance to the damage dealt by traps. You can search for traps while traveling at a normal pace, instead of only at a slow pace.";
            break;

        case 'Durable':
            featd.innerHTML = "Hardy and resilient, you gain the following benefits: Increase your Constitution score by 1, to a maximum of 20.";
            npc.con += 1;
            break;

        case 'Keen Mind':
            featd.innerHTML = "You have a mind that can track time, direction, and detail with uncanny precision. You gain the following benefits. Increase your Intelligence score by 1, to a maximum of 20. You always know which way is north. You always know the number of hours left before the next sunrise or sunset. You can accurately recall anything you have seen or heard within the past month.";
            npc.int += 1;
            break;

        case 'Lightly Armored':
            featd.innerHTML = "You have trained to master the use of light armor, gaining the following benefits: Increase your Strength or Dexterity score by 1, to a maximum of 20. You gain proficiency with light armor.";
            sa = ['str', 'dex'];
            z = sa[Math.floor(Math.random() * sa.length)];
            if (z == 'str') { npc.str += 1; }
            if (z == 'dex') { npc.dex += 1; }
            break;

        case 'Lucky':
            featd.innerHTML = "You have inexplicable luck that seems to kick in at just the right moment. You have 3 luck points. Whenever you make an attack roll, an ability check, or a saving throw, you can spend one luck point to roll an additional d20. You can choose to spend one of your luck points after you roll the die, but before the outcome is determined. You choose which of the d20s is used for the attack roll, ability check, or saving throw. You can also spend one luck point when an attack roll is made against you. Roll a d20, and then choose whether the attack uses the attacker's roll or yours. If more than one creature spends a luck point to influence the outcome of a roll, the points cancel each other out; no additional dice are rolled. You regain your expended luck points when you finish a long rest.";
            break;

        case 'Mage Slayer':
            featd.innerHTML = "You have practiced techniques useful in melee combat against spellcasters, gaining the following benefits: When a creature within 5 feet of you casts a spell, you can use your reaction to make a melee weapon attack against that creature. When you damage a creature that is concentrating on a spell, that creature has disadvantage on the saving throw it makes to maintain its concentration. You have advantage on saving throws against spells cast by creatures within 5 feet of you.";
            break;

        case 'Mobile':
            featd.innerHTML = "You are exceptionally speedy and agile. You gain the following benefits: Your speed increases by 10 feet. When you use the Dash action, difficult terrain doesn't cost you extra movement on that turn. When you make a melee attack against a creature, you don't provoke opportunity attacks from that creature for the rest of the turn, whether you hit or not.";
            npc.spd += 10;
            break;

        case 'Mounted Combatant':
            featd.innerHTML = "You are a dangerous foe to face while mounted. While you are mounted and aren't incapacitated, you gain the following benefits: You have advantage on melee attack rolls against any unmounted creature that is smaller than your mount. You can force an attack targeted at your mount to target you instead. If your mount is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw, and only half damage if it fails.";
            break;

        case 'Observant':
            featd.innerHTML = "Quick to notice details of your environment, you gain the following benefits: Increase your Intelligence or wisdom score by 1, to a maximum of  20. If you can see a creature's mouth while it is speaking a language you understand, you can interpret what it's saying by reading its lips. You have a +5 bonus to your passive Wisdom (Perception) and passive Intelligence (Investigation) scores.";
            sa = ['wis', 'int'];
            z = sa[Math.floor(Math.random() * sa.length)];
            if (z == 'wis') { npc.wis += 1; }
            if (z == 'int') { npc.int += 1; }
            break;

        case 'Sentinel':
            featd.innerHTML = "You have mastered techniques to take advantage of every drop in any enemy's guard, gaining the following benefits: When you hit a creature with an opportunity attack, the creature's speed becomes 0 for the rest of the turn. Creatures within 5 feet of you provoke opportunity attacks from you even if they take the Disengage action before leaving your reach. When a creature within 5 feet of you makes an attack against a target other than you (and that target doesn't have this feat), you can use your reaction to make a melee weapon attack against the attacking creature.";
            break;

        case 'Skilled':
            featd.innerHTML = "You gain proficiency in any combination of three skills or tools of your choice.";
            aaa();
            aaa();
            aaa();
            askill();
            break;

        case 'Tavern Brawler':
            featd.innerHTML = "Accustomed to rough-and-tumble fighting using whatever weapons happen to be at hand, you gain the following benefits: Increase your npc.strength or Constitution score by 1, to a maximum of 20. You are proficient with improvised weapons and unarmed strikes. Your unarmed strike uses a d4 for damage. When you hit a creature with an unarmed strike or an improvised weapon on your turn, you can use a bonus action to attempt to grapple the target.";
            sa = ['str', 'con'];
            z = sa[Math.floor(Math.random() * sa.length)];
            if (z == 'str') { npc.str += 1; }
            if (z == 'con') { npc.con += 1; }
            break;

        case 'Tough':
            featd.innerHTML = "Your hit point maximum increases by an amount equal to twice your level when you gain this feat. Whenever you gain a level thereafter, your hit point maximum increases by an additional 2 hit points";
            //hp += (lvl * 2); 
            break;
    }
    return feat;
}

function selClass() {
    var classes = [];
    st = "";
    de = "";
    wi = "";
    it = "";
    ch = "";
    num = Math.max(npc.str, npc.dex, npc.wis, npc.int, npc.cha);
    if (num == npc.str) {
        st = "s";
    }
    if (num == npc.dex) {
        de = "d";
    }
    if (num == npc.wis) {
        wi = "w";
    }
    if (num == npc.int) {
        it = "i";
    }
    if (num == npc.cha) {
        ch = "h";
    }
    line = st.concat(de, wi, it, ch);
    switch (line) {
        case 'sdwih':
            classes.push('Blood Hunter', 'Artificer', 'Wizard', 'Warlock', 'Sorcerer', 'Rogue', 'Ranger', 'Paladin', 'Monk', 'Fighter', 'Druid', 'Cleric', 'Bard', 'Barbarian');
            break;
        case 's':
            classes.push('Blood Hunter', 'Paladin', 'Fighter', 'Barbarian');
            break;
        case 'd':
            classes.push('Blood Hunter', 'Rogue', 'Ranger', 'Monk', 'Fighter');
            break;
        case 'w':
            classes.push('Ranger', 'Monk', 'Druid', 'Cleric');
            break;
        case 'i':
            classes.push('Artificer', 'Wizard');
            break;
        case 'h':
            classes.push('Warlock', 'Sorcerer', 'Paladin', 'Bard');
            break;
        case 'sd':
            classes.push('Blood Hunter', 'Paladin', 'Fighter', 'Barbarian', 'Rogue', 'Ranger', 'Monk');
            break;
        case 'sw':
            classes.push('Blood Hunter', 'Paladin', 'Fighter', 'Barbarian', 'Ranger', 'Monk', 'Druid', 'Cleric');
            break;
        case 'si':
            classes.push('Blood Hunter', 'Paladin', 'Fighter', 'Barbarian', 'Artificer', 'Wizard');
            break;
        case 'sh':
            classes.push('Blood Hunter', 'Paladin', 'Fighter', 'Barbarian', 'Warlock', 'Sorcerer', 'Bard');
            break;
        case 'dw':
            classes.push('Blood Hunter', 'Rogue', 'Ranger', 'Fighter', 'Monk', 'Druid', 'Cleric');
            break;
        case 'di':
            classes.push('Blood Hunter', 'Rogue', 'Ranger', 'Monk', 'Fighter', 'Artificer', 'Wizard');
            break;
        case 'dh':
            classes.push('Blood Hunter', 'Rogue', 'Ranger', 'Monk', 'Fighter', 'Warlock', 'Sorcerer', 'Paladin', 'Bard');
            break;
        case 'wi':
            classes.push('Ranger', 'Monk', 'Druid', 'Cleric', 'Artificer', 'Wizard');
            break;
        case 'wh':
            classes.push('Ranger', 'Monk', 'Druid', 'Cleric', 'Warlock', 'Sorcerer', 'Paladin', 'Bard');
            break;
        case 'ih':
            classes.push('Artificer', 'Wizard', 'Warlock', 'Sorcerer', 'Paladin', 'Bard');
            break;
        case 'sdw':
            classes.push('Blood Hunter', 'Paladin', 'Fighter', 'Barbarian', 'Rogue', 'Ranger', 'Monk', 'Ranger', 'Monk', 'Druid', 'Cleric');
            break;
        case 'swi':
            classes.push('Blood Hunter', 'Paladin', 'Fighter', 'Barbarian', 'Ranger', 'Monk', 'Druid', 'Cleric', 'Artificer', 'Wizard');
            break;
        case 'sih':
            classes.push('Blood Hunter', 'Paladin', 'Fighter', 'Barbarian', 'Artificer', 'Wizard', 'Warlock', 'Sorcerer', 'Paladin', 'Bard');
            break;
        case 'sdi':
            classes.push('Blood Hunter', 'Paladin', 'Fighter', 'Barbarian', 'Rogue', 'Ranger', 'Monk', 'Artificer', 'Wizard');
            break;
        case 'sdh':
            classes.push('Blood Hunter', 'Paladin', 'Fighter', 'Barbarian', 'Rogue', 'Ranger', 'Monk', 'Warlock', 'Sorcerer', 'Paladin', 'Bard');
            break;
        case 'swh':
            classes.push('Blood Hunter', 'Paladin', 'Fighter', 'Barbarian', 'Ranger', 'Monk', 'Druid', 'Cleric', 'Warlock', 'Sorcerer', 'Paladin', 'Bard');
            break;
        case 'dwi':
            classes.push('Blood Hunter', 'Rogue', 'Ranger', 'Fighter', 'Monk', 'Druid', 'Cleric', 'Artificer', 'Wizard');
            break;
        case 'dih':
            classes.push('Blood Hunter', 'Rogue', 'Ranger', 'Monk', 'Fighter', 'Artificer', 'Wizard', 'Warlock', 'Sorcerer', 'Paladin', 'Bard');
            break;
        case 'dwh':
            classes.push('Blood Hunter', 'Rogue', 'Ranger', 'Fighter', 'Monk', 'Druid', 'Cleric', 'Warlock', 'Sorcerer', 'Paladin', 'Bard');
            break;
        case 'wih':
            classes.push('Ranger', 'Monk', 'Druid', 'Cleric', 'Artificer', 'Wizard', 'Warlock', 'Sorcerer', 'Paladin', 'Bard');
            break;
        case 'sdwi':
            classes.push('Blood Hunter', 'Paladin', 'Fighter', 'Barbarian', 'Rogue', 'Ranger', 'Monk', 'Ranger', 'Monk', 'Druid', 'Cleric', 'Artificer', 'Wizard');
            break;
        case 'dwih':
            classes.push('Blood Hunter', 'Rogue', 'Ranger', 'Fighter', 'Monk', 'Druid', 'Cleric', 'Artificer', 'Wizard', 'Warlock', 'Sorcerer', 'Paladin', 'Bard');
            break;
        case 'swih':
            classes.push('Blood Hunter', 'Paladin', 'Fighter', 'Barbarian', 'Ranger', 'Monk', 'Druid', 'Cleric', 'Artificer', 'Wizard', 'Warlock', 'Sorcerer', 'Paladin', 'Bard');
            break;
        case 'sdih':
            classes.push('Blood Hunter', 'Paladin', 'Fighter', 'Barbarian', 'Rogue', 'Ranger', 'Monk', 'Artificer', 'Wizard', 'Warlock', 'Sorcerer', 'Paladin', 'Bard');
            break;
        case 'sdwh':
            classes.push('Blood Hunter', 'Paladin', 'Fighter', 'Barbarian', 'Rogue', 'Ranger', 'Monk', 'Druid', 'Cleric', 'Warlock', 'Sorcerer', 'Paladin', 'Bard');
            break;
        default:
            classes.push('Fighter');
            break;

    }
    //cls = classes[Math.floor(Math.random() * classes.length)];
    //baseClass = cls;
    //Change this for specific class:
    classes = ["Barbarian", "Fighter"]; 
    cls = classes[Math.floor(Math.random() * classes.length)];
    console.log(cls);
    baseClass = cls;
    addSkills();
    
}

function className() {
    switch (cls) {
/*        case 'Blood Hunter':
            break;
        case 'Artificer':
            break;*/
        case 'Wizard':
            wizard();
            break;
        case 'Warlock':
            warlock();
            break;
        case 'Sorcerer':
            sorcerer();
            break;
        case 'Rogue':
            rogue();
            break;
        case 'Ranger':
            ranger();
            break;
        case 'Paladin':
            paladin();
            break;
        case 'Monk':
            monk();
            break;
        case 'Fighter':
            fighter();
            break;
        case 'Druid':
            druid();
            break;
        case 'Cleric':
            cleric();
            break;
        case 'Bard':
            bard();
            break; 
        case 'Barbarian':
            barbarian();
        break;
    }
    return cls;
} 

function addSkills() {
    let sa = [];
    let sk4 = "";
    let sk5= "";
    let sk6= "";
    let sk7= "";
    switch (cls) {
        case 'Blood Hunter':
            sa = ['athl', 'acro', 'arca', 'inve', 'insi', 'surv'];
            sk4 = sa[Math.floor(Math.random() * sa.length)];
            sk5 = sa[Math.floor(Math.random() * sa.length)];
            if (sk4 == sk5) {
                addSkills();
            }
            npc.strSave += npc.prof; 
            t_strSave = true;
            npc.wisSave += npc.prof; 
            t_wisSave = true;
            break;
        case 'Artificer':
            sa = ['slei', 'arca', 'hist', 'inve', 'natu', 'medi', 'perc'];
            sk4 = sa[Math.floor(Math.random() * sa.length)];
            sk5 = sa[Math.floor(Math.random() * sa.length)];
            if (sk4 == sk5) {
                addSkills();
            }
            npc.conSave += npc.prof;
            t_conSave = true;
            npc.intSave += npc.prof;
            t_intSave = true;
            break;
        case 'Wizard':
            sa = ['arca', 'hist', 'inve', 'reli', 'insi', 'medi'];
            sk4 = sa[Math.floor(Math.random() * sa.length)];
            sk5 = sa[Math.floor(Math.random() * sa.length)];
            if (sk4 == sk5) {
                addSkills();
            }
            npc.intSave += npc.prof;
            t_intSave = true;
            npc.wisSave += npc.prof;
            t_wisSave = true;
            wizard();
            break;
        case 'Warlock':
            sa = ['arca', 'hist', 'inve', 'natu', 'reli', 'dece', 'inti'];
            sk4 = sa[Math.floor(Math.random() * sa.length)];
            sk5 = sa[Math.floor(Math.random() * sa.length)];
            if (sk4 == sk5) {
                addSkills();
            }
            npc.wisSave += npc.prof;
            t_wisSave = true;
            npc.chaSave += npc.prof;
            t_chaSave = true;
            warlock();
            break;
        case 'Sorcerer':
            sa = ['arca', 'dece', 'insi', 'inti', 'pers', 'reli'];
            sk4 = sa[Math.floor(Math.random() * sa.length)];
            sk5 = sa[Math.floor(Math.random() * sa.length)];
            if (sk4 == sk5) {
                addSkills();
            }
            npc.conSave += npc.prof;
            t_conSave = true;
            npc.chaSave += npc.prof;
            t_chaSave = true;
            sorcerer();
            break;
        case 'Rogue':
            sa = ['acro', 'athl', 'dece', 'insi', 'inti', 'inve', 'perc', 'perf', 'pers', 'slei', 'stea'];
            sk4 = sa[Math.floor(Math.random() * sa.length)];
            sk5 = sa[Math.floor(Math.random() * sa.length)];
            sk6 = sa[Math.floor(Math.random() * sa.length)];
            sk7 = sa[Math.floor(Math.random() * sa.length)];
            if (sk4 == sk5 || sk4 == sk6 || sk4 == sk7 || sk5 == sk6 || sk6 == sk7 || sk5 == sk7) {
                addSkills();
            }
            npc.dexSave += npc.prof;
            t_dexSave = true;
            npc.intSave += npc.prof;
            t_intSave = true;
            rogue();
            break;
        case 'Ranger':
            sa = ['anim', 'athl', 'insi', 'inve', 'natu', 'perc', 'stea', 'surv'];
            sk4 = sa[Math.floor(Math.random() * sa.length)];
            sk5 = sa[Math.floor(Math.random() * sa.length)];
            sk6 = sa[Math.floor(Math.random() * sa.length)];
            if (sk4 == sk5 || sk4 == sk6 || sk5 == sk6) {
                addSkills();
            }
            npc.strSave += npc.prof;
            t_strSave = true;
            npc.dexSave += npc.prof;
            t_dexSave = true;
            ranger();
            break;
        case 'Paladin':
            sa = ['athl', 'insi', 'inti', 'medi', 'pers', 'reli'];
            sk4 = sa[Math.floor(Math.random() * sa.length)];
            sk5 = sa[Math.floor(Math.random() * sa.length)];
            if (sk4 == sk5) {
                addSkills();
            }
            npc.wisSave += npc.prof;
            t_wisSave = true;
            npc.chaSave += npc.prof;
            t_chaSave = true;
            paladin();
            break;
        case 'Monk':
            sa = ['acro', 'athl', 'hist', 'insi', 'reli', 'stea'];
            sk4 = sa[Math.floor(Math.random() * sa.length)];
            sk5 = sa[Math.floor(Math.random() * sa.length)];
            if (sk4 == sk5) {
                addSkills();
            }
            npc.strSave += npc.prof;
            t_strSave = true;
            npc.dexSave += npc.prof;
            t_dexSave = true;
            monk();
            break;
        case 'Fighter':
            sa = ['acro', 'anim', 'athl', 'hist', 'insi', 'inti', 'perc', 'surv'];
            sk4 = sa[Math.floor(Math.random() * sa.length)];
            sk5 = sa[Math.floor(Math.random() * sa.length)];
            if (sk4 == sk5) {
                addSkills();
            }
            npc.strSave += npc.prof;
            t_strSave = true;
            npc.conSave += npc.prof;
            t_conSave = true;
            break;
        case 'Druid':
            sa = ['arca', 'anim', 'insi', 'medi', 'natu', 'perc', 'reli', 'surv'];
            sk4 = sa[Math.floor(Math.random() * sa.length)];
            sk5 = sa[Math.floor(Math.random() * sa.length)];
            if (sk4 == sk5) {
                addSkills();
            }
            npc.intSave += npc.prof;
            t_intSave = true;
            npc.wisSave += npc.prof;
            t_wisSave = true;
            druid();
            break;
        case 'Cleric':
            sa = ['hist', 'insi', 'medi', 'pers', 'reli'];
            sk4 = sa[Math.floor(Math.random() * sa.length)];
            sk5 = sa[Math.floor(Math.random() * sa.length)];
            if (sk4 == sk5) {
                addSkills();
            }
            npc.wisSave += npc.prof;
            t_wisSave = true;
            npc.chaSave += npc.prof;
            t_chaSave = true;
            cleric();
            break;
        case 'Bard':
            sa = ['athl', 'acro', 'slei', 'stea', 'arca', 'hist', 'inve', 'natu', 'reli', 'anim', 'insi', 'medi', 'perc', 'surv', 'dece', 'inti', 'perf', 'pers'];
            sk4 = sa[Math.floor(Math.random() * sa.length)];
            sk5 = sa[Math.floor(Math.random() * sa.length)];
            sk6 = sa[Math.floor(Math.random() * sa.length)];
            if (sk4 == sk5 || sk4 == sk6 || sk5 == sk6) {
                addSkills();
            }
            npc.dexSave += npc.prof;
            t_dexSave = true;
            npc.chaSave += npc.prof;
            t_chaSave = true;
            bard();
            break; 
        case 'Barbarian':
            sa = ['anim', ' athl', 'inti', 'lnatu', 'perc', 'surv'];
            sk4 = sa[Math.floor(Math.random() * sa.length)];
            sk5 = sa[Math.floor(Math.random() * sa.length)];
            if (sk4 == sk5) {
               addSkills();
            }
            npc.strSave += npc.prof;
            t_strSave = true;
            npc.conSave += npc.prof;
            t_conSave = true;
            break;
    }
    plusSkill(sk4);
    plusSkill(sk5);
    plusSkill(sk6);
    plusSkill(sk7);
}

function plusSkill(sknum) {
    if (sknum == "athl" && t_athl !== true) {npc.athl += npc.prof; t_athl = true;}    
    if (sknum == "acro" && t_acro !== true) {npc.acro += npc.prof; t_acro = true;}
    if (sknum == "slei" && t_slei !== true) {npc.slei += npc.prof; t_slei = true;}
    if (sknum == "stea" && t_stea !== true) {npc.stea += npc.prof; t_stea = true;}
    if (sknum == "arca" && t_arca !== true) {npc.arca += npc.prof; t_arca = true;}
    if (sknum == "hist" && t_hist !== true) {npc.hist += npc.prof; t_hist = true;}
    if (sknum == "inve" && t_inve !== true) {npc.inve += npc.prof; t_inve = true;}
    if (sknum == "natu" && t_natu !== true) {npc.natu += npc.prof; t_natu = true;}
    if (sknum == "reli" && t_reli !== true) {npc.reli += npc.prof; t_reli = true;}
    if (sknum == "anim" && t_anim !== true) {npc.anim += npc.prof; t_anim = true;}
    if (sknum == "insi" && t_insi !== true) {npc.insi += npc.prof; t_insi = true;}
    if (sknum == "medi" && t_medi !== true) {npc.medi += npc.prof; t_medi = true;}
    if (sknum == "perc" && t_perc !== true) {npc.perc += npc.prof; t_perc = true;}
    if (sknum == "surv" && t_surv !== true) {npc.surv += npc.prof; t_surv = true;}
    if (sknum == "dece" && t_dece !== true) {npc.dece += npc.prof; t_dece = true;}
    if (sknum == "inti" && t_inti !== true) {npc.inti += npc.prof; t_inti = true;}
    if (sknum == "perf" && t_perf !== true) {npc.perf += npc.prof; t_perf = true;}
    if (sknum == "pers" && t_pers !== true) {npc.pers += npc.prof; t_pers = true;}
}

function askill() {
    ask = [];
    if (t_athl == false) { ask.push("athl") }
    if (t_acro == false) { ask.push("acro") }
    if (t_slei == false) { ask.push("slei") }
    if (t_stea == false) { ask.push("stea") }
    if (t_arca == false) { ask.push("arca") }
    if (t_hist == false) { ask.push("hist") }
    if (t_inve == false) { ask.push("inve") }
    if (t_natu == false) { ask.push("natu") }
    if (t_reli == false) { ask.push("reli") }
    if (t_anim == false) { ask.push("anim") }
    if (t_insi == false) { ask.push("insi") }
    if (t_medi == false) { ask.push("medi") }
    if (t_perc == false) { ask.push("perc") }
    if (t_surv == false) { ask.push("surv") }
    if (t_dece == false) { ask.push("dece") }
    if (t_inti == false) { ask.push("inti") }
    if (t_perf == false) { ask.push("perf") }
    if (t_pers == false) { ask.push("pers") }
    console.log(ask);
}

function setHp(xClass) {
    let hp = 0;
    let count = npc.lvl;
    switch (xClass) {
        case 'Blood Hunter':
            for (i = 0; i < count; i++) {
                hp += Math.floor(Math.random() * (10 - 5 + 1)) + 5 + npc.conMod;
                //console.log("count: " + i + " || x: " + x);
            }
            break;
        case 'Artificer':
            for (i = 0; i < count; i++) {
                hp += Math.floor(Math.random() * (8 - 4 + 1)) + 4 + npc.conMod;
                //console.log("count: " + i + " || x: " + x);
            }
            break;
        case 'Wizard':
            for (i = 0; i < count; i++) {
                hp += Math.floor(Math.random() * (6 - 3 + 1)) + 3 + npc.conMod;
                //console.log("count: " + i + " || x: " + x);
            }
            
            break;
        case 'Warlock':
            for (i = 0; i < count; i++) {
                hp += Math.floor(Math.random() * (8 - 4 + 1)) + 4 + npc.conMod;
                //console.log("count: " + i + " || x: " + x);
            }
            
            break;
        case 'Sorcerer':
            for (i = 0; i < count; i++) {
                hp += Math.floor(Math.random() * (6 - 3 + 1)) + 3 + npc.conMod;
                //console.log("count: " + i + " || hp: " + hp);
            }
            
            break;
        case 'Rogue':
            for (i = 0; i < count; i++) {
                hp += Math.floor(Math.random() * (8 - + 1)) + 4 + npc.conMod;
                //console.log("count: " + i + " || hp: " + hp);
            }
            
            break;
        case 'Ranger':
            for (i = 0; i < count; i++) {
                hp += Math.floor(Math.random() * (10 - 5 + 1)) + 5 + npc.conMod;
                //console.log("count: " + i + " || hp: " + hp);
            }
            
            break;
        case 'Paladin':
            for (i = 0; i < count; i++) {
                hp += Math.floor(Math.random() * (10 - 5 + 1)) + 5 + npc.conMod;
                //console.log("count: " + i + " || hp: " + hp);
            }
            
            break;
        case 'Monk':
            for (i = 0; i < count; i++) {
                hp += Math.floor(Math.random() * (8 - 4 + 1)) + 4 + npc.conMod;
                //console.log("count: " + i + " || hp: " + hp);
            }
            
            break;
        case 'Fighter':
            for (i = 0; i < count; i++) {
                hp += Math.floor(Math.random() * (10 - 5 + 1)) + 5 + npc.conMod;
                //console.log("count: " + i + " || hp: " + hp);
            }

            break;
        case 'Druid':
            for (i = 0; i < count; i++) {
                hp += Math.floor(Math.random() * (8 - 4 + 1)) + 4 + npc.conMod;
                //console.log("count: " + i + " || hp: " + hp);
            }

            break;
        case 'Cleric':
            for (i = 0; i < count; i++) {
                hp += Math.floor(Math.random() * (8 - 4 + 1)) + 4 + npc.conMod;
                //console.log("count: " + i + " || hp: " + hp);
            }
            break;
        case 'Bard':
            for (i = 0; i < count; i++) {
                hp += Math.floor(Math.random() * (8 - 4 + 1)) + 4 + npc.conMod;
                //console.log("count: " + i + " || hp: " + hp);
            }
            break;
        case 'Barbarian':
            for (i = 0; i < count; i++) {
                hp += Math.floor(Math.random() * (12 - 6 + 1)) + 6 + npc.conMod;
                console.log("count: " + i + " || hp: " + hp);
            }
            
            break;
    }
    return hp;
}

function modSkills() {
    npc.athl += npc.strMod;
    npc.acro += npc.dexMod;
    npc.slei += npc.dexMod;
    npc.stea += npc.dexMod;
    npc.arca += npc.intMod;
    npc.hist += npc.intMod;
    npc.inve += npc.intMod;
    npc.natu += npc.intMod;
    npc.reli += npc.intMod;
    npc.anim += npc.wisMod;
    npc.insi += npc.wisMod;
    npc.medi += npc.wisMod;
    npc.perc += npc.wisMod;
    npc.surv += npc.wisMod;
    npc.dece += npc.chaMod;
    npc.inti += npc.chaMod;
    npc.perf += npc.chaMod;
    npc.pers += npc.chaMod;    
}

function mods(num) {
    let x = 0;
    if (num == 8) {
        x = -1;
    } if (num >= 12 && num < 14) {
        x = 1;
    } if (num >= 14 && num < 16) {
        x = 2;
    } if (num >= 16 && num < 18) {
        x = 3;
    } if (num >= 18 && num < 20) {
        x = 4;
    } if (num >= 20) {
        x = 5;
    } 
return x;
}

function aaa() {
    let x = ask[Math.floor(Math.random() * ask.length)];
    if (x == "athl") { t_athl = true; }
    if (x == "acro") { t_acro = true; }
    if (x == "slei") { t_slei = true; }
    if (x == "stea") { t_stea = true; }
    if (x == "arca") { t_arca = true; }
    if (x == "hist") { t_hist = true; }
    if (x == "inve") { t_inve = true; }
    if (x == "natu") { t_natu = true; }
    if (x == "reli") { t_reli = true; }
    if (x == "anim") { t_anim = true; }
    if (x == "insi") { t_insi = true; }
    if (x == "medi") { t_medi = true; }
    if (x == "perc") { t_perc = true; }
    if (x == "surv") { t_surv = true; }
    if (x == "dece") { t_dece = true; }
    if (x == "inti") { t_inti = true; }
    if (x == "perf") { t_perf = true; }
    if (x == "pers") { t_pers = true; }
}

function rscheck(e) {
    switch (e) {
        case 1:
            ranStat = ['arca', 'inve', 'reli', 'surv'];
            rs1 = ranStat[Math.floor(Math.random() * ranStat.length)];
            rs2 = ranStat[Math.floor(Math.random() * ranStat.length)];
            if (rs1 == rs2) {
                rscheck(1);
            }
            if (rs1 == "arca" && t_arca == false) {npc.arca += npc.prof; t_arca = true;}
            if (rs1 == "inve" && t_inve == false) {npc.inve += npc.prof; t_inve = true;}
            if (rs1 == "reli" && t_reli == false) {npc.reli += npc.prof; t_reli = true;}
            if (rs1 == "surv" && t_surv == false) {npc.surv += npc.prof; t_surv = true;}

            if (rs2 == "arca" && t_arca == false) {npc.arca += npc.prof; t_arca = true;}
            if (rs2 == "inve" && t_inve == false) {npc.inve += npc.prof; t_inve = true;}
            if (rs2 == "reli" && t_reli == false) {npc.reli += npc.prof; t_reli = true;}
            if (rs2 == "surv" && t_surv == false) {npc.surv += npc.prof; t_surv = true;}
            break;
        case 2:
            ranStat = ['dece', 'insi', 'pers', 'stea'];
            rs1 = ranStat[Math.floor(Math.random() * ranStat.length)];
            rs2 = ranStat[Math.floor(Math.random() * ranStat.length)];
            if (rs1 == rs2) {
                rscheck(2);
            }
            if (rs1 == "dece" && t_dece == false) {npc.dece += npc.prof; t_dece = true;}
            if (rs1 == "insi" && t_insi == false) {npc.insi += npc.prof; t_insi = true;}
            if (rs1 == "pers" && t_pers == false) {npc.pers += npc.prof; t_pers = true;}
            if (rs1 == "stea" && t_stea == false) {npc.stea += npc.prof; t_stea = true;}

            if (rs2 == "dece" && t_dece == false) {npc.dece += npc.prof; t_dece = true;}
            if (rs2 == "insi" && t_insi == false) {npc.insi += npc.prof; t_insi = true;}
            if (rs2 == "pers" && t_pers == false) {npc.pers += npc.prof; t_pers = true;}
            if (rs2 == "stea" && t_stea == false) {npc.stea += npc.prof; t_stea = true;}
            break;
    }
}

function takeoutSkill(e) {
    for (var i = 0; i < sa.length; i++) {
        if (sa[i] === e) {
            sa.splice(i, 1);
            i--;
        }
    }
    switch (e) {
        case 'acro':
            acro = 0 + skillprof;
            break;
        case 'slei':
            slei = 0 + skillprof;
            break;
        case 'stea':
            stea = 0 + skillprof;
            break;
        case 'arca':
            arca = 0 + skillprof;
            break;
        case 'hist':
            hist = 0 + skillprof;
            break;
        case 'inve':
            inve = 0 + skillprof;
            break;
        case 'natu':
            natu = 0 + skillprof;
            break;
        case 'reli':
            reli = 0 + skillprof;
            break;
        case 'anim':
            anim = 0 + skillprof;
            break;
        case 'insi':
            insi = 0 + skillprof;
            break;
        case 'medi':
            medi = 0 + skillprof;
            break;
        case 'perc':
            perc = 0 + skillprof;
            break;
        case 'surv':
            surv = 0 + skillprof;
            break;
        case 'dece':
            dece = 0 + skillprof;
            break;
        case 'inti':
            inti = 0 + skillprof;
            break;
        case 'perf':
            perf = 0 + skillprof;
            break;
        case 'pers':
            pers = 0 + skillprof;
            break;
    }
}




var charName = ['Anlow', 'Arando', 'Bram', 'Cale', 'Dalkon', 'Daylen', 'Dodd',
    'Dungarth', 'Dyrk', 'Eandro', 'Falken', 'Feck', 'Fenton', 'Gryphero',
    'Hagar', 'Jeras', 'Krynt', 'Lavant', 'Leyten', 'Madian', 'Malfier', 'Markus',
    'Meklan', 'Namen', 'Navaren', 'Nerle', 'Nilus', 'Ningyan', 'Norris', 'Quentin',
    'Semil', 'Sevenson', 'Steveren', 'Talfen', 'Tamond', 'Taran', 'Tavon', 'Tegan',
    'Vanan', 'Vincent', 'Azura', 'Brey', 'Hallan', 'Kasaki', 'Lorelei', 'Mirabel',
    'Pharana', 'Remora', 'Rosalyn', 'Sachil', 'Saidi', 'Tanika', 'Tura', 'Tylsa', 'Vencia',
    'Xandrilla', 'Arkalis', 'Armanci', 'Bilger', 'Blackstrand', 'Brightwater', 'Carnavon',
    'Caskajaro', 'Coldshore', 'Coyle', 'Cresthill', 'Cuttlescar', 'Daargen', 'Dalicarlia',
    'Danamark', 'Donoghan', 'Drumwind', 'Dunhall', 'Ereghast', 'Falck', 'Fallenbridge',
    'Faringray', 'Fletcher', 'Fryft', 'Goldrudder', 'Grantham', 'Graylock', 'Gullscream',
    'Hindergrass', 'Iscalon', 'Kreel', 'Kroft', 'Lamoth', 'Leerstrom', 'Lynchfield', 'Moonridge',
    'Netheridge', 'Oakenheart', 'Pyncion', 'Ratley', 'Redraven', 'Revenmar', 'Roxley', 'Sell',
    'Seratolva', 'Shanks', 'Shattermast', 'Shaulfer', 'Silvergraft', 'Stavenger', 'Stormchapel',
    'Strong', 'Swiller', 'Talandro ', 'Targana', 'Towerfall', 'Umbermoor', 'Van Devries', 'Van Gandt',
    'Van Hyden', 'Varcona', 'Varzand', 'Voortham', 'Vrye', 'Webb', 'Welfer', 'Wilxes', 'Wintermere',
    'Wygarthe', 'Zatchet', 'Zethergyll', 'Andujar', 'Armagan', 'Armek', 'Arzan', 'Axaran', 'Belaxarim',
    'Brevarr', 'Djemidor', 'Draxan', 'Fayal', 'Grax', 'Iojad', 'Inzul', 'Khiraj', 'Kreytzen', 'Lejek',
    'Mar', 'Nazir', 'Nedam', 'Nevek', 'Ravaran', 'Razaan', 'Sarax', 'Sarram', 'Savaxis', 'Siangar',
    'Sirizan', 'Sunan', 'Szuran', 'Tajan', 'Tamajon', 'Tenahn', 'Toxal', 'Tzegyr', 'Vantajar',
    'Vharkus', 'Xafiq', 'Zarkhil', 'Artana', 'Kalas', 'Khagra', 'Leytra', 'Myrka', 'Naya', 'Sarcha',
    'Shirren', 'Sirivistra', 'Sufana', 'Tamara', 'Vrumadi', 'Zovra', 'Agaro', 'Arnan', 'Auxlan',
    'Avamir', 'Baelnar', 'Balfam', 'Bariken', 'BorkÃ»l', 'DarkÃ»l', 'Dolmen', 'Dyrnar', 'Erag',
    'Ezegan', 'Ferrek', 'GarmÃ»l', 'Glint', 'Ghorvas', 'Grimmalk', 'Haeltar', 'Halagmar',
    'Halzar', 'Hlant', 'Korlag', 'Krag', 'Krim', 'Kurman', 'Lurtrum', 'Malagar', 'Mardam',
    'Maulnar', 'Melgar', 'Morak', 'Orobok', 'Rogath', 'Roken', 'Rozag', 'Sabakzar', 'Sharak',
    'Smethykk', 'Swargar', 'Thorbalt', 'Thorin', 'Tredigar', 'VabÃ»l', 'Vistrum', 'Wolvar', 'Beyla',
    'Fenryl', 'Grenenzel', 'Krystolari', 'Lokara', 'Lurka', 'Marnia', 'Praxana', 'Rokel', 'Roksana',
    'Thurlfara', 'Vauldra', 'Veklani', 'Vronwe', 'Zebel', 'Ambershard', 'Barrelhelm', 'Copperhearth',
    'Deepmiddens', 'Drakantal', 'Evermead', 'Garkalan', 'Grimtor', 'Hackshield', 'Irongull', 'Markolak',
    'Ramcrown', 'Rockharvest', 'Silvertarn', 'Skandalor', 'Zarkanan', 'Aialon', 'Elarahal', 'Jiardem',
    'Laern', 'Lelyrian', 'Lephyrr', 'Loray', 'Sayadar', 'Talonien', 'Vaerlan', 'Xoneras', 'Zaquivir',
    'Allyria', 'Ayrdra', 'Deneth', 'Elseone', 'Etherea', 'Istiria', 'Karanwyn', 'Lieryn', 'Ravel',
    'Sinariel', 'Sydri', 'Taris', 'Turue', 'Vacquiel', 'Valendra', 'Lantherval', 'Lorhalien', 'Maldranthe',
    'Shalbarain', 'Sirothian', 'Starfeon', 'Zolerii', 'Alarcion', 'Alathar', 'Ariandar', 'Arromar', 'Borel',
    'Bvachan', 'Carydion', 'Elgoth', 'Farlien', 'Ferel', 'Gaerlan', 'Iafalior', 'Kaelthorn', 'Laethan', 'Leliar',
    'Leodor', 'Lorak', 'Lorifir', 'Morian', 'Oleran', 'Rylef', 'Savian', 'Seylas', 'Tevior', 'Veyas', 'Aryllan',
    'Atalya', 'Ayrthwil', 'Irva', 'Lyfalia', 'Ronefel', 'Thirya', 'Velene', 'Venefiq', 'Zereni Autumnloft',
    'Balefrost', 'Briarfell', 'Evenwind', 'Graytrails', 'Mooncairn', 'Riverwall', 'Stormwolf', 'Summergale',
    'Sunshadow', 'Woodenhawk', 'Arthan', 'Carvin', 'Corby', 'Cullen', 'Egen', 'Ernest', 'Gedi', 'Heron', 'Jeryl', 'Keffen', 'Kylem', 'Kynt', 'Leskyn', 'Neff', 'Orne', 'Quarrel', 'Rabbit', 'Rilkin', 'Snakebait', 'Tarfen', 'Titch', 'Tuck', 'Whim', 'Caliope', 'Emily', 'Piper', 'Rixi', 'Sabretha', 'Teg', 'Tilly', 'Toira', 'Vexia', 'Vil', 'Vzani', 'Zanthe', 'Ziza', 'Angler', 'Battlestone', 'Blackwater', 'Daggersharp', 'Deepstrider', 'Hollowpot', 'Puddle', 'Raftmite', 'Skiprock', 'Silverfin', 'Tanglestrand', 'Tricker', 'Willowrush', 'Yellowcrane Ankhus', 'Arkadi', 'Armarius', 'Armillius', 'Archidius', 'Balmoloch', 'Calderax', 'Cavian', 'Cenereth', 'Chorum', 'Corynax', 'Dacian', 'Daelius', 'Damaceus', 'Decimeth', 'Demedor', 'Demerian', 'Dynachus', 'Grassus', 'Halius', 'Heleph', 'Incirion', 'Kalaradian', 'Kamien', 'Kazimir', 'Kzandro', 'Machem', 'Maetheus', 'Malfias', 'Marchion', 'Menerus', 'Namazeus', 'Nensis', 'Prismeus', 'Pyranikus', 'Razortail', 'Sejanus', 'Severian', 'Suffer', 'Syken', 'Tarkus', 'Vaius', 'Xerek', 'Zeth', 'Zevon', 'Affyria', 'Cataclysmia', 'Domitia', 'Dorethau', 'Excellence', 'Hacari', 'Iritra', 'Lachira', 'Levatra', 'Mecretia', 'Milvia', 'Nericia', 'Precious', 'Rain', 'Samantia', 'Sunshine', 'Tenerife', 'Traya', 'Velavia', 'Zaidi', 'Zethaya', 'Amarzian', 'Carnago', 'Domarien', 'Iscitan', 'Meluzan', 'Menetrian', 'Paradas', 'Romazi', 'Sarzan', 'Serechor', 'Shadowhorn', 'Szereban', 'Torzalan', 'Trelenus', 'Trevethor', 'Tryphon', 'Vadu', 'Vrago'];
//'Blood Hunter', 'Paladin', 'Fighter', 'Barbarian','Rogue', 'Ranger', 'Monk', 'Druid', 'Cleric', 'Warlock', 'Sorcerer', 'Paladin', 'Bard'
var t2;
var classes = [];
var races = ['Tiefling', 'Half-Orc', 'Half-Elf', 'Forest Gnome', 'Rock Gnome', 'Human', 'Lightfoot Halfling', 'Stout Halfling', 'High Elf', 'Wood Elf', 'Dark Elf', 'Hill Dwarf', 'Mountain Dwarf'];
var backArray = ["Acolyte", "Anthropologist", "Archaeologist", "Adopted", "Black Fist Double Agent", "Caravan Specialist", "Charlatan", "City Watch", "Clan Crafter", "Cloistered Scholar", "Cormanthor Refugee", "Courtier", "Criminal", "Dragon Casualty", "Earthspur Miner", "Entertainer", "Faction Agent", "Far Traveler", "Folk Hero", "Gate Urchin", "Gladiator", "Guild Artisan", "Guild Merchant", "Harborfolk", "Haunted One", "Hermit", "Hillsfar Merchant", "Hillsfar Smuggler", "House Agent", "Inheritor", "Initiate", "Inquisitor", "Investigator", "Iron Route Bandit", "Knight", "Mercenary Veteran", "Mulmaster Aristocrat", "Noble", "Outlander", "Phlan Insurgent", "Phlan Refugee", "Pirate", "Sage", "Sailor", "Secret Identity", "Shade Fanatic", "Soldier", "Spy", "Student Of Magic", "Trade Sheriff", "Urban Bounty Hunter", "Urchin", "Uthgardt Tribe Member", "Vizier", "Waterdhavian Noble"];
function abiUp() {
    let r2 = [];
    let r1 = '';
    if (str <= 19) {
        r2.push('str');
    }
    if (dex <= 19) {
        r2.push('dex');
    }
    if (con <= 19) {
        r2.push('con');
    }
    if (wis <= 19) {
        r2.push('wis');
    }
    if (int <= 19) {
        r2.push('int');
    }
    if (cha <= 19) {
        r2.push('cha');
    }
    r1 = r2[Math.floor(Math.random() * r2.length)];
    if (r1 == 'str') {
        npc.str += 1;
    }
    if (r1 == 'dex') {
        npc.dex += 1;
    }
    if (r1 == 'con') {
        npc.con += 1;
    }
    if (r1 == 'wis') {
        npc.wis += 1;
    }
    if (r1 == 'int') {
        npc.int += 1;
    }
    if (r1 == 'cha') {
        npc.cha += 1;
    }
}

function barbarian() {
    //cls = "Barbarian";
    let x = [];
    let martype = ["b", "tw"];
    let mt = "d";
    let l3;
    let l6;
    let l10;
    let l14;
    if (npc.lvl < 3) {
        cls = "Barbarian";
    } else {
        mt = martype[Math.floor(Math.random() * martype.length)];
        console.log(mt);
    }
    switch (mt) {
        case "b":
            l3 = "Frenzy";
            l6 = "Mindless<br>Rage";
            l10 = "Intimidating<br>Presence";
            l14 = "Retaliation";
            cls = "Breserker"
            break;
        case "tw":
            tw = ["Bear", "Egale", "Wolf"];
            ani = tw[Math.floor(Math.random() * tw.length)];
            l3 = "Spirit<br>Seeker</div><div class='ability'>Totem<br>Spirit<br>("+ani+")";
            l6 = "Aspect<br>of<br>The<br>"+ani;
            l10 = "Spirit<br>Walker";
            l14 = "Totemic<br>Attunment<br>("+ani+")";
            cls = "Totem Warrior"
            break;
        case "d":
            cls = "Barbarian"
            break;
    }
    x.push("<div class='ability'>Rage</div><div class='ability'>Unarmored<br>Defense</div>");
    if (npc.lvl >= 2) {
        x.push("<div class='ability'>Reckless<br>Attack</div><div class='ability'>Danger<br>Sense</div>");
    }
    if (npc.lvl >= 3) {
        x.push("<div class='ability'>"+l3+"</div>");
    }
    if (npc.lvl >= 4) {
        x.push("<div class='ability'>Ability<br>Score<br>Improvement</div>");
        abiUp();
        abiUp();
    }
    if (npc.lvl >= 5) {
        x.push("<div class='ability'>Extra<br>Attack</div><div class='ability'>Fast<br>Movement</div>");
    }
    if (npc.lvl >= 6) {
        x.push("<div class='ability'>"+l6+"</div>");
    }
    if (npc.lvl >= 7) {
        x.push("<div class='ability'>Instinct</div>");
    }
    if (npc.lvl >= 8) {
        x.push("<div class='ability'>Ability<br>Score<br>Improvement</div>");
        abiUp();
        abiUp();
    }
    if (npc.lvl >= 9) {
        x.push("<div class='ability'>Brutal<br>Critical<br>(1 die)</div>");
    }
    if (npc.lvl >= 10) {
        x.push("<div class='ability'>"+l10+"</div>");
    }
    if (npc.lvl >= 11) {
        x.push("<div class='ability'>Relentless<br>Rage</div>");
    }
    if (npc.lvl >= 12) {
        x.push("<div class='ability'>Ability<br>Score<br>Improvement</div>");
        abiUp();
        abiUp();
    }
    if (npc.lvl >= 13) {
        x.push("<div class='ability'>Brutal<br>Critical<br>(2 dice)</div>");
    }
    if (npc.lvl >= 14) {
        x.push("<div class='ability'>"+l14+"</div>");
    }
    if (npc.lvl >= 15) {
        x.push("<div class='ability'>Persistent<br>Rage</div>");
    }
    if (npc.lvl >= 16) {
        x.push("<div class='ability'>Ability<br>Score<br>Improvement</div>");
        abiUp();
        abiUp();
    }
    if (npc.lvl >= 17) {
        x.push("<div class='ability'>Brutal<br>Critical<br>(3 dice)</div>");
    }
    if (npc.lvl >= 18) {
        x.push("<div class='ability'>Indomitable<br>Might</div>");
    }
    if (npc.lvl >= 19) {
        x.push("<div class='ability'>Ability<br>Score<br>Improvement</div>");
        abiUp();
        abiUp();
    }
    if (lvl == 20) {
        x.push("<div class='ability'>Primal<br>Champion</div>");
    }
    abi.innerHTML = x.join(" ");
    return cls;
}
function bard() {
    let x = [];
    let martype = ["cl", "cv"];
    let mt = "d";
    if (lvl < 3) {
        npc.class = "Barbarian";
    } else {
        mt = martype[Math.floor(Math.random() * martype.length)];
        console.log(mt);
    }
    switch (mt) {
        case "cl":
            l3 = "Frenzy";
            l6 = "Mindless<br>Rage";
            l14 = "Retaliation";
            npc.class = "Breserker"
            break;
        case "cv":
            tw = ["Bear", "Egale", "Wolf"];
            ani = tw[Math.floor(Math.random() * tw.length)];
            l3 = "Spirit<br>Seeker</div><div class='ability'>Totem<br>Spirit<br>("+ani+")";
            l6 = "Aspect<br>of<br>The<br>"+ani;
            l14 = "Totemic<br>Attunment<br>("+ani+")";
            npc.class = "Totem Warrior"
            break;
        case "d":
            npc.class = "Barbarian"
            break;
    }
    x.push("<div class='ability'>Bardic<br>Inspiration<br>(d6)</div>");
    if (npc.lvl >= 2) { 
        x.push("<div class='ability'>Jack<br>of<br>All<br>Trades</div><div class='ability'>Song<br>of<br>Rest<br>(d6)</div>"); 
}
    if (npc.lvl >= 3) { 
        x.push("<div class='ability'>Bard<br>College</div><div class='ability'>Expertise</div>"); 
}
    if (npc.lvl >= 4) { 
        x.push("<div class='ability'>Ability<br>Score<br>Improvement</div>"); abiUp(); abiUp(); 
}
    if (npc.lvl >= 5) { 
        x.push("<div class='ability'>Bardic<br>Inspiration<br>(d8)</div><div class='ability'>Font<br>of<br>Inspiration</div>"); 
}
    if (npc.lvl >= 6) { 
        x.push("<div class='ability'>Countercharm</div><div class='ability'>Bard<br>College<br>feature</div>"); 
}
    if (npc.lvl >= 7) { 
        x.push("<div class='ability'> --- </div>"); 
}
    if (npc.lvl >= 8) { 
        x.push("<div class='ability'>Ability<br>Score<br>Improvement</div>"); abiUp(); abiUp(); 
}
    if (npc.lvl >= 9) { 
        x.push("<div class='ability'>Song<br>of<br>Rest<br>(d8)</div>"); 
}
    if (npc.lvl >= 10) { 
        x.push("<div class='ability'>Bardic<br>Inspiration<br>(d10)</div><div class='ability'>Expertise</div><div class='ability'>Magical<br>Secrets</div>"); 
}
    if (npc.lvl >= 11) { 
        x.push("<div class='ability'> --- </div>"); 
}
    if (npc.lvl >= 12) { 
        x.push("<div class='ability'>Ability<br>Score<br>Improvement</div>"); abiUp(); abiUp(); 
}
    if (npc.lvl >= 13) { 
        x.push("<div class='ability'>Song<br>of<br>Rest<br>(d10)</div>"); 
}
    if (npc.lvl >= 14) { 
        x.push("<div class='ability'>Magical<br>Secrets</div><div class='ability'>Bard<br>College<br>feature</div>"); 
}
    if (npc.lvl >= 15) { 
        x.push("<div class='ability'>Bardic<br>Inspiration<br>(d12)</div>"); 
}
    if (npc.lvl >= 16) { 
        x.push("<div class='ability'>Ability<br>Score<br>Improvement</div>"); abiUp(); abiUp(); 
}
    if (npc.lvl >= 17) { 
        x.push("<div class='ability'>Song<br>of<br>Rest<br>(d12)</div>"); 
}
    if (npc.lvl >= 18) { 
        x.push("<div class='ability'>Magical<br>Secrets</div>"); 
}
    if (npc.lvl >= 19) { 
        x.push("<div class='ability'>Ability<br>Score<br>Improvement</div>"); abiUp(); abiUp(); 
}
    if (npc.lvl >= 20) { 
        x.push("<div class='ability'>Superior<br>Inspiration</div>"); 
}
    abi.innerHTML = x.join(" ");
}
function blood_hunter() {

}
function cleric() {
    let x = [];
    x.push("<div class='ability'>Spellcasting</div><div class='ability'>Divine<br>Domain</div>");
    if (npc.lvl >= 2) { x.push("<div class='ability'>Channel<br>Divinity<br>(1/rest)</div><div class='ability'>Divine<br>Domain<br>feature</div>"); }
    if (npc.lvl >= 3) { x.push("<div class='ability'> --- </div>"); }
    if (npc.lvl >= 4) { x.push("<div class='ability'>Ability<br>Score<br>Improvement</div>"); abiUp(); abiUp(); }
    if (npc.lvl >= 5) { x.push("<div class='ability'>Destroy<br>Undead<br>(CR 1/2)</div>"); }
    if (npc.lvl >= 6) { x.push("<div class='ability'>Channel<br>Divinity<br>(2/rest)</div><div class='ability'>Divine<br>Domain<br>feature</div>"); }
    if (npc.lvl >= 7) { x.push("<div class='ability'> --- </div>"); }
    if (npc.lvl >= 8) { x.push("<div class='ability'>Ability<br>Score<br>Improvement</div><div class='ability'>Destroy<br>Undead<br>(CR 1)</div><div class='ability'>Divine<br>Domain<br>feature</div>"); abiUp(); abiUp(); }
    if (npc.lvl >= 9) { x.push("<div class='ability'> --- </div>"); }
    if (npc.lvl >= 10) { x.push("<div class='ability'>Divine<br>Intervention</div>"); }
    if (npc.lvl >= 11) { x.push("<div class='ability'>Destroy<br>Undead<br>(CR 2)</div>"); }
    if (npc.lvl >= 12) { x.push("<div class='ability'>Ability<br>Score<br>Improvement</div>"); abiUp(); abiUp(); }
    if (npc.lvl >= 13) { x.push("<div class='ability'> --- </div>"); }
    if (npc.lvl >= 14) { x.push("<div class='ability'>Destroy<br>Undead<br>(CR 3)</div>"); }
    if (npc.lvl >= 15) { x.push("<div class='ability'> --- </div>"); }
    if (npc.lvl >= 16) { x.push("<div class='ability'>Ability<br>Score<br>Improvement</div>"); abiUp(); abiUp(); }
    if (npc.lvl >= 17) { x.push("<div class='ability'>Destroy<br>Undead<br>(CR 4)</div><div class='ability'>Divine<br>Domain<br>feature</div>"); }
    if (npc.lvl >= 18) { x.push("<div class='ability'>Channel<br>Divinity<br>(3/rest)</div>"); }
    if (npc.lvl >= 19) { x.push("<div class='ability'>Ability<br>Score<br>Improvement</div>"); abiUp(); abiUp(); }
    if (npc.lvl >= 20) { x.push("<div class='ability'>Divine<br>Intervention<br>improvement</div>"); }
    abi.innerHTML = x.join(" ");
}
function druid() {
    let x = [];
    x.push("<div class='ability'>Druidic</div><div class='ability'>Spellcasting</div>");
    if (npc.lvl >= 2) { x.push("<div class='ability'>Wild<br>Shape</div><div class='ability'>Druid<br>Circle</div>"); }
    if (npc.lvl >= 3) { x.push("<div class='ability'> --- </div>"); }
    if (npc.lvl >= 4) { x.push("<div class='ability'>Wild<br>Shape<br>improvement</div><div class='ability'>Ability<br>Score<br>Improvement</div>"); abiUp(); abiUp(); }
    if (npc.lvl >= 5) { x.push("<div class='ability'> --- </div>"); }
    if (npc.lvl >= 6) { x.push("<div class='ability'>Druid<br>Circle<br>feature</div>"); }
    if (npc.lvl >= 7) { x.push("<div class='ability'> --- </div>"); }
    if (npc.lvl >= 8) { x.push("<div class='ability'>Wild<br>Shape<br>improvement</div><div class='ability'>Ability<br>Score<br>Improvement</div>"); abiUp(); abiUp(); }
    if (npc.lvl >= 9) { x.push("<div class='ability'> --- </div>"); }
    if (npc.lvl >= 10) { x.push("<div class='ability'>Druid<br>Circle<br>feature</div>"); }
    if (npc.lvl >= 11) { x.push("<div class='ability'> --- </div>"); }
    if (npc.lvl >= 12) { x.push("<div class='ability'>Ability<br>Score<br>Improvement</div>"); abiUp(); abiUp(); }
    if (npc.lvl >= 13) { x.push("<div class='ability'> --- </div>"); }
    if (npc.lvl >= 14) { x.push("<div class='ability'>Druid<br>Circle<br>feature</div>"); }
    if (npc.lvl >= 15) { x.push("<div class='ability'> --- </div>"); }
    if (npc.lvl >= 16) { x.push("<div class='ability'>Ability<br>Score<br>Improvement</div>"); abiUp(); abiUp(); }
    if (npc.lvl >= 17) { x.push("<div class='ability'> --- </div>"); }
    if (npc.lvl >= 18) { x.push("<div class='ability'>Timeless<br>Body</div><div class='ability'>Beast<br>Spells</div>"); }
    if (npc.lvl >= 19) { x.push("<div class='ability'>Ability<br>Score<br>Improvement</div>"); abiUp(); abiUp(); }
    if (npc.lvl >= 20) { x.push("<div class='ability'>Archdruid</div>"); }
    abi.innerHTML = x.join(" ");
}
function fighter() {
    let x = [];
    let fs = ["Archery", "Defense", "Great<br>Weapon<br>Fighting", "Protection", "Two<br>Weapon<br>Fighting"];
    let martype = ["c", "b", "e"];
    let mt = "d";
    let fs1 = fs[Math.floor(Math.random() * fs.length)];
    let l3;
    let l7;
    let l10;
    let l15;
    let l18;
    if (npc.lvl < 3) {
        npc.class = "Fighter";
    } else {
        mt = martype[Math.floor(Math.random() * martype.length)];
        console.log(mt);
    }
    switch (mt) {
        case "c":
            l3 = "Improved<br>Critical";
            l7 = "Remarkable<br>Athlete";
            l10 = fs[Math.floor(Math.random() * fs.length)];
            if (l10 == fs1) {
                l10 = fs[Math.floor(Math.random() * fs.length)];
            }
            l15 = "Survivor";
            l18 = "Superior<br>Critical";
            cls = "Champion"
            break;
        case "b":
            l3 = "Combat<br>Superiority</div><div class='ability'>Student<br>of<br>War";
            if (npc.lvl >= 3) {
                t2 = tool[Math.floor(Math.random() * tool.length)]
                console.log("%c" + t2, "color:red;");
                toolup.push(t2);
            }
            l7 = "Know<br>Your<br>Enemy";
            l10 = "Improved<br>Combat<br>Superiority";
            l15 = "Relentless";
            l18 = "Improved<br>Combat<br>Superiority II";
            cls = "Battle Master"
            break;
        case "e":
            l3 = "Spellcasting</div><div class='ability'>Weapon<br>Bond";
            l7 = "War<br>Magic";
            l10 = "Eldritch<br>Strike";
            l15 = "Arcane<br>Charge";
            l18 = "Improved<br>War<br>Magic";
            cls = "Eldritch Knight"
            break;
        case "d":
            cls = "Fighter"
    }

    x.push("<div class='ability'>" + fs1 + "</div><div class='ability'>Second<br>Wind</div>");
    if (npc.lvl >= 2) {
        x.push("<div class='ability'>Action<br>Surge<br>(one use)</div>");
    }
    if (npc.lvl >= 3) {

        x.push("<div class='ability'>" + l3 + "</div>");
    }
    if (npc.lvl >= 4) {
        x.push("<div class='ability'>Ability<br>Score<br>Improvement</div>");
        abiUp();
        abiUp();
    }
    if (npc.lvl >= 5) {
        x.push("<div class='ability'>Extra<br>Attack</div>");
    }
    if (npc.lvl >= 6) {
        x.push("<div class='ability'>Ability<br>Score<br>Improvement</div>");
        abiUp();
        abiUp();
    }
    if (npc.lvl >= 7) {
        x.push("<div class='ability'>" + l7 + "</div>");
    }
    if (npc.lvl >= 8) {
        x.push("<div class='ability'>Ability<br>Score<br>Improvement</div>");
        abiUp();
        abiUp();
    }
    if (npc.lvl >= 9) {
        x.push("<div class='ability'>Indomitable<br>(one use)</div>");
    }
    if (npc.lvl >= 10) {
        x.push("<div class='ability'>" + l10 + "</div>");
    }
    if (npc.lvl >= 11) {
        x.push("<div class='ability'>Extra<br>Attack<br>(2)</div>");
    }
    if (npc.lvl >= 12) {
        x.push("<div class='ability'>Ability<br>Score<br>Improvement</div>");
        abiUp();
        abiUp();
    }
    if (npc.lvl >= 13) {
        x.push("<div class='ability'>Indomitable<br>(two uses)</div>");
    }
    if (npc.lvl >= 14) {
        x.push("<div class='ability'>Ability<br>Score<br>Improvement</div>");
        abiUp();
        abiUp();
    }
    if (npc.lvl >= 15) {
        x.push("<div class='ability'>" + l15 + "</div>");
    }
    if (npc.lvl >= 16) {
        x.push("<div class='ability'>Ability<br>Score<br>Improvement</div>");
        abiUp();
        abiUp();
    }
    if (npc.lvl >= 17) {
        x.push("<div class='ability'>Action<br>Surge<br>(two uses)</div><div class='ability'>Indomitable<br>(three uses)</div>");
    }
    if (npc.lvl >= 18) {
        x.push("<div class='ability'>" + l18 + "</div>");
    }
    if (npc.lvl >= 19) {
        x.push("<div class='ability'>Ability<br>Score<br>Improvement</div>");
        abiUp();
        abiUp();
    }
    if (npc.lvl >= 20) {
        x.push("<div class='ability'>Extra<br>Attack<br>(3)</div>");
    }
    abi.innerHTML = x.join(" ");
}
function monk() {
    let x = [];
    x.push("<div class='ability'>Unarmored<br>Defense</div><div class='ability'>Martial<br>Arts</div>");
    if (npc.lvl >= 2) { x.push("<div class='ability'>Ki</div><div class='ability'>Unarmored<br>Movement</div>"); }
    if (npc.lvl >= 3) { x.push("<div class='ability'>Monastic<br>Tradition</div><div class='ability'>Deflect<br>Missiles</div>"); }
    if (npc.lvl >= 4) { x.push("<div class='ability'>Ability<br>Score<br>Improvement</div><div class='ability'>Slow<br>Fall</div>"); abiUp(); abiUp(); }
    if (npc.lvl >= 5) { x.push("<div class='ability'>Extra<br>Attack</div><div class='ability'>Stunning<br>Strike</div>"); }
    if (npc.lvl >= 6) { x.push("<div class='ability'>Ki-Empowered<br>Strikes</div><div class='ability'>Monastic<br>Tradition<br>feature</div>"); }
    if (npc.lvl >= 7) { x.push("<div class='ability'>Evasion</div><div class='ability'>Stillness<br>of<br>Mind</div>"); }
    if (npc.lvl >= 8) { x.push("<div class='ability'>Ability<br>Score<br>Improvement</div>"); abiUp(); abiUp(); }
    if (npc.lvl >= 9) { x.push("<div class='ability'>Unarmored<br>Movement<br>improvement</div>"); }
    if (npc.lvl >= 10) { x.push("<div class='ability'>Purity<br>of<br>Body</div>"); }
    if (npc.lvl >= 11) { x.push("<div class='ability'>Monastic<br>Tradition<br>feature</div>"); }
    if (npc.lvl >= 12) { x.push("<div class='ability'>Ability<br>Score<br>Improvement</div>"); abiUp(); abiUp(); }
    if (npc.lvl >= 13) { x.push("<div class='ability'>Tongue<br>of<br>the<br>Sun<br>and<br>Moon</div>"); }
    if (npc.lvl >= 14) { x.push("<div class='ability'>Diamond<br>Soul</div>"); }
    if (npc.lvl >= 15) { x.push("<div class='ability'>Timeless<br>Body</div>"); }
    if (npc.lvl >= 16) { x.push("<div class='ability'>Ability<br>Score<br>Improvement</div>"); abiUp(); abiUp(); }
    if (npc.lvl >= 17) { x.push("<div class='ability'>Monastic<br>Tradition<br>feature</div>"); }
    if (npc.lvl >= 18) { x.push("<div class='ability'>Empty<br>Body</div>"); }
    if (npc.lvl >= 19) { x.push("<div class='ability'>Ability<br>Score<br>Improvement</div>"); abiUp(); abiUp(); }
    if (npc.lvl >= 20) { x.push("<div class='ability'>Perfect<br>Self</div>"); }
    abi.innerHTML = x.join(" ");
}
function paladin() {
    let x = [];
    x.push("<div class='ability'>Divine<br>Sense</div><div class='ability'>Lay<br>on<br>Hands</div>");
    if (npc.lvl >= 2) { x.push("<div class='ability'>Fighting<br>Style</div><div class='ability'>Spellcasting</div><div class='ability'>Divine<br>Smite</div>"); }
    if (npc.lvl >= 3) { x.push("<div class='ability'>Divine<br>Health</div><div class='ability'>Sacred<br>Oath</div>"); }
    if (npc.lvl >= 4) { x.push("<div class='ability'>Ability<br>Score<br>Improvement</div>"); abiUp(); abiUp(); }
    if (npc.lvl >= 5) { x.push("<div class='ability'>Extra<br>Attack</div>"); }
    if (npc.lvl >= 6) { x.push("<div class='ability'>Aura<br>of<br>Protection</div>"); }
    if (npc.lvl >= 7) { x.push("<div class='ability'>Sacred<br>Oath<br>feature</div>"); }
    if (npc.lvl >= 8) { x.push("<div class='ability'>Ability<br>Score<br>Improvement</div>"); abiUp(); abiUp(); }
    if (npc.lvl >= 9) { x.push("<div class='ability'> --- </div>"); }
    if (npc.lvl >= 10) { x.push("<div class='ability'>Aura<br>of<br>Courage</div>"); }
    if (npc.lvl >= 11) { x.push("<div class='ability'>Improved<br>Divine<br>Smite</div>"); }
    if (npc.lvl >= 12) { x.push("<div class='ability'>Ability<br>Score<br>Improvement</div>"); abiUp(); abiUp(); }
    if (npc.lvl >= 13) { x.push("<div class='ability'> --- </div>"); }
    if (npc.lvl >= 14) { x.push("<div class='ability'>Cleansing<br>Touch</div>"); }
    if (npc.lvl >= 15) { x.push("<div class='ability'>Sacred<br>Oath<br>feature</div>"); }
    if (npc.lvl >= 16) { x.push("<div class='ability'>Ability<br>Score<br>Improvement</div>"); abiUp(); abiUp(); }
    if (npc.lvl >= 17) { x.push("<div class='ability'> --- </div>"); }
    if (npc.lvl >= 18) { x.push("<div class='ability'>Aura<br>improvements</div>"); }
    if (npc.lvl >= 19) { x.push("<div class='ability'>Ability<br>Score<br>Improvement</div>"); abiUp(); abiUp(); }
    if (npc.lvl >= 20) { x.push("<div class='ability'>Sacred<br>Oath<br>feature</div>"); }
    abi.innerHTML = x.join(" ");
}
function ranger() {
    let x = [];
    x.push("<div class='ability'>Favored<br>Enemy</div><div class='ability'>Natural<br>Explorer</div>");
    if (npc.lvl >= 2) { x.push("<div class='ability'>Fighting<br>Style</div><div class='ability'>Spellcasting</div>"); }
    if (npc.lvl >= 3) { x.push("<div class='ability'>Ranger<br>Archetype</div><div class='ability'>Primeval<br>Awareness</div>"); }
    if (npc.lvl >= 4) { x.push("<div class='ability'>Ability<br>Score<br>Improvement</div>"); abiUp(); abiUp(); }
    if (npc.lvl >= 5) { x.push("<div class='ability'>Extra<br>Attack</div>"); }
    if (npc.lvl >= 6) { x.push("<div class='ability'>Favored<br>Enemy<br>and<br>Natural<br>Explorer<br>improvements</div>"); }
    if (npc.lvl >= 7) { x.push("<div class='ability'>Ranger<br>Archetype<br>feature</div>"); }
    if (npc.lvl >= 8) { x.push("<div class='ability'>Ability<br>Score<br>Improvement</div><div class='ability'>Land<br>Stride</div>"); abiUp(); abiUp(); }
    if (npc.lvl >= 9) { x.push("<div class='ability'> --- </div>"); }
    if (npc.lvl >= 10) { x.push("<div class='ability'>Natural<br>Explorer<br>improvement</div><div class='ability'>Hide<br>in<br>Plain<br>Sight</div>"); }
    if (npc.lvl >= 11) { x.push("<div class='ability'>Ranger<br>Archetype<br>feature</div>"); }
    if (npc.lvl >= 12) { x.push("<div class='ability'>Ability<br>Score<br>Improvement</div>"); abiUp(); abiUp(); }
    if (npc.lvl >= 13) { x.push("<div class='ability'> --- </div>"); }
    if (npc.lvl >= 14) { x.push("<div class='ability'>Favored<br>Enemy<br>improvement</div><div class='ability'>Vanish</div>"); }
    if (npc.lvl >= 15) { x.push("<div class='ability'>Ranger<br>Archetype<br>feature</div>"); }
    if (npc.lvl >= 16) { x.push("<div class='ability'>Ability<br>Score<br>Improvement</div>"); abiUp(); abiUp(); }
    if (npc.lvl >= 17) { x.push("<div class='ability'> --- </div>"); }
    if (npc.lvl >= 18) { x.push("<div class='ability'>Feral<br>Senses</div>"); }
    if (npc.lvl >= 19) { x.push("<div class='ability'>Ability<br>Score<br>Improvement</div>"); abiUp(); abiUp(); }
    if (npc.lvl >= 20) { x.push("<div class='ability'>Foe<br>Slayer</div>"); }
    abi.innerHTML = x.join(" ");
}
function rogue() {
    let x = [];
    x.push("<div class='ability'>Expertise</div><div class='ability'>Sneak<br>Attack</div><div class='ability'>Thieves’<br>Cant</div>");
    if (npc.lvl >= 2) { x.push("<div class='ability'>Cunning<br>Action</div>"); }
    if (npc.lvl >= 3) { x.push("<div class='ability'>Roguish<br>Archetype</div>"); }
    if (npc.lvl >= 4) { x.push("<div class='ability'>Ability<br>Score<br>Improvement</div>"); abiUp(); abiUp(); }
    if (npc.lvl >= 5) { x.push("<div class='ability'>Uncanny<br>Dodge</div>"); }
    if (npc.lvl >= 6) { x.push("<div class='ability'>Expertise</div>"); }
    if (npc.lvl >= 7) { x.push("<div class='ability'>Evasion</div>"); }
    if (npc.lvl >= 8) { x.push("<div class='ability'>Ability<br>Score<br>Improvement</div>"); abiUp(); abiUp(); }
    if (npc.lvl >= 9) { x.push("<div class='ability'>Roguish<br>Archetype<br>feature</div>"); }
    if (npc.lvl >= 10) { x.push("<div class='ability'>Ability<br>Score<br>Improvement</div>"); abiUp(); abiUp(); }
    if (npc.lvl >= 11) { x.push("<div class='ability'>Reliable<br>Talent</div>"); }
    if (npc.lvl >= 12) { x.push("<div class='ability'>Ability<br>Score<br>Improvement</div>"); abiUp(); abiUp(); }
    if (npc.lvl >= 13) { x.push("<div class='ability'>Roguish<br>Archetype<br>feature</div>"); }
    if (npc.lvl >= 14) { x.push("<div class='ability'>Blindsense</div>"); }
    if (npc.lvl >= 15) { x.push("<div class='ability'>Slippery<br>Mind</div>"); }
    if (npc.lvl >= 16) { x.push("<div class='ability'>Ability<br>Score<br>Improvement</div>"); abiUp(); abiUp(); }
    if (npc.lvl >= 17) { x.push("<div class='ability'>Roguish<br>Archetype<br>feature</div>"); }
    if (npc.lvl >= 18) { x.push("<div class='ability'>Elusive</div>"); }
    if (npc.lvl >= 19) { x.push("<div class='ability'>Ability<br>Score<br>Improvement</div>"); abiUp(); abiUp(); }
    if (npc.lvl >= 20) { x.push("<div class='ability'>Stroke<br>of<br>Luck</div>"); }
    abi.innerHTML = x.join(" ");
}
function sorcerer() {
    let x = [];
    x.push("<div class='ability'>Spellcasting</div><div class='ability'>Sorcerous<br>Origin</div>");
    if (npc.lvl >= 2) { x.push("<div class='ability'>Font<br>of<br>Magic</div>"); }
    if (npc.lvl >= 3) { x.push("<div class='ability'>Metamagic</div>"); }
    if (npc.lvl >= 4) { x.push("<div class='ability'>Ability<br>Score<br>Improvement</div>"); abiUp(); abiUp(); }
    if (npc.lvl >= 5) { x.push("<div class='ability'> --- </div>"); }
    if (npc.lvl >= 6) { x.push("<div class='ability'>Sorcerous<br>Origin<br>feature</div>"); }
    if (npc.lvl >= 7) { x.push("<div class='ability'> --- </div>"); }
    if (npc.lvl >= 8) { x.push("<div class='ability'>Ability<br>Score<br>Improvement</div>"); abiUp(); abiUp(); }
    if (npc.lvl >= 9) { x.push("<div class='ability'> --- </div>"); }
    if (npc.lvl >= 10) { x.push("<div class='ability'>Metamagic</div>"); }
    if (npc.lvl >= 11) { x.push("<div class='ability'> --- </div>"); }
    if (npc.lvl >= 12) { x.push("<div class='ability'>Ability<br>Score<br>Improvement</div>"); abiUp(); abiUp(); }
    if (npc.lvl >= 13) { x.push("<div class='ability'> --- </div>"); }
    if (npc.lvl >= 14) { x.push("<div class='ability'>Sorcerous<br>Origin<br>feature</div>"); }
    if (npc.lvl >= 15) { x.push("<div class='ability'> --- </div>"); }
    if (npc.lvl >= 16) { x.push("<div class='ability'>Ability<br>Score<br>Improvement</div>"); abiUp(); abiUp(); }
    if (npc.lvl >= 17) { x.push("<div class='ability'>Metamagic</div>"); }
    if (npc.lvl >= 18) { x.push("<div class='ability'>Sorcerous<br>Origin<br>feature</div>"); }
    if (npc.lvl >= 19) { x.push("<div class='ability'>Ability<br>Score<br>Improvement</div>"); abiUp(); abiUp(); }
    if (npc.lvl >= 20) { x.push("<div class='ability'>Sorcerous<br>Restoration</div>"); }
    abi.innerHTML = x.join(" ");
}
function warlock() {
    let x = [];
    x.push("<div class='ability'>Otherworldly<br>Patron</div><div class='ability'>Pact<br>Magic</div>");
    if (npc.lvl >= 2) { x.push("<div class='ability'>Eldritch<br>Invocations</div>"); }
    if (npc.lvl >= 3) { x.push("<div class='ability'>Pact<br>Boon</div>"); }
    if (npc.lvl >= 4) { x.push("<div class='ability'>Ability<br>Score<br>Improvement</div>"); abiUp(); abiUp(); }
    if (npc.lvl >= 5) { x.push("<div class='ability'> --- </div>"); }
    if (npc.lvl >= 6) { x.push("<div class='ability'>Otherworldly<br>Patron<br>feature</div>"); }
    if (npc.lvl >= 7) { x.push("<div class='ability'> --- </div>"); }
    if (npc.lvl >= 8) { x.push("<div class='ability'>Ability<br>Score<br>Improvement</div>"); abiUp(); abiUp(); }
    if (npc.lvl >= 9) { x.push("<div class='ability'> --- </div>"); }
    if (npc.lvl >= 10) { x.push("<div class='ability'>Otherworldly<br>Patron<br>feature</div>"); }
    if (npc.lvl >= 11) { x.push("<div class='ability'>Mystic<br>Arcanum<br>(6th<br>level)</div>"); }
    if (npc.lvl >= 12) { x.push("<div class='ability'>Ability<br>Score<br>Improvement</div>"); abiUp(); abiUp(); }
    if (npc.lvl >= 13) { x.push("<div class='ability'>Mystic<br>Arcanum<br>(7th<br>level)</div>"); }
    if (npc.lvl >= 14) { x.push("<div class='ability'>Otherworldly<br>Patron<br>feature</div>"); }
    if (npc.lvl >= 15) { x.push("<div class='ability'>Mystic<br>Arcanum<br>(8th<br>level)</div>"); }
    if (npc.lvl >= 16) { x.push("<div class='ability'>Ability<br>Score<br>Improvement</div>"); abiUp(); abiUp(); }
    if (npc.lvl >= 17) { x.push("<div class='ability'>Mystic<br>Arcanum<br>(9th<br>level)</div>"); }
    if (npc.lvl >= 18) { x.push("<div class='ability'> --- </div>"); }
    if (npc.lvl >= 19) { x.push("<div class='ability'>Ability<br>Score<br>Improvement</div>"); abiUp(); abiUp(); }
    if (npc.lvl >= 20) { x.push("<div class='ability'>Eldritch<br>Master</div>"); }
    abi.innerHTML = x.join(" ");
}
function wizard() {
    let x = [];
    x.push("<div class='ability'>Spellcasting</div><div class='ability'>Arcane<br>Recovery</div>");
    if (npc.lvl >= 2) { x.push("<div class='ability'>Arcane<br>Tradition</div>"); }
    if (npc.lvl >= 3) { x.push("<div class='ability'> --- </div>"); }
    if (npc.lvl >= 4) { x.push("<div class='ability'>Ability<br>Score<br>Improvement</div>"); abiUp(); abiUp(); }
    if (npc.lvl >= 5) { x.push("<div class='ability'> --- </div>"); }
    if (npc.lvl >= 6) { x.push("<div class='ability'>Arcane<br>Tradition<br>feature</div>"); }
    if (npc.lvl >= 7) { x.push("<div class='ability'> --- </div>"); }
    if (npc.lvl >= 8) { x.push("<div class='ability'>Ability<br>Score<br>Improvement</div>"); abiUp(); abiUp(); }
    if (npc.lvl >= 9) { x.push("<div class='ability'> --- </div>"); }
    if (npc.lvl >= 10) { x.push("<div class='ability'>Arcane<br>Tradition<br>feature</div>"); }
    if (npc.lvl >= 11) { x.push("<div class='ability'> --- </div>"); }
    if (npc.lvl >= 12) { x.push("<div class='ability'>Ability<br>Score<br>Improvement</div>"); abiUp(); abiUp(); }
    if (npc.lvl >= 13) { x.push("<div class='ability'> --- </div>"); }
    if (npc.lvl >= 14) { x.push("<div class='ability'>Arcane<br>Tradition<br>feature</div>"); }
    if (npc.lvl >= 15) { x.push("<div class='ability'> --- </div>"); }
    if (npc.lvl >= 16) { x.push("<div class='ability'>Ability<br>Score<br>Improvement</div>"); abiUp(); abiUp(); }
    if (npc.lvl >= 17) { x.push("<div class='ability'> --- </div>"); }
    if (npc.lvl >= 18) { x.push("<div class='ability'>Spell<br>Mastery</div>"); }
    if (npc.lvl >= 19) { x.push("<div class='ability'>Ability<br>Score<br>Improvement</div>"); abiUp(); abiUp(); }
    if (npc.lvl >= 20) { x.push("<div class='ability'>Signature<br>Spell</div>"); }
    abi.innerHTML = x.join(" ");
}
/*
    x = JSON.parse();
        When receiving from a server

    x = JSON.strigify();
        To be able to send to servers

    x =
    {
        "name": "Sam",
        "number": 123,
        "bool": true,
        "array": ["a", "b", "c"]
    }

*/
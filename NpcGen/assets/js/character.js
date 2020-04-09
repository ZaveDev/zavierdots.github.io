var npcClassName = "default";
var baseClass;
var npc = {
    name: "",
    spd: 30,
    prof: 2,
    ac: 10,
    hp: 0,
    race: "",
    lvl: 0,
    background: "",
    class: "",
    str: 0,
    strSave: 0,
    strMod: 0,
    dex: 0,
    dexSave: 0,
    dexMod: 0,
    con: 0,
    conSave: 0,
    conMod: 0,
    int: 0,
    intSave: 0,
    intMod: 0,
    wis: 0,
    wisSave: 0,
    wisMod: 0,
    cha: 0,
    chaSave: 0,
    chaMod: 0,
    feat: "",
    athl:0,
    acro:0,
    slei:0,
    stea:0,
    arca:0,
    hist:0,
    inve:0,
    natu:0,
    reli:0,
    anim:0,
    insi:0,
    medi:0,
    perc:0,
    surv:0,
    dece:0,
    inti:0,
    perf:0,
    pers:0,
    inventory:[],
    proficiencies: [],
    create: function() {
        this.lvl = Math.floor(Math.random() * (20 - 1) + 1);
        this.prof = profPerLevel(this.lvl);
        this.str = stats();
        this.strMod = mods(this.str);
        this.strSave = 0;
        this.dex = stats();
        this.dexMod = mods(this.dex);
        this.dexSave = 0;
        this.con = stats();
        this.conMod = mods(this.con);
        this.conSave = 0;
        this.int = stats();
        this.intMod = mods(this.int);
        this.intSave = 0;
        this.wis = stats();
        this.wisMod = mods(this.wis);
        this.wisSave = 0;
        this.cha = stats();
        this.chaMod = mods(this.cha);   
        this.chaSave = 0;
        this.feat = fts();
        this.background = background();
        this.race = setRace();
        selClass();
        this.class = className();
        this.hp = setHp(baseClass);
        this.strMod = mods(this.str);
        this.dexMod = mods(this.dex);
        this.conMod = mods(this.con);
        this.intMod = mods(this.int);
        this.wisMod = mods(this.wis);
        this.chaMod = mods(this.cha);
        modSkills();
        this.ac = 10 + this.dexMod;
        this.name = charName[Math.floor(Math.random() * charName.length)];
    },
    reset: function() {
        this.name = "";
        this.background = "";
        this.prof = 2;
        this.spd = 30;
        this.ac = 10;
        this.hp = 0;
        this.race = "";
        this.lvl = 0;
        this.class = "";
        this.str = 0;
        this.strSave = 0;
        this.strMod = 0;
        this.dex = 0;
        this.dexSave = 0;
        this.dexMod = 0;
        this.con = 0;
        this.conSave = 0;
        this.conMod = 0;
        this.int = 0;
        this.intSave = 0;
        this.intMod = 0;
        this.wis = 0;
        this.wisSave = 0;
        this.wisMod = 0;
        this.cha = 0;
        this.chaSave = 0;
        this.chaMod = 0;
        this.feat = "";
        this.athl = 0;
        this.acro = 0;
        this.slei = 0;
        this.stea = 0;
        this.arca = 0;
        this.hist = 0;
        this.inve = 0;
        this.natu = 0;
        this.reli = 0;
        this.anim = 0;
        this.insi = 0;
        this.medi = 0;
        this.perc = 0;
        this.surv = 0;
        this.dece = 0;
        this.inti = 0;
        this.perf = 0;
        this.pers = 0;
        this.inventory = [];
        this.proficiencies = [];
        t_strSave = false;
        t_dexSave = false;
        t_conSave = false;
        t_wisSave = false;
        t_intSave = false;
        t_chaSave = false;
        t_athl = false;
        t_acro = false;
        t_slei = false;
        t_stea = false;
        t_arca = false;
        t_hist = false;
        t_inve = false;
        t_natu = false;
        t_reli = false;
        t_anim = false;
        t_insi = false;
        t_medi = false;
        t_perc = false;
        t_surv = false;
        t_dece = false;
        t_inti = false;
        t_perf = false;
        t_pers = false;
    },

};
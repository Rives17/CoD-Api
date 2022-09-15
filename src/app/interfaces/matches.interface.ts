export interface LastMatches {
    summary: Summary;
    matches: Match[];
}

export interface Match {
    utcStartSeconds: number;
    utcEndSeconds:   number;
    map:             Map;
    mode:            string;
    matchID:         string;
    duration:        number;
    playlistName:    null;
    version:         number;
    gameType:        GameType;
    playerCount:     number;
    playerStats:     { [key: string]: number };
    player:          Player;
    teamCount:       number;
    rankedTeams:     null;
    draw:            boolean;
    privateMatch:    boolean;
}

export enum GameType {
    Wz = "wz",
}

export enum Map {
    MpSmIsland1 = "mp_sm_island_1",
    MpWzIsland = "mp_wz_island",
}

export interface Player {
    team:            string;
    rank:            number;
    awards:          { [key: string]: number };
    username:        Username;
    uno:             string;
    clantag:         Clantag;
    loadouts:        Loadout[];
    brMissionStats?: BrMissionStats;
    loadout:         Loadout[];
}

export interface BrMissionStats {
    missionsComplete:           number;
    totalMissionXpEarned:       number;
    totalMissionWeaponXpEarned: number;
    missionStatsByType:         MissionStatsByType;
}

export interface MissionStatsByType {
    assassination?:       Assassination;
    masterassassination?: Assassination;
}

export interface Assassination {
    weaponXp: number;
    xp:       number;
    count:    number;
}

export enum Clantag {
    Ttv = "TTV",
}

export interface Loadout {
    primaryWeapon:   AryWeapon;
    secondaryWeapon: AryWeapon;
    perks:           Perk[];
    extraPerks:      Perk[];
    killstreaks:     Killstreak[];
    tactical:        Lethal;
    lethal:          Lethal;
}

export interface Perk {
    name:             ExtraPerkName;
    label:            null;
    image:            null;
    imageMainUi:      null;
    imageProgression: null;
}

export enum ExtraPerkName {
    Null = "null",
    SpecialtyBrAdvancedscout = "specialty_br_advancedscout",
    SpecialtyBrSerpentine = "specialty_br_serpentine",
    SpecialtyCovertOps = "specialty_covert_ops",
    SpecialtyEOD = "specialty_eod",
    SpecialtyMunitions2 = "specialty_munitions_2",
    SpecialtyNull = "specialty_null",
    SpecialtyScavengerPlus = "specialty_scavenger_plus",
}

export interface Killstreak {
    name:  KillstreakName;
    label: null;
}

export enum KillstreakName {
    ChopperGunner = "chopper_gunner",
    HoverJet = "hover_jet",
    None = "none",
    Uav = "uav",
}

export interface Lethal {
    name:             LethalName;
    label:            null;
    image:            null;
    imageLarge:       null;
    progressionImage: null;
}

export enum LethalName {
    EquipAdrenaline = "equip_adrenaline",
    EquipC4 = "equip_c4",
    EquipFlash = "equip_flash",
    EquipFrag = "equip_frag",
    EquipGasGrenade = "equip_gas_grenade",
    EquipSemtex = "equip_semtex",
    None = "none",
}

export interface AryWeapon {
    name:        PrimaryWeaponName;
    label:       null;
    imageLoot:   null;
    imageIcon:   null;
    variant:     string;
    attachments: Attachment[];
}

export interface Attachment {
    name:     AttachmentName;
    label:    null;
    image:    null;
    category: null;
}

export enum AttachmentName {
    Ammocust1 = "ammocust1",
    Barcust = "barcust",
    Barshort = "barshort",
    Barsil2 = "barsil2",
    Bipod = "bipod",
    Calsmgdrums = "calsmgdrums",
    Drums = "drums",
    Gripangpro = "gripangpro",
    Gripvert = "gripvert",
    GunperkBrace = "gunperk_brace",
    GunperkQuick = "gunperk_quick",
    GunperkTightgrip = "gunperk_tightgrip",
    Muzzlecust = "muzzlecust",
    None = "none",
    Stockpad = "stockpad",
    Stocks = "stocks",
    Stockskel = "stockskel",
    Vzscope2 = "vzscope2",
}

export enum PrimaryWeaponName {
    Iw8Fists = "iw8_fists",
    Iw8PiMike = "iw8_pi_mike",
    Iw8PiMike9 = "iw8_pi_mike9",
    Iw8PiPapa320 = "iw8_pi_papa320",
    S4ArBromeopg = "s4_ar_bromeopg",
    S4ArChotel41 = "s4_ar_chotel41",
    S4ArFecho = "s4_ar_fecho",
    S4PiMike1911 = "s4_pi_mike1911",
    S4SmPpapa41 = "s4_sm_ppapa41",
}

export enum Username {
    Rives17 = "Rives17",
}

export interface Summary {
    all:                                                   { [key: string]: number };
    br_brsolo:                                             { [key: string]: number };
    br_brtrios:                                            { [key: string]: number };
    "br_rebirth_reverse_playlist_wz340/fortkeep_res_solo": { [key: string]: number };
    br_brduos:                                             { [key: string]: number };
    "br_olaride_playlist_wz350/olaride":                   { [key: string]: number };
    "br_rebirth_playlist_wz340/fortkeep_res_quad":         { [key: string]: number };
}

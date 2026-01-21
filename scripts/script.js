const zeldaGames = [
    {
      fullName: "The Legend of Zelda",
      publisher: "Nintendo",
      metacritic: 84,
      like: true,
      likeCounter: 15420,
      price: 4.99,
      console: "NES",
      publishedYear:  1986,
      comments:  [
        { name: "RetroGamer88", comment: "This game started it all and holds up surprisingly well even today." },
        { name: "LinkFan", comment: "The open-world exploration was revolutionary for its time." },
        { name: "OldSchoolNerd", comment: "Still challenging and rewarding after all these years." }
      ]
    },
    {
      fullName: "Zelda II: The Adventure of Link",
      publisher: "Nintendo",
      metacritic: 73,
      like: false,
      likeCounter: 8934,
      price: 4.99,
      console: "NES",
      publishedYear:  1987,
      comments:  [
        { name: "PlatformerPro", comment:  "The side-scrolling combat makes this the most unique Zelda game." },
        { name: "DarkSoulsPlayer", comment: "Brutally difficult but incredibly satisfying when you finally beat it." }
      ]
    },
    {
      fullName: "The Legend of Zelda: A Link to the Past",
      publisher:  "Nintendo",
      metacritic: 95,
      like:  true,
      likeCounter:  28763,
      price: 7.99,
      console: "SNES",
      publishedYear: 1991,
      comments: [
        { name: "ClassicGamer", comment: "The perfect balance of exploration, combat, and puzzle-solving." },
        { name: "MusicLover92", comment: "The soundtrack is absolutely legendary and still gives me chills." },
        { name: "DungeonMaster", comment:  "Every dungeon is brilliantly designed with memorable bosses." },
        { name: "SpeedRunner", comment: "One of the most popular speedrun games with endless optimization possibilities." }
      ]
    },
    {
      fullName:  "The Legend of Zelda:  Link's Awakening",
      publisher: "Nintendo",
      metacritic: 90,
      like: true,
      likeCounter: 19582,
      price: 5.99,
      console: "Game Boy",
      publishedYear: 1993,
      comments: [
        { name: "HandheldHero", comment:  "Amazing that they fit such a complete Zelda experience on the Game Boy." },
        { name: "StoryEnthusiast", comment: "The twist ending still haunts me in the best way possible." },
        { name: "NostalgiaKid", comment: "This was my first Zelda game and it made me fall in love with the series." }
      ]
    },
    {
      fullName:  "The Legend of Zelda:  Ocarina of Time",
      publisher: "Nintendo",
      metacritic: 99,
      like: true,
      likeCounter: 45891,
      price: 9.99,
      console: "Nintendo 64",
      publishedYear: 1998,
      comments: [
        { name: "3DPioneer", comment:  "This game defined how 3D adventure games should be made." },
        { name: "EmotionalGamer", comment: "The time travel mechanic and story made me cry multiple times." },
        { name: "CombatKing", comment: "Z-targeting changed combat in video games forever." },
        { name: "TempleExplorer", comment: "The Water Temple is infamous but every other dungeon is perfection." },
        { name: "EponaRider", comment: "Riding across Hyrule Field on Epona at sunset is pure gaming magic." },
        { name: "GOATdebater", comment: "Still the greatest game of all time in my book, nothing comes close." }
      ]
    },
    {
      fullName: "The Legend of Zelda: Majora's Mask",
      publisher: "Nintendo",
      metacritic:  95,
      like: true,
      likeCounter: 32147,
      price: 9.99,
      console: "Nintendo 64",
      publishedYear: 2000,
      comments: [
        { name:  "DarkThemes", comment: "The darkest and most emotionally mature Zelda game ever made." },
        { name: "TimeLooper", comment: "The three-day cycle creates tension like no other game I've played." },
        { name: "MaskCollector", comment: "Collecting all the masks and learning everyone's stories is incredibly rewarding." },
        { name: "MoonFear", comment: "That moon still gives me nightmares but I love every second of it." }
      ]
    },
    {
      fullName: "The Legend of Zelda: Oracle of Seasons",
      publisher: "Nintendo",
      metacritic: 91,
      like: true,
      likeCounter: 12456,
      price: 5.99,
      console: "Game Boy Color",
      publishedYear: 2001,
      comments: [
        { name: "SeasonChanger", comment: "The season-swapping mechanic creates fantastic puzzle opportunities." },
        { name: "CapcomFan", comment: "Capcom did an amazing job with this Zelda entry." }
      ]
    },
    {
      fullName: "The Legend of Zelda: Oracle of Ages",
      publisher: "Nintendo",
      metacritic: 92,
      like: true,
      likeCounter: 11823,
      price: 5.99,
      console: "Game Boy Color",
      publishedYear: 2001,
      comments: [
        { name:  "PuzzleMaster", comment: "More puzzle-focused than Seasons and it's absolutely brilliant." },
        { name: "LinkedGamer", comment: "Playing both Oracle games with the linked password system is essential." },
        { name: "TimeTraveler", comment: "The past and present switching makes for clever dungeon designs." }
      ]
    },
    {
      fullName: "The Legend of Zelda: The Wind Waker",
      publisher: "Nintendo",
      metacritic: 96,
      like: true,
      likeCounter: 34209,
      price: 19.99,
      console: "GameCube",
      publishedYear: 2002,
      comments: [
        { name: "CellShadedFan", comment: "The art style was controversial at first but aged like fine wine." },
        { name: "SailorLink", comment: "Sailing the Great Sea is therapeutic and the exploration is top-tier." },
        { name: "AnimationNerd", comment: "Link's expressions and animations give him so much personality." },
        { name: "GanondorfSympathizer", comment: "This game's version of Ganondorf is the most sympathetic and well-written." }
      ]
    },
    {
      fullName: "The Legend of Zelda: Four Swords Adventures",
      publisher: "Nintendo",
      metacritic: 86,
      like: false,
      likeCounter: 7621,
      price: 29.99,
      console: "GameCube",
      publishedYear: 2004,
      comments: [
        { name: "MultiplayerFan", comment: "Playing with four friends using GBA link cables was chaotic fun." }
      ]
    },
    {
      fullName: "The Legend of Zelda: The Minish Cap",
      publisher:  "Nintendo",
      metacritic: 89,
      like: true,
      likeCounter: 16734,
      price: 7.99,
      console: "Game Boy Advance",
      publishedYear: 2004,
      comments: [
        { name:  "TinyHero", comment:  "Shrinking down to explore the world from a tiny perspective is genius." },
        { name: "CapcomAppreciator", comment: "Another Capcom masterpiece with incredible attention to detail." },
        { name: "CharmOverload", comment: "The art style and characters are absolutely adorable." }
      ]
    },
    {
      fullName: "The Legend of Zelda: Twilight Princess",
      publisher: "Nintendo",
      metacritic:  95,
      like: true,
      likeCounter: 38562,
      price: 19.99,
      console: "Wii / GameCube",
      publishedYear: 2006,
      comments: [
        { name:  "WolfLink", comment: "The wolf transformation segments add great variety to the gameplay." },
        { name: "RealisticZelda", comment: "The darker, more realistic art style was exactly what I wanted." },
        { name: "MidnaFan", comment: "Midna is hands down the best companion character in the entire series." },
        { name: "DungeonCrawler", comment:  "Some of the longest and most complex dungeons in Zelda history." },
        { name: "WiiMotionMaster", comment: "Swinging the Wii remote to attack never got old for me." }
      ]
    },
    {
      fullName: "The Legend of Zelda: Phantom Hourglass",
      publisher: "Nintendo",
      metacritic: 90,
      like: false,
      likeCounter: 10293,
      price: 14.99,
      console: "Nintendo DS",
      publishedYear:  2007,
      comments: [
        { name: "TouchScreenGamer", comment: "The stylus controls were innovative but took some getting used to." },
        { name: "SequelSeeker", comment: "Great continuation of Wind Waker's story with Linebeck as a memorable character." }
      ]
    },
    {
      fullName: "The Legend of Zelda: Spirit Tracks",
      publisher: "Nintendo",
      metacritic: 87,
      like: false,
      likeCounter: 9147,
      price: 14.99,
      console: "Nintendo DS",
      publishedYear: 2009,
      comments: [
        { name: "TrainConductor", comment: "Driving the train is oddly satisfying and fits the world perfectly." },
        { name: "ZeldaPlayable", comment: "Having Zelda as a playable character in dungeons was a refreshing change." },
        { name: "FlutePlayer", comment: "Playing the Spirit Flute using the DS microphone was creative but frustrating." }
      ]
    },
    {
      fullName: "The Legend of Zelda: Skyward Sword",
      publisher:  "Nintendo",
      metacritic: 93,
      like: true,
      likeCounter: 24681,
      price: 59.99,
      console: "Wii",
      publishedYear: 2011,
      comments: [
        { name: "MotionPlusUser", comment: "The 1: 1 sword motion controls made combat feel truly immersive." },
        { name: "OriginStory", comment: "Learning the origin of the Master Sword and the series timeline was epic." },
        { name: "GrooseFan", comment: "Groose has the best character arc in any Zelda game period." },
        { name: "BossBattler", comment: "Fighting Ghirahim and Demise are some of the best boss fights ever." }
      ]
    },
    {
      fullName:  "The Legend of Zelda:  A Link Between Worlds",
      publisher: "Nintendo",
      metacritic: 91,
      like: true,
      likeCounter: 22394,
      price: 19.99,
      console: "Nintendo 3DS",
      publishedYear:  2013,
      comments:  [
        { name: "WallMerger", comment: "The wall-merging mechanic opens up puzzle design in brilliant ways." },
        { name: "NonLinearFan", comment: "Being able to tackle dungeons in any order gives great freedom." },
        { name: "LoruleLover", comment: "The dark world counterpart is beautifully designed and haunting." }
      ]
    },
    {
      fullName: "The Legend of Zelda: Tri Force Heroes",
      publisher: "Nintendo",
      metacritic:  73,
      like: false,
      likeCounter: 5892,
      price: 19.99,
      console: "Nintendo 3DS",
      publishedYear: 2015,
      comments: [
        { name: "FashionLink", comment: "The costume system is surprisingly fun and the outfits look great." }
      ]
    },
    {
      fullName: "The Legend of Zelda: Breath of the Wild",
      publisher:  "Nintendo",
      metacritic: 97,
      like: true,
      likeCounter: 52318,
      price: 59.99,
      console: "Nintendo Switch / Wii U",
      publishedYear: 2017,
      comments: [
        { name: "OpenWorldExplorer", comment: "The freedom to go anywhere and do anything from the start is revolutionary." },
        { name: "PhysicsPlayer", comment: "The chemistry engine allows for creative solutions I never imagined possible." },
        { name: "ShrineHunter", comment: "Finding all 120 shrines across Hyrule was an addictive treasure hunt." },
        { name: "ClimbingAddict", comment: "Being able to climb almost any surface completely changes exploration." },
        { name: "WeatherWatcher", comment: "The dynamic weather system and environmental interactions are incredible." },
        { name: "ModernMasterpiece", comment: "This game redefined what Zelda could be and raised the bar for open-world games." }
      ]
    },
    {
      fullName: "The Legend of Zelda: Link's Awakening (Remake)",
      publisher: "Nintendo",
      metacritic: 87,
      like: true,
      likeCounter: 18765,
      price: 59.99,
      console: "Nintendo Switch",
      publishedYear: 2019,
      comments: [
        { name: "ToyboxAesthetic", comment: "The adorable toy-like art style brings Koholint Island to life beautifully." },
        { name: "RemakeAppreciator", comment: "They kept everything that made the original special while modernizing perfectly." },
        { name: "DungeonBuilder", comment: "The Chamber Dungeon creator is a fun addition for puzzle enthusiasts." }
      ]
    },
    {
      fullName: "The Legend of Zelda: Tears of the Kingdom",
      publisher:  "Nintendo",
      metacritic: 96,
      like: true,
      likeCounter: 48927,
      price: 69.99,
      console: "Nintendo Switch",
      publishedYear: 2023,
      comments: [
        { name: "UltrahandMaster", comment: "The building mechanics let me create insane contraptions I never thought possible." },
        { name: "SkyExplorer", comment: "The Sky Islands and Depths add massive vertical exploration to Hyrule." },
        { name: "FusionFanatic", comment: "Fuse makes every weapon feel unique and encourages experimentation." },
        { name: "EngineeringGenius", comment: "I spent more time building vehicles and machines than doing main quests." },
        { name: "StoryDiver", comment: "The Dragon Tear memories hit harder emotionally than any Zelda story before." }
      ]
    }
  ];
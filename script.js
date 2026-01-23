const zeldaGames = [
  {
    fullName: "The Legend of Zelda",
    publisher: "Nintendo",
    metacritic: 84,
    like: true,
    likeCounter: 15420,
    price: 4.99,
    console: "NES",
    publishedYear: 1986,
    comments: [
      { name: "RetroGamer88", comment: "This game started it all and holds up surprisingly well even today." },
      { name: "LinkFan", comment: "The open-world exploration was revolutionary for its time." },
      { name: "OldSchoolNerd", comment: "Still challenging and rewarding after all these years." },
      { name: "PixelatedHero", comment: "The lack of hand-holding makes discovering secrets incredibly satisfying." },
      { name: "8BitLegend", comment: "That iconic theme song still gets stuck in my head decades later." },
      { name: "DungeonDelver", comment: "Finding all nine dungeons without a map was pure adventure." },
    ],
  },
  {
    fullName: "Zelda II: The Adventure of Link",
    publisher: "Nintendo",
    metacritic: 73,
    like: false,
    likeCounter: 8934,
    price: 4.99,
    console: "NES",
    publishedYear: 1987,
    comments: [
      { name: "PlatformerPro", comment: "The side-scrolling combat makes this the most unique Zelda game." },
      { name: "DarkSoulsPlayer", comment: "Brutally difficult but incredibly satisfying when you finally beat it." },
      { name: "RPGelements", comment: "The leveling system and magic spells added depth to the formula." },
      { name: "FrustratedGamer", comment: "I respect what they tried but this game broke me multiple times." },
      { name: "ExperimentAppreciator", comment: "Not the best Zelda but I admire Nintendo for taking risks." },
    ],
  },
  {
    fullName: "The Legend of Zelda: A Link to the Past",
    publisher: "Nintendo",
    metacritic: 95,
    like: true,
    likeCounter: 28763,
    price: 7.99,
    console: "SNES",
    publishedYear: 1991,
    comments: [
      { name: "ClassicGamer", comment: "The perfect balance of exploration, combat, and puzzle-solving." },
      { name: "MusicLover92", comment: "The soundtrack is absolutely legendary and still gives me chills." },
      { name: "DungeonMaster", comment: "Every dungeon is brilliantly designed with memorable bosses." },
      { name: "SpeedRunner", comment: "One of the most popular speedrun games with endless optimization possibilities." },
      { name: "DarkWorldFan", comment: "Switching between Light and Dark World never gets old." },
      { name: "MasterSwordSeeker", comment: "Pulling the Master Sword from the pedestal is an iconic gaming moment." },
    ],
  },
  {
    fullName: "The Legend of Zelda:   Link's Awakening",
    publisher: "Nintendo",
    metacritic: 90,
    like: true,
    likeCounter: 19582,
    price: 5.99,
    console: "Game Boy",
    publishedYear: 1993,
    comments: [
      { name: "HandheldHero", comment: "Amazing that they fit such a complete Zelda experience on the Game Boy." },
      { name: "StoryEnthusiast", comment: "The twist ending still haunts me in the best way possible." },
      { name: "NostalgiaKid", comment: "This was my first Zelda game and it made me fall in love with the series." },
      { name: "DreamExplorer", comment: "The surreal atmosphere of Koholint Island is unlike any other Zelda." },
      { name: "MarinLover", comment: "Marin is one of the most memorable characters in the entire franchise." },
      { name: "WeirdAndWonderful", comment: "The bizarre cameos from Mario enemies make this game wonderfully strange." },
    ],
  },
  {
    fullName: "The Legend of Zelda:  Ocarina of Time",
    publisher: "Nintendo",
    metacritic: 99,
    like: true,
    likeCounter: 45891,
    price: 9.99,
    console: "Nintendo 64",
    publishedYear: 1998,
    comments: [
      { name: "3DPioneer", comment: "This game defined how 3D adventure games should be made." },
      { name: "EmotionalGamer", comment: "The time travel mechanic and story made me cry multiple times." },
      { name: "CombatKing", comment: "Z-targeting changed combat in video games forever." },
      { name: "TempleExplorer", comment: "The Water Temple is infamous but every other dungeon is perfection." },
      { name: "EponaRider", comment: "Riding across Hyrule Field on Epona at sunset is pure gaming magic." },
      { name: "GOATdebater", comment: "Still the greatest game of all time in my book, nothing comes close." },
      { name: "OcarinaPlayer", comment: "Learning and playing songs on the ocarina was pure joy." },
      { name: "NaviHater", comment: "Hey!  Listen! - Those two words still trigger my PTSD." },
      { name: "SheikFan", comment: "The Sheik reveal was mind-blowing when I was a kid." },
      { name: "GanondorfFear", comment: "Fighting Ganondorf in the castle ruins is the most epic final battle ever." },
    ],
  },
  {
    fullName: "The Legend of Zelda: Majora's Mask",
    publisher: "Nintendo",
    metacritic: 95,
    like: true,
    likeCounter: 32147,
    price: 9.99,
    console: "Nintendo 64",
    publishedYear: 2000,
    comments: [
      { name: "DarkThemes", comment: "The darkest and most emotionally mature Zelda game ever made." },
      { name: "TimeLooper", comment: "The three-day cycle creates tension like no other game I've played." },
      { name: "MaskCollector", comment: "Collecting all the masks and learning everyone's stories is incredibly rewarding." },
      { name: "MoonFear", comment: "That moon still gives me nightmares but I love every second of it." },
      { name: "ClockTownCitizen", comment: "Every NPC has a detailed schedule and story - the world feels truly alive." },
      { name: "TransformationFan", comment: "The transformation masks completely change how you play the game." },
      { name: "SkullKidSympath", comment: "Skull Kid's backstory is heartbreaking and beautifully told." },
      { name: "AnjuAndKafei", comment: "The Anju and Kafei quest is the most emotional side quest in gaming." },
    ],
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
      { name: "CapcomFan", comment: "Capcom did an amazing job with this Zelda entry." },
      { name: "ActionFocused", comment: "More combat-oriented than Ages and I love it for that." },
      { name: "RingCollector", comment: "The ring system adds great customization options." },
      { name: "DinDancer", comment: "Din is an underrated character who deserves more love." },
    ],
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
      { name: "PuzzleMaster", comment: "More puzzle-focused than Seasons and it's absolutely brilliant." },
      { name: "LinkedGamer", comment: "Playing both Oracle games with the linked password system is essential." },
      { name: "TimeTraveler", comment: "The past and present switching makes for clever dungeon designs." },
      { name: "NayruProtector", comment: "Nayru's innocence makes you want to save her even more." },
      { name: "BrainTeaser", comment: "Some of these puzzles are genuinely challenging even for veterans." },
      { name: "TwinGames", comment: "Playing both Oracle games back-to-back reveals the full epic story." },
    ],
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
      { name: "GanondorfSympathizer", comment: "This game's version of Ganondorf is the most sympathetic and well-written." },
      { name: "TreasureHunter", comment: "Finding treasure charts and salvaging is oddly addictive." },
      { name: "KingOfRedLions", comment: "The King of Red Lions is my favorite companion in the series." },
      { name: "TetraAdmirer", comment: "Tetra is the most badass version of Zelda we've ever gotten." },
      { name: "MusicConductor", comment: "Conducting the Wind Waker to change wind direction never gets tedious." },
    ],
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
      { name: "MultiplayerFan", comment: "Playing with four friends using GBA link cables was chaotic fun." },
      { name: "CoOpLover", comment: "The cooperative puzzles required real teamwork and communication." },
      { name: "LonelyPlayer", comment: "Great with friends but nearly impossible to experience properly now." },
      { name: "ShadowLinkBattler", comment: "The Shadow Link fights when you compete with friends are hilarious." },
    ],
  },
  {
    fullName: "The Legend of Zelda: The Minish Cap",
    publisher: "Nintendo",
    metacritic: 89,
    like: true,
    likeCounter: 16734,
    price: 7.99,
    console: "Game Boy Advance",
    publishedYear: 2004,
    comments: [
      { name: "TinyHero", comment: "Shrinking down to explore the world from a tiny perspective is genius." },
      { name: "CapcomAppreciator", comment: "Another Capcom masterpiece with incredible attention to detail." },
      { name: "CharmOverload", comment: "The art style and characters are absolutely adorable." },
      { name: "EzloFan", comment: "Ezlo is a grumpy but lovable companion with great dialogue." },
      { name: "KinstoneCollector", comment: "Fusing Kinstones with NPCs is a satisfying collectathon." },
      { name: "VaatiLore", comment: "This game gives Vaati a proper origin story and makes him interesting." },
    ],
  },
  {
    fullName: "The Legend of Zelda: Twilight Princess",
    publisher: "Nintendo",
    metacritic: 95,
    like: true,
    likeCounter: 38562,
    price: 19.99,
    console: "Wii / GameCube",
    publishedYear: 2006,
    comments: [
      { name: "WolfLink", comment: "The wolf transformation segments add great variety to the gameplay." },
      { name: "RealisticZelda", comment: "The darker, more realistic art style was exactly what I wanted." },
      { name: "MidnaFan", comment: "Midna is hands down the best companion character in the entire series." },
      { name: "DungeonCrawler", comment: "Some of the longest and most complex dungeons in Zelda history." },
      { name: "WiiMotionMaster", comment: "Swinging the Wii remote to attack never got old for me." },
      { name: "ArborealArchitect", comment: "The Temple of Time and Arbiter's Grounds are masterclass dungeon design." },
      { name: "ZantEnjoyer", comment: "Zant is delightfully unhinged and his boss fight is bonkers." },
      { name: "HorseCombat", comment: "Jousting on horseback while shooting arrows is incredibly epic." },
    ],
  },
  {
    fullName: "The Legend of Zelda:  Phantom Hourglass",
    publisher: "Nintendo",
    metacritic: 90,
    like: false,
    likeCounter: 10293,
    price: 14.99,
    console: "Nintendo DS",
    publishedYear: 2007,
    comments: [
      { name: "TouchScreenGamer", comment: "The stylus controls were innovative but took some getting used to." },
      { name: "SequelSeeker", comment: "Great continuation of Wind Waker's story with Linebeck as a memorable character." },
      { name: "LinebeckLaughs", comment: "Linebeck is a cowardly scoundrel and I love him for it." },
      { name: "TempleRepeater", comment: "Having to replay the Ocean Temple repeatedly was frustrating." },
      { name: "StylusArtist", comment: "Drawing the path for the boomerang was surprisingly satisfying." },
    ],
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
      { name: "FlutePlayer", comment: "Playing the Spirit Flute using the DS microphone was creative but frustrating." },
      { name: "PhantomCommander", comment: "Controlling Phantom Zelda to solve puzzles is unique and fun." },
      { name: "RailwayEngineer", comment: "Customizing your train and exploring new tracks is more engaging than it sounds." },
      { name: "ChooChooFan", comment: "The train setting is weird for Zelda but somehow it works." },
    ],
  },
  {
    fullName: "The Legend of Zelda: Skyward Sword",
    publisher: "Nintendo",
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
      { name: "BossBattler", comment: "Fighting Ghirahim and Demise are some of the best boss fights ever." },
      { name: "SkyDiver", comment: "Diving off skyloft and free-falling through clouds never gets old." },
      { name: "FiProtector", comment: "Fi gets too much hate - her farewell scene destroyed me emotionally." },
      { name: "LoftwingRider", comment: "Flying on your Loftwing is pure freedom and joy." },
      { name: "ZeldaRomance", comment: "Link and Zelda's relationship is the most developed and touching in the series." },
    ],
  },
  {
    fullName: "The Legend of Zelda:   A Link Between Worlds",
    publisher: "Nintendo",
    metacritic: 91,
    like: true,
    likeCounter: 22394,
    price: 19.99,
    console: "Nintendo 3DS",
    publishedYear: 2013,
    comments: [
      { name: "WallMerger", comment: "The wall-merging mechanic opens up puzzle design in brilliant ways." },
      { name: "NonLinearFan", comment: "Being able to tackle dungeons in any order gives great freedom." },
      { name: "LoruleLover", comment: "The dark world counterpart is beautifully designed and haunting." },
      { name: "RavioMerchant", comment: "Ravio is an interesting twist on a familiar face and a fun character." },
      { name: "HildaAppreciator", comment: "Princess Hilda is a complex and tragic character done right." },
      { name: "3DEffectUser", comment: "The 3D effect on the 3DS made dungeons pop beautifully." },
    ],
  },
  {
    fullName: "The Legend of Zelda: Tri Force Heroes",
    publisher: "Nintendo",
    metacritic: 73,
    like: false,
    likeCounter: 5892,
    price: 19.99,
    console: "Nintendo 3DS",
    publishedYear: 2015,
    comments: [
      { name: "FashionLink", comment: "The costume system is surprisingly fun and the outfits look great." },
      { name: "TripleTeam", comment: "The three-player totem pole puzzles are clever but need good coordination." },
      { name: "OnlineStruggler", comment: "Playing with randoms online was often more frustrating than fun." },
      { name: "LocalCoOp", comment: "With two friends locally this game is a blast, otherwise skip it." },
    ],
  },
  {
    fullName: "The Legend of Zelda: Breath of the Wild",
    publisher: "Nintendo",
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
      { name: "ModernMasterpiece", comment: "This game redefined what Zelda could be and raised the bar for open-world games." },
      { name: "KorokSeeker", comment: "Yahaha! Finding 900 Koroks is insane but I did it anyway." },
      { name: "ParaGlider", comment: "Paragliding from mountains and towers is the most freeing feeling ever." },
      { name: "CookingMama", comment: "The cooking system is so detailed I spent hours experimenting with recipes." },
      { name: "GuardianRunner", comment: "Those Guardian beams gave me anxiety but learning to parry them was satisfying." },
    ],
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
      { name: "DungeonBuilder", comment: "The Chamber Dungeon creator is a fun addition for puzzle enthusiasts." },
      { name: "TiltShiftLover", comment: "The tilt-shift effect makes the world look like a tiny diorama." },
      { name: "FrameRateNitpicker", comment: "The occasional frame drops in grassy areas are unfortunate but minor." },
      { name: "BalladeOfWindFish", comment: "The remastered soundtrack is hauntingly beautiful and made me cry." },
    ],
  },
  {
    fullName: "The Legend of Zelda: Tears of the Kingdom",
    publisher: "Nintendo",
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
      { name: "StoryDiver", comment: "The Dragon Tear memories hit harder emotionally than any Zelda story before." },
      { name: "AscendAbuser", comment: "Ascend is the most useful ability ever and trivializes so many obstacles." },
      { name: "DepthsExplorer", comment: "The Depths are terrifying and beautiful, exploring them blind was thrilling." },
      { name: "SageTeam", comment: "Fighting alongside the Sage avatars makes combat feel more epic." },
      { name: "ZonaiMystery", comment: "The Zonai lore and ancient technology fascinate me endlessly." },
      { name: "GanonReborn", comment: "This version of Ganondorf is the most menacing and powerful yet." },
    ],
  },
];
let games = document.getElementById("game_cards");

function init() {
  renderGameCards();
}

function renderGameCards() {
  let cardsRef = document.getElementById("game_cards");
  cardsRef.innerHTML = "";
  for (let gameIndex = 0; gameIndex < zeldaGames.length; gameIndex++) {
    let card = document.createElement("article");
    card.className = "game-card";
    card.dataset.gameIndex = gameIndex;
    card.innerHTML = getGameCardTemplet(gameIndex);
    cardsRef.appendChild(card);
    renderComments(gameIndex);
  }
}

function renderCard() {}
function renderComments(gameIndex) {
  let commentRef = document.getElementById("comments_container_id" + gameIndex);
  commentRef.innerHTML = "";
  for (let commentIndex = 0; commentIndex < zeldaGames[gameIndex].comments.length; commentIndex++) {
    commentRef.innerHTML += getGameCardCommentTemplet(gameIndex, commentIndex);
  }
}

games.addEventListener("click", (element) => {
  let action = element.target.dataset.action;
  console.log(action);
  
  if (action === "like") {
    let game = element.target.closest(".game-card");
    let gameIndex = game.dataset.gameIndex;
    let btnRubee = element.target;
    toggleRubee(gameIndex, btnRubee);
  }
  init()
});

function toggleRubee(gameIndex, rubee) {
  if (zeldaGames[gameIndex].like) {
    rubee.classList.remove("rupee-green");
    rubee.classList.add("rupee-unfill");
    zeldaGames[gameIndex].like = !zeldaGames[gameIndex].like;
    zeldaGames[gameIndex].likeCounter -= 1;
  } else {
    rubee.classList.remove("rupee-unfill");
    rubee.classList.add("rupee-green");
    zeldaGames[gameIndex].like = !zeldaGames[gameIndex].like;
    zeldaGames[gameIndex].likeCounter += 1;
  }
}
// like function

//like counter
//store like bool
// change rubee

//comment function
//whrite comment

//store comment

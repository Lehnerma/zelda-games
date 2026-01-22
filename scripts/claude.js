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
    ],
  },
  {
    fullName: "The Legend of Zelda: Ocarina of Time",
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
    ],
  },
];

const gamesContainer = document.getElementById("games-container");

// Dynamisch alle Games erstellen
zeldaGames.forEach((game, index) => {
  const gameCard = document.createElement("div");
  gameCard.className = "game-card";
  gameCard.dataset.gameIndex = index;

  gameCard.innerHTML = `
          <div class="game-header">
            <h2 class="game-title">${game.fullName}</h2>
            <button class="like-btn ${game.like ? "liked" : ""}" data-action="like">
              ${game.like ? "❤️" : "🤍"} ${game.likeCounter.toLocaleString()}
            </button>
          </div>
          
          <div class="game-info">
            <div class="info-item">
              <span class="metacritic">${game.metacritic}</span>
              <span>Metacritic</span>
            </div>
            <div class="info-item">
              🎮 ${game.console}
            </div>
            <div class="info-item">
              📅 ${game.publishedYear}
            </div>
            <div class="info-item price">
              €${game.price}
            </div>
          </div>
          
          <button class="comments-toggle" data-action="toggle-comments">
            💬 ${game.comments.length} Kommentare anzeigen
          </button>
          
          <div class="comments-section" data-comments-section>
            ${game.comments
              .map(
                (comment, commentIndex) => `
              <div class="comment" data-comment-index="${commentIndex}">
                <div class="comment-author">${comment.name}</div>
                <div class="comment-text">${comment.comment}</div>
              </div>
            `
              )
              .join("")}
          </div>
        `;

  gamesContainer.appendChild(gameCard);
});

// Event Delegation - EIN Listener für ALLES
gamesContainer.addEventListener("click", (e) => {
  const action = e.target.dataset.action;

  if (action === "toggle-comments") {
    const gameCard = e.target.closest(".game-card");
    const commentsSection = gameCard.querySelector("[data-comments-section]");
    const isActive = commentsSection.classList.toggle("active");

    e.target.textContent = isActive ? `💬 Kommentare ausblenden` : `💬 ${zeldaGames[gameCard.dataset.gameIndex].comments.length} Kommentare anzeigen`;
  }

  if (action === "like") {
    const gameCard = e.target.closest(".game-card");
    const gameIndex = gameCard.dataset.gameIndex;
    const game = zeldaGames[gameIndex];

    // Like-Status umschalten
    game.like = !game.like;
    game.likeCounter += game.like ? 1 : -1;

    // Button aktualisieren
    e.target.classList.toggle("liked");
    e.target.innerHTML = `${game.like ? "❤️" : "🤍"} ${game.likeCounter.toLocaleString()}`;
  }
});

// Beispiel: Auf einzelnen Comment zugreifen
gamesContainer.addEventListener("click", (e) => {
  if (e.target.closest(".comment")) {
    const comment = e.target.closest(".comment");
    const gameCard = e.target.closest(".game-card");
    const gameIndex = gameCard.dataset.gameIndex;
    const commentIndex = comment.dataset.commentIndex;

    console.log("Geklicktes Game:", zeldaGames[gameIndex].fullName);
    console.log("Geklickter Comment:", zeldaGames[gameIndex].comments[commentIndex]);
  }
});

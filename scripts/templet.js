function getGameCardTemplet(index) {
    return`
    <header class="game-header">
    <div class="game-logo"></div>
    <aside>
        <h2 class="heading--gold">${zeldaGames[index].fullName}</h2>
        <h3 class="heading--gold">${zeldaGames[index].publisher}</h3>
    </aside>
    </header>
    <main>
    <section>
        <aside class="game-info">
        <h5>price</h5>
        <p class="body cinzel">${zeldaGames[index].price}</p>
        </aside>
        <aside class="game-info">
        <h5>Consol:</h5>
        <p class="body cinzel">${zeldaGames[index].console}</p>
        </aside>
        <aside class="game-info">
        <h5>Year:</h5>
        <p class="body cinzel">${zeldaGames[index].publishedYear}</p>
        </aside>
        <aside class="game-info">
        <h5>Metacritic:</h5>
        <p class="body cinzel">${zeldaGames[index].metacritic}</p>
        </aside>
    </section>
    <section class="like-section">
        <h5>Likes:</h5>
        <aside>
        <p data-action="likecounter">${zeldaGames[index].likeCounter}</p>
        <button class="rupee ${zeldaGames[index].like? "rupee-green" : "rupee-unfill"}" data-action="like"></button>
        </aside>
    </section>
    </main>
    <footer>
    <article id="comments_container_id${index}" class="comments-container">

    </article>
    <section class="input-container">
        <input type="text" id="comment_inp_id${index}" class="input" placeholder="whrite a comment.."/>
        <button class="btn-sword" data-action="comment"></button>
    </section>
    </footer>
    `
  }

  function getGameCardCommentTemplet(gameIndex, commentIndex){
    return`
<section class="comment-container">
    <h6 class="comment-user">${zeldaGames[gameIndex].comments[commentIndex].name}</h6>
    <p class="comment">${zeldaGames[gameIndex].comments[commentIndex].comment}</p>
</section>
    `
  }
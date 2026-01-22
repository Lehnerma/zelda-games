function getGameCardTemplet(index) {
    return`
<article class="game--card">
    <header class="game--header">
    <div class="game--logo"></div>
    <aside>
        <h2 class="heading--gold">${zeldaGames[index].fullName}</h2>
        <h3 class="heading--gold">${zeldaGames[index].publisher}</h3>
    </aside>
    </header>
    <main>
    <section>
        <aside class="game--info">
        <h5>price</h5>
        <p class="body cinzel">${zeldaGames[index].price}</p>
        </aside>
        <aside class="game--info">
        <h5>Consol:</h5>
        <p class="body cinzel">${zeldaGames[index].console}</p>
        </aside>
        <aside class="game--info">
        <h5>Year:</h5>
        <p class="body cinzel">${zeldaGames[index].publishedYear}</p>
        </aside>
        <aside class="game--info">
        <h5>Metacritic:</h5>
        <p class="body cinzel">${zeldaGames[index].metacritic}</p>
        </aside>
    </section>
    <section class="like">
        <h5>Likes:</h5>
        <aside>
        <label for="btn_like">${zeldaGames[index].likeCounter}</label>
        <button class="btn rupee rupee--unfill" id="btn_like" onclick=""></button>
        </aside>
    </section>
    </main>
    <footer>
    <article id="comments_container" class="comments-container">

    </article>
    <section class="input-container">
        <input type="text" id="comment_inp" class="input" placeholder="whrite a comment.."/>
        <button class="btn btn--sword"></button>
    </section>
    </footer>
</article>
    `
  }

  function getGameCardComment(){
    return`
<section class="comment-container">
    <h6 class="comment-user" id="comment-user">ZeldaFanboy1:</h6>
    <p class="comment" id="comment">Das ist ein Test kommentar um es anzuzeigen.</p>
</section>
    `
  }
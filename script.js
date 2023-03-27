const quoteText = document.querySelector(".quote");
const author = document.querySelector(".author");
const quoteBtn = document.querySelector("#new-quote");
const tweet = document.querySelector("#tweet-quote");

function randomQuote() {
  fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      quoteText.innerText = result.content;
      author.innerText = result.author;
    });
}

function tweetQuote() {
  window.open(
    `https://twitter.com/intent/tweet?text=${
      '"' + quoteText.innerText + '"' + " -- " + author.innerText
    }`
  );
}

quoteBtn.addEventListener("click", randomQuote);
tweet.addEventListener("click", tweetQuote);

// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', function() {
  const articles = document.getElementsByTagName("article");
  
  const numberOfArticles = articles.length;
  let article = [];

  for(i = 0; i < numberOfArticles; i++) {

    article = articles[i].getElementsByTagName("span")[1];

    article.addEventListener("click", function (e) { 
      mimicServerCall()
      .then(information => processLike(e))
      .catch(function (error) {
        document.getElementById("modal").classList.remove("hidden")
        document.getElementById("modal").textContent = error;
        setTimeout(function() { 
          document.getElementById("modal").classList.add("hidden") 
          }, 3000);
        })
      })
  } 
});

function processLike(element) {
  if(element.target.className.search("activated-heart") > 0) {
    //The heart is activated. Remove that:
    element.target.classList.remove("activated-heart");
  }
  else {
    element.target.classList.add("activated-heart");
  }
  
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

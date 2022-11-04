import axios from "axios"

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  let cardContainer = document.createElement("div")
  cardContainer.classList.add("card")

  let headline = document.createElement("div")
  headline.classList.add("headline")
  headline.textContent = article.headline

  let authorContainer = document.createElement("div")
  authorContainer.classList.add("author")

  let imgContainer = document.createElement("div")
  imgContainer.classList.add("img-container")

  let authorImg = document.createElement("img")
  authorImg.src = article.authorPhoto

  let authorSpan = document.createElement("span")
  authorSpan.textContent = `By ${article.authorName}`

  imgContainer.appendChild(authorImg)
  authorContainer.appendChild(imgContainer)
  authorContainer.appendChild(authorSpan)

  cardContainer.appendChild(headline)
  cardContainer.appendChild(authorContainer)
  

  return cardContainer
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

let elementToAppendTo = document.querySelector(selector)

axios.get("http://localhost:5001/api/articles")
.then(res => {
  console.log(res.data.articles)
  for(const property in res.data.articles){
    res.data.articles[property].forEach(el => {
      elementToAppendTo.appendChild(Card(el))
    })
  }
})
.catch(err => {

})


}

export { Card, cardAppender }

const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The html tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  let header = document.createElement("div")
  header.classList.add("header")

  let dateSpan = document.createElement("span")
  dateSpan.classList.add("date")
  dateSpan.textContent = date
  
  let titleHeader = document.createElement("h1")
  titleHeader.textContent = title

  let tempSpan = document.createElement("span")
  tempSpan.classList.add("temp")
  tempSpan.textContent = temp

  header.appendChild(dateSpan)
  header.appendChild(titleHeader)
  header.appendChild(tempSpan)

  return header
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

  // HINT: querySelector can take in a string (ie querySelector("#wrapper")) 
  // but it can also take in a variable (ie querySelector(selector))
  // We are taking care of passing in the correct selector on line 16,
  // so all that you need to do is pass it into the querySelector method
  // for the tests to work!

  let elementToAppendTo = document.querySelector(selector)
  elementToAppendTo.appendChild(Header("Title","11/3/2022","73"))
  return elementToAppendTo
}

export { Header, headerAppender }

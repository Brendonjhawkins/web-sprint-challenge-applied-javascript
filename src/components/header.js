const Header = (title, date, temp) => {
// Instantiating elements
const header = document.createElement('div')
const headerDate = document.createElement('span')
const headerTitle = document.createElement('h1')
const headerTemp = document.createElement('span')

header.classList.add('header')
headerDate.classList.add('date')
headerTemp.classList.add('temp')

headerTitle.textContent = title
headerDate.textContent = date
headerTemp.textContent = temp

header.appendChild(headerDate)
header.appendChild(headerTitle)
header.appendChild(headerTemp)

return header
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const selected = document.querySelector(selector);
  selected.appendChild(Header('Lambda Times', 'August 6, 2021', '12°F'))
}

export { Header, headerAppender }

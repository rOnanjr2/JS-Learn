const heading = document.getElementById('hello')
// const heading2 = document.getElementsByTagName('h2')[0]
// const heading2 = document.getElementsByClassName('h2-class')[0]
// const heading2 = document.querySelector('.h2-class')
const heading2 = document.querySelector('h2') //Первый попавшийся элемент
const heading3 = heading2.nextElementSibling


console.log(heading2)
console.log(heading3)

// console.dir(heading.textContent)

setTimeout(() => {
  addStylesTo(heading)
}, 1500)

function addStylesTo(node) {
  heading.textContent = 'Changed from JavaScript'
  heading.style.color = 'red'
  heading.style.textAlign = 'center'
  heading.style.backgroundColor = 'black'
  heading.style.padding = '2rem'
}

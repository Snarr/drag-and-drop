let blocks = document.getElementsByClassName('block')

for (let block of blocks) {
  block.setAttribute('draggable', 'true')
  console.log(block.getAttribute('draggable'))
}

// document.addEventListener('drag', (event) => {
//   event.target.style.backgroundColor = 'red' 
//   event.target.style.top = event.y + "px"
//   event.target.style.left = event.x + "px"
//   event.preventDefault()
// }, false)

document.addEventListener('dragend', (event) => {
  event.target.style.backgroundColor = 'red' 
  event.target.style.top = event.y-25 + "px"
  event.target.style.left = event.x-25 + "px"
  event.preventDefault()
})

document.addEventListener('dragstart', (event) => {
  event.dataTransfer.effectAllowed = "copyMove";
  // event.dataTransfer.setDragImage(document.getElementById('ghost'), 0, 0);
})
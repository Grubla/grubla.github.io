
let elementToWatch = document.querySelector('h1')
elementToWatch.contentEditable = true

let observer = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    console.log(mutation.target.textContent)
  })
})

observer.observe(elementToWatch, {
  subtree: true,
  characterData: tru
})

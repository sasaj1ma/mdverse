import Typesetter from "palt-typesetting"

const typeset = () => {
  const typesetter = new Typesetter({
    useWordBreak: true,
    wrapLatin: false,
    insertThinSpaces: true,
  })

  // Apply to main content area
  const contentElement = document.querySelector(".center") as HTMLElement
  if (contentElement) {
    contentElement.innerHTML = typesetter.render(contentElement.innerHTML)
  }
}

document.addEventListener("nav", typeset)
typeset()

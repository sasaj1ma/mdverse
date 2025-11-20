import Typesetter from "palt-typesetting"

document.addEventListener("nav", () => {
  const typesetter = new Typesetter({
    useWordBreak: true,
    wrapLatin: false,
    insertThinSpaces: true,
  })

  // Apply to main content area
  const contentElement = document.querySelector(".center") as HTMLElement
  if (contentElement) {
    typesetter.render(contentElement)
  }
})

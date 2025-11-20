// @ts-ignore
import clipboardScript from "./scripts/clipboard.inline"
// @ts-ignore
import paltScript from "./scripts/palt.inline"
import clipboardStyle from "./styles/clipboard.scss"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const Body: QuartzComponent = ({ children }: QuartzComponentProps) => {
  return <div id="quartz-body">{children}</div>
}

Body.afterDOMLoaded = [clipboardScript, paltScript]
Body.css = clipboardStyle

export default (() => Body) satisfies QuartzComponentConstructor

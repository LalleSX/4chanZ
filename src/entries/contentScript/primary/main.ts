import "../../enableDevHmr"
import "../../../index.css"
import { initImageHovering } from "../image"
import removeContent from "../misc/removeContent"
import catalog from "./catalog"
import thread from "./thread"


removeContent()
thread()
initImageHovering()
catalog()

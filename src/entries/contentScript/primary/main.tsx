import "../../enableDevHmr"
import React from "react"
import ReactDOM from "react-dom"
import "../../../index.css"
import { initImageHovering } from "../image"
import Header from "./Header"
import removeContent from "../misc/removeContent"
import catalog from "./catalog"
import $ from "jquery"
import filterPosts from "./filter"
import thread from "./thread"


filterPosts()
removeContent()
// Render
const header = document.createElement("div")
header.id = "header"
document.body.prepend(header)
ReactDOM.render(<Header />, header)



// Initialize the image hovering functionality once the document is ready


// Delete this <script type="text/javascript" data-cfasync="false" src="//s.4cdn.org/js/extension.min.1160.js"></script>
$("script[src='//s.4cdn.org/js/extension.min.1160.js']").remove()
thread()
initImageHovering()
catalog()
$(window).unbind("scroll")

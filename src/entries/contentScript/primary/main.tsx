import "../../enableDevHmr"
import React from "react"
import ReactDOM from "react-dom/client"
import "../../../index.css"
import { initImageHovering } from "../image"
import Header from "./Header"
import removeContent from "../misc/removeContent"
import catalog from "./catalog"
import $ from "jquery"
import filterPosts from "./filter"
import thread from "./thread"
import renderContent from "../renderContent"


filterPosts()
removeContent()
renderContent(import.meta.PLUGIN_WEB_EXT_CHUNK_CSS_PATHS, (appRoot) => {
   ReactDOM.createRoot(appRoot).render(
      <React.StrictMode>
         <Header />
      </React.StrictMode>
   )
})

// Initialize the image hovering functionality once the document is ready


// Delete this <script type="text/javascript" data-cfasync="false" src="//s.4cdn.org/js/extension.min.1160.js"></script>
$("script[src='//s.4cdn.org/js/extension.min.1160.js']").remove()
thread()
initImageHovering()
catalog()
$(window).unbind("scroll")

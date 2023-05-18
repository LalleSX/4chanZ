import "../../enableDevHmr"
import React from "react"
import ReactDOM from "react-dom/client"
import renderContent from "../renderContent"
import "../../../index.css"
import { initImageHovering } from "../image"
import $ from "jquery"
import Header from "./Header"
import removeContent from "../misc/removeContent"
import QuickReply from "./QuickReply"
import catalog from "./catalog"

removeContent()
QuickReply.name
renderContent(import.meta.PLUGIN_WEB_EXT_CHUNK_CSS_PATHS, (appRoot) => {
	ReactDOM.createRoot(appRoot).render(
		<React.StrictMode>
			<Header />
		</React.StrictMode>
	)
})
// Initialize the image hovering functionality once the document is ready

console.log("Document is ready!")
initImageHovering()
catalog()

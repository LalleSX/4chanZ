import $ from "jquery"
import chanAPI from "~/entries/contentScript/chanAPI"

function thread() {
   // If the pathname is not like this: /{board}/thread/{threadId}, then return
   if (window.location.pathname.split("/").length < 4) {
      return
   }
   const HEADER_MARGIN_TOP = "50px"
   const BOARD_NAME = window.location.pathname.split("/")[1]
   const THREAD_ID = window.location.pathname.split("/")[3]
   const BOARD_API_URL = chanAPI.thread(BOARD_NAME, THREAD_ID)

   $("body").css("margin-top", HEADER_MARGIN_TOP)

   $.getJSON(BOARD_API_URL, () => {
      const opID = $(`#pc${THREAD_ID}`)
      const opComment = opID.find(".postMessage")

      if (opComment.length > 0) {
         const removeWbrTags = (text: string): string => {
            return text.replace(/<wbr>/g, "")
         }
         // Make links clickable
         const linkify = (text: string): string => {
            const urlPattern = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|])/ig
            return text.replace(urlPattern, "<a target=\"_blank\" href=\"$1\">$1</a>")
         }

         const sanitizedHTML = removeWbrTags(opComment.html())
         opComment.html(linkify(sanitizedHTML))
      }
   })
}

export default thread

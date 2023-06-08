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

   document.body.style.marginTop = HEADER_MARGIN_TOP

   fetch(BOARD_API_URL)
      .then(response => response.json())
      .then(() => {
         const opID = document.querySelector(`#pc${THREAD_ID}`)
         const opComment = opID?.querySelector(".postMessage")

         if (opComment) {
            const removeWbrTags = (text: string): string => {
               return text.replace(/<wbr>/g, "")
            }
            // Make links clickable
            const linkify = (text: string): string => {
               const urlPattern = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|])/ig
               return text.replace(urlPattern, "<a target=\"_blank\" href=\"$1\">$1</a>")
            }

            const sanitizedHTML = removeWbrTags(opComment.innerHTML)
            opComment.innerHTML = linkify(sanitizedHTML)
         }
      })
}

export default thread

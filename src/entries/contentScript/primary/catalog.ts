import { Thread } from "~/types/thread"
import $ from "jquery"
import chanAPI from "~/entries/contentScript/chanAPI"

function catalog() {
   const HEADER_MARGIN_TOP = "50px"
   const BOARD_NAME = window.location.pathname.split("/")[1]
   const BOARD_API_URL = chanAPI.catalog(BOARD_NAME)

   $("body").css("margin-top", HEADER_MARGIN_TOP)

   $.getJSON(BOARD_API_URL, (data) => {
      data.flatMap((page: { threads: Thread[] }) => page.threads).forEach((thread: Thread) => {
         const { no: threadId, com: comment, sub: subject, tim: threadPicTim, ext: threadPicExt } = thread

         // assuming each thread teaser has an id like `thread-{id}`



         ///// Sort $("#threads").children() by id

         //const threads = $("#threads").children().toArray().sort((a, b) => {
         //	const aId = parseInt(a.id.split("-")[1])
         //	const bId = parseInt(b.id.split("-")[1])
         //	return aId - bId
         //})
         ////// Append the sorted threads to the $("#threads") element
         //$("#threads").append(threads)
         // Assume the 4chan API URL is like this

         // Replace {board} with the actual board name
         const threadTeaser = $(`#thread-${threadId} > .teaser`)

         if (threadTeaser.length > 0) {
            threadTeaser.html(comment)

            if (subject) {
               threadTeaser.prepend(`<span class="subject">${subject}</span><br/>`)
                  .find(".subject").css({ color: "#0f0c5d", fontWeight: "700" })
            }

            $(`#thread-${threadId} > .teaser > b`).remove()

            threadTeaser.find(".quote").css("color", "#789922")

            threadTeaser.find(".quotelink").css({ color: "#d00", fontWeight: "350" })
         }

         const threadPic = $(`#thread-${threadId} > a > img`)

         if (threadPic.length > 0) {
            let threadPicNewSrc = `https://i.4cdn.org/${BOARD_NAME}/${threadPicTim}${threadPicExt}`

            if (threadPicExt === ".webm") {
               threadPicNewSrc = `https://i.4cdn.org/${BOARD_NAME}/${threadPicTim}s.jpg`
            } else if (threadPic.attr("src") === "//s.4cdn.org/image/filedeleted-res.gif") {
               threadPicNewSrc = "//s.4cdn.org/image/filedeleted-res.gif"
            }

            threadPic.attr({ src: threadPicNewSrc, loading: "lazy" })
         }
      })
   })
}

export default catalog
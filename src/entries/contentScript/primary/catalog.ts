import { Thread } from "~/types/thread"
import $ from "jquery"
import chanAPI from "~/entries/contentScript/chanAPI"


function catalog() {
   // Make the catalog fit the header
   $("body").css("margin-top", "30px")
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
   const boardName = window.location.pathname.split("/")[1]
   const boardApiUrl = chanAPI.catalog(boardName)

   $.getJSON(boardApiUrl, (data) => {
      const threads = data.flatMap((page: { threads: Thread[] }) => page.threads)
      threads.forEach((thread: Thread) => {
         const threadId = thread.no
         const comment = thread.com
         const subject = thread.sub
         const threadPicTim = thread.tim
         const threadPicExt = thread.ext

         // Assuming each thread teaser has an id like `thread-{id}`
         const threadTeaser = $(`#thread-${threadId} > .teaser`)
         if (threadTeaser.length > 0) {
            // Replace the teaser with the comment
            threadTeaser.html(comment)
            // Add the subject to the top of the comment if it exists
            if (subject) {
               threadTeaser.prepend(`<span class= "subject">${subject}</span> <br>`)
               threadTeaser.find(".subject").css("color", "#0f0c5d").css("font-weight", "700")
            }
            // Remove the "Old subject" text
            $(`#thread-${threadId} > .teaser > b`).remove()
            // Add css to the class "quote" and make the text green #789922
            threadTeaser.find(".quote").css("color", "#789922")

            threadTeaser.find(".quotelink").css("color", "#d00")
            threadTeaser.find(".quotelink").css("font-weight", "350")
         }
         const threadPic = $(`#thread-${threadId} > a > img`)
         if (threadPic.length > 0) {
            let threadPicNewSrc = `https://i.4cdn.org/${boardName}/${threadPicTim}${threadPicExt}`
            if (threadPicExt === ".webm") {
               threadPicNewSrc = `https://i.4cdn.org/${boardName}/${threadPicTim}s.jpg`
            } else if (threadPic.attr("src") === "//s.4cdn.org/image/filedeleted-res.gif") {
               threadPicNewSrc = "//s.4cdn.org/image/filedeleted-res.gif"
            }
            threadPic.attr("src", threadPicNewSrc)
            threadPic.attr("loading", "lazy")

         }
      })
   })
}

export default catalog
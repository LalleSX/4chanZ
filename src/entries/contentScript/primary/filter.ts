import chanAPI from "~/entries/contentScript/chanAPI"
import $ from "jquery"
import axios from "axios"
import { Thread } from "~/types/thread"

function filter() {
   axios.get(chanAPI.catalog("g")).then((response) => {
      const threads = response.data.flatMap((page: { threads: Thread[] }) => page.threads)
      threads.forEach((thread: Thread) => {
         const threadId = thread.no

         // if the thread "thread-76759434" exists in the JSON data from the API then remove it
         if (threadId === 76759434) {
            $(`#thread-${threadId}`).remove()
         }
      })
   })
}
export default filter
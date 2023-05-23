import $ from "jquery"
// Define the words to filter
const filterWords: string[] = []

function filterPosts(): void {
   // Select all thread divs
   const threads = $(".thread")

   threads.each(function () {
      const teaser = $(this).find(".teaser").text().toLowerCase()

      for (let i = 0; i < filterWords.length; i++) {
         if (teaser.includes(filterWords[i])) {
            $(this).hide()
            break
         }
      }
   })
}
export default filterPosts
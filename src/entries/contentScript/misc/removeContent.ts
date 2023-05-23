const removeContent = () => {
   const element = document.querySelector("boardNavDesktop, boardNavMobile, #navtopright")
   if (element) {
      element.remove()
   }
   const elements = document.querySelectorAll(".danbo-slot, .boardList, .boardnav, .boardSelect, .mobile")
   elements.forEach((element) => {
      element.remove()
   })
}
export default removeContent
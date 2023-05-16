const removeContent = () => {
   const element = document.getElementById("boardNavDesktop, boardNavMobile")
   if (element) {
      element.remove()
   }
   const elements = document.querySelectorAll(".danbo-slot, .boardList")
   elements.forEach((element) => {
      element.remove()
   })
}
export default removeContent
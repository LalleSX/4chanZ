export function initImageHovering(): void {
    // Find all thumbnail images on the page
    const thumbnails = Array.from(document.querySelectorAll("a.fileThumb"))

    // Attach hover events to each thumbnail image
    thumbnails.forEach(thumbnail => {
        const imageUrl = thumbnail.getAttribute("href")

        // Create a new image element to be displayed on hover
        const hoverImage = document.createElement("img")
        hoverImage.src = imageUrl as string
        hoverImage.style.position = "fixed"
        hoverImage.style.display = "none"
        hoverImage.style.border = "none"
        hoverImage.style.maxWidth = "100%"
        hoverImage.style.maxHeight = "100%"

        document.body.appendChild(hoverImage)

        // Show the image on mouseover and hide it on mouseout
        thumbnail.addEventListener("mouseover", () => {
            if (Array.from(thumbnail.querySelectorAll("img")).some(img => img.classList.contains("expanded-thumb")))
                return

            hoverImage.style.display = "block"
        })

        thumbnail.addEventListener("mouseout", () => {
            hoverImage.style.display = "none"
        })

        // Update the hover image position based on the mouse cursor
        thumbnail.addEventListener("mousemove", (event) => {
            const offsetX = 10
            const offsetY = 10

            const imageWidth = hoverImage.offsetWidth
            const imageHeight = hoverImage.offsetHeight

            const windowWidth = window.innerWidth
            const windowHeight = window.innerHeight

            const left = Math.min(event.pageX + offsetX, windowWidth - imageWidth - offsetX)
            const top = Math.min(event.pageY + offsetY, windowHeight - imageHeight - offsetY)

            hoverImage.style.left = `${left}px`
            hoverImage.style.top = `${top}px`
        })
    })
}

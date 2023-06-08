import { Thread } from "~/types/thread"
import chanAPI from "../chanAPI"

async function catalog(): Promise<void> {
    if (!window.location.pathname.includes("/catalog")) {
        return
    }

    const HEADER_MARGIN_TOP = "50px"
    const BOARD_NAME = window.location.pathname.split("/")[1]
    const BOARD_API_URL = chanAPI.catalog(BOARD_NAME)

    document.body.style.marginTop = HEADER_MARGIN_TOP
    console.log("catalog.ts")

    const response = await fetch(BOARD_API_URL)
    const data = await response.json()

    data.flatMap((page: { threads: Thread[] }) => page.threads).forEach((thread: Thread) => {
        const { no: threadId, com: comment, sub: subject, tim: threadPicTim, ext: threadPicExt } = thread

        const threadTeaser = document.querySelector(`#thread-${threadId} > .teaser`)

        if (threadTeaser) {
            threadTeaser.innerHTML = comment
            threadTeaser.style.whiteSpace = "pre-wrap"

            if (subject) {
                threadTeaser.innerHTML = `<span class="subject">${subject}</span><br/>` + threadTeaser.innerHTML

                const subjectSpan = threadTeaser.querySelector(".subject")

                if (subjectSpan) {
                    subjectSpan.style.color = "#0f0c5d"
                    subjectSpan.style.fontWeight = "700"
                }
            }

            Array.from(threadTeaser.querySelectorAll("b")).forEach((b) => b.remove())
            Array.from(threadTeaser.querySelectorAll(".quote")).forEach((quote) => quote.style.color = "#789922")
            Array.from(threadTeaser.querySelectorAll(".quotelink")).forEach((quotelink) => {
                quotelink.style.color = "#d00"
                quotelink.style.fontWeight = "350"
            })
        }

        const threadPic = document.querySelector(`#thread-${threadId} > a > img`)

        if (threadPic) {
            let threadPicNewSrc = `https://i.4cdn.org/${BOARD_NAME}/${threadPicTim}${threadPicExt}`

            if (threadPicExt === ".webm") {
                threadPicNewSrc = `https://i.4cdn.org/${BOARD_NAME}/${threadPicTim}s.jpg`
            } else if (threadPic.getAttribute("src") === "//s.4cdn.org/image/filedeleted-res.gif") {
                threadPicNewSrc = "//s.4cdn.org/image/filedeleted-res.gif"
            }

            threadPic.setAttribute("src", threadPicNewSrc)
            threadPic.setAttribute("loading", "lazy")
        }
    })
}

export default catalog

import { Thread } from "~/types/thread";
import $ from "jquery";
import chanAPI from "~/entries/contentScript/chanAPI";

function catalog() {
  // if the url does not contain /catalog, then return
  if (!window.location.pathname.includes("/catalog")) {
    return;
  }
  const HEADER_MARGIN_TOP = "50px";
  const BOARD_NAME = window.location.pathname.split("/")[1];
  const BOARD_API_URL = chanAPI.catalog(BOARD_NAME);

  $("body").css("margin-top", HEADER_MARGIN_TOP);
  console.log("catalog.ts");

  $.getJSON(BOARD_API_URL, (data) => {
    data
      .flatMap((page: { threads: Thread[] }) => page.threads)
      .forEach((thread: Thread) => {
        const {
          no: threadId,
          com: comment,
          sub: subject,
          tim: threadPicTim,
          ext: threadPicExt,
        } = thread;
        const threadTeaser = $(`#thread-${threadId} > .teaser`);
        if (threadTeaser.length > 0) {
          threadTeaser.html(comment).css("white-space", "pre-wrap");

          if (subject) {
            threadTeaser
              .prepend(`<span class="subject">${subject}</span><br/>`)
              .find(".subject")
              .css({ color: "#0f0c5d", fontWeight: "700" });
          }
          $(`#thread-${threadId} > .teaser > b`).remove();
          threadTeaser.find(".quote").css("color", "#789922");
          threadTeaser
            .find(".quotelink")
            .css({ color: "#d00", fontWeight: "350" });
        }

        const threadPic = $(`#thread-${threadId} > a > img`);

        if (threadPic.length > 0) {
          let threadPicNewSrc = `https://i.4cdn.org/${BOARD_NAME}/${threadPicTim}${threadPicExt}`;

          if (threadPicExt === ".webm") {
            threadPicNewSrc = `https://i.4cdn.org/${BOARD_NAME}/${threadPicTim}s.jpg`;
          } else if (
            threadPic.attr("src") === "//s.4cdn.org/image/filedeleted-res.gif"
          ) {
            threadPicNewSrc = "//s.4cdn.org/image/filedeleted-res.gif";
          }

          threadPic.attr({ src: threadPicNewSrc, loading: "lazy" });
        }
      });
  });
}

export default catalog;

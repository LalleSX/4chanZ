export const chanAPI = {
    boardlist: () =>
        "https://a.4cdn.org/boards.json",
    catalog: (boardID: string) =>
        `https://a.4cdn.org/${boardID}/catalog.json`,
    thread: (boardID: string, threadID: string) =>
        `https://a.4cdn.org/${boardID}/thread/${threadID}.json`,
    archive: (boardID: string) =>
        `https://a.4cdn.org/${boardID}/archive.json`,
    media: (boardID: string) =>
        `https://i.4cdn.org/${boardID}/`,
    thumbnail: (boardID: string) =>
        `https://t.4cdn.org/${boardID}/`,
}

export default chanAPI
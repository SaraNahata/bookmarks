document.addEventListener("DOMContentLoaded", () => {
    const bookmarkList = document.getElementById("bookmark-list");
    const titleInput = document.getElementById("bookmark-title");
    const urlInput = document.getElementById("bookmark-url");
    const addButton = document.getElementById("add-button");

    // Function to create a new bookmark element
    function createBookmarkElement(title, url) {
        const bookmark = document.createElement("article");
        bookmark.classList.add("bookmark");

        const titleElement = document.createElement("h2");
        const link = document.createElement("a");
        link.href = url;
        link.target = "_blank";
        link.textContent = title;
        titleElement.appendChild(link);

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", () => bookmark.remove());

        bookmark.appendChild(titleElement);
        bookmark.appendChild(removeButton);

        return bookmark;
    }

    // Add bookmark event
    addButton.addEventListener("click", () => {
        const title = titleInput.value.trim();
        const url = urlInput.value.trim();

        if (title && url) {
            const bookmark = createBookmarkElement(title, url);
            bookmarkList.appendChild(bookmark);

            // Clear inputs
            titleInput.value = "";
            urlInput.value = "";
        } else {
            alert("Please enter both a title and a valid URL.");
        }
    });
});

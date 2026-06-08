document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("img[data-lightbox]").forEach(img => {

        // Skip if already wrapped
        if (img.parentElement.tagName === "A") {
            return;
        }

        const link = document.createElement("a");

        link.href = img.currentSrc || img.src;

        img.parentNode.insertBefore(link, img);
        link.appendChild(img);

        new Luminous(link);
    });
});

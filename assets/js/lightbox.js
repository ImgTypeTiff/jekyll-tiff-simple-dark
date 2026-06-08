document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("img[data-lightbox]").forEach(img => {

        if (img.parentElement.tagName === "A") {
            return;
        }

        const link = document.createElement("a");

        link.href = img.currentSrc || img.src;

        img.parentNode.insertBefore(link, img);
        link.appendChild(img);

        const lightbox = new Luminous(
            link,
            {},
            {
                onOpen: () => {
                    // Avoid duplicates
                    if (document.getElementById("lightbox-close")) {
                        return;
                    }

                    const closeButton = document.createElement("button");

                    closeButton.id = "lightbox-close";
                    closeButton.innerHTML = "&times;";

                    closeButton.addEventListener("click", () => {
                        lightbox.close();
                    });

                    document.body.appendChild(closeButton);
                },

                onClose: () => {
                    document.getElementById("lightbox-close")?.remove();
                }
            }
        );

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                lightbox.close();
            }
        });
    });
});

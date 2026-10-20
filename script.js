
const galleryImages = document.querySelectorAll(".gallery-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeBtn = document.getElementById("closeBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const imageCounter = document.getElementById("imageCounter");

let currentIndex = 0;

function showImage(index) {
    currentIndex = (index + galleryImages.length) % galleryImages.length;

    lightboxImg.src = galleryImages[currentIndex].src;
    lightboxImg.alt = galleryImages[currentIndex].alt;
    imageCounter.textContent =
        `${currentIndex + 1} / ${galleryImages.length}`;
}

function openLightbox(index) {
    showImage(index);
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeLightbox() {
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
}

galleryImages.forEach((img, index) => {
    img.addEventListener("click", () => openLightbox(index));
});

closeBtn.addEventListener("click", closeLightbox);

prevBtn.addEventListener("click", () => {
    showImage(currentIndex - 1);
});

nextBtn.addEventListener("click", () => {
    showImage(currentIndex + 1);
});

lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
        closeLightbox();
    }
});

document.addEventListener("keydown", (event) => {
    if (!lightbox.classList.contains("active")) return;

    if (event.key === "Escape") closeLightbox();
    if (event.key === "ArrowLeft") showImage(currentIndex - 1);
    if (event.key === "ArrowRight") showImage(currentIndex + 1);
});


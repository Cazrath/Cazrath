
const modal = document.getElementById("screenshotModal");
const modalImage = document.getElementById("modalImage");
const grid = document.getElementById("screenshotGrid");

let currentIndex = 0;
let images = [
    "sample1.jpg",
    "sample2.jpg",
    "sample3.jpg"
];

function renderGrid() {
    images.forEach((img, index) => {
        const imageElement = document.createElement("img");
        imageElement.src = img;
        imageElement.onclick = () => openModal(index);
        grid.appendChild(imageElement);
    });
}

function openModal(index) {
    currentIndex = index;
    modal.style.display = "block";
    modalImage.src = images[currentIndex];
}

function closeModal() {
    modal.style.display = "none";
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    modalImage.src = images[currentIndex];
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    modalImage.src = images[currentIndex];
}

renderGrid();

// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");
const nextBtn = document.getElementById("next-btn");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// Memory Page Elements
const memoryContainer = document.getElementById("memory-container");
const imageGallery = document.getElementById("image-gallery");
const backBtn = document.getElementById("back-btn");

// รายชื่อไฟล์รูปภาพที่คุณเตรียมไว้
const memoryImages = [
    'photo/memory1.jpg',
    'photo/memory2.jpg', 
    'photo/memory3.jpg',
    'photo/memory4.jpg',
    'photo/memory5.jpg',
    'photo/memory6.jpg',
    'photo/memory7.jpg',
    'photo/memory8.jpg'
];

// Click Envelope
envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout( () => {
        document.querySelector(".letter-window").classList.add("open");
    },50);
});

// Logic to move the NO btn
noBtn.addEventListener("mouseover", () => {
    const min = 200;
    const max = 200;

    const distance = Math.random() * (max - min) + min;
    const angle = Math.random() * Math.PI * 2;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// YES is clicked
yesBtn.addEventListener("click", () => {
    title.textContent = "Yippeeee!";

    catImg.src = "cat_dance.gif";

    document.querySelector(".letter-window").classList.add("final");

    buttons.style.display = "none";

    finalText.style.display = "block";
    
    // Show next button after a delay
    setTimeout(() => {
        nextBtn.style.display = "block";
    }, 1000);
});

// Next button clicked - go to memory page
nextBtn.addEventListener("click", () => {
    letter.style.display = "none";
    memoryContainer.style.display = "flex";
    loadMemoryImages();
});

// Load memory images from folder
function loadMemoryImages() {
    imageGallery.innerHTML = ''; // Clear existing images
    
    memoryImages.forEach((imageName, index) => {
        const imageItem = document.createElement('div');
        imageItem.className = 'image-item';
        
        imageItem.innerHTML = `
            <img src="${imageName}" alt="Memory ${index + 1}">
        `;
        
        imageGallery.appendChild(imageItem);
    });
}

// Back button clicked
backBtn.addEventListener("click", () => {
    memoryContainer.style.display = "none";
    letter.style.display = "flex";
});

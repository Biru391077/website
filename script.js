const hobbies = [
    {
        text: "I enjoy Life.",
        image: "https://i.ibb.co/chRnjzcK/Bi-Ru.jpg"
    },
    {
        text: "I love listening to music.",
        image: "https://www.image2url.com/r2/default/images/1781430802401-375151e5-b88d-42c3-91dd-ab00e73c0100.png"
    },
    {
        text: "I enjoy playing cricket.",
        image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=500"
    },
    {
        text: "I love watching Sci-Fi movies and series.",
        image: "https://www.image2url.com/r2/default/images/1781338552345-09053b96-f9d0-4fe5-ba1d-a0e9448819bf.png"
    },
    {
        text: "I love Writing.",
        image: "https://www.image2url.com/r2/default/images/1781338233461-10a1b4f0-b667-412b-b95f-bfa46588b49d.jpg"
    }
];

let currentIndex = 0;

const hobbyText = document.getElementById("hobby-text");
const galleryImg = document.getElementById("gallery-img");
const nextBtn = document.getElementById("next-btn");

nextBtn.addEventListener("click", function () {
    currentIndex++;

    // Loop back to the first hobby when reaching the end
    if (currentIndex >= hobbies.length) {
        currentIndex = 0;
    }

    hobbyText.innerHTML = `<p>${hobbies[currentIndex].text}</p>`;
    galleryImg.src = hobbies[currentIndex].image;
});
const themeButton = document.getElementById("theme-toggle");

themeButton.addEventListener("click", function () {
    // Changed "dark-mode" to "dark-theme" to perfectly match your CSS variables
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        themeButton.textContent = "☀️ Light Mode";
    } else {
        themeButton.textContent = "🌙 Dark Mode";
    }
});
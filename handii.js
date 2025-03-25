const text = "Hai, selamat datang di Fika Store✨";
let index = 0;

function typeText() {
    if (index < text.length) {
        document.getElementById("typing-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeText, 200);
    }
}
window.onload = typeText;

typeEffect();

window.onscroll = function() {
    document.getElementById("logo").style.display = "block";
};

const hoverSound = new Audio("hover.mp3");

document.querySelectorAll("button").forEach(button => {
    button.addEventListener("mouseenter", () => hoverSound.play());
});

document.getElementById("view-more").addEventListener("click", function() {
    document.getElementById("more-info").classList.toggle("hidden");
});

const clickSound = new Audio("click.mp3");

document.getElementById("button").addEventListener("click", () => {
    clickSound.play();
});

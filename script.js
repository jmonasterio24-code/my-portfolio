const cards = document.querySelectorAll(".project-card");

window.addEventListener("scroll", () => {
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < window.innerHeight - 100) {
            card.style.opacity = 1;
            card.style.transform = "translateY(0)";
        }
    });
});

cards.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = "translateY(50px)";
    card.style.transition = "0.6s ease";
});
function showProjectDetail(){
    document.getElementById("projectDetail").style.display = "block";
    document.getElementById("projects").style.display = "none";

   
}

function hideProjectDetail(){
    document.getElementById("projectDetail").style.display = "none";
    document.getElementById("projects").style.display = "block";

}
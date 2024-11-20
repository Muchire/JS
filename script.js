// JavaScript to handle button clicks
document.getElementById("btnAbout").addEventListener("click", function() {
    alert("You will learn more about me!");
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("btnProjects").addEventListener("click", function() {
    alert("Here are some of my projects!");
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
});

const darkModeIcon = document.getElementsByClassName("dark-mode-icon");
const darkBodyClass = document.body.classList;

// Adding a comment in another branch from Main to practice GitHub pull requests and commits.

darkModeIcon[0].addEventListener("click", () => {
    darkBodyClass.contains("dark-mode") ? 
    darkBodyClass.remove("dark-mode") : 
    darkBodyClass.add("dark-mode");
});

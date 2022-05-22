const darkModeIcon = document.getElementsByClassName("dark-mode-icon");
const darkBodyClass = document.body.classList;

darkModeIcon[0].addEventListener("click", () => {
    darkBodyClass.contains("dark-mode") ? 
    darkBodyClass.remove("dark-mode") : 
    darkBodyClass.add("dark-mode");
});
// Get the current year and update the footer
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Get the last modified date of the document and update the footer
document.getElementById('lastModified').textContent = "Last Modified: " + document.lastModified;

//Responsive hamburger menu
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");
const headerTitle = document.querySelector("header h1");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
    headerTitle.classList.toggle("hide");
});

const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;

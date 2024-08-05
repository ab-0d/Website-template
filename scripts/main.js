let backgroundImg = document.querySelector(".landing");

// Array of image
let images = ["pic1.jpg", "pic2.jpg", "pic3.jpg"];

// Function to change the background image at regular intervals
setInterval(() => {
    // Generate a random index based on the number of images
    let randomNumber = Math.floor(Math.random() * images.length);

    // Set the background image
    backgroundImg.style.backgroundImage = `url(../images/${images[randomNumber]})`;
}, 10000);

// Select the dark them slider
let darkSlider = document.querySelector(".slider input");

darkSlider.addEventListener("click", () => {
    // Check if the dark them is in the checked state
    if (darkSlider.checked === true) {
        // Add "turn-on" class to the parent
        darkSlider.parentElement.classList.add("turn-on");

        // Update localStorage with dark mode colors
        localStorage.setItem("background-color-first", "#0f0f0f");
        localStorage.setItem("background-color-second", "#222222");
        localStorage.setItem("pargraph-color", "#9a9a9a");
        localStorage.setItem("black-color", "white");
    } else {
        // Remove "turn-on" class from the parent element of the slider
        darkSlider.parentElement.classList.remove("turn-on");

        // Update localStorage with light mode colors
        localStorage.setItem("background-color-first", "white");
        localStorage.setItem("background-color-second", "#eeeeee");
        localStorage.setItem("pargraph-color", "#666");
        localStorage.setItem("black-color", "black");
    }
    // Save the slider's current state to localStorage
    localStorage.setItem("slider-status", darkSlider.checked);

    // Update CSS custom properties based on localStorage values
    updateCSSVars();
});

// function to update CSS custom properties based on localStorage values
function updateCSSVars() {
    document.documentElement.style.setProperty(
        "--background-color-second",
        localStorage.getItem("background-color-second")
    );
    document.documentElement.style.setProperty(
        "--background-color-first",
        localStorage.getItem("background-color-first")
    );
    document.documentElement.style.setProperty(
        "--black-color",
        localStorage.getItem("black-color")
    );
    document.documentElement.style.setProperty(
        "--pargraph-color",
        localStorage.getItem("pargraph-color")
    );
}
updateCSSVars();
if (localStorage.getItem("slider-status") == "true") {
    darkSlider.parentElement.classList.add("turn-on");
    darkSlider.checked = true;
}
// select box setting and setting menu
let settingBox = document.querySelector(".setting-box");
let settingMenu = document.querySelector(".setting-menu");

// Open setting when click on the box setting
settingBox.addEventListener("click", () => {
    settingMenu.classList.add("open-setting");
});

// select the hide arrow
let arrowSetting = document.querySelector("#hide-setting");

// hide setting when click on the arrow
arrowSetting.addEventListener("click", () => {
    settingMenu.classList.remove("open-setting");
});

// select color list
let chooseColor = document.querySelectorAll(".color li");

// Change and foucs the color
chooseColor.forEach((colorList) => {
    colorList.addEventListener("click", () => {
        // Remove active class from all list
        chooseColor.forEach((e) => {
            e.classList.remove("active");
        });
        // Add active class to list
        colorList.classList.add("active");
        // change website color
        document.documentElement.style.setProperty(
            "--main-color",
            colorList.getAttribute("data-color")
        );
        // send the main to local storage
        localStorage.setItem("color", colorList.getAttribute("data-color"));
    });
});
// set main color from local storage
document.documentElement.style.setProperty(
    "--main-color",
    localStorage.getItem("color")
);
//
if (localStorage.getItem("color") != null) {
    chooseColor.forEach((e) => {
        e.classList.remove("active");
        if (e.getAttribute("data-color") === localStorage.getItem("color")) {
            e.classList.add("active");
        }
    });
}
// select reset
let resetOption = document.querySelector(".reset");
// Reset option
resetOption.addEventListener("click", () => {
    localStorage.clear();
    window.location.reload();
});
let skills = document.querySelector(".skills");
let skillsPerentage = document.querySelectorAll(".skill-progress span");
window.addEventListener("scroll", () => {
    // if (scrollY > skills.offsetTop + skills.offsetHeight - window.innerHeight)
    if (scrollY > skills.offsetTop - 100) {
        skillsPerentage.forEach((perentage) => {
            perentage.style.width = perentage.getAttribute("data");
        });
    }
});

// Select the button that will be clicked to toggle the image visibility
let showButton = document.querySelector(".gallery button");

// Select all images or elements that will have their visibility toggled
let hideImg = document.querySelectorAll(".gallery .group");

// Add a event to show button
showButton.addEventListener("click", () => {
    // hide and show img
    hideImg.forEach((img) => {
        img.classList.toggle("hide-img");
    });
    // edit innerHTMl for button
    showButton.innerHTML == "Show More"
        ? (showButton.innerHTML = "Show Less")
        : (showButton.innerHTML = "Show More");
});

// Animation time line
let timelineSection = document.querySelector(".time-line");
let boxRight = document.querySelectorAll(".right");
let boxLeft = document.querySelectorAll(".left");
let circle = document.querySelectorAll(".circle");
window.addEventListener("scroll", function () {
    if (scrollY >= timelineSection.offsetTop - 100) {
        boxRight.forEach((box) => (box.style.left = "0"));
        boxLeft.forEach((box) => (box.style.right = "0"));
        circle.forEach((one) => (one.style.opacity = "1"));
    }
});
// options
let option = document.querySelector(".bars");
let links = document.querySelector(".links");

option.addEventListener("click", () => {
    links.classList.toggle("open");
});
document.addEventListener("click", (e) => {
    if (links.classList.contains("open")) {
        if (e.target != option && e.target != links)
            links.classList.toggle("open");
    }
});

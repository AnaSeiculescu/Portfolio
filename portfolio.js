function getStarCoord(min, max) {
    return Math.random() * (max - min + 1) + min;
}

const body = document.querySelector("body");
const containerOfTheCenterContainer = document.getElementById("the-container-of-the-central-container");
const container = document.querySelector("#center-container");

function generateStar() {
    let star = document.createElement("div");
    star.classList.add("stars");
    let x = getStarCoord(0, 100);
    let y = getStarCoord(0, 100);
    star.style.transform = `translate(${x}vw, ${y}vh)`;
    containerOfTheCenterContainer.insertBefore(star, container);
    return star;
}

for (let i = 0; i < 1000; i++) {
    generateStar();
}

let RADIUS = 230; // adjust to screen size

let project_links = [
    "https://anaseiculescu.github.io/collection-map/",
    "https://anaseiculescu.github.io/keep-notes/",
    "https://anaseiculescu.github.io/breakfast-recipes/",
    "https://anaseiculescu.github.io/ana_s_color_picker/",
    "https://cat-caller.netlify.app/#",
];
let project_names = [
    "collection <br>map",
    "dizzy <br>notes",
    "breakfast <br>recipes",
    "color <br>picker",
    "cat caller <br>from CatAPI",
];
let project_code_links = [
    "https://github.com/AnaSeiculescu/collection-map",
    "https://github.com/AnaSeiculescu/keep-notes",
    "https://github.com/AnaSeiculescu/breakfast-recipes",
    "https://github.com/AnaSeiculescu/ana_s_color_picker",
    "https://github.com/AnaSeiculescu/Call-a-Cat-API",
];
let myWorkBtnDimensions = [
    ["210px", "210px"],
    ["150px", "150px"],
    ["180px", "180px"],
    ["120px", "120px"],
    ["150px", "150px"],
];
let myWorkBtnColors = [
    ["hsl(120, 40%, 45%)"],
    ["hsl(358, 78%, 55%)"],
    ["hsl(235, 74%, 60%)"],
    ["hsl(29, 98%, 58%)"],
    ["hsl(180, 100%, 37%)"],
];
let about_me_links = ["resume-cv.pdf", "story.pdf"];
let about_me_links_pageName = ["Resume", "Story"];

if (jQuery(window).width() < 1050) {
    RADIUS = 275;
    myWorkBtnDimensions = [
        ["250px", "250px"],
        ["190px", "190px"],
        ["220px", "220px"],
        ["160px", "160px"],
        ["190px", "190px"],
    ];
}

// 122°, 74%, 57%

function getPointOnCircle(angleDegrees) {
    //Convert angle to radians
    const angleRadians = (angleDegrees * Math.PI) / 180;

    // Calculate x and y coordinates
    const x = RADIUS * Math.sin(angleRadians);
    const y = -1 * RADIUS * Math.cos(angleRadians);

    // Return coordinates as an object
    return { x, y };
}

function getPointsOnCircle(numPoints) {
    const points = [];

    for (let i = 0; i < numPoints; i++) {
        const angleDegrees = i * (360 / numPoints) + 18;
        const { x, y } = getPointOnCircle(angleDegrees);
        points.push({ x, y });
    }
    return points;
}

function createButtonsOnCircle(pointsOnCircle) {
    const buttons = pointsOnCircle.map(({ x, y }, index) => {
        const btn = document.createElement("button");
        const btnTextContent = document.createElement("span");
        btnTextContent.innerHTML = project_names[index];
        btnTextContent.classList.add("span-text");
        btn.appendChild(btnTextContent);
        btn.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
        btn.classList.add("site-project-button");
        btn.style.display = "none";
        btn.style.backgroundColor = myWorkBtnColors[index];

        btn.style.width = myWorkBtnDimensions[index][0];
        btn.style.height = myWorkBtnDimensions[index][1];

        container.appendChild(btn);

        btn.addEventListener("click", function () {
            window.open(project_links[index]);
        });

        jQuery(btn).hover(function () {
            jQuery(`#description-text-when-hover > #project-description-${index}`).toggle(500, function () {});
        });

        return btn;
    });

    return buttons;
}

const pointsOnCircle = getPointsOnCircle(5);

console.log("pointsOnCircle", pointsOnCircle);

const centralButton = document.getElementById("central-circle-button");
let skillsDescription = document.getElementById("skills-description");

// create a smaller button (linking to the code pages) inside each big circle button
const bigButtons = createButtonsOnCircle(pointsOnCircle);
console.log(bigButtons + "astia sunt big buttons");

function createCodeButton(bigButtons) {
    const codeButtons = bigButtons.map((button, index) => {
        const codeBtn = document.createElement("button");
        codeBtn.textContent = "code";
        codeBtn.classList.add("code-project-buttons");

        button.appendChild(codeBtn);

        codeBtn.addEventListener("click", function (event) {
            event.stopPropagation();
            window.open(project_code_links[index]);
        });

        return codeBtn;
    });

    return codeButtons;
}

createCodeButton(bigButtons);

let codeButtons = document.getElementsByClassName("code-project-buttons");
let spanTexts = document.getElementsByClassName("span-text");

function positionChildren() {
    const codeBtnsPositions = [
        { x: "70%", y: "-30%" },
        { x: "120%", y: "-140%" },
        { x: "220%", y: "30%" },
        { x: "-75%", y: "25%" },
        { x: "-140%", y: "-80%" },
    ];

    for (let i = 0; i < codeButtons.length; i++) {
        console.log("iterez code-buton-urile");

        codeBtnsPositions.forEach((position, i) => {
            codeButtons[i].style.transform = `translate(${position.x}, ${position.y})`;

            codeButtons[i].style.borderTop = `3px solid ${myWorkBtnColors[i]}`;
            codeButtons[i].style.borderLeft = `3px solid ${myWorkBtnColors[i]}`;

            console.log("code btns are here");
        });
    }

    const spanTextsPositions = [
        { x: "-30%", y: "80%" },
        { x: "-10%", y: "120%" },
        { x: "-0%", y: "80%" },
        { x: "10%", y: "40%" },
        { x: "10%", y: "120%" },
    ];

    for (let i = 0; i < spanTexts.length; i++) {
        spanTextsPositions.forEach((position, i) => {
            spanTexts[i].style.transform = `translate(${position.x}, ${position.y})`;
        });
    }
}

positionChildren();

let myWorkButtons = document.getElementsByClassName("site-project-button");
let aboutMeButtons = document.getElementsByClassName("about-me-buttons");
let aboutMeText = document.getElementById("about-me");
let myWorkText = document.getElementById("my-work");
console.log(`${aboutMeButtons}este about me buttons`);
const arrowsRotating = document.getElementById("arrows-rotating");
const underConstructionGif = document.getElementById("gif-under-construction");

let counter = 0;

let myWorkButtonsArray = Array.from([].slice.call(document.getElementsByClassName("site-project-button")));
console.log(myWorkButtonsArray);

// creating other buttons on the big circle, buttons that are available when abou me is up

let about_me_btnsText = ["CV", "story", "skills"];

function getAbouMePointsOnCircle(numPoints) {
    const points = [];

    for (let i = 0; i < numPoints; i++) {
        const angleDegrees = i * (360 / numPoints) - 35;
        const { x, y } = getPointOnCircle(angleDegrees);
        points.push({ x, y });
    }
    return points;
}

function createAboutMeButtonsOnCircle(pointsOnCircle) {
    const buttons = pointsOnCircle.map(({ x, y }, index) => {
        const btn = document.createElement("button");
        btn.textContent = about_me_btnsText[index];
        btn.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
        btn.classList.add("about-me-buttons");

        container.appendChild(btn);

        if (index < pointsOnCircle.length - 1) {
            btn.addEventListener("click", function () {
                let wind = window.open(about_me_links[index], "_blank");
                setTimeout(function () {
                    wind.document.title = about_me_links_pageName[index];
                }, 10);
                return false;
            });
        } else if (index == pointsOnCircle.length - 1) {
            btn.addEventListener("click", function () {
                jQuery("#skills-description").toggle(800, function () {
                    counter++;
                });
                return false;
            });
        }

        return btn;
    });

    return buttons;
}

const aboutMePointsOnCircle = getAbouMePointsOnCircle(3);

createAboutMeButtonsOnCircle(aboutMePointsOnCircle);

jQuery(centralButton).one("click", function () {
    container.classList.add("after-first-click");
    centralButton.classList.remove("a-little-bit-left");

    jQuery("#arrows-rotating").toggle(1000, function () {
        console.log("the arrows are here");
    });

    jQuery("#gif-under-construction").toggle(1000, function () {
        console.log("the under construction sign is here");
    });

    let openingTextSmallScreen = document.getElementById("name-presentation-text-small-screen");
    let openingText = document.getElementsByClassName("opening-text");

    if (jQuery(window).width() < 1050) {
        jQuery(openingTextSmallScreen).toggle(1000, function () {
            openingTextSmallScreen.style.display = "none";
        });
    } else {
        for (let i = 0; i < openingText.length; i++) {
            jQuery(openingText[i]).toggle(1000, function () {
                openingText[i].style.display = "none";
            });
        }
    }

    aboutMeText.textContent = "about me";
    myWorkText.textContent = "my work";

    jQuery(aboutMeButtons).toggle(1000, function () {
        console.log("the about me buttons are gone");
    });

    jQuery("#contact-me2").toggle(1000, function () {
        jQuery("#contact-me2").css("display", "block");
    });
});

let clickCount = 0;

centralButton.addEventListener("click", () => {
    clickCount++;

    if (clickCount > 1) {
        centralButton.classList.toggle("central-button-mywork-up");

        jQuery(aboutMeButtons).toggle(1000, function () {
            console.log("the about me buttons are gone");
        });

        jQuery(myWorkButtons).toggle(1000, function () {
            console.log("the project buttons appear");
        });
    }

    if (clickCount % 2 == 0) {
        if (counter % 2 == 1) {
            jQuery("#skills-description").toggle(800, function () {
                counter++;
            });
        }
    }
});

jQuery(document).ready(function () {
    const somethingPersonal = document.getElementById("something-personal");
    const careerShortTelling = document.getElementById("career-short-telling");
    const contactMe = document.getElementById("contact-me");

    for (let i = 0; i < aboutMeButtons.length; i++) {
        aboutMeButtons[i].style.display = "none";
    }

    for (let i = 0; i < myWorkButtons.length; i++) {
        myWorkButtons[i].style.display = "none";
    }

    arrowsRotating.style.display = "none";
    underConstructionGif.style.display = "none";

    if (jQuery(window).width() < 1050) {
        setTimeout(function () {
            jQuery(
                "#something-personal-small-screen, #career-short-telling-small-screen, #contact-me-small-screen"
            ).toggle(1000, function () {
                somethingPersonal.style.display = "block";
                careerShortTelling.style.display = "block";
                contactMe.style.display = "block";
            });
        }, 2500);
    } else {
        setTimeout(function () {
            jQuery("#something-personal, #career-short-telling, #contact-me").toggle(1000, function () {
                somethingPersonal.style.display = "block";
                careerShortTelling.style.display = "block";
                contactMe.style.display = "block";
            });
        }, 2000);
    }
});

const faEnvelope = document.getElementsByClassName("fa-envelope");

for (let i = 0; i < faEnvelope.length; i++) {
    jQuery(faEnvelope[i]).hover(function () {
        jQuery(".when-hover-envelope").toggle(300, function () {});
    });
}

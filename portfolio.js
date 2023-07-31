
function getStarCoord(min, max) {
    return (Math.random() * (max - min + 1) + min);
}

const body = document.querySelector("body");
const container = document.querySelector("#center-container");

function generateStar() {
    let star = document.createElement("div");
    star.classList.add("stars");
    let x = getStarCoord(0, 100);
    let y = getStarCoord(0, 100);
    star.style.transform = `translate(${x}vw, ${y}vh)`;
    body.insertBefore(star, container);
    return star;
}

for (let i = 0; i < 700; i++) {
    generateStar();
}

const RADIUS = 250; // adjust to screen size

let project_links = ["https://anaseiculescu.github.io/collection-map/", "https://anaseiculescu.github.io/ana_s_color_picker/", "https://anaseiculescu.github.io/breakfast-recipes/", "https://anaseiculescu.github.io/to-do-list/", "https://anaseiculescu.github.io/about-me/"];
let project_names = ["collection map", "color picker", "breakfast recipes", "to do list", "math calculator"];
let project_code_links = ["https://github.com/AnaSeiculescu/collection-map", "https://github.com/AnaSeiculescu/ana_s_color_picker", "https://github.com/AnaSeiculescu/breakfast-recipes", "https://github.com/AnaSeiculescu/to-do-list", "https://anaseiculescu.github.io/about-me/"];

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
        btnTextContent.innerText = project_names[index];
        // btnTextContent.classList.add("flex-items-site-button");
        btnTextContent.classList.add("span-text");
        btn.appendChild(btnTextContent);
        btn.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
        btn.classList.add("site-project-button");

        container.appendChild(btn);

        btn.addEventListener("click", function() {
            window.open(project_links[index]);
        });

        return btn;
    });

    return buttons;
}

const pointsOnCircle = getPointsOnCircle(5);

console.log("pointsOnCircle", pointsOnCircle);

const centralButton = document.getElementById("central-circle-button");


// create a smaller button (linking to the code pages) inside each big circle button
const bigButtons = createButtonsOnCircle(pointsOnCircle);
console.log(bigButtons + "astia sunt big buttons");

function createCodeButton(bigButtons) {

    const codeButtons = bigButtons.map((button, index) => {
        const codeBtn = document.createElement("button");
        // codeBtn.classList.add("flex-items-site-button");
        codeBtn.textContent = "code";
        codeBtn.classList.add("code-project-buttons");
        // codeBtn.style.transform = "translate(20%, 60%)";

        button.appendChild(codeBtn);

        codeBtn.addEventListener("click", function(event) {
            // event.stopPropagation();
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
        { x: '0%', y: '0%' },
        { x: '10%', y: '-100%' },
        { x: '120%', y: '80%' },
        { x: '-120%', y: '50%' },
        { x: '-280%', y: '-70%' }
    ];

    for (let i = 0; i < codeButtons.length; i++) {

        console.log("iterez code-buton-urile");

        codeBtnsPositions.forEach((position, i) => {
            codeButtons[i].style.transform = `translate(${position.x}, ${position.y})`;
            console.log("code btns are here");
        });

    }

    const spanTextsPositions = [
        { x: '10%', y: '0%' },
        { x: '30%', y: '30%' },
        { x: '30%', y: '-30%' },
        { x: '110%', y: '-210%' },
        { x: '50%', y: '80%' }
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

let myWorkButtonsArray = Array.from([].slice.call(document.getElementsByClassName("site-project-button")));
console.log(myWorkButtonsArray);


// creating other buttons on the big circle, buttons that are available when abou me is up

let about_me_links = ["CV", "education", "skills"];

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
        btn.textContent = about_me_links[index];
        btn.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
        btn.classList.add("about-me-buttons");

        container.appendChild(btn);

        // btn.addEventListener("click", function() {
        //     window.open(project_links[index]);
        // });

        return btn;
    });

    return buttons;
}

const aboutMePointsOnCircle = getAbouMePointsOnCircle(3);

createAboutMeButtonsOnCircle(aboutMePointsOnCircle);

jQuery(centralButton).one('click', function() {

    let openningText = document.getElementsByClassName("openning-text");
    for (let i = 0; i < openningText.length; i++) {
        // openningText[i].style.display = "none";
        jQuery(openningText[i]).toggle(1000, function() {
            openningText[i].style.display = "none";
        })
    }

    // jQuery("body").toggle(1000, function() {
    //     body.style.display = "flex";
    //     body.style.width = "100%";
    // });

    aboutMeText.textContent = "about me";
    myWorkText.textContent = "my work";

    centralButton.appendChild(aboutMeText);
    centralButton.appendChild(myWorkText);

    jQuery(aboutMeButtons).toggle(1000, function() {
        console.log("the about me buttons are gone");
    });

});

let clickCount = 0;

const hueValArray = [];
for (let i = 130; i <= 350; i += 15) {
    hueValArray.push(i);
}


centralButton.addEventListener("click", () => {

    clickCount++;

    if (clickCount > 1) {

        centralButton.classList.toggle("central-button-mywork-up");

        jQuery(aboutMeButtons).toggle(1000, function() {
            console.log("the about me buttons are gone");
        });
    
        jQuery(myWorkButtons).toggle(1000, function(){
            for (let i = 0; i < myWorkButtons.length; i++){
                let randomColor = Math.floor(Math.random() * hueValArray.length);
                myWorkButtons[i].style.backgroundColor = `hsl(${hueValArray[randomColor]}, 57%, 75%)`;
            }
            
            // myWorkButtons.classList.toggle("site-project-button-on");
            console.log("the project buttons appear");
        });
    }

});

jQuery(document).ready( function() {

    for (let i = 0; i < aboutMeButtons.length; i++) {
        aboutMeButtons[i].style.display = "none";
    }

    for (let i = 0; i < myWorkButtons.length; i++) {
        myWorkButtons[i].style.display = "none";
    }

    const namePresentationText = document.createElement("p");
    const scopePresentationText = document.createElement("p");

    namePresentationText.innerText = `hello, I'm Ana Seiculescu`;
    namePresentationText.classList.add("openning-text");
    namePresentationText.style.transform = `translate(-250px, 0px)`;

    scopePresentationText.innerText = `I want to start my career in web development`;
    scopePresentationText.classList.add("openning-text");
    scopePresentationText.style.transform = `translate(330px, 0px)`;
    
    body.insertBefore(namePresentationText, container);
    body.appendChild(scopePresentationText);
});

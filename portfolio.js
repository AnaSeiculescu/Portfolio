
const container = document.querySelector("#center-container");
const RADIUS = 250; // adjust to screen size

let project_links = ["https://anaseiculescu.github.io/about-me/", "https://anaseiculescu.github.io/breakfast-recipes/", "https://anaseiculescu.github.io/ana_s_color_picker/", "https://anaseiculescu.github.io/collection-map/", "https://anaseiculescu.github.io/to-do-list/"];
let project_names = ["about me", "breakfast recipes", "color picker", "collection map", "to do list"];
let project_code_links = ["https://anaseiculescu.github.io/about-me/", "https://github.com/AnaSeiculescu/breakfast-recipes", "https://github.com/AnaSeiculescu/ana_s_color_picker", "https://github.com/AnaSeiculescu/collection-map", "https://github.com/AnaSeiculescu/to-do-list"];

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
        const angleDegrees = i * (360 / numPoints);
        const { x, y } = getPointOnCircle(angleDegrees);
        points.push({ x, y });
    }
    return points;
}

function createButtonsOnCircle(pointsOnCircle) {
    const buttons = pointsOnCircle.map(({ x, y }, index) => {
        const btn = document.createElement("button");
        btn.textContent = project_names[index];
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

createButtonsOnCircle(pointsOnCircle);

console.log("pointsOnCircle", pointsOnCircle);


// create a smaller button (linking to the code pages) inside each big circle button
const bigButtons = createButtonsOnCircle(pointsOnCircle);
console.log(bigButtons);

function createCodeButton(bigButtons) {
    const codeButtons = bigButtons.map((button, index) => {
        const codeBtn = document.createElement("button");
        codeBtn.textContent = "code";
        codeBtn.classList.add("code-project-button");
        codeBtn.style.transform = "translate(40%, 50%)";

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
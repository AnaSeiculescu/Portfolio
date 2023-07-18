
const container = document.querySelector("#center-container");
const RADIUS = 250; // adjust to screen size

let project_links = ["https://anaseiculescu.github.io/about-me/", "https://anaseiculescu.github.io/breakfast-recipes/", "https://anaseiculescu.github.io/ana_s_color_picker/", "https://anaseiculescu.github.io/collection-map/", "https://anaseiculescu.github.io/to-do-list/"];
let project_names = ["about me", "breakfast recipes", "color picker", "collection map", "to do list"];

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
    const buttons = pointsOnCircle.forEach(({ x, y }, index) => {
        const btn = document.createElement("button");
        btn.textContent = project_names[index];
        btn.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
        container.appendChild(btn);

        btn.addEventListener("click", function() {
            window.open(project_links[index]);
        });
    });
}

const pointsOnCircle = getPointsOnCircle(5);

createButtonsOnCircle(pointsOnCircle);

console.log("pointsOnCircle", pointsOnCircle);

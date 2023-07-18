
const container = document.querySelector("#center-container");
const RADIUS = 250; // adjust to screen size

function getPointOnCircle(angleDegrees) {
    //Convert angle to radians
    const angleRadians = (angleDegrees * Math.PI) / 180;

    // Calculate x and y coordinates
    const x = RADIUS * Math.cos(angleRadians);
    const y = RADIUS * Math.sin(angleRadians);

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
    const buttons = pointsOnCircle.map(({ x, y }, i) => {
        const btn = document.createElement("button");
        btn.textContent = `Button ${i +1}`;
        btn.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
        container.appendChild(btn);

        return btn;
    });

    return buttons;
}

const pointsOnCircle = getPointsOnCircle(6);

createButtonsOnCircle(pointsOnCircle);

console.log("pointsOnCircle", pointsOnCircle);
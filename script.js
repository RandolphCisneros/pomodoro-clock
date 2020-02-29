let screenContainer = document.getElementById("screenContainer");

let firstClockInitailzed = false;

const startingSeconds = 0;
const rowDivClassName = "rowDiv";
const workingMinutes = 25;
const restingMinutes = 5;

initializeInnerContainers();

function initializeInnerContainers() {
    initializeClockContainers();
}

function initializeClockContainers() {
    initializeClockContainer(workingMinutes);
    initializeClockContainer(restingMinutes);
}

function initializeClockContainer(minutes) {
    let rowDiv = document.createElement('div');
    rowDiv.className = rowDivClassName;
    let form = document.createElement('form');
    form.textContent = minutes + " : " + startingSeconds;
    rowDiv.appendChild(form);
    screenContainer.appendChild(rowDiv);
    initializeClockRow(minutes);
}

function initializeClockRow(minutes) {
    initializeTimeContainer(minutes);
    initializeTimeContainer(startingSeconds);
}

function initializeTimeContainer(time) {

}

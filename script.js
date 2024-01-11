//  define variables
let selectedGrade = 0;
let showThankYou = false;

// get elements
const grades = document.querySelectorAll(".grade");
const button = document.querySelector(".btn");
const initialCard = document.querySelector(".rating-card");
const thankYouCard = document.querySelector('.rating-card.thank');
const gradeEl = document.getElementById("grade");

// listen to events
for (const grade of grades) {
    grade.addEventListener("click", handleGrade);
}
button.addEventListener("click", handleSubmit);

// define methods
function handleGrade(e) {
    const { dataset } = e.target
    selectedGrade = parseInt(dataset.grade);
    setActive(dataset.grade)
}

function handleSubmit() {
    if (selectedGrade > 0) {
        initialCard.style.display = "none";
        thankYouCard.style.display = "flex";
        gradeEl.innerText = selectedGrade;
    }
}

function setActive(activeGrade) {
    // remove active state
    for (const grade of grades) {
        if (grade.dataset.grade === activeGrade && grade.className.includes('selected')) {
            grade.classList.remove('selected');
            selectedGrade = 0;
            return;
        }
        grade.classList.remove('selected');
    }

    // set active state to selected grade
    for (grade of grades) {
        if (grade.dataset.grade === activeGrade) {
            grade.classList.add("selected");
            return;
        }
    }
}
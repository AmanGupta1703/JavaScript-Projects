//using selectors inside the element
const questions = document.querySelectorAll(".question");

questions.forEach(function(question) {
    const questionBtn = question.querySelector(".question-btn");
    questionBtn.addEventListener("click", function(e) {
        questions.forEach(function(item) {
            if(item !== question) {
                item.classList.remove("show-text");
            }
        });
        question.classList.toggle("show-text");
    });
})

// traversing the dom
// const questionBtn = document.querySelectorAll(".question-btn");

// questionBtn.forEach(function (questionBtn) {
//   questionBtn.addEventListener("click", function (event) {
//     const question = event.currentTarget.parentElement.parentElement;
//     question.classList.toggle("show-text");
//   });
// }); 
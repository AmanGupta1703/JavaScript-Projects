const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if(id) {
    btns.forEach(function(btn) {
        // hide the other button
        btn.classList.remove("active");
        // apply the style to the selected button
        e.target.classList.add("active");
    });
    // hide the other articles / content
    articles.forEach(function(article) {
        article.classList.remove("active");
    });
    // get the selected element by id
    const element = document.getElementById(id);  
    element.classList.add("active");
}
});

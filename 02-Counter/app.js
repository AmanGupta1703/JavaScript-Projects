let count = 0;
const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count -= 1;
    } else if (styles.contains("reset")) {
      count = 0;
    } else if (styles.contains("increase")) {
      count += 1;
    }
    if (count < 0) {
      value.style.color = "var(--clr-red-dark)";
    }
    if (count > 0) {
      value.style.color = "var(--clr-green-dark)";
    }
    if (count === 0) {
      value.style.color = "var(--clr-grey-1)";
    }
    value.textContent = count;
  });
});

// increase the count by 1
function increaseCount() {}

// reset the count
function resetCount() {}

// decrease the count by 1
function decreaseCount() {}

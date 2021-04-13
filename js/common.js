const $search = document.querySelector(".search");
const $serachInput = $search.querySelector("input");

$search.addEventListener("click", () => {
  // search div를 클릭하면 input에 포커스를 하라.
  $serachInput.focus();
});

// input에 focus시
$serachInput.addEventListener("focus", () => {
  // input에 focus되면 focused라는 class를 추가하겠다.
  $search.classList.add("focused");
  $serachInput.setAttribute("placeholder", "통합검색");
});
// input에 focus가 해제되는 경우
$serachInput.addEventListener("blur", () => {
  $search.classList.remove("focused");
  $serachInput.setAttribute("placeholder", "");
});

const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear(); // 2021

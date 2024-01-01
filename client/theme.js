let clicked = true;

document.getElementById("themeBtn").addEventListener("click", function () {
  clicked = !clicked;
  console.log(clicked);

  const root = document.documentElement;

  if (clicked === false) {
    // Switch to dark theme
    root.classList.add("dark-theme");
    console.log("dark enabled");
  } else {
    // Switch to light theme
    root.classList.remove("dark-theme");
    console.log("light enabled");
  }
});

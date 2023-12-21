let clicked = true;

document.getElementById("themeBtn").addEventListener("click", function () {
  clicked = !clicked;
  console.log(clicked);

  const root = document.documentElement;

  if (clicked === false) {
    // Switch to dark theme
    root.style.setProperty("--bg-page", "var(--bg-page-dark)");
    root.style.setProperty("--bg-primary", "var(--bg-primary-dark)");
    root.style.setProperty("--fg-primary", "var(--fg-primary-dark)");
    root.style.setProperty("--fg-on-primary", "var(--fg-on-primary-dark)");
  } else {
    // Switch to light theme
    root.style.setProperty("--bg-page", "var(--bg-page-light)");
    root.style.setProperty("--bg-primary", "var(--bg-primary-light)");
    root.style.setProperty("--fg-primary", "var(--fg-primary-light)");
    root.style.setProperty("--fg-on-primary", "var(--fg-on-primary-light)");
  }
});

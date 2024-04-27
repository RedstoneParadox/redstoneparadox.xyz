function toggleDarkMode() {
  document.body.classList.toggle("dark")
  var themeIcon = document.querySelector(".theme-icon")

  if (document.body.classList.contains("dark")) {
    themeIcon.src = "images/theme/sun-fill.svg"
  } else {
    themeIcon.src = "images/theme/moon-fill.svg"
  }
}
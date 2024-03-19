function toggleDarkMode() {
  document.body.classList.toggle("dark")
  var themeIcon = document.querySelector(".theme-icon")

  if (!document.body.classList.contains("dark")) {
    themeIcon.src = "images/button/light_mode_FILL0_wght400_GRAD0_opsz24.svg"
  } else {
    themeIcon.src = "images/button/dark_mode_FILL0_wght400_GRAD0_opsz24.svg"
  }
}
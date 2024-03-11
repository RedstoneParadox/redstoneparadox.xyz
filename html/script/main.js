function toggleDarkMode() {
  var headerTop = document.querySelector(".header-top")
  var headerNav = document.querySelector(".header-nav")
  var footer = document.querySelector("footer")
  var body = document.body
  var navLinks = document.querySelectorAll(".nav-link")
  var themeButton = document.querySelector(".theme-button")
  var siteIcon = document.querySelector(".site-icon")

  headerTop.classList.toggle("dark-mode")
  headerNav.classList.toggle("dark-mode")
  footer.classList.toggle("dark-mode")
  body.classList.toggle("dark-mode")
  navLinks[0].classList.toggle("dark-mode")
  navLinks[1].classList.toggle("dark-mode")
  themeButton.classList.toggle("dark-mode")
  siteIcon.classList.toggle("dark-mode")

  var themeIcon = document.querySelector(".theme-icon")
  themeIcon.classList.toggle("dark-mode")
  if (body.classList.contains("dark-mode")) {
    themeIcon.src = "images/button/light_mode_FILL0_wght400_GRAD0_opsz24.svg"
  } else {
    themeIcon.src = "images/button/dark_mode_FILL0_wght400_GRAD0_opsz24.svg"
  }
}
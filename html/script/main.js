function toggleDarkMode() {
  var header = document.querySelector("#header")
  var footer = document.querySelector("#footer")
  var body = document.body
  var nav_links  = document.querySelectorAll(".nav-link")

  header.classList.toggle("dark-mode")
  footer.classList.toggle("dark-mode")
  body.classList.toggle("dark-mode")
  nav_links[0].classList.toggle("dark-mode")
  nav_links[1].classList.toggle("dark-mode")

  var themeIcon = document.getElementById("themeIcon")
  if (body.classList.contains("dark-mode")) {
    themeIcon.src = "images/button/light_mode_FILL0_wght400_GRAD0_opsz24.svg"
  } else {
    themeIcon.src = "images/button/dark_mode_FILL0_wght400_GRAD0_opsz24.svg"
  }
}
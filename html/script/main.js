function toggleDarkMode() {
  var textBox = document.querySelector("#text-box")
  textBox.classList.toggle("dark-mode")
  var header = document.querySelector("#header")
  header.classList.toggle("dark-mode")
  var footer = document.querySelector("#footer")
  footer.classList.toggle("dark-mode")
  var body = document.body
  body.classList.toggle("dark-mode")


  var themeIcon = document.getElementById("themeIcon")
  if (body.classList.contains("dark-mode")) {
    themeIcon.src = "images/button/light_mode_FILL0_wght400_GRAD0_opsz24.svg"
  } else {
    themeIcon.src = "images/button/dark_mode_FILL0_wght400_GRAD0_opsz24.svg"
  }
}
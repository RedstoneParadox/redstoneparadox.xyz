function toggleDarkMode() {
  document.body.classList.toggle("dark")
  var themeIcon = document.querySelector(".theme-icon")
  var toggleThumb = document.querySelector(".theme-toggle-thumb")
  toggleThumb.classList.remove("start")

  if (!document.body.classList.contains("dark")) {
    themeIcon.src = "images/theme/sun-fill.svg"
    toggleThumb.classList.add("animate-left")
    toggleThumb.classList.remove("animate-right")
  } else {
    themeIcon.src = "images/theme/moon-fill.svg"
    toggleThumb.classList.add("animate-right")
    toggleThumb.classList.remove("animate-left")
  }
}
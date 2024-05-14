function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// Update the page theme based on the cookie
window.onload = function () {
  const theme = getCookie("theme");

  console.log(theme)

  if (theme == "") {
    // The user does not have a theme cookie, so it needs to be set based on their system theme
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      // Media queries are supported and the user prefers dark mode
      document.body.classList.add("dark");
      setCookie("theme", "dark", 999);
      
    } else {
      // The user either prefers light mode or has no preference or media queries are otherwise unsupported in this environment
      setCookie("theme", "light", 999);
    }
  } else if (theme == "dark") {
    // The user has a theme cookie for dark mode
    document.body.classList.add("dark");
  }

  // Take over from the media query logic
  document.body.classList.remove("default-theme");
}

class ThemeToggle extends HTMLElement {
  static observedAttributes = ["light-icon", "dark-icon"];

  constructor() {
    super();
    this.icon = document.createElement("img")
  }

  connectedCallback() {
    const self = this;
    const shadow = this.attachShadow({ mode: 'open' });
    const button = document.createElement("button")

    button.part = "button"
    this.icon.part = "icon"

    shadow.appendChild(button);
    button.appendChild(this.icon);

    this.updateIcon()

    button.addEventListener("click", function() {
      self.toggleTheme();
    })
  }

  toggleTheme() {
    document.body.classList.toggle("dark")
    this.updateIcon()
  }

  updateIcon() {
    if (document.body.classList.contains("dark")) {
      this.icon.src = this.getAttribute("light-icon")
      this.icon.alt = "Change to Light Theme"
      setCookie("theme", "dark", 999)
    } else {
      this.icon.src = this.getAttribute("dark-icon")
      this.icon.alt = "Change to Dark Theme"
      setCookie("theme", "light", 999)
    }
  }
}

customElements.define("theme-toggle", ThemeToggle);
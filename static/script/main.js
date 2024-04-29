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


class ThemeToggle extends HTMLElement {
  static observedAttributes = ["light-icon", "dark-icon"];

  constructor() {
    super();
    this.icon = null
  }

  connectedCallback() {
    const self = this;
    const shadow = this.attachShadow({ mode: 'open' });
    const button = document.createElement("button")
    this.icon = document.createElement("img")

    button.part = "button"
    this.icon.part = "icon"

    const theme = getCookie("theme")

    if (theme == "light") {
      this.icon.src = this.getAttribute("dark-icon")
      console.log("Here!");
    } else if (theme == "dark") {
      document.body.classList.toggle("dark")
      this.icon.src = this.getAttribute("light-icon")
    }

    button.addEventListener("click", function() {
      self.toggleTheme();
    })

    shadow.appendChild(button);
    button.appendChild(this.icon);
  }

  toggleTheme() {
    document.body.classList.toggle("dark")
  
    if (document.body.classList.contains("dark")) {
      this.icon.src = this.getAttribute("light-icon")
      setCookie("theme", "dark", 999)
    } else {
      this.icon.src = this.getAttribute("dark-icon")
      setCookie("theme", "light", 999)
    }
  }
}

customElements.define("theme-toggle", ThemeToggle)
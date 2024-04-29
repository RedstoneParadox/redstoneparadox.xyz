class ThemeToggle extends HTMLElement {
  static observedAttributes = ["light-icon", "dark-icon"];

  constructor() {
    super();
    this.icon = null
  }

  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });
    const button = document.createElement("button")
    this.icon = document.createElement("img")

    button.part = "button"
    this.icon.part = "icon"
    this.icon.src = this.getAttribute("dark-icon")

    button.addEventListener("click", this.toggleTheme)

    shadow.appendChild(button);
    button.appendChild(this.icon)
  }

  toggleTheme() {
    document.body.classList.toggle("dark")
  
    if (document.body.classList.contains("dark")) {
      this.icon.src = this.getAttribute("light-icon")
    } else {
      this.icon.src = this.getAttribute("dark-icon")
    }
  }
}

customElements.define("theme-toggle", ThemeToggle)
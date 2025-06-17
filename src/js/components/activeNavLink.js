const navigationLinks = document.querySelectorAll(".main-menu__nav ul a");

if (navigationLinks && navigationLinks.length > 0) {
  navigationLinks.forEach((link) => {
    link.classList.remove('active')
  })
  const getBasePath = (url) => {
    let path = url
      .replace(/^https?:\/\/[^\/]+/, "")
      .split("?")[0]
      .split("#")[0]

    path = path.replace(/^\/+|\/+$/g, "")

    const segments = path.split("/")
    return segments[0] || "/"
  }

  const currentBasePath = getBasePath(window.location.href)

  navigationLinks.forEach((link) => {
    const linkBasePath = getBasePath(link.href)
    if (linkBasePath === currentBasePath) {
      link.classList.add("active")
    }

    if (
      (linkBasePath === "/" || linkBasePath === "") &&
      (currentBasePath === "/" || currentBasePath === "")
    ) {
      link.classList.add("active")
    }
  })
}

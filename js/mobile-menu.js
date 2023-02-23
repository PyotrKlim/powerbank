(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  let checker = true;
  window.onresize = function (event) {
    if (window.innerWidth >= '768') {
      document.querySelector(".menu-container").style.display = 'flex'
    } else if (window.innerWidth <= '767') {
      document.querySelector(".menu-container").style.display = 'none'
    }
  };
  

  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);
    console.log(menuBtnRef.getAttribute("aria-expanded"))
    mobileMenuRef.classList.toggle("is-open");
    
    if (checker) {
      document.querySelector(".menu-container").style.display = "flex";
      checker = false;
      console.log('Видно');
      console.log(document.querySelector(".menu-container").style.display);
      console.log(checker);
    } else {
      document.querySelector(".menu-container").style.display = "none";
      checker = true;
      console.log('Не видно');
      console.log(document.querySelector(".menu-container").style.display);
      console.log(checker);
    }
  });
})()

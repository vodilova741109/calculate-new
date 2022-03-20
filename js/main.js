(function() {
    const burger = document.getElementsByClassName("burger")[0];
    const menu = document.getElementsByClassName("menu")[0];
    const activeClass = "menu_active";
    burger.onclick = event => {
      if (menu.classList.contains(activeClass)) {
        menu.classList.remove(activeClass);
      } else {
        menu.classList.add(activeClass);
      }
    };
  })();
  
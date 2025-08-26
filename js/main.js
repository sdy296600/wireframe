window.addEventListener("load", function () {
  //
  const gnbLi = document.querySelectorAll(".gnb > li");
  const subMenu = document.querySelectorAll(".sub-menu");

  gnbLi.forEach((item, index) => {
    const subCrrent = subMenu[index];
    item.addEventListener("mouseenter", () => {
      if (subCrrent.classList.contains("active")) {
        subCrrent.classList.remove("active");
      } else {
        subMenu.forEach((subItem) => {
          subItem.classList.remove("active");
        });
      }
      subCrrent.classList.add("active");
    });
    item.addEventListener("mouseleave", () => {
      subCrrent.classList.remove("active");
    });
  });
});

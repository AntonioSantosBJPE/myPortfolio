import { renderListcardsProject } from "../../scripts/render.js";

window.addEventListener("DOMContentLoaded", () => {
  renderListcardsProject();

  const imgDropDownBlack = "../../assets/drop-down-menu-black.png";
  const imgDropDownWhite = "../../assets/drop-down-menu-white.png";
  const imgBtnCloseBlack = "../../assets/close.png";
  const imgBtnCloseWhite = "../../assets/close2.png";
  const imgDarkModeLight = "../../assets/sun.png";
  const imgDarkMode = "../../assets/moon.png";

  const btnMenuDropDwon = document.querySelector(".img-button-dropdown-menu");
  const boxLinksMenu = document.querySelector(".list-links-menu");
  const linksMenu = document.querySelectorAll(".link-menu");
  const btnDarkMode = document.querySelector(".btn-darkMode");
  const tagHtml = document.querySelector("html");
  const btnOpenModal = document.querySelector("#open-modal");
  const btnCloseModal = document.querySelector(".btn-close-modal");
  const linkOpenModal = document.querySelector("#link-open-modal");
  const modal = document.querySelector(".modal-wrap");

  btnOpenModal.addEventListener("click", (e) => {
    modal.classList = "modal-wrap show-modal";
  });

  btnCloseModal.addEventListener("click", (e) => {
    modal.classList = "modal-wrap";
  });

  linkOpenModal.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList = "modal-wrap show-modal";
  });

  btnDarkMode.addEventListener("click", (e) => {
    if (tagHtml.classList.contains("light-mode")) {
      tagHtml.classList = "";
      btnDarkMode.src = imgDarkModeLight;
      btnDarkMode.title = "Ativar light mode";
    } else {
      tagHtml.classList = "light-mode";
      btnDarkMode.src = imgDarkMode;
      btnDarkMode.title = "Ativar dark mode";
    }

    if (window.screen.width < 768) {
      boxLinksMenu.classList =
        "list-links-menu  flex-col items-center justify-between";
      btnMenuDropDwon.classList = "img-button-dropdown-menu";
      if (tagHtml.classList.contains("light-mode")) {
        btnMenuDropDwon.src = imgDropDownBlack;
      } else {
        btnMenuDropDwon.src = imgDropDownWhite;
      }
    }
  });

  btnMenuDropDwon.addEventListener("click", (e) => {
    if (boxLinksMenu.classList.contains("show")) {
      boxLinksMenu.classList =
        "list-links-menu  flex-col items-center justify-between";
      btnMenuDropDwon.classList = "img-button-dropdown-menu";
      if (tagHtml.classList.contains("light-mode")) {
        btnMenuDropDwon.src = imgDropDownBlack;
      } else {
        btnMenuDropDwon.src = imgDropDownWhite;
      }
    } else {
      boxLinksMenu.classList =
        "list-links-menu  flex-col items-center justify-between show";

      btnMenuDropDwon.classList =
        "img-button-dropdown-menu dimensions-btn-close";
      if (tagHtml.classList.contains("light-mode")) {
        btnMenuDropDwon.src = imgBtnCloseBlack;
      } else {
        btnMenuDropDwon.src = imgBtnCloseWhite;
      }
    }
  });

  window.addEventListener("resize", () => {
    if (window.screen.width >= 768) {
      boxLinksMenu.classList =
        "list-links-menu  flex-col items-center justify-between";
      btnMenuDropDwon.classList = "img-button-dropdown-menu";
      if (tagHtml.classList.contains("light-mode")) {
        btnMenuDropDwon.src = imgDropDownBlack;
      } else {
        btnMenuDropDwon.src = imgDropDownWhite;
      }
    }
  });

  linksMenu.forEach((element) => {
    element.addEventListener("click", (e) => {
      if (window.screen.width < 768) {
        boxLinksMenu.classList =
          "list-links-menu  flex-col items-center justify-between";
        btnMenuDropDwon.classList = "img-button-dropdown-menu";
        if (tagHtml.classList.contains("light-mode")) {
          btnMenuDropDwon.src = imgDropDownBlack;
        } else {
          btnMenuDropDwon.src = imgDropDownWhite;
        }
      }
    });
  });
});

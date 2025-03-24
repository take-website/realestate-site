const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  effect: "fade",
  speed: 3000,
  allowTouchMovie: false,
  autoplay: {
    delay: 3000,
  }
});

$(function () {
    const pageTop = $(".js-page-top");
    pageTop.hide();
    $(window).scroll(function () {
      if ($(this).scrollTop() > 20) {
        pageTop.fadeIn();
      } else {
        pageTop.fadeOut();
      }
    });
    pageTop.click(function () {
      $("body, html").animate(
        {
          scrollTop: 0,
        },
        300
      );
      return false;
    });
  });


document.addEventListener("DOMContentLoaded", () => {
  const modalTriggers = document.querySelectorAll(".works__item");
  const closeButtons = document.querySelectorAll(".modal__close");
  const modals = document.querySelectorAll(".modal");

  // クリックでモーダルを開く
  modalTriggers.forEach(trigger => {
      trigger.addEventListener("click", () => {
          const targetModalId = trigger.getAttribute("data-modal-target");
          const targetModal = document.getElementById(targetModalId);
          if (targetModal) {
              targetModal.style.display = "flex";
          }
      });
  });

  // クリックでモーダルを閉じる
  closeButtons.forEach(button => {
      button.addEventListener("click", () => {
          button.closest(".modal").style.display = "none";
      });
  });

  // モーダル外をクリックして閉じる
  window.addEventListener("click", (e) => {
      modals.forEach(modal => {
          if (e.target === modal) {
              modal.style.display = "none";
          }
      });
  });
});

 const buttons = document.querySelectorAll(".slovo__btn");

  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      const slovoBlock = button.closest(".slovo");
      const message = slovoBlock.querySelector(".slovo__right");

      if (message.style.display === "none" || message.style.display === "") {
        message.style.display = "inline-block";
      } else {
        message.style.display = "none";
      }
    });
  });
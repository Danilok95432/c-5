import { body } from "../_vars";
import { initSelects } from "./customSelect";

import { updateChangeableListId } from "../_functions";

const guestsInput = document.querySelector(".custom-input__guests-modal input");
const guestsModal = document.querySelector(".guests-modal");

// Счетчики гостей

export const initCounters = (counters) => {
  if (counters) {
    counters.forEach((counter) => {
      const computedCount = counter.querySelector(".main-counter__count");
      const decBtn = counter.querySelector(".main-counter__dec-btn");
      const incBtn = counter.querySelector(".main-counter__inc-btn");

      decBtn.addEventListener("click", (e) => {
        if (computedCount.value > 0) {
          computedCount.setAttribute("value", computedCount.value--);
        }

        const childrenChangeableList = e.target
          .closest(".guests-modal__rooms-list-item")
          .querySelector(".guests-modal__children-list");

        if (childrenChangeableList.children.length > 0) {
          const lastChild =
            childrenChangeableList.children[
              childrenChangeableList.children.length - 1
            ];
          lastChild.remove();
        }
      });

      incBtn.addEventListener("click", (e) => {
        computedCount.setAttribute("value", computedCount.value++);

        const childTemplateId = e.target.dataset.template;

        if (childTemplateId) {
          let templateFragment = document.querySelector(
            `#${childTemplateId}`
          ).content;
          let templateElement =
            templateFragment.firstElementChild.cloneNode(true);
          const targetChangeableList = e.target
            .closest(".guests-modal__rooms-list-item")
            .querySelector(".guests-modal__children-list");

          targetChangeableList.appendChild(templateElement);

          const changeAmount =
            templateElement.querySelector(".changeable-amount");
          changeAmount.textContent = targetChangeableList.children.length;
          initSelects();
          updateChangeableListId(targetChangeableList);
        }
      });
    });
  }
};

if (guestsInput) {
  // Появление/скрытие модалки кол-ва гостей

  body.addEventListener("click", (e) => {
    const isModalClick =
      e.target.classList.contains("guests-modal") ||
      e.target.classList.contains("guests-modal__delete-btn") ||
      e.target.closest(".guests-modal") ||
      e.target === guestsInput;

    if (!isModalClick) {
      guestsModal.classList.remove("_active");
    }
  });

  guestsInput.addEventListener("click", (e) => {
    guestsModal.classList.add("_active");
  });

  const initialCounters = guestsModal.querySelectorAll(".main-counter");
  initCounters(initialCounters);
}

// Обработка нажатия на "Готово"

if (guestsModal) {
  const completeBtn = guestsModal.querySelector(".guests-modal__complete-btn");
  completeBtn.addEventListener("click", (e) => {
    let adultsNum = 0;
    let childrenNum = 0;

    const adultsCounts = guestsModal.querySelectorAll(
      ".main-counter._adults .main-counter__count"
    );
    const childrenCounts = guestsModal.querySelectorAll(
      ".main-counter._children .main-counter__count"
    );

    adultsCounts.forEach((el) => {
      adultsNum = adultsNum + Number(el.textContent);
    });
    childrenCounts.forEach((el) => {
      childrenNum = childrenNum + Number(el.textContent);
    });

    guestsModal.classList.remove("_active");
    guestsInput.parentElement.classList.add("_active");

    guestsInput.value = `${adultsNum} ${
      adultsNum === 1 ? "взрослый" : "взрослых"
    } , ${childrenNum} ${childrenNum === 1 ? "ребенок" : "детей"}`;
  });
}

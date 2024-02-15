// Создание массива занятий для примера
let data = [
  {
    id: 0,
    name: "Математика",
    time: "8:00-8:45",
    current: 5,
    max: 10,
  },
  {
    id: 1,
    name: "Физика",
    time: "8:50-9:35",
    current: 4,
    max: 11,
  },
  {
    id: 2,
    name: "Английский",
    time: "9:40-10:25",
    current: 7,
    max: 15,
  },
];
// Преобразование в JSON-формат, допустим эти данные мы получили откуда-нибудь с сервера
let jsonData = JSON.stringify(data);
console.log(jsonData);

// Принимает JSON, CSS-selector отображает занятия на странице внутри CSS-selector
const addLessons = (json, selector) => {
  const lessons = JSON.parse(json);
  const elem = document.querySelector(selector);
  for (lesson of lessons) {
    elem.insertAdjacentHTML(
      "beforeend",
      `<div class="lesson lesson${lesson.id}">
            <p class="lesson__name">Название занятия: ${lesson.name}</p>
            <p class="lesson__time">Время проведения: ${lesson.time}</p>
            <p class="lesson__current">Число участников:<span>${lesson.current}</span></p>
            <p class="lesson__max">Лимит участников:<span>${lesson.max}</span></p>
            <button type="button" class="btn btn-primary lesson__sign-up${lesson.id}">Записаться</button>
            <button type="button" class="btn btn-primary lesson__cancel${lesson.id}" disabled>Отменить запись</button>
        </div>`
    );

    const btn1 = document.querySelector(`.lesson__sign-up${lesson.id}`);
    const btn2 = document.querySelector(`.lesson__cancel${lesson.id}`);
    let current = document.querySelector(`.lesson${lesson.id}`).children[2]
      .children[0];
    const max = document.querySelector(`.lesson${lesson.id}`).children[3]
      .children[0].textContent;

    btn1.addEventListener("click", (e) => {
      e.target.setAttribute("disabled", "disabled");
      if (+current.textContent < +max) {
        current.textContent = ++current.textContent;
      }
      btn2.removeAttribute("disabled");
    });

    btn2.addEventListener("click", (e, obj) => {
      e.target.setAttribute("disabled", "disabled");
      if (+current.textContent < +max) {
        current.textContent = --current.textContent;
      }
      btn1.removeAttribute("disabled");
    });
  }
};

addLessons(jsonData, ".schedule");

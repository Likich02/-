const categories = [
  {
    Name: "Мойка кузова",
    a: " · Двухфазная мойка кузова",
    b: " · Мойка слонных ковриков",
    c: " · Турбосушка",
    img: "img/av1.jpg",
    href: "#",
  },
  {
    Name: "Химчистка салона",
    a: " · Полная химчистка салона",
    b: " · Химчистка багажного отделения",
    c: " · Консервация специальным составом",
    img: "img/av2.jpg",
    href: "#",
  },
  {
    Name: "Детейлинг подкапотного пространства",
    a: " · Химчистка подкопотного пространства",
    b: " · Туробосушка",
    c: " · Консервация специальным составом",
    img: "img/av3.jpg",
    href: "#",
  },
];
function showCategories() {
  categories.forEach((category, id) => {
    var templateString =
      '<div  class="col"  id = "' +
      "category_" +
      id +
      '">  <div class="card"> <img src= "' +
      category.img +
      '"class = img-fluid rounded-start class="card-img-top" alt="Card image cap"> <div class="card-body"> <h5 class="card-title">' +
      category.Name +
      '</h5><h6 class = "text-muted">' +
      category.a +
      "<br>" +
      category.b +
      "<br>" +
      category.c +
      '</h6></div><a class="btn btn-primary open-popup" href="' +
      category.href +
      '">Записаться</a></div></div></div>';
    $("#categories").append(templateString);
    // $("#category_" + id).click(() => {
    //   category.displayFunc();
    // });
  });
}

$(document).ready(() => {
  showCategories();

  // function Calendar2(id, year, month) {
  //   var Dlast = new Date(year, month + 1, 0).getDate(),
  //     D = new Date(year, month, Dlast),
  //     DNlast = new Date(D.getFullYear(), D.getMonth(), Dlast).getDay(),
  //     DNfirst = new Date(D.getFullYear(), D.getMonth(), 1).getDay(),
  //     calendar = "<tr>",
  //     month = [
  //       "Январь",
  //       "Февраль",
  //       "Март",
  //       "Апрель",
  //       "Май",
  //       "Июнь",
  //       "Июль",
  //       "Август",
  //       "Сентябрь",
  //       "Октябрь",
  //       "Ноябрь",
  //       "Декабрь",
  //     ];
  //   if (DNfirst != 0) {
  //     for (var i = 1; i < DNfirst; i++) calendar += "<td>";
  //   } else {
  //     for (var i = 0; i < 6; i++) calendar += "<td>";
  //   }
  //   for (var i = 1; i <= Dlast; i++) {
  //     if (
  //       i == new Date().getDate() &&
  //       D.getFullYear() == new Date().getFullYear() &&
  //       D.getMonth() == new Date().getMonth()
  //     ) {
  //       calendar += '<td class="today">' + i;
  //     } else {
  //       calendar += "<td>" + i;
  //     }
  //     if (new Date(D.getFullYear(), D.getMonth(), i).getDay() == 0) {
  //       calendar += "<tr>";
  //     }
  //   }
  //   for (var i = DNlast; i < 7; i++) calendar += "<td>&nbsp;";
  //   document.querySelector("#" + id + " tbody").innerHTML = calendar;
  //   document.querySelector("#" + id + " thead td:nth-child(2)").innerHTML =
  //     month[D.getMonth()] + " " + D.getFullYear();
  //   document.querySelector("#" + id + " thead td:nth-child(2)").dataset.month =
  //     D.getMonth();
  //   document.querySelector("#" + id + " thead td:nth-child(2)").dataset.year =
  //     D.getFullYear();
  //   if (document.querySelectorAll("#" + id + " tbody tr").length < 6) {
  //     // чтобы при перелистывании месяцев не "подпрыгивала" вся страница, добавляется ряд пустых клеток. Итог: всегда 6 строк для цифр
  //     document.querySelector("#" + id + " tbody").innerHTML +=
  //       "<tr><td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;";
  //   }
  // }
  // Calendar2("calendar2", new Date().getFullYear(), new Date().getMonth());
  // // переключатель минус месяц
  // document.querySelector(
  //   "#calendar2 thead tr:nth-child(1) td:nth-child(1)"
  // ).onclick = function () {
  //   Calendar2(
  //     "calendar2",
  //     document.querySelector("#calendar2 thead td:nth-child(2)").dataset.year,
  //     parseFloat(
  //       document.querySelector("#calendar2 thead td:nth-child(2)").dataset.month
  //     ) - 1
  //   );
  // };
  // // переключатель плюс месяц
  // document.querySelector(
  //   "#calendar2 thead tr:nth-child(1) td:nth-child(3)"
  // ).onclick = function () {
  //   Calendar2(
  //     "calendar2",
  //     document.querySelector("#calendar2 thead td:nth-child(2)").dataset.year,
  //     parseFloat(
  //       document.querySelector("#calendar2 thead td:nth-child(2)").dataset.month
  //     ) + 1
  //   );
  // };

  let popupBg = document.querySelector(".popup__bg");
  let popup = document.querySelector(".popup");
  let openPopupButtons = document.querySelectorAll(".open-popup");
  let closePopupButton = document.querySelector(".close-popup");

  openPopupButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      popupBg.classList.add("active");
      popup.classList.add("active");
    });
  });

  closePopupButton.addEventListener("click", () => {
    popupBg.classList.remove("active");
    popup.classList.remove("active");
  });

  document.addEventListener("click", (e) => {
    if (e.target === popupBg) {
      popupBg.classList.remove("active");
      popup.classList.remove("active");
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  form.addEventListener("submit", formSend);

  async function formSend(e) {
    e.preventDefault();

    let error = formValidate(form);
  }
});

function formValidate(form) {
  let error = 0;
  let formReg = document.querySelectorAll("._req");

  for (let index = 0; index < formReg.length; index++) {
    const input = formReq[index];
    formRemoveError(input);
    if (input.value === "") {
      formAddError(input);
      error++;
    }
  }
}

function formAddError(input) {
  input.parentElement.classList.add("_error");
  input.classList.add("_error");
}
function formRemoveError(input) {
  input.parentElement.classList.add("_error");
  input.classList.add("_error");
}

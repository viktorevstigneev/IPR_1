function xxx() {
  let a = document.getElementById("elem1").value;
  let b = document.getElementById("elem2").value;
  let c = document.getElementById("elem3").value;

  if (!a || !b || !c) {
    alert("введите значения, поля пусты");
  } else {
    let date = new Date(Number(a), Number(b), Number(c));
    let result = date.getDay();
    let day;

    if (result === 0) day = "ВС";
    else if (result === 1) day = "ПН";
    else if (result === 2) day = "ВТ";
    else if (result === 3) day = "СР";
    else if (result === 4) day = "ЧТ";
    else if (result === 5) day = "ПТ";
    else if (result === 6) day = "СБ";
    else day = "Некорректно введена дата";
    alert(day);
  }
}

/*
/*
Дни недели:
0-ВС
1-ПН
2-ВТ
3-СР
4-ЧТ
5-ПТ
6-СБ

Месяцы:
0-Январь
1-Февраль
2-Март
3-Апрель
4-Май
5-Июнь
6-Июль
7-Август
8-Сентябрь
9-Октябрь
10-Ноябрь
11-Декабрь
 */

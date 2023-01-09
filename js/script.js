

// 1)Створити html документ, в якому є теги header, footer, nav, ul список на 5 елементів li, отримати доступ до ціх елементів і змінити там текст за допомогою innerHtml

    let li = document.querySelectorAll('.item-list');
    console.log(li);
    let header = document.querySelector('.header');
    console.log(header);
    let nav = document.querySelector('.menu-list');
    console.log(nav);
    let [...foote] = document.querySelectorAll('.footer');
    console.log(foote);

    
    li.forEach((element) => {
        element.innerHTML = "One";
    });

// 2) Знайти батьківський елемент li елемента через методи пошуку батьківського елементу вивести в консоль отримане значення

let parentLi = document.querySelector("li");
console.log(parentLi.parentElement);



// 3) Створіть класс по додаваню фільма який має такі значення(рік випуску, жанр, назву, кількість переглядів)


// 4) В классі створити метод який визначає рейтинг в залежності від року випуску і кількості переглядів(кількість переглядів поділена на різницю між сьогоднішнім роком і роком випуску)

// 5) Створіть массив і розмістіть в ньому створені обєкти фільмів, далі за допомогою синтаксису деструктирізації  переберіть масив  і виведіть значення по року випуску.




class Movies{
    constructor(year, genre, name, number) {
        this.year = year;
        this.genre = genre;
        this.name = name;
        this.number = number;
    }
    rating() {

        return `Рейтинг фільму : ${this.name} - ${this.number / (new Date().getFullYear() - this.year)}`

    }
};

let catalogArr = [
    new Movies(2009, 'жахи', 'Платформа', 5000),
    new Movies(2015, 'бойовик', 'Втрачена куля', 10000),
    new Movies(2019, 'кримінал', 'Місто шахраїв', 7000),
    new Movies(2005, 'бойовик', 'Вижити', 9000),
    new Movies(2021, 'кримінал', 'Червоне сповіщення', 2000),
];

let [filmA, filmB, filmC, filmD, filmE] = catalogArr;
catalogArr.sort((a, b) => a.year - b.year);
console.log(catalogArr);
console.log(filmA.rating());






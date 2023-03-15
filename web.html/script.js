function showItems(items) {
  $("#items").html("");
  items.forEach((item) => {
    var templateString = `
    
      
        <div  class="col">
            <div class="card"> 
              <div class="row g-0"> <div class="col-md-0">
                <img src= "${item.img}" class="img-fluid rounded-start" alt="Card image cap"></div>
                  <div class="col-md-0">
                   <div class="card-body"> 
                    <h5 class="card-title">${item.Name}</h5>
                     <p class="card-text">${item.info}</p>
                      <p class="card-text"><h4>${item.newPrice}</h4>
                      <small class="text-muted">${item.oldPrice}</small></p></div>
                    <a class="btn btn-primary" href="${item.href}">Перейти</a>
                </div>
                </div>
            </div>
        </div>`;
    $("#items").append(templateString);
    $("#categories").html("");
  });
}
const computers = [
  {
    Name: "iRu Home 310",
    info: "Компьютер iRU Home 310H5SE, Intel Core i5 11400, DDR4 16ГБ, 240ГБ(SSD), Intel UHD Graphics 730, Free DOS, черный",
    img: "картинки/comp1.jpg",
    newPrice: "Цена :30 490₽",
    oldPrice: "Старая цена: 32 490₽",
    href: "#",
  },
  {
    Name: "MSI Infinite 11SI-1611XRU",
    info: "Компьютер iRU Home 310H5GE, Intel Core i3 10105, DDR4 16ГБ, 512ГБ(SSD), Intel UHD Graphics 630, Free DOS, черный",
    img: "картинки/comp2.jpg",
    newPrice: "Цена :60 490₽",
    oldPrice: "Старая цена: 64 490₽",
    href: "#",
  },
  {
    Name: "iRu Home 310",
    info: "Компьютер HP Pavilion TG01-2017ur, Intel Core i5 11400F, DDR4 16ГБ, 512ГБ(SSD), NVIDIA GeForce RTX 3060Ti - 8192 Мб, CR, Free DOS 3.0, черный",
    img: "картинки/comp3.jpg",
    newPrice: "Цена : 80 490₽",
    oldPrice: "Старая цена: 87 490₽",
    href: "#",
  },
];

const laptops = [
  {
    Name: "Huawei MateBook D 15",
    info: "Ноутбук Huawei MateBook D 15 15.6, IPS, Intel Core i5 1135G7 2.4ГГц, 8ГБ, 256ГБ SSD, Intel Iris Xe graphics , Windows 11 Home, серебристый [53013ert]",
    img: "картинки/nout1.jpg",
    newPrice: "Цена :46 490₽",
    oldPrice: "Старая цена: 52 490₽",
    href: "#",
  },
  {
    Name: "MSI GF63 Thin 11UD-206XRU",
    info: "Ноутбук MSI GF63 Thin 11UD-206XRU, 15.6, IPS, Intel Core i5 11400H 2.7ГГц, 16ГБ, 512ГБ SSD, NVIDIA GeForce RTX 3050 Ti для ноутбуков - 4096 Мб, Free DOS, черный ",
    img: "картинки/nout2.jpg",
    newPrice: "Цена :60 490₽",
    oldPrice: "Старая цена: 64 490₽",
    href: "#",
  },
  {
    Name: "Huawei MateBook D 14",
    info: "Ноутбук Huawei MateBook D 14, IPS, Intel Core i3 1115G4 3.0ГГц, 8ГБ, 256ГБ SSD, Intel UHD Graphics , Windows 11 Home, серебристый",
    img: "картинки/nout3.jpg",
    newPrice: "Цена : 80 490₽",
    oldPrice: "Старая цена: 87 490₽",
    href: "#",
  },
];

const accessories = [
  {
    Name: "Процессор Intel Core i5 11400F, LGA 1200, OEM",
    info: "Ядро:  Rocket Lake; Частота:  2.6 ГГц и 4.4 ГГц в режиме Turbo; Сокет:  LGA 1200; Число ядер:  6, потоков 12; Тепловыделение:  65 Вт; Технологический процесс:  14 нм;",
    img: "картинки/proc1.jpg",
    newPrice: "Цена :12 490₽",
    oldPrice: "Старая цена: 14 490₽",
    href: "#",
  },
  {
    Name: "Устройство охлаждения(кулер) ID-COOLING SE-214-XT, 120мм, Ret",
    info: "Вентиляторы:  1шт, 120 мм, 500 - 1500 об/мин; 16 - 27 дБ, Максимальное тепловыделение ЦП:  180 Вт; Радиатор:  алюминий+медь; Основание:  с открытыми тепловыми трубками, материал - алюминий/медь; Питание от МП:  4-pin; Высота кулера:  150 мм; Особенности:  PWM, с подсветкой ",
    img: "картинки/kul1.jpg",
    newPrice: "Цена :2 490₽",
    oldPrice: "Старая цена: 3 490₽",
    href: "#",
  },
  {
    Name: "Материнская плата ASUS ROG MAXIMUS Z690 HERO EVA, LGA 1700, Intel Z690, ATX, Ret",
    info: "Форм-фактор:  ATX; Сокет:  LGA 1700; чипсет: Intel Z690; Память:  DDR5 - 4слота, частотой до 4800 МГц; Слоты:  PCI-E 4.0 x16 х 1, Разъемы:  M.2 х 5, SATA3 х 6, HDMI х 1, Сеть:  WiFi, Bluetooth, 2.5Gigabit;",
    img: "картинки/mat1.jpg",
    newPrice: "Цена : 40 490₽",
    oldPrice: "Старая цена: 45 490₽",
    href: "#",
  },
];

const periphery = [
  {
    Name: "Монитор игровой Xiaomi Mi Curved Gaming Monitor черный",
    info: "Экран: 3440x1440, 21:9, VA, 144 Гц, 300 кд/м2, 4 мс, AMD FreeSync, изогнутый, Контрастность:  статическая 3000:1, Разъемы:  Display Port х 2 шт, HDMI х 2, выход на наушники, Блок питания:  внутренний; Конструктив:  регулировка высоты, регулировка наклона, поворот экрана, крепление VESA 100х100,",
    img: "картинки/mon1.jpg",
    newPrice: "Цена :29 490₽",
    oldPrice: "Старая цена: 34 490₽",
    href: "#",
  },
  {
    Name: "Клавиатура Logitech G413 Carbon",
    info: "Тип соединения:  проводной; Интерфейс:  USB; Цвет русских букв:  серый; Цвет английских букв:  серый; Встроено:  USB-хаб, подсветка клавиш, Конструктив:  механическая; Особенности:  мультимедийная, для геймеров",
    img: "картинки/klav1.jpg",
    newPrice: "Цена :7 490₽",
    oldPrice: "Старая цена: 8 490₽",
    href: "#",
  },
  {
    Name: "Мышь A4TECH Bloody",
    info: "Тип:  игровая, оптическая, проводная, USB 3.0; Сенсор:  3200 dpi, ускорение 30 G; Количество кнопок:  8; колесо прокрутки; Дизайн:  для правой руки; Длина провода:  1.8 м; Размеры (ДхШхВ):  122 х 77 х 32 мм;",
    img: "картинки/mouse1.jpg",
    newPrice: "Цена : 1 490₽",
    oldPrice: "Старая цена: 2 490₽",
    href: "#",
  },
];

function showComputers() {
  showItems(computers);
}

function showLaptops() {
  showItems(laptops);
}

function showAccessories() {
  showItems(accessories);
}

function showPeriphery() {
  showItems(periphery);
}

const categories = [
  {
    Name: "Компьютеры",
    img: "картинки/comp.png",
    href: "#",
    displayFunc: showComputers,
  },
  {
    Name: "Ноутбуки",
    img: "картинки/nout.png",
    href: "#category_id2",
    displayFunc: showLaptops,
  },
  {
    Name: "Комплектующие",
    img: "картинки/proc.png",
    href: "#category_id3",
    displayFunc: showAccessories,
  },
  {
    Name: "Периферия",
    img: "картинки/klav.png",
    href: "#category_id4",
    displayFunc: showPeriphery,
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
      '</h5> <a class="btn btn-primary" href="' +
      category.href +
      '">Перейти</a></div></div></div></div>';
    $("#categories").append(templateString);
    $("#category_" + id).click(() => {
      category.displayFunc();
    });
  });
}

$(document).ready(() => {
  showCategories();
});

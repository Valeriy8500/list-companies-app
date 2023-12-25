import { ICompaniesData } from "../types/types";

export const companiesData: ICompaniesData[] = [
  {
    id: 1,
    companyName: "ООО Куб",
    employeesCount: 15,
    companyAddress: "Москва, ул. Ленина, д. 23",
    checked: false,
    employees: [
      { id: 1, surname: 'Иванов', name: 'Иван', position: 'Программист', checked: false },
      { id: 2, surname: 'Петров', name: 'Петр', position: 'Бухгалтер', checked: false },
      { id: 3, surname: 'Сидорова', name: 'Мария', position: 'Менеджер', checked: false },
      { id: 4, surname: 'Козлов', name: 'Алексей', position: 'Дизайнер', checked: false },
      { id: 5, surname: 'Смирнова', name: 'Елена', position: 'Тестировщик', checked: false },
      { id: 6, surname: 'Кузнецов', name: 'Артем', position: 'Аналитик', checked: false },
      { id: 7, surname: 'Васнецов', name: 'Дмитрий', position: 'Программист', checked: false },
      { id: 8, surname: 'Николаев', name: 'Ольга', position: 'Менеджер', checked: false },
      { id: 9, surname: 'Иванова', name: 'Анна', position: 'Бухгалтер', checked: false },
      { id: 10, surname: 'Петрова', name: 'Наталья', position: 'Дизайнер', checked: false },
      { id: 11, surname: 'Сидоров', name: 'Владимир', position: 'Тестировщик', checked: false },
      { id: 12, surname: 'Козлова', name: 'Татьяна', position: 'Аналитик', checked: false },
      { id: 13, surname: 'Смирнов', name: 'Сергей', position: 'Программист', checked: false },
      { id: 14, surname: 'Кузнецова', name: 'Екатерина', position: 'Менеджер', checked: false },
      { id: 15, surname: 'Васнецова', name: 'Алина', position: 'Бухгалтер', checked: false },
    ]
  },
  {
    id: 2,
    companyName: "ОАО Спецстрой",
    employeesCount: 25,
    companyAddress: "Санкт-Петербург, ул. Пушкина, д. 45",
    checked: false,
    employees: [
      { id: 1, surname: 'Лебедев', name: 'Игорь', position: 'Аналитик', checked: false },
      { id: 2, surname: 'Морозов', name: 'Денис', position: 'Программист', checked: false },
      { id: 3, surname: 'Захарова', name: 'Евгения', position: 'Тестировщик', checked: false },
      { id: 4, surname: 'Исаев', name: 'Сергей', position: 'Дизайнер', checked: false },
      { id: 5, surname: 'Григорьев', name: 'Михаил', position: 'Менеджер', checked: false },
      { id: 6, surname: 'Соколова', name: 'Валентина', position: 'Бухгалтер', checked: false },
      { id: 7, surname: 'Лазарев', name: 'Александр', position: 'Программист', checked: false },
      { id: 8, surname: 'Иванов', name: 'Иван', position: 'Программист', checked: false },
      { id: 9, surname: 'Петров', name: 'Петр', position: 'Бухгалтер', checked: false },
      { id: 10, surname: 'Сидорова', name: 'Мария', position: 'Менеджер', checked: false },
      { id: 11, surname: 'Козлов', name: 'Алексей', position: 'Дизайнер', checked: false },
      { id: 12, surname: 'Смирнова', name: 'Елена', position: 'Тестировщик', checked: false },
      { id: 13, surname: 'Кузнецов', name: 'Артем', position: 'Аналитик', checked: false },
      { id: 14, surname: 'Васнецов', name: 'Дмитрий', position: 'Программист', checked: false },
      { id: 15, surname: 'Николаев', name: 'Ольга', position: 'Менеджер', checked: false },
      { id: 16, surname: 'Иванова', name: 'Анна', position: 'Бухгалтер', checked: false },
      { id: 17, surname: 'Петрова', name: 'Наталья', position: 'Дизайнер', checked: false },
      { id: 18, surname: 'Сидоров', name: 'Владимир', position: 'Тестировщик', checked: false },
      { id: 19, surname: 'Козлова', name: 'Татьяна', position: 'Аналитик', checked: false },
      { id: 20, surname: 'Смирнов', name: 'Сергей', position: 'Программист', checked: false },
      { id: 21, surname: 'Кузнецова', name: 'Екатерина', position: 'Менеджер', checked: false },
      { id: 22, surname: 'Васнецова', name: 'Алина', position: 'Бухгалтер', checked: false },
      { id: 23, surname: 'Романов', name: 'Артем', position: 'Аналитик', checked: false },
      { id: 24, surname: 'Кудряшова', name: 'Ирина', position: 'Менеджер', checked: false },
      { id: 25, surname: 'Федорова', name: 'Надежда', position: 'Тестировщик', checked: false },
    ]
  },
  {
    id: 3,
    companyName: "ЗАО Прогресс",
    employeesCount: 10,
    companyAddress: "Новосибирск, ул. Гагарина, д. 12",
    checked: false,
    employees: [
      { id: 1, surname: 'Романов', name: 'Артем', position: 'Аналитик', checked: false },
      { id: 2, surname: 'Федорова', name: 'Надежда', position: 'Тестировщик', checked: false },
      { id: 3, surname: 'Петрова', name: 'Наталья', position: 'Дизайнер', checked: false },
      { id: 4, surname: 'Смирнов', name: 'Сергей', position: 'Программист', checked: false },
      { id: 5, surname: 'Козлова', name: 'Татьяна', position: 'Аналитик', checked: false },
      { id: 6, surname: 'Сидоров', name: 'Владимир', position: 'Тестировщик', checked: false },
      { id: 7, surname: 'Васнецова', name: 'Алина', position: 'Бухгалтер', checked: false },
      { id: 8, surname: 'Иванова', name: 'Анна', position: 'Бухгалтер', checked: false },
      { id: 9, surname: 'Сидоров', name: 'Владимир', position: 'Тестировщик', checked: false },
      { id: 10, surname: 'Кузнецова', name: 'Екатерина', position: 'Менеджер', checked: false },
    ]
  },
  {
    id: 4,
    companyName: "ПАО СтройТех",
    employeesCount: 5,
    companyAddress: "Екатеринбург, ул. Советская, д. 56",
    checked: false,
    employees: [
      { id: 1, surname: 'Стальной', name: 'Электрон', position: 'Программист', checked: false },
      { id: 2, surname: 'Молниеносный', name: 'Харун', position: 'Бухгалтер', checked: false },
      { id: 3, surname: 'Гиперион', name: 'Лукас', position: 'Менеджер', checked: false },
      { id: 4, surname: 'Искажающий', name: 'Каин', position: 'Дизайнер', checked: false },
      { id: 5, surname: 'Временной', name: 'Аркадий', position: 'Тестировщик', checked: false },
    ]
  },
  {
    id: 5,
    companyName: "ООО АрхСтрой",
    employeesCount: 20,
    companyAddress: "Казань, ул. Кирова, д. 34",
    checked: false,
    employees: [
      { id: 1, surname: 'Звездная', name: 'Лора', position: 'Программист', checked: false },
      { id: 2, surname: 'Мечтательная', name: 'Сафия', position: 'Бухгалтер', checked: false },
      { id: 3, surname: 'Лунная', name: 'Зарина', position: 'Менеджер', checked: false },
      { id: 4, surname: 'Весенняя', name: 'Амели', position: 'Дизайнер', checked: false },
      { id: 5, surname: 'Таинственная', name: 'Роксана', position: 'Тестировщик', checked: false },
      { id: 6, surname: 'Шелковая', name: 'Изольда', position: 'Аналитик', checked: false },
      { id: 7, surname: 'Искусственная', name: 'Марго', position: 'Программист', checked: false },
      { id: 8, surname: 'Сиреневая', name: 'Эвелина', position: 'Менеджер', checked: false },
      { id: 9, surname: 'Золотая', name: 'Джулия', position: 'Бухгалтер', checked: false },
      { id: 10, surname: 'Пурпурная', name: 'Оливия', position: 'Дизайнер', checked: false },
      { id: 11, surname: 'Таинственная', name: 'Хлоя', position: 'Тестировщик', checked: false },
      { id: 12, surname: 'Волшебная', name: 'Аделина', position: 'Программист', checked: false },
      { id: 13, surname: 'Лунная', name: 'Эльза', position: 'Аналитик', checked: false },
      { id: 14, surname: 'Искристая', name: 'Милена', position: 'Менеджер', checked: false },
      { id: 15, surname: 'Вечерняя', name: 'Сельма', position: 'Бухгалтер', checked: false },
      { id: 16, surname: 'Аметистовая', name: 'Фелиция', position: 'Дизайнер', checked: false },
      { id: 17, surname: 'Перламутровая', name: 'Лилиана', position: 'Тестировщик', checked: false },
      { id: 18, surname: 'Фантазийная', name: 'Ариана', position: 'Программист', checked: false },
      { id: 19, surname: 'Розовая', name: 'Мирта', position: 'Аналитик', checked: false },
      { id: 20, surname: 'Ирисовая', name: 'Алессия', position: 'Менеджер', checked: false },
    ]
  },
  {
    id: 6,
    companyName: "ООО ПромТех",
    employeesCount: 5,
    companyAddress: "Самара, ул. Мира, д. 78",
    checked: false,
    employees: [
      { id: 1, surname: 'Лапин', name: 'Натан', position: 'Дизайнер', checked: false },
      { id: 2, surname: 'Тулеев', name: 'Владислав', position: 'Тестировщик', checked: false },
      { id: 3, surname: 'Щербаков', name: 'Тимур', position: 'Аналитик', checked: false },
      { id: 4, surname: 'Баранов', name: 'Даниил', position: 'Программист', checked: false },
      { id: 5, surname: 'Краснов', name: 'Игорь', position: 'Менеджер', checked: false },
    ]
  },
  {
    id: 7,
    companyName: "АО СтройМонтаж",
    employeesCount: 12,
    companyAddress: "Омск, ул. Красная, д. 90",
    checked: false,
    employees: [
      { id: 1, surname: 'Хакимжанова', name: 'Фирдаусия', position: 'Программист', checked: false },
      { id: 2, surname: 'Алимова', name: 'Муаза', position: 'Бухгалтер', checked: false },
      { id: 3, surname: 'Шарипова', name: 'Мухаррама', position: 'Менеджер', checked: false },
      { id: 4, surname: 'Туракулова', name: 'Мушаррафа', position: 'Дизайнер', checked: false },
      { id: 5, surname: 'Рахматуллаева', name: 'Феруза', position: 'Тестировщик', checked: false },
      { id: 6, surname: 'Тошматова', name: 'Сафара', position: 'Аналитик', checked: false },
      { id: 7, surname: 'Шодманова', name: 'Феруангиз', position: 'Программист', checked: false },
      { id: 8, surname: 'Турдиева', name: 'Муафа', position: 'Менеджер', checked: false },
      { id: 9, surname: 'Темирова', name: 'Хабиба', position: 'Бухгалтер', checked: false },
      { id: 10, surname: 'Шарифова', name: 'Мафтуна', position: 'Дизайнер', checked: false },
      { id: 11, surname: 'Жураева', name: 'Мунира', position: 'Тестировщик', checked: false },
      { id: 12, surname: 'Рахматова', name: 'Мунавара', position: 'Программист', checked: false },
    ]
  },
  {
    id: 8,
    companyName: "ООО ТехУспех",
    employeesCount: 8,
    companyAddress: "Челябинск, ул. Профсоюзная, д. 5",
    checked: false,
    employees: [
      { id: 1, surname: 'Müller', name: 'Hans', position: 'Разработчик программного обеспечения', checked: false },
      { id: 2, surname: 'Schmidt', name: 'Klaus', position: 'Специалист по технической поддержке', checked: false },
      { id: 3, surname: 'Schneider', name: 'Dieter', position: 'Финансовый аналитик', checked: false },
      { id: 4, surname: 'Fischer', name: 'Wolfgang', position: 'Медицинский консультант', checked: false },
      { id: 5, surname: 'Weber', name: 'Jürgen', position: 'Менеджер по маркетингу', checked: false },
      { id: 6, surname: 'Schulz', name: 'Andreas', position: 'Шеф-повар', checked: false },
      { id: 7, surname: 'Becker', name: 'Helmut', position: 'Арт-директор', checked: false },
      { id: 8, surname: 'Hoffmann', name: 'Ralf', position: 'Летчик-испытатель', checked: false },
    ]
  },
  {
    id: 9,
    companyName: "АО РосТранс",
    employeesCount: 18,
    companyAddress: "Ростов-на-Дону, ул. Жукова, д. 18",
    checked: false,
    employees: [
      { id: 1, surname: 'Кантемиров', name: 'Андрей', position: 'Программист', checked: false },
      { id: 2, surname: 'Черемных', name: 'Иван', position: 'Бухгалтер', checked: false },
      { id: 3, surname: 'Козырев', name: 'Петр', position: 'Менеджер', checked: false },
      { id: 4, surname: 'Турбанов', name: 'Сергей', position: 'Дизайнер', checked: false },
      { id: 5, surname: 'Шишкин', name: 'Максим', position: 'Тестировщик', checked: false },
      { id: 6, surname: 'Мурзин', name: 'Дмитрий', position: 'Аналитик', checked: false },
      { id: 7, surname: 'Кудряшов', name: 'Артем', position: 'Программист', checked: false },
      { id: 8, surname: 'Носков', name: 'Олег', position: 'Менеджер', checked: false },
      { id: 9, surname: 'Чичерин', name: 'Владимир', position: 'Бухгалтер', checked: false },
      { id: 10, surname: 'Лапин', name: 'Натан', position: 'Дизайнер', checked: false },
      { id: 11, surname: 'Тулеев', name: 'Владислав', position: 'Тестировщик', checked: false },
      { id: 12, surname: 'Щербаков', name: 'Тимур', position: 'Аналитик', checked: false },
      { id: 13, surname: 'Баранов', name: 'Даниил', position: 'Программист', checked: false },
      { id: 14, surname: 'Краснов', name: 'Игорь', position: 'Менеджер', checked: false },
      { id: 15, surname: 'Рыжков', name: 'Михаил', position: 'Бухгалтер', checked: false },
      { id: 16, surname: 'Титов', name: 'Валентин', position: 'Дизайнер', checked: false },
      { id: 17, surname: 'Кожевников', name: 'Аркадий', position: 'Тестировщик', checked: false },
      { id: 18, surname: 'Кузьмин', name: 'Сергей', position: 'Аналитик', checked: false },
    ]
  },
  {
    id: 10,
    companyName: "ПАО Металлург",
    employeesCount: 13,
    companyAddress: "Уфа, ул. Октябрьская, д. 67",
    checked: false,
    employees: [
      { id: 1, surname: 'Шупашка', name: 'Мирача', position: 'Программист', checked: false },
      { id: 2, surname: 'Чиркова', name: 'Эля', position: 'Бухгалтер', checked: false },
      { id: 3, surname: 'Клычкина', name: 'Милаза', position: 'Менеджер', checked: false },
      { id: 4, surname: 'Чиркова', name: 'Залина', position: 'Дизайнер', checked: false },
      { id: 5, surname: 'Трошкина', name: 'Светана', position: 'Тестировщик', checked: false },
      { id: 6, surname: 'Козлова', name: 'Айгуль', position: 'Аналитик', checked: false },
      { id: 7, surname: 'Мурзакова', name: 'Гузель', position: 'Программист', checked: false },
      { id: 8, surname: 'Шемякина', name: 'Саргын', position: 'Менеджер', checked: false },
      { id: 9, surname: 'Тараскина', name: 'Чулпан', position: 'Бухгалтер', checked: false },
      { id: 10, surname: 'Баталова', name: 'Марьяна', position: 'Дизайнер', checked: false },
      { id: 11, surname: 'Алкишина', name: 'Эрмела', position: 'Тестировщик', checked: false },
      { id: 12, surname: 'Шакирзянова', name: 'Гульнара', position: 'Аналитик', checked: false },
      { id: 13, surname: 'Шурпанова', name: 'Лия', position: 'Программист', checked: false },
    ]
  },
  {
    id: 11,
    companyName: "ООО ЭнергоСпец",
    employeesCount: 30,
    companyAddress: "Уфа, ул. Красная, д. 67",
    checked: false,
    employees: [
      { id: 1, surname: 'Стальной', name: 'Электрон', position: 'Программист', checked: false },
      { id: 2, surname: 'Молниеносный', name: 'Харун', position: 'Бухгалтер', checked: false },
      { id: 3, surname: 'Гиперион', name: 'Лукас', position: 'Менеджер', checked: false },
      { id: 4, surname: 'Искажающий', name: 'Каин', position: 'Дизайнер', checked: false },
      { id: 5, surname: 'Временной', name: 'Аркадий', position: 'Тестировщик', checked: false },
    ]
  },
  {
    id: 12,
    companyName: "ОАО СтальПром",
    employeesCount: 13,
    companyAddress: "Воронеж, ул. Маяковского, д. 34",
    checked: false,
    employees: [
      { id: 1, surname: 'Стальной', name: 'Электрон', position: 'Программист', checked: false },
      { id: 2, surname: 'Молниеносный', name: 'Харун', position: 'Бухгалтер', checked: false },
      { id: 3, surname: 'Гиперион', name: 'Лукас', position: 'Менеджер', checked: false },
      { id: 4, surname: 'Искажающий', name: 'Каин', position: 'Дизайнер', checked: false },
      { id: 5, surname: 'Временной', name: 'Аркадий', position: 'Тестировщик', checked: false },
    ]
  },
  {
    id: 13,
    companyName: "ЗАО ТехноГрад",
    employeesCount: 6,
    companyAddress: "Тула, ул. Советская, д. 12",
    checked: false,
    employees: [
      { id: 1, surname: 'Стальной', name: 'Электрон', position: 'Программист', checked: false },
      { id: 2, surname: 'Молниеносный', name: 'Харун', position: 'Бухгалтер', checked: false },
      { id: 3, surname: 'Гиперион', name: 'Лукас', position: 'Менеджер', checked: false },
      { id: 4, surname: 'Искажающий', name: 'Каин', position: 'Дизайнер', checked: false },
      { id: 5, surname: 'Временной', name: 'Аркадий', position: 'Тестировщик', checked: false },
    ]
  },
  {
    id: 14,
    companyName: "ПАО СтройХим",
    employeesCount: 22,
    companyAddress: "Краснодар, ул. Ленина, д. 56",
    checked: false,
    employees: [
      { id: 1, surname: 'Стальной', name: 'Электрон', position: 'Программист', checked: false },
      { id: 2, surname: 'Молниеносный', name: 'Харун', position: 'Бухгалтер', checked: false },
      { id: 3, surname: 'Гиперион', name: 'Лукас', position: 'Менеджер', checked: false },
      { id: 4, surname: 'Искажающий', name: 'Каин', position: 'Дизайнер', checked: false },
      { id: 5, surname: 'Временной', name: 'Аркадий', position: 'Тестировщик', checked: false },
    ]
  },
  {
    id: 15,
    companyName: "ООО ТехЭксперт",
    employeesCount: 30,
    companyAddress: "Сочи, ул. Гагарина, д. 34",
    checked: false,
    employees: [
      { id: 1, surname: 'Стальной', name: 'Электрон', position: 'Программист', checked: false },
      { id: 2, surname: 'Молниеносный', name: 'Харун', position: 'Бухгалтер', checked: false },
      { id: 3, surname: 'Гиперион', name: 'Лукас', position: 'Менеджер', checked: false },
      { id: 4, surname: 'Искажающий', name: 'Каин', position: 'Дизайнер', checked: false },
      { id: 5, surname: 'Временной', name: 'Аркадий', position: 'Тестировщик', checked: false },
    ]
  },
  {
    id: 16,
    companyName: "АО ЛесПром",
    employeesCount: 16,
    companyAddress: "Архангельск, ул. Пушкина, д. 78",
    checked: false,
    employees: [
      { id: 1, surname: 'Стальной', name: 'Электрон', position: 'Программист', checked: false },
      { id: 2, surname: 'Молниеносный', name: 'Харун', position: 'Бухгалтер', checked: false },
      { id: 3, surname: 'Гиперион', name: 'Лукас', position: 'Менеджер', checked: false },
      { id: 4, surname: 'Искажающий', name: 'Каин', position: 'Дизайнер', checked: false },
      { id: 5, surname: 'Временной', name: 'Аркадий', position: 'Тестировщик', checked: false },
    ]
  },
  {
    id: 17,
    companyName: "ООО Экострой",
    employeesCount: 14,
    companyAddress: "Саратов, ул. Профсоюзная, д. 90",
    checked: false,
    employees: [
      { id: 1, surname: 'Стальной', name: 'Электрон', position: 'Программист', checked: false },
      { id: 2, surname: 'Молниеносный', name: 'Харун', position: 'Бухгалтер', checked: false },
      { id: 3, surname: 'Гиперион', name: 'Лукас', position: 'Менеджер', checked: false },
      { id: 4, surname: 'Искажающий', name: 'Каин', position: 'Дизайнер', checked: false },
      { id: 5, surname: 'Временной', name: 'Аркадий', position: 'Тестировщик', checked: false },
    ]
  },
  {
    id: 18,
    companyName: "ПАО Автоэкспорт",
    employeesCount: 30,
    companyAddress: "Курск, ул. Жукова, д. 18",
    checked: false,
    employees: [
      { id: 1, surname: 'Стальной', name: 'Электрон', position: 'Программист', checked: false },
      { id: 2, surname: 'Молниеносный', name: 'Харун', position: 'Бухгалтер', checked: false },
      { id: 3, surname: 'Гиперион', name: 'Лукас', position: 'Менеджер', checked: false },
      { id: 4, surname: 'Искажающий', name: 'Каин', position: 'Дизайнер', checked: false },
      { id: 5, surname: 'Временной', name: 'Аркадий', position: 'Тестировщик', checked: false },
    ]
  },
  {
    id: 19,
    companyName: "ЗАО ГеоСтрой",
    employeesCount: 23,
    companyAddress: "Иркутск, ул. Мира, д. 67",
    checked: false,
    employees: [
      { id: 1, surname: 'Стальной', name: 'Электрон', position: 'Программист', checked: false },
      { id: 2, surname: 'Молниеносный', name: 'Харун', position: 'Бухгалтер', checked: false },
      { id: 3, surname: 'Гиперион', name: 'Лукас', position: 'Менеджер', checked: false },
      { id: 4, surname: 'Искажающий', name: 'Каин', position: 'Дизайнер', checked: false },
      { id: 5, surname: 'Временной', name: 'Аркадий', position: 'Тестировщик', checked: false },
    ]
  },
  {
    id: 20,
    companyName: "ООО ЛидерПром",
    employeesCount: 9,
    companyAddress: "Томск, ул. Кирова, д. 23",
    checked: false,
    employees: [
      { id: 1, surname: 'Стальной', name: 'Электрон', position: 'Программист', checked: false },
      { id: 2, surname: 'Молниеносный', name: 'Харун', position: 'Бухгалтер', checked: false },
      { id: 3, surname: 'Гиперион', name: 'Лукас', position: 'Менеджер', checked: false },
      { id: 4, surname: 'Искажающий', name: 'Каин', position: 'Дизайнер', checked: false },
      { id: 5, surname: 'Временной', name: 'Аркадий', position: 'Тестировщик', checked: false },
    ]
  }
];

export const firstUploadedData: ICompaniesData[] = [
  {
    id: 21, companyName: "АО МеталлГарант", employeesCount: 28, companyAddress: "Тверь, ул. Гагарина, д. 56", checked: false, employees: [
      { id: 1, surname: 'Стальной', name: 'Электрон', position: 'Программист', checked: false },
      { id: 2, surname: 'Молниеносный', name: 'Харун', position: 'Бухгалтер', checked: false },
      { id: 3, surname: 'Гиперион', name: 'Лукас', position: 'Менеджер', checked: false },
      { id: 4, surname: 'Искажающий', name: 'Каин', position: 'Дизайнер', checked: false },
      { id: 5, surname: 'Временной', name: 'Аркадий', position: 'Тестировщик', checked: false },
    ]
  },
  {
    id: 22, companyName: "ПАО БиоТех", employeesCount: 12, companyAddress: "Нижний Новгород, ул. Мира, д. 45", checked: false, employees: [
      { id: 1, surname: 'Стальной', name: 'Электрон', position: 'Программист', checked: false },
      { id: 2, surname: 'Молниеносный', name: 'Харун', position: 'Бухгалтер', checked: false },
      { id: 3, surname: 'Гиперион', name: 'Лукас', position: 'Менеджер', checked: false },
      { id: 4, surname: 'Искажающий', name: 'Каин', position: 'Дизайнер', checked: false },
      { id: 5, surname: 'Временной', name: 'Аркадий', position: 'Тестировщик', checked: false },
    ]
  },
  {
    id: 23, companyName: "ООО СтройМаркет", employeesCount: 17, companyAddress: "Тюмень, ул. Профсоюзная, д. 34", checked: false, employees: [
      { id: 1, surname: 'Стальной', name: 'Электрон', position: 'Программист', checked: false },
      { id: 2, surname: 'Молниеносный', name: 'Харун', position: 'Бухгалтер', checked: false },
      { id: 3, surname: 'Гиперион', name: 'Лукас', position: 'Менеджер', checked: false },
      { id: 4, surname: 'Искажающий', name: 'Каин', position: 'Дизайнер', checked: false },
      { id: 5, surname: 'Временной', name: 'Аркадий', position: 'Тестировщик', checked: false },
    ]
  },
  {
    id: 24, companyName: "ЗАО ПроизводСтрой", employeesCount: 7, companyAddress: "Ижевск, ул. Лермонтова, д. 67", checked: false, employees: [
      { id: 1, surname: 'Стальной', name: 'Электрон', position: 'Программист', checked: false },
      { id: 2, surname: 'Молниеносный', name: 'Харун', position: 'Бухгалтер', checked: false },
      { id: 3, surname: 'Гиперион', name: 'Лукас', position: 'Менеджер', checked: false },
      { id: 4, surname: 'Искажающий', name: 'Каин', position: 'Дизайнер', checked: false },
      { id: 5, surname: 'Временной', name: 'Аркадий', position: 'Тестировщик', checked: false },
    ]
  },
  {
    id: 25, companyName: "АО ТехноСтрой", employeesCount: 26, companyAddress: "Тула, ул. Красная, д. 12", checked: false, employees: [
      { id: 1, surname: 'Стальной', name: 'Электрон', position: 'Программист', checked: false },
      { id: 2, surname: 'Молниеносный', name: 'Харун', position: 'Бухгалтер', checked: false },
      { id: 3, surname: 'Гиперион', name: 'Лукас', position: 'Менеджер', checked: false },
      { id: 4, surname: 'Искажающий', name: 'Каин', position: 'Дизайнер', checked: false },
      { id: 5, surname: 'Временной', name: 'Аркадий', position: 'Тестировщик', checked: false },
    ]
  },
  {
    id: 26, companyName: "ООО ИнжСтрой", employeesCount: 5, companyAddress: "Кемерово, ул. Жукова, д. 56", checked: false, employees: [
      { id: 1, surname: 'Стальной', name: 'Электрон', position: 'Программист', checked: false },
      { id: 2, surname: 'Молниеносный', name: 'Харун', position: 'Бухгалтер', checked: false },
      { id: 3, surname: 'Гиперион', name: 'Лукас', position: 'Менеджер', checked: false },
      { id: 4, surname: 'Искажающий', name: 'Каин', position: 'Дизайнер', checked: false },
      { id: 5, surname: 'Временной', name: 'Аркадий', position: 'Тестировщик', checked: false },
    ]
  },
  {
    id: 27, companyName: "ОАО ЭнергоПро", employeesCount: 14, companyAddress: "Иркутск, ул. Мира, д. 23", checked: false, employees: [
      { id: 1, surname: 'Стальной', name: 'Электрон', position: 'Программист', checked: false },
      { id: 2, surname: 'Молниеносный', name: 'Харун', position: 'Бухгалтер', checked: false },
      { id: 3, surname: 'Гиперион', name: 'Лукас', position: 'Менеджер', checked: false },
      { id: 4, surname: 'Искажающий', name: 'Каин', position: 'Дизайнер', checked: false },
      { id: 5, surname: 'Временной', name: 'Аркадий', position: 'Тестировщик', checked: false },
    ]
  },
  {
    id: 28, companyName: "АО НовоТех", employeesCount: 30, companyAddress: "Челябинск, ул. Советская, д. 45", checked: false, employees: [
      { id: 1, surname: 'Стальной', name: 'Электрон', position: 'Программист', checked: false },
      { id: 2, surname: 'Молниеносный', name: 'Харун', position: 'Бухгалтер', checked: false },
      { id: 3, surname: 'Гиперион', name: 'Лукас', position: 'Менеджер', checked: false },
      { id: 4, surname: 'Искажающий', name: 'Каин', position: 'Дизайнер', checked: false },
      { id: 5, surname: 'Временной', name: 'Аркадий', position: 'Тестировщик', checked: false },
    ]
  },
  {
    id: 29, companyName: "ООО МастерСтрой", employeesCount: 9, companyAddress: "Ярославль, ул. Кирова, д. 34", checked: false, employees: [
      { id: 1, surname: 'Стальной', name: 'Электрон', position: 'Программист', checked: false },
      { id: 2, surname: 'Молниеносный', name: 'Харун', position: 'Бухгалтер', checked: false },
      { id: 3, surname: 'Гиперион', name: 'Лукас', position: 'Менеджер', checked: false },
      { id: 4, surname: 'Искажающий', name: 'Каин', position: 'Дизайнер', checked: false },
      { id: 5, surname: 'Временной', name: 'Аркадий', position: 'Тестировщик', checked: false },
    ]
  },
  {
    id: 30, companyName: "ПАО АрмСтрой", employeesCount: 22, companyAddress: "Барнаул, ул. Профсоюзная, д. 56", checked: false, employees: [
      { id: 1, surname: 'Стальной', name: 'Электрон', position: 'Программист', checked: false },
      { id: 2, surname: 'Молниеносный', name: 'Харун', position: 'Бухгалтер', checked: false },
      { id: 3, surname: 'Гиперион', name: 'Лукас', position: 'Менеджер', checked: false },
      { id: 4, surname: 'Искажающий', name: 'Каин', position: 'Дизайнер', checked: false },
      { id: 5, surname: 'Временной', name: 'Аркадий', position: 'Тестировщик', checked: false },
    ]
  },
];

export const secondUploadedData: ICompaniesData[] = [
  {
    id: 31,
    companyName: "ПАО Металлург",
    employeesCount: 13,
    companyAddress: "Уфа, ул. Октябрьская, д. 67",
    checked: false,
    employees: [
      { id: 1, surname: 'Шупашка', name: 'Мирача', position: 'Программист', checked: false },
      { id: 2, surname: 'Чиркова', name: 'Эля', position: 'Бухгалтер', checked: false },
      { id: 3, surname: 'Клычкина', name: 'Милаза', position: 'Менеджер', checked: false },
      { id: 4, surname: 'Чиркова', name: 'Залина', position: 'Дизайнер', checked: false },
      { id: 5, surname: 'Трошкина', name: 'Светана', position: 'Тестировщик', checked: false },
      { id: 6, surname: 'Козлова', name: 'Айгуль', position: 'Аналитик', checked: false },
      { id: 7, surname: 'Мурзакова', name: 'Гузель', position: 'Программист', checked: false },
      { id: 8, surname: 'Шемякина', name: 'Саргын', position: 'Менеджер', checked: false },
      { id: 9, surname: 'Тараскина', name: 'Чулпан', position: 'Бухгалтер', checked: false },
      { id: 10, surname: 'Баталова', name: 'Марьяна', position: 'Дизайнер', checked: false },
      { id: 11, surname: 'Алкишина', name: 'Эрмела', position: 'Тестировщик', checked: false },
      { id: 12, surname: 'Шакирзянова', name: 'Гульнара', position: 'Аналитик', checked: false },
      { id: 13, surname: 'Шурпанова', name: 'Лия', position: 'Программист', checked: false },
    ]
  },
  {
    id: 32,
    companyName: "ООО ЭнергоСпец",
    employeesCount: 30,
    companyAddress: "Уфа, ул. Красная, д. 67",
    checked: false,
    employees: [
      { id: 1, surname: 'Стальной', name: 'Электрон', position: 'Программист', checked: false },
      { id: 2, surname: 'Молниеносный', name: 'Харун', position: 'Бухгалтер', checked: false },
      { id: 3, surname: 'Гиперион', name: 'Лукас', position: 'Менеджер', checked: false },
      { id: 4, surname: 'Искажающий', name: 'Каин', position: 'Дизайнер', checked: false },
      { id: 5, surname: 'Временной', name: 'Аркадий', position: 'Тестировщик', checked: false },
    ]
  },
  {
    id: 33,
    companyName: "ОАО СтальПром",
    employeesCount: 13,
    companyAddress: "Воронеж, ул. Маяковского, д. 34",
    checked: false,
    employees: [
      { id: 1, surname: 'Стальной', name: 'Электрон', position: 'Программист', checked: false },
      { id: 2, surname: 'Молниеносный', name: 'Харун', position: 'Бухгалтер', checked: false },
      { id: 3, surname: 'Гиперион', name: 'Лукас', position: 'Менеджер', checked: false },
      { id: 4, surname: 'Искажающий', name: 'Каин', position: 'Дизайнер', checked: false },
      { id: 5, surname: 'Временной', name: 'Аркадий', position: 'Тестировщик', checked: false },
    ]
  },
  {
    id: 34,
    companyName: "ЗАО ТехноГрад",
    employeesCount: 6,
    companyAddress: "Тула, ул. Советская, д. 12",
    checked: false,
    employees: [
      { id: 1, surname: 'Стальной', name: 'Электрон', position: 'Программист', checked: false },
      { id: 2, surname: 'Молниеносный', name: 'Харун', position: 'Бухгалтер', checked: false },
      { id: 3, surname: 'Гиперион', name: 'Лукас', position: 'Менеджер', checked: false },
      { id: 4, surname: 'Искажающий', name: 'Каин', position: 'Дизайнер', checked: false },
      { id: 5, surname: 'Временной', name: 'Аркадий', position: 'Тестировщик', checked: false },
    ]
  },
  {
    id: 35,
    companyName: "ПАО СтройХим",
    employeesCount: 22,
    companyAddress: "Краснодар, ул. Ленина, д. 56",
    checked: false,
    employees: [
      { id: 1, surname: 'Стальной', name: 'Электрон', position: 'Программист', checked: false },
      { id: 2, surname: 'Молниеносный', name: 'Харун', position: 'Бухгалтер', checked: false },
      { id: 3, surname: 'Гиперион', name: 'Лукас', position: 'Менеджер', checked: false },
      { id: 4, surname: 'Искажающий', name: 'Каин', position: 'Дизайнер', checked: false },
      { id: 5, surname: 'Временной', name: 'Аркадий', position: 'Тестировщик', checked: false },
    ]
  },
  {
    id: 36,
    companyName: "ООО ТехЭксперт",
    employeesCount: 30,
    companyAddress: "Сочи, ул. Гагарина, д. 34",
    checked: false,
    employees: [
      { id: 1, surname: 'Стальной', name: 'Электрон', position: 'Программист', checked: false },
      { id: 2, surname: 'Молниеносный', name: 'Харун', position: 'Бухгалтер', checked: false },
      { id: 3, surname: 'Гиперион', name: 'Лукас', position: 'Менеджер', checked: false },
      { id: 4, surname: 'Искажающий', name: 'Каин', position: 'Дизайнер', checked: false },
      { id: 5, surname: 'Временной', name: 'Аркадий', position: 'Тестировщик', checked: false },
    ]
  },
  {
    id: 37,
    companyName: "АО ЛесПром",
    employeesCount: 16,
    companyAddress: "Архангельск, ул. Пушкина, д. 78",
    checked: false,
    employees: [
      { id: 1, surname: 'Стальной', name: 'Электрон', position: 'Программист', checked: false },
      { id: 2, surname: 'Молниеносный', name: 'Харун', position: 'Бухгалтер', checked: false },
      { id: 3, surname: 'Гиперион', name: 'Лукас', position: 'Менеджер', checked: false },
      { id: 4, surname: 'Искажающий', name: 'Каин', position: 'Дизайнер', checked: false },
      { id: 5, surname: 'Временной', name: 'Аркадий', position: 'Тестировщик', checked: false },
    ]
  },
  {
    id: 38,
    companyName: "ООО Экострой",
    employeesCount: 14,
    companyAddress: "Саратов, ул. Профсоюзная, д. 90",
    checked: false,
    employees: [
      { id: 1, surname: 'Стальной', name: 'Электрон', position: 'Программист', checked: false },
      { id: 2, surname: 'Молниеносный', name: 'Харун', position: 'Бухгалтер', checked: false },
      { id: 3, surname: 'Гиперион', name: 'Лукас', position: 'Менеджер', checked: false },
      { id: 4, surname: 'Искажающий', name: 'Каин', position: 'Дизайнер', checked: false },
      { id: 5, surname: 'Временной', name: 'Аркадий', position: 'Тестировщик', checked: false },
    ]
  },
  {
    id: 39,
    companyName: "ПАО Автоэкспорт",
    employeesCount: 30,
    companyAddress: "Курск, ул. Жукова, д. 18",
    checked: false,
    employees: [
      { id: 1, surname: 'Стальной', name: 'Электрон', position: 'Программист', checked: false },
      { id: 2, surname: 'Молниеносный', name: 'Харун', position: 'Бухгалтер', checked: false },
      { id: 3, surname: 'Гиперион', name: 'Лукас', position: 'Менеджер', checked: false },
      { id: 4, surname: 'Искажающий', name: 'Каин', position: 'Дизайнер', checked: false },
      { id: 5, surname: 'Временной', name: 'Аркадий', position: 'Тестировщик', checked: false },
    ]
  },
  {
    id: 40,
    companyName: "ЗАО ГеоСтрой",
    employeesCount: 23,
    companyAddress: "Иркутск, ул. Мира, д. 67",
    checked: false,
    employees: [
      { id: 1, surname: 'Стальной', name: 'Электрон', position: 'Программист', checked: false },
      { id: 2, surname: 'Молниеносный', name: 'Харун', position: 'Бухгалтер', checked: false },
      { id: 3, surname: 'Гиперион', name: 'Лукас', position: 'Менеджер', checked: false },
      { id: 4, surname: 'Искажающий', name: 'Каин', position: 'Дизайнер', checked: false },
      { id: 5, surname: 'Временной', name: 'Аркадий', position: 'Тестировщик', checked: false },
    ]
  }
];

export const thirdUploadedData: ICompaniesData[] = [
  {
    id: 41,
    companyName: "ПАО Металлург",
    employeesCount: 13,
    companyAddress: "Уфа, ул. Октябрьская, д. 67",
    checked: false,
    employees: [
      { id: 1, surname: 'Шупашка', name: 'Мирача', position: 'Программист', checked: false },
      { id: 2, surname: 'Чиркова', name: 'Эля', position: 'Бухгалтер', checked: false },
      { id: 3, surname: 'Клычкина', name: 'Милаза', position: 'Менеджер', checked: false },
      { id: 4, surname: 'Чиркова', name: 'Залина', position: 'Дизайнер', checked: false },
      { id: 5, surname: 'Трошкина', name: 'Светана', position: 'Тестировщик', checked: false },
      { id: 6, surname: 'Козлова', name: 'Айгуль', position: 'Аналитик', checked: false },
      { id: 7, surname: 'Мурзакова', name: 'Гузель', position: 'Программист', checked: false },
      { id: 8, surname: 'Шемякина', name: 'Саргын', position: 'Менеджер', checked: false },
      { id: 9, surname: 'Тараскина', name: 'Чулпан', position: 'Бухгалтер', checked: false },
      { id: 10, surname: 'Баталова', name: 'Марьяна', position: 'Дизайнер', checked: false },
      { id: 11, surname: 'Алкишина', name: 'Эрмела', position: 'Тестировщик', checked: false },
      { id: 12, surname: 'Шакирзянова', name: 'Гульнара', position: 'Аналитик', checked: false },
      { id: 13, surname: 'Шурпанова', name: 'Лия', position: 'Программист', checked: false },
    ]
  },
  {
    id: 42,
    companyName: "ООО ЭнергоСпец",
    employeesCount: 30,
    companyAddress: "Уфа, ул. Красная, д. 67",
    checked: false,
    employees: [
      { id: 1, surname: 'Стальной', name: 'Электрон', position: 'Программист', checked: false },
      { id: 2, surname: 'Молниеносный', name: 'Харун', position: 'Бухгалтер', checked: false },
      { id: 3, surname: 'Гиперион', name: 'Лукас', position: 'Менеджер', checked: false },
      { id: 4, surname: 'Искажающий', name: 'Каин', position: 'Дизайнер', checked: false },
      { id: 5, surname: 'Временной', name: 'Аркадий', position: 'Тестировщик', checked: false },
    ]
  },
  {
    id: 43,
    companyName: "ОАО СтальПром",
    employeesCount: 13,
    companyAddress: "Воронеж, ул. Маяковского, д. 34",
    checked: false,
    employees: [
      { id: 1, surname: 'Стальной', name: 'Электрон', position: 'Программист', checked: false },
      { id: 2, surname: 'Молниеносный', name: 'Харун', position: 'Бухгалтер', checked: false },
      { id: 3, surname: 'Гиперион', name: 'Лукас', position: 'Менеджер', checked: false },
      { id: 4, surname: 'Искажающий', name: 'Каин', position: 'Дизайнер', checked: false },
      { id: 5, surname: 'Временной', name: 'Аркадий', position: 'Тестировщик', checked: false },
    ]
  },
  {
    id: 44,
    companyName: "ЗАО ТехноГрад",
    employeesCount: 6,
    companyAddress: "Тула, ул. Советская, д. 12",
    checked: false,
    employees: [
      { id: 1, surname: 'Стальной', name: 'Электрон', position: 'Программист', checked: false },
      { id: 2, surname: 'Молниеносный', name: 'Харун', position: 'Бухгалтер', checked: false },
      { id: 3, surname: 'Гиперион', name: 'Лукас', position: 'Менеджер', checked: false },
      { id: 4, surname: 'Искажающий', name: 'Каин', position: 'Дизайнер', checked: false },
      { id: 5, surname: 'Временной', name: 'Аркадий', position: 'Тестировщик', checked: false },
    ]
  },
  {
    id: 45,
    companyName: "ПАО СтройХим",
    employeesCount: 22,
    companyAddress: "Краснодар, ул. Ленина, д. 56",
    checked: false,
    employees: [
      { id: 1, surname: 'Стальной', name: 'Электрон', position: 'Программист', checked: false },
      { id: 2, surname: 'Молниеносный', name: 'Харун', position: 'Бухгалтер', checked: false },
      { id: 3, surname: 'Гиперион', name: 'Лукас', position: 'Менеджер', checked: false },
      { id: 4, surname: 'Искажающий', name: 'Каин', position: 'Дизайнер', checked: false },
      { id: 5, surname: 'Временной', name: 'Аркадий', position: 'Тестировщик', checked: false },
    ]
  },
  {
    id: 46,
    companyName: "ООО ТехЭксперт",
    employeesCount: 30,
    companyAddress: "Сочи, ул. Гагарина, д. 34",
    checked: false,
    employees: [
      { id: 1, surname: 'Стальной', name: 'Электрон', position: 'Программист', checked: false },
      { id: 2, surname: 'Молниеносный', name: 'Харун', position: 'Бухгалтер', checked: false },
      { id: 3, surname: 'Гиперион', name: 'Лукас', position: 'Менеджер', checked: false },
      { id: 4, surname: 'Искажающий', name: 'Каин', position: 'Дизайнер', checked: false },
      { id: 5, surname: 'Временной', name: 'Аркадий', position: 'Тестировщик', checked: false },
    ]
  },
  {
    id: 47,
    companyName: "АО ЛесПром",
    employeesCount: 16,
    companyAddress: "Архангельск, ул. Пушкина, д. 78",
    checked: false,
    employees: [
      { id: 1, surname: 'Стальной', name: 'Электрон', position: 'Программист', checked: false },
      { id: 2, surname: 'Молниеносный', name: 'Харун', position: 'Бухгалтер', checked: false },
      { id: 3, surname: 'Гиперион', name: 'Лукас', position: 'Менеджер', checked: false },
      { id: 4, surname: 'Искажающий', name: 'Каин', position: 'Дизайнер', checked: false },
      { id: 5, surname: 'Временной', name: 'Аркадий', position: 'Тестировщик', checked: false },
    ]
  },
  {
    id: 48,
    companyName: "ООО Экострой",
    employeesCount: 14,
    companyAddress: "Саратов, ул. Профсоюзная, д. 90",
    checked: false,
    employees: [
      { id: 1, surname: 'Стальной', name: 'Электрон', position: 'Программист', checked: false },
      { id: 2, surname: 'Молниеносный', name: 'Харун', position: 'Бухгалтер', checked: false },
      { id: 3, surname: 'Гиперион', name: 'Лукас', position: 'Менеджер', checked: false },
      { id: 4, surname: 'Искажающий', name: 'Каин', position: 'Дизайнер', checked: false },
      { id: 5, surname: 'Временной', name: 'Аркадий', position: 'Тестировщик', checked: false },
    ]
  },
  {
    id: 49,
    companyName: "ПАО Автоэкспорт",
    employeesCount: 30,
    companyAddress: "Курск, ул. Жукова, д. 18",
    checked: false,
    employees: [
      { id: 1, surname: 'Стальной', name: 'Электрон', position: 'Программист', checked: false },
      { id: 2, surname: 'Молниеносный', name: 'Харун', position: 'Бухгалтер', checked: false },
      { id: 3, surname: 'Гиперион', name: 'Лукас', position: 'Менеджер', checked: false },
      { id: 4, surname: 'Искажающий', name: 'Каин', position: 'Дизайнер', checked: false },
      { id: 5, surname: 'Временной', name: 'Аркадий', position: 'Тестировщик', checked: false },
    ]
  },
  {
    id: 50,
    companyName: "ЗАО ГеоСтрой",
    employeesCount: 23,
    companyAddress: "Иркутск, ул. Мира, д. 67",
    checked: false,
    employees: [
      { id: 1, surname: 'Стальной', name: 'Электрон', position: 'Программист', checked: false },
      { id: 2, surname: 'Молниеносный', name: 'Харун', position: 'Бухгалтер', checked: false },
      { id: 3, surname: 'Гиперион', name: 'Лукас', position: 'Менеджер', checked: false },
      { id: 4, surname: 'Искажающий', name: 'Каин', position: 'Дизайнер', checked: false },
      { id: 5, surname: 'Временной', name: 'Аркадий', position: 'Тестировщик', checked: false },
    ]
  }
];
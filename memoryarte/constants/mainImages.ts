const BASE_PATH = '/images/main/';

export const MAIN_IMAGES = {
    CONFIRM: `${BASE_PATH}confirm.webp`,
    DELIVERY: `${BASE_PATH}delivery.webp`,
    DESIGN: `${BASE_PATH}design.webp`,
    PHOTO: `${BASE_PATH}photo.webp`,
    PRODUCTION: `${BASE_PATH}production.webp`,
    SPEED: `${BASE_PATH}speed.webp`,
    WATER_AND_SUN: `${BASE_PATH}water_and_sun.webp`,
};

export interface FeatureItem {
    image: string;
    title: string;
    description: string;
}

export const WHY_CHOOSE_US: FeatureItem[] = [
    {
        image: MAIN_IMAGES.WATER_AND_SUN,
        title: "Высокое качество",
        description: "Используем долговечный порселанато, устойчивый к климату Эквадора.",
    },
    {
        image: MAIN_IMAGES.DESIGN,
        title: "Индивидуальный дизайн",
        description: "Полная персонализация: от фотографии до текстов и символов.",
    },
    {
        image: MAIN_IMAGES.SPEED,
        title: "Скорость изготовления",
        description: "Полный цикл – от дизайна до готовой плиты – занимает всего неделю.",
    },
];

export const HOW_WE_WORK: FeatureItem[] = [
    {
        image: MAIN_IMAGES.PHOTO,
        title: "1. Выбор фото",
        description: "Отправьте нам фотографию и пожелания по дизайну.",
    },
    {
        image: MAIN_IMAGES.CONFIRM,
        title: "2. Утверждение дизайна",
        description: "Мы разработаем макет и согласуем его с Вами.",
    },
    {
        image: MAIN_IMAGES.PRODUCTION,
        title: "3. Изготовление",
        description: "Начинаем производство после утверждения и предоплаты.",
    },
    {
        image: MAIN_IMAGES.DELIVERY,
        title: "4. Доставка",
        description: "Отправляем готовую плиту по всей территории Эквадора.",
    },
];


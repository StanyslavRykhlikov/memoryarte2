import {MAIN_IMAGES_PATH} from './paths';

export const MAIN_IMAGES = {
    CONFIRM: `${MAIN_IMAGES_PATH}confirm.webp`,
    DELIVERY: `${MAIN_IMAGES_PATH}delivery.webp`,
    DESIGN: `${MAIN_IMAGES_PATH}design.webp`,
    PHOTO: `${MAIN_IMAGES_PATH}photo.webp`,
    PRODUCTION: `${MAIN_IMAGES_PATH}production.webp`,
    SPEED: `${MAIN_IMAGES_PATH}speed.webp`,
    WATER_AND_SUN: `${MAIN_IMAGES_PATH}water_and_sun.webp`,
};

export interface FeatureItem {
    image: string;
    title: string;
    description: string;
}

export const WHY_CHOOSE_US: FeatureItem[] = [
    {
        image: MAIN_IMAGES.WATER_AND_SUN,
        title: "Alta calidad",
        description: "Trabajamos con porcelanato resistente al clima de Ecuador.",
    },
    {
        image: MAIN_IMAGES.DESIGN,
        title: "Diseño personalizado",
        description: "Personalización total: desde fotografías hasta textos y símbolos.",
    },
    {
        image: MAIN_IMAGES.SPEED,
        title: "Rapidez en la fabricación",
        description: "El proceso completo, desde el diseño hasta la entrega, toma solo una semana.",
    },
];

export const HOW_WE_WORK: FeatureItem[] = [
    {
        image: MAIN_IMAGES.PHOTO,
        title: "1. Selección de la foto",
        description: "Envíenos una fotografía junto con sus ideas para el diseño.",
    },
    {
        image: MAIN_IMAGES.CONFIRM,
        title: "2. Aprobación del diseño",
        description: "Le presentamos un diseño preliminar para su aprobación.",
    },
    {
        image: MAIN_IMAGES.PRODUCTION,
        title: "3. Fabricación",
        description: "Iniciamos la producción una vez aprobado el diseño y realizada la precompra.",
    },
    {
        image: MAIN_IMAGES.DELIVERY,
        title: "4. Entrega",
        description: "Enviamos la lápida terminada a cualquier parte del Ecuador.",
    },
];


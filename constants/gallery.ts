import {GALLERY_PATH} from '@/constants/paths';

// Константы
const SIZES = ['256', '512', '1024'] as const;
type Size = typeof SIZES[number];

// Оптимизированный тип для элемента галереи
interface GalleryItem {
    i: number; // id
    m: string[]; // images
    t: string; // alt-tag
}

// Константа с данными галереи
export const GALLERY: GalleryItem[] = [
    {i: 2, m: ['0002_01', '0002_02', '0002_03'], t: 'Lápida de porcelanato negro con grabado láser'},
    {i: 3, m: ['0003_01', '0003_02', '0003_03', '0003_04'], t: 'Placa conmemorativa personalizada con foto y texto'},
    {i: 4, m: ['0004_01', '0004_02', '0004_03', '0004_04'], t: 'Grabado detallado en lápida de porcelanato'},
    {
        i: 5,
        m: ['0005_01', '0005_02', '0004_05', '0005_04', '0005_05', '0005_06', '0005_07', '0005_08',
            '0005_09', '0005_10', '0005_11'],
        t: 'Lápida para cementerio en blanco y negro'
    },
    {i: 6, m: ['0006_01', '0006_02'], t: 'Placa de porcelanato con diseño personalizado'},
    {i: 7, m: ['0007_01', '0007_02', '0007_03'], t: 'Lápida con retrato en blanco sobre negro'},
    {i: 8, m: ['0008_01', '0008_02', '0008_03', '0008_04'], t: 'Lápida de porcelanato negro con grabado láser'},
    {i: 10, m: ['0010_01', '0010_02', '0010_03'], t: 'Grabado láser de alta precisión en porcelanato'},
    {i: 11, m: ['0011_01', '0011_02', '0011_03'], t: 'Lápida con imagen de santo'},
    {i: 13, m: ['0013_01', '0013_02', '0013_03', '0013_04'], t: 'Placa conmemorativa con fechas de nacimiento y fallecimiento'},
    {i: 14, m: ['0014_01', '0014_02', '0014_03', '0014_04'], t: 'Lápida de porcelanato negro resistente al clima'},
    {i: 15, m: ['0015_01', '0015_02', '0015_03', '0015_04'], t: 'Ejemplo de grabado en porcelanato con texto'},
    {i: 17, m: ['0017_01', '0017_02', '0017_03', '0017_04'], t: 'Placa conmemorativa 60x60 cm con diseño detallado'},
    {i: 21, m: ['0021_01', '0021_02', '0021_03', '0021_04'], t: 'Lápida personalizada con texto y foto del difunto'},
    {i: 22, m: ['0022_01', '0022_02', '0022_03', '0022_04'], t: 'Proceso de diseño de lápidas en porcelanato'},
    {i: 24, m: ['0024_01', '0024_02', '0024_03', '0024_04'], t: 'Detalles de grabado en placas de porcelanato'},
    {i: 25, m: ['0025_01', '0025_02', '0025_03', '0025_04'], t: 'Lápida con grabado láser para cementerios'},
    {i: 26, m: ['0026_01', '0026_02', '0026_03', '0026_04'], t: 'Lápida con diseño elegante y personalizado'},
    {i: 27, m: ['0027_01', '0027_02', '0027_03', '0027_04'], t: 'Placa funeraria con retrato y fechas'},
    {i: 28, m: ['0028_01', '0028_02', '0028_03', '0028_04'], t: 'Lápida de porcelanato blanco con grabado negro'},
    {i: 29, m: ['0029_01', '0029_02', '0029_03'], t: 'Grabado en porcelanato para lápidas de alta calidad'},
    {i: 30, m: ['0030_01', '0030_02', '0030_03', '0030_04'], t: 'Placa conmemorativa personalizada con foto'},
    {i: 31, m: ['0031_01', '0031_02', '0031_03', '0031_04'], t: 'Grabado detallado en lápida de porcelanato'},
    {i: 32, m: ['0032_01', '0032_02', '0032_03', '0032_04'], t: 'Lápida con diseño blanco y negro'},
    {i: 36, m: ['0036_01', '0036_02', '0036_03', '0036_04'], t: 'Placa funeraria con imagen y texto'},
    {i: 37, m: ['0037_01', '0037_02', '0037_03', '0037_04'], t: 'Lápida de porcelanato resistente al clima'},
    {i: 38, m: ['0038_01', '0038_02', '0038_03', '0038_04'], t: 'Lápida con retrato grabado en láser'},
    {i: 40, m: ['0040_01', '0040_02', '0040_03', '0040_04'], t: 'Diseño personalizado para lápida conmemorativa'},
    {i: 41, m: ['0041_01', '0041_02', '0041_03', '0041_04'], t: 'Lápida con fechas de nacimiento y fallecimiento'},
    {i: 42, m: ['0042_01', '0042_02', '0042_03', '0042_04'], t: 'Grabado láser de alta calidad en porcelanato'},
    {i: 43, m: ['0043_01', '0043_02', '0043_03', '0043_04'], t: 'Lápida para cementerio en Ecuador'},
    {i: 44, m: ['0044_01', '0044_02', '0044_03', '0044_04'], t: 'Placa de porcelanato negro con retrato'},
    {i: 45, m: ['0045_01', '0045_02', '0045_03', '0045_04'], t: 'Ejemplo de lápida con diseño detallado'},
    {i: 46, m: ['0046_01', '0046_02', '0046_03', '0046_04', '0046_05', '0046_06'], t: 'Lápida grabada con texto religioso'},
    {i: 48, m: ['0048_01', '0048_02', '0048_03', '0048_04'], t: 'Proceso de grabado láser en porcelanato'},
    {i: 49, m: ['0049_01', '0049_02', '0049_03', '0049_04'], t: 'Lápida con imagen de santo personalizado'},
    {i: 50, m: ['0050_01', '0050_02', '0050_03', '0050_04'], t: 'Placa de porcelanato blanco con texto negro'},
    {i: 51, m: ['0051_01', '0051_02', '0051_03', '0051_04'], t: 'Lápida de 60x60 cm con grabado personalizado'},
    {i: 52, m: ['0052_01', '0052_02', '0052_03', '0052_04'], t: 'Detalle de grabado láser en placa conmemorativa'},
    {i: 53, m: ['0053_01', '0053_02', '0053_03', '0053_04'], t: 'Placa funeraria personalizada con diseño único'},
    {i: 54, m: ['0054_01', '0054_02', '0054_03', '0054_04'], t: 'Placa conmemorativa de porcelanato para cementerio'},
    {i: 59, m: ['0059_01', '0059_02', '0059_03', '0059_04'], t: 'Lápida con diseño moderno y personalizado'},
    {i: 60, m: ['0060_01', '0060_02', '0060_03', '0060_04'], t: 'Proceso de fabricación de lápida en porcelanato'},
    {i: 61, m: ['0061_01', '0061_02', '0061_03', '0061_04'], t: 'Placa conmemorativa con bordes personalizados'},
    {i: 64, m: ['0064_01', '0064_02', '0064_03', '0064_04'], t: 'Grabado láser en lápida de porcelanato negro'},
    {i: 66, m: ['0066_01', '0066_02', '0066_03', '0066_04'], t: 'Placa funeraria con detalles finos grabados'},
    {i: 68, m: ['0068_01', '0068_02', '0068_03', '0068_04'], t: 'Lápida personalizada con fondo paisajístico'},
    {i: 71, m: ['0071_01', '0071_02', '0071_03', '0071_04'], t: 'Ejemplo de placa conmemorativa de alta calidad'},
];

// Функция для генерации полного пути к изображению
const getImagePath = (name: string, size: Size): string =>
    `${GALLERY_PATH}${name}_${size}.webp`;

// Получить количество страниц
export const getTotalPages = (itemsPerPage: number): number =>
    Math.ceil(GALLERY.length / itemsPerPage);

// Получить N готовых первых ссылок определенного размера со страницей такой-то
export const getPageImages = (page: number, itemsPerPage: number, size: Size): string[] => {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return GALLERY.slice(start, end).map(item =>
        getImagePath(item.m[0], size)
    );
};

// Получить элемент галереи по ID
export const getGalleryItemById = (id: number): GalleryItem | undefined =>
    GALLERY.find(item => item.i === id);

// Получить список готовых ссылок изображений определенного размера по id
export const getImagesById = (id: number, size: Size): string[] | undefined => {
    const item = getGalleryItemById(id);
    return item?.m.map(name => getImagePath(name, size));
};


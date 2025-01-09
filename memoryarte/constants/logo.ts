// Определение допустимых размеров логотипа
const LOGO_SIZES = [32, 64, 128, 256, 512] as const;
type LogoSize = typeof LOGO_SIZES[number];

// Базовый путь к логотипам
const BASE_LOGO_PATH = '/images/logo/';

// Функция для получения URL логотипа нужного размера
export function getLogoUrl(size: LogoSize): string {
    // Проверяем, является ли размер допустимым
    if (!LOGO_SIZES.includes(size)) {
        console.warn(`Requested logo size ${size} is not available. Falling back to 512.`);
        size = 512;
    }

    return `${BASE_LOGO_PATH}logo_${size}.webp`;
}

// Экспорт констант для удобства использования
export const LOGO_SIZES_ARRAY = LOGO_SIZES;
export type {LogoSize};


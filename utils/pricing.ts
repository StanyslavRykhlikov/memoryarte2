export function calculateEngravingPrice(width: number, height: number): number {
    const coefficients = [-2.32213774e-16, 3.36758149e-12, -1.63092405e-08, 2.73223112e-05, 4.21952492e-02, 29.7102897];
    let area = Math.min(width * height, 6400);
    let price = 0;
    coefficients.forEach((coeff, i) => {
        price += coeff * Math.pow(area, 5 - i);
    });
    return Math.max(Math.round(price / 5) * 5, 50);
}

export function isValidDimensions(width: number, height: number): boolean {
    return (width <= 60 && height <= 120) || (width <= 120 && height <= 60);
}


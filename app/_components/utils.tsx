export const getBlurImageURL = (url: string) => {
    url = url.replace(".webp", "-blur.webp");
    return url;
}

export const getWidthImageURL = (url: string, width: number) => {
    url = url.replace(".webp", `-w${width}.webp`);
    return url;
}


export const getColorLuminance = ({r, g, b}: { r: number, g: number, b: number }): number => {
    // normalize data, transform into linear RGB space and calculate luminance based on weighted sum
    const srgb = [r, g, b].map(v => v / 255).map(v => v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4));
    return 0.2126 * srgb[0] + 0.7152 * srgb[1] + 0.0722 * srgb[2];
}


export const breakpoints = {
    desktopLarge: 1440,
    desktop: 1024,
    tablet: 768,
    mobile: 480
}
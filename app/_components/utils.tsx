export const getBlurImageURL = (url: string) => {
    url = url.replace(".webp", "-blur.webp");
    return url;
}

export const getWidthImageURL = (url: string, width: number) => {
    url = url.replace(".webp", `-w${width}.webp`);
    return url;
}


export const breakpoints = {
    desktopLarge: 1440,
    desktop: 1024,
    tablet: 768,
    mobile: 480
}
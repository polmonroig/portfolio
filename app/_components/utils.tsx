export const getBlurURL = (url: string) => {
    url = url.replace(".png", "-blur.png");
    url = url.replace(".jpg", "-blur.jpg");
    return url;
}


export const breakpoints = {
    desktopLarge: 1440,
    desktop: 1024,
    tablet: 768,
    mobile: 480
}
export const getBlurURL = (url: string) => {
    url = url.replace(".png", "-blur.png");
    url = url.replace(".jpg", "-blur.jpg");
    return url;
}
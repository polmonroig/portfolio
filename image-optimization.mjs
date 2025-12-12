import {glob} from 'glob';
import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

const imagesInputPath = 'resources/images';
const imagesOutputPath = 'public/images';



const imagesRaw = await glob.glob(`${imagesInputPath}/**/*.*`);

for(const imagePath of imagesRaw) {
    console.log("Optimizing image ", imagePath)
    // replace upper level path and extension
    let outputPath = imagePath.replace("resources", "public");
    outputPath = outputPath.replace(/\.[^/.]+$/, ".webp");
    // create directories if not exist first
    const outputDir = path.dirname(outputPath);
    fs.mkdirSync(outputDir, {recursive: true});

    // create multiple optimized image versions

    // exact copy, compresses and transformed to webp
    await sharp(imagePath)
        .webp()
        .toFile(outputPath);

    // create multiple optimized image versions (responsive widths)
    const responsiveWidths = [320, 480, 640, 768, 1024, 1280, 1600, 1920];

    for (const w of responsiveWidths) {
        const sizedOut = outputPath.replace(".webp", `-w${w}.webp`);
        await sharp(imagePath)
            .resize({ width: w, withoutEnlargement: true })
            .webp()
            .toFile(sizedOut);
    }

    // blurred placeholder (tiny)
    // await sharp(imagePath)
    //     .resize({ width: 16})
    //     .webp()
    //     .toFile(outputPath.replace(".webp", "-blur.webp"));
}

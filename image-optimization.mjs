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

    // // blurred version of original
    // await sharp(imagePath)
    //     .webp()
    //     .blur(10)
    //     .resize(10)
    //     .toFile(outputPath.replace(".webp", "-blur.webp"));
}

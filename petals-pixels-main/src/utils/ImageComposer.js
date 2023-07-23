// Import necessary libraries at the top
import { createCanvas, loadImage } from 'canvas';

// Define colour palette for different sections of the day
const gradientPalettes = {
    "sunset": ["#0a0e1b", "#ac3b6a", "#ee9c53", "#ffffff"],
    "dusk": ["#04003d", "#341e5f", "#5bc6c5", "#d5f2a8"],
    "dawn": ["#000000", "#471d3a", "#58747e", "#feacad", "#a3f4fd"],
    "noon": ["#180da6", "#8749b6", "#db77c1", "#b4adde", "#85edff"]
};

const composeImage = async (time, mood) => {
    // Determine which palette to use based on the time
    let palette;
    if (time >= '000000' && time < '060000') palette = gradientPalettes['dusk'];
    else if (time >= '060000' && time < '120000') palette = gradientPalettes['dawn'];
    else if (time >= '120000' && time < '180000') palette = gradientPalettes['noon'];
    else if (time >= '180000' && time <= '235959') palette = gradientPalettes['sunset'];

    // Map the mood to the corresponding image
    const moodImageMapping = { /* ... your dictionary mapping moods to images ... */ };
    const imagePath = moodImageMapping[mood];

    // Load the image
    const image = await loadImage(imagePath);

    // Create a canvas with the same dimensions as the image
    const canvas = createCanvas(image.width, image.height);
    const ctx = canvas.getContext('2d');

    // Draw the image onto the canvas
    ctx.drawImage(image, 0, 0, image.width, image.height);

    // Get the image data from the canvas
    let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let data = imageData.data;

    // Loop over each pixel in the image
    for (let i = 0; i < data.length; i += 4) {
        // Apply the color palette filter to each pixel here
        // You'll need to write a separate function for this (e.g., applyPalette(data[i], data[i + 1], data[i + 2], palette))
    }

    // Put the modified image data back into the canvas
    ctx.putImageData(imageData, 0, 0);

    // Save the modified image to the output directory
    const fs = require('fs');
    const out = fs.createWriteStream(__dirname + '/output.png');
    const stream = canvas.createPNGStream();
    stream.pipe(out);
};

// Call the function with the time and mood as arguments
composeImage('1230', 'Adventurous');

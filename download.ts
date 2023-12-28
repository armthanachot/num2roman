import axios from 'axios';
import * as fs from 'fs';

const downloadImage = async (url: string, destination: string) => {
  try {
    const response = await axios({
      method: 'GET',
      url: url,
      responseType: 'stream',
    });

    const writeStream = fs.createWriteStream(destination);

    response.data.pipe(writeStream);

    await new Promise((resolve, reject) => {
      writeStream.on('finish', resolve);
      writeStream.on('error', reject);
    });

    console.log('Image downloaded successfully');
  } catch (error: any) {
    console.error('Error downloading image:', error.message);
  }
};

// Example usage
const imageUrl = '<url>';
const destinationPath = '<path>.<fileEx>';

downloadImage(imageUrl, destinationPath);

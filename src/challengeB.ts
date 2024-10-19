import * as fs from 'fs';
import * as path from 'path';

const FILE_PATH = path.join(__dirname, '..', 'random_objects.txt');

const identifyType = (str: string): string => {
  if (/^[A-Za-z]+$/.test(str)) {
    return 'Alphabetical String';
  } else if (/^\d+\.\d+$/.test(str)) {
    return 'Real Number';
  } else if (/^\d+$/.test(str)) {
    return 'Integer';
  } else if (/^[A-Za-z0-9]+$/.test(str)) {
    return 'Alphanumeric';
  }
  return 'Unknown';
};

const processFile = () => {
  const fileContent = fs.readFileSync(FILE_PATH, 'utf-8');
  const objects = fileContent.split(',').filter(obj => obj.trim().length > 0);

  objects.forEach(obj => {
    const trimmedObj = obj.trim();
    const type = identifyType(trimmedObj);
    console.log(`Object: ${trimmedObj}, Type: ${type}`);
  });
};

processFile();
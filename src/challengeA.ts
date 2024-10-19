import * as fs from 'fs';
import * as path from 'path';

const FILE_SIZE = 10 * 1024 * 1024; // 10MB
const FILE_PATH = path.join(__dirname, '..', 'random_objects.txt');

const generateRandomAlphabeticalString = (length: number): string => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
};

const generateRandomRealNumber = (): number => {
  return Math.random() * 1000;
};

const generateRandomInteger = (): number => {
  return Math.floor(Math.random() * 1000);
};

const generateRandomAlphanumeric = (): string => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const length = Math.floor(Math.random() * 20) + 1;
  const spacesBefore = ' '.repeat(Math.floor(Math.random() * 11));
  const spacesAfter = ' '.repeat(Math.floor(Math.random() * 11));
  const alphanumeric = Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
  return `${spacesBefore}${alphanumeric}${spacesAfter}`;
};

const generateRandomObject = (): string => {
  const randomType = Math.floor(Math.random() * 4);
  switch (randomType) {
    case 0:
      return generateRandomAlphabeticalString(Math.floor(Math.random() * 20) + 1);
    case 1:
      return generateRandomRealNumber().toString();
    case 2:
      return generateRandomInteger().toString();
    case 3:
      return generateRandomAlphanumeric();
    default:
      return '';
  }
};

const generateFile = () => {
  let fileSize = 0;
  const fileStream = fs.createWriteStream(FILE_PATH);

  while (fileSize < FILE_SIZE) {
    const randomObject = generateRandomObject();
    const data = `${randomObject},`;
    fileStream.write(data);
    fileSize += Buffer.byteLength(data);
  }

  fileStream.end(() => {
    console.log(`File generated at ${FILE_PATH} with size ${fileSize} bytes`);
  });
};

generateFile();
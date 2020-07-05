import fs from "fs";
import csvSync from 'csv-parse/lib/sync';
import encoding from 'encoding-japanese';
import ERROR_MESSAGE from '../message/error.json';

const puttedPath = "./data";
const importExtension = "csv";

function isCSV(dirent) {
  if (!dirent.isFile()) return false;
  if (dirent.name.split(".").pop() !== importExtension) return false;
  return true;
}

async function getCsvFiles() {
  const allDirents = fs.readdirSync(puttedPath, { withFileTypes: true });
  const fileNames = allDirents
    .filter((dirent) => isCSV(dirent))
    .map(({ name }) => name);
  return fileNames;
}

async function getFileContents(fileNames) {
  const contents = await Promise.all(
    fileNames.map(async (name) => {
      const filePath = `${puttedPath}/${name}`;
      const data = fs.readFileSync(filePath);
      if (encoding.detect(data) === 'SJIS') {
        throw new Error(ERROR_MESSAGE.SHIFT, name);
      }
      const res = csvSync(data);
      return res;
    })
  );
  return contents;
}

export default async () => {
  const fileNames = await getCsvFiles();
  const contents = await getFileContents(fileNames);
  return contents;
};

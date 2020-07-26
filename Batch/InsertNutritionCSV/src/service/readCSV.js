import fs from "fs";
import csvSync from "csv-parse/lib/sync";
import encoding from "encoding-japanese";
import ERROR_MESSAGE from "../message/error.json";

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
  // 階層には1つのcsvのみの想定なので、最初のものを取る
  return fileNames[0];
}

async function getFileContents(fileNames) {
  const filePath = `${puttedPath}/${fileNames}`;
  const data = fs.readFileSync(filePath);
  if (encoding.detect(data) === "SJIS") {
    throw new Error(ERROR_MESSAGE.SHIFT, fileNames);
  }
  const res = csvSync(data);
  return res;
}

export default async () => {
  const fileName = await getCsvFiles();
  const content = await getFileContents(fileName);
  return content;
};

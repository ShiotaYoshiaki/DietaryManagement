import TITLE from "../constants/title.json";
import NUTRITION from "../constants/nutrition.json";

const startBodyColumn = 7;
const titleColumn = 3;
const titleFinRow = 6;
const nutritionStartRow = 7;
const nutritionTitleColumn = 4;
const isNeedNum = 5;
const onlyNumRow = 7;
const remarksNum = 69;

function getFormat(csvData) {
  const format = {};
  const titleColumnData = csvData[titleColumn];
  titleColumnData.forEach((title, k) => {
    if (k <= titleFinRow) {
      const target = TITLE.find((list) => list.title === title);
      format[target.key] = "";
    }
  });
  const nutritionColumnData = csvData[nutritionTitleColumn];
  nutritionColumnData.forEach((title, k) => {
    if (k >= nutritionStartRow) {
      const target = NUTRITION.find((list) => list.title === title);
      format[target.key] = "";
    }
  });
  return format;
}

function toFormatJson(format, filteredPureCsv) {
  const keys = Object.keys(format);
  const formatJson = filteredPureCsv.map((data) => {
    const currentFormat = format;
    data.forEach((param, i) => {
      if (i < onlyNumRow || i === remarksNum) {
        currentFormat[keys[i]] = param;
      } else if (i >= onlyNumRow) {
        const convertNum = isNaN(param) ? 0 : Number(param);
        currentFormat[keys[i]] = convertNum;
      }
    });
    return currentFormat;
  });
  return formatJson;
}

export default async (csvData) => {
  const format = getFormat(csvData);
  const pureCsvData = csvData.slice(startBodyColumn);
  const filteredPureCsv = pureCsvData.filter((data) => data[isNeedNum] == "1");
  const formatJson = toFormatJson(format, filteredPureCsv);
  return formatJson;
};

import ReadCSV from "./service/readCSV";
import ParseJson from "./service/parseJson";
import Put from "./service/put";

export default async () => {
  console.log("index");
  try {
    const csvData = await ReadCSV();
    const parsed = await ParseJson(csvData);
    await Put();
  } catch (e) {
    console.error(e);
  }
};

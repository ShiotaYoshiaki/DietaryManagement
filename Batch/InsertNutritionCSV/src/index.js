import ReadCSV from "./service/readCSV";
import Put from "./service/put";

export default async () => {
  console.log("index");
  try {
    await ReadCSV();
    await Put();
  } catch (e) {
    console.error(e);
  }
};

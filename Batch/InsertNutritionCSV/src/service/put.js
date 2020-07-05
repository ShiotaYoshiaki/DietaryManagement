import DynamoDB from "../dao/dynamodb";
import ERROR_MESSAGE from "../message/error.json";

async function getTestData() {
  const repository = new DynamoDB();
  const testData = await repository.findById("test");
  if (!testData || !Object.keys(testData).length) {
    throw new Error(ERROR_MESSAGE.FAILED_TO_GET_BY_DYNAMODB);
  }
  return testData;
}

async function save(data) {
  const repository = new DynamoDB();
  await repository.save(data);
}

async function allSave(csvData) {
  await Promise.all(
    csvData.map(async (data) => {
      await save(data);
      console.log(`save ${data.id}`);
    })
  );
}

export default async (csvData) => {
  console.log(`it will save json number of ${csvData.length}`);
  await getTestData();
  await allSave(csvData);
  console.log("All Success");
};

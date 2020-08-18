import FoodRepository from '../dao/food';

function isEmptyObject(data) {
  if (!data) return true;
  if (!Object.keys(data).length) return true;
  return false;
}

async function getFood(id) {
  try {
  const repository = new FoodRepository();
  const result = await repository.findById(id);
  if (isEmptyObject(result)) {
    throw new Error(`Failed to get Food. id: ${id}`);
  }
  return result;
  } catch(e) {
    console.log("Error at getTargetUser");
    throw e;
  }
}

async function toFood(param) {
  const {
    id,
  } = param;
  const targetFood = await getFood(id);
  const targetInfo = {
    id: targetFood.id,
    name: targetFood.display_name,
  };
  return targetInfo;
}


export default async (param) => {
  try {
    console.log(`Start getOneFood.js. param: ${JSON.stringify(param)}`);
    const result = "success";
    const message = "";
    const food = await toFood(param);
    return {
      result,
      message,
      food,
    };
  } catch (e) {
    return {
      result: "failed",
      message: e.message,
      food: {},
    };
  }
};

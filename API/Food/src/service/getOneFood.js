export default async (param) => {
  try {
    console.log(`Start getOneFood.js. param: ${JSON.stringify(param)}`);
    const result = "success";
    const message = "";
    // const conformResult = await login(param);
    return {
      result,
      message,
      // food: conformResult,
    };
  } catch (e) {
    return {
      result: "failed",
      message: e.message,
    };
  }
};

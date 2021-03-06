import UserInfo from "../dao/userInfo";

function isEmptyObject(data) {
  if (!data) return true;
  if (!Object.keys(data).length) return true;
  return false;
}

async function getTargetUser(name) {
  try {
    const repository = new UserInfo();
    const result = await repository.findByName(name);
    if (isEmptyObject(result)) {
      console.warn(`Failed to get user name. name: ${name}`);
      throw new Error(`No exist user. name: ${name}`);
    }
    return result;
  } catch (e) {
    console.error("Error at getTargetUser");
    throw e;
  }
}

function toIsMatchPass(userInfo, pass) {
  const { pass: targetPass } = userInfo;
  const isMatch = targetPass === pass;
  if (!isMatch) {
    console.log(`Unexpected pass. pass: ${pass}`);
  }
  return isMatch;
}

async function login(param) {
  const { name, pass } = param;
  const userInfo = await getTargetUser(name);
  const isMatch = toIsMatchPass(userInfo, pass);
  return isMatch;
}

export default async (param) => {
  try {
    console.log(`Start login.js. param: ${JSON.stringify(param)}`);
    const result = "success";
    const message = "";
    const conformResult = await login(param);
    return {
      result,
      message,
      conform: conformResult,
    };
  } catch (e) {
    return {
      result: "failed",
      message: e.message,
      conform: false,
    };
  }
};

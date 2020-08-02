import sinon from "sinon";
import { expect } from "chai";
import login from "../../src/service/login";
import UserInfo from "../../src/dao/userInfo";

describe("Service: analyze.js 画像タグ付けAPIのテスト", () => {
  const PARAM = {
    SUCCESS: {
      param: {
        name: "shiota_yoshiaki",
        pass: "test",
      },
    },
  };

  const RESPONSE = {
    FAILED: {
      result: "failed",
      message: "",
      conform: false,
    },
  };

  function createNewJSON(data) {
    return JSON.parse(JSON.stringify(data));
  }

  it("NG: DBにアクセスできない", (done) => {
    const response = createNewJSON(RESPONSE.FAILED);
    response.message = "Error";
    sinon.stub(UserInfo.prototype, "findByName").rejects();
    login(PARAM.SUCCESS).then((actual) => {
      console.log(actual);
      expect(actual).to.be.deep.equals(response);
      done();
    });
  });
});

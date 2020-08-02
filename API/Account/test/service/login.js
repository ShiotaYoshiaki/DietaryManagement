import sinon from "sinon";
import { expect } from "chai";
import login from "../../src/service/login";
import UserInfo from "../../src/dao/userInfo";

describe("ログイン検証クラスのテスト", () => {
  afterEach(() => {
    sinon.restore();
  });

  const PARAM = {
    SUCCESS: {
      name: "shiota_yoshiaki",
      pass: "test",
    },
    FAILED: {
      name: "shiota_yoshiaki",
      pass: "dummy",
    },
  };

  const RESPONSE = {
    FAILED: {
      result: "failed",
      message: "",
      conform: false,
    },
    SUCCESS: {
      result: "success",
      message: "",
      conform: true,
    }
  };

  const DB_RESPONSE = {
    pass: 'test',
    created_at: '20200801T091122333Z',
    height: '',
    sex: 'man',
    email: 'shiota.yosiaki.0904@gmail.com',
    name: 'shiota_yoshiaki',
    weight: '',
    birthday: ''
  };

  function createNewJSON(data) {
    return JSON.parse(JSON.stringify(data));
  }

  it("NG: DBにアクセスできない", (done) => {
    const response = createNewJSON(RESPONSE.FAILED);
    response.message = "Error";
    sinon.stub(UserInfo.prototype, "findByName").rejects();
    login(PARAM.SUCCESS).then((actual) => {
      expect(actual).to.be.deep.equals(response);
      done();
    });
  });

  it("NG: 期待していないレスポンスをDBより取得", (done) => {
    const response = createNewJSON(RESPONSE.FAILED);
    response.message = `No exist user. name: ${PARAM.SUCCESS.name}`;
    sinon.stub(UserInfo.prototype, "findByName").resolves();
    login(PARAM.SUCCESS).then((actual) => {
      expect(actual).to.be.deep.equals(response);
      done();
    });
  });

  it("NG: DBにない名前を入力されたパターン", (done) => {
    const response = createNewJSON(RESPONSE.FAILED);
    response.message = `No exist user. name: ${PARAM.SUCCESS.name}`;
    sinon.stub(UserInfo.prototype, "findByName").resolves({});
    login(PARAM.SUCCESS).then((actual) => {
      expect(actual).to.be.deep.equals(response);
      done();
    });
  });

  it("NG: パスワードが違う", (done) => {
    const response = createNewJSON(RESPONSE.SUCCESS);
    response.conform = false;
    sinon.stub(UserInfo.prototype, "findByName").resolves(DB_RESPONSE);
    login(PARAM.FAILED).then((actual) => {
      expect(actual).to.be.deep.equals(response);
      done();
    });
  });

  it("OK: 正常終了", (done) => {
    const response = RESPONSE.SUCCESS;
    sinon.stub(UserInfo.prototype, "findByName").resolves(DB_RESPONSE);
    login(PARAM.SUCCESS).then((actual) => {
      expect(actual).to.be.deep.equals(response);
      done();
    });
  });
});

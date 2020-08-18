import AWS from "aws-sdk";
import config from "../../config.json";

export default class AbstractRepository {
  constructor() {
    this.docClient = new AWS.DynamoDB.DocumentClient({
      region: config.REGION,
      endpoint: config.DB_ENDPOINT,
      accessKeyId: config.ACCESS_KEY_ID,
      secretAccessKey: config.SECRET_ACCESS_KEY,
      maxRetries: config.MAX_RETRIES,
      convertEmptyValues: true,
    });
  }

  get(params) {
    return new Promise((resolve, reject) => {
      this.docClient.get(params, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data.Item ? data.Item : {});
        }
      });
    });
  }

  save(params) {
    return new Promise((resolve, reject) => {
      this.docClient.put(params, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data.Item ? data.Item : {});
        }
      });
    });
  }
}

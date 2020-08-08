import ENTITY from '../constants/entityName.json';
import Abstract from './abstractRepository';

const TABLE_NAME = ENTITY.USER_INFO;

export default class DynamoDB extends Abstract {
  findByName(name) {
    const params = {
      TableName: TABLE_NAME,
      Key: {
        name,
      },
    };
    return this.get(params);
  };

  save(data) {
    const params = {
      TableName: TABLE_NAME,
      Item: data,
    };
    return super.save(params);
  }
}


import ENTITY from '../constants/entityName.json';
import Abstract from './abstractRepository';

const TABLE_NAME = ENTITY.FOOD;

export default class DynamoDB extends Abstract {
  findById(id) {
    const params = {
      TableName: TABLE_NAME,
      Key: {
        id,
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


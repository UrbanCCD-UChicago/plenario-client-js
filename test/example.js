import { Client } from '../lib';

describe('Client', () => {

  let client = new Client();

  describe('#describeDataSets()', () => {
    it('should return return a JSON payload from the server', () => {
      var res = client.getDataSets();
      assert(res).equals({});
    });
  });
});

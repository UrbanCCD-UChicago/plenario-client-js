// testing libraries
import 'chai';
import { expect } from 'chai';
import { fetchMock } from 'fetch-mock';

// testing helpers
import fs from 'fs';

// what we're actually testing
import { Client } from '../src';


// a note on the `() => {}`: this is called fat arrow style
// functions. they're newish to JS. they are a shorthand for
// the old `function () {}` -- anonymous functions/lambda
// type stuff.
describe('Client', () => {
  // instantiate a client for all the tests
  let client = new Client();

  // test the functions one at a time in blocks
  describe('#describeDataSets', () => {

    // #before is like the setup_all -- it runs only once before
    // the tests. if you need to do setup before *each* test then
    // you would want to use beforeEach. in our case, we're just
    // setting up the trap for the requests, so it only needs to
    // be run once before the tests.
    before(() => {
      // read in the fixture we want to apply to the tests -- it's
      // read in as a string.
      let body = fs.readFileSync('test/fixtures/list.json');
      // parse the string to JSON as the body.
      fetchMock.get('*', JSON.parse(body));
    });

    // each test should test one thing. also note that since the
    // fetch calls are asynchronous, we need to flag the function
    // as such so we can await the response.
    it('should return a JSON response', async () => {
      let res = await client.describeDataSets();
      expect(res).to.be.an('object');
    });

    it('should have a meta object', async () => {
      let res = await client.describeDataSets();
      expect(res).to.have.property('meta');
      expect(res.meta).to.be.an('object');
    });

    it('should have a body array', async () => {
      let res = await client.describeDataSets();
      expect(res).to.have.property('data');
      expect(res.data).to.be.an('array');
    });

    it('should have the same number or elements in the body as the number dictated in the meta', async () => {
      let res = await client.describeDataSets();
      let dataCount = res.meta.counts.data_count;
      let lenData = res.data.length;
      expect(lenData).to.equal(dataCount);
    });

    it('should have the same keys in all elements of the data array', async () => {
      let res = await client.describeDataSets();
      let keys = Object.keys(res.data[0]);
      res.data.forEach(el => {
        let elKeys = Object.keys(el);
        expect(elKeys).to.have.all.members(keys);
      });
    });

    // if a fat arrow is a one liner, you can omit the braces.
    after(() => fetchMock.restore());
  });

  describe('#headDataSetDescriptions', () => {
    before(() => {
      // you'll want to change this
      let body = fs.readFileSync('test/fixtures/list.json');
      fetchMock.get('*', JSON.parse(body));
    });

    it('should return a JSON response', async () => { });
    it('should have a meta object', async () => { });
    it('should have a body array', async () => { });
    it('should not have values for previous or next links', async () => { });
    it('should only have one object in its data array', async () => { });

    after(() => fetchMock.restore());
  });

  describe('#getDataSet', () => {
    before(() => {
      // you'll want to change this
      let body = fs.readFileSync('test/fixtures/list.json');
      fetchMock.get('*', JSON.parse(body));
    });

    it('should return a JSON response', async () => { });
    it('should have a meta object', async () => { });
    it('should have a body array', async () => { });
    it('should have the same keys in each element of the data array', async () => { });

    after(() => fetchMock.restore());
  });

  describe('#headDataSet', () => {
    before(() => {
      // you'll want to change this
      let body = fs.readFileSync('test/fixtures/list.json');
      fetchMock.get('*', JSON.parse(body));
    });

    it('should return a JSON response', async () => { });
    it('should have a meta object', async () => { });
    it('should have a body array', async () => { });
    it('should not have values for previous or next links', async () => { });
    it('should only have one object in its data array', async () => { });

    after(() => fetchMock.restore());
  });

  describe('#describeDataSet', () => {
    before(() => {
      // you'll want to change this
      let body = fs.readFileSync('test/fixtures/list.json');
      fetchMock.get('*', JSON.parse(body));
    });

    it('should return a JSON response', async () => { });
    it('should have a meta object', async () => { });
    it('should have a body array', async () => { });
    it('should not have values for previous or next links', async () => { });
    it('should only have one object in its data array', async () => { });
    it('should have metadata keys, not record keys, in the array element', async () => { });

    after(() => fetchMock.restore());
  });
});

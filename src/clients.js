import 'node-fetch';

class BaseClient {

  constructor({ scheme = 'https', hostname = 'plenar.io', version = 'v2', endpoint = '' } = {}) {
    this.scheme = scheme;
    this.hostname = hostname;
    this.version = version;
    this.endpoint = endpoint;
    this.basePath = `${this.scheme}://${this.hostname}/api/${this.version}/${this.endpoint}`;
  }

  async sendRequest() {
    return fetch(this.basePath, {
      headers: {
        'User-Agent': 'plenario-js-client'
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('response was not ok -- we can handle this later');
        } else {
          return response.json();
        }
      })
      .then(data => {
        return data;
      })
      .catch(error => {
        console.error(error);
        throw error;
      });
  }
}


export class Client extends BaseClient {

  constructor({ scheme = 'https', hostname = 'plenar.io', version = 'v2', endpoint = 'data-sets' } = {}) {
    super();
    this.scheme = scheme;
    this.hostname = hostname;
    this.version = version;
    this.endpoint = endpoint;
    this.basePath = `${this.scheme}://${this.hostname}/api/${this.version}/${this.endpoint}`;
  }

  async describeDataSets() {
    return this.sendRequest();
  }
}



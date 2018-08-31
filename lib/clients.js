const fetch = require('node-fetch');

export class BaseClient {

  constructor({scheme = 'https', hostname = 'plenar.io', version = 'v2', endpoint = ''} = {}) {
    this.scheme = scheme;
    this.hostname = hostname;
    this.version = version;
    this.endpoint = endpoint;
    this.basePath = `${this.scheme}://${this.hostname}/api/${this.version}/${this.endpoint}`;
  }

  sendRequest() {
    return fetch(this.basePath, {
      headers: {
        'User-Agent': 'plenario-js-client'
      }
    })
      .then(response => response.json())
      .catch(error => console.error(error));
  }
}


export class Client extends BaseClient {

  constructor({scheme = 'https', hostname = 'plenar.io', version = 'v2', endpoint = 'data-sets'} = {}) {
    super();
    this.scheme = scheme;
    this.hostname = hostname;
    this.version = version;
    this.endpoint = endpoint;
    this.basePath = `${this.scheme}://${this.hostname}/api/${this.version}/${this.endpoint}`;
  }

  describeDataSets() {
    this.sendRequest();
  }
}



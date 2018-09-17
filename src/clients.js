import 'node-fetch';

class BaseClient {

  constructor({ scheme = 'https', hostname = 'plenar.io', version = 'v2', endpoint = '' } = {}) {
    this.scheme = scheme;
    this.hostname = hostname;
    this.version = version;
    this.endpoint = endpoint;
    this.basePath = `${this.scheme}://${this.hostname}/api/${this.version}/${this.endpoint}`;
  }

  async sendRequest(url) {
    return fetch(url, {
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
    return this.sendRequest(this.basePath);
  }

  async headDataSetDescriptions() {
    let url = `${this.basePath}/@head`;
    return this.sendRequest(url);
  }

  async getDataSet(slug) {
    let url = `${this.basePath}/${slug}`;
    return this.sendRequest(url);
  }

  async describeDataSet(slug) {
    let url = `${this.basePath}/${slug}/@describe`;
    return this.sendRequest(url);
  }

  async headDataSet(slug) {
    let url = `${this.basePath}/${slug}/@head`;
    return this.sendRequest(url);
  }


}

export class AotClient extends BaseClient {

  constructor({scheme = 'https', hostname = 'plenar.io', version = 'v2', endpoint = 'aot'} = {}) {
    super();
    this.scheme = scheme;
    this.hostname = hostname;
    this.version = version;
    this.endpoint = endpoint;
    this.basePath = `${this.scheme}://${this.hostname}/api/${this.version}/${this.endpoint}`;
  }

  async getObservations() {
    return this.sendRequest(url);
  }

  async describeNetworks() {
    let url = `${this.basePath}/@describe`;
    return this.sendRequest(url);
  }

  async headObservations() {
    let url = `${this.basePath}/@head`;
    return this.sendRequest(url);
  }

}
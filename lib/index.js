import { Client, BaseClient } from './clients.js';

const client = new Client({hostname: 'dev.plenar.io'});

const bc = new BaseClient({hostname: 'dev.plenar.io'});

const resp = client.describeDataSets();

console.log(resp.then());

console.log('done');

import { URL } from 'url';
import fetch from 'node-fetch';
import DataLoader from 'dataloader';

const fetchJson = input => {
  const url = new URL(input, 'http://localhost:3000');

  return fetch(url.href)
    .then(response => response.json());
};

const personLoader = new DataLoader(keys => Promise.all(keys.map(fetchJson)));

export default {
  person: personLoader
};

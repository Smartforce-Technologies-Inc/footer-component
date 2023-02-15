import { FooterConfig } from '../Models';

export const getConfig = (url: string): Promise<FooterConfig> => {
  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  }).then((response) => response.json());
};

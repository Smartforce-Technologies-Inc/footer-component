import { FooterConfig } from '../Models';

const DEFAULT_URL =
  'https://smartforceprodcdn.azureedge.us/smartforce/common/footer.json';

export const getConfig = (url?: string): Promise<FooterConfig> => {
  return fetch(url || DEFAULT_URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  }).then((response) => response.json());
};

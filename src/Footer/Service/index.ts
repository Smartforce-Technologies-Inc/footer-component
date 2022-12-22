import { FooterConfig } from '../Models';

export const getConfig = (): Promise<FooterConfig> => {
  const url =
    process.env.BUILD === 'development'
      ? 'https://smartforcecdnprod.blob.core.usgovcloudapi.net/smartforce/common/footer.json'
      : 'https://smartforceprodcdn.azureedge.us/smartforce/common/footer.json';

  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  }).then((response) => response.json());
};

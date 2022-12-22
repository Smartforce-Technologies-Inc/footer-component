import { FooterConfig } from '../Models';

export const getConfig = (): Promise<FooterConfig> => {
  console.log(process.env);
  const url =
    process.env.FOOTER_BUILD == 'production'
      ? 'https://smartforceprodcdn.azureedge.us/smartforce/common/footer.json'
      : 'https://smartforcecdnprod.blob.core.usgovcloudapi.net/smartforce/common/footer.json';

  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  }).then((response) => response.json());
};

import React from 'react';
import styles from './App.module.scss';
import { Footer } from 'footer-component';

export const App = () => {
  const [isNightMode, setIsNightMode] = React.useState<boolean>(false);

  const onChangeModeClick = () => {
    setIsNightMode(!isNightMode);
  };

  return (
    <div className={styles.app}>
      <header>
        <h2>Header</h2>
        <button onClick={onChangeModeClick}>Change Mode</button>
      </header>
      <main>
        <aside>Aside</aside>
        <section>Body</section>
      </main>
      <Footer
        url='https://smartforcecdnprod.blob.core.usgovcloudapi.net/smartforce/common/footer.json'
        theme={isNightMode ? 'night' : 'day'}
      />
    </div>
  );
};

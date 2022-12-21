import styles from './App.module.scss';
import { Footer } from 'footer-component';

export const App = () => {
  return (
    <div className={styles.app}>
      <header>
        <h2>Header</h2>
      </header>
      <main>
        <aside>Aside</aside>
        <section>Body</section>
      </main>
      <Footer />
    </div>
  );
};

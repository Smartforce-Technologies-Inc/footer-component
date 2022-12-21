import React from 'react';
import styles from './FooterSkeleton.module.scss';

const SECTION_SIZE = 3;
const LINKS_SIZE = 4;

export const FooterSkeleton = (): React.ReactElement<{}> => {
  return (
    <div className={styles.footerSkeleton}>
      <div className={styles.sections}>
        {[...Array(SECTION_SIZE)].map((_n, i: number) => (
          <div key={`skeleton-section-${i}`} className={styles.section}>
            <div className={`${styles.rect} ${styles.rectBig}`} />

            {[...Array(LINKS_SIZE)].map((_n, j: number) => (
              <div
                key={`skeleton-link-${i}-${j}`}
                className={`${styles.rect} ${styles.rectMedium}`}
              />
            ))}
          </div>
        ))}
      </div>

      <hr />

      <div className={styles.bottom}>
        <div className={`${styles.rect} ${styles.rectSmall}`} />
      </div>
    </div>
  );
};

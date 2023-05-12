import React, { Fragment } from 'react';
import styles from './FooterSkeleton.module.scss';
import { ThemeType } from '../Footer';

const SECTION_SIZE = 3;
const LINKS_SIZE = 4;

export interface FooterSkeletonProps {
  theme: ThemeType;
  hideSections: boolean;
}

export const FooterSkeleton = ({
  theme,
  hideSections
}: FooterSkeletonProps): React.ReactElement<FooterSkeletonProps> => {
  return (
    <div
      className={`${styles.footerSkeleton} ${
        theme === 'night' ? styles.night : ''
      }`}
    >
      {!hideSections && (
        <Fragment>
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
        </Fragment>
      )}

      <div className={styles.bottom}>
        <div className={`${styles.rect} ${styles.rectBottom}`} />
      </div>
    </div>
  );
};

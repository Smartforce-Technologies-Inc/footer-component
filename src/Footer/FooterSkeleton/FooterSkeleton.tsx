import React, { Fragment } from 'react';
import styles from './FooterSkeleton.module.scss';
import { ThemeType } from '../Footer';
import { FooterSkeletonItem } from './FooterSkeletonItem/FooterSkeletonItem';

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
  const isNightTheme: boolean = theme === 'night';
  return (
    <div
      className={`${styles.footerSkeleton} ${isNightTheme ? styles.night : ''}`}
    >
      {!hideSections && (
        <Fragment>
          <div className={styles.sections}>
            {[...Array(SECTION_SIZE)].map((_n, i: number) => (
              <div key={`skeleton-section-${i}`} className={styles.section}>
                <FooterSkeletonItem
                  key={`skeleton-item-${i}`}
                  size='big'
                  isNightTheme={isNightTheme}
                />

                {[...Array(LINKS_SIZE)].map((_n, j: number) => (
                  <FooterSkeletonItem
                    key={`skeleton-item-${j}`}
                    size='medium'
                    isNightTheme={isNightTheme}
                  />
                ))}
              </div>
            ))}
          </div>

          <hr />
        </Fragment>
      )}

      <div className={styles.bottom}>
        <FooterSkeletonItem size='medium' isNightTheme={isNightTheme} />
        <FooterSkeletonItem size='medium' isNightTheme={isNightTheme} />
        <FooterSkeletonItem size='medium' isNightTheme={isNightTheme} />
      </div>
    </div>
  );
};

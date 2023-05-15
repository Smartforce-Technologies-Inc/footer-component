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
                <FooterSkeletonItem size='big' night={isNightTheme} />

                {[...Array(LINKS_SIZE)].map((_n, j: number) => (
                  <FooterSkeletonItem size='medium' night={isNightTheme} />
                ))}
              </div>
            ))}
          </div>

          <hr />
        </Fragment>
      )}

      <div className={styles.bottom}>
        <FooterSkeletonItem size='medium' night={isNightTheme} />
        <FooterSkeletonItem size='medium' night={isNightTheme} />
        <FooterSkeletonItem size='medium' night={isNightTheme} />
      </div>
    </div>
  );
};

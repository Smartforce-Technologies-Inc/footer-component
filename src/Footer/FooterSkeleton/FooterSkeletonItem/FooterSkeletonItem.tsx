import React from 'react';
import styles from './FooterSkeletonItem.module.scss';

type ItemSizeType = 'big' | 'medium' | 'small';

export interface FooterSkeletonItemProps {
  isNightTheme: boolean;
  size: ItemSizeType;
}

export const FooterSkeletonItem = ({
  isNightTheme,
  size
}: FooterSkeletonItemProps): React.ReactElement<FooterSkeletonItemProps> => {
  return (
    <div
      className={`${styles.footerSkeletonItem} ${styles[size]} ${
        isNightTheme ? styles.night : ''
      }`}
    >
      <div className={`${styles.item} ${styles[size]}`}></div>
    </div>
  );
};

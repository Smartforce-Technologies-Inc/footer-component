import React from 'react';
import styles from './FooterSkeletonItem.module.scss';

type ItemSizeType = 'big' | 'medium' | 'small';

export interface FooterSkeletonItemProps {
  size: ItemSizeType;
  night: boolean;
}

export const FooterSkeletonItem = ({
  size,
  night
}: FooterSkeletonItemProps): React.ReactElement<FooterSkeletonItemProps> => {
  return (
    <div
      className={`${styles.footerSkeletonItem} ${styles[size]} ${
        night ? styles.night : ''
      }`}
    >
      <div className={`${styles.item} ${styles[size]}`}></div>
    </div>
  );
};

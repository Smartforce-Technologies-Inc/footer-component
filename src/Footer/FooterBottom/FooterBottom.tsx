import React, { Fragment } from 'react';
import styles from './FooterBottom.module.scss';
import { FooterLink } from '../FooterLink/FooterLink';
import { BottomConfig, Link } from '../Models';

export interface FooterBottomProps {
  config: BottomConfig;
  isNightMode: boolean;
}

export const FooterBottom = ({
  config,
  isNightMode
}: FooterBottomProps): React.ReactElement<FooterBottomProps> => {
  return (
    <div
      className={`${styles.footerBottom} ${
        isNightMode ? styles.nightMode : ''
      }`}
    >
      <div className={styles.region}>
        <FooterLink link={config.region} />
      </div>

      <div className={styles.bottomLinks}>
        {config.more_sections.map((link: Link, index: number) => (
          <Fragment key={link.label}>
            <FooterLink link={link} />
            {index < config.more_sections.length - 1 && <span>|</span>}
          </Fragment>
        ))}
      </div>

      <div className={styles.copyright}>
        <FooterLink link={config.copyright} />
      </div>
    </div>
  );
};

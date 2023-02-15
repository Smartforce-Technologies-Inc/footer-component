import React, { Fragment } from 'react';
import styles from './FooterBottom.module.scss';
import { FooterLink } from '../FooterLink/FooterLink';
import { BottomConfig, Link } from '../Models';
import { ThemeType } from '../Footer';

export interface FooterBottomProps {
  config: BottomConfig;
  theme: ThemeType;
}

export const FooterBottom = ({
  config,
  theme
}: FooterBottomProps): React.ReactElement<FooterBottomProps> => {
  const copyrightLink: Link = {
    href: config.copyright.href,
    label: `© ${new Date().getFullYear()} ${config.copyright.label}`
  };
  return (
    <div className={`${styles.footerBottom} ${styles[theme]}`}>
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
        <FooterLink link={copyrightLink} />
      </div>
    </div>
  );
};

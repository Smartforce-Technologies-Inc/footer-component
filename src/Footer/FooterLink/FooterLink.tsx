import React from 'react';
import styles from './FooterLink.module.scss';
import { Link } from '../Models';
import { ThemeType } from '../Footer';

export interface FooterLinkProps {
  link: Link;
  theme?: ThemeType;
}

export const FooterLink = ({
  link,
  theme
}: FooterLinkProps): React.ReactElement<FooterLinkProps> => {
  return (
    <a
      className={`${styles.footerLink} ${
        theme === 'night' ? styles.night : ''
      }`}
      href={link.href}
      target='_blank'
      rel='noreferrer'
    >
      {link.label}
    </a>
  );
};

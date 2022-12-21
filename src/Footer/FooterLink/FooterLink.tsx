import React from 'react';
import styles from './FooterLink.module.scss';
import { Link } from '../Models';

export interface FooterLinkProps {
  link: Link;
}

export const FooterLink = ({
  link
}: FooterLinkProps): React.ReactElement<FooterLinkProps> => {
  return (
    <a
      className={styles.footerLink}
      href={link.href}
      target="_blank"
      rel="noreferrer"
    >
      {link.label}
    </a>
  );
};

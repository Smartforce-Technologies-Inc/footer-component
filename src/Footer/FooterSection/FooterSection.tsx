import React from 'react';
import styles from './FooterSection.module.scss';
import { FooterLink } from '../FooterLink/FooterLink';
import { Link, Section } from '../Models';

export interface FooterSectionProps {
  section: Section;
}

export const FooterSection = ({
  section
}: FooterSectionProps): React.ReactElement<FooterSectionProps> => {
  return (
    <div className={styles.footerSection}>
      <span className={styles.title}>{section.title}</span>

      {section.links.map((link: Link) => (
        <FooterLink key={link.label} link={link} />
      ))}
    </div>
  );
};

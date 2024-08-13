import React from 'react';
import styles from './FooterSection.module.scss';
import { FooterLink } from '../FooterLink/FooterLink';
import { Link, Section } from '../Models';
import { ThemeType } from '../Footer';

export interface FooterSectionProps {
  section: Section;
  theme?: ThemeType;
}

export const FooterSection = ({
  section,
  theme
}: FooterSectionProps): React.ReactElement<FooterSectionProps> => {
  return (
    <div
      className={`${styles.footerSection} ${
        theme === 'night' ? styles.night : ''
      }`}
    >
      <span className={styles.title}>{section.title}</span>

      {section.links.map((link: Link) => (
        <FooterLink key={link.label} link={link} theme={theme} />
      ))}
    </div>
  );
};

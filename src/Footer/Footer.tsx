import React, { Fragment, useEffect, useState } from 'react';
import styles from './Footer.module.scss';
import { FooterBottom } from './FooterBottom/FooterBottom';
import { FooterSection } from './FooterSection/FooterSection';
import { FooterSkeleton } from './FooterSkeleton/FooterSkeleton';
import { FooterConfig, Section } from './Models';
import { getConfig } from './Service';

export interface FooterProps {
  theme?: 'day' | 'night';
  url?: string;
}

export const Footer = ({
  url,
  theme = 'day'
}: FooterProps): React.ReactElement<{}> => {
  const [config, setConfig] = useState<FooterConfig>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const isNightMode: boolean = theme === 'night';

  useEffect(() => {
    const init = async () => {
      const config = await getConfig(url);
      setConfig(config);
      setIsLoading(false);
    };

    init();
  }, [url]);

  return (
    <Fragment>
      {isLoading && <FooterSkeleton />}

      {!isLoading && config && (
        <div
          className={`${styles.footer} ${isNightMode ? styles.nightMode : ''}`}
        >
          <div className={styles.sections}>
            {config.sections.map((section: Section) => (
              <FooterSection key={section.title} section={section} />
            ))}
          </div>

          <hr />

          <FooterBottom isNightMode={isNightMode} config={config.bottom_line} />
        </div>
      )}
    </Fragment>
  );
};

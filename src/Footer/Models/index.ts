export interface Link {
  label: string;
  href: string;
}

export interface Section {
  title: string;
  links: Link[];
}

export interface BottomConfig {
  copyright: Link;
  more_sections: Link[];
  region: Link;
}

export interface FooterConfig {
  sections: Section[];
  bottom_line: BottomConfig;
}

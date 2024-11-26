export interface FeatureCardProps {
  title: string;
  para: string;
  featureclass?: string;
  link: string;
}

export interface FooterCardProps {
  title: string;
  link: string;
}

export interface NavLinkProps {
  title: string;
  link: string;
}

export interface StationaryCardProps {
  img: string;
  type: string;
  name: string;
  qty: number;
  unit: string;
}

export interface InventoryCardProps {
  img: string;
  type: string;
  name: string;
  condition: string;
}

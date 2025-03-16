import { SocialLink, SocialLogo } from './SocialIconStyles';

export type SocialIconProps = {
  platform: 'instagram' | 'facebook' | 'etsy';
};

export const socialData = {
  instagram: {
    url: 'https://www.instagram.com/glut0pia/?hl=en',
    alt: 'Glutopia Instagram'
  },
  facebook: {
    url: 'https://www.facebook.com/glutenguru/',
    alt: 'Glutopia Facebook'
  },
  etsy: {
    url: 'https://www.etsy.com/uk/shop/GlutopiaCakeBoutique',
    alt: 'Etsy Shop'
  }
};

export const SocialIcon = ({ platform }: SocialIconProps) => (
  <SocialLink
    href={socialData[platform].url}
    target="_blank"
    rel="noopener noreferrer"
  >
    <SocialLogo 
      src={`/images/${platform}.jpg`} 
      alt={socialData[platform].alt}
    />
  </SocialLink>
);
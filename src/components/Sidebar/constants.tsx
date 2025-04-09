import OverviewIcon from '../../assets/icons/overview.svg';
import CreativeInsightsIcon from '../../assets/icons/creativeInsights.svg';
import CreativeLibraryIcon from '../../assets/icons/creativeLibrary.svg';
import BrandRadarIcon from '../../assets/icons/brandRadar.svg';
import FireIcon from '../../assets/images/emoji.png';
import MenuPlusIcon from '../../assets/icons/menuPlus.svg';

export type MenuItem = {
  key: string;
  label: string;
  icon: string;
  link?: string;
};

export const items: MenuItem[] = [
  {
    key: 'overview',
    label: 'Overview',
    icon: OverviewIcon,
  },
  {
    key: 'creative-insights',
    label: 'Creative insights',
    icon: CreativeInsightsIcon,
  },
  {
    key: 'creative-library',
    label: 'Creative library',
    icon: CreativeLibraryIcon,
  },
  {
    key: 'brand-radar',
    label: 'Brand radar',
    icon: BrandRadarIcon,
  },
];

export const reportsGroupItems: MenuItem[] = [
  {
    key: 'reports-top-creatives',
    label: 'Top creatives',
    icon: FireIcon,
  },
  {
    key: 'reports-potential-to-scale',
    label: 'Potential to scale',
    icon: FireIcon,
  },
  {
    key: 'reports-trending-now',
    label: 'Trending now',
    icon: FireIcon,
  },
  {
    key: 'reports-potential-to-pause',
    label: 'Potential to pause',
    icon: FireIcon,
  },
  {
    key: 'reports-creative-fatigue',
    label: 'Creative fatigue',
    icon: FireIcon,
  },
  {
    key: 'reports-newly-launched',
    label: 'Newly launched',
    icon: FireIcon,
  },
  {
    key: 'reports-video-deep-dive',
    label: 'Video deep dive',
    icon: FireIcon,
  },
  {
    key: 'reports-static-deep-dive',
    label: 'Static deep dive',
    icon: FireIcon,
  },
  {
    key: 'reports-video-drop-off',
    label: 'Video drop-off',
    icon: FireIcon,
  },
  {
    key: 'reports-winning-hooks',
    label: 'Winning hooks',
    icon: FireIcon,
  },
  {
    key: 'reports-winning-ad-copy',
    label: 'Winning ad copy',
    icon: FireIcon,
  },
  {
    key: 'reports-favorites',
    label: 'Favorites',
    icon: FireIcon,
  },
  {
    key: 'reports-create-new-board',
    label: 'Create new board',
    icon: MenuPlusIcon,
  },
];

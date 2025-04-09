import Image from '../../assets/images/Rectangle.png';

export enum HighlightLevel {
  Low = 'low',
  Medium = 'medium',
  High = 'high',
}

type RegularData<T> = {
  value: T;
  highlightLevel: HighlightLevel;
};

type RegularStringData = RegularData<string>;

export interface DataType {
  key: string;
  name: { title: string; subtitle: string; image: string };
  spend: RegularStringData;
  purchaseValue: RegularStringData;
  roas: RegularStringData;
  cpa: RegularStringData;
  cpcCostPerClicks: RegularStringData;
  cpm: RegularStringData;
  cpcOutboundClicks: RegularStringData;
  clickToAtc: RegularStringData;
  atcToPurchase: RegularStringData;
  purchases: RegularStringData;
  firstFrameRetention: RegularStringData;
  thumbstopRate: RegularStringData;
  ctrOutboundClicks: RegularStringData;
  clickToPurchase: RegularStringData;
  ctrClickThroughRate: RegularStringData;
  videoPlays25: RegularStringData;
  videoPlays50: RegularStringData;
  videoPlays75: RegularStringData;
  videoPlays100: RegularStringData;
  holdRate: RegularStringData;
}

export const data: DataType[] = [
  {
    key: '1',
    name: {
      title: 'TTCC_0284TTCC_0284TTCC_0284TTCC_0284',
      subtitle: '1 ad',
      image: Image,
    },
    spend: { value: '$12918.68', highlightLevel: HighlightLevel.Low },
    purchaseValue: { value: '$8366.88', highlightLevel: HighlightLevel.Low },
    roas: { value: '0.65', highlightLevel: HighlightLevel.Low },
    cpa: { value: '$84.99', highlightLevel: HighlightLevel.Medium },
    cpcCostPerClicks: { value: '$4.21', highlightLevel: HighlightLevel.Low },
    cpm: { value: '$62.67', highlightLevel: HighlightLevel.High },
    cpcOutboundClicks: { value: '$2.49', highlightLevel: HighlightLevel.Low },
    clickToAtc: { value: '1.49%', highlightLevel: HighlightLevel.Low },
    atcToPurchase: { value: '44.11%', highlightLevel: HighlightLevel.Low },
    purchases: { value: '23.81%', highlightLevel: HighlightLevel.Low },
    firstFrameRetention: {
      value: '91.89%',
      highlightLevel: HighlightLevel.Medium,
    },
    thumbstopRate: { value: '47.50%', highlightLevel: HighlightLevel.Low },
    ctrOutboundClicks: { value: '1.49%', highlightLevel: HighlightLevel.Low },
    clickToPurchase: { value: '4.96%', highlightLevel: HighlightLevel.Low },
    ctrClickThroughRate: { value: '2.51%', highlightLevel: HighlightLevel.Low },
    videoPlays25: { value: '44.11%', highlightLevel: HighlightLevel.High },
    videoPlays50: { value: '23.81%', highlightLevel: HighlightLevel.Low },
    videoPlays75: { value: '13.64%', highlightLevel: HighlightLevel.Low },
    videoPlays100: { value: '9.44%', highlightLevel: HighlightLevel.Low },
    holdRate: { value: '8.61%', highlightLevel: HighlightLevel.Low },
  },
  {
    key: '2',
    name: { title: 'TTCC_0284', subtitle: '1 ad', image: Image },
    spend: { value: '$9918.68', highlightLevel: HighlightLevel.Low },
    purchaseValue: { value: '$4366.88', highlightLevel: HighlightLevel.High },
    roas: { value: '1.65', highlightLevel: HighlightLevel.Low },
    cpa: { value: '$100.99', highlightLevel: HighlightLevel.Low },
    cpcCostPerClicks: { value: '$2.21', highlightLevel: HighlightLevel.Low },
    cpm: { value: '$84.67', highlightLevel: HighlightLevel.Medium },
    cpcOutboundClicks: { value: '$5.49', highlightLevel: HighlightLevel.Low },
    clickToAtc: { value: '0.49%', highlightLevel: HighlightLevel.Medium },
    atcToPurchase: { value: '30.11%', highlightLevel: HighlightLevel.Low },
    purchases: { value: '18.81%', highlightLevel: HighlightLevel.High },
    firstFrameRetention: {
      value: '80.89%',
      highlightLevel: HighlightLevel.Low,
    },
    thumbstopRate: { value: '51.50%', highlightLevel: HighlightLevel.Low },
    ctrOutboundClicks: {
      value: '2.81%',
      highlightLevel: HighlightLevel.Low,
    },
    clickToPurchase: { value: '4.96%', highlightLevel: HighlightLevel.Medium },
    ctrClickThroughRate: { value: '2.51%', highlightLevel: HighlightLevel.Low },
    videoPlays25: { value: '44.11%', highlightLevel: HighlightLevel.Low },
    videoPlays50: { value: '23.81%', highlightLevel: HighlightLevel.Low },
    videoPlays75: { value: '13.64%', highlightLevel: HighlightLevel.Medium },
    videoPlays100: { value: '9.44%', highlightLevel: HighlightLevel.Low },
    holdRate: { value: '8.61%', highlightLevel: HighlightLevel.Low },
  },
  {
    key: '3',
    name: { title: 'TTCC_0284', subtitle: '1 ad', image: Image },
    spend: { value: '$12918.68', highlightLevel: HighlightLevel.Low },
    purchaseValue: { value: '$8366.88', highlightLevel: HighlightLevel.Low },
    roas: { value: '0.65', highlightLevel: HighlightLevel.Low },
    cpa: { value: '$84.99', highlightLevel: HighlightLevel.Medium },
    cpcCostPerClicks: { value: '$4.21', highlightLevel: HighlightLevel.Low },
    cpm: { value: '$62.67', highlightLevel: HighlightLevel.High },
    cpcOutboundClicks: { value: '$2.49', highlightLevel: HighlightLevel.Low },
    clickToAtc: { value: '1.49%', highlightLevel: HighlightLevel.Low },
    atcToPurchase: { value: '44.11%', highlightLevel: HighlightLevel.Low },
    purchases: { value: '23.81%', highlightLevel: HighlightLevel.Low },
    firstFrameRetention: {
      value: '91.89%',
      highlightLevel: HighlightLevel.Medium,
    },
    thumbstopRate: { value: '47.50%', highlightLevel: HighlightLevel.Low },
    ctrOutboundClicks: { value: '1.49%', highlightLevel: HighlightLevel.Low },
    clickToPurchase: { value: '4.96%', highlightLevel: HighlightLevel.Low },
    ctrClickThroughRate: { value: '2.51%', highlightLevel: HighlightLevel.Low },
    videoPlays25: { value: '44.11%', highlightLevel: HighlightLevel.High },
    videoPlays50: { value: '23.81%', highlightLevel: HighlightLevel.Low },
    videoPlays75: { value: '13.64%', highlightLevel: HighlightLevel.Low },
    videoPlays100: { value: '9.44%', highlightLevel: HighlightLevel.Low },
    holdRate: { value: '8.61%', highlightLevel: HighlightLevel.Low },
  },
  {
    key: '4',
    name: { title: 'TTCC_0284', subtitle: '1 ad', image: Image },
    spend: { value: '$9918.68', highlightLevel: HighlightLevel.Low },
    purchaseValue: { value: '$4366.88', highlightLevel: HighlightLevel.High },
    roas: { value: '1.65', highlightLevel: HighlightLevel.Low },
    cpa: { value: '$100.99', highlightLevel: HighlightLevel.Low },
    cpcCostPerClicks: { value: '$2.21', highlightLevel: HighlightLevel.Low },
    cpm: { value: '$84.67', highlightLevel: HighlightLevel.Medium },
    cpcOutboundClicks: { value: '$5.49', highlightLevel: HighlightLevel.Low },
    clickToAtc: { value: '0.49%', highlightLevel: HighlightLevel.Medium },
    atcToPurchase: { value: '30.11%', highlightLevel: HighlightLevel.Low },
    purchases: { value: '18.81%', highlightLevel: HighlightLevel.High },
    firstFrameRetention: {
      value: '80.89%',
      highlightLevel: HighlightLevel.Low,
    },
    thumbstopRate: { value: '51.50%', highlightLevel: HighlightLevel.Low },
    ctrOutboundClicks: {
      value: '2.81%',
      highlightLevel: HighlightLevel.Low,
    },
    clickToPurchase: { value: '4.96%', highlightLevel: HighlightLevel.Medium },
    ctrClickThroughRate: { value: '2.51%', highlightLevel: HighlightLevel.Low },
    videoPlays25: { value: '44.11%', highlightLevel: HighlightLevel.Low },
    videoPlays50: { value: '23.81%', highlightLevel: HighlightLevel.Low },
    videoPlays75: { value: '13.64%', highlightLevel: HighlightLevel.Medium },
    videoPlays100: { value: '9.44%', highlightLevel: HighlightLevel.Low },
    holdRate: { value: '8.61%', highlightLevel: HighlightLevel.Low },
  },
  {
    key: '5',
    name: { title: 'TTCC_0284', subtitle: '1 ad', image: Image },
    spend: { value: '$12918.68', highlightLevel: HighlightLevel.Low },
    purchaseValue: { value: '$8366.88', highlightLevel: HighlightLevel.Low },
    roas: { value: '0.65', highlightLevel: HighlightLevel.Low },
    cpa: { value: '$84.99', highlightLevel: HighlightLevel.Medium },
    cpcCostPerClicks: { value: '$4.21', highlightLevel: HighlightLevel.Low },
    cpm: { value: '$62.67', highlightLevel: HighlightLevel.High },
    cpcOutboundClicks: { value: '$2.49', highlightLevel: HighlightLevel.Low },
    clickToAtc: { value: '1.49%', highlightLevel: HighlightLevel.Low },
    atcToPurchase: { value: '44.11%', highlightLevel: HighlightLevel.Low },
    purchases: { value: '23.81%', highlightLevel: HighlightLevel.Low },
    firstFrameRetention: {
      value: '91.89%',
      highlightLevel: HighlightLevel.Medium,
    },
    thumbstopRate: { value: '47.50%', highlightLevel: HighlightLevel.Low },
    ctrOutboundClicks: { value: '1.49%', highlightLevel: HighlightLevel.Low },
    clickToPurchase: { value: '4.96%', highlightLevel: HighlightLevel.Low },
    ctrClickThroughRate: { value: '2.51%', highlightLevel: HighlightLevel.Low },
    videoPlays25: { value: '44.11%', highlightLevel: HighlightLevel.High },
    videoPlays50: { value: '23.81%', highlightLevel: HighlightLevel.Low },
    videoPlays75: { value: '13.64%', highlightLevel: HighlightLevel.Low },
    videoPlays100: { value: '9.44%', highlightLevel: HighlightLevel.Low },
    holdRate: { value: '8.61%', highlightLevel: HighlightLevel.Low },
  },
  {
    key: '6',
    name: { title: 'TTCC_0284', subtitle: '1 ad', image: Image },
    spend: { value: '$9918.68', highlightLevel: HighlightLevel.Low },
    purchaseValue: { value: '$4366.88', highlightLevel: HighlightLevel.High },
    roas: { value: '1.65', highlightLevel: HighlightLevel.Low },
    cpa: { value: '$100.99', highlightLevel: HighlightLevel.Low },
    cpcCostPerClicks: { value: '$2.21', highlightLevel: HighlightLevel.Low },
    cpm: { value: '$84.67', highlightLevel: HighlightLevel.Medium },
    cpcOutboundClicks: { value: '$5.49', highlightLevel: HighlightLevel.Low },
    clickToAtc: { value: '0.49%', highlightLevel: HighlightLevel.Medium },
    atcToPurchase: { value: '30.11%', highlightLevel: HighlightLevel.Low },
    purchases: { value: '18.81%', highlightLevel: HighlightLevel.High },
    firstFrameRetention: {
      value: '80.89%',
      highlightLevel: HighlightLevel.Low,
    },
    thumbstopRate: { value: '51.50%', highlightLevel: HighlightLevel.Low },
    ctrOutboundClicks: {
      value: '2.81%',
      highlightLevel: HighlightLevel.Low,
    },
    clickToPurchase: { value: '4.96%', highlightLevel: HighlightLevel.Medium },
    ctrClickThroughRate: { value: '2.51%', highlightLevel: HighlightLevel.Low },
    videoPlays25: { value: '44.11%', highlightLevel: HighlightLevel.Low },
    videoPlays50: { value: '23.81%', highlightLevel: HighlightLevel.Low },
    videoPlays75: { value: '13.64%', highlightLevel: HighlightLevel.Medium },
    videoPlays100: { value: '9.44%', highlightLevel: HighlightLevel.Low },
    holdRate: { value: '8.61%', highlightLevel: HighlightLevel.Low },
  },
  {
    key: '7',
    name: { title: 'TTCC_0284', subtitle: '1 ad', image: Image },
    spend: { value: '$12918.68', highlightLevel: HighlightLevel.Low },
    purchaseValue: { value: '$8366.88', highlightLevel: HighlightLevel.Low },
    roas: { value: '0.65', highlightLevel: HighlightLevel.Low },
    cpa: { value: '$84.99', highlightLevel: HighlightLevel.Medium },
    cpcCostPerClicks: { value: '$4.21', highlightLevel: HighlightLevel.Low },
    cpm: { value: '$62.67', highlightLevel: HighlightLevel.High },
    cpcOutboundClicks: { value: '$2.49', highlightLevel: HighlightLevel.Low },
    clickToAtc: { value: '1.49%', highlightLevel: HighlightLevel.Low },
    atcToPurchase: { value: '44.11%', highlightLevel: HighlightLevel.Low },
    purchases: { value: '23.81%', highlightLevel: HighlightLevel.Low },
    firstFrameRetention: {
      value: '91.89%',
      highlightLevel: HighlightLevel.Medium,
    },
    thumbstopRate: { value: '47.50%', highlightLevel: HighlightLevel.Low },
    ctrOutboundClicks: { value: '1.49%', highlightLevel: HighlightLevel.Low },
    clickToPurchase: { value: '4.96%', highlightLevel: HighlightLevel.Low },
    ctrClickThroughRate: { value: '2.51%', highlightLevel: HighlightLevel.Low },
    videoPlays25: { value: '44.11%', highlightLevel: HighlightLevel.High },
    videoPlays50: { value: '23.81%', highlightLevel: HighlightLevel.Low },
    videoPlays75: { value: '13.64%', highlightLevel: HighlightLevel.Low },
    videoPlays100: { value: '9.44%', highlightLevel: HighlightLevel.Low },
    holdRate: { value: '8.61%', highlightLevel: HighlightLevel.Low },
  },
  {
    key: '8',
    name: { title: 'TTCC_0284', subtitle: '1 ad', image: Image },
    spend: { value: '$9918.68', highlightLevel: HighlightLevel.Low },
    purchaseValue: { value: '$4366.88', highlightLevel: HighlightLevel.High },
    roas: { value: '1.65', highlightLevel: HighlightLevel.Low },
    cpa: { value: '$100.99', highlightLevel: HighlightLevel.Low },
    cpcCostPerClicks: { value: '$2.21', highlightLevel: HighlightLevel.Low },
    cpm: { value: '$84.67', highlightLevel: HighlightLevel.Medium },
    cpcOutboundClicks: { value: '$5.49', highlightLevel: HighlightLevel.Low },
    clickToAtc: { value: '0.49%', highlightLevel: HighlightLevel.Medium },
    atcToPurchase: { value: '30.11%', highlightLevel: HighlightLevel.Low },
    purchases: { value: '18.81%', highlightLevel: HighlightLevel.High },
    firstFrameRetention: {
      value: '80.89%',
      highlightLevel: HighlightLevel.Low,
    },
    thumbstopRate: { value: '51.50%', highlightLevel: HighlightLevel.Low },
    ctrOutboundClicks: {
      value: '2.81%',
      highlightLevel: HighlightLevel.Low,
    },
    clickToPurchase: { value: '4.96%', highlightLevel: HighlightLevel.Medium },
    ctrClickThroughRate: { value: '2.51%', highlightLevel: HighlightLevel.Low },
    videoPlays25: { value: '44.11%', highlightLevel: HighlightLevel.Low },
    videoPlays50: { value: '23.81%', highlightLevel: HighlightLevel.Low },
    videoPlays75: { value: '13.64%', highlightLevel: HighlightLevel.Medium },
    videoPlays100: { value: '9.44%', highlightLevel: HighlightLevel.Low },
    holdRate: { value: '8.61%', highlightLevel: HighlightLevel.Low },
  },
  {
    key: '9',
    name: { title: 'TTCC_0284', subtitle: '1 ad', image: Image },
    spend: { value: '$12918.68', highlightLevel: HighlightLevel.Low },
    purchaseValue: { value: '$8366.88', highlightLevel: HighlightLevel.Low },
    roas: { value: '0.65', highlightLevel: HighlightLevel.Low },
    cpa: { value: '$84.99', highlightLevel: HighlightLevel.Medium },
    cpcCostPerClicks: { value: '$4.21', highlightLevel: HighlightLevel.Low },
    cpm: { value: '$62.67', highlightLevel: HighlightLevel.High },
    cpcOutboundClicks: { value: '$2.49', highlightLevel: HighlightLevel.Low },
    clickToAtc: { value: '1.49%', highlightLevel: HighlightLevel.Low },
    atcToPurchase: { value: '44.11%', highlightLevel: HighlightLevel.Low },
    purchases: { value: '23.81%', highlightLevel: HighlightLevel.Low },
    firstFrameRetention: {
      value: '91.89%',
      highlightLevel: HighlightLevel.Medium,
    },
    thumbstopRate: { value: '47.50%', highlightLevel: HighlightLevel.Low },
    ctrOutboundClicks: { value: '1.49%', highlightLevel: HighlightLevel.Low },
    clickToPurchase: { value: '4.96%', highlightLevel: HighlightLevel.Low },
    ctrClickThroughRate: { value: '2.51%', highlightLevel: HighlightLevel.Low },
    videoPlays25: { value: '44.11%', highlightLevel: HighlightLevel.High },
    videoPlays50: { value: '23.81%', highlightLevel: HighlightLevel.Low },
    videoPlays75: { value: '13.64%', highlightLevel: HighlightLevel.Low },
    videoPlays100: { value: '9.44%', highlightLevel: HighlightLevel.Low },
    holdRate: { value: '8.61%', highlightLevel: HighlightLevel.Low },
  },
  {
    key: '10',
    name: { title: 'TTCC_0284', subtitle: '1 ad', image: Image },
    spend: { value: '$9918.68', highlightLevel: HighlightLevel.Low },
    purchaseValue: { value: '$4366.88', highlightLevel: HighlightLevel.High },
    roas: { value: '1.65', highlightLevel: HighlightLevel.Low },
    cpa: { value: '$100.99', highlightLevel: HighlightLevel.Low },
    cpcCostPerClicks: { value: '$2.21', highlightLevel: HighlightLevel.Low },
    cpm: { value: '$84.67', highlightLevel: HighlightLevel.Medium },
    cpcOutboundClicks: { value: '$5.49', highlightLevel: HighlightLevel.Low },
    clickToAtc: { value: '0.49%', highlightLevel: HighlightLevel.Medium },
    atcToPurchase: { value: '30.11%', highlightLevel: HighlightLevel.Low },
    purchases: { value: '18.81%', highlightLevel: HighlightLevel.High },
    firstFrameRetention: {
      value: '80.89%',
      highlightLevel: HighlightLevel.Low,
    },
    thumbstopRate: { value: '51.50%', highlightLevel: HighlightLevel.Low },
    ctrOutboundClicks: {
      value: '2.81%',
      highlightLevel: HighlightLevel.Low,
    },
    clickToPurchase: { value: '4.96%', highlightLevel: HighlightLevel.Medium },
    ctrClickThroughRate: { value: '2.51%', highlightLevel: HighlightLevel.Low },
    videoPlays25: { value: '44.11%', highlightLevel: HighlightLevel.Low },
    videoPlays50: { value: '23.81%', highlightLevel: HighlightLevel.Low },
    videoPlays75: { value: '13.64%', highlightLevel: HighlightLevel.Medium },
    videoPlays100: { value: '9.44%', highlightLevel: HighlightLevel.Low },
    holdRate: { value: '8.61%', highlightLevel: HighlightLevel.Low },
  },
  {
    key: '11',
    name: { title: 'TTCC_0284', subtitle: '1 ad', image: Image },
    spend: { value: '$12918.68', highlightLevel: HighlightLevel.Low },
    purchaseValue: { value: '$8366.88', highlightLevel: HighlightLevel.Low },
    roas: { value: '0.65', highlightLevel: HighlightLevel.Low },
    cpa: { value: '$84.99', highlightLevel: HighlightLevel.Medium },
    cpcCostPerClicks: { value: '$4.21', highlightLevel: HighlightLevel.Low },
    cpm: { value: '$62.67', highlightLevel: HighlightLevel.High },
    cpcOutboundClicks: { value: '$2.49', highlightLevel: HighlightLevel.Low },
    clickToAtc: { value: '1.49%', highlightLevel: HighlightLevel.Low },
    atcToPurchase: { value: '44.11%', highlightLevel: HighlightLevel.Low },
    purchases: { value: '23.81%', highlightLevel: HighlightLevel.Low },
    firstFrameRetention: {
      value: '91.89%',
      highlightLevel: HighlightLevel.Medium,
    },
    thumbstopRate: { value: '47.50%', highlightLevel: HighlightLevel.Low },
    ctrOutboundClicks: { value: '1.49%', highlightLevel: HighlightLevel.Low },
    clickToPurchase: { value: '4.96%', highlightLevel: HighlightLevel.Low },
    ctrClickThroughRate: { value: '2.51%', highlightLevel: HighlightLevel.Low },
    videoPlays25: { value: '44.11%', highlightLevel: HighlightLevel.High },
    videoPlays50: { value: '23.81%', highlightLevel: HighlightLevel.Low },
    videoPlays75: { value: '13.64%', highlightLevel: HighlightLevel.Low },
    videoPlays100: { value: '9.44%', highlightLevel: HighlightLevel.Low },
    holdRate: { value: '8.61%', highlightLevel: HighlightLevel.Low },
  },
  {
    key: '12',
    name: { title: 'TTCC_0284', subtitle: '1 ad', image: Image },
    spend: { value: '$9918.68', highlightLevel: HighlightLevel.Low },
    purchaseValue: { value: '$4366.88', highlightLevel: HighlightLevel.High },
    roas: { value: '1.65', highlightLevel: HighlightLevel.Low },
    cpa: { value: '$100.99', highlightLevel: HighlightLevel.Low },
    cpcCostPerClicks: { value: '$2.21', highlightLevel: HighlightLevel.Low },
    cpm: { value: '$84.67', highlightLevel: HighlightLevel.Medium },
    cpcOutboundClicks: { value: '$5.49', highlightLevel: HighlightLevel.Low },
    clickToAtc: { value: '0.49%', highlightLevel: HighlightLevel.Medium },
    atcToPurchase: { value: '30.11%', highlightLevel: HighlightLevel.Low },
    purchases: { value: '18.81%', highlightLevel: HighlightLevel.High },
    firstFrameRetention: {
      value: '80.89%',
      highlightLevel: HighlightLevel.Low,
    },
    thumbstopRate: { value: '51.50%', highlightLevel: HighlightLevel.Low },
    ctrOutboundClicks: {
      value: '2.81%',
      highlightLevel: HighlightLevel.Low,
    },
    clickToPurchase: { value: '4.96%', highlightLevel: HighlightLevel.Medium },
    ctrClickThroughRate: { value: '2.51%', highlightLevel: HighlightLevel.Low },
    videoPlays25: { value: '44.11%', highlightLevel: HighlightLevel.Low },
    videoPlays50: { value: '23.81%', highlightLevel: HighlightLevel.Low },
    videoPlays75: { value: '13.64%', highlightLevel: HighlightLevel.Medium },
    videoPlays100: { value: '9.44%', highlightLevel: HighlightLevel.Low },
    holdRate: { value: '8.61%', highlightLevel: HighlightLevel.High },
  },
];

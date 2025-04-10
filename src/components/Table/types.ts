export enum HighlightLevel {
  Low = 'low',
  Medium = 'medium',
  High = 'high',
}

export type RegularData<T> = {
  value: T;
  highlightLevel: HighlightLevel;
};

export type RegularStringData = RegularData<string>;

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

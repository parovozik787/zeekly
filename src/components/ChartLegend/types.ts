export const enum LegendType {
  Bar = 'bar',
  Line = 'line',
}

export type LegendData = {
  name: string;
  type: LegendType;
  color: string;
};

export const enum LegendName {
  Spend = 'Spend',
  Conversations = 'Conversations',
  CPA = 'CPA',
}

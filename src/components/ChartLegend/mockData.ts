import { spendColor, conversionsColor, cpaColor } from '../ChartBlock/mockData';
import { LegendData, LegendName, LegendType } from './types';

const legendData: LegendData[] = [
  { name: LegendName.Spend, type: LegendType.Bar, color: spendColor },
  {
    name: LegendName.Conversions,
    type: LegendType.Bar,
    color: conversionsColor,
  },
  { name: LegendName.CPA, type: LegendType.Line, color: cpaColor },
];

const initialLegendSelection = legendData.reduce(
  (acc, { name }) => {
    acc[name] = true;
    return acc;
  },
  {} as Record<LegendData['name'], boolean>
);

export { legendData, initialLegendSelection };

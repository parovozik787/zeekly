import { LegendType } from '../ChartLegend/types';

import './LegendIcon.scss';

type LegendIconProps = {
  color?: string;
  type?: LegendType;
};

const LegendIcon = ({
  color = '#000',
  type = LegendType.Bar,
}: LegendIconProps) => {
  return (
    <div
      className={`legend-icon legend-icon--${type}`}
      style={{ backgroundColor: color }}
    />
  );
};

export default LegendIcon;

import clsx from 'clsx';

import './Column.scss';
import { HighlightLevel } from '../data';
import { Typography } from '../../Typography/Typography';

type ColumnProps = {
  text: string;
  highlightLevel: HighlightLevel;
};

const Column = ({ text, highlightLevel }: ColumnProps) => {
  const columnClassName = clsx('column', {
    'column--low': highlightLevel === HighlightLevel.Low,
    'column--medium': highlightLevel === HighlightLevel.Medium,
    'column--high': highlightLevel === HighlightLevel.High,
  });

  return (
    <div className={columnClassName}>
      <Typography weight="500" as="span">
        {text}
      </Typography>
    </div>
  );
};

export default Column;

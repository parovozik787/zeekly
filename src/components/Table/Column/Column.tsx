import clsx from 'clsx';

import { Typography } from '../../Typography/Typography';

import { HighlightLevel } from '../types';

import './Column.scss';

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

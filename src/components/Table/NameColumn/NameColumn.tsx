import { Flex, Tooltip } from 'antd';

import { myClamp } from '../../../shared/utils';
import { Typography } from '../../Typography/Typography';
import './NameColumn.scss';

const NameColumn = ({
  title,
  subtitle,
  image,
}: {
  title: string;
  subtitle: string;
  image?: string;
}) => {
  return (
    <Tooltip title={title}>
      <Flex align="center" gap={myClamp(10)} className="nameColumn">
        <img src={image} alt={title} className="nameColumn__image" />
        <Flex
          vertical
          gap={myClamp(6)}
          style={{ maxWidth: `calc(100% - ${myClamp(62)})` }}
        >
          <Typography weight="600" className="nameColumn__title">
            {title}
          </Typography>
          <Typography color="shark">{subtitle}</Typography>
        </Flex>
      </Flex>
    </Tooltip>
  );
};

export default NameColumn;

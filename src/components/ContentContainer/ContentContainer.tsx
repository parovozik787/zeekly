import { Flex } from 'antd';

import { myClamp } from '../../shared/utils';

import './ContentContainer.scss';

type ContentContainerProps = {
  children: React.ReactNode;
};

export const ContentContainer = ({ children }: ContentContainerProps) => {
  return (
    <Flex gap={myClamp(40)} vertical className="content-container">
      {children}
    </Flex>
  );
};

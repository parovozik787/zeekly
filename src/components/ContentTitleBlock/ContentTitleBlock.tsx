import { Flex } from 'antd';

import { SelectorButton } from '../SelectorButton/SelectorButton';
import { Typography } from '../Typography/Typography';

import { myClamp } from '../../shared/utils';

import './ContentTitleBlock.scss';

export const ContentTitleBlock = () => {
  return (
    <Flex
      gap={myClamp(8)}
      justify="space-between"
      align="center"
      className="content-title-block"
    >
      <Flex gap={myClamp(8)} justify="space-between" align="center">
        <Typography size="24" weight="600" as="h1">
          Overview
        </Typography>
        <svg
          className="content-title-block__title-icon"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="32" height="32" rx="8" fill="#FAFBFF" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.2932 12.7048L11.2767 17.7213C11.0895 17.9085 10.9715 18.1538 10.9422 18.417L10.6115 21.3848L13.5818 21.056C13.8453 21.0269 14.091 20.9089 14.2784 20.7214L19.2941 15.7058L16.2932 12.7048ZM20.2369 14.763L17.236 11.762L18.6614 10.3366C19.117 9.88103 19.8556 9.88103 20.3112 10.3366L21.6623 11.6877C22.1179 12.1433 22.1179 12.882 21.6623 13.3376L20.2369 14.763ZM21.254 9.39383C20.2777 8.41753 18.6948 8.41753 17.7185 9.39383L10.3339 16.7784C9.93272 17.1796 9.67993 17.7054 9.61708 18.2693L9.2171 21.8582C9.15796 22.3889 9.60622 22.8375 10.137 22.7788L13.7285 22.3813C14.2931 22.3188 14.8196 22.0659 15.2212 21.6642L22.6051 14.2804C23.5814 13.3041 23.5814 11.7212 22.6051 10.7449L21.254 9.39383Z"
            fill="#6C6C6C"
          />
        </svg>
      </Flex>
      <SelectorButton />
    </Flex>
  );
};

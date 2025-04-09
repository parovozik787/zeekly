import './assets/styles/globals.scss';
import './assets/styles/stylestest.scss';
import { Flex } from 'antd';

import Sidebar from './components/Sidebar/Sidebar';
import Table from './components/Table/Table';
import { ContentTitleBlock } from './components/ContentTitleBlock/ContentTitleBlock';
import { myClamp } from './shared/utils';
import { QuickActionsBlock } from './components/QuickActionsBlock/QuickActionsBlock';
import { MetricsBlock } from './components/MetricsBlock/MetricsBlock';
import Chart from './components/ChartBlock/ChartBlock';

function App() {
  return (
    <Flex>
      <Sidebar />
      <Flex gap={myClamp(40)} vertical className="main-content">
        <Flex vertical gap={myClamp(10)}>
          <Flex vertical gap={myClamp(24)}>
            <ContentTitleBlock />
            <MetricsBlock />
          </Flex>
          <Chart />
        </Flex>
        <Flex vertical gap={myClamp(24)}>
          <QuickActionsBlock />
        </Flex>
        <Flex vertical gap={myClamp(24)}>
          <Table />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default App;

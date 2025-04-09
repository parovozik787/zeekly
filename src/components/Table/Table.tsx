import { Table as AntdTable } from 'antd';
import type { TableProps } from 'antd';

import Column from './Column/Column';
import NameColumn from './NameColumn/NameColumn';
import { DataType, data } from './data';
import './Table.scss';

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    ellipsis: true,
    render: ({ title, subtitle, image }) => (
      <NameColumn title={title} subtitle={subtitle} image={image} />
    ),
  },
  {
    title: 'Spend',
    dataIndex: 'spend',
    key: 'spend',
    ellipsis: true,
    render: ({ value, highlightLevel }) => (
      <Column text={value} highlightLevel={highlightLevel} />
    ),
  },
  {
    title: 'Purchase value',
    dataIndex: 'purchaseValue',
    key: 'purchaseValue',
    ellipsis: true,
    render: ({ value, highlightLevel }) => (
      <Column text={value} highlightLevel={highlightLevel} />
    ),
  },
  {
    title: 'ROAS',
    dataIndex: 'roas',
    key: 'roas',
    ellipsis: true,
    render: ({ value, highlightLevel }) => (
      <Column text={value} highlightLevel={highlightLevel} />
    ),
  },
  {
    title: 'CPA',
    dataIndex: 'cpa',
    key: 'cpa',
    ellipsis: true,
    render: ({ value, highlightLevel }) => (
      <Column text={value} highlightLevel={highlightLevel} />
    ),
  },
  {
    title: 'CPC (Cost per Clicks)',
    dataIndex: 'cpcCostPerClicks',
    key: 'cpcCostPerClicks',
    ellipsis: true,
    render: ({ value, highlightLevel }) => (
      <Column text={value} highlightLevel={highlightLevel} />
    ),
  },
  {
    title: 'CPM',
    dataIndex: 'cpm',
    key: 'cpm',
    ellipsis: true,
    render: ({ value, highlightLevel }) => (
      <Column text={value} highlightLevel={highlightLevel} />
    ),
  },
  {
    title: 'CPC (Outbound Clicks)',
    dataIndex: 'cpcOutboundClicks',
    key: 'cpcOutboundClicks',
    ellipsis: true,
    render: ({ value, highlightLevel }) => (
      <Column text={value} highlightLevel={highlightLevel} />
    ),
  },
  {
    title: 'Click to ATC',
    dataIndex: 'clickToAtc',
    key: 'clickToAtc',
    ellipsis: true,
    render: ({ value, highlightLevel }) => (
      <Column text={value} highlightLevel={highlightLevel} />
    ),
  },
  {
    title: 'ATC to purchase',
    dataIndex: 'atcToPurchase',
    key: 'atcToPurchase',
    ellipsis: true,
    render: ({ value, highlightLevel }) => (
      <Column text={value} highlightLevel={highlightLevel} />
    ),
  },
  {
    title: 'Purchases',
    dataIndex: 'purchases',
    key: 'purchases',
    ellipsis: true,
    render: ({ value, highlightLevel }) => (
      <Column text={value} highlightLevel={highlightLevel} />
    ),
  },
  {
    title: '1st Frame Retention',
    dataIndex: 'firstFrameRetention',
    key: 'firstFrameRetention',
    ellipsis: true,
    render: ({ value, highlightLevel }) => (
      <Column text={value} highlightLevel={highlightLevel} />
    ),
  },
  {
    title: 'Thumbstop Rate',
    dataIndex: 'thumbstopRate',
    key: 'thumbstopRate',
    ellipsis: true,
    render: ({ value, highlightLevel }) => (
      <Column text={value} highlightLevel={highlightLevel} />
    ),
  },
  {
    title: 'CTR',
    dataIndex: 'ctrOutboundClicks',
    key: 'ctrOutboundClicks',
    ellipsis: true,
    render: ({ value, highlightLevel }) => (
      <Column text={value} highlightLevel={highlightLevel} />
    ),
  },
  {
    title: 'Click to purchase',
    dataIndex: 'clickToPurchase',
    key: 'clickToPurchase',
    ellipsis: true,
    render: ({ value, highlightLevel }) => (
      <Column text={value} highlightLevel={highlightLevel} />
    ),
  },
  {
    title: 'CTR (Click-Through Rate)',
    dataIndex: 'ctrClickThroughRate',
    key: 'ctrClickThroughRate',
    ellipsis: true,
    render: ({ value, highlightLevel }) => (
      <Column text={value} highlightLevel={highlightLevel} />
    ),
  },
  {
    title: '25% Video plays',
    dataIndex: 'videoPlays25',
    key: 'videoPlays25',
    ellipsis: true,
    render: ({ value, highlightLevel }) => (
      <Column text={value} highlightLevel={highlightLevel} />
    ),
  },
  {
    title: '50% Video plays',
    dataIndex: 'videoPlays50',
    key: 'videoPlays50',
    ellipsis: true,
    render: ({ value, highlightLevel }) => (
      <Column text={value} highlightLevel={highlightLevel} />
    ),
  },
  {
    title: '75% Video plays',
    dataIndex: 'videoPlays75',
    key: 'videoPlays75',
    ellipsis: true,
    render: ({ value, highlightLevel }) => (
      <Column text={value} highlightLevel={highlightLevel} />
    ),
  },
  {
    title: '100% Video plays',
    dataIndex: 'videoPlays100',
    key: 'videoPlays100',
    ellipsis: true,
    render: ({ value, highlightLevel }) => (
      <Column text={value} highlightLevel={highlightLevel} />
    ),
  },
  {
    title: 'Hold rate',
    dataIndex: 'holdRate',
    key: 'holdRate',
    ellipsis: true,
    render: ({ value, highlightLevel }) => (
      <Column text={value} highlightLevel={highlightLevel} />
    ),
  },
];

export default function Table() {
  return (
    <AntdTable<DataType>
      columns={columns}
      dataSource={data}
      pagination={false}
      bordered={false}
      style={{
        height: '100%',
      }}
      scroll={{ x: 'max-content', y: 'auto' }}
      className="table"
    />
  );
}

import { Table as AntdTable } from 'antd';

import { data, columns } from './mockData';
import './Table.scss';

import { DataType } from './types';
import { responsiveSize } from '../../shared/utils';

export default function Table() {
  return (
    <AntdTable<DataType>
      columns={columns}
      dataSource={data}
      pagination={false}
      bordered={false}
      scroll={{ x: 'max-content', y: responsiveSize(705) }}
      className="table"
    />
  );
}

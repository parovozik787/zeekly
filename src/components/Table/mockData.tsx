import type { TableProps } from 'antd';

import NameColumn from './NameColumn/NameColumn';
import Column from './Column/Column';
import Image from '../../assets/images/Rectangle.png';

import { DataType } from './types';
import { HighlightLevel } from './types';

const data: DataType[] = [
  {
    key: '1',
    name: {
      title: 'TTCC_0284TTCC_0284TTCC_0284TTCC_0284',
      subtitle: '1 ad',
      image: Image,
    },
    spend: { value: '$12918.68', highlightLevel: HighlightLevel.Low },
    purchaseValue: { value: '$8366.88', highlightLevel: HighlightLevel.Low },
    roas: { value: '0.65', highlightLevel: HighlightLevel.Low },
    cpa: { value: '$84.99', highlightLevel: HighlightLevel.Medium },
    cpcCostPerClicks: { value: '$4.21', highlightLevel: HighlightLevel.Low },
    cpm: { value: '$62.67', highlightLevel: HighlightLevel.High },
    cpcOutboundClicks: { value: '$2.49', highlightLevel: HighlightLevel.Low },
    clickToAtc: { value: '1.49%', highlightLevel: HighlightLevel.Low },
    atcToPurchase: { value: '44.11%', highlightLevel: HighlightLevel.Low },
    purchases: { value: '23.81%', highlightLevel: HighlightLevel.Low },
    firstFrameRetention: {
      value: '91.89%',
      highlightLevel: HighlightLevel.Medium,
    },
    thumbstopRate: { value: '47.50%', highlightLevel: HighlightLevel.Low },
    ctrOutboundClicks: { value: '1.49%', highlightLevel: HighlightLevel.Low },
    clickToPurchase: { value: '4.96%', highlightLevel: HighlightLevel.Low },
    ctrClickThroughRate: { value: '2.51%', highlightLevel: HighlightLevel.Low },
    videoPlays25: { value: '44.11%', highlightLevel: HighlightLevel.High },
    videoPlays50: { value: '23.81%', highlightLevel: HighlightLevel.Low },
    videoPlays75: { value: '13.64%', highlightLevel: HighlightLevel.Low },
    videoPlays100: { value: '9.44%', highlightLevel: HighlightLevel.Low },
    holdRate: { value: '8.61%', highlightLevel: HighlightLevel.Low },
  },
  {
    key: '2',
    name: { title: 'TTCC_0284', subtitle: '1 ad', image: Image },
    spend: { value: '$9918.68', highlightLevel: HighlightLevel.Low },
    purchaseValue: { value: '$4366.88', highlightLevel: HighlightLevel.High },
    roas: { value: '1.65', highlightLevel: HighlightLevel.Low },
    cpa: { value: '$100.99', highlightLevel: HighlightLevel.Low },
    cpcCostPerClicks: { value: '$2.21', highlightLevel: HighlightLevel.Low },
    cpm: { value: '$84.67', highlightLevel: HighlightLevel.Medium },
    cpcOutboundClicks: { value: '$5.49', highlightLevel: HighlightLevel.Low },
    clickToAtc: { value: '0.49%', highlightLevel: HighlightLevel.Medium },
    atcToPurchase: { value: '30.11%', highlightLevel: HighlightLevel.Low },
    purchases: { value: '18.81%', highlightLevel: HighlightLevel.High },
    firstFrameRetention: {
      value: '80.89%',
      highlightLevel: HighlightLevel.Low,
    },
    thumbstopRate: { value: '51.50%', highlightLevel: HighlightLevel.Low },
    ctrOutboundClicks: {
      value: '2.81%',
      highlightLevel: HighlightLevel.Low,
    },
    clickToPurchase: { value: '4.96%', highlightLevel: HighlightLevel.Medium },
    ctrClickThroughRate: { value: '2.51%', highlightLevel: HighlightLevel.Low },
    videoPlays25: { value: '44.11%', highlightLevel: HighlightLevel.Low },
    videoPlays50: { value: '23.81%', highlightLevel: HighlightLevel.Low },
    videoPlays75: { value: '13.64%', highlightLevel: HighlightLevel.Medium },
    videoPlays100: { value: '9.44%', highlightLevel: HighlightLevel.Low },
    holdRate: { value: '8.61%', highlightLevel: HighlightLevel.Low },
  },
  {
    key: '3',
    name: { title: 'TTCC_0284', subtitle: '1 ad', image: Image },
    spend: { value: '$12918.68', highlightLevel: HighlightLevel.Low },
    purchaseValue: { value: '$8366.88', highlightLevel: HighlightLevel.Low },
    roas: { value: '0.65', highlightLevel: HighlightLevel.Low },
    cpa: { value: '$84.99', highlightLevel: HighlightLevel.Medium },
    cpcCostPerClicks: { value: '$4.21', highlightLevel: HighlightLevel.Low },
    cpm: { value: '$62.67', highlightLevel: HighlightLevel.High },
    cpcOutboundClicks: { value: '$2.49', highlightLevel: HighlightLevel.Low },
    clickToAtc: { value: '1.49%', highlightLevel: HighlightLevel.Low },
    atcToPurchase: { value: '44.11%', highlightLevel: HighlightLevel.Low },
    purchases: { value: '23.81%', highlightLevel: HighlightLevel.Low },
    firstFrameRetention: {
      value: '91.89%',
      highlightLevel: HighlightLevel.Medium,
    },
    thumbstopRate: { value: '47.50%', highlightLevel: HighlightLevel.Low },
    ctrOutboundClicks: { value: '1.49%', highlightLevel: HighlightLevel.Low },
    clickToPurchase: { value: '4.96%', highlightLevel: HighlightLevel.Low },
    ctrClickThroughRate: { value: '2.51%', highlightLevel: HighlightLevel.Low },
    videoPlays25: { value: '44.11%', highlightLevel: HighlightLevel.High },
    videoPlays50: { value: '23.81%', highlightLevel: HighlightLevel.Low },
    videoPlays75: { value: '13.64%', highlightLevel: HighlightLevel.Low },
    videoPlays100: { value: '9.44%', highlightLevel: HighlightLevel.Low },
    holdRate: { value: '8.61%', highlightLevel: HighlightLevel.Low },
  },
  {
    key: '4',
    name: { title: 'TTCC_0284', subtitle: '1 ad', image: Image },
    spend: { value: '$9918.68', highlightLevel: HighlightLevel.Low },
    purchaseValue: { value: '$4366.88', highlightLevel: HighlightLevel.High },
    roas: { value: '1.65', highlightLevel: HighlightLevel.Low },
    cpa: { value: '$100.99', highlightLevel: HighlightLevel.Low },
    cpcCostPerClicks: { value: '$2.21', highlightLevel: HighlightLevel.Low },
    cpm: { value: '$84.67', highlightLevel: HighlightLevel.Medium },
    cpcOutboundClicks: { value: '$5.49', highlightLevel: HighlightLevel.Low },
    clickToAtc: { value: '0.49%', highlightLevel: HighlightLevel.Medium },
    atcToPurchase: { value: '30.11%', highlightLevel: HighlightLevel.Low },
    purchases: { value: '18.81%', highlightLevel: HighlightLevel.High },
    firstFrameRetention: {
      value: '80.89%',
      highlightLevel: HighlightLevel.Low,
    },
    thumbstopRate: { value: '51.50%', highlightLevel: HighlightLevel.Low },
    ctrOutboundClicks: {
      value: '2.81%',
      highlightLevel: HighlightLevel.Low,
    },
    clickToPurchase: { value: '4.96%', highlightLevel: HighlightLevel.Medium },
    ctrClickThroughRate: { value: '2.51%', highlightLevel: HighlightLevel.Low },
    videoPlays25: { value: '44.11%', highlightLevel: HighlightLevel.Low },
    videoPlays50: { value: '23.81%', highlightLevel: HighlightLevel.Low },
    videoPlays75: { value: '13.64%', highlightLevel: HighlightLevel.Medium },
    videoPlays100: { value: '9.44%', highlightLevel: HighlightLevel.Low },
    holdRate: { value: '8.61%', highlightLevel: HighlightLevel.Low },
  },
  {
    key: '5',
    name: { title: 'TTCC_0284', subtitle: '1 ad', image: Image },
    spend: { value: '$12918.68', highlightLevel: HighlightLevel.Low },
    purchaseValue: { value: '$8366.88', highlightLevel: HighlightLevel.Low },
    roas: { value: '0.65', highlightLevel: HighlightLevel.Low },
    cpa: { value: '$84.99', highlightLevel: HighlightLevel.Medium },
    cpcCostPerClicks: { value: '$4.21', highlightLevel: HighlightLevel.Low },
    cpm: { value: '$62.67', highlightLevel: HighlightLevel.High },
    cpcOutboundClicks: { value: '$2.49', highlightLevel: HighlightLevel.Low },
    clickToAtc: { value: '1.49%', highlightLevel: HighlightLevel.Low },
    atcToPurchase: { value: '44.11%', highlightLevel: HighlightLevel.Low },
    purchases: { value: '23.81%', highlightLevel: HighlightLevel.Low },
    firstFrameRetention: {
      value: '91.89%',
      highlightLevel: HighlightLevel.Medium,
    },
    thumbstopRate: { value: '47.50%', highlightLevel: HighlightLevel.Low },
    ctrOutboundClicks: { value: '1.49%', highlightLevel: HighlightLevel.Low },
    clickToPurchase: { value: '4.96%', highlightLevel: HighlightLevel.Low },
    ctrClickThroughRate: { value: '2.51%', highlightLevel: HighlightLevel.Low },
    videoPlays25: { value: '44.11%', highlightLevel: HighlightLevel.High },
    videoPlays50: { value: '23.81%', highlightLevel: HighlightLevel.Low },
    videoPlays75: { value: '13.64%', highlightLevel: HighlightLevel.Low },
    videoPlays100: { value: '9.44%', highlightLevel: HighlightLevel.Low },
    holdRate: { value: '8.61%', highlightLevel: HighlightLevel.Low },
  },
  {
    key: '6',
    name: { title: 'TTCC_0284', subtitle: '1 ad', image: Image },
    spend: { value: '$9918.68', highlightLevel: HighlightLevel.Low },
    purchaseValue: { value: '$4366.88', highlightLevel: HighlightLevel.High },
    roas: { value: '1.65', highlightLevel: HighlightLevel.Low },
    cpa: { value: '$100.99', highlightLevel: HighlightLevel.Low },
    cpcCostPerClicks: { value: '$2.21', highlightLevel: HighlightLevel.Low },
    cpm: { value: '$84.67', highlightLevel: HighlightLevel.Medium },
    cpcOutboundClicks: { value: '$5.49', highlightLevel: HighlightLevel.Low },
    clickToAtc: { value: '0.49%', highlightLevel: HighlightLevel.Medium },
    atcToPurchase: { value: '30.11%', highlightLevel: HighlightLevel.Low },
    purchases: { value: '18.81%', highlightLevel: HighlightLevel.High },
    firstFrameRetention: {
      value: '80.89%',
      highlightLevel: HighlightLevel.Low,
    },
    thumbstopRate: { value: '51.50%', highlightLevel: HighlightLevel.Low },
    ctrOutboundClicks: {
      value: '2.81%',
      highlightLevel: HighlightLevel.Low,
    },
    clickToPurchase: { value: '4.96%', highlightLevel: HighlightLevel.Medium },
    ctrClickThroughRate: { value: '2.51%', highlightLevel: HighlightLevel.Low },
    videoPlays25: { value: '44.11%', highlightLevel: HighlightLevel.Low },
    videoPlays50: { value: '23.81%', highlightLevel: HighlightLevel.Low },
    videoPlays75: { value: '13.64%', highlightLevel: HighlightLevel.Medium },
    videoPlays100: { value: '9.44%', highlightLevel: HighlightLevel.Low },
    holdRate: { value: '8.61%', highlightLevel: HighlightLevel.Low },
  },
  {
    key: '7',
    name: { title: 'TTCC_0284', subtitle: '1 ad', image: Image },
    spend: { value: '$12918.68', highlightLevel: HighlightLevel.Low },
    purchaseValue: { value: '$8366.88', highlightLevel: HighlightLevel.Low },
    roas: { value: '0.65', highlightLevel: HighlightLevel.Low },
    cpa: { value: '$84.99', highlightLevel: HighlightLevel.Medium },
    cpcCostPerClicks: { value: '$4.21', highlightLevel: HighlightLevel.Low },
    cpm: { value: '$62.67', highlightLevel: HighlightLevel.High },
    cpcOutboundClicks: { value: '$2.49', highlightLevel: HighlightLevel.Low },
    clickToAtc: { value: '1.49%', highlightLevel: HighlightLevel.Low },
    atcToPurchase: { value: '44.11%', highlightLevel: HighlightLevel.Low },
    purchases: { value: '23.81%', highlightLevel: HighlightLevel.Low },
    firstFrameRetention: {
      value: '91.89%',
      highlightLevel: HighlightLevel.Medium,
    },
    thumbstopRate: { value: '47.50%', highlightLevel: HighlightLevel.Low },
    ctrOutboundClicks: { value: '1.49%', highlightLevel: HighlightLevel.Low },
    clickToPurchase: { value: '4.96%', highlightLevel: HighlightLevel.Low },
    ctrClickThroughRate: { value: '2.51%', highlightLevel: HighlightLevel.Low },
    videoPlays25: { value: '44.11%', highlightLevel: HighlightLevel.High },
    videoPlays50: { value: '23.81%', highlightLevel: HighlightLevel.Low },
    videoPlays75: { value: '13.64%', highlightLevel: HighlightLevel.Low },
    videoPlays100: { value: '9.44%', highlightLevel: HighlightLevel.Low },
    holdRate: { value: '8.61%', highlightLevel: HighlightLevel.Low },
  },
  {
    key: '8',
    name: { title: 'TTCC_0284', subtitle: '1 ad', image: Image },
    spend: { value: '$9918.68', highlightLevel: HighlightLevel.Low },
    purchaseValue: { value: '$4366.88', highlightLevel: HighlightLevel.High },
    roas: { value: '1.65', highlightLevel: HighlightLevel.Low },
    cpa: { value: '$100.99', highlightLevel: HighlightLevel.Low },
    cpcCostPerClicks: { value: '$2.21', highlightLevel: HighlightLevel.Low },
    cpm: { value: '$84.67', highlightLevel: HighlightLevel.Medium },
    cpcOutboundClicks: { value: '$5.49', highlightLevel: HighlightLevel.Low },
    clickToAtc: { value: '0.49%', highlightLevel: HighlightLevel.Medium },
    atcToPurchase: { value: '30.11%', highlightLevel: HighlightLevel.Low },
    purchases: { value: '18.81%', highlightLevel: HighlightLevel.High },
    firstFrameRetention: {
      value: '80.89%',
      highlightLevel: HighlightLevel.Low,
    },
    thumbstopRate: { value: '51.50%', highlightLevel: HighlightLevel.Low },
    ctrOutboundClicks: {
      value: '2.81%',
      highlightLevel: HighlightLevel.Low,
    },
    clickToPurchase: { value: '4.96%', highlightLevel: HighlightLevel.Medium },
    ctrClickThroughRate: { value: '2.51%', highlightLevel: HighlightLevel.Low },
    videoPlays25: { value: '44.11%', highlightLevel: HighlightLevel.Low },
    videoPlays50: { value: '23.81%', highlightLevel: HighlightLevel.Low },
    videoPlays75: { value: '13.64%', highlightLevel: HighlightLevel.Medium },
    videoPlays100: { value: '9.44%', highlightLevel: HighlightLevel.Low },
    holdRate: { value: '8.61%', highlightLevel: HighlightLevel.Low },
  },
  {
    key: '9',
    name: { title: 'TTCC_0284', subtitle: '1 ad', image: Image },
    spend: { value: '$12918.68', highlightLevel: HighlightLevel.Low },
    purchaseValue: { value: '$8366.88', highlightLevel: HighlightLevel.Low },
    roas: { value: '0.65', highlightLevel: HighlightLevel.Low },
    cpa: { value: '$84.99', highlightLevel: HighlightLevel.Medium },
    cpcCostPerClicks: { value: '$4.21', highlightLevel: HighlightLevel.Low },
    cpm: { value: '$62.67', highlightLevel: HighlightLevel.High },
    cpcOutboundClicks: { value: '$2.49', highlightLevel: HighlightLevel.Low },
    clickToAtc: { value: '1.49%', highlightLevel: HighlightLevel.Low },
    atcToPurchase: { value: '44.11%', highlightLevel: HighlightLevel.Low },
    purchases: { value: '23.81%', highlightLevel: HighlightLevel.Low },
    firstFrameRetention: {
      value: '91.89%',
      highlightLevel: HighlightLevel.Medium,
    },
    thumbstopRate: { value: '47.50%', highlightLevel: HighlightLevel.Low },
    ctrOutboundClicks: { value: '1.49%', highlightLevel: HighlightLevel.Low },
    clickToPurchase: { value: '4.96%', highlightLevel: HighlightLevel.Low },
    ctrClickThroughRate: { value: '2.51%', highlightLevel: HighlightLevel.Low },
    videoPlays25: { value: '44.11%', highlightLevel: HighlightLevel.High },
    videoPlays50: { value: '23.81%', highlightLevel: HighlightLevel.Low },
    videoPlays75: { value: '13.64%', highlightLevel: HighlightLevel.Low },
    videoPlays100: { value: '9.44%', highlightLevel: HighlightLevel.Low },
    holdRate: { value: '8.61%', highlightLevel: HighlightLevel.Low },
  },
  {
    key: '10',
    name: { title: 'TTCC_0284', subtitle: '1 ad', image: Image },
    spend: { value: '$9918.68', highlightLevel: HighlightLevel.Low },
    purchaseValue: { value: '$4366.88', highlightLevel: HighlightLevel.High },
    roas: { value: '1.65', highlightLevel: HighlightLevel.Low },
    cpa: { value: '$100.99', highlightLevel: HighlightLevel.Low },
    cpcCostPerClicks: { value: '$2.21', highlightLevel: HighlightLevel.Low },
    cpm: { value: '$84.67', highlightLevel: HighlightLevel.Medium },
    cpcOutboundClicks: { value: '$5.49', highlightLevel: HighlightLevel.Low },
    clickToAtc: { value: '0.49%', highlightLevel: HighlightLevel.Medium },
    atcToPurchase: { value: '30.11%', highlightLevel: HighlightLevel.Low },
    purchases: { value: '18.81%', highlightLevel: HighlightLevel.High },
    firstFrameRetention: {
      value: '80.89%',
      highlightLevel: HighlightLevel.Low,
    },
    thumbstopRate: { value: '51.50%', highlightLevel: HighlightLevel.Low },
    ctrOutboundClicks: {
      value: '2.81%',
      highlightLevel: HighlightLevel.Low,
    },
    clickToPurchase: { value: '4.96%', highlightLevel: HighlightLevel.Medium },
    ctrClickThroughRate: { value: '2.51%', highlightLevel: HighlightLevel.Low },
    videoPlays25: { value: '44.11%', highlightLevel: HighlightLevel.Low },
    videoPlays50: { value: '23.81%', highlightLevel: HighlightLevel.Low },
    videoPlays75: { value: '13.64%', highlightLevel: HighlightLevel.Medium },
    videoPlays100: { value: '9.44%', highlightLevel: HighlightLevel.Low },
    holdRate: { value: '8.61%', highlightLevel: HighlightLevel.Low },
  },
  {
    key: '11',
    name: { title: 'TTCC_0284', subtitle: '1 ad', image: Image },
    spend: { value: '$12918.68', highlightLevel: HighlightLevel.Low },
    purchaseValue: { value: '$8366.88', highlightLevel: HighlightLevel.Low },
    roas: { value: '0.65', highlightLevel: HighlightLevel.Low },
    cpa: { value: '$84.99', highlightLevel: HighlightLevel.Medium },
    cpcCostPerClicks: { value: '$4.21', highlightLevel: HighlightLevel.Low },
    cpm: { value: '$62.67', highlightLevel: HighlightLevel.High },
    cpcOutboundClicks: { value: '$2.49', highlightLevel: HighlightLevel.Low },
    clickToAtc: { value: '1.49%', highlightLevel: HighlightLevel.Low },
    atcToPurchase: { value: '44.11%', highlightLevel: HighlightLevel.Low },
    purchases: { value: '23.81%', highlightLevel: HighlightLevel.Low },
    firstFrameRetention: {
      value: '91.89%',
      highlightLevel: HighlightLevel.Medium,
    },
    thumbstopRate: { value: '47.50%', highlightLevel: HighlightLevel.Low },
    ctrOutboundClicks: { value: '1.49%', highlightLevel: HighlightLevel.Low },
    clickToPurchase: { value: '4.96%', highlightLevel: HighlightLevel.Low },
    ctrClickThroughRate: { value: '2.51%', highlightLevel: HighlightLevel.Low },
    videoPlays25: { value: '44.11%', highlightLevel: HighlightLevel.High },
    videoPlays50: { value: '23.81%', highlightLevel: HighlightLevel.Low },
    videoPlays75: { value: '13.64%', highlightLevel: HighlightLevel.Low },
    videoPlays100: { value: '9.44%', highlightLevel: HighlightLevel.Low },
    holdRate: { value: '8.61%', highlightLevel: HighlightLevel.Low },
  },
  {
    key: '12',
    name: { title: 'TTCC_0284', subtitle: '1 ad', image: Image },
    spend: { value: '$9918.68', highlightLevel: HighlightLevel.Low },
    purchaseValue: { value: '$4366.88', highlightLevel: HighlightLevel.High },
    roas: { value: '1.65', highlightLevel: HighlightLevel.Low },
    cpa: { value: '$100.99', highlightLevel: HighlightLevel.Low },
    cpcCostPerClicks: { value: '$2.21', highlightLevel: HighlightLevel.Low },
    cpm: { value: '$84.67', highlightLevel: HighlightLevel.Medium },
    cpcOutboundClicks: { value: '$5.49', highlightLevel: HighlightLevel.Low },
    clickToAtc: { value: '0.49%', highlightLevel: HighlightLevel.Medium },
    atcToPurchase: { value: '30.11%', highlightLevel: HighlightLevel.Low },
    purchases: { value: '18.81%', highlightLevel: HighlightLevel.High },
    firstFrameRetention: {
      value: '80.89%',
      highlightLevel: HighlightLevel.Low,
    },
    thumbstopRate: { value: '51.50%', highlightLevel: HighlightLevel.Low },
    ctrOutboundClicks: {
      value: '2.81%',
      highlightLevel: HighlightLevel.Low,
    },
    clickToPurchase: { value: '4.96%', highlightLevel: HighlightLevel.Medium },
    ctrClickThroughRate: { value: '2.51%', highlightLevel: HighlightLevel.Low },
    videoPlays25: { value: '44.11%', highlightLevel: HighlightLevel.Low },
    videoPlays50: { value: '23.81%', highlightLevel: HighlightLevel.Low },
    videoPlays75: { value: '13.64%', highlightLevel: HighlightLevel.Medium },
    videoPlays100: { value: '9.44%', highlightLevel: HighlightLevel.Low },
    holdRate: { value: '8.61%', highlightLevel: HighlightLevel.High },
  },
];

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

export { data, columns };

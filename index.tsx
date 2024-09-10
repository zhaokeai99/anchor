import Anchor from '@/components/Anchor';
import ProCardPlus from '@/components/ProCardPlus';
import { cardGutter, contentPadding } from '@/themes';
import ProCard from '@ant-design/pro-card';
import TitleExtra from './TitleExtra';

const DetailDemo = () => {
  const paddingStyle = () => {
    if (!window.__POWERED_BY_QIANKUN__) {
      return contentPadding;
    } else {
      return 0;
    }
  };

  return (
    <ProCard
      ghost
      size="small"
      gutter={[0, cardGutter]}
      style={{ padding: paddingStyle() }}
      wrap
    >
      <ProCard colSpan={6}>
        <Anchor
          data={[
            {
              id: 'annualizedReturn',
              title: '股票速览',
            },
            {
              id: 'incomeRate',
              title: '大事提醒',
            },
            {
              id: 'unitNavAmt',
              title: '公司信息',
            },
            {
              id: 'pullBack',
              title: '十大股东',
            },
            {
              id: 'fundQuota',
              title: '每日行情',
            },
            {
              id: 'marketFundInfo',
              title: '业绩预告',
            },
            {
              id: 'fundShare',
              title: '锚点测试1',
            },
            {
              id: 'navRegff',
              title: '锚点测试2',
            },
          ]}
        />
      </ProCard>
      <ProCard colSpan={18} wrap bodyStyle={{ padding: 0 }}>
        <ProCardPlus
          title="股票速览"
          style={{ height: '1000px', background: 'pink' }}
          // extra={<TitleExtra id="annualizedReturn" />}
          extra={<div id="annualizedReturn" className="pk-title-extra" />}
        ></ProCardPlus>
        <ProCardPlus
          title="大事提醒"
          style={{ height: '200px' }}
          extra={<TitleExtra id="incomeRate" />}
        ></ProCardPlus>
        <ProCardPlus
          title="公司信息"
          style={{ height: '200px' }}
          // extra={<TitleExtra id="unitNavAmt" />}
          extra={<div id="unitNavAmt" className="pk-title-extra" />}
        ></ProCardPlus>
        <ProCardPlus
          title="十大股东"
          style={{ height: '200px' }}
          // extra={<TitleExtra id="pullBack" />}
          extra={<div id="pullBack" className="pk-title-extra" />}
        ></ProCardPlus>
        <ProCardPlus
          title="每日行情"
          style={{ height: '400px' }}
          extra={<TitleExtra id="fundQuota" />}
          // extra={<div id="fundQuota" className="pk-title-extra" />}
        ></ProCardPlus>
        <ProCardPlus
          title="业绩预告"
          style={{ height: '400px' }}
          extra={<TitleExtra id="marketFundInfo" />}
          // extra={<div id="marketFundInfo" className="pk-title-extra" />}
        ></ProCardPlus>
        <ProCardPlus
          title="锚点测试1"
          style={{ height: '800px' }}
          extra={<TitleExtra id="fundShare" />}
          // extra={<div id="fundShare" className="pk-title-extra" />}
        ></ProCardPlus>
        <ProCardPlus
          title="锚点测试2"
          style={{ height: '500px' }}
          extra={<TitleExtra id="navRegff" />}
          // extra={<div id="navRegff" className="pk-title-extra" />}
        ></ProCardPlus>
      </ProCard>
    </ProCard>
  );
};

export default DetailDemo;

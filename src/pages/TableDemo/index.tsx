import { ProColumns } from '@ant-design/pro-components';
import { Button } from 'antd';
import { Table } from 'bms-components';
const item = {
  supplierCode: 101803,
  supplierName: '101803',
  status: '1',
  country: 'China',
  onBoardedDate: '2021-01-01 00:00:00',
  solution: '132423',
  time: '2021-01-01 00:00:00',
  address: '132423',
};
const data = new Array(50).fill(item).map((item, index) => ({
  ...item,
  status: index % 3 ? '2' : '1',
  supplierCode: +item.supplierCode + index,
}));

export default () => {
  const columns: ProColumns<any>[] = [
    {
      title: 'supplierCode',
      dataIndex: 'supplierCode',
      key: 'supplierCode',
      sorter: true,
      fixed: 'left',
      width: 120,
    },
    {
      title: 'supplierName',
      dataIndex: 'supplierName',
      key: 'supplierName',
    },
    {
      title: 'status',
      dataIndex: 'status',
      key: 'status',
      valueType: 'select',
      filters: true,
      onFilter: true,
      tip: '标题过长会自动收缩',
      valueEnum: {
        '1': { text: 'Done' },
        '2': { text: 'Process' },
      },
    },
    {
      title: 'country',
      dataIndex: 'country',
      key: 'country',
    },
    {
      title: 'onBoardedDate',
      dataIndex: 'onBoardedDate',
      key: 'onBoardedDate',
    },
    {
      title: 'solution',
      dataIndex: 'solution',
      key: 'solution',
    },
    {
      title: 'time',
      dataIndex: 'time',
      key: 'time',
    },
    {
      title: 'address',
      width: 80,
      dataIndex: 'address',
      key: 'address',
      fixed: 'right',
    },
  ];
  return (
    <Table
      columns={columns}
      headerTitle="Table Title"
      cardBordered
      rowBordered={false}
      rowKey="supplierCode"
      request={(params, sorter, filter) => {
        // 表单搜索项会从 params 传入，传递给后端接口。
        console.log(params, sorter, filter);
        return Promise.resolve({
          data: data,
          success: true,
        });
      }}
      scroll={{ x: 1300, y: 240 }}
      pagination={{
        pageSize: 20,
        onChange: (page) => console.log(page),
      }}
      toolBarRender={() => [
        <Button
          key="default"
          style={{}}
          type="primary"
          danger
          onClick={() => {
            alert('add');
          }}
        >
          Add Ticket
        </Button>,
        <Button
          key="primary"
          type="primary"
          ghost
          onClick={() => {
            alert('add');
          }}
        >
          Add Ticket
        </Button>,
      ]}
      search={false}
    />
  );
};

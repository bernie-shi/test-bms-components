import { ProColumns } from '@ant-design/pro-components';
import { Table as AntdTable, Button, Input } from 'antd';
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
      filterDropdown: () => (
        <div style={{ padding: 8 }}>
          <Input style={{ width: 188, marginBlockEnd: 8, display: 'block' }} />
        </div>
      ),
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
      rowSelection={{
        // 自定义选择项参考: https://ant.design/components/table-cn/#components-table-demo-row-selection-custom
        // 注释该行则默认不显示下拉选项
        selections: [AntdTable.SELECTION_ALL, AntdTable.SELECTION_INVERT],
        defaultSelectedRowKeys: [1],
      }}
      rowBordered={false}
      request={(params, sorter, filter) => {
        // 表单搜索项会从 params 传入，传递给后端接口。
        console.log(params, sorter, filter);
        return Promise.resolve({
          data: data,
          success: true,
        });
      }}
      scroll={{ x: 1800, y: 240 }}
      pagination={{
        pageSize: 20,
        onChange: (page) => console.log(page),
      }}
      rowKey="supplierCode"
      toolBarRender={() => [
        <Button
          key="default"
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

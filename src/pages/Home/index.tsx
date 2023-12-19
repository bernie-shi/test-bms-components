import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { ConfigProvider } from 'antd';
import TableDemo from '../TableDemo';
import TableDemo2 from '../TableDemo2';
import styles from './index.less';

const HomePage: React.FC = () => {
  const { name } = useModel('global');
  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <ConfigProvider
          theme={{
            components: {
              Button: {
                // colorPrimary: '#fF6000',
                // dangerColor: '#fF6000',
                colorError: '#fF6000',
              },
            },
          }}
        >
          <h2>Table1</h2>
          <TableDemo />
          <h2 style={{ marginTop: 40 }}>Table2</h2>
          <TableDemo2 />
        </ConfigProvider>
      </div>
    </PageContainer>
  );
};

export default HomePage;

import { useState } from 'react';
import RouteApp from './routes';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  CopyOutlined,
  DatabaseOutlined,
  FileOutlined,
  LogoutOutlined,
  MailOutlined,
  PieChartOutlined,
  SettingOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, Space } from 'antd';
import Search from 'antd/lib/transfer/search';
import { Link } from 'react-router-dom';
const { Header, Content, Sider, Footer } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <Layout>
        <Sider theme='light' collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} style={{
          overflow: 'auto',
          height: '100vh',
        }} >
          <div className="logo" />
          <Menu theme="light" defaultSelectedKeys={['1']} mode="inline" >
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              <Link to="/" />
              Dashboard
            </Menu.Item>
            <Menu.SubMenu title="Data Master" icon={<CopyOutlined />}>
              <Menu.Item>
                <Link to="/grup" />
                Grup Pengguna
              </Menu.Item>
              <Menu.Item>
                <Link to="/pengguna" />
                Pengguna
              </Menu.Item>
              <Menu.Item>
                <Link to="/departemen" />
                Department
              </Menu.Item>
              <Menu.Item>
                <Link to="/posisi" />
                Posisi
              </Menu.Item>
              <Menu.Item>
                <Link to="/karyawan" />
                Karyawan
              </Menu.Item>
              <Menu.Item>
                <Link to="/pelanggan" />
                Pelanggan
              </Menu.Item>
              <Menu.Item>
                <Link to="/gudang" />
                Gudang
              </Menu.Item>
              <Menu.Item>
                <Link to="/grade" />
                Grade
              </Menu.Item>
              <Menu.Item>
                <Link to="/bagian" />
                Bagian
              </Menu.Item>
              <Menu.Item>
                <Link to="/kategori" />
                Kategori
              </Menu.Item>
              <Menu.Item>
                <Link to="/merek" />
                Merk Produk
              </Menu.Item>
              <Menu.Item>
                <Link to="/produk" />
                Produk
              </Menu.Item>
              <Menu.Item>
                <Link to="/tipe" />
                Tipe Produk
              </Menu.Item>
              <Menu.Item>
                <Link to="/pajak" />
                Pajak
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu title="Inventory" icon={<DatabaseOutlined />}>
              <Menu.Item>
                <Link to="/adjustment" />
                Adjustment
              </Menu.Item>
            </Menu.SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header
            className="site-layout-sub-header-background"
            style={{
              padding: 0,
            }}
          >
            <Menu
              mode="horizontal"
            // defaultSelectedKeys={['mail']}
            >
              <Space
                style={{
                  marginLeft: 20,
                }}
              >
                <Breadcrumb
                  style={{
                    margin: '5px',
                    marginRight: '20px',
                  }}
                >
                  <Breadcrumb.Item>User</Breadcrumb.Item>
                  <Breadcrumb.Item>Bill</Breadcrumb.Item>
                </Breadcrumb>
                <Search
                  placeholder="input search text"
                  allowClear
                  enterButton="Search"
                  size="large"
                // onSearch={onSearch}
                />
              </Space>
              <Menu.Item key="mail" icon={<MailOutlined />}>
                Navigation One
              </Menu.Item>
              <Menu.SubMenu key="SubMenu" title="User" icon={<UserOutlined />}>
                <Menu.Item key="two" icon={<SettingOutlined />}>
                  Profile
                </Menu.Item>
                <Menu.Item key="three" icon={<LogoutOutlined />}>
                  Logout
                </Menu.Item>
              </Menu.SubMenu>
            </Menu>
          </Header>
          <Content
            style={{
              margin: '5px 16px 0',
            }}
          >
            <div
              className="site-layout-background"
              style={{
                padding: 20,
                minHeight: 360,
              }}
            >

              <RouteApp />
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

export default App;

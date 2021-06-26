import React, { useCallback, useEffect, useState } from 'react'
import { Layout, Menu } from 'antd'
import 'antd/dist/antd.css'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined
} from '@ant-design/icons'
import { Link, withRouter, RouteComponentProps } from 'react-router-dom'
// import { renderRoutes } from 'react-router-config'
import Routes from './router'

interface LeftMenu {
  key: string
  icon: any
  path: string
  label: string
}
const menus: LeftMenu[] = [
  {
    key: 'product',
    icon: <UserOutlined />,
    path: '/product',
    label: 'product'
  },
  {
    key: 'help',
    icon: <VideoCameraOutlined />,
    path: '/help',
    label: 'help'
  },
  {
    key: 'about-us',
    icon: <UploadOutlined />,
    path: '/about-us',
    label: 'about-us'
  }
]

const { Header, Sider, Content } = Layout

const App: React.FC<RouteComponentProps> = props => {
  const [collapsed, setCollapsed] = useState(false)
  const [selectedKeys, setSelectedKeys] = useState<string[] | undefined>(undefined)
  const toggle = () => {
    setCollapsed(!collapsed)
  }
  const getDefaultSelectedKeys = () => {
    const { location } = props
    let found: LeftMenu | undefined = menus.find((e: LeftMenu) => e.path === location.pathname)
    if (found) {
      setSelectedKeys([found.key])
    }
  }
  const handleClick = useCallback(e => {
    setSelectedKeys([e.key])
  }, [])
  useEffect(() => {
    getDefaultSelectedKeys()
  }, [])
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" style={{ height: 64 }} />
        <Menu theme="dark" mode="inline" selectedKeys={selectedKeys} onClick={handleClick}>
          {menus.map(menu => {
            return (
              <Menu.Item key={menu.key} icon={menu.icon}>
                <Link to={menu.path}>{menu.label}</Link>
              </Menu.Item>
            )
          })}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: toggle
          })}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280
          }}
        >
          <Routes />
        </Content>
      </Layout>
    </Layout>
  )
}

export default withRouter(App)

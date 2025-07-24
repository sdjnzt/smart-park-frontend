import React, { useState } from 'react';
import { Layout, Menu, theme, Avatar, Dropdown, Space, Badge } from 'antd';
import {
  DashboardOutlined,
  TeamOutlined,
  ThunderboltOutlined,
  ToolOutlined,
  FireOutlined,
  BankOutlined,
  CarOutlined,
  SafetyOutlined,
  VideoCameraOutlined,
  BellOutlined,
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
import Dashboard from './pages/dd/Dashboard';
import VisitorLayout from './pages/VisitorLayout';
import EnergyLayout from './pages/energy/EnergyLayout';
import Overview from './pages/energy/Overview';
import Water from './pages/energy/Water';
import Gas from './pages/energy/Gas';
import Stat from './pages/energy/Stat';
import FireLayout from './pages/fire/FireLayout';
import OverviewFire from './pages/fire/Overview';
import Alarm from './pages/fire/Alarm';
import DeviceFire from './pages/fire/Device';
import StatFire from './pages/fire/Stat';
import OfficeLayout from './pages/office/OfficeLayout';
import Meeting from './pages/office/Meeting';
import MeetingRoom from './pages/office/MeetingRoom';
import MeetingSignIn from './pages/office/MeetingSignIn';
import Attendance from './pages/office/Attendance';
import Supply from './pages/office/Supply';
import Announcement from './pages/office/Announcement';
import ParkingLayout from './pages/parking/ParkingLayout';
import Gate from './pages/parking/Gate';
import Area from './pages/parking/Area';
import Parking from './pages/parking/Parking';
import AccessLayout from './pages/AccessLayout';
import Door from './pages/access/Door';
import Auth from './pages/access/Auth';

import StatAccess from './pages/access/Stat';
import VideoLayout from './pages/video/VideoLayout';
import CameraList from './pages/video/CameraList';
import LiveView from './pages/video/LiveView';
import Playback from './pages/video/Playback';

import Appointment from './pages/visitor/Appointment';
import Audit from './pages/visitor/Audit';
import Blacklist from './pages/visitor/Blacklist';
import MaintenanceLayout from './pages/maintenance/MaintenanceLayout';
import OverviewMaintenance from './pages/maintenance/Overview';
import Task from './pages/maintenance/Task';
import Device from './pages/maintenance/Device';
import StatMaintenance from './pages/maintenance/Stat';
import Fee from './pages/parking/Fee';
import Control from './pages/parking/Control';
import Speed from './pages/parking/Speed';
import StatVisitor from './pages/visitor/Stat';
import ThermalView from './pages/video/ThermalView';
import SystemLayout from './pages/system/SystemLayout';
import UserManage from './pages/system/UserManage';
import RoleManage from './pages/system/RoleManage';
import LogAudit from './pages/system/LogAudit';
import SystemSetting from './pages/system/SystemSetting';
import VisitorRecord from './pages/visitor/Record';
import AccessRecord from './pages/access/Record';
import Permission from './pages/visitor/Permission';
import DeviceMonitor from './pages/maintenance/DeviceMonitor';
import AlarmCenter from './pages/maintenance/AlarmCenter';
import InspectionManage from './pages/maintenance/InspectionManage';
import Welcome from './pages/Welcome';
import './App.css';

const { Header, Sider, Content } = Layout;

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [openKeys, setOpenKeys] = useState([]);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const menuItems = [
    {
      key: '/',
      icon: <DashboardOutlined />,
      label: '仪表盘',
    },
    {
      key: '/visitor',
      icon: <TeamOutlined />,
      label: '访客管理',
      children: [
        { key: '/visitor/appointment', label: '访客预约' },
        { key: '/visitor/audit', label: '审核管理' },
        { key: '/visitor/auth', label: '权限下发' },
        { key: '/visitor/record', label: '访客记录' },
        { key: '/visitor/stat', label: '统计分析' },
        { key: '/visitor/blacklist', label: '黑名单' },
      ]
    },
    {
      key: '/energy',
      icon: <ThunderboltOutlined />,
      label: '能源管理',
      children: [
        { key: '/energy/overview', label: '用电管理' },
        { key: '/energy/water', label: '用水管理' },
        { key: '/energy/gas', label: '用气管理' },
        { key: '/energy/stat', label: '统计分析' },
      ]
    },
    {
      key: '/maintenance',
      icon: <ToolOutlined />,
      label: '维护管理',
      children: [
        // { key: '/maintenance/overview', label: '总览' },
        { key: '/maintenance/device-monitor', label: '设备监控' },
        { key: '/maintenance/alarm-center', label: '告警中心' },
        { key: '/maintenance/inspection-manage', label: '巡检管理' },
        // { key: '/maintenance/task', label: '任务管理' },
        { key: '/maintenance/device', label: '设备管理' },
        // { key: '/maintenance/stat', label: '统计分析' },
      ]
    },
    {
      key: '/fire',
      icon: <FireOutlined />,
      label: '消防管理',
      children: [
        { key: '/fire/overview', label: '总览' },
        { key: '/fire/alarm', label: '告警管理' },
        { key: '/fire/device', label: '设备管理' },
        { key: '/fire/stat', label: '统计分析' },
      ]
    },
    {
      key: '/office',
      icon: <BankOutlined />,
      label: '办公管理',
      children: [
        { key: '/office/meeting', label: '会议室预约' },
        { key: '/office/meeting-room', label: '会议室管理' },
        { key: '/office/meeting-signin', label: '会议签到' },
        { key: '/office/attendance', label: '智慧考勤' },
        { key: '/office/supply', label: '办公用品' },
        { key: '/office/announcement', label: '公告管理' },
      ]
    },
    {
      key: '/parking',
      icon: <CarOutlined />,
      label: '停车管理',
      children: [
        { key: '/parking/gate', label: '出入口管理' },
        { key: '/parking/area', label: '场区管理' },
        { key: '/parking/parking', label: '车位管理' },
        { key: '/parking/fee', label: '收费规则' },
        { key: '/parking/control', label: '用户布控' },
        { key: '/parking/speed', label: '超速报警' },
      ]
    },
    {
      key: '/access',
      icon: <SafetyOutlined />,
      label: '门禁管理',
      children: [
        { key: '/access/door', label: '出入口管理' },
        { key: '/access/auth', label: '权限管理' },
        { key: '/access/record', label: '记录查询' },
        { key: '/access/stat', label: '统计分析' },
      ]
    },
    {
      key: '/video',
      icon: <VideoCameraOutlined />,
      label: '视频监控',
      children: [
        { key: '/video/list', label: '摄像头列表' },
        { key: '/video/live', label: '实时预览' },
        { key: '/video/playback', label: '录像回放' },
        // { key: '/video/thermal', label: '热成像监控' },
      ]
    },
    {
      key: '/system',
      icon: <SettingOutlined />,
      label: '系统管理',
      children: [
        { key: '/system/user', label: '用户管理' },
        { key: '/system/role', label: '角色管理' },
        { key: '/system/log', label: '日志审计' },
        { key: '/system/setting', label: '系统设置' },
      ]
    },
  ];

  const userMenuItems = [
    {
      key: 'profile',
      icon: <UserOutlined />,
      label: '个人信息',
    },
    {
      key: 'settings',
      icon: <SettingOutlined />,
      label: '系统设置',
    },
    {
      type: 'divider',
    },
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: '退出登录',
    },
  ];

  const handleUserMenuClick = ({ key }) => {
    switch (key) {
      case 'profile':
        // TODO: 跳转到个人信息页面
        break;
      case 'settings':
        // TODO: 跳转到系统设置页面
        break;
      case 'logout':
        // TODO: 实现退出登录逻辑
        break;
      default:
        break;
    }
  };

  const onOpenChange = (keys) => {
    setOpenKeys(keys.length ? [keys[keys.length - 1]] : []);
  };

  return (
    <Layout className="app-container">
      <Sider 
        collapsible 
        collapsed={collapsed} 
        onCollapse={(value) => setCollapsed(value)}
        theme="dark"
        className="sidebar"
        trigger={null}
        style={{
          background: 'linear-gradient(180deg, #001529 60%, #003366 100%)',
          minHeight: '100vh',
        }}
      >
        <div className="logo-container">
          <h1 className="logo-text">{collapsed ? 'SP' : '综合管理平台'}</h1>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={location.pathname === '/' ? [] : [location.pathname]}
          openKeys={openKeys}
          onOpenChange={onOpenChange}
          items={menuItems}
          onClick={({ key }) => navigate(key)}
        />
      </Sider>
      <Layout>
        <Header style={{ 
          padding: '0 24px', 
          background: colorBgContainer,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed),
              style: { fontSize: '18px', cursor: 'pointer' }
            })}
          </div>
          <Space size={24}>
            <Badge count={5}>
              <BellOutlined style={{ fontSize: '18px', cursor: 'pointer' }} />
            </Badge>
            <Dropdown
              menu={{
                items: userMenuItems,
                onClick: handleUserMenuClick,
              }}
              placement="bottomRight"
            >
              <Space style={{ cursor: 'pointer' }}>
                <Avatar icon={<UserOutlined />} />
                <span>管理员</span>
              </Space>
            </Dropdown>
          </Space>
        </Header>
        <Content className="main-content">
          <Routes>
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/" element={<Navigate to="/welcome" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/visitor" element={<VisitorLayout />}>
              <Route path="appointment" element={<Appointment />} />
              <Route path="audit" element={<Audit />} />
              <Route path="auth" element={<Permission />} />
              <Route path="record" element={<VisitorRecord />} />
              <Route path="stat" element={<StatVisitor />} />
              <Route path="blacklist" element={<Blacklist />} />
              <Route index element={<Appointment />} />
            </Route>
            <Route path="/energy" element={<EnergyLayout />}>
              <Route path="overview" element={<Overview />} />
              <Route path="water" element={<Water />} />
              <Route path="gas" element={<Gas />} />
              <Route path="stat" element={<Stat />} />
              <Route index element={<Overview />} />
            </Route>
            <Route path="/maintenance" element={<MaintenanceLayout />}>
              <Route path="overview" element={<OverviewMaintenance />} />
              <Route path="device-monitor" element={<DeviceMonitor />} />
              <Route path="alarm-center" element={<AlarmCenter />} />
              <Route path="inspection-manage" element={<InspectionManage />} />
              <Route path="task" element={<Task />} />
              <Route path="device" element={<Device />} />
              <Route path="stat" element={<StatMaintenance />} />
              <Route index element={<OverviewMaintenance />} />
            </Route>
            <Route path="/fire" element={<FireLayout />}>
              <Route path="overview" element={<OverviewFire />} />
              <Route path="alarm" element={<Alarm />} />
              <Route path="device" element={<DeviceFire />} />
              <Route path="stat" element={<StatFire />} />
              <Route index element={<OverviewFire />} />
            </Route>
            <Route path="/office" element={<OfficeLayout />}>
              <Route path="meeting" element={<Meeting />} />
              <Route path="meeting-room" element={<MeetingRoom />} />
              <Route path="meeting-signin" element={<MeetingSignIn />} />
              <Route path="attendance" element={<Attendance />} />
              <Route path="supply" element={<Supply />} />
              <Route path="announcement" element={<Announcement />} />
              <Route index element={<Meeting />} />
            </Route>
            <Route path="/parking" element={<ParkingLayout />}>
              <Route path="gate" element={<Gate />} />
              <Route path="area" element={<Area />} />
              <Route path="parking" element={<Parking />} />
              <Route path="fee" element={<Fee />} />
              <Route path="control" element={<Control />} />
              <Route path="speed" element={<Speed />} />
              <Route index element={<Gate />} />
            </Route>
            <Route path="/access" element={<AccessLayout />}>
              <Route path="door" element={<Door />} />
              <Route path="auth" element={<Auth />} />
              <Route path="record" element={<AccessRecord />} />
              <Route path="stat" element={<StatAccess />} />
              <Route index element={<Door />} />
            </Route>
            <Route path="/video" element={<VideoLayout />}>
              <Route path="list" element={<CameraList />} />
              <Route path="live" element={<LiveView />} />
              <Route path="playback" element={<Playback />} />
              <Route path="thermal" element={<ThermalView />} />
              <Route index element={<CameraList />} />
            </Route>
            <Route path="/system" element={<SystemLayout />}>
              <Route path="user" element={<UserManage />} />
              <Route path="role" element={<RoleManage />} />
              <Route path="log" element={<LogAudit />} />
              <Route path="setting" element={<SystemSetting />} />
              <Route index element={<UserManage />} />
            </Route>
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;

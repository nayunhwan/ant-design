import React, { useState } from 'react';
import { SettingOutlined, CopyOutlined, DownloadOutlined } from '@ant-design/icons';
import {
  Cascader,
  Input,
  Select,
  Space,
  Button,
  Tooltip,
  Modal,
  Dropdown,
  Drawer,
  InputNumber,
} from 'antd';

const { Option } = Select;

const selectBefore = (
  <Select defaultValue="http://" className="select-before">
    <Option value="http://">http://</Option>
    <Option value="https://">https://</Option>
  </Select>
);
const selectAfter = (
  <Select defaultValue=".com" className="select-after">
    <Option value=".com">.com</Option>
    <Option value=".jp">.jp</Option>
    <Option value=".cn">.cn</Option>
    <Option value=".org">.org</Option>
  </Select>
);

const App: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);
  return (
    <Space direction="vertical">
      <Space.Compact block>
        <Button>default Button</Button>
        <Button danger>danger Button</Button>
        <Button type="dashed">dashed Button</Button>
        <Button type="text">text Button</Button>
        <Button type="link">Link Button</Button>
        <Tooltip title="Tooltip">
          <Button icon={<DownloadOutlined />} disabled />
        </Tooltip>
      </Space.Compact>
      <br />
      <Space.Compact>
        <Button>Prefix</Button>
        <Input addonBefore="http://" addonAfter=".com" defaultValue="mysite" />
        <Button type="primary">Submit</Button>
      </Space.Compact>
      <Space.Compact>
        <Input placeholder="prefix" />
        <Input addonBefore={selectBefore} addonAfter={selectAfter} defaultValue="mysite" />
        <Button icon={<CopyOutlined />} />
      </Space.Compact>
      <Space.Compact>
        <Input.Search />
        <Input.Search />
        <Button icon={<CopyOutlined />} />
      </Space.Compact>
      <Space.Compact>
        <Input addonAfter={<SettingOutlined />} defaultValue="mysite" />
        <Button type="primary">Submit</Button>
        <Input placeholder="suffix" addonAfter={<SettingOutlined />} />
      </Space.Compact>
      <Space.Compact>
        <Input addonBefore="http://" suffix=".com" defaultValue="mysite" />
        <Button type="primary">Submit</Button>
      </Space.Compact>
      <Space.Compact>
        <Button>Prefix</Button>
        <Input
          addonBefore={<Cascader placeholder="cascader" style={{ width: 150 }} />}
          defaultValue="mysite"
        />
        <Button type="primary">Submit</Button>
      </Space.Compact>
      <br />
      <Space.Compact>
        <Button onClick={() => setShowModal(true)}>debug Modal context</Button>
        <Modal title="Basic Modal" open={showModal} onCancel={() => setShowModal(false)}>
          <Button>normal button A</Button>
          <Button>normal button B</Button>
          <br />
          <br />
          <Input />
          <br />
          <br />
          <Space.Compact>
            <Button>compact button A</Button>
            <Button>compact button B</Button>
          </Space.Compact>
        </Modal>
      </Space.Compact>
      <Space.Compact>
        <Dropdown.Button
          menu={{
            items: [
              {
                key: '1',
                label: <Button>menu button</Button>,
              },
              {
                key: '2',
                label: 'normal menu item',
              },
            ],
          }}
        >
          debug Dropdown.Button context
        </Dropdown.Button>
      </Space.Compact>
      <Space.Compact>
        <Button onClick={() => setShowDrawer(true)}>debug Drawer context</Button>
        <Drawer
          title="Basic Drawer"
          placement="right"
          onClose={() => setShowDrawer(false)}
          open={showDrawer}
        >
          <Button>normal button A</Button>
          <Button>normal button B</Button>
          <br />
          <br />
          <Space.Compact>
            <Button>compact button A</Button>
            <Button>compact button B</Button>
          </Space.Compact>
        </Drawer>
      </Space.Compact>
      <Space.Compact>
        <InputNumber addonBefore="+" addonAfter="$" defaultValue={100} />
      </Space.Compact>
    </Space>
  );
};

export default App;

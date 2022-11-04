import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

export default function Layout() {

  return (
    <div style={{ display: 'flex', height: '100%' }}>
      <Sidebar>
        <Menu>
          <MenuItem> PFA</MenuItem>
          <SubMenu label="Overview">
            <MenuItem> Panels</MenuItem>
            <MenuItem> Asset</MenuItem>
          </SubMenu>
          <SubMenu label="Assets">
            <MenuItem> Existing</MenuItem>
            <MenuItem> Define</MenuItem>
          </SubMenu>
          <SubMenu label="Retrofits">
            <MenuItem> Existing</MenuItem>
            <MenuItem> Define</MenuItem>
          </SubMenu>
          <SubMenu label="Scenarios">
            <MenuItem> Existing</MenuItem>
            <MenuItem> Define</MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
    </div>
  );
}
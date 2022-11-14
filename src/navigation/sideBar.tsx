import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";

export default function Layout() {
  return (
    <div style={{ display: "flex", height: "100%" }}>
      <Sidebar>
        <Menu>
          <MenuItem> PFA</MenuItem>
          <SubMenu label="Overview">
            <MenuItem routerLink={<Link to="/panels" />}> Panels</MenuItem>
            <MenuItem routerLink={<Link to="/asset" />}> Asset</MenuItem>
          </SubMenu>
          <SubMenu label="Assets">
            <MenuItem routerLink={<Link to="/assetsExisting" />}>
              Existing
            </MenuItem>
            <MenuItem routerLink={<Link to="/assetsDefine" />}>
              Define
            </MenuItem>
          </SubMenu>
          <SubMenu label="Retrofits">
            <MenuItem routerLink={<Link to="/retrofitsExisting" />}>
              Existing
            </MenuItem>
            <MenuItem routerLink={<Link to="/retrofitsDefine" />}>
              Define
            </MenuItem>
          </SubMenu>
          <SubMenu label="Scenarios">
            <MenuItem routerLink={<Link to="/scenariosExisting" />}>
              Existing
            </MenuItem>
            <MenuItem routerLink={<Link to="/scenariosDefine" />}>
              Define
            </MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
    </div>
  );
}

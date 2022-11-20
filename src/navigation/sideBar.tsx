import React, { useState } from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { FiArrowLeftCircle, FiArrowRightCircle  } from "react-icons/fi";

export default function Layout() {
  const [sideCollapsed, setSideCollapsed] = useState(false);
  const { collapseSidebar } = useProSidebar();
  const toggleSideCollapsed = () => {
    console.log("toggle");
    setSideCollapsed((collapsed) => !collapsed);
    collapseSidebar();
  };

  return (
    <div style={{ display: "flex", height: "100%" }}>
      <Sidebar collapsedWidth="100px">
        <Menu>
          <MenuItem onClick={toggleSideCollapsed}>PFA <span className="sidebarCollapseIcon">{sideCollapsed ? <FiArrowRightCircle className="rightArrowCollapse" size={18} /> : <FiArrowLeftCircle size={18} />}</span></MenuItem>
          <SubMenu label="Overview">
            <MenuItem routerLink={<Link to="/xtech/panels" />}> Panels</MenuItem>
            <MenuItem routerLink={<Link to="/xtech/asset" />}> Asset</MenuItem>
          </SubMenu>
          <SubMenu label="Assets">
            <MenuItem routerLink={<Link to="/xtech/assetsExisting" />}>
              Existing
            </MenuItem>
            <MenuItem routerLink={<Link to="/xtech/assetsDefine" />}>Define</MenuItem>
          </SubMenu>
          <SubMenu label="Retrofits">
            <MenuItem routerLink={<Link to="/xtech/retrofitsExisting" />}>
              Existing
            </MenuItem>
            <MenuItem routerLink={<Link to="/xtech/retrofitsDefine" />}>
              Define
            </MenuItem>
          </SubMenu>
          <SubMenu label="Scenarios">
            <MenuItem routerLink={<Link to="/xtech/scenariosExisting" />}>
              Existing
            </MenuItem>
            <MenuItem routerLink={<Link to="/xtech/scenariosDefine" />}>
              Define
            </MenuItem>
          </SubMenu>
          <SubMenu label="Reports">
            <MenuItem routerLink={<Link to="/xtech/euReports" />}>
              EU Reports
            </MenuItem>
            <MenuItem routerLink={<Link to="/xtech/quarterlyReports" />}>
              Quarterly Report
            </MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
    </div>
  );
}

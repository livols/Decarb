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
            <MenuItem routerLink={<Link to="/panels" />}> Panels</MenuItem>
            <MenuItem routerLink={<Link to="/asset" />}> Asset</MenuItem>
          </SubMenu>
          <SubMenu label="Assets">
            <MenuItem routerLink={<Link to="/assetsExisting" />}>
              Existing
            </MenuItem>
            <MenuItem routerLink={<Link to="/assetsDefine" />}>Define</MenuItem>
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

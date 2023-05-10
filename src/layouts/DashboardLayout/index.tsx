import { useState } from "react";
import SidebarLeft from "../../components/Dashboard/SidebarLeft";
import SidebarRight from "../../components/Dashboard/SidebarRight";
import { DashboardLayoutProps } from "./interface";
import { GetIsModalOpen } from "../../redux/modalSlice";
import ModalLogout from "../../components/Modal/ModalLogout";
import { Drawer, IconButton } from "@mui/material";
import { FaBell } from "react-icons/fa";
// components/layout.js

export default function Layout({ children }: DashboardLayoutProps) {
  const [isLeftMobileMenuOpen, setIsLeftMobileMenuOpen] = useState(false);
  const [isRightMobileMenuOpen, setIsRightMobileMenuOpen] = useState(false);
  const toggleLeftMobileMenu = () =>
    setIsLeftMobileMenuOpen(!isLeftMobileMenuOpen);
  const toggleRightMobileMenu = () =>
    setIsRightMobileMenuOpen(!isRightMobileMenuOpen);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const modalIsOpen = GetIsModalOpen();
  return (
    <>
      {modalIsOpen && <ModalLogout isOpen={modalIsOpen} />}
      {/* Sidebar Left */}
      <SidebarLeft isLeftMobileMenuOpen={isLeftMobileMenuOpen} />
      {children}
      {/* Sidebar Right */}
      {/* <Drawer anchor="right" open={isDrawerOpen} onClose={handleDrawerClose}> */}
      {/* </Drawer> */}

      <Drawer anchor="right" open={isDrawerOpen} onClose={handleDrawerClose}>
        <SidebarRight />
      </Drawer>
      {!isDrawerOpen && (
        <IconButton
          color="inherit"
          sx={{ justifyContent: "start", alignSelf: "start" }}
          onClick={handleDrawerOpen}
        >
          <FaBell size={24} />
        </IconButton>
      )}
    </>
  );
}

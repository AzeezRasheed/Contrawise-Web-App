import { useState } from "react";
import SidebarLeft from "../../components/Dashboard/SidebarLeft";
import SidebarRight from "../../components/Dashboard/SidebarRight";
import { DashboardLayoutProps } from "./interface";
import { getIsModalOpen } from "../../redux/modalReducer";
import ModalLogout from "../../components/Modal/ModalLogout";
// components/layout.js

export default function Layout({ children }: DashboardLayoutProps) {
  const [isLeftMobileMenuOpen, setIsLeftMobileMenuOpen] = useState(false);
  const [isRightMobileMenuOpen, setIsRightMobileMenuOpen] = useState(false);
  const toggleLeftMobileMenu = () =>
    setIsLeftMobileMenuOpen(!isLeftMobileMenuOpen);
  const toggleRightMobileMenu = () =>
    setIsRightMobileMenuOpen(!isRightMobileMenuOpen);

  const modalIsOpen = getIsModalOpen();
  return (
    <>
      {modalIsOpen && <ModalLogout isOpen={modalIsOpen} />}
      {/* Sidebar Left */}
      <SidebarLeft isLeftMobileMenuOpen={isLeftMobileMenuOpen} />
      {children}
      {/* Sidebar Right */}
      <SidebarRight isRightMobileMenuOpen={isRightMobileMenuOpen} />
    </>
  );
}

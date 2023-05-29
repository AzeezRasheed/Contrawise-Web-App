import { useEffect, useState } from "react";
import SidebarLeft from "../../components/Dashboard/SidebarLeft";
import SidebarRight from "../../components/Dashboard/SidebarRight";
import { DashboardLayoutProps } from "./interface";
import { GetIsLogoutModalOpen } from "../../redux/modalSlice";
import ModalLogout from "../../components/Modal/ModalLogout";
import { Drawer, IconButton } from "@mui/material";
import { FaBell } from "react-icons/fa";
import { GoThreeBars } from "react-icons/go";
import { useResponsive } from "use-responsive";
import { useMediaQuery } from "react-responsive";
// components/layout.js

export default function Layout({ children }: DashboardLayoutProps) {
  const isMobile = useMediaQuery({ maxWidth: "640px" });

  const [isLeftMobileMenuOpen, setIsLeftMobileMenuOpen] = useState(false);

  const toggleLeftMobileMenu = () =>
    setIsLeftMobileMenuOpen(!isLeftMobileMenuOpen);

  useEffect(() => {
    !isMobile && setIsLeftMobileMenuOpen(false);
  }, [isMobile]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const modalIsOpen = GetIsLogoutModalOpen();
  console.log(isMobile);
  return (
    <>
      {modalIsOpen && <ModalLogout isOpen={modalIsOpen} />}
      {/* Sidebar Left */}
      <SidebarLeft isLeftMobileMenuOpen={isLeftMobileMenuOpen} />
      {children}

      {isMobile && (
        <div>
          <button
            className="absolute top-0 right-0 p-2 mt-10"
            onClick={toggleLeftMobileMenu}
          >
            <GoThreeBars size={24} color="#8E8FE1" />
          </button>
        </div>
      )}

      <div className="absolute right-0 top-0">
        <Drawer anchor="right" open={isDrawerOpen} onClose={handleDrawerClose}>
          <SidebarRight />
        </Drawer>
        {!isDrawerOpen && (
          <IconButton
            color="inherit"
            sx={{ justifyContent: "start", alignSelf: "start" }}
            onClick={handleDrawerOpen}
          >
            <FaBell size={24} color="#8E8FE1" />
          </IconButton>
        )}
      </div>
    </>
  );
}

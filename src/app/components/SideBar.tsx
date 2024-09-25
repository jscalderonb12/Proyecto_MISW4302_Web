"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import { Typography } from "@mui/material";
import AddAlarmRoundedIcon from "@mui/icons-material/AddAlarmRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import RestoreRoundedIcon from "@mui/icons-material/RestoreRounded";
import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import LocalPharmacyIcon from "@mui/icons-material/LocalPharmacy";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { usePathname } from "next/navigation";
import "../sideBar.css";
import { SYSTEM } from "@/app/constants/system";

const { ROUTES_DATA } = SYSTEM;
const SideBar = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen((prev) => !prev);
  };

  const handleNavigation = (path: string): void => {
    router.push(path);
    toggleDrawer();
  };

  const SideBarDrawer = () => {
    return (
      <Drawer
        open={open}
        onClose={toggleDrawer}
        anchor="left"
        PaperProps={{
          className: "side-bar-drawer",
        }}
      >
        <div className="flex justify-center ">
          <img src="favicon.png" className="side-bar-drawer-icon" alt="logo" />
        </div>
        <div>
          <Typography
            variant="h4"
            className="side-bar-drawer-title text-center"
          >
            Remindful
          </Typography>
        </div>
        <div className="text-center">
          <IconButton
            disableRipple
            className="side-bar-drawer-close"
            onClick={toggleDrawer}
          >
            <img
              src="icons/close.svg"
              className="side-bar-drawer-close-icon elevation-5"
            />
          </IconButton>
        </div>
        <div className="side-bar-drawer-menu animate__animated animate__fadeIn">
          <div
            onClick={() => handleNavigation("/")}
            className="side-bar-drawer-menu-container"
          >
            <IconButton
              disableRipple
              className="side-bar-drawer-menu-button-icon"
            >
              <img
                src="icons/home.svg"
                className="side-bar-drawer-menu-icon elevation-5"
                alt="close"
              />
            </IconButton>
            <Typography className="flex-center side-bar-drawer-menu-title ">
              Inicio
            </Typography>
          </div>
          <div
            onClick={() => handleNavigation("/create-alarm")}
            className="side-bar-drawer-menu-container"
          >
            <IconButton
              disableRipple
              className="side-bar-drawer-menu-button-icon"
            >
              <AddAlarmRoundedIcon className="side-bar-drawer-menu-icon elevation-5" />
            </IconButton>
            <Typography className="flex-center side-bar-drawer-menu-title ">
              Crear alarma remota
            </Typography>
          </div>
          <div
            onClick={() => handleNavigation("/groups")}
            className="side-bar-drawer-menu-container"
          >
            <IconButton
              disableRipple
              className="side-bar-drawer-menu-button-icon"
            >
              <GroupsRoundedIcon className="side-bar-drawer-menu-icon elevation-5" />
            </IconButton>
            <Typography className="flex-center side-bar-drawer-menu-title ">
              Grupos
            </Typography>
          </div>
          <div
            onClick={() => handleNavigation("/record")}
            className="side-bar-drawer-menu-container"
          >
            <IconButton
              disableRipple
              className="side-bar-drawer-menu-button-icon"
            >
              <RestoreRoundedIcon className="side-bar-drawer-menu-icon elevation-5" />
            </IconButton>
            <Typography className="flex-center side-bar-drawer-menu-title ">
              Historial
            </Typography>
          </div>
          <div className="side-bar-drawer-menu-container">
            <IconButton
              disableRipple
              className="side-bar-drawer-menu-button-icon"
            >
              <CategoryRoundedIcon className="side-bar-drawer-menu-icon elevation-5" />
            </IconButton>
            <Typography className="flex-center side-bar-drawer-menu-title ">
              Categorias
            </Typography>
          </div>
          <div className="side-bar-drawer-menu-container padding-left-sub-menu">
            <IconButton
              disableRipple
              className="side-bar-drawer-menu-button-icon"
            >
              <FitnessCenterIcon className="side-bar-drawer-menu-icon elevation-5" />
            </IconButton>
            <Typography className="flex-center side-bar-drawer-menu-title ">
              Gimnasio
            </Typography>
          </div>
          <div className="side-bar-drawer-menu-container padding-left-sub-menu">
            <IconButton
              disableRipple
              className="side-bar-drawer-menu-button-icon"
            >
              <img
                src="icons/library.svg"
                className="side-bar-drawer-menu-icon elevation-5"
              />
            </IconButton>
            <Typography className="flex-center side-bar-drawer-menu-title ">
              Estudio
            </Typography>
          </div>
          <div className="side-bar-drawer-menu-container padding-left-sub-menu">
            <IconButton
              disableRipple
              className="side-bar-drawer-menu-button-icon"
            >
              <LocalPharmacyIcon className="side-bar-drawer-menu-icon elevation-5" />
            </IconButton>
            <Typography className="flex-center side-bar-drawer-menu-title ">
              Medicina
            </Typography>
          </div>
          <div className="side-bar-drawer-menu-container padding-left-sub-menu">
            <IconButton
              disableRipple
              className="side-bar-drawer-menu-button-icon"
            >
              <NightsStayIcon className="side-bar-drawer-menu-icon elevation-5" />
            </IconButton>
            <Typography className="flex-center side-bar-drawer-menu-title ">
              Despertador
            </Typography>
          </div>
          <div className="side-bar-drawer-menu-container padding-left-sub-menu">
            <IconButton
              disableRipple
              className="side-bar-drawer-menu-button-icon"
            >
              <AttachMoneyIcon className="side-bar-drawer-menu-icon elevation-5" />
            </IconButton>
            <Typography className="flex-center side-bar-drawer-menu-title ">
              Finanzas
            </Typography>
          </div>
        </div>
      </Drawer>
    );
  };

  return (
    <>
      <div className="side-bar-container animate__animated animate__fadeIn">
        <div className="side-bar-menu flex-center">
          <IconButton
            disableRipple
            className="icon-button"
            onClick={toggleDrawer}
          >
            <img src="icons/burger.svg" className="icon-main" alt="menu" />
          </IconButton>
        </div>

        <div className="side-bar-content flex-center">
          {usePathname() === "/" ? (
            <div className="side-bar-home-input-container flex-center">
              <input
                type="text"
                placeholder="Buscar alarma por nombre"
                className="side-bar-home-input"
              />
              <img
                src="icons/search.svg"
                className="side-bar-home-input-icon"
                alt="search"
              />
            </div>
          ) : (
            <Typography className="flex-center title-size">
              {ROUTES_DATA.find((r) => r.path === usePathname())?.title}
            </Typography>
          )}
        </div>
        <div className="side-bar-logo"></div>
      </div>
      <SideBarDrawer />
    </>
  );
};

export default SideBar;

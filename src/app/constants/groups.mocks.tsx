import React from "react";
import GroupsIcon from "@mui/icons-material/Groups";
import { faker } from "@faker-js/faker";
import LogoutIcon from "@mui/icons-material/Logout";
import DeleteIcon from "@mui/icons-material/Delete";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleDown";
import GradeIcon from "@mui/icons-material/Grade";
import IconButton from "@mui/material/IconButton";
import ShieldIcon from "@mui/icons-material/Shield";

export const GROUPS = [
  {
    icon: (): React.ReactNode => (
      <GroupsIcon className="h-[80px] w-[80px] elevation-5" />
    ),
    rol: "Administrador",
    title: "Familia Suarez",
    members: "6",
    actions: 3,
  },
  {
    icon: (): React.ReactNode => (
      <GroupsIcon className="h-[80px] w-[80px] elevation-5" />
    ),
    rol: "Miembro",
    title: "Entrenamiento calistenia",
    members: "20",
    actions: 2,
  },
];

export const EVENTS = [
  { hour: "19:00", title: "Reunión", frequency: "Diario" },
];

export const MEMBERS = [
  {
    rolIcon: (): React.ReactNode => (
      <GradeIcon style={{ color: "#773CFF" }} className="h-[48px] w-[48px]" />
    ),
    name: faker.name.fullName(),

    rol: "Administrador",
    leaveIcon: (): React.ReactNode | null => null,
    logoutIcon: (): React.ReactNode => (
      <IconButton disableRipple className="side-bar-drawer-menu-button-icon  ">
        <LogoutIcon className="side-bar-drawer-menu-icon elevation-5" />
      </IconButton>
    ),
  },
  {
    rolIcon: (): React.ReactNode => (
      <ShieldIcon style={{ color: "#773CFF" }} className="h-[48px] w-[48px]" />
    ),
    name: faker.name.fullName(),

    rol: "Moderador",
    leaveIcon: (): React.ReactNode | null => (
      <IconButton
        disableRipple
        className="side-bar-drawer-menu-button-icon  ml-[36px]"
      >
        <ArrowCircleDownIcon className="side-bar-drawer-menu-icon elevation-5" />
      </IconButton>
    ),
    logoutIcon: (): React.ReactNode => (
      <IconButton disableRipple className="side-bar-drawer-menu-button-icon  ">
        <LogoutIcon className="side-bar-drawer-menu-icon elevation-5" />
      </IconButton>
    ),
  },
  {
    rolIcon: (): React.ReactNode => (
      <AccountCircleIcon
        style={{ color: "#773CFF" }}
        className="h-[48px] w-[48px]"
      />
    ),
    name: faker.name.fullName(),

    rol: "Miembro",
    leaveIcon: (): React.ReactNode | null => (
      <IconButton
        disableRipple
        className="side-bar-drawer-menu-button-icon  ml-[36px]"
      >
        <ArrowCircleUpIcon className="side-bar-drawer-menu-icon elevation-5" />
      </IconButton>
    ),
    logoutIcon: (): React.ReactNode => (
      <IconButton disableRipple className="side-bar-drawer-menu-button-icon  ">
        <DeleteIcon className="side-bar-drawer-menu-icon elevation-5" />
      </IconButton>
    ),
  },
  {
    rolIcon: (): React.ReactNode => (
      <AccountCircleIcon
        style={{ color: "#773CFF" }}
        className="h-[48px] w-[48px]"
      />
    ),
    name: faker.name.fullName(),

    rol: "Miembro",
    leaveIcon: (): React.ReactNode | null => (
      <IconButton
        disableRipple
        className="side-bar-drawer-menu-button-icon  ml-[36px]"
      >
        <ArrowCircleUpIcon className="side-bar-drawer-menu-icon elevation-5" />
      </IconButton>
    ),
    logoutIcon: (): React.ReactNode => (
      <IconButton disableRipple className="side-bar-drawer-menu-button-icon  ">
        <DeleteIcon className="side-bar-drawer-menu-icon elevation-5" />
      </IconButton>
    ),
  },
  {
    rolIcon: (): React.ReactNode => (
      <AccountCircleIcon
        style={{ color: "#773CFF" }}
        className="h-[48px] w-[48px]"
      />
    ),
    name: faker.name.fullName(),

    rol: "Miembro",
    leaveIcon: (): React.ReactNode | null => (
      <IconButton
        disableRipple
        className="side-bar-drawer-menu-button-icon  ml-[36px]"
      >
        <ArrowCircleUpIcon className="side-bar-drawer-menu-icon elevation-5" />
      </IconButton>
    ),
    logoutIcon: (): React.ReactNode => (
      <IconButton disableRipple className="side-bar-drawer-menu-button-icon  ">
        <DeleteIcon className="side-bar-drawer-menu-icon elevation-5" />
      </IconButton>
    ),
  },
  {
    rolIcon: (): React.ReactNode => (
      <AccountCircleIcon
        style={{ color: "#773CFF" }}
        className="h-[48px] w-[48px]"
      />
    ),
    name: faker.name.fullName(),

    rol: "Miembro",
    leaveIcon: (): React.ReactNode | null => (
      <IconButton
        disableRipple
        className="side-bar-drawer-menu-button-icon  ml-[36px]"
      >
        <ArrowCircleUpIcon className="side-bar-drawer-menu-icon elevation-5" />
      </IconButton>
    ),
    logoutIcon: (): React.ReactNode => (
      <IconButton disableRipple className="side-bar-drawer-menu-button-icon  ">
        <DeleteIcon className="side-bar-drawer-menu-icon elevation-5" />
      </IconButton>
    ),
  },
];

"use client";
import { IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LogoutIcon from "@mui/icons-material/Logout";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
import Modal from "@mui/material/Modal";
import { EVENTS, MEMBERS } from "../constants/groups.mocks";
interface Group {
  icon: () => React.ReactNode;
  rol: string;
  title: string;
  members: string;
  actions: number;
}

interface GroupsProps {
  data: Group;
}

const Group: React.FC<GroupsProps> = ({ data }) => {
  const [open, setOpen] = useState(false);
  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };
  return (
    <div className="grid grid-cols-10 col-start-2 col-span-10 background-secondary h-[140px] mb-[40px] rounded-[10px] shadow-md">
      <div className="flex-center col-span-1  col-start-1 ">{data.icon()}</div>
      <div className="flex-center  col-span-1  col-start-2 ">
        <Typography className="flex-center body-size mt-[40px] mb-[40px]">
          {data.rol}
        </Typography>
      </div>
      <div
        onClick={handleOpenModal}
        className="cursor-pointer flex-center items-center  col-span-5  col-start-3 "
      >
        <Typography className=" body-size">{data.title}</Typography>
      </div>
      <div className="flex-center  col-span-1  col-start-8 ">
        <Typography className=" body-size">{data.members} usuarios</Typography>
      </div>
      <div className="  col-span-2  col-start-9  flex  items-center pl-[52px]">
        <IconButton disableRipple className="side-bar-drawer-menu-button-icon">
          <NotificationsIcon className="side-bar-drawer-menu-icon elevation-5" />
        </IconButton>
        <IconButton
          disableRipple
          className="side-bar-drawer-menu-button-icon  ml-[36px]"
        >
          <LogoutIcon className="side-bar-drawer-menu-icon elevation-5" />
        </IconButton>
        {data.actions > 2 ? (
          <IconButton
            disableRipple
            className="side-bar-drawer-menu-button-icon ml-[36px]"
          >
            <DeleteIcon className="side-bar-drawer-menu-icon elevation-5" />
          </IconButton>
        ) : null}
      </div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="min-h-screen flex justify-center items-center">
          <div className="w-[1276px] rounded-[5px] h-[837px] background-primary">
            <div className="grid grid-cols-8">
              <Typography className="col-start-4 flex justify-center col-span-2  pt-[40px] pb-[20px] text-[34px]">
                {data.title}
              </Typography>
              <IconButton
                disableRipple
                className=" col-start-8 col-span-1 mt-[40px] mb-[20px] side-bar-drawer-menu-button-icon ml-[36px]"
              >
                <CloseIcon
                  onClick={handleCloseModal}
                  className="side-bar-drawer-menu-icon elevation-5"
                />
              </IconButton>
            </div>
            <div className="flex justify-center">
              <div className="h-[40px] bg-white shadow-md rounded-[12px] pl-[57px] pr-[57px] pt-[9px] pb-[9px] text-[20px]  text-black m-0 ">
                <Typography className="font-bold">-XGBJASGJH-</Typography>
              </div>
            </div>
            <div className="grid grid-cols-8">
              <div className="col-start-2 col-span-6">
                <Typography className="text-[20px] mb-[11px]">
                  Eventos
                </Typography>
              </div>
              {EVENTS.map((event) => (
                <div className="grid grid-cols-6 col-start-2 col-span-6 rounded-[12px]  background-secondary h-[95px]">
                  <div className="flex-center  col-span-1 col-start-1">
                    <Typography className="text-[24px]">
                      {event.hour}
                    </Typography>
                  </div>
                  <div className="flex items-center col-span-2 col-start-2">
                    <Typography className="text-[24px]">
                      {event.title}
                    </Typography>
                  </div>
                  <div className="flex-center  col-span-1 col-start-4">
                    <Typography className="text-[24px]">
                      {event.frequency}
                    </Typography>
                  </div>
                  <div className="flex-center  col-span-1 col-start-5">
                    <IconButton
                      disableRipple
                      className="side-bar-drawer-menu-button-icon"
                    >
                      <NotificationsIcon className="side-bar-drawer-menu-icon elevation-5" />
                    </IconButton>
                  </div>
                  <div className="flex-center  col-span-1 col-start-6">
                    <IconButton
                      disableRipple
                      className="side-bar-drawer-menu-button-icon "
                    >
                      <DeleteIcon className="side-bar-drawer-menu-icon elevation-5" />
                    </IconButton>
                  </div>
                </div>
              ))}
              <div className="col-start-2 col-span-6 mt-[200px]">
                <Typography className="text-[20px] mb-[11px]">
                  Miembros ({data.members})
                </Typography>
              </div>
              <div className="flex-col col-start-2 col-span-6 rounded-[12px] background-secondary h-[255px] pt-[20px] overflow-y-scroll">
                {MEMBERS.map((member) => (
                  <div className="grid grid-cols-6 h-[48px] mb-[10px]">
                    <div className="col-span-1 col-start-1 flex-center">
                      {member.rolIcon()}
                    </div>
                    <div className="col-span-2 col-start-2 flex items-center">
                      <Typography className="text-[24px]">
                        {member.name}
                      </Typography>
                    </div>
                    <div className="col-span-1 col-start- flex-center">
                      <Typography className="text-[24px]">
                        {member.rol}
                      </Typography>
                    </div>
                    <div className="col-span-1 col-start-5 flex-center">
                      {member.leaveIcon()}
                    </div>
                    <div className="col-span-1 col-start-6 flex-center">
                      {member.logoutIcon()}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Group;

"use client";
import React from "react";
import { GROUPS } from "../constants/groups.mocks";
import Group from "@/app/components/Groups";

const GroupsPage = () => {
  return (
    <div className="animate__animated animate__fadeIn m-0 grid grid-cols-12 mt-[123px]">
      {GROUPS.map(
        (
          groupData: {
            icon: () => React.ReactNode;
            rol: string;
            title: string;
            members: string;
            actions: number;
          },
          index: number,
        ) => (
          <Group key={index} data={groupData} />
        ),
      )}
    </div>
  );
};

export default GroupsPage;

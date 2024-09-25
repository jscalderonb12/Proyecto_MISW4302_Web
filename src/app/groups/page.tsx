"use client";
import React from "react";
import { GROUPS } from "../constants/groups.mocks";
import Group from "@/app/components/Groups";

const GroupsPage = () => {
  return (
    <div className="m-0 grid grid-cols-12 mt-[123px]">
      {GROUPS.map((groupData: any, index: number) => (
        <Group key={index} data={groupData} />
      ))}
    </div>
  );
};

export default GroupsPage;

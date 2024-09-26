import { Switch, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import { IAlarm } from "@/app/constants/alarms.mocks";
interface AlarmsProps {
  data: IAlarm;
  isRecord?: boolean;
}

const Alarms: React.FC<AlarmsProps> = ({ data, isRecord }) => {
  return (
    <div className="grid grid-cols-8 col-start-3 col-span-8 background-secondary h-[140px] mb-[40px] rounded-[10px] shadow-md">
      <div className="flex-center col-span-1  col-start-1">{data.icon()}</div>
      <div className="flex-center  col-span-1  col-start-2">
        <Typography className="flex-center body-size mt-[40px] mb-[40px]">
          {data.hour}
        </Typography>
      </div>
      <div className="flex items-center  col-span-4  col-start-3">
        <Link href={"/edit-alarm" + "/" + data.id}>
          <Typography className=" body-size">{data.title}</Typography>
        </Link>
      </div>
      <div className="flex-center  col-span-1  col-start-7">
        <Typography className="flex-center body-size">
          {data.frequency}
        </Typography>
      </div>
      <div className="flex-center  col-span-1  col-start-8">
        {!isRecord ? (
          <Switch defaultChecked color="secondary" />
        ) : (
          <Typography className="flex-center body-size">
            {data.state}
          </Typography>
        )}
      </div>
    </div>
  );
};

export default Alarms;

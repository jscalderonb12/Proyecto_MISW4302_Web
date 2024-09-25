import React from "react";
import Alarms from "../components/Alarms";
import { ALARMS_RECORD } from "../constants/alarms.mocks";
import TextField from "@mui/material/TextField";

const RecordPage = () => {
  return (
    <div className="m-0 grid grid-cols-12">
      <div className=" grid grid-cols-10 col-start-2 col-span-10 mt-[40px] h-[70px] mb-[30px]">
        <TextField
          id="standard-basic"
          className="m-0 boder-solid col-start-1 col-span-6 border-2"
          label="Nombre"
          variant="standard"
          InputProps={{
            style: { color: "white", fontSize: "20px" },
          }}
          InputLabelProps={{
            style: { color: "white", fontSize: "20px" },
          }}
          sx={{ margin: 0 }}
        />
        <TextField
          id="standard-basic"
          className="m-0 boder-solid border-2 col-start-7 col-span-2 ml-[40px]"
          label="Categoría"
          variant="standard"
          InputProps={{
            style: { color: "white", fontSize: "20px" },
          }}
          InputLabelProps={{
            style: { color: "white", fontSize: "20px" },
          }}
          sx={{ margin: 0 }}
        />
        <TextField
          id="standard-basic"
          className="m-0 boder-solid border-2 col-start-9 col-span-2 ml-[40px]"
          label="Acción"
          variant="standard"
          InputProps={{
            style: { color: "white", fontSize: "20px" },
          }}
          InputLabelProps={{
            style: { color: "white", fontSize: "20px" },
          }}
          sx={{ margin: 0 }}
        />
      </div>

      {ALARMS_RECORD.map((alarmData: any, index: number) => (
        <Alarms key={index} data={alarmData} isRecord />
      ))}
    </div>
  );
};

export default RecordPage;

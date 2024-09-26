import React from "react";
import Alarms from "../components/Alarms";
import { ALARMS_RECORD, IAlarm } from "../constants/alarms.mocks";
import TextField from "@mui/material/TextField";
import { FormControl, InputLabel, NativeSelect } from "@mui/material";

const RecordPage = () => {
  return (
    <div className="animate__animated animate__fadeIn m-0 grid grid-cols-12">
      <div className="grid grid-cols-10 col-start-2 col-span-10 mt-[40px] h-[70px] mb-[30px]">
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

        <FormControl className="m-0 boder-solid border-2 col-start-7 col-span-2 ml-[40px]">
          <InputLabel
            style={{ color: "#fff" }}
            variant="standard"
            htmlFor="age-select-1"
          >
            Frecuencia
          </InputLabel>
          <NativeSelect
            style={{ color: "#fff" }}
            className="text-[20px]"
            defaultValue={"Gym"}
          >
            <option value={"Gym"}>Gym</option>
            <option value={"Estudio"}>Estudio</option>
            <option value={"Despertador"}>Despertador</option>
          </NativeSelect>
        </FormControl>
        <FormControl className="m-0 boder-solid border-2 col-start-9 col-span-2 ml-[40px]">
          <InputLabel
            style={{ color: "#fff" }}
            variant="standard"
            htmlFor="age-select-1"
          >
            Acción
          </InputLabel>
          <NativeSelect
            style={{ color: "#fff" }}
            className="text-[20px]"
            defaultValue={"Descartado"}
          >
            <option value={"Descartado"}>Descartado</option>
            <option value={"Pospuesto"}>Pospuesto</option>
          </NativeSelect>
        </FormControl>
      </div>

      {ALARMS_RECORD.map((alarmData: IAlarm, index: number) => (
        <Alarms key={index} data={alarmData} isRecord />
      ))}
    </div>
  );
};

export default RecordPage;

import {
  Button,
  FormControl,
  IconButton,
  InputLabel,
  NativeSelect,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import ImageIcon from "@mui/icons-material/Image";
import Link from "next/link";
const CreateAlarmPage = () => {
  return (
    <div className="animate__animated animate__fadeIn  mt-[40px] grid grid-cols-12">
      <div className="col-span-2 col-start-6  grid grid-cols-2 h-[48px]">
        <div className="">
          <Typography className="text-[24px]">Horas</Typography>
        </div>
        <div className="">
          <Typography className="text-[24px]">Minutos</Typography>
        </div>
      </div>
      <div className="col-span-2 col-start-6  flex h-[112px] ">
        <div className=" flex-1 flex-center shadow-2xl">
          <Typography className="text-[96px]">18</Typography>
        </div>
        <div className=" flex-center w-[21px]">
          <Typography className="text-[96px]">:</Typography>
        </div>
        <div className=" flex-1 flex-center shadow-2xl">
          <Typography className="text-[96px]">00</Typography>
        </div>
      </div>
      <div className="col-span-6 col-start-4 mt-[60px] h-[530px] grid-cols-6 background-secondary rounded-[12px] grid grid-rows-5 pt-[50px]">
        <div className="col-span-4 col-start-2 flex items-center h-[53px] mb-[32px]">
          <FormControl className="w-[480px]">
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
              defaultValue={"Única vez"}
            >
              <option value={"Única vez"}>Única vez</option>
              <option value={"Diaría"}>Diaría</option>
              <option value={"Semanal"}>Semanal</option>
              <option value={"Mensual"}>Mensual</option>
              <option value={"Anual"}>Anual</option>
            </NativeSelect>
          </FormControl>
          <FormControl className="w-[140px] ml-[10px]">
            <InputLabel
              style={{ color: "#fff" }}
              variant="standard"
              htmlFor="age-select-2"
            >
              Ctegoría
            </InputLabel>
            <NativeSelect
              style={{ color: "#fff" }}
              className="text-[20px]"
              value={"Gym"}
            >
              <option value={"Gym"}>Gym</option>
              <option value={"Estudio"}>Estudio</option>
              <option value={"Despertador"}>Despertador</option>
            </NativeSelect>
          </FormControl>
        </div>
        <div className="col-span-4 col-start-2  h-[45px]">
          <TextField
            fullWidth
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
        </div>
        <div className="col-span-4 col-start-2 flex items-start justify-center">
          <div className=" flex flex-col gap-[20px]">
            <Typography className="text-[20px]">Sonido de alarma</Typography>
            <div className="flex flex-row justify-center items-center gap-[24px]">
              <img
                src="icons/spotify.svg"
                className="w-[48px] h-[48px] elevation-5"
                alt="spotify"
              />
              <IconButton
                disableRipple
                className="w-[48px] h-[48px] rounded-[10px] bg-white  color-black"
              >
                <UploadFileIcon className="w-[48px] h-[48px] text-[#1b202b] elevation-5" />
              </IconButton>
            </div>
          </div>
        </div>
        <div className="col-span-4 col-start-2 flex items-end mt-[96px]  justify-center">
          <div className="border-2 h-[48px] w-[200px] rounded-[10px] elevation-5 bg-white flex flex-row px-[14px] gap-[14px] items-center">
            <TextFieldsIcon className="w-[48px] h-[48px] text-[#1b202b] " />
            <ImageIcon className="w-[48px] h-[48px] text-[#1b202b] " />
            <UploadFileIcon className="w-[48px] h-[48px] text-[#1b202b] " />
          </div>
        </div>
        <div className="col-span-4 col-start-2 flex items-center justify-center gap-[40px] flex-row">
          <Link href="/">
            <Button
              variant="text"
              className="w-[124px] h-[44px] bg-[#841C35] text-white"
            >
              Cancelar
            </Button>
          </Link>
          <Link href="/">
            <Button
              variant="text"
              className="w-[135px] h-[44px] bg-white text-black"
            >
              Guardar
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreateAlarmPage;

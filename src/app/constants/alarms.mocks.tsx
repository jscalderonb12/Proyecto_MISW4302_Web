import React from "react";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import NightsStayIcon from "@mui/icons-material/NightsStay";

export interface IAlarm {
  id?: number;
  icon: () => React.ReactNode;
  title: string;
  hour: string;
  hourDetail?: string;
  minuteDetail?: string;
  frequency: string;
  frequencyValue?: string;
  category?: string;
  state?: string;
}

export const ALARMS: IAlarm[] = [
  {
    id: 1,
    icon: (): React.ReactNode => (
      <FitnessCenterIcon className="h-[80px] w-[80px] elevation-5" />
    ),
    title: "Gimnasio",
    hour: "18:30",
    hourDetail: "18",
    minuteDetail: "30",
    frequency: "jue, 22 ago",
    frequencyValue: "Única vez",
    category: "Gym",
  },
  {
    id: 2,
    icon: (): React.ReactNode => (
      <LocalLibraryIcon className="h-[80px] w-[80px] elevation-5" />
    ),
    title: "Practicar Noruego",
    hour: "18:00",
    hourDetail: "18",
    minuteDetail: "00",
    frequency: "L, M, X, J, V",
    frequencyValue: "Semanal",
    category: "Estudio",
  },
  {
    id: 3,
    icon: (): React.ReactNode => (
      <NightsStayIcon className="h-[80px] w-[80px] elevation-5" />
    ),
    title: "Hora de dormir",
    hour: "22:00",
    hourDetail: "22",
    minuteDetail: "00",
    frequency: "L, M, X, J",
    frequencyValue: "Semanal",
    category: "Despertador",
  },
];
export const ALARMS_RECORD: IAlarm[] = [
  {
    icon: (): React.ReactNode => (
      <LocalLibraryIcon className="h-[80px] w-[80px] elevation-5" />
    ),
    title: "Practicar Noruego",
    hour: "18:00",
    frequency: "jue, 22 ago",
    state: "Descartado",
  },
  {
    icon: (): React.ReactNode => (
      <LocalLibraryIcon className="h-[80px] w-[80px] elevation-5" />
    ),
    title: "Practicar Noruego",
    hour: "18:25",
    frequency: "jue, 22 ago",
    state: "Pospuesto",
  },
  {
    icon: (): React.ReactNode => (
      <LocalLibraryIcon className="h-[80px] w-[80px] elevation-5" />
    ),
    title: "Practicar Noruego",
    hour: "18:20",
    frequency: "jue, 22 ago",
    state: "Pospuesto",
  },
  {
    icon: (): React.ReactNode => (
      <LocalLibraryIcon className="h-[80px] w-[80px] elevation-5" />
    ),
    title: "Practicar Noruego",
    hour: "18:15",
    frequency: "jue, 22 ago",
    state: "Pospuesto",
  },
  {
    icon: (): React.ReactNode => (
      <LocalLibraryIcon className="h-[80px] w-[80px] elevation-5" />
    ),
    title: "Practicar Noruego",
    hour: "18:10",
    frequency: "jue, 22 ago",
    state: "Pospuesto",
  },
];

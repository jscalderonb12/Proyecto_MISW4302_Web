import React from "react";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import NightsStayIcon from "@mui/icons-material/NightsStay";

export const ALARMS = [
  {
    icon: (): React.ReactNode => (
      <FitnessCenterIcon className="h-[80px] w-[80px] elevation-5" />
    ),
    title: "Gimnasio",
    hour: "18:30",
    frequency: "jue, 22 ago",
  },
  {
    icon: (): React.ReactNode => (
      <LocalLibraryIcon className="h-[80px] w-[80px] elevation-5" />
    ),
    title: "Practicar Noruego",
    hour: "18:00",
    frequency: "L, M, X, J, V",
  },
  {
    icon: (): React.ReactNode => (
      <NightsStayIcon className="h-[80px] w-[80px] elevation-5" />
    ),
    title: "Hora de dormir",
    hour: "22:00",
    frequency: "L, M, X, J",
  },
];

export const ALARMS_RECORD = [
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

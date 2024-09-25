import Typography from "@mui/material/Typography";
import Alarms from "@/app/components/Alarms";
import { ALARMS } from "@/app/constants/alarms.mocks";
export default function Home() {
  return (
    <div className="animate__animated animate__fadeIn m-0 grid grid-cols-12">
      <div className="col-span-12">
        <Typography className="flex-center title-size mt-[40px] mb-[40px]">
          Alarmas
        </Typography>
      </div>

      {ALARMS.map(
        (
          alarmData: {
            icon: Function;
            title: string;
            hour: string;
            frequency: string;
            state?: string;
          },
          index: number,
        ) => (
          <Alarms key={index} data={alarmData} />
        ),
      )}
    </div>
  );
}

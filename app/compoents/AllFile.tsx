"use client"
import { SidebarUI } from "./sidebar/Sidebar";
import StatsBox from "./stats/StatsBox";
import { Login } from "./login/Login";
import { AstrologerFormUI } from "./Astrologer/AstrologerForm";
import { AstrologerProfile } from "./Astrologer/AstrologerProfile";
import { AstrologerList } from "./Astrologer/AstrologerList";
import { GenericModalUI } from "./customButton/GenericModalUI";
import FilterUI from "./Astrologer/Filter";
import { StatusChart } from "./stats/StatusChart";
import Header from "./header/Header";
export default function AllFile() {
  return (
    <div className=" flex flex-col h-screen w-full">
      <SidebarUI />
      <Login />
      <Header />
      <div className="">
        <StatsBox />

        <FilterUI />
        <AstrologerList />
        <StatusChart
          stats={{
            total: 10,
            free: 5,
            busy: 3,
            offline: 2,
          }}
          rating={4.5}
          experience={5}
        />
        {/* <AstrologerFormUI/> */}
        {/* <AstrologerProfile onClose={() => {}} /> */}
        {/* <GenericModalUI  /> */}
      </div>
    </div>
  );
}

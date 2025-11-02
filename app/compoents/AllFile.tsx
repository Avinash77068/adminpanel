"use client";
import React, { useState } from "react";
import { SidebarUI } from "./sidebar/Sidebar";
import StatsBox from "./stats/StatsBox";
import { Login } from "./login/Login";
import { AstrologerFormUI } from "./Astrologer/AstrologerForm";
import { AstrologerProfile } from "./Astrologer/AstrologerProfile";
import { AstrologerList } from "./Astrologer/AstrologerList";
import { GenericModalUI } from "./customModal/GenericModalUI";
import FilterUI from "./Astrologer/Filter";
import { StatusChart } from "./stats/StatusChart";
import Header from "./header/Header";
import SettingsPage from "./Astrologer/SettingPage";
import AnalyticsPage from "./stats/AnalyticsPage";

export default function AllFile() {
  const [page, setPage] = useState("dashboard");
  const [sidebar, setsidebar] = useState<boolean>(true);
  const [status, setStatus] = useState("Free");
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [profileModal, setProfileModal] = useState<boolean>(false);
  const [profileEditModal, setProfileEditModal] = useState<boolean>(false);
  return (
    <div className="flex h-screen overflow-hidden w-full bg-gray-100">
      {/* sideba */}
      <SidebarUI
        sidebar={sidebar}
        setsidebar={setsidebar}
        page={page}
        setPage={setPage}
      />

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        {/* HEADER */}
        <Header sidebar={sidebar} setsidebar={setsidebar} />

        {/* PAGE CONTENT */}
        <main className="flex-1 px-4 space-y-6">
          {/* Dashboard */}
          {page === "dashboard" && (
            <>
              <StatsBox />
              <StatusChart
                stats={{ total: 50, free: 20, busy: 15, offline: 15 }}
                rating={4.5}
                experience={8}
              />
            </>
          )}
          {page === "analytics" && <AnalyticsPage />}
          {/* Astrologer Management */}
          {page === "astrologer" && (
            <>
              <FilterUI />
              <AstrologerList
                setDeleteModal={setDeleteModal}
                setProfileModal={setProfileModal}
                setProfileEditModal={setProfileEditModal}
              />
            </>
          )}

          {/* Hidden UI Components (temporarily kept) */}
          {page === "addAstrologer" && (
            <AstrologerFormUI
              onClose={() => setPage("astrologer")}
              setStatus={setStatus}
            />
          )}
          {page === "settings" && <SettingsPage />}
          {deleteModal && (
            <GenericModalUI
              title="Delete Astrologer"
              description="Are you sure you want to delete this astrologer?"
              onClose={() => setDeleteModal(false)}
              onConfirm={() => console.log("Delete confirmed")}
            />
          )}
          {profileModal && (
            <AstrologerProfile onClose={() => setProfileModal(false)} />
          )}
          {profileEditModal && (
            <AstrologerFormUI onClose={() => setProfileEditModal(false)} />
          )}
          {page === "login" && <Login />}
        </main>
      </div>
    </div>
  );
}

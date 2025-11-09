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
  // State
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [page, setPage] = useState("dashboard");
  const [sidebar, setSidebar] = useState<boolean>(true);
  const [status, setStatus] = useState("Free");
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [profileModal, setProfileModal] = useState<boolean>(false);
  const [profileEditModal, setProfileEditModal] = useState<boolean>(false);

  // If not logged in → show Login page
  if (!isAuthenticated) {
    return <Login onLoginSuccess={() => setIsAuthenticated(true)} />;
  }

  // After login → show main dashboard
  return (
    <div className="flex h-screen overflow-hidden w-full bg-gray-100">
      {/* Sidebar */}
      <SidebarUI
        sidebar={sidebar}
        setsidebar={setSidebar}
        page={page}
        setPage={setPage}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-y-auto hide-scrollbar">
        <Header sidebar={sidebar} setsidebar={setSidebar} />

        <main className="flex-1">
          {/* Dashboard Page */}
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

          {/* Analytics Page */}
          {page === "analytics" && <AnalyticsPage />}

          {/* Astrologer Management Page */}
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

          {/* Add Astrologer */}
          {page === "addAstrologer" && (
            <AstrologerFormUI
              onClose={() => setPage("astrologer")}
              setStatus={setStatus}
            />
          )}

          {/* Settings Page */}
          {page === "settings" && <SettingsPage />}

          {/* Modals */}
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
        </main>
      </div>
    </div>
  );
}

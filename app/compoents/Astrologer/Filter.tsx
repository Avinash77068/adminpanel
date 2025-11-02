import { FilterX, UserPlus } from "lucide-react";

export default function FilterUI() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 my-4">
      <div className="flex flex-wrap justify-between items-center gap-4">
        {/* LEFT SECTION */}
        <div className="flex items-center flex-wrap gap-3">
          <h2 className="text-xl font-bold text-gray-900">Astrologers</h2>

          {/* STATUS FILTER BUTTONS */}
          <div className="flex space-x-3">
            {["All", "Free", "Busy", "Offline"].map((status, idx) => {
              const colors = [
                "bg-blue-500",
                "bg-green-500",
                "bg-red-500",
                "bg-gray-500",
              ];
              return (
                <button
                  key={idx}
                  className={`${colors[idx]} text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition`}
                >
                  {status}
                </button>
              );
            })}
          </div>

          {/* SKILL FILTER DROPDOWN */}
          <details className="relative group">
            <summary className="flex gap-2 items-center px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium text-gray-700 cursor-pointer hover:bg-gray-200">
              Filter by Skills
              <FilterX className="w-4 h-4 text-amber-600" />
            </summary>

            <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg max-h-80 overflow-y-auto z-50 p-3">
              {/* EXAMPLE CATEGORY */}
              <div className="mb-3">
                <h4 className="text-xs font-bold text-orange-600 mb-1 uppercase tracking-wider">
                  Vedic Astrology
                </h4>
                <div className="space-y-1 pl-2">
                  {["Horoscope", "Marriage", "Career"].map((skill) => (
                    <label key={skill} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="w-4 h-4 accent-orange-500"
                      />
                      <span className="text-sm text-gray-700">{skill}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* CLEAR BUTTON */}
              <button className="w-full text-xs text-orange-600 hover:text-orange-500 transition font-medium py-2">
                Clear All Filters
              </button>
            </div>
          </details>

          {/* ACTIVE FILTER BADGE (optional visual) */}
          <button className="flex items-center space-x-2 px-4 py-2.5 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-lg hover:from-orange-600 hover:to-amber-700 transition shadow-md">
            <UserPlus className="w-4 h-4" />
            <span>Clear All Filters</span>
          </button>
        </div>

        {/* RIGHT SECTION - ADD BUTTON */}
        <button className="flex items-center space-x-2 px-4 py-2.5 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-lg hover:from-orange-600 hover:to-amber-700 transition shadow-md">
          <UserPlus className="w-4 h-4" />
          <span>Add Astrologer</span>
        </button>
      </div>
    </div>
  );
}

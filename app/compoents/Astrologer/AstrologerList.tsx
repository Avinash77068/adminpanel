import React from "react";
import {
  Eye,
  Edit,
  Trash2,
  Star,
  Clock,
  IndianRupee,
  Users,
} from "lucide-react";

export const AstrologerList = ({setDeleteModal, setProfileModal, setProfileEditModal}: {setDeleteModal: (modal: boolean) => void, setProfileModal: (modal: boolean) => void, setProfileEditModal: (modal: boolean) => void}) => {
  const astrologers = [
    {
      id: 1,
      name: "Pandit Rajesh Sharma",
      imageUrl:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=300&q=80",
      email: "rajesh.sharma@example.com",
      phone: "+91 98765 43210",
      specialization: ["Vedic Astrology", "Palmistry", "Numerology"],
      experience: 15,
      rating: 4.8,
      hourlyRate: 1200,
      totalConsultations: 2500,
      status: "free",
    },
    {
      id: 2,
      name: "Acharya Meena Devi",
      imageUrl:
        "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=300&q=80",
      email: "meena.devi@example.com",
      phone: "+91 87654 32109",
      specialization: ["Tarot Reading", "Numerology"],
      experience: 10,
      rating: 4.6,
      hourlyRate: 900,
      totalConsultations: 1800,
      status: "busy",
    },
    {
      id: 5,
      name: "Guru Ravi Anand",
      imageUrl:
        "https://images.unsplash.com/photo-1603415526960-f7e0328b5c9b?auto=format&fit=crop&w=300&q=80",
      email: "ravi.anand@example.com",
      phone: "+91 99887 66554",
      specialization: ["Kundli Matching", "Horoscope Analysis"],
      experience: 20,
      rating: 4.9,
      hourlyRate: 1500,
      totalConsultations: 3000,
      status: "offline",
    },
    {
      id: 4,
      name: "Guru Ravi Anand",
      imageUrl:
        "https://images.unsplash.com/photo-1603415526960-f7e0328b5c9b?auto=format&fit=crop&w=300&q=80",
      email: "ravi.anand@example.com",
      phone: "+91 99887 66554",
      specialization: ["Kundli Matching", "Horoscope Analysis"],
      experience: 20,
      rating: 4.9,
      hourlyRate: 1500,
      totalConsultations: 3000,
      status: "offline",
    },
    {
      id: 6,
      name: "Guru Ravi Anand",
      imageUrl:
        "https://images.unsplash.com/photo-1603415526960-f7e0328b5c9b?auto=format&fit=crop&w=300&q=80",
      email: "ravi.anand@example.com",
      phone: "+91 99887 66554",
      specialization: ["Kundli Matching", "Horoscope Analysis"],
      experience: 20,
      rating: 4.9,
      hourlyRate: 1500,
      totalConsultations: 3000,
      status: "offline",
    },
    {
      id: 7,
      name: "Guru Ravi Anand",
      imageUrl:
        "https://images.unsplash.com/photo-1603415526960-f7e0328b5c9b?auto=format&fit=crop&w=300&q=80",
      email: "ravi.anand@example.com",
      phone: "+91 99887 66554",
      specialization: ["Kundli Matching", "Horoscope Analysis"],
      experience: 20,
      rating: 4.9,
      hourlyRate: 1500,
      totalConsultations: 3000,
      status: "offline",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "free":
        return "bg-green-100 text-green-700 border-green-200";
      case "busy":
        return "bg-red-100 text-red-700 border-red-200";
      case "offline":
        return "bg-gray-100 text-gray-700 border-gray-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const getStatusDot = (status: string) => {
    switch (status) {
      case "free":
        return "bg-green-500";
      case "busy":
        return "bg-red-500";
      case "offline":
        return "bg-gray-400";
      default:
        return "bg-gray-400";
    }
  };

  return (
    <div className="w-full overflow-y-auto scrollbar-hide max-h-[calc(100vh-250px)]">
      {/* TABLE VIEW (Desktop) */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              {[
                "Astrologer",
                "Contact",
                "Specialization",
                "Experience",
                "Rating",
                "Rate",
                "Status",
                "Actions",
              ].map((header) => (
                <th
                  key={header}
                  className="text-left py-4 px-4 font-semibold text-gray-700 text-sm"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {astrologers.map((a) => (
              <tr
                key={a.id}
                className="border-b border-gray-100 hover:bg-gray-50 transition"
              >
                {/* Astrologer Info */}
                <td className="py-4 px-4">
                  <div className="flex items-center space-x-3">
                    <img
                      src={a.imageUrl}
                      alt={a.name}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-gray-200"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">{a.name}</p>
                      <p className="text-sm text-gray-500">
                        {a.totalConsultations} consultations
                      </p>
                    </div>
                  </div>
                </td>

                {/* Contact */}
                <td className="py-4 px-4">
                  <p className="text-sm text-gray-900">{a.email}</p>
                  <p className="text-sm text-gray-500">{a.phone}</p>
                </td>

                {/* Specialization */}
                <td className="py-4 px-4">
                  <div className="flex flex-wrap gap-1">
                    {a.specialization.slice(0, 2).map((s, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 bg-blue-50 text-blue-700 rounded-full border border-blue-200"
                      >
                        {s}
                      </span>
                    ))}
                    {a.specialization.length > 2 && (
                      <span className="text-xs px-2 py-1 bg-gray-50 text-gray-700 rounded-full border border-gray-200">
                        +{a.specialization.length - 2}
                      </span>
                    )}
                  </div>
                </td>

                {/* Experience */}
                <td className="py-4 px-4 text-center text-gray-700">
                  <div className="flex items-center justify-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{a.experience} yrs</span>
                  </div>
                </td>

                {/* Rating */}
                <td className="py-4 px-4 text-center">
                  <div className="flex items-center justify-center text-yellow-600 space-x-1">
                    <Star className="w-4 h-4 fill-current" />
                    <span>{a.rating}</span>
                  </div>
                </td>

                {/* Rate */}
                <td className="py-4 px-4 text-center text-gray-700">
                  <div className="flex items-center justify-center space-x-1">
                    <IndianRupee className="w-4 h-4" />
                    <span>{a.hourlyRate}</span>
                  </div>
                </td>

                {/* Status */}
                <td className="py-4 px-4 text-center">
                  <span
                    className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(
                      a.status
                    )}`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full ${getStatusDot(
                        a.status
                      )}`}
                    ></span>
                    <span className="capitalize">{a.status}</span>
                  </span>
                </td>

                {/* Actions */}
                <td className="py-4 px-4 text-center">
                  <div className="flex justify-center space-x-2">
                    <button
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
                      onClick={() => setProfileModal(true)}
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button
                      className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition"
                      onClick={() => setProfileEditModal(true)}
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                      onClick={() => setDeleteModal(true)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* CARD VIEW (Mobile) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden mt-4">
        {astrologers.map((a) => (
          <div
            key={a.id}
            className="bg-white shadow-sm rounded-xl p-4 border border-gray-200"
          >
            <div className="flex items-center space-x-3 mb-3">
              <img
                src={a.imageUrl}
                alt={a.name}
                className="w-14 h-14 rounded-full object-cover ring-2 ring-gray-200"
              />
              <div>
                <p className="font-semibold text-gray-900">{a.name}</p>
                <p className="text-xs text-gray-500">
                  {a.totalConsultations} consultations
                </p>
              </div>
            </div>

            <div className="text-sm text-gray-700 space-y-1">
              <p>
                <span className="font-medium">Email:</span> {a.email}
              </p>
              <p>
                <span className="font-medium">Phone:</span> {a.phone}
              </p>
              <p>
                <span className="font-medium">Specialization:</span>{" "}
                {a.specialization.join(", ")}
              </p>
              <p className="flex items-center gap-1">
                <Clock className="w-4 h-4" /> {a.experience} yrs
              </p>
              <p className="flex items-center gap-1 text-yellow-600">
                <Star className="w-4 h-4 fill-current" /> {a.rating}
              </p>
              <p className="flex items-center gap-1">
                <IndianRupee className="w-4 h-4" /> {a.hourlyRate}
              </p>
              <div className="mt-2">
                <span
                  className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(
                    a.status
                  )}`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${getStatusDot(a.status)}`}
                  ></span>
                  <span className="capitalize">{a.status}</span>
                </span>
              </div>
            </div>

            <div className="flex justify-end space-x-2 mt-4">
              <button
                className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
                onClick={() => setProfileModal(true)}
              >
                <Eye className="w-4 h-4" />
              </button>
              <button
                className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition"
                onClick={() => setProfileEditModal(true)}
              >
                <Edit className="w-4 h-4" />
              </button>
              <button
                className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                onClick={() => setDeleteModal(true)}
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

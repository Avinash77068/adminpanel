import React from "react";
import {
  X,
  Star,
  Clock,
  IndianRupee,
  Calendar,
  Users,
  Mail,
  Phone,
  Languages,
} from "lucide-react";

export const AstrologerProfile = ({ onClose }: { onClose: () => void }) => {
  const astrologer = {
    name: "Pandit Rajesh Sharma",
    status: "free",
    rating: 4.8,
    hourlyRate: 1200,
    experience: 15,
    totalConsultations: 2500,
    joinedDate: "2020-04-15",
    email: "rajesh.sharma@example.com",
    phone: "+91 98765 43210",
    specialization: ["Vedic Astrology", "Palmistry", "Numerology"],
    languages: ["Hindi", "English", "Sanskrit"],
    bio: "Pandit Rajesh Sharma is a renowned astrologer with 15+ years of experience in Vedic astrology, helping thousands of clients with accurate predictions and remedies.",
    imageUrl:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=300&q=80",
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "free":
        return "bg-green-100 text-green-700 border-green-300";
      case "busy":
        return "bg-red-100 text-red-700 border-red-300";
      default:
        return "bg-gray-100 text-gray-700 border-gray-300";
    }
  };
  const getStatusDot = (status: string) => {
    switch (status) {
      case "free":
        return "bg-green-500";
      case "busy":
        return "bg-red-500";
      default:
        return "bg-gray-400";
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-xl shadow-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="relative">
          <div className="bg-gradient-to-r from-orange-500 to-amber-600 h-32 rounded-t-2xl"></div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 rounded-lg text-white transition"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="absolute -bottom-16 left-8">
            <img
              src={astrologer.imageUrl}
              alt={astrologer.name}
              className="w-32 h-32 rounded-2xl object-cover ring-8 ring-white shadow-xl"
            />
          </div>
        </div>

        {/* Body */}
        <div className="pt-20 px-8 pb-8">
          {/* Header Info */}
          <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {astrologer.name}
              </h2>
              <div className="flex items-center space-x-3">
                <span
                  className={`inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold border-2 ${getStatusColor(
                    astrologer.status
                  )}`}
                >
                  <span
                    className={`w-2.5 h-2.5 rounded-full ${getStatusDot(
                      astrologer.status
                    )}`}
                  ></span>
                  <span className="capitalize">{astrologer.status}</span>
                </span>
                <div className="flex items-center space-x-1 bg-yellow-50 px-3 py-1.5 rounded-full border-2 border-yellow-200">
                  <Star className="w-4 h-4 text-yellow-600 fill-current" />
                  <span className="font-bold text-yellow-700">
                    {astrologer.rating}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2 bg-orange-50 px-6 py-3 rounded-xl border-2 border-orange-200">
              <IndianRupee className="w-6 h-6 text-orange-600" />
              <div>
                <p className="text-sm text-gray-600">Hourly Rate</p>
                <p className="text-2xl font-bold text-orange-600">
                  {astrologer.hourlyRate}
                </p>
              </div>
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
              <div className="flex items-center space-x-3">
                <Clock className="w-8 h-8 text-blue-600" />
                <div>
                  <p className="text-sm text-blue-700 font-medium">
                    Experience
                  </p>
                  <p className="text-2xl font-bold text-blue-900">
                    {astrologer.experience} Years
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-green-50 p-4 rounded-xl border border-green-200">
              <div className="flex items-center space-x-3">
                <Users className="w-8 h-8 text-green-600" />
                <div>
                  <p className="text-sm text-green-700 font-medium">
                    Consultations
                  </p>
                  <p className="text-2xl font-bold text-green-900">
                    {astrologer.totalConsultations}
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-purple-50 p-4 rounded-xl border border-purple-200">
              <div className="flex items-center space-x-3">
                <Calendar className="w-8 h-8 text-purple-600" />
                <div>
                  <p className="text-sm text-purple-700 font-medium">Joined</p>
                  <p className="text-lg font-bold text-purple-900">
                    {new Date(astrologer.joinedDate).toLocaleDateString(
                      "en-IN",
                      { month: "short", year: "numeric" }
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Contact Information
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-700">{astrologer.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-700">{astrologer.phone}</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Specializations
              </h3>
              <div className="flex flex-wrap gap-2">
                {astrologer.specialization.map((spec, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-white text-orange-700 rounded-lg font-medium border-2 border-orange-200 shadow-sm"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center space-x-2">
                <Languages className="w-5 h-5" />
                <span>Languages</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {astrologer.languages.map((lang, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-white text-blue-700 rounded-lg font-medium border-2 border-blue-200 shadow-sm"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">About</h3>
              <p className="text-gray-700 leading-relaxed">{astrologer.bio}</p>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-lg hover:from-orange-600 hover:to-amber-700 transition font-semibold shadow-md hover:shadow-lg"
            >
              Close Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

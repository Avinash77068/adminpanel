

export default function StatsBox({ rating=5,experience=5}:any) {
  return (
    <div className="grid grid-cols-1 py-4 md:grid-cols-4 gap-6 mb-6">
      {[
        { label: "Total Astrologers", count: "10", color: "blue" },
        { label: "Available", count: "10", color: "green" },
        { label: "Busy", count: "10", color: "red" },
        { label: "Offline", count: "10", color: "gray" },
        { label: "avarage rating", count: rating, color: "yellow" },
        { label: "avarage experience", count: experience, color: "purple" },
        
      ].map((item) => (
        <div
          key={item.label}
          className={`bg-white rounded-xl shadow-md p-6 border-l-4 border-${item.color}-500`}
        >
          <p className="text-gray-600 text-sm font-medium">{item.label}</p>
          <p className={`text-3xl font-bold text-${item.color}-600 mt-2`}>
            {item.count}
            {item.label === "avarage rating" && " / 5"}
            {item.label === "avarage experience" && " years"}
          </p>
        </div>
      ))}
    </div>
  );
}

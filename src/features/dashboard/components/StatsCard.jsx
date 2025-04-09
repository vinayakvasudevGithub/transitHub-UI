const StatsCard = ({ title, value, change, icon: Icon, trend }) => {
  const trendColor = trend === "up" ? "text-green-600" : "text-red-600";
  const trendIcon = trend === "up" ? "↑" : "↓";

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <p className="text-2xl font-semibold text-gray-900 mt-1">{value}</p>
          <p className={`text-sm mt-1 ${trendColor}`}>
            {trendIcon} {change}% from last month
          </p>
        </div>
        <div className="p-3 rounded-full bg-primary-100 text-primary-600">
          <Icon className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
};

export default StatsCard;

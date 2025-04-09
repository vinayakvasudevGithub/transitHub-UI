import {
  ArrowUpIcon,
  ArrowDownIcon,
  UserGroupIcon,
  ShoppingCartIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";
import StatsCard from "../components/StatsCard";
import Chart from "../components/Chart";
import DataTable from "../components/DataTable";

const Dashboard = () => {
  const recentOrders = [
    {
      id: "#1234",
      customer: "John Smith",
      date: "2023-05-15",
      amount: "$125.00",
      status: "Delivered",
    },
    {
      id: "#1235",
      customer: "Sarah Johnson",
      date: "2023-05-14",
      amount: "$89.00",
      status: "Processing",
    },
    {
      id: "#1236",
      customer: "Michael Brown",
      date: "2023-05-14",
      amount: "$235.00",
      status: "Shipped",
    },
    {
      id: "#1237",
      customer: "Emily Davis",
      date: "2023-05-13",
      amount: "$56.00",
      status: "Delivered",
    },
    {
      id: "#1238",
      customer: "Robert Wilson",
      date: "2023-05-12",
      amount: "$178.00",
      status: "Processing",
    },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Revenue"
          value="$12,345"
          change="12"
          trend="up"
          icon={CurrencyDollarIcon}
        />
        <StatsCard
          title="Total Orders"
          value="1,234"
          change="8"
          trend="up"
          icon={ShoppingCartIcon}
        />
        <StatsCard
          title="New Customers"
          value="246"
          change="4"
          trend="up"
          icon={UserGroupIcon}
        />
        <StatsCard
          title="Return Rate"
          value="3.2%"
          change="0.5"
          trend="down"
          icon={ArrowDownIcon}
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Sales Overview
          </h2>
          <Chart type="line" />
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Revenue Sources
          </h2>
          <Chart type="bar" />
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium text-gray-900">Recent Orders</h2>
          <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">
            View all
          </button>
        </div>
        <DataTable data={recentOrders} />
      </div>
    </div>
  );
};

export default Dashboard;

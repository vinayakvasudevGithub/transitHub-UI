// import DataTable from "../components/DataTable";

import DataTable from "../components/DataTable";

const Users = () => {
  const users = [
    {
      id: "U001",
      name: "John Smith",
      email: "john@example.com",
      role: "Admin",
      joined: "2023-01-15",
    },
    {
      id: "U002",
      name: "Sarah Johnson",
      email: "sarah@example.com",
      role: "User",
      joined: "2023-02-20",
    },
    {
      id: "U003",
      name: "Michael Brown",
      email: "michael@example.com",
      role: "User",
      joined: "2023-03-05",
    },
    {
      id: "U004",
      name: "Emily Davis",
      email: "emily@example.com",
      role: "Editor",
      joined: "2023-04-12",
    },
    {
      id: "U005",
      name: "Robert Wilson",
      email: "robert@example.com",
      role: "User",
      joined: "2023-05-18",
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Users</h1>
        <button className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
          Add User
        </button>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <DataTable data={users} />
      </div>
    </div>
  );
};

export default Users;

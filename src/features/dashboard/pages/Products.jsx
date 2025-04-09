import DataTable from "../components/DataTable";

const Products = () => {
  const products = [
    {
      id: "P001",
      name: "Wireless Headphones",
      category: "Electronics",
      price: "$99.99",
      stock: 45,
    },
    {
      id: "P002",
      name: "Smart Watch",
      category: "Electronics",
      price: "$199.99",
      stock: 32,
    },
    {
      id: "P003",
      name: "Running Shoes",
      category: "Sports",
      price: "$79.99",
      stock: 78,
    },
    {
      id: "P004",
      name: "Coffee Maker",
      category: "Home",
      price: "$49.99",
      stock: 12,
    },
    {
      id: "P005",
      name: "Backpack",
      category: "Accessories",
      price: "$39.99",
      stock: 56,
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Products</h1>
        <button className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
          Add Product
        </button>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <DataTable data={products} />
      </div>
    </div>
  );
};

export default Products;

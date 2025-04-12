// import React, { useEffect, useState } from "react";
// import BusPanel from "../features/dashboard/bus/pages/BusPanel";
// import axios from "axios";
// import Loading from "../components/Loading";

// const Admin = () => {
//   const [profile, setProfile] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const controller = new AbortController();

//     const fetchProfile = async () => {
//       try {
//         const response = await axios.get("http://localhost:2001/auth/profile", {
//           withCredentials: true,
//           signal: controller.signal,
//         });
//         setProfile(response.data);
//       } catch (err) {
//         if (err.name !== "CanceledError") {
//           setError(err.response?.data?.message || err.message);
//         }
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProfile();

//     return () => {
//       controller.abort(); // 💥 cancels fetch
//     };
//   }, []);

//   if (loading) return <Loading />;

//   if (error) return <div>Error: {error}</div>;
//   if (!profile) return <div>No profile data found</div>; // handle null safely

//   const { user, buses } = profile;

//   return (
//     <div>
//       <header>Dashboard</header>
//       <div className="container mx-auto px-4 py-8">
//         <div className="bg-white rounded-lg shadow-md p-6 mb-8">
//           <h2 className="text-2xl font-bold mb-4">Admin Profile</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <p className="text-gray-600">Name:</p>
//               <p className="font-medium">{profile.user.name}</p>
//             </div>
//             <div>
//               <p className="text-gray-600">Email:</p>
//               <p className="font-medium">{profile.user.email}</p>
//             </div>
//             <div>
//               <p className="text-gray-600">User ID:</p>
//               <p className="font-medium">{profile.user.id}</p>
//             </div>
//           </div>
//         </div>
//         <BusPanel buses={buses} />
//       </div>
//     </div>
//   );
// };

// export default Admin;

// import React, { useEffect, useState } from "react";
// import BusPanel from "../features/dashboard/bus/pages/BusPanel";
// import axios from "axios";
// import Loading from "../components/Loading";

// const Admin = () => {
//   const [profile, setProfile] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const source = axios.CancelToken.source();
//     const fetchProfile = async () => {
//       try {
//         const response = await axios.get("http://localhost:2001/auth/profile", {
//           withCredentials: true,
//           cancelToken: source.token,
//         });
//         setProfile(response.data);
//       } catch (err) {
//         if (!axios.isCancel(err)) {
//           setError(
//             err.response?.data?.message ||
//               err.message ||
//               "Failed to fetch profile"
//           );
//           console.error("Profile fetch error:", err);
//         }
//       } finally {
//         if (!source.token.reason) {
//           setLoading(false);
//         }
//         // if (!source.token.reason) {
//         //   setLoading(false);
//         // }
//       }
//     };
//     fetchProfile();
//     return () => {
//       source.cancel("Component unmounted, request canceled");
//     };
//   }, []);

//   if (loading) return <Loading />;

//   const { user, buses } = profile;
//   console.log(buses);

//   return (
//     <div>
//       <header>Dashboard</header>
//       <div className="container mx-auto px-4 py-8">
//         <div className="bg-white rounded-lg shadow-md p-6 mb-8">
//           <h2 className="text-2xl font-bold mb-4">Admin Profile</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <p className="text-gray-600">Name:</p>
//               <p className="font-medium">{profile.user.name}</p>
//             </div>
//             <div>
//               <p className="text-gray-600">Email:</p>
//               <p className="font-medium">{profile.user.email}</p>
//             </div>
//             <div>
//               <p className="text-gray-600">User ID:</p>
//               <p className="font-medium">{profile.user.id}</p>
//             </div>
//           </div>
//         </div>
//         <BusPanel buses={buses} />
//       </div>
//     </div>
//   );
// };

// export default Admin;

// import React, { useEffect, useState } from "react";
// import BusPanel from "../features/dashboard/bus/pages/BusPanel";
// import axios from "axios";
// import Loading from "../components/Loading";
// import ErrorMessage from "../components/ErrorMessage"; // Assume you have this component
// import ErrorMessage from "../components/ErrorMessage";
// const Admin = () => {
//   const [profile, setProfile] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const source = axios.CancelToken.source();

//     const fetchProfile = async () => {
//       try {
//         const response = await axios.get("http://localhost:2001/auth/profile", {
//           withCredentials: true,
//           cancelToken: source.token,
//         });
//         // setTimeout(() => {
//         setProfile(response.data);
//         // }, 3000);
//       } catch (err) {
//         if (!axios.isCancel(err)) {
//           const errorMessage =
//             err.response?.data?.message ||
//             err.message ||
//             "Failed to fetch profile";
//           setError(errorMessage);
//           console.error("Profile fetch error:", err);
//         }
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProfile();

//     return () => {
//       source.cancel("Component unmounted, request canceled");
//     };
//   }, []);

//   if (loading) return <Loading />;
//   // if (error)
//   //   return (
//   //     <ErrorMessage message={error} retryFn={() => window.location.reload()} />
//   //   );
//   if (!profile)
//     return setTimeout(() => {
//       <ErrorMessage message="No profile data found" />;
//     }, 3000);

//   const { user, buses } = profile;

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <header className="bg-white shadow-sm">
//         <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
//           <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
//         </div>
//       </header>

//       <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
//         <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
//           <div className="p-6">
//             <h2 className="text-xl font-semibold text-gray-800 mb-4">
//               Admin Profile
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <ProfileField label="Name" value={user.name} />
//               <ProfileField label="Email" value={user.email} />
//               <ProfileField label="User ID" value={user.id} />
//               <ProfileField label="Role" value={user.role || "Admin"} />
//             </div>
//           </div>
//         </div>

//         <section className="mb-8">
//           <h2 className="text-xl font-semibold text-gray-800 mb-4">
//             Bus Management
//           </h2>
//           <BusPanel buses={buses} />
//         </section>
//       </main>
//     </div>
//   );
// };

// // Reusable profile field component
// const ProfileField = ({ label, value }) => (
//   <div>
//     <p className="text-sm font-medium text-gray-500">{label}</p>
//     <p className="mt-1 text-sm text-gray-900">{value}</p>
//   </div>
// );

// export default Admin;

import React, { useEffect, useState } from "react";
// import BusPanel from "../features/dashboard/bus/pages/BusPanel";
import axios from "axios";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
// import Panel from "../features/dashboard/panel/Panel";

const Admin = () => {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [busLoading, setBusLoading] = useState(true);

  useEffect(() => {
    const source = axios.CancelToken.source();

    const fetchProfile = async () => {
      try {
        const response = await axios.get("http://localhost:2001/auth/profile", {
          withCredentials: true,
          cancelToken: source.token,
        });
        setProfile(response.data);

        if (response.data?.buses) {
          setBusLoading(false);
        }
      } catch (err) {
        if (!axios.isCancel(err)) {
          const errorMessage =
            err.response?.data?.message ||
            err.message ||
            "Failed to fetch profile";
          setError(errorMessage);
          console.error("Profile fetch error:", err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();

    return () => {
      source.cancel("Component unmounted, request canceled");
    };
  }, []);

  if (loading) return <Loading />;
  if (error)
    return (
      <ErrorMessage message={error} retryFn={() => window.location.reload()} />
    );

  if (!profile && !error)
    return <ErrorMessage message="No profile data found" />;

  const { user, buses } = profile;

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Admin Profile
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ProfileField label="Name" value={user.name} />
              <ProfileField label="Email" value={user.email} />
              <ProfileField label="User ID" value={user.id} />
              <ProfileField label="Role" value={user.role || "Admin"} />
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            {/* <Panel /> */}
          </div>
        </div>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Bus Management
          </h2>
          {busLoading ? (
            <div className="flex justify-center items-center p-8">
              <Loading />
            </div>
          ) : buses?.length > 0 ? (
            <div>
              <h1 className="text-2xl font-bold mb-4">
                you have {buses.length} buses
              </h1>
              {/* <BusPanel buses={buses} /> */}
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <p className="text-gray-500">No bus data available</p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

// Reusable profile field component
const ProfileField = ({ label, value }) => (
  <div>
    <p className="text-sm font-medium text-gray-500">{label}</p>
    <p className="mt-1 text-sm text-gray-900">{value}</p>
  </div>
);

export default Admin;

// // import React, { useContext, useEffect } from "react";
// // import { UserContext } from "../../context/UserContext";
// // const BookedPage = () => {
// //   const { user } = useContext(UserContext);
// //   useEffect(() => {
// //     user && window.location.reload();
// //   }, []);

// //   return <div>book</div>;
// // };

// // export default BookedPage;

// // import React, { useContext } from "react";
// // import { UserContext } from "../../context/UserContext";
// // import { useNavigate } from "react-router-dom";

// // const BookedPage = () => {
// //   const { user, loading } = useContext(UserContext);
// //   const navigate = useNavigate();

// //   if (loading) {
// //     return <div>Loading...</div>;
// //   }

// //   if (!user) {
// //     // Redirect to login if not authenticated
// //     navigate("/");
// //     return null;
// //   }

// //   return (
// //     <div className="p-4">
// //       <h1 className="text-2xl font-bold">Booking Confirmed</h1>
// //       <p>Thank you for your booking, {user.username || user.email}!</p>
// //       {/* Add your booking details here */}
// //     </div>
// //   );
// // };

// // export default BookedPage;

// import React, { useContext, useEffect } from "react";
// import { UserContext } from "../../context/UserContext";
// import { useNavigate } from "react-router-dom";

// const BookedPage = () => {
//   const { user, loading } = useContext(UserContext);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!loading && !user) {
//       // navigate("/");
//       console.log("no problem");
//     }
//   }, [user, loading, navigate]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!user) {
//     return null; // While the redirect is happening
//   }

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold">Booking Confirmed</h1>
//       {user?.email && <p>Thank you for your booking, {user.email}!</p>}
//     </div>
//   );
// };

// export default BookedPage;
import React from "react";

const BookedPage = () => {
  return <div>BookedPage</div>;
};

export default BookedPage;

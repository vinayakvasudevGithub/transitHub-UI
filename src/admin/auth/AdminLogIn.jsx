// import axios from "axios";
// import React, { useState } from "react";
// import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";

// const AdminLogIn = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await axios.post(
//         "http://localhost:2001/admin/login",
//         formData,
//         { withCredentials: true }
//       );

//       if (data.error) {
//         toast.error(data.error);
//       } else {
//         toast.success("successfull");
//         setFormData({ email: "", password: "" });
//         navigate("");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div>
//       <div>
//         <label>email</label>
//         <input
//           id="email"
//           name="email"
//           type="email"
//           autoComplete="email"
//           required
//           value={formData.email}
//           onChange={handleChange}
//         />
//       </div>
//       <div>
//         <label>password</label>
//         <input
//           id="password"
//           name="password"
//           type="password"
//           autoComplete="current-password"
//           required
//           value={formData.password}
//           onChange={handleChange}
//         />
//       </div>
//       <button onClick={handleSubmit}>submit</button>
//     </div>
//   );
// };

// export default AdminLogIn;

// import React, { useState } from "react";
// import axios from "axios";
// import { User } from ".types/User";
// import axiosClient from "./api/axiosClient";
// const CurdOperations = () => {
//   const [users, setUser] = useState<User[]>([]);
//   const [formData, setFormData] = useState<User[]>({
//     name: "",
//     email: "",
//     phone: "",
//   });
//   const [selectedId, setSelectedId] = useState<number | null>(null);

//   //
//   const handleFetchUser = async () => {
//     try {
//       const res = await axiosClient.get<User>("/users", formData);
//       setUser(res.data);
//       console.log("User Added", res.data);
//     } catch (error) {
//       console.log("error Fetching User", error);
//     }
//   };

//   const handleAddUser = async () => {
//     try {
//       const res = await axiosClient.post<User>("/users", formData);
//       setUser([...User, res.data]);
//       console.log("User Added", res.data);
//       setFormData({ name: "", email: "", phone: "" });
//     } catch (error) {
//       console.log("error Adding User", error);
//     }
//   };

//   const handleUpdateUser = async () => {
//     if (!selectedId) return alert("select a user ID to update");
//     try {
//       const res = await axiosClient.put<User>(`/users/${selectedId}`, formData);
//       setUser(
//         users.map((u) => (u.id === selectedId ? { ...u, ...formData } : u))
//       );
//       console.log("user Update:", res.data);
//       setSelectedId(null);
//       setFormData({ name: "", email: "", phone: "" });
//     } catch (error) {
//       console.log("error Updating User", error);
//     }
//   };
//   const handleDeleteUser = async (id: number) => {
//     try {
//       await axiosClient.delete(`/users${id}`);
//       setUser(users.filter((u)=>u.id!==id));
//       console.log("User Delete");
//     } catch (error) {
//       console.log("Error In Deleteing User", error);
//     }
//   };
//   return <></>;
// };

// export default CurdOperations;

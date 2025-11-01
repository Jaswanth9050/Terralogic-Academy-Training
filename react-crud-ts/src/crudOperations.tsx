import React, { useState } from "react";
// import axios from "axios";
// import { User } from ".types/User";

import axiosClient from "./api/axiosClient";
import { User } from "./types/User";

const CurdOperations:React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [formData, setFormData] = useState<User>({
    name: "",
    email: "",
    phone: "",
  });
  const [selectedId, setSelectedId] = useState<number | null>(null);

  //
  const handleFetchUser = async () => {
    try {
      const res = await axiosClient.get<User[]>("/users");
      setUsers(res.data);
      console.log("User Added", res.data);
    //   console.table("User Added", res.data);
    console.table(res.data)
    } catch (error) {
      console.log("error Fetching User", error);
      
    }
  };

  const handleAddUser = async () => {
    try {
      const res = await axiosClient.post<User>("/users", formData);
      setUsers([...users, res.data]);
      console.log("User Added", res.data);
      setFormData({ name: "", email: "", phone: "" });
    } catch (error) {
      console.log("error Adding User", error);
    }
  };

  const handleUpdateUser = async () => {
    if (!selectedId) return alert("select a user ID to update");
    try {
      const res = await axiosClient.put<User>(`/users/${selectedId}`, formData);
      setUsers(
        users.map((u) => (u.id === selectedId ? { ...u, ...formData } : u))
      );
      console.log("user Update:", res.data);
      setSelectedId(null);
      setFormData({ name: "", email: "", phone: "" });
    } catch (error) {
      console.log("error Updating User", error);
    }
  };
  const handleDeleteUser = async (id: number) => {
    try {
      await axiosClient.delete(`/users/${id}`);
      setUsers(users.filter((u)=>u.id!==id));
      console.log(`User with ID ${id} deleted`);
    } catch (error) {
      console.log("Error In Deleteing User", error);
    }
  };

  const handleChanges=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setFormData({...formData,[e.target.name]:e.target.value});
  };

  const handleEditClick=(users:User)=>{
    setSelectedId(users.id!);
    setFormData({name:users.name,email:users.email,phone:users.phone});
  };
  return (
    <div style={{padding:30}}>
        <h1>React + TypeScript CRUD (Axios)</h1>

        {/* Crud Buttons */}
        <div style={{marginBottom:20}}>
            <button onClick={handleFetchUser}>Get All Users</button>
        </div>
        {/* Form */}
        <div style={{display:"flex",gap:10,marginBottom:10}}>
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChanges} />
            <input type="email" name="email" placeholder="email" value={formData.email} onChange={handleChanges} />
            <input type="tel" name="phone" placeholder="Phone" value={formData.phone}  onChange={handleChanges}/>
            {selectedId?(
                <button onClick={handleUpdateUser}>Update User</button>
            ):(
                <button onClick={handleAddUser}>Add User</button>
            )}
        </div>

        {/* User Table */}
        {users.length>0 &&(
            <table border={1} cellPadding={8} style={{width:"100%"}}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((u)=>(
                        <tr key={u.id}>
                            <td>{u.id}</td>
                            <td>{u.name}</td>
                            <td>{u.email}</td>
                            <td>{u.phone}</td>
                            <td>
                                <button onClick={()=>handleEditClick(u)}>Edit</button>
                                <button onClick={()=>handleDeleteUser(u.id!)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )}
    </div>
  );
};

export default CurdOperations;

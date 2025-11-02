import React, { useState } from "react";

const FormWithError = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [error, setError] = useState({})

  // handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Validate Form input
  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is Required.";
    else if (!/\S,{2,}/.test(formData.name)) tempErrors.name='Name length atleast 3'
    if (!formData.email.trim()) tempErrors.email = "Email is Required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
    // else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) 
      tempErrors.email = "Enter a Vaild Email.";
    
    setError(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // handle from submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form is Valid:", formData);
      alert("Form submitted Successfully!");
      setFormData({ name: "", email: "" }); //reset after submission
      setError({});
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      style={{ maxWidth: 300, margin: "30px auto" }}
    >
      <div style={{ marginBottom: 10 }}>
        <label>Name:</label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your Name"
          style={{ width: "100%", padding: 5 }}
        />
        {error.name && <p style={{ color: "red" }}>{error.name}</p>}
      </div>
      <div style={{ marginBottom: 10 }}>
        <label>Email:</label>
        <br />
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your Email"
          style={{ width: "100%", padding: 5 }}
        />
        {error.email && <p style={{ color: "red" }}>{error.email}</p>}
      </div>
      <button type="submit" style={{ padding: "6px 12px" }}>
        submit
      </button>
    </form>
  );
};

export default FormWithError

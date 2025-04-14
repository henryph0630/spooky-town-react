import React, { useState } from "react";
import "../styles.css";

const AddCostumeForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    price: "",
    category: "",
    description: "",
    Size: "",
    img_name: ""
  });

  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.id) newErrors.id = "ID is required";
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.price) newErrors.price = "Price is required";
    if (!formData.category) newErrors.category = "Category is required";
    if (!formData.description) newErrors.description = "Description is required";
    if (!formData.Size) newErrors.Size = "Size is required";
    if (!formData.img_name) newErrors.img_name = "Image name is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    fetch("https://spooky-town-api.onrender.com/api/costumes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setStatus("Costume added successfully!");
          onAdd(data.newCostume); // update parent list
          setFormData({
            id: "",
            name: "",
            price: "",
            category: "",
            description: "",
            Size: "",
            img_name: ""
          });
          setErrors({});
        } else {
          setStatus("Failed: " + data.error);
        }
      })
      .catch(() => setStatus("Server error. Try again later."));
  };

  return (
    <section className="form-section">
      <h2>Add a Costume</h2>
      <form onSubmit={handleSubmit} className="form-grid">
        {["id", "name", "price", "category", "description", "Size", "img_name"].map((field) => (
          <div key={field}>
            <label>{field}:</label>
            <input
              type="text"
              name={field}
              value={formData[field]}
              onChange={handleChange}
            />
            {errors[field] && <p className="error-text">{errors[field]}</p>}
          </div>
        ))}
        <button type="submit">Submit</button>
        <p className="status-msg">{status}</p>
      </form>
    </section>
  );
};

export default AddCostumeForm;

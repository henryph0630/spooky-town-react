import React, { useEffect, useState } from "react";
import CostumeCard from "../components/CostumeCard";
import AddCostumeForm from "../components/AddCostumeForm";
import "../styles.css";

const Costumes = () => {
  const [costumes, setCostumes] = useState([]);
  const [editingCostume, setEditingCostume] = useState(null);

  useEffect(() => {
    fetch("https://spooky-town-api.onrender.com/api/costumes")
      .then((res) => res.json())
      .then((data) => setCostumes(data))
      .catch((err) => console.error("Failed to fetch costumes:", err));
  }, []);

  const handleDelete = (id) => {
    fetch(`https://spooky-town-api.onrender.com/api/costumes/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setCostumes((prevCostumes) => prevCostumes.filter((item) => item.id !== id));
        }
      });
  };

  const handleEditInit = (id) => {
    const costumeToEdit = costumes.find((item) => item.id === id);
    setEditingCostume(costumeToEdit);
  };

  const handleEditSubmit = (updatedCostume) => {
    fetch(`https://spooky-town-api.onrender.com/api/costumes/${updatedCostume.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedCostume),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setCostumes((prevCostumes) =>
            prevCostumes.map((item) =>
              item.id === updatedCostume.id ? updatedCostume : item
            )
          );
          setEditingCostume(null);
        }
      });
  };

  return (
    <>
      <header>
        <div id="costume-demo-header" className="column four">
          <section>
            <img src="assets/Images/mens costume sectin.jpg" alt="Men's Costumes" />
            <h2>Men's Costumes</h2>
          </section>
          <section>
            <img src="assets/Images/womens section.jpg" alt="Women's Costumes" />
            <h2>Women's Costumes</h2>
          </section>
          <section>
            <img src="assets/Images/chidlren section.jpg" alt="Children's Costumes" />
            <h2>Children's Costumes</h2>
          </section>
          <section>
            <img src="assets/Images/pets ections.jpg" alt="Pet Costumes" />
            <h2>Pet Costumes</h2>
          </section>
        </div>
      </header>

      <main id="content-home">
        <div className="column two">
          <section id="sidebar">
            <button className="dropbtn">Size</button>
            <button className="dropbtn">Theme</button>
            <button className="dropbtn">Price</button>
          </section>

          <AddCostumeForm
            onAdd={(newCostume) => setCostumes((prev) => [...prev, newCostume])}
            editingCostume={editingCostume}
            onEditSubmit={handleEditSubmit}
          />

          <div className="column three gallery" id="costume-gallery">
            {costumes.map((item) => (
              <CostumeCard
                key={item.id}
                id={item.id}
                image={`https://spooky-town-api.onrender.com//${item.img_name}`}
                name={item.name}
                price={item.price}
                size={item.Size}
                description={item.description}
                onEdit={handleEditInit}
                onDelete={handleDelete}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Costumes;
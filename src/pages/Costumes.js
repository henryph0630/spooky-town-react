import React, { useEffect, useState } from "react";
import CostumeCard from "../components/CostumeCard";
import "../styles.css";

const Costumes = () => {
  const [costumes, setCostumes] = useState([]);

  useEffect(() => {
    fetch("https://spooky-town-api.onrender.com/api/costumes")
      .then((res) => res.json())
      .then((data) => setCostumes(data))
      .catch((err) => console.error("Failed to fetch costumes:", err));
  }, []);

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

          <div className="column three gallery" id="costume-gallery">
            {costumes.map((item) => (
              <CostumeCard
                key={item.id}
                image={`https://spooky-town-api.onrender.com//${item.img_name}`} // 🔁 Update this URL
                name={item.name}
                price={item.price}
                size={item.Size}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Costumes;

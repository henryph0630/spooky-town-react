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
    <main id="content-home">
      <div className="column two">
        <div className="column three gallery" id="costume-gallery">
          {costumes.map((item) => (
            <CostumeCard
              key={item.id}
              image={`https://your-render-url.onrender.com/${item.img_name}`}
              name={item.name}
              price={item.price}
              size={item.Size}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Costumes;

import React from "react";
import CostumeCard from "../components/CostumeCard";
import "../styles.css";

const Costumes = () => {
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
            <CostumeCard
              image="assets/Images/zombie costume.jpg"
              name="Zombie Cheerleader"
              price="29.99"
              size="M"
              description="Perfect for Halloween parties or undead pep rallies."
            />

            <CostumeCard
              image="assets/Images/vampire costume.jpg"
              name="Vampire Knight"
              price="39.99"
              size="L"
              description="Sink your teeth into the night with this classy look."
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Costumes;
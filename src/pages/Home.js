import React from "react";
import "../styles.css";

const Home = () => {
    return (
      <main id="content-home">
        <div className="column two">
          <section>
            <h2>
              <a href="/costumes">Specials</a>
            </h2>
            <img src="assets/Images/group special.jpg" alt="Group Special"/>
          </section>
  
          <section id="franchises" className="container">
            <h2>Popular Franchises</h2>
            <div id="popular-franchises">
              <img src="assets/Images/Game of Thrones Logo rs.jpg" alt="Game of Thrones"/>
              <img src="assets/Images/Star_Wars_Logo.svg rs.png" alt="Star Wars"/>
              <img src="assets/Images/marvel logo rs.png" alt="Marvel"/>
              <img src="assets/Images/Harry Potter Logo rs.png" alt="Harry Potter"/>
            </div>
          </section>
        </div>
  
        <div className="column three">
          <section>
            <h2>Introduction</h2>
            <img src="assets/Images/video play rs.jpg" alt="Intro Video"/>
          </section>
  
          <section>
            <h2>
              <a href="/costumes">Deals</a>
            </h2>
            <img src="assets/Images/deals.jpg" alt="Deals"/>
          </section>
  
          <section>
            <h2>Testimonials</h2>
            <img src="assets/Images/video play rs.jpg" alt="Testimonials"/>
          </section>
        </div>
      </main>
    );
  };
  
  export default Home;
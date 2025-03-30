import React from "react";
import "../styles.css";

const AboutUs = () => {
  return (
    <main id="about-us">
      <div className="column two">
        <section>
          <h2>Our Story</h2>
          <p>
            Spooky Town started as a small idea with a big dream. I’ve always
            loved Halloween—the costumes, the decorations, the chance to be
            whoever (or whatever) you want for a night. I wanted to create a
            place where every day felt like October 31st, where people could
            come to find inspiration and all the spooky supplies they needed.
            Over the years, we’ve grown into a community hub for Halloween
            lovers of all ages, and I couldn’t be prouder of what Spooky Town
            has become. It’s more than just a store—it’s a celebration of
            creativity, fun, and a little bit of fright.
          </p>
        </section>

        <section>
          <h2>Location</h2>
          <iframe
            title="Map to Spooky Town"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.8291086923555!2d-73.86152502359453!3d41.0964846175856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2a8a61eae43df%3A0xd6b3db4bc42956e1!2sSleepy%20Hollow%2C%20NY!5e0!3m2!1sen!2sus!4v1711211111111!5m2!1sen!2sus"
            width="300"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </section>
      </div>

      <div className="column three">
        <section id="team-pics">
          <h2>Contact Us</h2>
          <img src={`${process.env.PUBLIC_URL}/assets/Images/email icon rs.png`} alt="Email Icon"/>
          <img src="assets/Images/phone icon rs.png" alt="Phone Icon"/>
          <img src="assets/Images/twitter icon ts.png" alt="Twitter Icon"/>
          <img src="assets/Images/facebook icon rs.png" alt="Facebook Icon"/>
          <img src="assets/Images/instagram icon rs.png" alt="Instagram Icon"/>
        </section>

        <section id="team-pics">
          <h2>Team</h2>
          <img src="assets/Images/John Spookey rs.jpg" alt="John Spookey"/>
          <img src="assets/Images/Female Shot rs.jpg" alt="Team Member"/>
          <img src="assets/Images/Jack O'Lanter rs.jpg" alt="Jack O'Lantern"/>
        </section>
      </div>
    </main>
  );
};

export default AboutUs;
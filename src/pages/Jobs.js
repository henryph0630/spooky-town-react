import React from "react";
import "../styles.css";

const Jobs = () => {
  return (
    <main id="jobs-main">
      <div className="column two">
        <section id="interest-form">
          <h2>Interest Form</h2>
          <form id="contact-form" method="POST" action="https://api.web3forms.com/submit">
            <input type="hidden" name="access_key" value="64489685-656e-45dd-9145-475416ba77e0" />

            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone" />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="age">Age:</label>
            <input type="number" id="age" name="age" />

            <label htmlFor="comments">Comments:</label>
            <textarea id="comments" name="comments" maxLength="250" />

            <button type="submit">Send</button>
            <p id="form-status"></p>
          </form>

          <section>
            <h2>Employee Testimonials</h2>
            <img src="assets/Images/video play rs.jpg" alt="Testimonial Video" />
          </section>
        </section>

        <section>
          <h2>Information</h2>
          <section id="job-description">
            <h3>Job Description</h3>
            <p>
              In this role, you will assist customers in selecting costumes, accessories, and party supplies,
              maintaining store displays, and ensuring merchandise is well-stocked and organized. You will provide
              exceptional customer service with a friendly and enthusiastic attitude, help with inventory management,
              and contribute to keeping the store festive and fun by participating in seasonal promotions and events.
            </p>

            <h3>Requirements</h3>
            <p>
              We are looking for someone with a positive, outgoing personality and a genuine love for Halloween.
              While previous retail or customer service experience is a plus, it is not required. What matters most is
              your ability to work in a fast-paced, seasonal environment and bring energy and enthusiasm to our team.
            </p>

            <h3>Compensation and Benefits</h3>
            <p>
              We offer employee discounts on costumes and merchandise, a fun and dynamic work environment, and flexible
              scheduling, including evenings and weekends. Bring your creativity and passion for Halloween to our
              team—apply today and join the spooktacular fun!
            </p>
          </section>
        </section>
      </div>
    </main>
  );
};

export default Jobs;
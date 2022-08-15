import React from "react";
import styles from "./Home.module.css";
import image from "../../assets/AI logo.jpg.jpg";
const Home = () => {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h1 data-aos="fade-up">Welcome to Global AI Hub </h1>
      </header>
      <main className={styles.info}>
        <p data-aos="fade-right" className={styles.text}>
          Global AI Hub is a Swiss-based leading global AI community for
          everyone with an interest in AI. Join our global and local community
          hubs to expand your network, learn from thought leaders and connect
          with people around the world who are also passionate about AI.
        </p>
        <img
          data-aos="fade-left"
          className={styles.image}
          src={image}
          alt="AI-logo"
        />
      </main>
    </section>
  );
};

export default Home;

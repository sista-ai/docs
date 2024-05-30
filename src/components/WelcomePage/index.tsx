import React from "react";
import styles from "./styles.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";

export default function WelcomePage() {
  return (
    <section
      className={styles.welcome}
      style={{
        backgroundColor: "#121723",
        height: "500px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src={useBaseUrl("/img/sista-ai-icon.png")}
        alt="Sista AI Logo"
        style={{ width: "380px" }}
      />
      <p style={{ fontSize: "2em" }}>Click The Round Button 👉</p>
    </section>
  );
}

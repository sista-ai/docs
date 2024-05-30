import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./index.module.css";
import WelcomePage from "../components/WelcomePage";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header
      className={clsx("hero", styles.heroBanner)}
      style={{
        backgroundColor: "var(--ifm-color-header-background)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Heading style={{ fontSize: "5em" }} as="h1" className="hero__title">
          {siteConfig.title}{" "}
          <span style={{ color: "var(--ifm-color-documentation-title)" }}>Documentation</span>
        </Heading>
        <p style={{ fontSize: "3em" }} className="hero__subtitle">
          {siteConfig.tagline}
        </p>
        <div className={styles.buttons}>
          <Link
            className={clsx("button", styles.bigButton)}
            to="/intro"
            style={{
              padding: "20px",
              marginTop: "15px",
              fontSize: "35px",
              width: "320px",
            }}
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to the Future of AI ${siteConfig.title}`}
      description="End-to-end AI Integration Platform | Plug & Play AI Voice Assistant"
    >
      <HomepageHeader />
      <main>
        <WelcomePage />
        {/* <SponsorsPage /> */}
      </main>
    </Layout>
  );
}

import Link from "next/link";
import "../styles/globals.css";

function MyApp({ Component, Content }) {

  return (
      <div>
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "20px",
            background: "#D6DAE2",
            color: "black"
          }}
        >
          <div></div>
          <div style={{ display: "flex", gap: "10px" }}>
            <Link href="/">Characters </Link>
            <Link href="/">Locations </Link>
            <Link href="/episodes">Episodes </Link>
          </div>
        </header>
        <Component {...Content} />
      </div>
  );
}

export default MyApp;

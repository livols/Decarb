import Layout from "../../navigation/sideBar";

export function Panels(loggedIn: boolean) {
  return (
    <div className="navBox" style={{ height: "100%" }}>
      {loggedIn && <Layout />}
      <div style={{ marginLeft: "2%" }}>
        <h2>Panels</h2>
      </div>
    </div>
  );
}

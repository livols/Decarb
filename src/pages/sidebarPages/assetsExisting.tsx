import Layout from "../../navigation/sideBar";

export function AssetsExisting(loggedIn: boolean) {
  return (
    <div className="navBox" style={{ height: "100%" }}>
      {loggedIn && <Layout />}
      <div style={{ marginLeft: "2%" }}>
        <h2>Existing</h2>
      </div>
    </div>
  );
}

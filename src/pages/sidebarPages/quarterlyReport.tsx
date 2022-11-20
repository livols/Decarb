import Layout from "../../navigation/sideBar";

export function QuarterlyReport(loggedIn: boolean) {
  return (
    <div className="navBox" style={{ height: "100%" }}>
      {loggedIn && <Layout />}
      <div style={{ marginLeft: "2%" }}>
        <h2>Quarterly Report</h2>
      </div>
    </div>
  );
}

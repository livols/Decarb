import Layout from "../navigation/sideBar";

export function Result(loggedIn: boolean) {
  return (
    <div className="navBox" style={{height: "100%"}}>
      {loggedIn && <Layout />}
      <div style={{marginLeft: "2%", width: "100%"}}>
        <h2>Result</h2>
      </div>
    </div>
  );
}

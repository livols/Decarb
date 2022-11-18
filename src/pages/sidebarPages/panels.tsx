import SimpleMap from "../../visualisation/map/map";

export function Panels() {
  return (
    <div style={{ marginLeft: "2%", width: "100%" }}>
      <h2>PFA Portfolio</h2>
      <div style={{ width: "100%", height: "500px" }}>
        <SimpleMap />
      </div>
    </div>
  );
}

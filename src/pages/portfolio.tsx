import { Graph } from "../visualisation/strandingDiagram/graph";
import { strandingData } from "../data/dummy";

export function Portfolio() {
  return (
    <div>
      <Graph strandingData={strandingData} companyName={"PFA"} targetBox />
    </div>
  );
}

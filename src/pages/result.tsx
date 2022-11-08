import { Graph } from "../visualisation/strandingDiagram/graph";
import { strandingData } from "../data/dummy";

export function Result() {
  return (
    <div>
      <Graph strandingData={strandingData} />
    </div>
  );
}

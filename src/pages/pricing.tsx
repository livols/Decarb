import Navbar from "../navigation/navbar";

type PricingProps = {
  loggedIn: boolean;
}

export function Pricing(props:PricingProps) {
  return (
    <div>
      {Navbar(props.loggedIn)}
      <h2>Pricing</h2>
    </div>
  );
}

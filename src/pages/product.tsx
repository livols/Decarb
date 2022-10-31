import Navbar from "../navigation/navbar";

type ProductProps = {
  loggedIn: boolean;
};

export function Product(props: ProductProps) {
  return (
    <div>
      {Navbar(props.loggedIn)}
      <h2>Product</h2>
    </div>
  );
}

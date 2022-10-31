import Navbar from "../navigation/navbar";

type AccountProps = {
  loggedIn: boolean;
};

export function Account(props: AccountProps) {
  return (
    <div>
      {Navbar(props.loggedIn)}
      <h2>Account</h2>
    </div>
  );
}

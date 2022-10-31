import Navbar from "../navigation/navbar";

type AboutProps = {
  loggedIn: boolean;
}

export function About(props: AboutProps) {
  return (
    <div>
      {Navbar(props.loggedIn)}
      <h2>About</h2>
    </div>
  );
}

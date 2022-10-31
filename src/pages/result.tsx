import Navbar from "../navigation/navbar";

type ResultProps = {
  loggedIn: boolean;
};

export function Result(props: ResultProps) {
  return (
    <div>
      {Navbar(props.loggedIn)}
      <h2>Result</h2>
    </div>
  );
}

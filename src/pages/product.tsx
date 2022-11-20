import pfalogo from "../images/pfa-ejendomme.svg";

export function Product() {
  return (
    <>
      <div className="frontpage-content">
        <div className="title-card">
          <div className="title">
            <span>Translating CO2 emissions targets into </span>{" "}
            <span className="action">action</span>
          </div>
        </div>
        <div className="frontpage-about">
          <div className="about1">What we do</div>
          <div className="about2">
            Our solution is enabling the decarbonization of real estate market
            through operationalization of emissions targets. Powered by data, AI
            and scientific research, we are translating net-zero goals of the
            Paris Agreement, EU legislation and local government legislation
            into actionable analytics that cover a wide range of decarbonization
            pathways of real estate.
          </div>
          <div className="about3">Customer stories</div>
          <div className="stories">
            <img className="PFALogo" src={pfalogo} alt="PFALogo"></img>
            <span className="pfaText">
              Lorem ipsum dolor sit amet. Ea odio porro est repellendus dolores
              aut atque error in dolorem iste. Qui perspiciatis repudiandae nam
              quisquam iure vel molestiae accusamus est nihil perferendis et
              possimus quidem aut temporibus dolores qui rerum dolores. Sed
              perspiciatis explicabo sit rerum atque et sunt cumque sed magni
              omnis!
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

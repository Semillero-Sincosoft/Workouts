import React from "react";
import ContentAside from "../ContentAside";

const DataPageAside = () => {
  const elements = [
    {
      id: 1,
      title: "Hydrogen VS Electric Cars",
      text: "Will hydrogen-fueled cars ever catch up to EVs?",
    },
    {
      id: 2,
      title: "The Downsides of AI Artistry",
      text: "What are the possible adverse effects of on-demand AI image generation?",
    },
    {
      id: 3,
      title: "Is VC Funding Drying Up?",
      text: "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
    },
  ];

  return (
    <>
      <section className="content-new">
        <h2>New</h2>
        {elements.map((element) => (
          <React.Fragment key={element.id}>
            <div className="new">
              <ContentAside {...element} />
            </div>
            <hr />
          </React.Fragment>
        ))}
      </section>
    </>
  );
};

export default DataPageAside;

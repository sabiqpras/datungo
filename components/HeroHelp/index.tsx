import React from "react";

const HeroHelp = () => {
  return (
    <div className="flex flex-col items-center lg:grid lg:grid-cols-2">
      <h1 className="mt-10 text-[140px] leading-none font-extrabold flex flex-col lg:pl-5">
        <div className="italic  text-[120px]">Help</div>
        <div className="">TUN</div>
      </h1>
      <p className="text-justify px-5 mt-10 lg:mt-3">
        The directorate also focuses on safeguarding the state&apos;s interests
        through proactive legal reviews, litigation, and advisory functions. By
        leveraging efficient systems and policies, the TUN Directorate strives
        to enhance governance, uphold justice, and promote accountability across
        various administrative institutions. Its commitment to transparency and
        innovation aligns with broader efforts to modernize legal and
        administrative frameworks in Indonesia.
      </p>
    </div>
  );
};

export default HeroHelp;

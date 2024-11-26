import React from "react";

const HeroAbout = () => {
  return (
    <div className="flex flex-col items-center lg:grid lg:grid-cols-2">
      <h1 className="mt-10 text-[140px] leading-none font-extrabold flex flex-col lg:pl-5">
        <div className="italic  text-[90px]">About</div>
        <div className="-mt-7">TUN</div>
      </h1>
      <p className="text-justify px-5 mt-10 lg:mt-3">
        The TUN Directorate (Directorate of State Administrative Affairs) within
        the Attorney General&apos;s Office of Indonesia is responsible for
        overseeing legal matters related to state administration. It plays a
        pivotal role in providing legal guidance, ensuring compliance with
        administrative laws, and representing the state in legal proceedings
        involving administrative disputes. The directorate also focuses on
        safeguarding the state&apos;s interests through proactive legal reviews,
        litigation, and advisory functions. By leveraging efficient systems and
        policies, the TUN Directorate strives to enhance governance, uphold
        justice, and promote accountability across various administrative
        institutions. Its commitment to transparency and innovation aligns with
        broader efforts to modernize legal and administrative frameworks in
        Indonesia.
      </p>
    </div>
  );
};

export default HeroAbout;

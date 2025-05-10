import React from "react";
import TalentFeature1 from "./TalentFeature1";
import TalentFeature2 from "./TalentFeature2";
import ProfileFeatures from "./ProfileFeatures";
import ShareInstantly from "./ShareInstantly";
import GetDiscovered from "./GetDiscovered";
import Connect from "./Connect";

const Talent = () => {
  return (
    <div>
      <TalentFeature1 />
      <TalentFeature2 />
      <ProfileFeatures />
      <ShareInstantly />
      <GetDiscovered />
      <Connect/>
    </div>
  );
};

export default Talent;

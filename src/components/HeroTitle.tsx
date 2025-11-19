import React from "react";
import SplitText from "./SplitText.tsx";

const HeroTitle: React.FC<{ text: string }> = ({ text }) => {
  return (
    <SplitText
      text={text}
      tag='h1'
      className='text-4xl font-bold tracking-tight text-slate-50 sm:text-6xl lg:text-7xl leading-[1.1]'
      textAlign='left'
      splitType='chars'
      delay={30}
      duration={0.8}
      from={{ opacity: 0, y: 50 }}
      to={{ opacity: 1, y: 0 }}
      threshold={0.2}
    />
  );
};

export default HeroTitle;

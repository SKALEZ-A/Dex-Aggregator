import React from "react";

const Iframe = () => {
  return (
    <div className="z-[99999] flex h-full w-auto items-center justify-center">
    <iframe width="100%" height="580" frameBorder="0" scrolling="no" src="https://coinbrain.com/embed/eth-0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2?theme=dark&padding=16&chart=1&trades=0&simple=1"></iframe>
    </div>
  );
};

export default Iframe;

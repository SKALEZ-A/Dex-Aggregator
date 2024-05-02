// import { background } from "../../assets";
import { background } from "@/public/assets";
import Image from "next/image";

export const Rings = () => {
  return (
    <div className="absolute top-1/2 left-1/2 w-[51.375rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2">
      <div className="absolute top-1/2 left-1/2 w-[36.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-1/2 left-1/2 w-[23.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
    </div>
  );
};

export const SideLines = () => {
  return (
    <>
      <div className="absolute top-0 left-5 w-0.25 h-full bg-n-6"></div>
      <div className="absolute top-0 right-5 w-0.25 h-full bg-n-6"></div>
    </>
  );
};

export const BackgroundCircles = () => {
  return (
    <>
      <div className="absolute top-[4.4rem] left-16 bg-gradient-to-b">
      <Image  src="https://png.pngtree.com/png-clipart/20230817/original/pngtree-icon-of-avalanche-avax-coin-placed-on-a-white-backdrop-vector-picture-image_10974338.png" alt="eth" width={40} height={40}/>
      </div>
      <div className="absolute top-[12.6rem] right-16 w-4 h-4 bg-gradient-to-b rounded-full">
      <Image  src="https://www.pngall.com/wp-content/uploads/10/Ethereum-Logo-PNG-HD-Image.png" alt="eth" width={20} height={20}/>
      </div>
      <div className="absolute top-[26.8rem] left-12 ">
      <Image  src="https://cryptologos.cc/logos/bnb-bnb-logo.png" alt="eth" width={35} height={35}/>      
      </div>
      <div className="absolute top-[26.8rem] right-10 w-6 h-6 ">
      <Image  src="https://cryptologos.cc/logos/arbitrum-arb-logo.png" alt="eth" width={35} height={35}/>
      </div>
      {/* <div className="absolute top-[26.8rem] left-12 w-6 h-6 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full"></div> */}
    </>
  );
};

export const HamburgerMenu = () => {
  return (
    <div className="absolute inset-0 pointer-events-none lg:hidden">
      <div className="absolute inset-0 opacity-[.03]">
        <img
          className="w-full h-full object-cover"
          src={background}
          width={688}
          height={953}
          alt="Background"
        />
      </div>

      <Rings />

      <SideLines />

      <BackgroundCircles />
    </div>
  );
};

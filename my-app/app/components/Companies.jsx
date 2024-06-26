import { companyLogos } from "../constants";
import Image from "next/image";

const Companies = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        Our proud sponsors and supporters
      </h5>
      <ul className="flex">
        {companyLogos.map((logo, index) => (
          <li
            className="flex items-center justify-center flex-1 h-[8.5rem] "
            key={index}
          >
            <Image src={logo} width={134} height={28} alt={logo} className="rounded-lg "/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Companies;

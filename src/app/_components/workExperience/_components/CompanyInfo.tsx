import Image from "next/image";
import type { CompanyInfo as CompanyInfoProps } from "../types";

const CompanyInfo = (props: CompanyInfoProps) => {
  const { logo, companyName, workplace } = props;
  return (
    <div>
      <div>{logo && <Image src={logo} alt={`${companyName} logo`} />}</div>
      <div className="flex sm:items-center flex-col sm:flex-row items-start ">
        <span>{companyName}</span>
        <span className="mx-10 bg-black_main/50 w-2 h-12 hidden sm:inline-block"></span>
        <span>{workplace}</span>
      </div>
    </div>
  );
};

export default CompanyInfo;

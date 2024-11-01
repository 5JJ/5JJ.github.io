import Image from "next/image";
import ProfileImage from "@images/profile.jpeg";
import { defaultLang, SupportedLangs } from "../../types";
import data from "../../../data";

type ProfileProps = {
  lang?: SupportedLangs;
};

const Profile = (props: ProfileProps) => {
  const { lang = defaultLang } = props;

  const dataByLang = data[lang].about;

  // TODO: styling
  return (
    <div className="grid grid-cols-[minmax(100px,_1fr)_2fr]">
      <div className="overflow-hidden">
        {/**
         * show an image I drew for Youtube (Do I need to ask for it?)
         * flip the image when hovering, and show the real photo
         */}
        <Image
          src={ProfileImage}
          alt="profile image"
          className="overflow-hidden inline-block rounded-20"
        />
      </div>
      <div>
        <h2>{dataByLang.hi}</h2>
        <p>{dataByLang.introduction}</p>
      </div>
    </div>
  );
};

export default Profile;

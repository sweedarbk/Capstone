import LogoImg from "../../assets/defaultImages/wide_logo.png";
import { Caption } from "./CustomComponents";

export const Footer = () => {
  return (
    <>
      <footer className="py-8 bg-black">
        <div className="p-1 flex justify-center items-center relative">
            <div>
                <img src={LogoImg} alt="SWEssentials Logo" className="h-16 object-center ml-80" />
                <div className="flex items-center gap-14">
                    <Caption>Built, Designed, and Brought To Life By: Brooke Sweedar</Caption>
                    <Caption>< a href="https://www.linkedin.com/in/brooke-sweedar/"  target="_blank">Connect with Brooke Here</a></Caption>
                    <Caption><a href="https://github.com/sweedarbk"  target="_blank">Check Out Her Github Here</a></Caption>
                </div>
            </div>
        </div>
      </footer>
    </>
  );
};

import { LiaShippingFastSolid } from "react-icons/lia";
import { PiChatCenteredDotsLight } from "react-icons/pi";
import { GiReceiveMoney } from "react-icons/gi";

const additionalInfo = [
  {
    id: 1,
    title: "GET FREE SHIPPING!",
    description: "Enjoy Free Shipping On All Orders Over $100!",
    icon: <LiaShippingFastSolid size={50} />,
  },
  {
    id: 2,
    title: "24/7 SUPPORT!",
    description:
      "Our Team Is Available 24/7 To Assist With Any Questions Or Concerns!",
    icon: <PiChatCenteredDotsLight size={50} />,
  },
  {
    id: 3,
    title: "MONEY BACK GUARANTEE!",
    description: "Love What You Order Or Get 100% Of Your Money Back!",
    icon: <GiReceiveMoney size={50} />,
  },
];

export const Policies = () => {
  return (
    <>
      <section className="container">
        <div className="py-28 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {additionalInfo.map((info) => (
            <div key={info.id} className="flex items-center justify-center flex-col text-center gap-3">
              <div className="text-purple-800">{info.icon}</div>
              <h3 className="text-xl font-bold mt-4">{info.title}</h3>
              <p className="mt-2">{info.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

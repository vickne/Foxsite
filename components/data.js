import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Our Services",
  desc: "Our services are used by organizations to create, manage, and deliver information, next to assisting with other business functions. Services include consulting, software development, Graphic designs",
  image: benefitOneImg,
  bullets: [
    {
      title: "Mobile Application",
      desc: "We are expertise for all unique design and navigation requirements for your app. Our team is proficient in developing native(Android & iOS) environments and making your app stand out in the crowd and noise. Enterprise Mobility Development Solutions",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Web Application",
      desc: "Web application development services help create feature-rich and fast-performing web software with impeccable user experience. In web development for 6 years, ScienceSoft professionally creates corporate and customer-facing websites, web apps, and web portals.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Graphic Design",
      desc: "We Provide graphic design services and we cover a wide range of products – brochures, business cards, Logos, flyers",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Benefits of custom software development",
  desc: "By choosing custom software development services from Foxsite Soltions, you can capitalize on systems tailored specifically to your needs. We build personalized solutions that are scalable, easy-to-maintain and support.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "100% ownership",
      desc: "Customers get full ownership rights and access to their software and control it completely.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "High flexibility",
      desc: "A tailor-made solution allows you to add extra features and adjust the product according to changing business requirements.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "First-class support",
      desc: "We at Foxsite Soltions deliver outstanding support services to our clients, guiding them through software development and beyond ",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};

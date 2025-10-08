
export interface IService {
  _id: number;
  icon: string;
  title: string;
  description: string;
}


export const services: IService[] = [
  {
    _id: 1,
    icon: "/services/web.webp",
    title: "Web Development",
    description: "Build fast, responsive, and modern websites to grow your online presence."
  },
  {
    _id: 2,
    icon: "/services/app.webp",
    title: "App Development",
    description: "Develop high-performance Android and iOS apps with a seamless experience."
  },
  {
    _id: 3,
    icon: "/services/dm.webp",
    title: "Digital Marketing",
    description: "Boost your brand visibility with smart social media and ad strategies."
  },
  {
    _id: 4,
    icon: "/services/uiux.webp",
    title: "UI/UX Design",
    description: "Create intuitive and engaging UI/UX designs for better user experiences."
  },
  {
    _id: 5,
    icon: "/services/g.webp",
    title: "Graphics Design",
    description: "Design stunning visuals that represent your brand and attract customers."
  },
  {
    _id: 6,
    icon: "/services/vs.webp",
    title: "Videography Solution",
    description: "Deliver professional video production and editing to elevate your brand."
  },
  {
    _id: 7,
    icon: "/services/content.webp",
    title: "Content & Research",
    description: "Provide engaging content and in-depth research to power your marketing."
  },
  {
    _id: 8,
    icon: "/services/dh.webp",
    title: "Domain & Hosting",
    description: "Reliable domain and hosting services to keep your website secure and fast."
  }
];

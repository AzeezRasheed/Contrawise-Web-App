import UserImg1 from "../../assets/images/UserImg.png";
import UserImg2 from "../../assets/images/UserImg.png";
import UserImg3 from "../../assets/images/UserImg.png";
import UserImg4 from "../../assets/images/UserImg.png";
import type { StaticImageData } from "next/image";
const data = [
  {
    contractTitle: "Cooperation agreement",
    company1: "Other Company Ltd",
    company2: "Contrawatch Inc.",
    username1: "Tata Martinez",
    username2: "Mikel Hamza",
    date: "17 Feb 2023",
    owner: "You",
    img: [
      { imageUrl: UserImg1 },
      { imageUrl: UserImg2 },
      { imageUrl: UserImg3 },
      { imageUrl: UserImg4 },
      { imageUrl: UserImg4 },
    ] as { imageUrl: StaticImageData }[],
    contractType: "Executed",
    id: 0,
  },
  {
    contractTitle: "Cooperation agreement",
    company1: "Other Company Ltd",
    company2: "Contrawatch Inc.",
    username1: "Tata Martinez",
    username2: "Mikel Hamza",
    date: "17 Feb 2023",
    owner: "You",
    img: [
      { imageUrl: UserImg1 },
      { imageUrl: UserImg2 },
      { imageUrl: UserImg3 },
      { imageUrl: UserImg4 },
      { imageUrl: UserImg4 },
      { imageUrl: UserImg4 },
    ] as { imageUrl: StaticImageData }[],
    contractType: "Drafts",
    id: 1,
  },
  {
    contractTitle: "Cooperation agreement",
    company1: "Other Company Ltd",
    company2: "Contrawatch Inc.",
    username1: "Tata Martinez",
    username2: "Mikel Hamza",
    date: "17 Feb 2023",
    owner: "You",
    img: [
      { imageUrl: UserImg1 },
      { imageUrl: UserImg2 },
      { imageUrl: UserImg3 },
    ] as { imageUrl: StaticImageData }[],
    contractType: "Drafts",
    id: 2,
  },
  {
    contractTitle: "Cooperation agreement",
    company1: "Other Company Ltd",
    company2: "Contrawatch Inc.",
    username1: "Tata Martinez",
    username2: "Mikel Hamza",
    date: "17 Feb 2023",
    owner: "You",
    img: [
      { imageUrl: UserImg1 },
      { imageUrl: UserImg2 },
      { imageUrl: UserImg3 },
    ] as { imageUrl: StaticImageData }[],
    contractType: "Drafts",
    id: 3,
  },
  {
    contractTitle: "Cooperation agreement",
    company1: "Other Company Ltd",
    company2: "Contrawatch Inc.",
    username1: "Tata Martinez",
    username2: "Mikel Hamza",
    date: "17 Feb 2023",
    owner: "You",
    img: [
      { imageUrl: UserImg1 },
      { imageUrl: UserImg2 },
      { imageUrl: UserImg3 },
    ] as { imageUrl: StaticImageData }[],
    contractType: "Drafts",
    id: 4,
  },
];

export default data;

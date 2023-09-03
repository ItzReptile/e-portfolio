import NftCoverImage from "../assets/project-images/NFT/nft-cover.png";
import NftFrontImage from "../assets/project-images/NFT/nft-front.png";
import NftFirstImage from "../assets/project-images/NFT/nft-desktop.png";
import NftSecondImage from "../assets/project-images/NFT/nft-phones-1.jpg";
import NftThirdImage from "../assets/project-images/NFT/nft-phones-2.jpg";

import SummaristCoverImg from "../assets/project-images/summarist/summarist-cover.png";
import SummaristFrontImg from "../assets/project-images/summarist/summarist-front.png";
import SummaristFirstImg from "../assets/project-images/summarist/summarist-desktop.png";
import SummaristSecondImg from "../assets/project-images/summarist/summarist-phones-1.png";
import SummaristThirdImg from "../assets/project-images/summarist/summarist-phones-2.png";


const projectsConfig = [
  {
    title: "Ultraverse NFT Marketplace",
    type: "Web App",
    description:
      "Frontend web application offering users an array of NFTs divided into categories like 'Hot Collections', 'New Items', and 'Top Sellers'. The application showcases dynamic routing, displaying relevant data depending on the selected NFT or Author, and sophisticated state logic encapsulated in reusable components managed by Redux Toolkit. The application was crafted using React and JavaScript, demonstrating a commitment to utilizing modern, efficient technologies.",
    // liveLink: "internship-red.vercel.app",
    githubLink: "https://github.com/ItzReptile/reptile-internship",
    liveLink:"https://reptile-internship.vercel.app",
    coverImage: NftCoverImage,
    topImage: NftFrontImage,
    firstImage: NftFirstImage,
    secondImage: NftSecondImage,
    thirdImage: NftThirdImage,
  },
  {
    title: "Summarist",
    type: "Web App",
    description:
      "A comprehensive full-stack web application, serving as a digital platform for users to explore an extensive collection of self-help books. The platform's salient features include user authentication for login/logout, the facility to subscribe for either monthly or yearly payment plans, and the capacity for users to personalize their libraries by adding books of their choice, with both reading and audiobook options available.",
    // liveLink: "advanced-internship.vercel.app",
    githubLink: "https://github.com/ItzReptile/advanced-internship",
    liveLink:"https://summarist.vercel.app/for-you",
    coverImage: SummaristCoverImg,
    topImage: SummaristFrontImg,
    firstImage: SummaristFirstImg,
    secondImage: SummaristSecondImg,
    thirdImage: SummaristThirdImg,
  },
];

export default projectsConfig;

import {
    // benefitIcon1,
    benefitIcon2,
    benefitIcon3,
    benefitIcon4,
    benefitImage2,
    chromecast,
    disc02,
    discord,
    discordBlack,
    facebook,
    figma,
    file02,
    framer,
    homeSmile,
    instagram,
    notification2,
    notification3,
    notification4,
    notion,
    photoshop,
    plusSquare,
    protopie,
    raindrop,
    recording01,
    recording03,
    roadmap1,
    roadmap2,
    roadmap3,
    roadmap4,
    searchMd,
    slack,
    sliders04,
    telegram,
    twitter,
    // yourlogo,
  } from "@/public/assets";
  
  import { yourlogo } from "@/public/assets";
  import benefitIcon1 from "@/public/assets/benefits/icon-1.svg";
  import work1 from "@/public/assets/work1.webp";
  import work2 from "@/public/assets/work2.webp";
  import work3 from "@/public/assets/work3.webp";
  import work4 from "@/public/assets/work4.webp";
  

  import ophir from "@/public/assets/ophirlogo.jpg"
  import getblock from "@/public/assets/getblock.png"
  import openocean from "@/public/assets/openocean.png"
  import skalez from "@/public/assets/skalez_logo.webp"
  
  
  export const navigation = [
    {
      id: "0",
      title: "Features",
      url: "#features",
    },
    {
      id: "1",
      title: "Pricing",
      url: "#pricing",
    },
    {
      id: "2",
      title: "How to use",
      url: "#how-to-use",
    },
    {
      id: "3",
      title: "Roadmap",
      url: "#roadmap",
    },
   
    {
      id: "4",
      title: "Launch Dapp",
      url: "#login",
      onlyMobile: true,
    },
  ];
  
  export const heroIcons = [homeSmile, file02, searchMd, plusSquare];
  
  export const notificationImages = [notification4, notification3, notification2];
  
  export const companyLogos = [ophir, getblock, skalez, ophir, openocean];
  
  export const brainwaveServices = [
    "Deep Liquidity",
    "Native cross-chain",
    "Best Rates",
    "Every Tokens swap-able"
  ];
  
  export const brainwaveServicesIcons = [
    recording03,
    recording01,
    disc02,
    chromecast,
    sliders04,
  ];
  
  export const roadmap = [
    {
      id: "0",
      title: "Voice recognition",
      text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
      date: "May 2023",
      status: "done",
      imageUrl: roadmap1,
      colorful: true,
    },
    {
      id: "1",
      title: "Gamification",
      text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
      date: "May 2023",
      status: "progress",
      imageUrl: roadmap2,
    },
    {
      id: "2",
      title: "Chatbot customization",
      text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
      date: "May 2023",
      status: "done",
      imageUrl: roadmap3,
    },
    {
      id: "3",
      title: "Integration with APIs",
      text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
      date: "May 2023",
      status: "progress",
      imageUrl: roadmap4,
    },
  ];
  
  export const collabText =
    "Aiming to build a unified decentralized financial ecosystem open to everyone in Web 3.0..";
  
  export const collabContent = [
    {
      id: "0",
      title: "DEX Aggregation",
      text: "We aggregate liquidity across different dexes to provide the best prices for assets.",
    },
    {
      id: "1",
      title: "Smart Automation",
    },
    {
      id: "2",
      title: "Top-notch Security",
    },
  ];
  
  export const collabApps = [
    {
      id: "0",
      title: "Avax",
      icon: "https://png.pngtree.com/png-clipart/20230817/original/pngtree-icon-of-avalanche-avax-coin-placed-on-a-white-backdrop-vector-picture-image_10974338.png",
      width: 46,
      height: 56,
    },
    {
      id: "1",
      title: "Ethereum",
      icon: "https://www.pngall.com/wp-content/uploads/10/Ethereum-Logo-PNG-HD-Image.png",
      width: 32,
      height: 42,
    },
    {
      id: "2",
      title: "BNB",
      icon: "https://cryptologos.cc/logos/bnb-bnb-logo.png",
      width: 36,
      height: 38,
    },
    {
      id: "3",
      title: "Arb",
      icon: "https://cryptologos.cc/logos/arbitrum-arb-logo.png",
      width: 34,
      height: 45,
    },
    {
      id: "4",
      title: "Phantom",
      icon: "https://cryptologos.cc/logos/fantom-ftm-logo.png?v=032",
      width: 34,
      height: 34,
    },
    {
      id: "5",
      title: "optimism",
      icon: "https://cryptologos.cc/logos/optimism-ethereum-op-logo.png?v=032",
      width: 34,
      height: 34,
    },
    {
      id: "6",
      title: "polygon",
      icon: "https://cryptologos.cc/logos/polygon-matic-logo.png?v=032",
      width: 26,
      height: 34,
    },
    {
      id: "7",
      title: "base",
      icon: "https://assets-global.website-files.com/5fad86e1f5867747a5250efa/6405aa2ea2b6534048768292_base-logo.png",
      width: 38,
      height: 32,
    },
  ];
  
  export const pricing = [
    {
      id: "0",
      title: "Basic",
      description: "AI chatbot, personalized recommendations",
      price: "0",
      features: [
        "An AI chatbot that can understand your queries",
        "Personalized recommendations based on your preferences",
        "Ability to explore the app and its features without any cost",
      ],
    },
    {
      id: "1",
      title: "Premium",
      description: "Advanced AI chatbot, priority support, analytics dashboard",
      price: "9.99",
      features: [
        "An advanced AI chatbot that can understand complex queries",
        "An analytics dashboard to track your conversations",
        "Priority support to solve issues quickly",
      ],
    },
    {
      id: "2",
      title: "Enterprise",
      description: "Custom AI chatbot, advanced analytics, dedicated account",
      price: null,
      features: [
        "An AI chatbot that can understand your queries",
        "Personalized recommendations based on your preferences",
        "Ability to explore the app and its features without any cost",
      ],
    },
  ];
  
  export const benefits = [
    {
      id: "0",
      title: "Dex Aggregator",
      text: "We aggregate the most liquidity sources across the widest selection of blockchains in DeFi, empowering our users to swap with the best possible market efficiency. ",
      backgroundUrl: "./public/assets/benefits/card-1.svg",
      // iconUrl: benefitIcon1,
      iconUrl: work1,
      imageUrl: benefitImage2,
    },
    {
      id: "1",
      title: "Cross-chain swaps",
      text: "Marble Protocol’s cross-chain swaps allow the seamless transfer and swapping of assets across multiple chains by utilizing the OpenOcean aggregation protocol.",
      backgroundUrl: "./public/assets/benefits/card-2.svg",
      // iconUrl: benefitIcon2,
      iconUrl: work2,
      imageUrl: benefitImage2,
      light: true,
    },
    {
      id: "2",
      title: "Web3 wallet Dapp",
      text: "Connect with the different crypto assets from anywhere, on any device, making it more accessible and convenient.",
      backgroundUrl: "./public/assets/benefits/card-3.svg",
      // iconUrl: benefitIcon3,
      iconUrl: work4,
      imageUrl: benefitImage2,
    },
    {
      id: "3",
      title: "Liquid Staking Aggregator",
      text:  " Make the most of your liquid staking assets, maximize returns and analyse all potential and possible earn routes with the OpenOcean LST aggregator. ",
      backgroundUrl: "./public/assets/benefits/card-4.svg",
      // iconUrl: benefitIcon4,
      iconUrl: work3,
      imageUrl: benefitImage2,
      light: true,
    },
    
  ];
  
  export const socials = [
    {
      id: "0",
      title: "Discord",
      iconUrl: discordBlack,
      url: "#",
    },
    {
      id: "1",
      title: "Twitter",
      iconUrl: twitter,
      url: "#",
    },
    {
      id: "2",
      title: "Instagram",
      iconUrl: instagram,
      url: "#",
    },
    {
      id: "3",
      title: "Telegram",
      iconUrl: telegram,
      url: "#",
    },
    {
      id: "4",
      title: "Facebook",
      iconUrl: facebook,
      url: "#",
    },
  ];
  
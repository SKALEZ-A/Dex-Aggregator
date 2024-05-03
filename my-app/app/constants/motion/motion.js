// everything from my portfolio website 

export const textVariant = (delay) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

export const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const zoomIn = (delay, duration) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const slideIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const staggerContainer = (staggerChildren, delayChildren) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};



export const projects = [
  {
    name: "Dex Aggregator",
    description:
      " We aggregate the most liquidity sources across the widest selection of blockchains in DeFi, empowering our users to swap with the best possible market efficiency ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "ethers",
        color: "green-text-gradient",
      },
      {
        name: "solidity",
        color: "pink-text-gradient",
      },
    ],
    
    // source_code_link: "https://avatar-project-ochre.vercel.app/",
    source_code_link: "https://github.com/SKALEZ-A/LW3-Nft-collection/",
    previewUrl: "https://skaleznft.vercel.app/",
  },
  {
    name: "Cross-chain swaps",
    description:
      " Marble Protocol’s cross-chain swaps allow the seamless transfer and swapping of assets across multiple chains by utilizing the OpenOcean aggregation protocol.",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "thirdweb",
        color: "green-text-gradient",
      },
      {
        name: "etherscan-api",
        color: "pink-text-gradient",
      },
    ],
    
    source_code_link: "https://github.com/SKALEZ-A/horizon-swap",
    previewUrl: "https://horizon-swap.vercel.app/",
  },
  {
    name: "Web3 wallet Dapp",
    description:
      "A dapp that allows for easy fund transfers, directly from your wallet to another wallet address, keeps track and displays transactions in form of memes on the goerli chain,  with an improved, user-friendly UI.",
    tags: [
      {
        name: "hardhat",
        color: "blue-text-gradient",
      },
      {
        name: "reactjs",
        color: "green-text-gradient",
      },
      {
        name: "solidity",
        color: "pink-text-gradient",
      },
    ],
    
    source_code_link: "https://github.com/SKALEZ-A/Web3-Wallet-sample",
    previewUrl: "https://web3-wallet-sample.vercel.app",
  },
  {
    name: "Liquid Staking Aggregator",
    description:
      " Make the most of your liquid staking assets, maximize returns and analyse all potential and possible earn routes with the OpenOcean LST aggregator. ",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "thirdweb",
        color: "green-text-gradient",
      },
      {
        name: "ethers",
        color: "pink-text-gradient",
      },
    ],
    
    previewUrl: "https://avatar-project-ochre.vercel.app/",
  },
];
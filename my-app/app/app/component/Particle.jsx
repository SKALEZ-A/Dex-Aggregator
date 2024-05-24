"use client";
import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import eth from "@/public/images/eth.jpeg"

const Particle = () => {
    const [init, setInit] = useState(false);

    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
            //await loadBasic(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };

    return init ? (
        <div className="particle-section">

        
        <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={{
                fullScreen:{
                    enable: true,
                    zIndex: -1
                },
                // style: {
                //     position: "absolute",
                // },
                background: {
                    color: {
                        value: "black",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: false,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 200,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 2,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.3,
                    },
                    shape: {
                        type: "images",
                        options: {
                            images: [ {
                                src: "https://www.pngall.com/wp-content/uploads/10/Ethereum-Logo-PNG-HD-Image.png",
                                width: 205,
                                height: 265
                              },
                              {
                                src: "https://png.pngtree.com/png-clipart/20230817/original/pngtree-icon-of-avalanche-avax-coin-placed-on-a-white-backdrop-vector-picture-image_10974338.png",
                                width: 67,
                                height: 67
                              },
                              {
                                src: "https://cryptologos.cc/logos/bnb-bnb-logo.png",
                                width: 205,
                                height: 205
                              },
                              {
                                src: "https://altcoinsbox.com/wp-content/uploads/2023/03/matic-logo-300x300.webp",
                                width: 267,
                                height: 267
                              },
                              {
                                src: "https://cryptologos.cc/logos/arbitrum-arb-logo.png",
                             
                                width: 267,
                                height: 267
                              },
                              {
                                src: "https://cryptologos.cc/logos/optimism-ethereum-op-logo.png",
                                width: 267,
                                height: 267
                              },
                              {
                                src: "https://cryptologos.cc/logos/fantom-ftm-logo.png",
                                width: 267,
                                height: 267
                              },
                              ],
                        }
                    },
                    size: {
                        value: { min: 10, max: 15 },
                    },
                },
                poisson: {
                    enable: false
                  },
                detectRetina: true,
            }
        }
        /> 
        </div>
    ) : null;
};

export default Particle;

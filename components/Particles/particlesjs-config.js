export const partilcesConfig = {
    particles: {
        number: {
            value: 165,
            density: {
                enable: false,
                value_area: 800,
            },
        },
        color: {
            value: "#24cee5",
        },
        shape: {
            type: "star",
            stroke: {
                width: 0,
                color: "#000000",
            },
            polygon: {
                nb_sides: 5,
            },
            image: {
                src:
                    "http://wiki.lexisnexis.com/academic/images/f/fb/Itunes_podcast_icon_300.jpg",
                width: 100,
                height: 100,
            },
        },
        opacity: {
            value: 0.9,
            random: true,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
            },
        },
        size: {
            value: 4.1,
            random: true,
            anim: {
                enable: false,
                speed: 22.80405405405404,
                size_min: 20.270270270270256,
                sync: true,
            },
        },
        line_linked: {
            enable: false,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
        },
        move: {
            enable: true,
            speed: 3.156640387635437,
            direction: "bottom-left",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
            },
        },
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "repulse",
            },
            onclick: {
                enable: false,
                mode: "remove",
            },
            resize: true,
        },
        modes: {
            grab: {
                distance: 200,
                line_linked: {
                    opacity: 1,
                },
            },
            bubble: {
                distance: 215.37162162162147,
                size: 12.668918918918909,
                duration: 0.9290540540540533,
                opacity: 8,
                speed: 3,
            },
            repulse: {
                distance: 101.35135135135127,
                duration: 0.4,
            },
            push: {
                particles_nb: 4,
            },
            remove: {
                particles_nb: 2,
            },
        },
    },
    retina_detect: true,
};

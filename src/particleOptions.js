const particleOptions={
    background: {
        color: {
            /* value: "#0d47a1",  */
        },
    },
    fullScreen: {
        enable: true,
        zIndex: "1",
    },
    style: {
        position: "relative",
        height: "100vh",
        width: "96vw",
        margin: "0",
        
    },
    fpsLimit: 120,
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: "push",
            },
            onHover: {
                enable: false,
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
            value: "#e6f542",
        },
        links: {
            color: "#e6f542",
            distance: 150,
            enable: false,
            opacity: 0.5,
            width: 1,
        },
        move: {
            direction: "none",
            enable: true,
            outModes: {
                default: "bounce",
            },
            random: true,
            speed: 0.8,
            straight: true,
        },
        number: {
            density: {
                enable: true,
                area: 800,
            },
            value: 200,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: "circle",
        },
        size: {
            value: { min: 0.7, max: 1.5 },
        },
    },
    detectRetina: true,
}

export default particleOptions;
let data = {
    items: [
        {
            title: "lorem",
            content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`

        },
        {
            title: "lorem1",
            content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
        },
        {
            title: "lorem2",
            content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
        },
    ]
}

let data2 = {
    items: [
        {
            title: "Title1",
            content: "Andjela"
        },
        {
            title: "Title2",
            content: "David"
        },
        {
            title: "Title3",
            content: "Dara"
        }
    ]
}
let dataSlider = {
    infinite: false,
    // autoplay: false,
    // autoplayInterval: 3000,
    // bullets: false,
    animationType: "sliding", // sliding : fading

    items: [
        { 
            img: "images/mountains.jpeg",
            title: "mountains",
            buttonText: "Click",
            buttonLink: "https://www.google.com"
        },
        { 
            img: "images/sea.jpeg",
            title: "sea",
            buttonText: "Click",
            buttonLink: "https://www.google.com"
        },
        { 
            img: "images/river.jpeg",
            title: "river",
            buttonText: "Click",
            buttonLink: "https://www.google.com"
        }

    ]
}

export {data,data2,dataSlider}
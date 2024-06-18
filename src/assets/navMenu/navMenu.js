export const navBarMenu = [
    {
        id: 1,
        path: "/",
        link: "Home"
    },
    {
        id: 2,
        path: "/shop",
        link: "Shop"
    },
    {
        id: 3,
        path: "/about",
        link: "About"
    }
];

export const featuredList = [
    {
        id: 1,
        title: "#1 Best Seller!",
        description: "SWEssentials exclusive! Unlock the secrets of the most impossible task known to developers.",
        image: "../images/featured/div_book.png",
        price: 19.99
    },
    {
        id: 2,
        title: "Caffeinate, Code, Conquer",
        description: "Implement Caffeine-Driven Development with our awesome collection of mugs - designed with you in mind.",
        image: "../images/featured/mug.png",
        price: 14.95
    }
];

export const productList = [
    {
        id: 1,
        title: "Debugging Rubber Ducks",
        description: "Our rubber ducks are especially good listeners!",
        images: [
            { image: "../images/products/rubber_duck.png" }
        ],
        rating: 4.7,
        featured: true,
        price: [
            { color: "black", value: 19.99 }
        ],
        color: [{ value: "black" }]
    },
    {
        id: 2,
        title: "Blackout Curtains",
        description: "Now you literally won’t be able to tell if it’s day or night! Keep coding.",
        images: [
            { image: "../images/products/blue_curtains.png" },
            { image: "../images/products/green_curtains.png" },
            { image: "../images/products/grey_curtains.png" }
        ],
        rating: 4.3,
        featured: false,
        price: [
            { color: "blue", value: 49.99 },
            { color: "green", value: 49.99 },
            { color: "grey", value: 42.99 }
        ],
        color: [{ value: "blue" }, { value: "green" }, { value: "grey" }]
    },
    {
        id: 3,
        title: "Blue Light Blocking Glasses",
        description: "These glass filter out harmful blue light from digital devices such as computers, tablets, and smartphones.",
        images: [
            { image: "../images/products/glasses.png" }
        ],
        rating: 4.5,
        featured: false,
        price: [
            { color: "black", value: 24.99 }
        ],
        color: [{ value: "black" }]
    },
    {
        id: 4,
        title: "RGB LED Lights",
        description: "We all know a colorful setup is essential to being a 10x dev.",
        images: [
            { image: "../images/products/rgb.png" }
        ],
        rating: 4.0,
        featured: false,
        price: [
            { color: "multi", value: 42.99 }
        ],
        color: [{ value: "multi" }]
    },
    {
        id: 5,
        title: "Mechanical Keyboards",
        description: "The clickety clackity sounds increase productivity by 15%!* *Not proven by science.",
        images: [
            { image: "../images/products/keyboard.png" },
            { image: "../images/products/blue_keyboard.png" }
        ],
        rating: 4.8,
        featured: true,
        price: [
            { color: "grey", value: 49.99 },
            { color: "blue", value: 54.99 }
        ],
        color: [{ value: "grey" }, { value: "blue" }]
    },
    {
        id: 6,
        title: "Emotional Support Pet",
        description: "Adopt, Don't Shop!",
        images: [
            { image: "../images/products/pets.png" }
        ],
        rating: 4.9,
        featured: true,
        price: [
            { color: "multi", value: 150 }
        ],
        color: [{ value: "multi" }]
    },
    {
        id: 7,
        title: "How To Center A <DIV>",
        description: "Our #1 Best Seller! SWEssentials exclusive! Unlock the secrets of the most impossible task known to developers.",
        images: [
            { image: "../images/products/div_book.png" }
        ],
        rating: 5.0,
        featured: true,
        price: [
            { color: "white", value: 19.99 }
        ],
        color: [{ value: "white" }]
    },
    {
        id: 8,
        title: "Lifetime Subscription to ChatGPT",
        description: "An essential tool for any developer!",
        images: [
            { image: "../images/products/chatgpt.png" }
        ],
        rating: 4.6,
        featured: false,
        price: [
            { color: "blue", value: 2000 }
        ],
        color: [{ value: "blue" }]
    },
    {
        id: 9,
        title: "Deodorant",
        description: "...We both know why this is on here.",
        images: [
            { image: "../images/products/deodorant.png" }
        ],
        rating: 4.7,
        featured: false,
        price: [
            { color: "white", value: 12.99 }
        ],
        color: [{ value: "white" }]
    },
    {
        id: 10,
        title: "Multiple Computer Monitors",
        description: "More monitors === higher productivity. Plus it will impress your friends.",
        images: [
            { image: "../images/products/monitors.png" }
        ],
        rating: 4.4,
        featured: false,
        price: [
            { color: "white", value: 300 }
        ],
        color: [{ value: "white" }]
    },
    {
        id: 11,
        title: "Hoodies",
        description: "A developer is only as good as their gear. Ultra soft, breathable, and sure to impress in your work video calls!",
        images: [
            { image: "../images/products/black_hoodie.jpg" },
            { image: "../images/products/white_hoodie.png" },
            { image: "../images/products/green_hoodie.png"}
        ],
        rating: 4.9,
        featured: false,
        price: [
            { color: "black", value: 35.99 },
            { color: "white", value: 40.99 },
            { color: "green", value: 35.99 }
        ],
        color: [{ value: "black" }, { value: "white" }, { value: "green" }]
    },
    {
        id: 12,
        title: "Recycling Bin",
        description: "For all of your energy drink cans. Change the world by writing awesome code and saving the planet!",
        images: [
            { image: "../images/products/recycling.png" }
        ],
        rating: 4.8,
        featured: false,
        price: [
            { color: "blue", value: 24.99 }
        ],
        color: [{ value: "blue" }]
    },
    {
        id: 13,
        title: "Coffee Mug",
        description: "Implement Caffeine-Driven Development with our awesome collection of mugs - designed with you in mind.",
        images: [
            { image: "../images/products/mug1.png" }
        ],
        rating: 4.7,
        featured: true,
        price: [
            { color: "black", value: 14.95 }
        ],
        color: [{ value: "black" }]
    },
    {
        id: 14,
        title: "Cable Management Clips",
        description: "Your cable organization should be as clean and organized as your code!",
        images: [
            { image: "../images/products/cable_clips.png" }
        ],
        rating: 4.5,
        featured: false,
        price: [
            { color: "black", value: 14.99 }
        ],
        color: [{ value: "black" }]
    },
    {
        id: 15,
        title: "Office Chair",
        description: "An essential investment! Our chairs are ergonomically designed to help maintain good posture, providing comfort and support so you can focus on changing the world!",
        images: [
            { image: "../images/products/chair.png" }
        ],
        rating: 4.8,
        featured: false,
        price: [
            { color: "black", value: 135 }
        ],
        color: [{ value: "black" }]
    },
    {
        id: 16,
        title: "Mouse Jigglers",
        description: "For um... reasons.",
        images: [
            { image: "../images/products/mouse_jiggler.png" }
        ],
        rating: 4.2,
        featured: false,
        price: [
            { color: "blue", value: 24.99 }
        ],
        color: [{ value: "blue" }]
    },
    {
        id: 17,
        title: "LIMITED EDITION - Junior Software Developer",
        description: "Features: Incredible work ethic, top notch sense of humor, endless curiosity, and extensive business acumen. For pricing and availability, please inquire at (linkedin).",
        images: [
            { image: "../images/products/meround.png" }
        ],
        rating: 5.0,
        featured: true,
        price: [
            { color: "multi", value: 1000000 }
        ],
        color: [{ value: "multi" }]
    },
]
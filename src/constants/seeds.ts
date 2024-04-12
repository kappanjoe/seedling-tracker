import strings from './strings';
const { appInfo } = strings;

const defaultSeeds: SeedStructure = {
    info: {
        appVersion: appInfo.appVersion,
        seedsVersion: appInfo.seedsVersion,
    },
    colors: [
        "red",
        "yellow",
        "blue",
        "white",
        "purple",
        "grey",
        "pink",
    ],
    decorationCount: 96,
    categories: {
        restaurant: {
            key: "restaurant",
            name: "Restaurant",
            isOpen: true,
            decorations: {
                chefHat: {
                    catKey: "restaurant",
                    key: "chefHat",
                    name: "Chef Hat",
                    colors: {
                        red: "off",
                        yellow: "off",
                        blue: "off",
                        white: "off",
                        purple: "off",
                        grey: "off",
                        pink: "off"
                    }
                },
                chefHatShiny: {
                    catKey: "restaurant",
                    key: "chefHatShiny",
                    name: "Chef Hat (Shiny)",
                    colors: {
                        red: "off",
                        yellow: "off",
                        blue: "off",
                        white: "nil",
                        purple: "nil",
                        grey: "nil",
                        pink: "nil"
                    }
                }
            },
            decorationOrder: [
                "chefHat",
                "chefHatShiny"
            ]
        },
        cafe: {
            key: "cafe",
            name: "Café",
            isOpen: true,
            decorations: {
                coffeeCup: {
                    catKey: "cafe",
                    key: "coffeeCup",
                    name: "Coffee Cup",
                    colors: {
                        red: "off",
                        yellow: "off",
                        blue: "off",
                        white: "off",
                        purple: "off",
                        grey: "off",
                        pink: "off"
                    }
                }
            },
            decorationOrder: [
                "coffeeCup"
            ]
        },
        sweetshop: {
            key: "sweetshop",
            name: "Sweetshop",
            isOpen: true,
            decorations: {
                macaron: {
                    catKey: "sweetshop",
                    key: "macaron",
                    name: "Macaron",
                    colors: {
                        red: "off",
                        yellow: "off",
                        blue: "off",
                        white: "off",
                        purple: "off",
                        grey: "off",
                        pink: "off"
                    }
                },
                donut: {
                    catKey: "sweetshop",
                    key: "donut",
                    name: "Donut",
                    colors: {
                        red: "off",
                        yellow: "off",
                        blue: "off",
                        white: "off",
                        purple: "off",
                        grey: "off",
                        pink: "off"
                    }
                }
            },
            decorationOrder: [
                "macaron",
                "donut"
            ]
        },
        movieTheatre: {
            key: "movieTheatre",
            name: "Movie Theatre",
            isOpen: true,
            decorations: {
                popcornSnack: {
                    catKey: "movieTheatre",
                    key: "popcornSnack",
                    name: "Popcorn Snack",
                    colors: {
                        red: "off",
                        yellow: "off",
                        blue: "off",
                        white: "off",
                        purple: "off",
                        grey: "off",
                        pink: "off"
                    }
                }
            },
            decorationOrder: [
                "popcornSnack"
            ]
        },
        pharmacy: {
            key: "pharmacy",
            name: "Pharmacy",
            isOpen: true,
            decorations: {
                toothbrush: {
                    catKey: "pharmacy",
                    key: "toothbrush",
                    name: "Toothbrush",
                    colors: {
                        red: "off",
                        yellow: "off",
                        blue: "off",
                        white: "off",
                        purple: "off",
                        grey: "off",
                        pink: "off"
                    }
                }
            },
            decorationOrder: [
                "toothbrush"
            ]
        },
        zoo: {
            key: "zoo",
            name: "Zoo",
            isOpen: true,
            decorations: {
                dandelion: {
                    catKey: "zoo",
                    key: "dandelion",
                    name: "Dandelion",
                    colors: {
                        red: "off",
                        yellow: "off",
                        blue: "off",
                        white: "off",
                        purple: "off",
                        grey: "off",
                        pink: "off"
                    }
                }
            },
            decorationOrder: [
                "dandelion"
            ]
        },
        forest: {
            key: "forest",
            name: "Forest",
            isOpen: true,
            decorations: {
                stagBeetle: {
                    catKey: "forest",
                    key: "stagBeetle",
                    name: "Stag Beetle",
                    colors: {
                        red: "off",
                        yellow: "off",
                        blue: "off",
                        white: "off",
                        purple: "off",
                        grey: "off",
                        pink: "off"
                    }
                },
                acorn: {
                    catKey: "forest",
                    key: "acorn",
                    name: "Acorn",
                    colors: {
                        red: "off",
                        yellow: "off",
                        blue: "off",
                        white: "off",
                        purple: "off",
                        grey: "off",
                        pink: "off"
                    }
                }
            },
            decorationOrder: [
                "stagBeetle",
                "acorn"
            ]
        },
        waterside: {
            key: "waterside",
            name: "Waterside",
            isOpen: true,
            decorations: {
                fishingLure: {
                    catKey: "waterside",
                    key: "fishingLure",
                    name: "Fishing Lure",
                    colors: {
                        red: "off",
                        yellow: "off",
                        blue: "off",
                        white: "off",
                        purple: "off",
                        grey: "off",
                        pink: "off"
                    }
                }
            },
            decorationOrder: [
                "fishingLure"
            ]
        },
        postOffice: {
            key: "postOffice",
            name: "Post Office",
            isOpen: true,
            decorations: {
                stamp: {
                    catKey: "postOffice",
                    key: "stamp",
                    name: "Stamp",
                    colors: {
                        red: "off",
                        yellow: "off",
                        blue: "off",
                        white: "off",
                        purple: "off",
                        grey: "off",
                        pink: "off"
                    }
                }
            },
            decorationOrder: [
                "stamp"
            ]
        },
        artGallery: {
            key: "artGallery",
            name: "Art Gallery",
            isOpen: true,
            decorations: {
                pictureFrame: {
                    catKey: "artGallery",
                    key: "pictureFrame",
                    name: "Picture Frame",
                    colors: {
                        red: "off",
                        yellow: "off",
                        blue: "off",
                        white: "off",
                        purple: "off",
                        grey: "off",
                        pink: "off"
                    }
                }
            },
            decorationOrder: [
                "pictureFrame"
            ]
        },
        airport: {
            key: "airport",
            name: "Airport",
            isOpen: true,
            decorations: {
                toyAirplane: {
                    catKey: "airport",
                    key: "toyAirplane",
                    name: "Toy Airplane",
                    colors: {
                        red: "off",
                        yellow: "off",
                        blue: "off",
                        white: "off",
                        purple: "off",
                        grey: "off",
                        pink: "off"
                    }
                }
            },
            decorationOrder: [
                "toyAirplane"
            ]
        },
        station: {
            key: "station",
            name: "Station",
            isOpen: true,
            decorations: {
                paperTrain: {
                    catKey: "station",
                    key: "paperTrain",
                    name: "Paper Train",
                    colors: {
                        red: "off",
                        yellow: "off",
                        blue: "off",
                        white: "off",
                        purple: "off",
                        grey: "off",
                        pink: "off"
                    }
                },
                ticket: {
                    catKey: "station",
                    key: "ticket",
                    name: "Ticket",
                    colors: {
                        red: "off",
                        yellow: "off",
                        blue: "off",
                        white: "off",
                        purple: "off",
                        grey: "off",
                        pink: "off"
                    }
                }
            },
            decorationOrder: [
                "paperTrain",
                "ticket"
            ]
        },
        beach: {
            key: "beach",
            name: "Beach",
            isOpen: true,
            decorations: {
                shell: {
                    catKey: "beach",
                    key: "shell",
                    name: "Shell",
                    colors: {
                        red: "off",
                        yellow: "off",
                        blue: "off",
                        white: "off",
                        purple: "off",
                        grey: "off",
                        pink: "off"
                    }
                }
            },
            decorationOrder: [
                "shell"
            ]
        },
        burgerPlace: {
            key: "burgerPlace",
            name: "Burger Place",
            isOpen: true,
            decorations: {
                burger: {
                    catKey: "burgerPlace",
                    key: "burger",
                    name: "Burger",
                    colors: {
                        red: "off",
                        yellow: "off",
                        blue: "off",
                        white: "off",
                        purple: "off",
                        grey: "off",
                        pink: "off"
                    }
                }
            },
            decorationOrder: [
                "burger"
            ]
        },
        cornerStore: {
            key: "cornerStore",
            name: "Corner Store",
            isOpen: true,
            decorations: {
                bottleCap: {
                    catKey: "cornerStore",
                    key: "bottleCap",
                    name: "Bottle Cap",
                    colors: {
                        red: "off",
                        yellow: "off",
                        blue: "off",
                        white: "off",
                        purple: "off",
                        grey: "off",
                        pink: "off"
                    }
                },
                snack: {
                    catKey: "cornerStore",
                    key: "snack",
                    name: "Snack",
                    colors: {
                        red: "off",
                        yellow: "off",
                        blue: "off",
                        white: "off",
                        purple: "off",
                        grey: "off",
                        pink: "off"
                    }
                }
            },
            decorationOrder: [
                "bottleCap",
                "snack"
            ]
        },
        supermarket: {
            key: "supermarket",
            name: "Supermarket",
            isOpen: true,
            decorations: {
                mushroom: {
                    catKey: "supermarket",
                    key: "mushroom",
                    name: "Mushroom",
                    colors: {
                        red: "off",
                        yellow: "off",
                        blue: "off",
                        white: "off",
                        purple: "off",
                        grey: "off",
                        pink: "off"
                    }
                },
                banana: {
                    catKey: "supermarket",
                    key: "banana",
                    name: "Banana",
                    colors: {
                        red: "off",
                        yellow: "off",
                        blue: "off",
                        white: "off",
                        purple: "off",
                        grey: "off",
                        pink: "off"
                    }
                }
            },
            decorationOrder: [
                "mushroom",
                "banana"
            ]
        },
        bakery: {
            key: "bakery",
            name: "Bakery",
            isOpen: true,
            decorations: {
                baguette: {
                    catKey: "bakery",
                    key: "baguette",
                    name: "Baguette",
                    colors: {
                        red: "off",
                        yellow: "off",
                        blue: "off",
                        white: "off",
                        purple: "off",
                        grey: "off",
                        pink: "off"
                    }
                }
            },
            decorationOrder: [
                "baguette"
            ]
        },
        hairSalon: {
            key: "hairSalon",
            name: "Hair Salon",
            isOpen: true,
            decorations: {
                scissors: {
                    catKey: "hairSalon",
                    key: "scissors",
                    name: "Scissors",
                    colors: {
                        red: "off",
                        yellow: "off",
                        blue: "off",
                        white: "off",
                        purple: "off",
                        grey: "off",
                        pink: "off"
                    }
                }
            },
            decorationOrder: [
                "scissors"
            ]
        },
        clothesStore: {
            key: "clothesStore",
            name: "Clothes Store",
            isOpen: true,
            decorations: {
                hairTie: {
                    catKey: "clothesStore",
                    key: "hairTie",
                    name: "Hair Tie",
                    colors: {
                        red: "off",
                        yellow: "off",
                        blue: "off",
                        white: "off",
                        purple: "off",
                        grey: "off",
                        pink: "off"
                    }
                }
            },
            decorationOrder: [
                "hairTie"
            ]
        },
        park: {
            key: "park",
            name: "Park",
            isOpen: true,
            decorations: {
                clover: {
                    catKey: "park",
                    key: "clover",
                    name: "Clover",
                    colors: {
                        red: "off",
                        yellow: "off",
                        blue: "off",
                        white: "off",
                        purple: "off",
                        grey: "off",
                        pink: "off"
                    }
                },
                fourLeafClover: {
                    catKey: "park",
                    key: "fourLeafClover",
                    name: "4-Leaf Clover",
                    colors: {
                        red: "off",
                        yellow: "off",
                        blue: "off",
                        white: "off",
                        purple: "off",
                        grey: "off",
                        pink: "off"
                    }
                }
            },
            decorationOrder: [
                "clover",
                "fourLeafClover"
            ]
        },
        libraryBookstore: {
            key: "libraryBookstore",
            name: "Library/Bookstore",
            isOpen: true,
            decorations: {
                tinyBook: {
                    catKey: "libraryBookstore",
                    key: "tinyBook",
                    name: "Tiny Book",
                    colors: {
                        red: "off",
                        yellow: "off",
                        blue: "off",
                        white: "off",
                        purple: "off",
                        grey: "off",
                        pink: "off"
                    }
                }
            },
            decorationOrder: [
                "tinyBook"
            ]
        },
        roadside: {
            key: "roadside",
            name: "Roadside",
            isOpen: true,
            decorations: {
                stickerGreen: {
                    catKey: "roadside",
                    key: "stickerGreen",
                    name: "Sticker (Green)",
                    colors: {
                        red: "off",
                        yellow: "off",
                        blue: "off",
                        white: "off",
                        purple: "off",
                        grey: "off",
                        pink: "off"
                    }
                },
                stickerBlue: {
                    catKey: "roadside",
                    key: "stickerBlue",
                    name: "Sticker (Blue)",
                    colors: {
                        red: "off",
                        yellow: "off",
                        blue: "off",
                        white: "off",
                        purple: "off",
                        grey: "off",
                        pink: "off"
                    }
                },
                stickerOrange: {
                    catKey: "roadside",
                    key: "stickerOrange",
                    name: "Sticker (Orange)",
                    colors: {
                        red: "off",
                        yellow: "off",
                        blue: "off",
                        white: "off",
                        purple: "off",
                        grey: "off",
                        pink: "off"
                    }
                },
                coin: {
                    catKey: "roadside",
                    key: "coin",
                    name: "Coin",
                    colors: {
                        red: "off",
                        yellow: "off",
                        blue: "off",
                        white: "off",
                        purple: "off",
                        grey: "off",
                        pink: "off"
                    }
                }
            },
            decorationOrder: [
                "stickerGreen",
                "stickerBlue",
                "stickerOrange",
                "coin"
            ]
        },
        sushiRestaurant: {
            key: "sushiRestaurant",
            name: "Sushi Restaurant",
            isOpen: true,
            decorations: {
                sushi: {
                    catKey: "sushiRestaurant",
                    key: "sushi",
                    name: "Sushi",
                    colors: {
                        red: "off",
                        yellow: "off",
                        blue: "off",
                        white: "off",
                        purple: "off",
                        grey: "off",
                        pink: "off"
                    }
                }
            },
            decorationOrder: [
                "sushi"
            ]
        },
        mountain: {
            key: "mountain",
            name: "Mountain",
            isOpen: true,
            decorations: {
                mountainPinBadge: {
                    catKey: "mountain",
                    key: "mountainPinBadge",
                    name: "Mountain Pin Badge",
                    colors: {
                        red: "off",
                        yellow: "off",
                        blue: "off",
                        white: "nil",
                        purple: "nil",
                        grey: "nil",
                        pink: "nil"
                    }
                }
            },
            decorationOrder: [
                "mountainPinBadge"
            ]
        },
        stadium: {
            key: "stadium",
            name: "Stadium",
            isOpen: true,
            decorations: {
                ballKeychain: {
                    catKey: "stadium",
                    key: "ballKeychain",
                    name: "Ball Keychain",
                    colors: {
                        red: "off",
                        yellow: "off",
                        blue: "off",
                        white: "nil",
                        purple: "nil",
                        grey: "nil",
                        pink: "nil"
                    }
                }
            },
            decorationOrder: [
                "ballKeychain"
            ]
        },
        rainyDay: {
            key: "rainyDay",
            name: "Rainy Day",
            isOpen: true,
            decorations: {
                leafHatA: {
                    catKey: "rainyDay",
                    key: "leafHatA",
                    name: "Leaf Hat A",
                    colors: {
                        red: "nil",
                        yellow: "nil",
                        blue: "off",
                        white: "nil",
                        purple: "nil",
                        grey: "nil",
                        pink: "nil"
                    }
                },
                leafHatB: {
                    catKey: "rainyDay",
                    key: "leafHatB",
                    name: "Leaf Hat B",
                    colors: {
                        red: "nil",
                        yellow: "nil",
                        blue: "off",
                        white: "nil",
                        purple: "nil",
                        grey: "nil",
                        pink: "nil"
                    }
                },
                leafHatC: {
                    catKey: "rainyDay",
                    key: "leafHatC",
                    name: "Leaf Hat C",
                    colors: {
                        red: "nil",
                        yellow: "nil",
                        blue: "off",
                        white: "nil",
                        purple: "nil",
                        grey: "nil",
                        pink: "nil"
                    }
                }
            },
            decorationOrder: [
                "leafHatA",
                "leafHatB",
                "leafHatC"
            ]
        },
        snowyDay: {
            key: "snowyDay",
            name: "Snowy Day",
            isOpen: true,
            decorations: {
                snow: {
                    catKey: "snowyDay",
                    key: "snow",
                    name: "Snow",
                    colors: {
                        red: "nil",
                        yellow: "nil",
                        blue: "off",
                        white: "off",
                        purple: "nil",
                        grey: "nil",
                        pink: "nil"
                    }
                }
            },
            decorationOrder: [
                "snow"
            ]
        },
        themePark: {
            key: "themePark",
            name: "Theme Park",
            isOpen: true,
            decorations: {
                themeParkTicketA: {
                    catKey: "themePark",
                    key: "themeParkTicketA",
                    name: "Theme Park Ticket A",
                    colors: {
                        red: "off",
                        yellow: "off",
                        blue: "off",
                        white: "nil",
                        purple: "nil",
                        grey: "nil",
                        pink: "nil"
                    }
                },
                themeParkTicketB: {
                    catKey: "themePark",
                    key: "themeParkTicketB",
                    name: "Theme Park Ticket B",
                    colors: {
                        red: "off",
                        yellow: "off",
                        blue: "off",
                        white: "nil",
                        purple: "nil",
                        grey: "nil",
                        pink: "nil"
                    }
                }
            },
            decorationOrder: [
                "themeParkTicketA",
                "themeParkTicketB"
            ]
        },
        busStop: {
            key: "busStop",
            name: "Bus Stop",
            isOpen: true,
            decorations: {
                paperBus: {
                    catKey: "busStop",
                    key: "paperBus",
                    name: "Paper Bus",
                    colors: {
                        red: "off",
                        yellow: "off",
                        blue: "off",
                        white: "off",
                        purple: "off",
                        grey: "off",
                        pink: "off"
                    }
                }
            },
            decorationOrder: [
                "paperBus"
            ]
        },
        italianRestaurant: {
            key: "italianRestaurant",
            name: "Italian Restaurant",
            isOpen: true,
            decorations: {
                pizza: {
                    catKey: "italianRestaurant",
                    key: "pizza",
                    name: "Pizza",
                    colors: {
                        red: "off",
                        yellow: "off",
                        blue: "off",
                        white: "off",
                        purple: "off",
                        grey: "off",
                        pink: "off"
                    }
                }
            },
            decorationOrder: [
                "pizza"
            ]
        },
        ramenShop: {
            key: "ramenShop",
            name: "Ramen Shop",
            isOpen: true,
            decorations: {
                ramenKeychain: {
                    catKey: "ramenShop",
                    key: "ramenKeychain",
                    name: "Ramen Keychain",
                    colors: {
                        red: "off",
                        yellow: "off",
                        blue: "off",
                        white: "off",
                        purple: "off",
                        grey: "off",
                        pink: "off"
                    }
                }
            },
            decorationOrder: [
                "ramenKeychain"
            ]
        },
        bridge: {
            key: "bridge",
            name: "Bridge",
            isOpen: true,
            decorations: {
                bridgeBadge: {
                    catKey: "bridge",
                    key: "bridgeBadge",
                    name: "Bridge Badge",
                    colors: {
                        red: "off",
                        yellow: "off",
                        blue: "off",
                        white: "nil",
                        purple: "nil",
                        grey: "nil",
                        pink: "nil"
                    }
                }
            },
            decorationOrder: [
                "bridgeBadge"
            ]
        },
        hotel: {
            key: "hotel",
            name: "Hotel",
            isOpen: true,
            decorations: {
                hotelAmenities: {
                    catKey: "hotel",
                    key: "hotelAmenities",
                    name: "Hotel Amenities",
                    colors: {
                        red: "off",
                        yellow: "off",
                        blue: "off",
                        white: "off",
                        purple: "off",
                        grey: "off",
                        pink: "off"
                    }
                }
            },
            decorationOrder: [
                "hotelAmenities"
            ]
        },
        makeupStore: {
            key: "makeupStore",
            name: "Makeup Store",
            isOpen: true,
            decorations: {
                makeup: {
                    catKey: "makeupStore",
                    key: "makeup",
                    name: "Makeup",
                    colors: {
                        red: "off",
                        yellow: "off",
                        blue: "off",
                        white: "off",
                        purple: "off",
                        grey: "off",
                        pink: "off"
                    }
                }
            },
            decorationOrder: [
                "makeup"
            ]
        },
        shrineTemple: {
            key: "shrineTemple",
            name: "Shrine/Temple",
            isOpen: true,
            decorations: {
                fortuneA: {
                    catKey: "shrineTemple",
                    key: "fortuneA",
                    name: "Fortune A (大吉)",
                    colors: {
                        red: "off",
                        yellow: "off",
                        blue: "off",
                        white: "off",
                        purple: "off",
                        grey: "off",
                        pink: "off"
                    }
                },
                fortuneB: {
                    catKey: "shrineTemple",
                    key: "fortuneB",
                    name: "Fortune B (中吉)",
                    colors: {
                        red: "off",
                        yellow: "off",
                        blue: "off",
                        white: "off",
                        purple: "off",
                        grey: "off",
                        pink: "off"
                    }
                },
                fortuneC: {
                    catKey: "shrineTemple",
                    key: "fortuneC",
                    name: "Fortune C (小吉)",
                    colors: {
                        red: "off",
                        yellow: "off",
                        blue: "off",
                        white: "off",
                        purple: "off",
                        grey: "off",
                        pink: "off"
                    }
                },
                fortuneD: {
                    catKey: "shrineTemple",
                    key: "fortuneD",
                    name: "Fortune D (吉)",
                    colors: {
                        red: "off",
                        yellow: "off",
                        blue: "off",
                        white: "off",
                        purple: "off",
                        grey: "off",
                        pink: "off"
                    }
                },
                fortuneE: {
                    catKey: "shrineTemple",
                    key: "fortuneE",
                    name: "Fortune E (末吉)",
                    colors: {
                        red: "off",
                        yellow: "off",
                        blue: "off",
                        white: "off",
                        purple: "off",
                        grey: "off",
                        pink: "off"
                    }
                }
            },
            decorationOrder: [
                "fortuneA",
                "fortuneB",
                "fortuneC",
                "fortuneD",
                "fortuneE"
            ]
        },
        applianceStore: {
            key: "applianceStore",
            name: "Appliance Store",
            isOpen: true,
            decorations: {
                batteryA: {
                    catKey: "applianceStore",
                    key: "batteryA",
                    name: "Battery A",
                    colors: {
                        red: "nil",
                        yellow: "off",
                        blue: "nil",
                        white: "nil",
                        purple: "nil",
                        grey: "nil",
                        pink: "nil"
                    }
                },
                batteryB: {
                    catKey: "applianceStore",
                    key: "batteryB",
                    name: "Battery B",
                    colors: {
                        red: "nil",
                        yellow: "off",
                        blue: "nil",
                        white: "nil",
                        purple: "nil",
                        grey: "nil",
                        pink: "nil"
                    }
                },
                batteryC: {
                    catKey: "applianceStore",
                    key: "batteryC",
                    name: "Battery C",
                    colors: {
                        red: "nil",
                        yellow: "off",
                        blue: "nil",
                        white: "nil",
                        purple: "nil",
                        grey: "nil",
                        pink: "nil"
                    }
                },
                batteryD: {
                    catKey: "applianceStore",
                    key: "batteryD",
                    name: "Battery D",
                    colors: {
                        red: "nil",
                        yellow: "off",
                        blue: "nil",
                        white: "nil",
                        purple: "nil",
                        grey: "nil",
                        pink: "nil"
                    }
                },
                batteryE: {
                    catKey: "applianceStore",
                    key: "batteryE",
                    name: "Battery E",
                    colors: {
                        red: "nil",
                        yellow: "off",
                        blue: "nil",
                        white: "nil",
                        purple: "nil",
                        grey: "nil",
                        pink: "nil"
                    }
                },
                batteryF: {
                    catKey: "applianceStore",
                    key: "batteryF",
                    name: "Battery F",
                    colors: {
                        red: "nil",
                        yellow: "off",
                        blue: "nil",
                        white: "nil",
                        purple: "nil",
                        grey: "nil",
                        pink: "nil"
                    }
                },
                fairyLightsA: {
                    catKey: "applianceStore",
                    key: "fairyLightsA",
                    name: "Fairy Lights A",
                    colors: {
                        red: "nil",
                        yellow: "off",
                        blue: "nil",
                        white: "nil",
                        purple: "nil",
                        grey: "nil",
                        pink: "nil"
                    }
                },
                fairyLightsB: {
                    catKey: "applianceStore",
                    key: "fairyLightsB",
                    name: "Fairy Lights B",
                    colors: {
                        red: "nil",
                        yellow: "off",
                        blue: "nil",
                        white: "nil",
                        purple: "nil",
                        grey: "nil",
                        pink: "nil"
                    }
                }
            },
            decorationOrder: [
                "batteryA",
                "batteryB",
                "batteryC",
                "batteryD",
                "batteryE",
                "batteryF",
                "fairyLightsA",
                "fairyLightsB"
            ]
        },
        curryRestaurant: {
            key: "curryRestaurant",
            name: "Curry Restaurant",
            isOpen: true,
            decorations: {
                curryBowl: {
                    catKey: "curryRestaurant",
                    key: "curryBowl",
                    name: "Curry Bowl",
                    colors: {
                        red: "off",
                        yellow: "off",
                        blue: "off",
                        white: "off",
                        purple: "off",
                        grey: "off",
                        pink: "off"
                    }
                }
            },
            decorationOrder: [
                "curryBowl"
            ]
        },
        special: {
            key: "special",
            name: "Special",
            isOpen: true,
            decorations: {
                marioHat: {
                    catKey: "special",
                    key: "marioHat",
                    name: "Mario Hat",
                    colors: {
                        red: "nil",
                        yellow: "nil",
                        blue: "off",
                        white: "nil",
                        purple: "nil",
                        grey: "nil",
                        pink: "nil"
                    }
                },
                lunarNewYearOrnamentRed: {
                    catKey: "special",
                    key: "lunarNewYearOrnamentRed",
                    name: "Lunar New Year Ornament (Red)",
                    colors: {
                        red: "off",
                        yellow: "off",
                        blue: "off",
                        white: "off",
                        purple: "off",
                        grey: "off",
                        pink: "off"
                    }
                },
                lunarNewYearOrnamentGold: {
                    catKey: "special",
                    key: "lunarNewYearOrnamentGold",
                    name: "Lunar New Year Ornament (Gold)",
                    colors: {
                        red: "off",
                        yellow: "off",
                        blue: "off",
                        white: "off",
                        purple: "off",
                        grey: "off",
                        pink: "off"
                    }
                },
                chessPieceWhite: {
                    catKey: "special",
                    key: "chessPieceWhite",
                    name: "Chess Piece (White)",
                    colors: {
                        red: "off",
                        yellow: "off",
                        blue: "off",
                        white: "off",
                        purple: "off",
                        grey: "off",
                        pink: "off"
                    }
                },
                chessPieceBlack: {
                    catKey: "special",
                    key: "chessPieceBlack",
                    name: "Chess Piece (Black)",
                    colors: {
                        red: "off",
                        yellow: "off",
                        blue: "off",
                        white: "off",
                        purple: "off",
                        grey: "off",
                        pink: "off"
                    }
                },
                fingerboard: {
                    catKey: "special",
                    key: "fingerboard",
                    name: "Fingerboard",
                    colors: {
                        red: "off",
                        yellow: "off",
                        blue: "off",
                        white: "off",
                        purple: "off",
                        grey: "off",
                        pink: "off"
                    }
                },
                flowerCard2023A: {
                    catKey: "special",
                    key: "flowerCard2023A",
                    name: "2023 Flower Card A",
                    colors: {
                        red: "off",
                        yellow: "off",
                        blue: "off",
                        white: "nil",
                        purple: "off",
                        grey: "nil",
                        pink: "nil"
                    }
                },
                flowerCard2023B: {
                    catKey: "special",
                    key: "flowerCard2023B",
                    name: "2023 Flower Card B",
                    colors: {
                        red: "off",
                        yellow: "off",
                        blue: "off",
                        white: "nil",
                        purple: "off",
                        grey: "nil",
                        pink: "nil"
                    }
                },
                flowerCard2023C: {
                    catKey: "special",
                    key: "flowerCard2023C",
                    name: "2023 Flower Card C",
                    colors: {
                        red: "off",
                        yellow: "off",
                        blue: "off",
                        white: "nil",
                        purple: "off",
                        grey: "nil",
                        pink: "nil"
                    }
                },
                flowerCard2023D: {
                    catKey: "special",
                    key: "flowerCard2023D",
                    name: "2023 Flower Card D",
                    colors: {
                        red: "off",
                        yellow: "off",
                        blue: "off",
                        white: "nil",
                        purple: "off",
                        grey: "nil",
                        pink: "nil"
                    }
                },
                flowerCard2023E: {
                    catKey: "special",
                    key: "flowerCard2023E",
                    name: "2023 Flower Card E",
                    colors: {
                        red: "off",
                        yellow: "off",
                        blue: "off",
                        white: "nil",
                        purple: "off",
                        grey: "nil",
                        pink: "nil"
                    }
                },
                flowerCard2023F: {
                    catKey: "special",
                    key: "flowerCard2023F",
                    name: "2023 Flower Card F",
                    colors: {
                        red: "off",
                        yellow: "off",
                        blue: "off",
                        white: "nil",
                        purple: "off",
                        grey: "nil",
                        pink: "nil"
                    }
                },
                flowerCard2024A: {
                    catKey: "special",
                    key: "flowerCard2024A",
                    name: "2024 Flower Card A",
                    colors: {
                        red: "off",
                        yellow: "off",
                        blue: "off",
                        white: "off",
                        purple: "off",
                        grey: "off",
                        pink: "off"
                    }
                },
                flowerCard2024B: {
                    catKey: "special",
                    key: "flowerCard2024B",
                    name: "2024 Flower Card B",
                    colors: {
                        red: "off",
                        yellow: "off",
                        blue: "off",
                        white: "off",
                        purple: "off",
                        grey: "off",
                        pink: "off"
                    }
                },
                jackOLantern: {
                    catKey: "special",
                    key: "jackOLantern",
                    name: "Jack-O'-Lantern",
                    colors: {
                        red: "off",
                        yellow: "off",
                        blue: "off",
                        white: "off",
                        purple: "off",
                        grey: "off",
                        pink: "off"
                    }
                },
                halloweenTreat: {
                    catKey: "special",
                    key: "halloweenTreat",
                    name: "Halloween Treat",
                    colors: {
                        red: "off",
                        yellow: "off",
                        blue: "off",
                        white: "off",
                        purple: "off",
                        grey: "off",
                        pink: "off"
                    }
                },
                firstAnniversarySnack: {
                    catKey: "special",
                    key: "firstAnniversarySnack",
                    name: "1st Anniversary Snack",
                    colors: {
                        red: "off",
                        yellow: "off",
                        blue: "off",
                        white: "off",
                        purple: "off",
                        grey: "off",
                        pink: "off"
                    }
                },
                koppaiteSpaceSuit: {
                    catKey: "special",
                    key: "koppaiteSpaceSuit",
                    name: "Koppaite Space Suit",
                    colors: {
                        red: "off",
                        yellow: "off",
                        blue: "off",
                        white: "nil",
                        purple: "nil",
                        grey: "nil",
                        pink: "nil"
                    }
                },
                mitten: {
                    catKey: "special",
                    key: "mitten",
                    name: "Mitten",
                    colors: {
                        red: "off",
                        yellow: "off",
                        blue: "off",
                        white: "off",
                        purple: "off",
                        grey: "off",
                        pink: "off"
                    }
                },
                glasses2023: {
                    catKey: "special",
                    key: "glasses2023",
                    name: "2023 Glasses",
                    colors: {
                        red: "off",
                        yellow: "off",
                        blue: "off",
                        white: "off",
                        purple: "off",
                        grey: "off",
                        pink: "off"
                    }
                },
                glasses2024: {
                    catKey: "special",
                    key: "glasses2024",
                    name: "2024 Glasses",
                    colors: {
                        red: "off",
                        yellow: "off",
                        blue: "off",
                        white: "off",
                        purple: "off",
                        grey: "off",
                        pink: "off"
                    }
                },
                valentineSticker: {
                    catKey: "special",
                    key: "valentineSticker",
                    name: "Valentine Sticker",
                    colors: {
                        red: "off",
                        yellow: "off",
                        blue: "off",
                        white: "off",
                        purple: "off",
                        grey: "off",
                        pink: "off"
                    }
                },
                reverseValentinesDaySticker: {
                    catKey: "special",
                    key: "reverseValentinesDaySticker",
                    name: "Reverse Valentine's Day Sticker",
                    colors: {
                        red: "off",
                        yellow: "off",
                        blue: "off",
                        white: "nil",
                        purple: "nil",
                        grey: "nil",
                        pink: "nil"
                    }
                },
                presentStickerGold: {
                    catKey: "special",
                    key: "presentStickerGold",
                    name: "Present Sticker (Gold)",
                    colors: {
                        red: "off",
                        yellow: "off",
                        blue: "off",
                        white: "off",
                        purple: "nil",
                        grey: "nil",
                        pink: "nil"
                    }
                },
                easterEgg: {
                    catKey: "special",
                    key: "easterEgg",
                    name: "Easter Egg",
                    colors: {
                        red: "off",
                        yellow: "off",
                        blue: "off",
                        white: "off",
                        purple: "off",
                        grey: "off",
                        pink: "off"
                    }
                },
                rabbitEgg: {
                    catKey: "special",
                    key: "rabbitEgg",
                    name: "Rabbit Egg",
                    colors: {
                        red: "off",
                        yellow: "off",
                        blue: "off",
                        white: "off",
                        purple: "off",
                        grey: "off",
                        pink: "off"
                    }
                },
                sneakerKeychain: {
                    catKey: "special",
                    key: "sneakerKeychain",
                    name: "Sneaker Keychain",
                    colors: {
                        red: "off",
                        yellow: "off",
                        blue: "off",
                        white: "off",
                        purple: "off",
                        grey: "off",
                        pink: "off"
                    }
                },
                pikmin4Spaceship: {
                    catKey: "special",
                    key: "pikmin4Spaceship",
                    name: "Pikmin 4 Spaceship",
                    colors: {
                        red: "off",
                        yellow: "off",
                        blue: "off",
                        white: "off",
                        purple: "off",
                        grey: "off",
                        pink: "off"
                    }
                },
                mahjongTileA: {
                    catKey: "special",
                    key: "mahjongTileA",
                    name: "Mahjong Tile A",
                    colors: {
                        red: "off",
                        yellow: "off",
                        blue: "off",
                        white: "off",
                        purple: "off",
                        grey: "off",
                        pink: "off"
                    }
                },
                mahjongTileB: {
                    catKey: "special",
                    key: "mahjongTileB",
                    name: "Mahjong Tile B",
                    colors: {
                        red: "off",
                        yellow: "off",
                        blue: "off",
                        white: "off",
                        purple: "off",
                        grey: "off",
                        pink: "off"
                    }
                },
                iceCream: {
                    catKey: "special",
                    key: "iceCream",
                    name: "Ice Cream",
                    colors: {
                        red: "off",
                        yellow: "off",
                        blue: "off",
                        white: "off",
                        purple: "off",
                        grey: "off",
                        pink: "off"
                    }
                },
                puzzle2021FallMemories: {
                    catKey: "special",
                    key: "puzzle2021FallMemories",
                    name: "Puzzle: 2021 Fall Memories",
                    colors: {
                        red: "off",
                        yellow: "off",
                        blue: "off",
                        white: "off",
                        purple: "off",
                        grey: "off",
                        pink: "off"
                    }
                },
                puzzle2022SummerMemories: {
                    catKey: "special",
                    key: "puzzle2022SummerMemories",
                    name: "Puzzle: 2022 Summer Memories",
                    colors: {
                        red: "off",
                        yellow: "off",
                        blue: "off",
                        white: "off",
                        purple: "off",
                        grey: "off",
                        pink: "off"
                    }
                },
                stickerWinter: {
                    catKey: "special",
                    key: "stickerWinter",
                    name: "Winter Sticker",
                    colors: {
                        red: "off",
                        yellow: "off",
                        blue: "off",
                        white: "off",
                        purple: "off",
                        grey: "off",
                        pink: "off"
                    }
                },
                stickerSpring: {
                    catKey: "special",
                    key: "stickerSpring",
                    name: "Spring Sticker",
                    colors: {
                        red: "off",
                        yellow: "off",
                        blue: "off",
                        white: "off",
                        purple: "off",
                        grey: "off",
                        pink: "off"
                    }
                }
            },
            decorationOrder: [
                "marioHat",
                "lunarNewYearOrnamentRed",
                "lunarNewYearOrnamentGold",
                "chessPieceWhite",
                "chessPieceBlack",
                "fingerboard",
                "flowerCard2023A",
                "flowerCard2023B",
                "flowerCard2023C",
                "flowerCard2023D",
                "flowerCard2023E",
                "flowerCard2023F",
                "flowerCard2024A",
                "flowerCard2024B",
                "jackOLantern",
                "halloweenTreat",
                "firstAnniversarySnack",
                "koppaiteSpaceSuit",
                "mitten",
                "glasses2023",
                "glasses2024",
                "valentineSticker",
                "reverseValentinesDaySticker",
                "presentStickerGold",
                "easterEgg",
                "rabbitEgg",
                "sneakerKeychain",
                "pikmin4Spaceship",
                "mahjongTileA",
                "mahjongTileB",
                "iceCream",
                "puzzle2021FallMemories",
                "puzzle2022SummerMemories",
                "stickerWinter",
                "stickerSpring"
            ]
        }
    },
    categoryOrder: [
        "restaurant",
        "cafe",
        "sweetshop",
        "movieTheatre",
        "pharmacy",
        "zoo",
        "forest",
        "waterside",
        "postOffice",
        "artGallery",
        "airport",
        "station",
        "beach",
        "burgerPlace",
        "cornerStore",
        "supermarket",
        "bakery",
        "hairSalon",
        "clothesStore",
        "park",
        "libraryBookstore",
        "roadside",
        "sushiRestaurant",
        "mountain",
        "stadium",
        "rainyDay",
        "snowyDay",
        "themePark",
        "busStop",
        "italianRestaurant",
        "ramenShop",
        "bridge",
        "hotel",
        "makeupStore",
        "shrineTemple",
        "applianceStore",
        "curryRestaurant",
        "special"
    ]
};

export default defaultSeeds;
'use strict';
gsap.registerPlugin(ScrollTrigger);

let restaurants = [
    { // Start of restaurant
        id: 1,
        name: 'Five Vines',
        logo: './images/logo-fiveVines.png',
        images: [
            './images/restImages/fiveVines1.png',
            './images/restImages/fiveVines2.png',
            './images/restImages/fiveVines3.png'
        ],
        meals: 'dinner',
        diningType: ['reservations', 'takeout'],
        diningGenre: ['Italian, Contemporary'],
        priceRange: 'expensive',
        number: '416-334-2512',
        rating: 4,
        location: '2354 Longlane St, Toronto, ON, M4B 124',
        miniBio: 'Enjoy a truly authentic Italian dining experience at Five Vines. With ingredients sourced from Italy, such as winemakers, meat and artisinal cheese producers and so much more.',
        hours: {
            mon: {
                open: '3pm',
                close: '10pm'
            },
            tues: {
                open: '3pm',
                close: '10pm'
            },
            wed: {
                open: '3pm',
                close: '10pm'
            },
            thur: {
                open: '3pm',
                close: '10pm'
            },
            fri: {
                open: '3pm',
                close: '12am'
            },
            sat: {
                open: '3pm',
                close: '12am'
            },
            sun: {
                open: '3pm',
                close: '12am'
            }
        }, 
        menu: {
            starters: [
                {
                    name: 'Tomato Crostini',
                    desc: 'Garlic rubbed toasted focaccia bread, with sliced vine ripe tomato, fresh basil, extra virgin olive oil, shaved Parmigiano cheese',
                    price: 15
                },
                {
                    name: 'Beet Salad',
                    desc: 'Baby mixed greens, preserved beets, toasted pine nuts, sliced avocado, gorgonzola cheese and a cherry port vinaigrette',
                    price: 16
                },
                {
                    name: 'Carpaccio',
                    desc: 'Seared rare beef tenderloin, thinly sliced, topped with shaved Parmigiano cheese, capers berries, extra virgin olive oil',
                    price: 17
                },
                {
                    name: 'Crab Cakes',
                    desc: 'Oven baked with a preserved lemon dill Aioli',
                    price: 18
                },
                {
                    name: 'Grilled Calamari',
                    desc: 'Poached garlic, black olives, capers, fresh grape tomatoes, and lemon olive oil',
                    price: 18
                }
            ],
            mains: [
                {
                    name: 'Lasagna',
                    desc: 'Layers of fresh pasta, slow braised ground meat sauce, provolone and mozzarella cheese and Five Vines Tomato Sauce',
                    price: 24
                },
                {
                    name: 'Pasta Bolognese',
                    desc: 'Pappardelle pasta in a classic Italian braised ground meat and tomato sauce',
                    price: 24
                },
                {
                    name: 'Salmon Fillet',
                    desc: 'Ginger, maple and lime marinated served with saffron scented basmati rice, Peruvian peppers and seasonal vegetables',
                    price: 25
                },
                {
                    name: 'Veal Sorrento',
                    desc: 'Provimi veal scaloppini, prosciutto, bocconcini cheese braised in a tomato sauce with Spaghettini pasta tossed in basil- parsley oil and garlic',
                    price: 28
                },
                {
                    name: 'Lamb Rack',
                    desc: 'Full rack, pan seared oven roasted with a mint Demi daily potato and seasonal vegetables',
                    price: 48
                }
            ],
            desserts: [
                {
                    name: 'Apple Pie',
                    desc: 'Served warm with vanilla gelato and toffee sauce',
                    price: 9
                },
                {
                    name: 'Cheesecake',
                    desc: 'Lemon cheeesecake with blueberry sauce',
                    price: 9
                },
                {
                    name: 'Flourless Chocolate Cake',
                    desc: 'With warm chocolate sauce',
                    price: 9
                },
                {
                    name: 'Tiramisu',
                    desc: 'Traditional Italian dessert',
                    price: 9
                },
                {
                    name: 'Tartufo',
                    desc: 'A creamy rich Italian ice cream dessert',
                    price: 9
                }
            ]
        } // End of Menu
    }, // End of Restaurant

    { // Start of restaurant
        id: 2,
        name: 'Hearth Bistro',
        logo: './images/logo-hearth.png',
        images: [
            './images/restImages/bistro1.png',
            './images/restImages/bistro2.png',
            './images/restImages/bistro3.png'
        ],
        meals: 'dinner',
        diningType: ['reservations', 'takeout'],
        diningGenre: 'Homestyle',
        priceRange: 'affordable',
        number: '416-784-9735',
        rating: 4,
        location: '1468 Brummer St, Toronto, ON, L8B 248',
        miniBio: 'Hearth and Stone Bistro is a symbol of warmth and welcome. Catch up with old friends or spend time with loved ones. You can visit our Bistro when you want to go out and feel right at home.',
        hours: {
            mon: {
                open: '11am',
                close: '10pm'
            },
            tues: {
                open: '11am',
                close: '10pm'
            },
            wed: {
                open: '11am',
                close: '10pm'
            },
            thur: {
                open: '11am',
                close: '10pm'
            },
            fri: {
                open: '12pm',
                close: '11pm'
            },
            sat: {
                open: '12pm',
                close: '11pm'
            },
            sun: {
                open: '12pm',
                close: '11pm'
            }
        }, 
        menu: {
            starters: [
                {
                    name: 'Four Cheese Spinach Dip',
                    desc: 'Made in-house creamy blend of four cheeses, spinach, red pepper and onion. Served with your choice of baked pita chips or fried pita chips',
                    price: 14.99
                },
                {
                    name: 'Buffalo Chicken Potato Skins',
                    desc: 'Hand-cut potato wedges topped with spiced chicken tossed in our creamy buffalo wing sauce and our three cheese blend',
                    price: 14.99
                },
                {
                    name: 'Quesadilla',
                    desc: 'Our three cheese blend, tomato, onions and jalapeño. Served with salsa and sour cream.',
                    price: 13.49
                },
                {
                    name: 'House Garlic Cheese Toast',
                    desc: 'A gooey six cheese blend freshly-baked on two Ace Bakery French Loaf slices with garlic, topped with a sprinkle of Sriracha lime seasoning',
                    price: 9.99
                },
                {
                    name: 'Truffle Fries and Dip',
                    desc: 'Our house russet fries topped with truffle oil, parmesan cheese, and parsley, with roasted garlic dip on the side',
                    price: 18
                }
            ],
            mains: [
                {
                    name: 'Classic Sirloin',
                    desc: 'Fresh 8oz. sirloin grilled to your liking and brushed with garlic butter. Served with your choice of side and freshly steamed veggies',
                    price: 25.99
                },
                {
                    name: 'Lemon Pepper Salmon',
                    desc: 'Atlantic salmon oven baked with a lemon pepper seasoning and paired with a basil pesto aioli. Served with your choice of side and freshly steamed veggies',
                    price: 23.99
                },
                {
                    name: 'Chicken Parm',
                    desc: 'A hand breaded chicken breast with Parmesan cheese, topped with tomato sauce and mozzarella cheese. Served over spaghetti with your choice of tomato sauce or Alfredo sauce',
                    price: 19.79
                },
                {
                    name: 'Caesar Salad',
                    desc: 'Chopped romaine lettuce tossed in creamy Caesar dressing and topped with double-smoked bacon, croutons and Parmesan cheese',
                    price: 13.49
                },
                {
                    name: 'Sonoma Chicken Salad',
                    desc: 'Grilled chicken breast on fresh California greens topped with red pepper, tomato, crumbled feta cheese, raisins, croutons, mixed seeds and nuts and finished with our honey citrus dressing',
                    price: 17.99
                }
            ],
            desserts: [
                {
                    name: 'White Chocolate Cheesecake',
                    desc: 'A dark chocolate cookie crumble crust filled with thick white chocolate cheesecake, with your choice of chocolate or caramel sauce',
                    price: 7.99
                },
                {
                    name: 'Funnel Cake Fries',
                    desc: 'Golden fried strips of funnel cake topped with cinnamon sugar. Served warm with French Vanilla ice cream and choice of chocolate sauce or caramel sauce',
                    price: 7.99
                },
                {
                    name: 'Messy Cookie Sandwich',
                    desc: 'French vanilla ice cream sandwiched between two giant freshly baked warm chocolate chip cookies. Topped with chocolate and caramel sauce',
                    price: 8.49
                },
                {
                    name: 'Chocolate Peanut Butter Tart',
                    desc: 'Tart topped with chocolate sauce, roasted peanuts and coconut whipped cream',
                    price: 9.98
                },
                {
                    name: 'Lemon Blueberry Tart',
                    desc: 'House-made lemon blueberry tart with lemon streusel, whipped cream and fresh blueberries',
                    price: 9
                }
            ]
        } // End of Menu
    }, // End of Restaurant

    { // Start of restaurant
        id: 3,
        name: 'Gelattes',
        logo: './images/logo-hearth.png',
        images: [
            './images/restImages/gelattes1.png',
            './images/restImages/gelattes2.png',
            './images/restImages/gelattes3.png'
        ],
        meals: 'breakfast',
        diningType: ['dinein', 'takeout'],
        diningGenre: 'Coffee, Breakfast',
        priceRange: 'budget',
        number: '289-652-1363',
        rating: 4,
        location: '701 Brown St, Ajax, ON, L8B 248',
        miniBio: "Where it's okay to have your coffee hot or cold! Welcome to Gelattes, we are all about the vibe — whether it be a first date, a study sesh, or a post-gym treat.",
        hours: {
            mon: {
                open: '6am',
                close: '2pm'
            },
            tues: {
                open: '6am',
                close: '2pm'
            },
            wed: {
                open: '6am',
                close: '2pm'
            },
            thur: {
                open: '6am',
                close: '2pm'
            },
            fri: {
                open: '6am',
                close: '2pm'
            },
            sat: {
                open: '6am',
                close: '2pm'
            },
            sun: {
            }
        }, 
        menu: {
            starters: [
                {
                    name: 'Espresso',
                    desc: '',
                    price: 1.49
                },
                {
                    name: 'Latte',
                    desc: '',
                    price: 3.99
                },
                {
                    name: 'Iced Coffee',
                    desc: '',
                    price: 3.99
                },
                {
                    name: 'Cold Brew',
                    desc: '',
                    price: 3.99
                },
                {
                    name: 'Mocha',
                    desc: '',
                    price: 3.99
                }
            ],
            mains: [
                {
                    name: 'Cake Pops',
                    desc: 'With different fun dips, add some colour to your day.',
                    price: 25.99
                },
                {
                    name: 'Lemon Cake',
                    desc: 'A cake that is made with lemons!',
                    price: 23.99
                },
                {
                    name: 'Brownie',
                    desc: 'Double chocolate and warmed to perfection',
                    price: 19.79
                },
                {
                    name: 'Sugar Cookie',
                    desc: 'Choose from assorted shapes like monster, hearts, or holiday favourites',
                    price: 0.99
                },
                {
                    name: 'Donut',
                    desc: 'Choose from assorted donuts',
                    price: 1.99
                }
            ],
            desserts: [
                {
                    name: 'Bagels',
                    desc: 'Assorted bagels can be topped with any spread',
                    price: 2.50
                },
                {
                    name: 'Salmon Sandwich',
                    desc: 'Smoky salmon sandwich great for the morning',
                    price: 5.99
                },
                {
                    name: 'Croissant',
                    desc: 'Flaky croissant can be topped with butter or any spread',
                    price: 3.99
                },
                {
                    name: 'English Muffin',
                    desc: 'Can be topped with any protein or vegetables',
                    price: 3.75
                },
                {
                    name: 'Soup',
                    desc: 'Check our soup of the day for a special deal! Tomato, Carrot + Orange',
                    price: 5.75
                }
            ]
        } // End of Menu
    }, // End of Restaurant

    { // Start of restaurant
        id: 4,
        name: "Tony's",
        logo: './images/logo-hearth.png',
        images: [
            './images/restImages/tonys1.png',
            './images/restImages/tonys2.png',
            './images/restImages/tonys3.png'
        ],
        meals: 'lunch',
        diningType: ['dine-in', 'takeout'],
        diningGenre: 'Burgers',
        priceRange: 'budget',
        number: '647-123-9803',
        rating: 4,
        location: '17 Adams St, Toronto, ON, A3N 8X5',
        miniBio: "With house ground meats, your burger can be made custom just the way you like it. Come down to Tony's today!",
        hours: {
            mon: {
                open: '10am',
                close: '4pm'
            },
            tues: {
                open: '10am',
                close: '4pm'
            },
            wed: {
                open: '10am',
                close: '4pm'
            },
            thur: {
                open: '10am',
                close: '4pm'
            },
            fri: {
                open: '10am',
                close: '4pm'
            },
            sat: {
                open: '10am',
                close: '4pm'
            },
            sun: {
            }
        }, 
        menu: {
            starters: [
                {
                    name: '1/4 Burger',
                    desc: 'Quarter pounder, for a whole bunch of fun',
                    price: 1.49
                },
                {
                    name: 'Angus Burger',
                    desc: 'Our biggest burger',
                    price: 3.99
                },
                {
                    name: 'Junior Burger',
                    desc: 'Great for a small snack or a light meal',
                    price: 3.99
                }
            ],
            mains: [
                {
                    name: 'Brownie',
                    desc: 'Double chocolate and warmed to perfection',
                    price: 19.79
                },
                {
                    name: 'Sugar Cookie',
                    desc: 'Choose from assorted shapes like monster, hearts, or holiday favourites',
                    price: 0.99
                },
                {
                    name: 'Donut',
                    desc: 'Choose from assorted donuts',
                    price: 1.99
                }
            ],
            desserts: [
                {
                    name: 'Bagels',
                    desc: 'Assorted bagels can be topped with any spread',
                    price: 2.50
                },
                {
                    name: 'Salmon Sandwich',
                    desc: 'Smoky salmon sandwich great for the morning',
                    price: 5.99
                },
                {
                    name: 'Croissant',
                    desc: 'Flaky croissant can be topped with butter or any spread',
                    price: 3.99
                }
            ]
        } // End of Menu
    }, // End of Restaurant 
    { // Start of restaurant
        id: 5,
        name: "Vista",
        logo: './images/logo-hearth.png',
        images: [
            './images/restImages/vista1.png',
            './images/restImages/vista2.png',
            './images/restImages/vista3.png'
        ],
        meals: 'lunch',
        diningType: ['dine-in', 'takeout', 'delivery'],
        diningGenre: 'Plant Based, Vegan',
        priceRange: 'affordable',
        number: '647-893-1204',
        rating: 4,
        location: '20 Rainer St, Toronto, ON, 3DM 97D',
        miniBio: "Come to Vista for healthy living, plant based and vegan food made fresh daily.",
        hours: {
            mon: {
                open: '10am',
                close: '4pm'
            },
            tues: {
                open: '10am',
                close: '3pm'
            },
            wed: {
            },
            thur: {
                open: '10am',
                close: '3pm'
            },
            fri: {
                open: '10am',
                close: '12pm'
            },
            sat: {
                open: '10am',
                close: '12pm'
            },
            sun: {
            }
        }, 
        menu: {
            starters: [
                {
                    name: 'Mac and Cheese',
                    desc: 'Quarter pounder, for a whole bunch of fun',
                    price: 9.99
                },
                {
                    name: 'Buffalo Tofu',
                    desc: 'Our biggest burger',
                    price: 7.99
                },
                {
                    name: 'Protein Bowl',
                    desc: 'Great for a small snack or a light meal',
                    price: 10.99
                }
            ],
            mains: [
                {
                    name: 'Ginger Shot',
                    desc: 'Ginger root, lemon juice and tumeric',
                    price: 1.99
                },
                {
                    name: 'Green Wellness Shot',
                    desc: 'Spinach, lettuce and celery',
                    price: 1.99
                },
                {
                    name: 'Spicy Shot',
                    desc: 'Peppers, peppers and more peppers',
                    price: 1.99
                }
            ],
            desserts: [
                {
                    name: 'Brownie Slice',
                    desc: 'Double chocolate and gluten-free',
                    price: 4.99
                },
                {
                    name: 'Chocolate Chip cookies',
                    desc: 'Soft and gooey',
                    price: 3.99
                }
            ]
        } // End of Menu
    }, // End of Restaurant

    { // Start of restaurant
        id: 6,
        name: "Solo Mio",
        logo: './images/logo-hearth.png',
        images: [
            './images/restImages/solo1.png',
            './images/restImages/solo2.png',
            './images/restImages/solo3.png'
        ],
        meals: 'lunch',
        diningType: ['dine-in', 'takeout', 'delivery'],
        diningGenre: 'Mexican, Tacos',
        priceRange: 'budget',
        number: '647-893-1204',
        rating: 4,
        location: '1701 Pixie St, Toronto, ON, 2P4 9S2',
        miniBio: "Solo Mio, you won't want to share with anyone else! Get Mexican cuisine at the blink of an eye.",
        hours: {
            mon: {
                open: '8am',
                close: '5pm'
            },
            tues: {
                open: '8am',
                close: '5pm'
            },
            wed: {
                open: '8am',
                close: '5pm'
            },
            thur: {
                open: '8am',
                close: '5pm'
            },
            fri: {
                open: '8am',
                close: '5pm'
            },
            sat: {
                open: '8am',
                close: '4pm'
            },
            sun: {
            }
        }, 
        menu: {
            starters: [
                {
                    name: 'Tacos',
                    desc: 'A crunchy corn taco shell filled with seasoned ground beef, crisp shredded lettuce and real cheddar cheese',
                    price: 9.99
                },
                {
                    name: 'Burritos',
                    desc: 'A warm, soft flour tortilla wrapped around seasoned rice, hearty beans and a blend of three cheeses - cheddar, Monterey Jack and part skim mozzarella',
                    price: 7.99
                },
                {
                    name: 'Quesadilla',
                    desc: 'A blend of three melted cheeses – Monterey Jack, cheddar and part skim mozzarella – and a creamy jalapeño sauce all folded in a freshly toasted tortilla',
                    price: 10.99
                },
                {
                    name: 'Chips and Cheese',
                    desc: 'This dynamic food duo is freshly prepared. Crispy tortilla chips with a warm and zesty nacho cheese sauce sidekick.',
                    price: 10.99
                }
            ],
            mains: [
                {
                    name: 'Chilli Cheese Fries',
                    desc: 'Freshly prepared french fries covered with hearty beef chili, warm and zesty nacho cheese sauce',
                    price: 3.99
                },
                {
                    name: 'Nachos',
                    desc: 'Our crisp, freshly prepared tortilla chips covered with seasoned ground beef, warm zesty nacho cheese sauce',
                    price: 3.99
                },
                {
                    name: 'Fries',
                    desc: 'Fresh, golden brown and served hot',
                    price: 3.99
                }
            ],
            desserts: [
                {
                    name: 'Cinnabon Delights',
                    desc: 'Treat yourself to four donut-holes filled with a sweet cream cheese frosting and dusted with cinnamon and sugar',
                    price: 2.99
                },
                {
                    name: 'Cinnamon Twists',
                    desc: 'Our crispy, puffed corn twists are sprinkled with cinnamon and sugar and are seriously addictive',
                    price: 2.99
                }
            ]
        } // End of Menu
    } // End of Restaurant
];

const splashPage = document.getElementById('splashPage');
const restHomePage = document.getElementById('restHome');
const restaurantList = document.getElementById('restList');
const restHomeContainer = document.getElementById('restaurantHomeContainer');
const restMenu = document.getElementById('restaurantMenu');
const homeButton = document.getElementById('homeButton');
const menuButton = document.getElementById('menuButton');
const aboutButton = document.getElementById('aboutButton');
const restHomeButton = document.getElementById('restHomeButton');
const restHeadTitles = document.getElementById('restHeadTitle');
const restHeadGenres = document.getElementById('restHeaderGenre');

const filterButton = document.getElementById('filterButton');
const filterBar = document.getElementById('filterBar');

// Menu Lists
const appetizers = document.getElementById('appetizerList');
const mains = document.getElementById('mainList');
const desserts = document.getElementById('dessertList');

// Filter Buttons

const radioButtons = document.querySelectorAll('input[name="filter"]');
// const diningTypeRadios = document.querySelectorAll('input[name="diningType"]');
// const priceRangeRadios = document.querySelectorAll('input[name="priceRange"]');
// const mealRadios = document.querySelectorAll('input[name="meals"]');
const clearFilters = document.getElementById('clearFilterButton');

// const [...diningTypeButtons] = diningTypeRadios;
// const [...priceRangeButtons] = priceRangeRadios;
// const [...mealButtons] = mealRadios;
const [...allRadioButtons] = [...radioButtons];

// Capitilize first letter
function capitalizeWord(el) {
        return el.charAt(0).toUpperCase() + el.substring(1).toLowerCase();
};

// Return hours list
function currentHours(time) {
    if (time.hasOwnProperty('open')) {
        const {open, close} = time;
        console.log(`${open} - ${close}`);
        return `${open} - ${close}`;
    } else {
        return `CLOSED`;
    }
};

// Display Restaurants on Splash Page
function displayRestaurantThumbnails() {
    let displayRestaurants = restaurants.map(function(rest) {
        return `
        <li class="restThumbnails ${rest.name} ${rest.diningType.join(' ')} ${rest.meals} ${rest.priceRange}" id="${rest.id}">
        <img src="${rest.images[0]}" alt="" class="restMainImage">
        <div class="restThumbInfo">
            <h3 class="restThumbName">${rest.name},<span class="diningGenre"> ${rest.diningGenre}</span></h3>
            <div class="restLocationBox">
            <svg class="locationIcon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    width="50" height="50"
                    viewBox="0 0 226 226"
                    style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,226v-226h226v226z" fill="none"></path><g fill="#982f2f"><path d="M113,18.83333c-36.40483,0 -65.91667,29.51183 -65.91667,65.91667c0,37.3465 41.471,92.47167 58.62817,113.66858c3.76667,4.65183 10.81033,4.65183 14.577,0c17.15717,-21.19692 58.62817,-76.32208 58.62817,-113.66858c0,-36.40483 -29.51183,-65.91667 -65.91667,-65.91667zM113,108.29167c-13.00442,0 -23.54167,-10.53725 -23.54167,-23.54167c0,-13.00442 10.53725,-23.54167 23.54167,-23.54167c13.00442,0 23.54167,10.53725 23.54167,23.54167c0,13.00442 -10.53725,23.54167 -23.54167,23.54167z"></path></g></g></svg>
                <p class="restLocationString">${rest.location}</p>
            </div>
            
            
        </div>
    </li>`
    });
    let restThumbnailHTML = displayRestaurants.join('');
    restaurantList.innerHTML = restThumbnailHTML;
}

// Display Restaurant Header
function displayRestaurantHeader(rest) {
    restHeadTitles.innerHTML = `${rest.name}<span class="restHeaderGenre ${rest.id}" id="restHeadGenre"> ${rest.diningGenre}</span>`;
}

// Display Restaurant Home Page
function displayRestaurantHome(restID) {
    let currRest = restaurants[`${restID - 1}`];
    let {hours: restHours} = currRest;
    console.log(restHours);
    displayRestaurantHeader(currRest);
    return `
    <div class="restImageGallery">
        <div class="restImage">
            <img src="${currRest.images[0]}" alt="" class="">
        </div>
        <div class="restImage">
            <img src="${currRest.images[1]}" alt="" class="">
        </div>
        <div class="restImage">
            <img src="${currRest.images[2]}" alt="" class="">
        </div>
    </div>
    <div class="bioBox">
        <div class="diningTypeBox">
            <p class="diningTag">${capitalizeWord(currRest.diningType[0])}</p>
            <p class="diningTag">${capitalizeWord(currRest.diningType[1])}</p>
        </div>
        <div class="genreBox">
            <div class="mealTypeBox">
                <svg class="mealIcon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    width="50" height="50"
                    viewBox="0 0 226 226"
                    style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,226v-226h226v226z" fill="none"></path><g fill="#982f2f"><path d="M113,18.83333c-57.58292,0 -103.28141,51.96955 -92.62174,111.47347c6.69525,37.38417 36.42573,67.5918 73.67806,74.98388c13.79541,2.74025 27.18533,2.39257 39.653,-0.42302c4.36933,-0.99817 7.54069,-4.79617 7.54069,-9.28792v-13.64681c0,-4.40699 -4.25147,-7.44328 -8.44189,-6.10612c-6.82708,2.18467 -14.13104,3.27906 -21.72087,3.05306c-34.95467,-1.02642 -63.97566,-30.84223 -64.00391,-65.80632c-0.03767,-36.37658 29.5495,-65.99023 65.91667,-65.99023c4.70833,0 6.71114,-3.24007 7.57748,-5.4624c1.96807,-5.07558 4.78734,-11.41535 8.47867,-16.77344c1.27125,-1.84567 0.18039,-4.43304 -2.02311,-4.80029c-4.58592,-0.74392 -9.24937,-1.21387 -14.03304,-1.21387zM169.5,18.83333c-7.06721,0 -12.99095,3.50665 -17.47233,7.743c-4.48138,4.23635 -7.95082,9.43605 -10.85123,15.00781c-5.80085,11.14353 -9.3431,23.40341 -9.3431,33.74919c0,17.42399 12.09287,32.0694 28.25,36.30567v86.111c-0.04803,3.39599 1.7362,6.55477 4.66947,8.26678c2.93327,1.71201 6.56113,1.71201 9.49439,0c2.93327,-1.71201 4.7175,-4.87079 4.66947,-8.26678v-86.111c16.15713,-4.23627 28.25,-18.88168 28.25,-36.30567c0,-10.34578 -3.54226,-22.60565 -9.3431,-33.74919c-2.90041,-5.57177 -6.36985,-10.77146 -10.85123,-15.00781c-4.48138,-4.23635 -10.40512,-7.743 -17.47233,-7.743zM107.79509,66.43164c-0.81219,-0.07798 -1.56758,-0.03899 -2.17025,0.05518c-25.49092,4.03033 -44.26054,28.59695 -38.75179,56.16895c3.56892,17.854 17.91109,32.29504 35.68034,36.26888c11.82733,2.64608 22.94635,0.62297 32.25944,-4.37728c3.99267,-2.13758 6.43718,-6.34962 6.43718,-10.86963v-12.37777c0,-4.03033 -1.69824,-8.01843 -4.96582,-10.39143c-14.30392,-10.396 -23.28418,-27.1562 -23.28418,-45.5752c0,-0.8475 0.07356,-1.72605 0.07356,-2.63005c0,-4.67537 -2.84191,-6.0377 -5.27847,-6.27165z"></path></g></g>
                </svg>
                <p class="mealText">${capitalizeWord(currRest.meals)}, ${capitalizeWord(currRest.priceRange)}</p>
            </div>
            <div class="mealTypeBox">
                <svg class="mealIcon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    width="50" height="50"
                    viewBox="0 0 226 226"
                    style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,226v-226h226v226z" fill="none"></path><g fill="#982f2f"><path d="M113,18.83333c-36.40483,0 -65.91667,29.51183 -65.91667,65.91667c0,37.3465 41.471,92.47167 58.62817,113.66858c3.76667,4.65183 10.81033,4.65183 14.577,0c17.15717,-21.19692 58.62817,-76.32208 58.62817,-113.66858c0,-36.40483 -29.51183,-65.91667 -65.91667,-65.91667zM113,108.29167c-13.00442,0 -23.54167,-10.53725 -23.54167,-23.54167c0,-13.00442 10.53725,-23.54167 23.54167,-23.54167c13.00442,0 23.54167,10.53725 23.54167,23.54167c0,13.00442 -10.53725,23.54167 -23.54167,23.54167z"></path></g></g>
                </svg>
                <p class="mealText">${currRest.location}</p>
            </div>
            <div class="mealTypeBox">
                <svg class="mealIcon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    width="50" height="50"
                    viewBox="0 0 226 226"
                    style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,226v-226h226v226z" fill="none"></path><g fill="#982f2f"><path d="M180.98833,143.60417l-23.73,-2.73083c-5.74417,-0.65917 -11.39417,1.31833 -15.44333,5.3675l-17.42083,17.42083c-13.36225,-6.78 -25.4815,-15.62225 -35.95283,-26.103c-10.48075,-10.47133 -19.323,-22.59058 -26.103,-35.95283l17.42083,-17.42083c4.04917,-4.04917 6.02667,-9.69917 5.3675,-15.44333l-2.73083,-23.73c-1.13,-9.51083 -9.13417,-16.6675 -18.73917,-16.6675h-16.29083c-10.64083,0 -19.4925,8.85167 -18.83333,19.4925c2.49542,40.19975 19.81267,76.35033 46.54658,103.08425c26.73392,26.73392 62.8845,44.05117 103.08425,46.54658c10.64083,0.65917 19.4925,-8.1925 19.4925,-18.83333v-16.29083c0,-9.605 -7.15667,-17.60917 -16.6675,-18.73917z"></path></g></g>
                </svg>
                <p class="mealText">${currRest.number}</p>
            </div>
        </div>
        <div class="miniBioBox">
            <p class="mealText">${currRest.miniBio}</p>
        </div>
        <div class="hoursBox">
            <div class="hoursMiniBox">
                <p class="dayBox">MON</p><p class="hourBox">${currentHours(currRest.hours.mon)}</p>
            </div>
            <div class="hoursMiniBox">
                <p class="dayBox">TUE</p><p class="hourBox">${currentHours(currRest.hours.tues)}</p>
            </div>
            <div class="hoursMiniBox">
                <p class="dayBox">WED</p><p class="hourBox">${currentHours(currRest.hours.wed)}</p>
            </div>
            <div class="hoursMiniBox">
                <p class="dayBox">THUR</p><p class="hourBox">${currentHours(currRest.hours.thur)}</p>
            </div>
            <div class="hoursMiniBox">
                <p class="dayBox">FRI</p><p class="hourBox">${currentHours(currRest.hours.fri)}</p>
            </div>
            <div class="hoursMiniBox">
                <p class="dayBox">SAT</p><p class="hourBox">${currentHours(currRest.hours.sat)}</p>
            </div>
            <div class="hoursMiniBox">
                <p class="dayBox">SUN</p><p class="hourBox">${currentHours(currRest.hours.sun)}</p>
            </div>
        </div>
    </div>
    `
}

// Display Restaurant Menu
function displayRestaurantAppetizers(restID) {
    let currRest = restaurants[`${restID - 1}`];
    let appetizerArray = currRest.menu.starters;
    let displayAppetizers = appetizerArray.map(function(app) {
        return `
        <li class="mealItem">
            <div class="namePrice">
                <h2 class="mealName">${app.name}</h2>
                <h2 class="mealPrice">$${app.price}</h2>
            </div>
            <p class="mealDesc">${app.desc}</p>
        </li>
        `
    });
    let appetizerText = displayAppetizers.join('');
    return appetizerText;
}
function displayRestaurantMains(restID) {
    let currRest = restaurants[`${restID - 1}`];
    let mainsArray = currRest.menu.mains;
    let displayMains = mainsArray.map(function(main) {
        return `
        <li class="mealItem">
            <div class="namePrice">
                <h2 class="mealName">${main.name}</h2>
                <h2 class="mealPrice">$${main.price}</h2>
            </div>
            <p class="mealDesc">${main.desc}</p>
        </li>
        `
    });
    let mainText = displayMains.join('');
    return mainText;
}
function displayRestaurantDesserts(restID) {
    let currRest = restaurants[`${restID - 1}`];
    let dessertsArray = currRest.menu.desserts;
    let displaydesserts = dessertsArray.map(function(dess) {
        return `
        <li class="mealItem">
            <div class="namePrice">
                <h2 class="mealName">${dess.name}</h2>
                <h2 class="mealPrice">$${dess.price}</h2>
            </div>
            <p class="mealDesc">${dess.desc}</p>
        </li>
        `
    });
    let dessertText = displaydesserts.join('');
    return dessertText;
}

// Button Event Listeners
homeButton.addEventListener('click', function() {
    restHomePage.classList.remove('activePage');
    splashPage.classList.add('activePage');
    splashPage.style.display = 'grid';
    restHomePage.style.display = 'none';
});
aboutButton.addEventListener('click', function() {
    aboutButton.classList.add('activeTab');
    menuButton.classList.remove('activeTab');
    restHomeContainer.style.display = 'none';
    restMenu.style.display = 'block';
});
menuButton.addEventListener('click', function() {
    menuButton.classList.add('activeTab');
    aboutButton.classList.remove('activeTab');
    // restHomeContainer.style.display = 'flex';
    window.innerWidth <= 480 ? restHomeContainer.style.display = 'flex' : restHomeContainer.style.display = 'grid';
    restMenu.style.display = 'none';
});
filterButton.addEventListener('click', function() {
    filterBar.classList.toggle('activeFilterBar');
});


    // // Search Bar
    // function searchRestaurants() {
    //     let input = document.getElementById('searchBar').value;
    //     restaurantThumbnails.forEach(thumb => {
    //         if (!thumb.classList.contains(input)) {
    //             thumb.style.display= 'none';
    //         }
    //         else {
    //             thumb.style.display= 'block';                 
    //         }
            
    //     });
    // }




window.addEventListener('DOMContentLoaded', function() {
    displayRestaurantThumbnails(restaurants);
    const restaurantThumbnails = [...document.getElementsByClassName('restThumbnails')];

    function searchRestaurants() {
        let input = document.getElementById('searchBar').value;
        console.log(input);
        restaurantThumbnails.forEach(thumb => {
            console.log(thumb.classList);
            if (!thumb.classList.contains(input)) {
                thumb.style.display= 'none';
            }
            else {
                thumb.style.display= 'block';                 
            }
            
        });
    }




    // Clicking restThumbnail, changing to restHomePage
    restaurantThumbnails.forEach(rest => {
        rest.addEventListener('click', function() {
            // hide splash page
            splashPage.classList.remove('activePage');
            splashPage.style.display = 'none';
            // should rest page
            restHomePage.classList.add('activePage');
            restHomePage.style.display = 'flex';
            // fill restaurant info
            let restaurantHomeHTML = displayRestaurantHome(`${rest.id}`);
            restHomeContainer.innerHTML = restaurantHomeHTML;
            // fill menu info
            appetizers.innerHTML = displayRestaurantAppetizers(`${rest.id}`);
            mains.innerHTML = displayRestaurantMains(`${rest.id}`);
            desserts.innerHTML = displayRestaurantDesserts(`${rest.id}`);
        })
    });


    // Filter Buttons
    allRadioButtons.forEach(button => {
        button.addEventListener('click', function() {
            restaurantThumbnails.forEach(thumbnail => {
                if (!thumbnail.classList.contains(`${button.id}`)) {
                    thumbnail.style.display = 'none';
                } else {
                    thumbnail.style.display = 'block';
                }
            });
        });
    });


    // Clear Filters
    clearFilters.addEventListener('click', function() {
        allRadioButtons.forEach(button => {
            button.checked = false;
        });
        restaurantThumbnails.forEach(thumbnail => {
            thumbnail.style.display = 'block';
        });
    })



})

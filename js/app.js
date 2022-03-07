'use strict';
gsap.registerPlugin(ScrollTrigger);

let restaurants = [
    { // Start of restaurant
        id: 1,
        name: 'Five Vines',
        logo: './images/logo-fiveVines.png',
        images: [
            './images/restImages/fiveVines1-pizzaTop.png',
            './images/restImages/fiveVines2-sidePlate.png',
            './images/restImages/fiveVines3-topDown.png'
        ],
        meals: 'Dinner',
        diningType: ['RESERVATIONS', 'TAKEOUT'],
        diningGenre: 'Italian, Contemporary',
        priceRange: '$$',
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
            './images/restImages/bistro1-topDown.png',
            './images/restImages/bistro2-cheesecake.png',
            './images/restImages/bistro3-bread.png'
        ],
        meals: 'Lunch, Dinner',
        diningType: ['RESERVATIONS', 'TAKEOUT'],
        diningGenre: 'Homestyle',
        priceRange: '$$',
        rating: 4,
        location: '1468 Brummer St, Toronto, ON, L8B 248',
        miniBio: 'A symbol of warmth and welcome, Hearth and Stone Bistro is where you come to eat when you want eat out yet feel at home. ',
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

    } // End of Restaurant
];

const splashPage = document.getElementById('splashPage');
const restHomePage = document.getElementById('restHome');
const restMenuPage = document.getElementById('restMenu');
const restaurantList = document.getElementById('restList');
const restHomeContainer = document.getElementById('restaurantHomeContainer');
const homeButton = document.getElementById('homeButton');
const viewMenuButton = document.getElementById('viewMenuButton');
const restHomeButton = document.getElementById('restHomeButton');


// Display Restaurants on Splash Page
function displayRestaurantThumbnails() {
    let displayRestaurants = restaurants.map(function(rest) {
        return `
        <li class="restThumbnails">
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

// Display Restaurant Home Page
function displayRestaurantHome(restID) {
    let currentRestaurant = restaurants[`${restID - 1}`];
    return `
    <h3 class="">${currentRestaurant.name}</h3>
    <img src="${currentRestaurant.logo}" alt="">
    <p class="">${currentRestaurant.genre}</p>
    <p class="">${currentRestaurant.diningType}</p>
    <p class="">${currentRestaurant.rating}</p>
    <p class="">${currentRestaurant.location}</p>
    <p class="">${currentRestaurant.miniBio}</p>
    <p class="">${currentRestaurant.hours}</p>
    `
}

// Button Event Listeners
homeButton.addEventListener('click', function() {
    restHomePage.classList.remove('activePage');
    splashPage.classList.add('activePage');
    splashPage.style.display = 'grid';
    restHomePage.style.display = 'none';
});
viewMenuButton.addEventListener('click', function() {
    restHomePage.classList.remove('activePage');
    restMenuPage.classList.add('activePage');
    restHomePage.style.display = 'none';
});
restHomeButton.addEventListener('click', function() {
    restMenuPage.classList.remove('activePage');
    restHomePage.classList.add('activePage');
    restHomePage.style.display = 'flex';
});





window.addEventListener('DOMContentLoaded', function() {
    displayRestaurantThumbnails(restaurants);
    const restaurantThumbnails = [...document.getElementsByClassName('restThumbnails')];

    console.log(restaurantThumbnails);

    // Clicking restThumbnail, changing to restHomePage
    restaurantThumbnails.forEach(rest => {
        rest.addEventListener('click', function() {
            splashPage.classList.remove('activePage');
            splashPage.style.display = 'none';
            restHomePage.classList.add('activePage');
            restHomePage.style.display = 'flex';
            let restaurantHomeHTML = displayRestaurantHome(`${rest.id}`);
            // restHomeContainer.innerHTML = restaurantHomeHTML;
        })
    });



})
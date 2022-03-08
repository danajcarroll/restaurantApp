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
        diningGenre: ['Italian, Contemporary'],
        priceRange: '$$',
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
            './images/restImages/bistro1-topDown.png',
            './images/restImages/bistro2-cheesecake.png',
            './images/restImages/bistro3-bread.png'
        ],
        meals: 'Lunch, Dinner',
        diningType: ['RESERVATIONS', 'TAKEOUT'],
        diningGenre: 'Homestyle',
        priceRange: '$$',
        number: '416-784-9735',
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
// There's going to be 2 of these, 1 on menu and 1 on restHome, should probably be class and run a loop?
const restHeadTitles = document.getElementsByClassName('restTitle');
const restHeadGenres = document.getElementsByClassName('restHeaderGenre');

const restTitles = [...restHeadTitles];
const restGenres = [...restHeadGenres];


// Display Restaurants on Splash Page
function displayRestaurantThumbnails() {
    let displayRestaurants = restaurants.map(function(rest) {
        return `
        <li class="restThumbnails" id="${rest.id}">
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
    let currRest = restaurants[`${restID - 1}`];
    restTitles.forEach(element => {
        element.innerHTML = `${currRest.name}<span class="restHeaderGenre" id="restHeadGenre"> ${currRest.diningGenre}</span>`;
    });
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
            <p class="diningTag">${currRest.diningType[0]}</p>
            <p class="diningTag">${currRest.diningType[1]}</p>
        </div>
        <div class="genreBox">
            <div class="mealTypeBox">
                <svg class="mealIcon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    width="50" height="50"
                    viewBox="0 0 226 226"
                    style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,226v-226h226v226z" fill="none"></path><g fill="#982f2f"><path d="M113,18.83333c-57.58292,0 -103.28141,51.96955 -92.62174,111.47347c6.69525,37.38417 36.42573,67.5918 73.67806,74.98388c13.79541,2.74025 27.18533,2.39257 39.653,-0.42302c4.36933,-0.99817 7.54069,-4.79617 7.54069,-9.28792v-13.64681c0,-4.40699 -4.25147,-7.44328 -8.44189,-6.10612c-6.82708,2.18467 -14.13104,3.27906 -21.72087,3.05306c-34.95467,-1.02642 -63.97566,-30.84223 -64.00391,-65.80632c-0.03767,-36.37658 29.5495,-65.99023 65.91667,-65.99023c4.70833,0 6.71114,-3.24007 7.57748,-5.4624c1.96807,-5.07558 4.78734,-11.41535 8.47867,-16.77344c1.27125,-1.84567 0.18039,-4.43304 -2.02311,-4.80029c-4.58592,-0.74392 -9.24937,-1.21387 -14.03304,-1.21387zM169.5,18.83333c-7.06721,0 -12.99095,3.50665 -17.47233,7.743c-4.48138,4.23635 -7.95082,9.43605 -10.85123,15.00781c-5.80085,11.14353 -9.3431,23.40341 -9.3431,33.74919c0,17.42399 12.09287,32.0694 28.25,36.30567v86.111c-0.04803,3.39599 1.7362,6.55477 4.66947,8.26678c2.93327,1.71201 6.56113,1.71201 9.49439,0c2.93327,-1.71201 4.7175,-4.87079 4.66947,-8.26678v-86.111c16.15713,-4.23627 28.25,-18.88168 28.25,-36.30567c0,-10.34578 -3.54226,-22.60565 -9.3431,-33.74919c-2.90041,-5.57177 -6.36985,-10.77146 -10.85123,-15.00781c-4.48138,-4.23635 -10.40512,-7.743 -17.47233,-7.743zM107.79509,66.43164c-0.81219,-0.07798 -1.56758,-0.03899 -2.17025,0.05518c-25.49092,4.03033 -44.26054,28.59695 -38.75179,56.16895c3.56892,17.854 17.91109,32.29504 35.68034,36.26888c11.82733,2.64608 22.94635,0.62297 32.25944,-4.37728c3.99267,-2.13758 6.43718,-6.34962 6.43718,-10.86963v-12.37777c0,-4.03033 -1.69824,-8.01843 -4.96582,-10.39143c-14.30392,-10.396 -23.28418,-27.1562 -23.28418,-45.5752c0,-0.8475 0.07356,-1.72605 0.07356,-2.63005c0,-4.67537 -2.84191,-6.0377 -5.27847,-6.27165z"></path></g></g>
                </svg>
                <p class="mealText">${currRest.meals}, ${currRest.priceRange}</p>
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
                <p class="dayBox">MON</p><p class="hourBox">3pm - 10pm</p>
            </div>
            <div class="hoursMiniBox">
                <p class="dayBox">TUE</p><p class="hourBox">3pm - 10pm</p>
            </div>
            <div class="hoursMiniBox">
                <p class="dayBox">WED</p><p class="hourBox">3pm - 10pm</p>
            </div>
            <div class="hoursMiniBox">
                <p class="dayBox">THUR</p><p class="hourBox">3pm - 10pm</p>
            </div>
            <div class="hoursMiniBox">
                <p class="dayBox">FRI</p><p class="hourBox">3pm - 10pm</p>
            </div>
            <div class="hoursMiniBox">
                <p class="dayBox">SAT</p><p class="hourBox">3pm - 10pm</p>
            </div>
            <div class="hoursMiniBox">
                <p class="dayBox">SUN</p><p class="hourBox">3pm - 10pm</p>
            </div>
        </div>
    </div>
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
            restHomeContainer.innerHTML = restaurantHomeHTML;
        })
    });



})
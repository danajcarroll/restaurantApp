'use strict';
gsap.registerPlugin(ScrollTrigger);

let restaurants = [
    { // Start of restaurant
        id: 1,
        name: 'Five Vines',
        logo: './images/restaurantLogos/fiveVines.png',
        images: [
            '',
            '',
            ''
        ],
        genre: 'Casual Dining',
        diningType: ['Reservations', 'Pick Up'],
        rating: 4,
        location: '2354 Longlane St, Toronto, ON, M4B 124',
        miniBio: 'Enjoy a truly authentic Italian dining experience at Five Vines. With ingredients sourced from Italy, such as winemakers, meat and artisinal cheese producers and so much more. ',
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
                    desc: 'Layers of fresh pasta, slow braised ground meat sauce, provolone and mozzarella cheese and Bella Notte Tomato Sauce',
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

    } // End of Restaurant
];

const splashPage = document.getElementById('splashPage');
const restHomePage = document.getElementById('restHome');
const restMenuPage = document.getElementById('restMenu');
const restaurantList = document.getElementById('restList');


// Show Restaurants on Splash Page
function displayRestaurantThumbnails() {
    let displayRestaurants = restaurants.map(function(rest) {
        return `<li class="restThumbnails" id="${rest.id}">
        <div class="restThumbImage">${rest.logo}</div>
        <div class="restThumbInfoContainer">
            <h3 class="restThumbName">${rest.name}</h3>
            <p class="restThumbGenre">${rest.diningType}</p>
            <p class="restThumbRating">${rest.rating}</p>
        </div>
    </li>`
    });
    let restThumbnailHTML = displayRestaurants.join('');
    restaurantList.innerHTML = restThumbnailHTML;
}





window.addEventListener('DOMContentLoaded', function() {
    displayRestaurantThumbnails(restaurants);
    const restaurantThumbnails = [...document.getElementsByClassName('restThumbnails')];

    console.log(restaurantThumbnails);

    // Clicking restThumbnail, changing to restHomePage
    restaurantThumbnails.forEach(rest => {
        rest.addEventListener('click', function() {
            splashPage.classList.remove('activePage');
            restHomePage.classList.add('activePage');
            displayRestHome();
        })
    });



})
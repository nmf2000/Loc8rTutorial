module.exports.homeList = function (req, res) {
    res.render('locations-list', {
        title: 'Loc8r - find a place to work with wifi',
        pageHeader: {
            title: 'Loc8r',
            strapline: 'Find places to work with wifi near you!'
        },
        sidebar: 'Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffee cake or a pint?',
        locations: [{
            name: 'Starcups',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 3,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            distance: '100m'
        },{
            name: 'Cafe Hero',
            address: '124 High Street, Reading, RG6 1PS',
            rating: 4,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            distance: '200m'
        },{
            name: 'Burger Queen',
            address: '123 High Street, Reading, RG6 1PS',
            rating: 2,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            distance: '250m'
        }]
    });
};

module.exports.locationInfo = function (req, res) {
    res.render('location-info', {
        title: 'Location info',
        pageHeader: {title: 'Starcups'},
        sidebar: {
            context: 'is on loc8r because it has accessible wifi if you have been and you like it - or if you don\'t - please leave a review to help other people just like you.',
        },
        location: {
            name: 'starcups',
            address: '125 High Street',
            rating: 3,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            coords: {lat: 51.455041, lng: -0.9690884},
            openingTimes: [{
                days: 'Monday - Friday',
                opening: '7am',
                closing: '5pm',
                closed: false
            },{
                days: 'Saturday',
                opening: '8am',
                closing: '5pm',
                closed: 'false'
            },{
                days: 'Sunday',
                closed: true
            }],
            reviews:[{
                author: 'Nick',
                rating: 5,
                timestamp: '16 July 2017',
                reviewText: 'What a great place! Would go again'
            }]
        }
    });
};

module.exports.addReview = function (req, res) {
    res.render('location-review-form', {title: 'Add review'});
};
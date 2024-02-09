let zomato = {
  page_info: {
    name: 'search',
    pageTitle: 'Restaurants in Agra - Zomato',
    pageDescription:
      'Check out the list of all Restaurants in Agra. Check their menu, reviews & rating, photos, price, location, cuisine, offers, and more.',
    pageUrl: '/agra/restaurants?place_name=Agra',
    title: 'Restaurants in Agra - Zomato',
    isNoIndex: false,
    ogTitle: 'Restaurants in Agra - Zomato',
    ogDescription:
      'Check out the list of all Restaurants in Agra. Check their menu, reviews & rating, photos, price, location, cuisine, offers, and more.',
    ogPageUrl: '/agra/restaurants?place_name=Agra',
    subType: 'delivery',
    isMobile: 0,
    isTablet: 0,
    isOAuthV2Enabled: false,
    useAuthSdkForLogin: true,
    useAuthSdkForLogout: false,
    gaPageType: 'Search',
  },
  page_data: {
    sections: {
      SECTION_BASIC_INFO: {
        pageHeading: 'Agra Restaurants',
        isCategoryContextSwitchSupported: true,
        ratingColor: '#E23744',
      },
      SECTION_SEARCH_TABS: [
        {
          type: 'TAB_TYPE_ORDER',
          url: '/agra/delivery',
          key: 'delivery',
          isSelected: true,
          title: 'Delivery',
          filters: [
            {
              filterType: 'category_sheet',
              filterValue: 'delivery_home',
              postKey: '{"category_context":"delivery_home"}',
            },
          ],
          image:
            'https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png',
          bgcolor: {
            tint: '200',
            type: 'yellow',
          },
          subTabs: [],
        },
        {
          type: 'TAB_TYPE_GOOUT',
          url: '/agra/dine-out',
          key: 'dineout',
          isSelected: false,
          title: 'Dining Out',
          filters: [
            {
              filterType: 'category_sheet',
              filterValue: 'go_out_home',
              postKey: '{"category_context":"go_out_home"}',
            },
            {
              filterType: 'context',
              filterValue: 'dineout_home',
              postKey: '{"context":"dineout_home"}',
            },
          ],
          image:
            'https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png',
          bgcolor: {
            tint: '100',
            type: 'teal',
          },
          subTabs: [],
        },
        {
          type: 'TAB_TYPE_NIGHTLIFE',
          url: '/agra/restaurants?category=3',
          key: 'nightlife',
          isSelected: false,
          title: 'Nightlife',
          filters: [
            {
              filterType: 'category_sheet',
              filterValue: 'go_out_home',
              postKey: '{"category_context":"go_out_home"}',
            },
            {
              filterType: 'context',
              filterValue: 'nightlife_home',
              postKey: '{"context":"nightlife_home"}',
            },
          ],
          image:
            'https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png',
          bgcolor: {
            tint: '100',
            type: 'blue',
          },
        },
      ],
      SECTION_SPECIAL_INFO: [],
      SECTION_CITY_MAGIC_LINKS: {
        heading: 'Explore options near me',
        nearMeData: {
          cuisinesNearMe: [
            {
              name: 'Bakery food near me',
              url: 'https://www.zomato.com/bakery-restaurants-near-me',
            },
            {
              name: 'Beverages food near me',
              url: 'https://www.zomato.com/beverages-restaurants-near-me',
            },
            {
              name: 'Biryani food near me',
              url: 'https://www.zomato.com/biryani-restaurants-near-me',
            },
            {
              name: 'Burger food near me',
              url: 'https://www.zomato.com/burger-restaurants-near-me',
            },
            {
              name: 'Chinese food near me',
              url: 'https://www.zomato.com/chinese-restaurants-near-me',
            },
            {
              name: 'Continental food near me',
              url: 'https://www.zomato.com/continental-restaurants-near-me',
            },
            {
              name: 'Desserts food near me',
              url: 'https://www.zomato.com/desserts-restaurants-near-me',
            },
            {
              name: 'Ice Cream food near me',
              url: 'https://www.zomato.com/ice-cream-restaurants-near-me',
            },
            {
              name: 'Italian food near me',
              url: 'https://www.zomato.com/italian-restaurants-near-me',
            },
            {
              name: 'Mithai food near me',
              url: 'https://www.zomato.com/mithai-restaurants-near-me',
            },
            {
              name: 'Momos food near me',
              url: 'https://www.zomato.com/momos-restaurants-near-me',
            },
            {
              name: 'Mughlai food near me',
              url: 'https://www.zomato.com/mughlai-restaurants-near-me',
            },
            {
              name: 'North Indian food near me',
              url: 'https://www.zomato.com/north-indian-restaurants-near-me',
            },
            {
              name: 'Pasta food near me',
              url: 'https://www.zomato.com/',
            },
            {
              name: 'Pizza food near me',
              url: 'https://www.zomato.com/pizza-restaurants-near-me',
            },
            {
              name: 'Rolls food near me',
              url: 'https://www.zomato.com/rolls-restaurants-near-me',
            },
            {
              name: 'Sandwich food near me',
              url: 'https://www.zomato.com/sandwich-restaurants-near-me',
            },
            {
              name: 'Shake food near me',
              url: 'https://www.zomato.com/',
            },
            {
              name: 'South Indian food near me',
              url: 'https://www.zomato.com/south-indian-restaurants-near-me',
            },
            {
              name: 'Street food near me',
              url: 'https://www.zomato.com/street-food-restaurants-near-me',
            },
          ],
          cuisinesNearMeTitle: 'Popular cuisines near me',
          restaurantsNearMe: [
            {
              name: 'Bakeries near me',
              url: 'https://www.zomato.com/bakeries-near-me',
            },
            {
              name: 'Bars near me',
              url: 'https://www.zomato.com/bars-near-me',
            },
            {
              name: 'Beverage Shops near me',
              url: 'https://www.zomato.com/beverage-shops-near-me',
            },
            {
              name: 'Bhojanalya near me',
              url: 'https://www.zomato.com/bhojanalya-near-me',
            },
            {
              name: 'Cafés near me',
              url: 'https://www.zomato.com/cafes-near-me',
            },
            {
              name: 'Casual Dining near me',
              url: 'https://www.zomato.com/casual-dining-near-me',
            },
            {
              name: 'Clubs near me',
              url: 'https://www.zomato.com/clubs-near-me',
            },
            {
              name: 'Dessert Parlors near me',
              url: 'https://www.zomato.com/dessert-parlor-near-me',
            },
            {
              name: 'Dhabas near me',
              url: 'https://www.zomato.com/dhabas-near-me',
            },
            {
              name: 'Fine Dining near me',
              url: 'https://www.zomato.com/fine-dining-near-me',
            },
            {
              name: 'Food Courts near me',
              url: 'https://www.zomato.com/food-courts-near-me',
            },
            {
              name: 'Food Trucks near me',
              url: 'https://www.zomato.com/food-trucks-near-me',
            },
            {
              name: 'Kiosks near me',
              url: 'https://www.zomato.com/kiosks-near-me',
            },
            {
              name: 'Lounges near me',
              url: 'https://www.zomato.com/lounges-near-me',
            },
            {
              name: 'Paan Shop near me',
              url: 'https://www.zomato.com/paan-shop-near-me',
            },
            {
              name: 'Pubs near me',
              url: 'https://www.zomato.com/pubs-near-me',
            },
            {
              name: 'Quick Bites near me',
              url: 'https://www.zomato.com/quick-bites-near-me',
            },
            {
              name: 'Sweet Shops near me',
              url: 'https://www.zomato.com/sweet-shops-near-me',
            },
          ],
          restaurantsNearMeTitle: 'Popular restaurant types near me',
        },
        topChainsData: {
          topChainsHeading: 'Top Restaurant Chains',
          topChains: [],
        },
        o2CitiesData: {
          o2CitiesHeading: 'Cities We Deliver To',
          o2Cities: [
            {
              name: 'Delhi NCR',
              url: 'https://www.zomato.com/ncr/',
            },
            {
              name: 'Kolkata',
              url: 'https://www.zomato.com/kolkata/',
            },
            {
              name: 'Mumbai',
              url: 'https://www.zomato.com/mumbai/',
            },
            {
              name: 'Bengaluru',
              url: 'https://www.zomato.com/bangalore/',
            },
            {
              name: 'Pune',
              url: 'https://www.zomato.com/pune/',
            },
            {
              name: 'Hyderabad',
              url: 'https://www.zomato.com/hyderabad/',
            },
            {
              name: 'Chennai',
              url: 'https://www.zomato.com/chennai/',
            },
            {
              name: 'Lucknow',
              url: 'https://www.zomato.com/lucknow/',
            },
            {
              name: 'Kochi',
              url: 'https://www.zomato.com/kochi/',
            },
            {
              name: 'Jaipur',
              url: 'https://www.zomato.com/jaipur/',
            },
            {
              name: 'Ahmedabad',
              url: 'https://www.zomato.com/ahmedabad/',
            },
            {
              name: 'Chandigarh',
              url: 'https://www.zomato.com/chandigarh/',
            },
            {
              name: 'Goa',
              url: 'https://www.zomato.com/goa/',
            },
            {
              name: 'Indore',
              url: 'https://www.zomato.com/indore/',
            },
            {
              name: 'Gangtok',
              url: 'https://www.zomato.com/gangtok/',
            },
            {
              name: 'Nashik',
              url: 'https://www.zomato.com/nashik/',
            },
            {
              name: 'Ooty',
              url: 'https://www.zomato.com/ooty/',
            },
            {
              name: 'Shimla',
              url: 'https://www.zomato.com/shimla/',
            },
            {
              name: 'Ludhiana',
              url: 'https://www.zomato.com/ludhiana/',
            },
            {
              name: 'Guwahati',
              url: 'https://www.zomato.com/guwahati/',
            },
            {
              name: 'Amritsar',
              url: 'https://www.zomato.com/amritsar/',
            },
            {
              name: 'Kanpur',
              url: 'https://www.zomato.com/kanpur/',
            },
            {
              name: 'Allahabad',
              url: 'https://www.zomato.com/allahabad/',
            },
            {
              name: 'Aurangabad',
              url: 'https://www.zomato.com/aurangabad/',
            },
            {
              name: 'Bhopal',
              url: 'https://www.zomato.com/bhopal/',
            },
            {
              name: 'Ranchi',
              url: 'https://www.zomato.com/ranchi/',
            },
            {
              name: 'Visakhapatnam',
              url: 'https://www.zomato.com/visakhapatnam/',
            },
            {
              name: 'Bhubaneswar',
              url: 'https://www.zomato.com/bhubaneswar/',
            },
            {
              name: 'Coimbatore',
              url: 'https://www.zomato.com/coimbatore/',
            },
            {
              name: 'Mangalore',
              url: 'https://www.zomato.com/mangalore/',
            },
            {
              name: 'Vadodara',
              url: 'https://www.zomato.com/vadodara/',
            },
            {
              name: 'Nagpur',
              url: 'https://www.zomato.com/nagpur/',
            },
            {
              name: 'Agra',
              url: 'https://www.zomato.com/agra/',
            },
            {
              name: 'Dehradun',
              url: 'https://www.zomato.com/dehradun/',
            },
            {
              name: 'Mysore',
              url: 'https://www.zomato.com/mysore/',
            },
            {
              name: 'Puducherry',
              url: 'https://www.zomato.com/puducherry/',
            },
            {
              name: 'Surat',
              url: 'https://www.zomato.com/surat/',
            },
            {
              name: 'Varanasi',
              url: 'https://www.zomato.com/varanasi/',
            },
            {
              name: 'Patna',
              url: 'https://www.zomato.com/patna/',
            },
            {
              name: 'Udaipur',
              url: 'https://www.zomato.com/udaipur/',
            },
            {
              name: 'Khajuraho',
              url: 'https://www.zomato.com/khajuraho/',
            },
            {
              name: 'Neemrana',
              url: 'https://www.zomato.com/neemrana/',
            },
            {
              name: 'Cuttack',
              url: 'https://www.zomato.com/cuttack/',
            },
            {
              name: 'Trivandrum',
              url: 'https://www.zomato.com/trivandrum/',
            },
            {
              name: 'Haridwar',
              url: 'https://www.zomato.com/haridwar/',
            },
            {
              name: 'Leh',
              url: 'https://www.zomato.com/leh/',
            },
            {
              name: 'Pushkar',
              url: 'https://www.zomato.com/pushkar/',
            },
            {
              name: 'Rajkot',
              url: 'https://www.zomato.com/rajkot/',
            },
            {
              name: 'Madurai',
              url: 'https://www.zomato.com/madurai/',
            },
            {
              name: 'Kozhikode',
              url: 'https://www.zomato.com/kozhikode/',
            },
            {
              name: 'Alappuzha',
              url: 'https://www.zomato.com/alappuzha/',
            },
            {
              name: 'Thrissur',
              url: 'https://www.zomato.com/thrissur/',
            },
            {
              name: 'Manipal',
              url: 'https://www.zomato.com/manipal/',
            },
            {
              name: 'Vijayawada',
              url: 'https://www.zomato.com/vijayawada/',
            },
            {
              name: 'Jodhpur',
              url: 'https://www.zomato.com/jodhpur/',
            },
            {
              name: 'Kota',
              url: 'https://www.zomato.com/kota/',
            },
            {
              name: 'Ajmer',
              url: 'https://www.zomato.com/ajmer/',
            },
            {
              name: 'Mussoorie',
              url: 'https://www.zomato.com/mussoorie/',
            },
            {
              name: 'Rishikesh',
              url: 'https://www.zomato.com/rishikesh/',
            },
            {
              name: 'Jalandhar',
              url: 'https://www.zomato.com/jalandhar/',
            },
            {
              name: 'Jammu',
              url: 'https://www.zomato.com/jammu/',
            },
            {
              name: 'Manali',
              url: 'https://www.zomato.com/manali/',
            },
            {
              name: 'Dharamshala',
              url: 'https://www.zomato.com/dharamshala/',
            },
            {
              name: 'Raipur',
              url: 'https://www.zomato.com/raipur/',
            },
          ],
          seeMoreText: 'See more',
          seeMoreUrl: 'https://www.zomato.com/delivery-cities',
        },
      },
      SECTION_SEARCH_RESULT: [
        {
          type: 'restaurant',
          info: {
            resId: 19382015,
            name: 'Cake Wala',
            image: {
              url: 'https://b.zmtcdn.com/data/dish_photos/50f/5623ef774944ded45f4826039264b50f.jpg',
            },
            o2FeaturedImage: {
              url: 'https://b.zmtcdn.com/data/pictures/5/19382015/e5c8141547a6f5268b5f157484acf6d9_o2_featured_v2.jpg',
            },
            rating: {
              has_fake_reviews: 0,
              aggregate_rating: '3.7',
              rating_text: '3.7',
              rating_subtitle: 'Good',
              rating_color: '9ACD32',
              votes: '4,573',
              subtext: 'REVIEWS',
              is_new: false,
            },
            ratingNew: {
              newlyOpenedObj: null,
              suspiciousReviewObj: null,
              ratings: {
                DINING: {
                  rating_type: 'DINING',
                  rating: '3.5',
                  reviewCount: '48',
                  reviewTextSmall: '48 Reviews',
                  subtext: '48 Dining Reviews',
                  color: '#1C1C1C',
                  ratingV2: '3.5',
                  subtitle: 'DINING',
                  sideSubTitle: 'Dining Reviews',
                  bgColorV2: {
                    type: 'green',
                    tint: '500',
                  },
                },
                DELIVERY: {
                  rating_type: 'DELIVERY',
                  rating: '3.9',
                  reviewCount: '4,525',
                  reviewTextSmall: '4,525 Reviews',
                  subtext: '4,525 Delivery Reviews',
                  color: '#E23744',
                  ratingV2: '3.9',
                  subtitle: 'DELIVERY',
                  sideSubTitle: 'Delivery Reviews',
                  bgColorV2: {
                    type: 'green',
                    tint: '600',
                  },
                  newOnDelivery: false,
                },
              },
            },
            cft: {
              text: '₹300 for two',
            },
            cfo: {
              text: '₹350 for one',
            },
            locality: {
              name: 'Agra Cantt, Agra',
              address: '11- A, Ward 8, Kishan Garh, Idgah, Agra Cantt, Agra',
              localityUrl: 'agra/agra-cantt-restaurants',
            },
            timing: {
              text: '',
              color: '',
            },
            cuisine: [
              {
                deeplink:
                  'zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNVwiXX0iXQ%3D%3D',
                url: 'https://www.zomato.com/agra/restaurants/bakery/',
                name: 'Bakery',
              },
            ],
            should_ban_ugc: false,
            costText: {
              text: '₹350 for one',
            },
          },
          order: {
            deliveryTime: '31 min',
            isServiceable: true,
            hasOnlineOrdering: true,
            actionInfo: {
              text: 'Order Now',
              clickUrl: '/agra/cake-wala-agra-cantt/order',
            },
          },
          gold: [],
          takeaway: [],
          cardAction: {
            text: '',
            clickUrl:
              '/agra/cake-wala-agra-cantt/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gQ2FrZSIsImRpc2hfaWRzIjpbIjM5MjEyIl0sImN1aXNpbmVfaWRzIjpbXX19',
            clickActionDeeplink: '',
          },
          distance: '2.7 km',
          isPromoted: true,
          promotedText: 'Promoted',
          trackingData: [
            {
              table_name: 'zsearch_events_log',
              payload:
                '{"search_id":"44f6dadf-e372-4551-96db-370212bdca93","location_type":"delivery_cell","location_id":"4140058016516931584","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19382015","element_type":"listing","rank":1,"metadata":{"is_ad":"true"}}',
              event_names: {
                tap: '{"action":"tap"}',
                impression: '{"action":"impression"}',
              },
            },
          ],
          allCTA: [],
          promoOffer: '',
          checkBulkOffers: true,
          bulkOffers: [
            {
              text: '50% OFF up to 100',
              color: {
                tint: '500',
                type: 'blue',
              },
            },
          ],
          isDisabled: false,
          bottomContainers: [
            {
              image: {
                url: 'https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png',
              },
              text: '2525+ orders placed from here recently',
            },
            {
              image: {
                url: 'https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png',
                aspect_ratio: 2.66666666667,
              },
              text: 'Follows all Max Safety measures to ensure your food is safe',
            },
          ],
        },
        {
          type: 'restaurant',
          info: {
            resId: 20052578,
            name: 'Cake Company',
            image: {
              url: 'https://b.zmtcdn.com/data/dish_photos/af0/a8b1fcaca223d15b528a02c212022af0.jpg',
            },
            o2FeaturedImage: {
              url: 'https://b.zmtcdn.com/data/pictures/8/20052578/f26a2c2079232d330b37b0305b689795_o2_featured_v2.jpg',
            },
            rating: {
              has_fake_reviews: 0,
              aggregate_rating: '3.6',
              rating_text: '3.6',
              rating_subtitle: 'Good',
              rating_color: '9ACD32',
              votes: '352',
              subtext: 'REVIEWS',
              is_new: false,
            },
            ratingNew: {
              newlyOpenedObj: null,
              suspiciousReviewObj: null,
              ratings: {
                DINING: {
                  rating_type: 'DINING',
                  rating: '',
                  reviewCount: '0',
                  reviewTextSmall: '0 Reviews',
                  subtext: 'Does not offer Dining',
                  color: '',
                  ratingV2: '-',
                  subtitle: 'DINING',
                  sideSubTitle: 'Dining Reviews',
                  bgColorV2: {
                    type: 'grey',
                    tint: '500',
                  },
                },
                DELIVERY: {
                  rating_type: 'DELIVERY',
                  rating: '3.6',
                  reviewCount: '352',
                  reviewTextSmall: '352 Reviews',
                  subtext: '352 Delivery Reviews',
                  color: '#E23744',
                  ratingV2: '3.6',
                  subtitle: 'DELIVERY',
                  sideSubTitle: 'Delivery Reviews',
                  bgColorV2: {
                    type: 'green',
                    tint: '600',
                  },
                  newOnDelivery: false,
                },
              },
            },
            cft: {
              text: '₹350 for two',
            },
            cfo: {
              text: '₹350 for one',
            },
            locality: {
              name: 'Agra Cantt, Agra',
              address: '11-A, Kishan Garh, Idgah Colony, Agra Cantt, Agra',
              localityUrl: 'agra/agra-cantt-restaurants',
            },
            timing: {
              text: '',
              color: '',
            },
            cuisine: [
              {
                deeplink:
                  'zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd',
                url: 'https://www.zomato.com/agra/restaurants/desserts/',
                name: 'Desserts',
              },
              {
                deeplink:
                  'zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNVwiXX0iXQ%3D%3D',
                url: 'https://www.zomato.com/agra/restaurants/bakery/',
                name: 'Bakery',
              },
            ],
            should_ban_ugc: false,
            costText: {
              text: '₹350 for one',
            },
          },
          order: {
            deliveryTime: '34 min',
            isServiceable: true,
            hasOnlineOrdering: true,
            actionInfo: {
              text: 'Order Now',
              clickUrl: '/agra/cake-company-agra-cantt/order',
            },
          },
          gold: [],
          takeaway: [],
          cardAction: {
            text: '',
            clickUrl:
              '/agra/cake-company-agra-cantt/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gQ2FrZSIsImRpc2hfaWRzIjpbIjM5MjEyIl0sImN1aXNpbmVfaWRzIjpbXX19',
            clickActionDeeplink: '',
          },
          distance: '2.8 km',
          isPromoted: false,
          promotedText: '',
          trackingData: [
            {
              table_name: 'zsearch_events_log',
              payload:
                '{"search_id":"44f6dadf-e372-4551-96db-370212bdca93","location_type":"delivery_cell","location_id":"4140058016516931584","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20052578","element_type":"listing","rank":2}',
              event_names: {
                tap: '{"action":"tap"}',
                impression: '{"action":"impression"}',
              },
            },
          ],
          allCTA: [],
          promoOffer: '',
          checkBulkOffers: true,
          bulkOffers: [
            {
              text: '50% OFF up to 100',
              color: {
                tint: '500',
                type: 'blue',
              },
            },
          ],
          isDisabled: false,
          bottomContainers: [
            {
              image: {
                url: 'https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png',
              },
              text: '925+ orders placed from here recently',
            },
            {
              image: {
                url: 'https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png',
                aspect_ratio: 2.66666666667,
              },
              text: 'Follows all Max Safety measures to ensure your food is safe',
            },
          ],
        },
        {
          type: 'restaurant',
          info: {
            resId: 20078533,
            name: 'Cake Factory',
            image: {
              url: 'https://b.zmtcdn.com/data/dish_photos/55f/e84ec3d0aa2a64cef3e07e7aec23555f.jpg',
            },
            o2FeaturedImage: {
              url: 'https://b.zmtcdn.com/data/pictures/3/20078533/90da859710178717869fae3ace1ead8b_o2_featured_v2.jpg',
            },
            rating: {
              has_fake_reviews: 0,
              aggregate_rating: '3.9',
              rating_text: '3.9',
              rating_subtitle: 'Good',
              rating_color: '9ACD32',
              votes: '124',
              subtext: 'REVIEWS',
              is_new: false,
            },
            ratingNew: {
              newlyOpenedObj: null,
              suspiciousReviewObj: null,
              ratings: {
                DINING: {
                  rating_type: 'DINING',
                  rating: '',
                  reviewCount: '0',
                  reviewTextSmall: '0 Reviews',
                  subtext: 'Does not offer Dining',
                  color: '',
                  ratingV2: '-',
                  subtitle: 'DINING',
                  sideSubTitle: 'Dining Reviews',
                  bgColorV2: {
                    type: 'grey',
                    tint: '500',
                  },
                },
                DELIVERY: {
                  rating_type: 'DELIVERY',
                  rating: '3.9',
                  reviewCount: '124',
                  reviewTextSmall: '124 Reviews',
                  subtext: '124 Delivery Reviews',
                  color: '#E23744',
                  ratingV2: '3.9',
                  subtitle: 'DELIVERY',
                  sideSubTitle: 'Delivery Reviews',
                  bgColorV2: {
                    type: 'green',
                    tint: '600',
                  },
                  newOnDelivery: false,
                },
              },
            },
            cft: {
              text: '₹400 for two',
            },
            cfo: {
              text: '₹350 for one',
            },
            locality: {
              name: 'Arjun Nagar, Agra',
              address: '11-A, Kishan Garh, Idgah Colony, Arjun Nagar, Agra',
              localityUrl: 'agra/arjun-nagar-restaurants',
            },
            timing: {
              text: 'Opens at 12noon',
              color: '#ab000d',
            },
            cuisine: [
              {
                deeplink:
                  'zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNVwiXX0iXQ%3D%3D',
                url: 'https://www.zomato.com/agra/restaurants/bakery/',
                name: 'Bakery',
              },
            ],
            should_ban_ugc: false,
            costText: {
              text: '₹350 for one',
            },
          },
          order: {
            deliveryTime: '29 min',
            isServiceable: true,
            hasOnlineOrdering: true,
            actionInfo: {
              text: 'Order Now',
              clickUrl: '/agra/cake-factory-arjun-nagar/order',
            },
          },
          gold: [],
          takeaway: [],
          cardAction: {
            text: '',
            clickUrl:
              '/agra/cake-factory-arjun-nagar/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gQ2FrZSIsImRpc2hfaWRzIjpbIjM5MjEyIl0sImN1aXNpbmVfaWRzIjpbXX19',
            clickActionDeeplink: '',
          },
          distance: '2.8 km',
          isPromoted: true,
          promotedText: 'Promoted',
          trackingData: [
            {
              table_name: 'zsearch_events_log',
              payload:
                '{"search_id":"44f6dadf-e372-4551-96db-370212bdca93","location_type":"delivery_cell","location_id":"4140058016516931584","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20078533","element_type":"listing","rank":3,"metadata":{"is_ad":"true"}}',
              event_names: {
                tap: '{"action":"tap"}',
                impression: '{"action":"impression"}',
              },
            },
          ],
          allCTA: [],
          promoOffer: '',
          checkBulkOffers: true,
          bulkOffers: [
            {
              text: '50% OFF up to 100',
              color: {
                tint: '500',
                type: 'blue',
              },
            },
          ],
          isDisabled: false,
          bottomContainers: [
            {
              image: {
                url: 'https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png',
              },
              text: '850+ orders placed from here recently',
            },
            {
              image: {
                url: 'https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png',
                aspect_ratio: 2.66666666667,
              },
              text: 'Follows all Max Safety measures to ensure your food is safe',
            },
          ],
        },
        {
          type: 'restaurant',
          info: {
            resId: 19748876,
            name: 'Sargra Online Cake Delivery',
            image: {
              url: 'https://b.zmtcdn.com/data/dish_photos/c09/875ed8e8b43ad3eae5761e896b460c09.jpg',
            },
            o2FeaturedImage: {
              url: 'https://b.zmtcdn.com/data/pictures/6/19748876/a990d1e0bc690110e350749499ac312e_o2_featured_v2.jpg',
            },
            rating: {
              has_fake_reviews: 0,
              aggregate_rating: '3.7',
              rating_text: '3.7',
              rating_subtitle: 'Good',
              rating_color: '9ACD32',
              votes: '416',
              subtext: 'REVIEWS',
              is_new: false,
            },
            ratingNew: {
              newlyOpenedObj: null,
              suspiciousReviewObj: null,
              ratings: {
                DINING: {
                  rating_type: 'DINING',
                  rating: '',
                  reviewCount: '0',
                  reviewTextSmall: '0 Reviews',
                  subtext: 'Does not offer Dining',
                  color: '',
                  ratingV2: '-',
                  subtitle: 'DINING',
                  sideSubTitle: 'Dining Reviews',
                  bgColorV2: {
                    type: 'grey',
                    tint: '500',
                  },
                },
                DELIVERY: {
                  rating_type: 'DELIVERY',
                  rating: '3.7',
                  reviewCount: '416',
                  reviewTextSmall: '416 Reviews',
                  subtext: '416 Delivery Reviews',
                  color: '#E23744',
                  ratingV2: '3.7',
                  subtitle: 'DELIVERY',
                  sideSubTitle: 'Delivery Reviews',
                  bgColorV2: {
                    type: 'green',
                    tint: '600',
                  },
                  newOnDelivery: false,
                },
              },
            },
            cft: {
              text: '₹300 for two',
            },
            cfo: {
              text: '₹350 for one',
            },
            locality: {
              name: 'Agra Cantt, Agra',
              address: '11 A, Kishan Garh, Idgah Colony, Agra Cantt, Agra',
              localityUrl: 'agra/agra-cantt-restaurants',
            },
            timing: {
              text: '',
              color: '',
            },
            cuisine: [
              {
                deeplink:
                  'zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNVwiXX0iXQ%3D%3D',
                url: 'https://www.zomato.com/agra/restaurants/bakery/',
                name: 'Bakery',
              },
            ],
            should_ban_ugc: false,
            costText: {
              text: '₹350 for one',
            },
          },
          order: {
            deliveryTime: '33 min',
            isServiceable: true,
            hasOnlineOrdering: true,
            actionInfo: {
              text: 'Order Now',
              clickUrl: '/agra/sargra-online-cake-delivery-agra-cantt/order',
            },
          },
          gold: [],
          takeaway: [],
          cardAction: {
            text: '',
            clickUrl:
              '/agra/sargra-online-cake-delivery-agra-cantt/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gQ2FrZSIsImRpc2hfaWRzIjpbIjM5MjEyIl0sImN1aXNpbmVfaWRzIjpbXX19',
            clickActionDeeplink: '',
          },
          distance: '2.8 km',
          isPromoted: false,
          promotedText: '',
          trackingData: [
            {
              table_name: 'zsearch_events_log',
              payload:
                '{"search_id":"44f6dadf-e372-4551-96db-370212bdca93","location_type":"delivery_cell","location_id":"4140058016516931584","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19748876","element_type":"listing","rank":4}',
              event_names: {
                tap: '{"action":"tap"}',
                impression: '{"action":"impression"}',
              },
            },
          ],
          allCTA: [],
          promoOffer: '',
          checkBulkOffers: true,
          bulkOffers: [
            {
              text: '50% OFF up to 100',
              color: {
                tint: '500',
                type: 'blue',
              },
            },
          ],
          isDisabled: false,
          bottomContainers: [
            {
              image: {
                url: 'https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png',
              },
              text: '650+ orders placed from here recently',
            },
            {
              image: {
                url: 'https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png',
                aspect_ratio: 2.66666666667,
              },
              text: 'Follows all Max Safety measures to ensure your food is safe',
            },
          ],
        },
        {
          type: 'restaurant',
          info: {
            resId: 3400278,
            name: 'Atlantic Foods',
            image: {
              url: 'https://b.zmtcdn.com/data/dish_photos/54b/8038b3d738548fc136f1b76fdf2b854b.jpg',
            },
            o2FeaturedImage: {
              url: 'https://b.zmtcdn.com/data/pictures/8/3400278/0397d12e55c0fda5f579a73ecd06472d_o2_featured_v2.jpg',
            },
            rating: {
              has_fake_reviews: 0,
              aggregate_rating: '4.1',
              rating_text: '4.1',
              rating_subtitle: 'Very Good',
              rating_color: '5BA829',
              votes: '10.8K',
              subtext: 'REVIEWS',
              is_new: false,
            },
            ratingNew: {
              newlyOpenedObj: null,
              suspiciousReviewObj: null,
              ratings: {
                DINING: {
                  rating_type: 'DINING',
                  rating: '4.0',
                  reviewCount: '264',
                  reviewTextSmall: '264 Reviews',
                  subtext: '264 Dining Reviews',
                  color: '#1C1C1C',
                  ratingV2: '4.0',
                  subtitle: 'DINING',
                  sideSubTitle: 'Dining Reviews',
                  bgColorV2: {
                    type: 'green',
                    tint: '600',
                  },
                },
                DELIVERY: {
                  rating_type: 'DELIVERY',
                  rating: '4.2',
                  reviewCount: '10.5K',
                  reviewTextSmall: '10.5K Reviews',
                  subtext: '10.5K Delivery Reviews',
                  color: '#E23744',
                  ratingV2: '4.2',
                  subtitle: 'DELIVERY',
                  sideSubTitle: 'Delivery Reviews',
                  bgColorV2: {
                    type: 'green',
                    tint: '700',
                  },
                  newOnDelivery: false,
                },
              },
            },
            cft: {
              text: '₹400 for two',
            },
            cfo: {
              text: '₹350 for one',
            },
            locality: {
              name: 'Civil Lines, Agra',
              address:
                'G 26 114//2, Deep Shikha Tower, Sanjay Place, Civil Lines, Agra',
              localityUrl: 'agra/civil-lines-restaurants',
            },
            timing: {
              text: 'Opens at 11am',
              color: '#ab000d',
            },
            cuisine: [
              {
                deeplink:
                  'zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNVwiXX0iXQ%3D%3D',
                url: 'https://www.zomato.com/agra/restaurants/bakery/',
                name: 'Bakery',
              },
              {
                deeplink:
                  'zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd',
                url: 'https://www.zomato.com/agra/restaurants/desserts/',
                name: 'Desserts',
              },
              {
                deeplink:
                  'zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzA0XCJdfSJd',
                url: 'https://www.zomato.com/agra/restaurants/sandwich/',
                name: 'Sandwich',
              },
              {
                deeplink:
                  'zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY4XCJdfSJd',
                url: 'https://www.zomato.com/agra/restaurants/burger/',
                name: 'Burger',
              },
              {
                deeplink:
                  'zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D',
                url: 'https://www.zomato.com/agra/restaurants/pizza/',
                name: 'Pizza',
              },
              {
                deeplink:
                  'zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D',
                url: 'https://www.zomato.com/agra/restaurants/fast-food/',
                name: 'Fast Food',
              },
            ],
            should_ban_ugc: false,
            costText: {
              text: '₹350 for one',
            },
          },
          order: {
            deliveryTime: '26 min',
            isServiceable: true,
            hasOnlineOrdering: true,
            actionInfo: {
              text: 'Order Now',
              clickUrl: '/agra/atlantic-foods-civil-lines/order',
            },
          },
          gold: [],
          takeaway: [],
          cardAction: {
            text: '',
            clickUrl:
              '/agra/atlantic-foods-civil-lines/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gQ2FrZSIsImRpc2hfaWRzIjpbIjM5MjEyIl0sImN1aXNpbmVfaWRzIjpbXX19',
            clickActionDeeplink: '',
          },
          distance: '2.7 km',
          isPromoted: true,
          promotedText: 'Promoted',
          trackingData: [
            {
              table_name: 'zsearch_events_log',
              payload:
                '{"search_id":"44f6dadf-e372-4551-96db-370212bdca93","location_type":"delivery_cell","location_id":"4140058016516931584","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"3400278","element_type":"listing","rank":5,"metadata":{"is_ad":"true"}}',
              event_names: {
                tap: '{"action":"tap"}',
                impression: '{"action":"impression"}',
              },
            },
          ],
          allCTA: [],
          promoOffer: '',
          checkBulkOffers: true,
          bulkOffers: [
            {
              text: '50% OFF up to 100',
              color: {
                tint: '500',
                type: 'blue',
              },
            },
          ],
          isDisabled: false,
          bottomContainers: [
            {
              image: {
                url: 'https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png',
              },
              text: '2250+ orders placed from here recently',
            },
            {
              image: {
                url: 'https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png',
                aspect_ratio: 2.66666666667,
              },
              text: 'Follows all Max Safety measures to ensure your food is safe',
            },
          ],
        },
        {
          type: 'restaurant',
          info: {
            resId: 3400648,
            name: 'Sagra',
            image: {
              url: 'https://b.zmtcdn.com/data/dish_photos/063/e791dbd080c007691a9e8d9d5ccad063.png',
            },
            o2FeaturedImage: {
              url: 'https://b.zmtcdn.com/data/pictures/8/3400648/6239190f640f2c5576117923f3e5483b_o2_featured_v2.png',
            },
            rating: {
              has_fake_reviews: 0,
              aggregate_rating: '4.0',
              rating_text: '4.0',
              rating_subtitle: 'Very Good',
              rating_color: '5BA829',
              votes: '167',
              subtext: 'REVIEWS',
              is_new: false,
            },
            ratingNew: {
              newlyOpenedObj: null,
              suspiciousReviewObj: null,
              ratings: {
                DINING: {
                  rating_type: 'DINING',
                  rating: '',
                  reviewCount: '0',
                  reviewTextSmall: '0 Reviews',
                  subtext: 'Does not offer Dining',
                  color: '',
                  ratingV2: '-',
                  subtitle: 'DINING',
                  sideSubTitle: 'Dining Reviews',
                  bgColorV2: {
                    type: 'grey',
                    tint: '500',
                  },
                },
                DELIVERY: {
                  rating_type: 'DELIVERY',
                  rating: '4.0',
                  reviewCount: '167',
                  reviewTextSmall: '167 Reviews',
                  subtext: '167 Delivery Reviews',
                  color: '#E23744',
                  ratingV2: '4.0',
                  subtitle: 'DELIVERY',
                  sideSubTitle: 'Delivery Reviews',
                  bgColorV2: {
                    type: 'green',
                    tint: '600',
                  },
                  newOnDelivery: false,
                },
              },
            },
            cft: {
              text: '₹300 for two',
            },
            cfo: {
              text: '₹350 for one',
            },
            locality: {
              name: 'Agra Cantt, Agra',
              address: '11-A, Idgah Colony, Kishan Garh, Agra Cantt, Agra',
              localityUrl: 'agra/agra-cantt-restaurants',
            },
            timing: {
              text: '',
              color: '',
            },
            cuisine: [
              {
                deeplink:
                  'zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNVwiXX0iXQ%3D%3D',
                url: 'https://www.zomato.com/agra/restaurants/bakery/',
                name: 'Bakery',
              },
            ],
            should_ban_ugc: false,
            costText: {
              text: '₹350 for one',
            },
          },
          order: {
            deliveryTime: '32 min',
            isServiceable: true,
            hasOnlineOrdering: true,
            actionInfo: {
              text: 'Order Now',
              clickUrl: '/agra/sagra-agra-cantt/order',
            },
          },
          gold: [],
          takeaway: [],
          cardAction: {
            text: '',
            clickUrl:
              '/agra/sagra-agra-cantt/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gQ2FrZSIsImRpc2hfaWRzIjpbIjM5MjEyIl0sImN1aXNpbmVfaWRzIjpbXX19',
            clickActionDeeplink: '',
          },
          distance: '2.7 km',
          isPromoted: false,
          promotedText: '',
          trackingData: [
            {
              table_name: 'zsearch_events_log',
              payload:
                '{"search_id":"44f6dadf-e372-4551-96db-370212bdca93","location_type":"delivery_cell","location_id":"4140058016516931584","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"3400648","element_type":"listing","rank":6}',
              event_names: {
                tap: '{"action":"tap"}',
                impression: '{"action":"impression"}',
              },
            },
          ],
          allCTA: [],
          promoOffer: '',
          checkBulkOffers: true,
          bulkOffers: [
            {
              text: '50% OFF up to 100',
              color: {
                tint: '500',
                type: 'blue',
              },
            },
          ],
          isDisabled: false,
          bottomContainers: [
            {
              image: {
                url: 'https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png',
              },
              text: '75+ orders placed from here recently',
            },
            {
              image: {
                url: 'https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png',
                aspect_ratio: 2.66666666667,
              },
              text: 'Follows all Max Safety measures to ensure your food is safe',
            },
          ],
        },
        {
          type: 'restaurant',
          info: {
            resId: 3401930,
            name: 'Ambey Bakers',
            image: {
              url: 'https://b.zmtcdn.com/data/dish_photos/e5e/34a367671c84827d58bf91d782fece5e.jpg',
            },
            o2FeaturedImage: {
              url: 'https://b.zmtcdn.com/data/pictures/0/3401930/03ba6cef5d23b1d8b64c2cf895c1fc5b_o2_featured_v2.jpg',
            },
            rating: {
              has_fake_reviews: 0,
              aggregate_rating: '3.9',
              rating_text: '3.9',
              rating_subtitle: 'Good',
              rating_color: '9ACD32',
              votes: '8,302',
              subtext: 'REVIEWS',
              is_new: false,
            },
            ratingNew: {
              newlyOpenedObj: null,
              suspiciousReviewObj: null,
              ratings: {
                DINING: {
                  rating_type: 'DINING',
                  rating: '3.9',
                  reviewCount: '196',
                  reviewTextSmall: '196 Reviews',
                  subtext: '196 Dining Reviews',
                  color: '#1C1C1C',
                  ratingV2: '3.9',
                  subtitle: 'DINING',
                  sideSubTitle: 'Dining Reviews',
                  bgColorV2: {
                    type: 'green',
                    tint: '600',
                  },
                },
                DELIVERY: {
                  rating_type: 'DELIVERY',
                  rating: '3.9',
                  reviewCount: '8,106',
                  reviewTextSmall: '8,106 Reviews',
                  subtext: '8,106 Delivery Reviews',
                  color: '#E23744',
                  ratingV2: '3.9',
                  subtitle: 'DELIVERY',
                  sideSubTitle: 'Delivery Reviews',
                  bgColorV2: {
                    type: 'green',
                    tint: '600',
                  },
                  newOnDelivery: false,
                },
              },
            },
            cft: {
              text: '₹300 for two',
            },
            cfo: {
              text: '₹350 for one',
            },
            locality: {
              name: 'Civil Lines, Agra',
              address: '25/90, Gandhi Nagar Crossing, Civil Lines, Agra',
              localityUrl: 'agra/civil-lines-restaurants',
            },
            timing: {
              text: '',
              color: '',
            },
            cuisine: [
              {
                deeplink:
                  'zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNVwiXX0iXQ%3D%3D',
                url: 'https://www.zomato.com/agra/restaurants/bakery/',
                name: 'Bakery',
              },
              {
                deeplink:
                  'zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D',
                url: 'https://www.zomato.com/agra/restaurants/fast-food/',
                name: 'Fast Food',
              },
              {
                deeplink:
                  'zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd',
                url: 'https://www.zomato.com/agra/restaurants/desserts/',
                name: 'Desserts',
              },
            ],
            should_ban_ugc: false,
            costText: {
              text: '₹350 for one',
            },
          },
          order: {
            deliveryTime: '35 min',
            isServiceable: true,
            hasOnlineOrdering: true,
            actionInfo: {
              text: 'Order Now',
              clickUrl: '/agra/ambey-bakers-civil-lines/order',
            },
          },
          gold: [],
          takeaway: [],
          cardAction: {
            text: '',
            clickUrl:
              '/agra/ambey-bakers-civil-lines/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gQ2FrZSIsImRpc2hfaWRzIjpbIjM5MjEyIl0sImN1aXNpbmVfaWRzIjpbXX19',
            clickActionDeeplink: '',
          },
          distance: '3 km',
          isPromoted: true,
          promotedText: 'Promoted',
          trackingData: [
            {
              table_name: 'zsearch_events_log',
              payload:
                '{"search_id":"44f6dadf-e372-4551-96db-370212bdca93","location_type":"delivery_cell","location_id":"4140058016516931584","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"3401930","element_type":"listing","rank":7,"metadata":{"is_ad":"true"}}',
              event_names: {
                tap: '{"action":"tap"}',
                impression: '{"action":"impression"}',
              },
            },
          ],
          allCTA: [],
          promoOffer: '',
          checkBulkOffers: true,
          bulkOffers: [
            {
              text: 'Pro extra 25% OFF',
              color: {
                tint: '600',
                type: 'pink',
              },
            },
            {
              text: '50% OFF up to 100',
              color: {
                tint: '500',
                type: 'blue',
              },
            },
          ],
          isDisabled: false,
          bottomContainers: [
            {
              image: {
                url: 'https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png',
              },
              text: '1525+ orders placed from here recently',
            },
            {
              image: {
                url: 'https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png',
                aspect_ratio: 2.66666666667,
              },
              text: 'Follows all Max Safety measures to ensure your food is safe',
            },
          ],
        },
        {
          type: 'restaurant',
          info: {
            resId: 3400258,
            name: 'Cafe Coffee Day',
            image: {
              url: 'https://b.zmtcdn.com/data/dish_photos/3a3/4b91f85c3a8146e0f8c0b577204cb3a3.jpg',
            },
            o2FeaturedImage: {
              url: 'https://b.zmtcdn.com/data/pictures/chains/3/3400153/81edcda3110291e378eaf0d7bf8ed412_o2_featured_v2.jpg',
            },
            rating: {
              has_fake_reviews: 0,
              aggregate_rating: '3.5',
              rating_text: '3.5',
              rating_subtitle: 'Good',
              rating_color: '9ACD32',
              votes: '912',
              subtext: 'REVIEWS',
              is_new: false,
            },
            ratingNew: {
              newlyOpenedObj: null,
              suspiciousReviewObj: null,
              ratings: {
                DINING: {
                  rating_type: 'DINING',
                  rating: '3.3',
                  reviewCount: '82',
                  reviewTextSmall: '82 Reviews',
                  subtext: '82 Dining Reviews',
                  color: '#1C1C1C',
                  ratingV2: '3.3',
                  subtitle: 'DINING',
                  sideSubTitle: 'Dining Reviews',
                  bgColorV2: {
                    type: 'green',
                    tint: '500',
                  },
                },
                DELIVERY: {
                  rating_type: 'DELIVERY',
                  rating: '3.7',
                  reviewCount: '830',
                  reviewTextSmall: '830 Reviews',
                  subtext: '830 Delivery Reviews',
                  color: '#E23744',
                  ratingV2: '3.7',
                  subtitle: 'DELIVERY',
                  sideSubTitle: 'Delivery Reviews',
                  bgColorV2: {
                    type: 'green',
                    tint: '600',
                  },
                  newOnDelivery: false,
                },
              },
            },
            cft: {
              text: '₹500 for two',
            },
            cfo: {
              text: '₹350 for one',
            },
            locality: {
              name: 'Agra Cantt, Agra',
              address:
                'A7, Shopping Arcade, Saudagar Lines, Sadar Bazaar, Agra Cantt, Agra',
              localityUrl: 'agra/agra-cantt-restaurants',
            },
            timing: {
              text: '',
              color: '',
            },
            cuisine: [
              {
                deeplink:
                  'zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzBcIl19Il0%3D',
                url: 'https://www.zomato.com/agra/restaurants/cafes/',
                name: 'Cafe',
              },
              {
                deeplink:
                  'zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D',
                url: 'https://www.zomato.com/agra/restaurants/fast-food/',
                name: 'Fast Food',
              },
              {
                deeplink:
                  'zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA0MFwiXX0iXQ%3D%3D',
                url: 'https://www.zomato.com/agra/restaurants/coffee/',
                name: 'Coffee',
              },
              {
                deeplink:
                  'zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd',
                url: 'https://www.zomato.com/agra/restaurants/desserts/',
                name: 'Desserts',
              },
              {
                deeplink:
                  'zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd',
                url: 'https://www.zomato.com/agra/restaurants/beverages/',
                name: 'Beverages',
              },
            ],
            should_ban_ugc: false,
            costText: {
              text: '₹350 for one',
            },
          },
          order: {
            deliveryTime: '24 min',
            isServiceable: true,
            hasOnlineOrdering: true,
            actionInfo: {
              text: 'Order Now',
              clickUrl: '/agra/cafe-coffee-day-agra-cantt/order',
            },
          },
          gold: [],
          takeaway: [],
          cardAction: {
            text: '',
            clickUrl:
              '/agra/cafe-coffee-day-agra-cantt/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gQ2FrZSIsImRpc2hfaWRzIjpbIjM5MjEyIl0sImN1aXNpbmVfaWRzIjpbXX19',
            clickActionDeeplink: '',
          },
          distance: '2.5 km',
          isPromoted: false,
          promotedText: '',
          trackingData: [
            {
              table_name: 'zsearch_events_log',
              payload:
                '{"search_id":"44f6dadf-e372-4551-96db-370212bdca93","location_type":"delivery_cell","location_id":"4140058016516931584","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"3400258","element_type":"listing","rank":8}',
              event_names: {
                tap: '{"action":"tap"}',
                impression: '{"action":"impression"}',
              },
            },
          ],
          allCTA: [],
          promoOffer: '',
          checkBulkOffers: true,
          bulkOffers: [
            {
              text: '50% OFF up to 100',
              color: {
                tint: '500',
                type: 'blue',
              },
            },
          ],
          isDisabled: false,
          bottomContainers: [
            {
              image: {
                url: 'https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png',
              },
              text: '225+ orders placed from here recently',
            },
            {
              image: {
                url: 'https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png',
                aspect_ratio: 2.66666666667,
              },
              text: 'Follows all Max Safety measures to ensure your food is safe',
            },
          ],
        },
        {
          type: 'restaurant',
          info: {
            resId: 19960055,
            name: 'Sai Cake And Bake',
            image: {
              url: 'https://b.zmtcdn.com/data/dish_photos/dcd/247ef971c28f5f5e94f0b82ec3c7bdcd.jpg',
            },
            o2FeaturedImage: {
              url: 'https://b.zmtcdn.com/data/pictures/5/19960055/286795d0d2a349ddef5ebd1b774a721e_o2_featured_v2.jpg',
            },
            rating: {
              has_fake_reviews: 0,
              aggregate_rating: '3.3',
              rating_text: '3.3',
              rating_subtitle: 'Average',
              rating_color: 'CDD614',
              votes: '100',
              subtext: 'REVIEWS',
              is_new: false,
            },
            ratingNew: {
              newlyOpenedObj: null,
              suspiciousReviewObj: null,
              ratings: {
                DINING: {
                  rating_type: 'DINING',
                  rating: '',
                  reviewCount: '0',
                  reviewTextSmall: '0 Reviews',
                  subtext: 'Does not offer Dining',
                  color: '',
                  ratingV2: '-',
                  subtitle: 'DINING',
                  sideSubTitle: 'Dining Reviews',
                  bgColorV2: {
                    type: 'grey',
                    tint: '500',
                  },
                },
                DELIVERY: {
                  rating_type: 'DELIVERY',
                  rating: '3.3',
                  reviewCount: '100',
                  reviewTextSmall: '100 Reviews',
                  subtext: '100 Delivery Reviews',
                  color: '#E23744',
                  ratingV2: '3.3',
                  subtitle: 'DELIVERY',
                  sideSubTitle: 'Delivery Reviews',
                  bgColorV2: {
                    type: 'green',
                    tint: '500',
                  },
                  newOnDelivery: false,
                },
              },
            },
            cft: {
              text: '₹250 for two',
            },
            cfo: {
              text: '₹350 for one',
            },
            locality: {
              name: 'Civil Lines, Agra',
              address:
                'Flat 303, Block 2, Nirmal Heights, Old Mathura Road, Civil Lines, Agra',
              localityUrl: 'agra/civil-lines-restaurants',
            },
            timing: {
              text: '',
              color: '',
            },
            cuisine: [
              {
                deeplink:
                  'zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNVwiXX0iXQ%3D%3D',
                url: 'https://www.zomato.com/agra/restaurants/bakery/',
                name: 'Bakery',
              },
            ],
            should_ban_ugc: false,
            costText: {
              text: '₹350 for one',
            },
          },
          order: {
            deliveryTime: '43 min',
            isServiceable: true,
            hasOnlineOrdering: true,
            actionInfo: {
              text: 'Order Now',
              clickUrl: '/agra/sai-cake-and-bake-civil-lines/order',
            },
          },
          gold: [],
          takeaway: [],
          cardAction: {
            text: '',
            clickUrl:
              '/agra/sai-cake-and-bake-civil-lines/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gQ2FrZSIsImRpc2hfaWRzIjpbIjM5MjEyIl0sImN1aXNpbmVfaWRzIjpbXX19',
            clickActionDeeplink: '',
          },
          distance: '4.8 km',
          isPromoted: true,
          promotedText: 'Promoted',
          trackingData: [
            {
              table_name: 'zsearch_events_log',
              payload:
                '{"search_id":"44f6dadf-e372-4551-96db-370212bdca93","location_type":"delivery_cell","location_id":"4140058016516931584","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19960055","element_type":"listing","rank":9,"metadata":{"is_ad":"true"}}',
              event_names: {
                tap: '{"action":"tap"}',
                impression: '{"action":"impression"}',
              },
            },
          ],
          allCTA: [],
          promoOffer: '',
          checkBulkOffers: true,
          bulkOffers: [
            {
              text: '50% OFF up to 100',
              color: {
                tint: '500',
                type: 'blue',
              },
            },
          ],
          isDisabled: false,
          bottomContainers: [
            {
              image: {
                url: 'https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png',
              },
              text: '125+ orders placed from here recently',
            },
            {
              image: {
                url: 'https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png',
                aspect_ratio: 2.66666666667,
              },
              text: 'Follows all Max Safety measures to ensure your food is safe',
            },
          ],
        },
      ],
      SECTION_SEARCH_META_INFO: {
        searchMetaData: {
          previousSearchParams:
            '{"PreviousSearchId":"44f6dadf-e372-4551-96db-370212bdca93","PreviousSearchFilter":["{\\"category_context\\":\\"delivery_home\\"}","","{\\"universal_dish_ids\\":[\\"39212\\"]}"]}',
          postbackParams:
            '{"processed_chain_ids":[19382015,20052578,20078533,19748876,3400278,3400648,3401930,3400153,19960055],"shown_res_count":9,"search_id":"44f6dadf-e372-4551-96db-370212bdca93"}',
          totalResults: 76,
          hasMore: true,
          getInactive: false,
          filterInfo: {
            railFilters: [
              {
                filterType: 'category_sheet',
                filterValue: 'delivery_home',
                isHidden: true,
                isApplied: true,
                postKey: '{"category_context":"delivery_home"}',
                name: 'Delivery',
              },
              {
                filterType: 'universal_dish_id',
                filterValue: '39212',
                isApplied: true,
                postKey: '{"universal_dish_ids":["39212"]}',
                name: 'Cake',
              },
              {
                filterType: 'sort',
                filterValue: 'delivery_time_asc',
                postKey: '{"sort":"delivery_time_asc"}',
                name: 'Delivery Time',
              },
              {
                filterType: 'rating_range',
                filterValue: '4.0-5.0',
                postKey: '{"rating":[4,5]}',
                name: 'Rating: 4.0+',
              },
              {
                filterType: 'meta_filter',
                filterValue: '100354',
                postKey: '{"meta_filter":100354}',
                name: 'Pure Veg',
              },
              {
                filterType: 'cuisine_modal',
                filterValue: 'cuisine_modal',
                modalKey: 'cuisine_modal_modal',
                name: 'Cuisines',
              },
              {
                filterType: 'more_filters_modal',
                filterValue: 'more_filters_modal',
                modalKey: 'more_filters_modal_modal',
                name: 'More filters',
              },
            ],
            modalFilters: {
              verticalTabs: [
                {
                  name: 'Sort by',
                  key: 'sort_modal',
                },
                {
                  name: 'Cuisines',
                  key: 'cuisine_modal',
                },
                {
                  name: 'Rating',
                  key: 'rating_modal',
                },
                {
                  name: 'Cost per person',
                  key: 'cfo_modal',
                },
                {
                  name: 'More filters',
                  key: 'more_filters_modal',
                },
              ],
              verticalTabsValue: {
                sort_modal: [
                  {
                    filterType: 'sort',
                    filterValue: 'popularity_desc',
                    isApplied: true,
                    isDefault: true,
                    postKey: '{"sort":"popularity_desc"}',
                    name: 'Popularity',
                  },
                  {
                    filterType: 'sort',
                    filterValue: 'rating_desc',
                    postKey: '{"sort":"rating_desc"}',
                    name: 'Rating: High to Low',
                  },
                  {
                    filterType: 'sort',
                    filterValue: 'delivery_time_asc',
                    postKey: '{"sort":"delivery_time_asc"}',
                    name: 'Delivery Time',
                  },
                  {
                    filterType: 'sort',
                    filterValue: 'cost_asc',
                    postKey: '{"sort":"cost_asc"}',
                    name: 'Cost: Low to High',
                  },
                  {
                    filterType: 'sort',
                    filterValue: 'cost_desc',
                    postKey: '{"sort":"cost_desc"}',
                    name: 'Cost: High to Low',
                  },
                ],
                cuisine_modal: [
                  {
                    filterType: 'cuisine_id',
                    filterValue: '1',
                    postKey: '{"cuisine_id":[1]}',
                    name: 'American',
                  },
                  {
                    filterType: 'cuisine_id',
                    filterValue: '4',
                    postKey: '{"cuisine_id":[4]}',
                    name: 'Arabian',
                  },
                  {
                    filterType: 'cuisine_id',
                    filterValue: '3',
                    postKey: '{"cuisine_id":[3]}',
                    name: 'Asian',
                  },
                  {
                    filterType: 'cuisine_id',
                    filterValue: '292',
                    postKey: '{"cuisine_id":[292]}',
                    name: 'Awadhi',
                  },
                  {
                    filterType: 'cuisine_id',
                    filterValue: '193',
                    postKey: '{"cuisine_id":[193]}',
                    name: 'BBQ',
                  },
                  {
                    filterType: 'cuisine_id',
                    filterValue: '5',
                    postKey: '{"cuisine_id":[5]}',
                    name: 'Bakery',
                  },
                  {
                    filterType: 'cuisine_id',
                    filterValue: '7',
                    postKey: '{"cuisine_id":[7]}',
                    name: 'Biryani',
                  },
                  {
                    filterType: 'cuisine_id',
                    filterValue: '247',
                    postKey: '{"cuisine_id":[247]}',
                    name: 'Bubble Tea',
                  },
                  {
                    filterType: 'cuisine_id',
                    filterValue: '168',
                    postKey: '{"cuisine_id":[168]}',
                    name: 'Burger',
                  },
                  {
                    filterType: 'cuisine_id',
                    filterValue: '25',
                    postKey: '{"cuisine_id":[25]}',
                    name: 'Chinese',
                  },
                  {
                    filterType: 'cuisine_id',
                    filterValue: '1040',
                    postKey: '{"cuisine_id":[1040]}',
                    name: 'Coffee',
                  },
                  {
                    filterType: 'cuisine_id',
                    filterValue: '35',
                    postKey: '{"cuisine_id":[35]}',
                    name: 'Continental',
                  },
                  {
                    filterType: 'cuisine_id',
                    filterValue: '100',
                    postKey: '{"cuisine_id":[100]}',
                    name: 'Desserts',
                  },
                  {
                    filterType: 'cuisine_id',
                    filterValue: '38',
                    postKey: '{"cuisine_id":[38]}',
                    name: 'European',
                  },
                  {
                    filterType: 'cuisine_id',
                    filterValue: '40',
                    postKey: '{"cuisine_id":[40]}',
                    name: 'Fast Food',
                  },
                  {
                    filterType: 'cuisine_id',
                    filterValue: '271',
                    postKey: '{"cuisine_id":[271]}',
                    name: 'Finger Food',
                  },
                  {
                    filterType: 'cuisine_id',
                    filterValue: '48',
                    postKey: '{"cuisine_id":[48]}',
                    name: 'Gujarati',
                  },
                  {
                    filterType: 'cuisine_id',
                    filterValue: '143',
                    postKey: '{"cuisine_id":[143]}',
                    name: 'Healthy Food',
                  },
                  {
                    filterType: 'cuisine_id',
                    filterValue: '49',
                    postKey: '{"cuisine_id":[49]}',
                    name: 'Hyderabadi',
                  },
                  {
                    filterType: 'cuisine_id',
                    filterValue: '233',
                    postKey: '{"cuisine_id":[233]}',
                    name: 'Ice Cream',
                  },
                  {
                    filterType: 'cuisine_id',
                    filterValue: '55',
                    postKey: '{"cuisine_id":[55]}',
                    name: 'Italian',
                  },
                  {
                    filterType: 'cuisine_id',
                    filterValue: '60',
                    postKey: '{"cuisine_id":[60]}',
                    name: 'Japanese',
                  },
                  {
                    filterType: 'cuisine_id',
                    filterValue: '164',
                    postKey: '{"cuisine_id":[164]}',
                    name: 'Juices',
                  },
                  {
                    filterType: 'cuisine_id',
                    filterValue: '178',
                    postKey: '{"cuisine_id":[178]}',
                    name: 'Kebab',
                  },
                  {
                    filterType: 'cuisine_id',
                    filterValue: '62',
                    postKey: '{"cuisine_id":[62]}',
                    name: 'Kerala',
                  },
                  {
                    filterType: 'cuisine_id',
                    filterValue: '67',
                    postKey: '{"cuisine_id":[67]}',
                    name: 'Korean',
                  },
                  {
                    filterType: 'cuisine_id',
                    filterValue: '66',
                    postKey: '{"cuisine_id":[66]}',
                    name: 'Lebanese',
                  },
                  {
                    filterType: 'cuisine_id',
                    filterValue: '157',
                    postKey: '{"cuisine_id":[157]}',
                    name: 'Lucknowi',
                  },
                  {
                    filterType: 'cuisine_id',
                    filterValue: '102',
                    postKey: '{"cuisine_id":[102]}',
                    name: 'Maharashtrian',
                  },
                  {
                    filterType: 'cuisine_id',
                    filterValue: '70',
                    postKey: '{"cuisine_id":[70]}',
                    name: 'Mediterranean',
                  },
                  {
                    filterType: 'cuisine_id',
                    filterValue: '73',
                    postKey: '{"cuisine_id":[73]}',
                    name: 'Mexican',
                  },
                  {
                    filterType: 'cuisine_id',
                    filterValue: '1041',
                    postKey: '{"cuisine_id":[1041]}',
                    name: 'Mishti',
                  },
                  {
                    filterType: 'cuisine_id',
                    filterValue: '1015',
                    postKey: '{"cuisine_id":[1015]}',
                    name: 'Mithai',
                  },
                  {
                    filterType: 'cuisine_id',
                    filterValue: '1018',
                    postKey: '{"cuisine_id":[1018]}',
                    name: 'Modern Indian',
                  },
                  {
                    filterType: 'cuisine_id',
                    filterValue: '1051',
                    postKey: '{"cuisine_id":[1051]}',
                    name: 'Momos',
                  },
                  {
                    filterType: 'cuisine_id',
                    filterValue: '147',
                    postKey: '{"cuisine_id":[147]}',
                    name: 'Moroccan',
                  },
                  {
                    filterType: 'cuisine_id',
                    filterValue: '75',
                    postKey: '{"cuisine_id":[75]}',
                    name: 'Mughlai',
                  },
                  {
                    filterType: 'cuisine_id',
                    filterValue: '50',
                    postKey: '{"cuisine_id":[50]}',
                    name: 'North Indian',
                  },
                  {
                    filterType: 'cuisine_id',
                    filterValue: '278',
                    postKey: '{"cuisine_id":[278]}',
                    name: 'Oriental',
                  },
                  {
                    filterType: 'cuisine_id',
                    filterValue: '1048',
                    postKey: '{"cuisine_id":[1048]}',
                    name: 'Paan',
                  },
                  {
                    filterType: 'cuisine_id',
                    filterValue: '1068',
                    postKey: '{"cuisine_id":[1068]}',
                    name: 'Pancake',
                  },
                  {
                    filterType: 'cuisine_id',
                    filterValue: '1064',
                    postKey: '{"cuisine_id":[1064]}',
                    name: 'Pasta',
                  },
                  {
                    filterType: 'cuisine_id',
                    filterValue: '82',
                    postKey: '{"cuisine_id":[82]}',
                    name: 'Pizza',
                  },
                  {
                    filterType: 'cuisine_id',
                    filterValue: '88',
                    postKey: '{"cuisine_id":[88]}',
                    name: 'Rajasthani',
                  },
                  {
                    filterType: 'cuisine_id',
                    filterValue: '1005',
                    postKey: '{"cuisine_id":[1005]}',
                    name: 'Roast Chicken',
                  },
                  {
                    filterType: 'cuisine_id',
                    filterValue: '1023',
                    postKey: '{"cuisine_id":[1023]}',
                    name: 'Rolls',
                  },
                  {
                    filterType: 'cuisine_id',
                    filterValue: '998',
                    postKey: '{"cuisine_id":[998]}',
                    name: 'Salad',
                  },
                  {
                    filterType: 'cuisine_id',
                    filterValue: '304',
                    postKey: '{"cuisine_id":[304]}',
                    name: 'Sandwich',
                  },
                  {
                    filterType: 'cuisine_id',
                    filterValue: '83',
                    postKey: '{"cuisine_id":[83]}',
                    name: 'Seafood',
                  },
                  {
                    filterType: 'cuisine_id',
                    filterValue: '1066',
                    postKey: '{"cuisine_id":[1066]}',
                    name: 'Shake',
                  },
                  {
                    filterType: 'cuisine_id',
                    filterValue: '561',
                    postKey: '{"cuisine_id":[561]}',
                    name: 'Shawarma',
                  },
                  {
                    filterType: 'cuisine_id',
                    filterValue: '128',
                    postKey: '{"cuisine_id":[128]}',
                    name: 'Sichuan',
                  },
                  {
                    filterType: 'cuisine_id',
                    filterValue: '85',
                    postKey: '{"cuisine_id":[85]}',
                    name: 'South Indian',
                  },
                  {
                    filterType: 'cuisine_id',
                    filterValue: '177',
                    postKey: '{"cuisine_id":[177]}',
                    name: 'Sushi',
                  },
                  {
                    filterType: 'cuisine_id',
                    filterValue: '163',
                    postKey: '{"cuisine_id":[163]}',
                    name: 'Tea',
                  },
                  {
                    filterType: 'cuisine_id',
                    filterValue: '95',
                    postKey: '{"cuisine_id":[95]}',
                    name: 'Thai',
                  },
                  {
                    filterType: 'cuisine_id',
                    filterValue: '93',
                    postKey: '{"cuisine_id":[93]}',
                    name: 'Tibetan',
                  },
                  {
                    filterType: 'cuisine_id',
                    filterValue: '142',
                    postKey: '{"cuisine_id":[142]}',
                    name: 'Turkish',
                  },
                  {
                    filterType: 'cuisine_id',
                    filterValue: '1067',
                    postKey: '{"cuisine_id":[1067]}',
                    name: 'Waffle',
                  },
                  {
                    filterType: 'cuisine_id',
                    filterValue: '1024',
                    postKey: '{"cuisine_id":[1024]}',
                    name: 'Wraps',
                  },
                ],
                rating_modal: [
                  {
                    filterType: 'rating',
                    filterValue: '5.0',
                    postKey: '{"rating":[5]}',
                  },
                  {
                    filterType: 'rating',
                    filterValue: '4.5',
                    postKey: '{"rating":[4.5]}',
                  },
                  {
                    filterType: 'rating',
                    filterValue: '4.0',
                    postKey: '{"rating":[4]}',
                  },
                  {
                    filterType: 'rating',
                    filterValue: '3.5',
                    postKey: '{"rating":[3.5]}',
                  },
                  {
                    filterType: 'rating',
                    filterValue: '0.0',
                    postKey: '{"rating":[0]}',
                  },
                ],
                cfo_modal: [
                  {
                    filterType: 'cfo',
                    filterValue: '20000000',
                    postKey: '{"cfo":[20000000]}',
                    name: '₹2,00,00,000',
                  },
                  {
                    filterType: 'cfo',
                    filterValue: '600',
                    postKey: '{"cfo":[600]}',
                    name: '₹600',
                  },
                  {
                    filterType: 'cfo',
                    filterValue: '300',
                    postKey: '{"cfo":[300]}',
                    name: '₹300',
                  },
                  {
                    filterType: 'cfo',
                    filterValue: '150',
                    postKey: '{"cfo":[150]}',
                    name: '₹150',
                  },
                  {
                    filterType: 'cfo',
                    filterValue: '0',
                    postKey: '{"cfo":[0]}',
                    name: '₹0',
                  },
                ],
                more_filters_modal: [
                  {
                    filterType: 'has_delivery_offers',
                    filterValue: '1',
                    postKey: '{"has_delivery_offers":1}',
                    name: 'Great Offers',
                  },
                ],
              },
            },
          },
        },
      },
      SECTION_BREADCRUMBS_INFO: [
        {
          title: 'Home',
          url: 'https://www.zomato.com',
        },
        {
          title: 'India',
          url: 'https://www.zomato.com/india',
        },
        {
          title: 'Agra',
          url: 'https://www.zomato.com/agra/restaurants',
        },
        {
          title: 'Cake Restaurants',
          url: '',
        },
      ],
      SECTION_BOTTOM_SHEET: [
        {
          key: 'delivery',
          name: 'Delivery',
          filter: {
            filterType: 'category_sheet',
            filterValue: 'delivery',
            postKey: '{"category_context":"delivery"}',
          },
        },
        {
          key: 'go_out',
          name: 'Go Out',
          filter: {
            filterType: 'category_sheet',
            filterValue: 'go_out',
            postKey: '{"category_context":"go_out"}',
          },
        },
      ],
    },
    trackingDataLogin: {
      googleAdsPayload: {
        mobileProfileIconClick: {
          eventName: 'conversion',
          payload: {
            send_to: 'AW-958674130/gEmzCLCZwfABENLpkMkD',
          },
        },
        loginClick: {
          eventName: 'conversion',
          payload: {
            send_to: 'AW-958674130/MOW8CIO6-uwBENLpkMkD',
          },
        },
        signupClick: {
          eventName: 'conversion',
          payload: {
            send_to: 'AW-958674130/M4gKCJi9-uwBENLpkMkD',
          },
        },
        signupSuccess: {
          eventName: 'conversion',
          payload: {
            send_to: 'AW-958674130/NWiMCPrDne0BENLpkMkD',
          },
        },
      },
    },
  },
  entities: [],
  user: {
    is_admin_user: false,
    admin_access: [],
    admin_links: [],
  },
  location: {
    addressId: 0,
    entityId: 34,
    entityType: 'city',
    locationType: '',
    isOrderLocation: 1,
    cityId: 34,
    latitude: '27.1800000000000000',
    longitude: '78.0200000000000000',
    userDefinedLatitude: 27.18,
    userDefinedLongitude: 78.02,
    entityName: 'Agra',
    orderLocationName: 'Agra',
    cityName: 'Agra',
    countryId: 1,
    countryName: 'India',
    displayTitle: 'Agra',
    o2Serviceable: true,
    placeId: '14225',
    cellId: '4140058016516931584',
    deliverySubzoneId: 14225,
    placeType: 'DSZ',
    placeName: 'Agra',
    isO2City: true,
    fetchFromGoogle: false,
    fetchedFromCookie: true,
    locationPrompt: [],
    isO2OnlyCity: false,
    addressBlocker: 0,
    address_template: [],
    otherRestaurantsUrl: '',
  },
  shouldAddTaboolaScript: false,
  deviceSpecificInfo: {
    browser: {
      userAgent:
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36',
      name: 'Chrome',
      version: '109.0.0.0',
      platform: 'windows',
    },
  },
  hrefLangInfo: [
    {
      link: 'https://www.zomato.com/webroutes/getPage?page_url=/agra/restaurants?place_name=Agra&amp;dishv2_id=39212&amp;location=&amp;isMobile=0',
      hreflang: 'en',
      isSelected: true,
    },
    {
      link: 'https://www.zomato.com/tr/webroutes/getPage?page_url=/agra/restaurants?place_name=Agra&amp;dishv2_id=39212&amp;location=&amp;isMobile=0',
      hreflang: 'tr',
      isSelected: false,
    },
    {
      link: 'https://www.zomato.com/hi/webroutes/getPage?page_url=/agra/restaurants?place_name=Agra&amp;dishv2_id=39212&amp;location=&amp;isMobile=0',
      hreflang: 'hi',
      isSelected: false,
    },
    {
      link: 'https://www.zomato.com/es/webroutes/getPage?page_url=/agra/restaurants?place_name=Agra&amp;dishv2_id=39212&amp;location=&amp;isMobile=0',
      hreflang: 'es',
      isSelected: false,
    },
    {
      link: 'https://www.zomato.com/pt/webroutes/getPage?page_url=/agra/restaurants?place_name=Agra&amp;dishv2_id=39212&amp;location=&amp;isMobile=0',
      hreflang: 'pt',
      isSelected: false,
    },
    {
      link: 'https://www.zomato.com/id/webroutes/getPage?page_url=/agra/restaurants?place_name=Agra&amp;dishv2_id=39212&amp;location=&amp;isMobile=0',
      hreflang: 'id',
      isSelected: false,
    },
    {
      link: 'https://www.zomato.com/pt/webroutes/getPage?page_url=/agra/restaurants?place_name=Agra&amp;dishv2_id=39212&amp;location=&amp;isMobile=0',
      hreflang: 'pt',
      isSelected: false,
    },
    {
      link: 'https://www.zomato.com/es/webroutes/getPage?page_url=/agra/restaurants?place_name=Agra&amp;dishv2_id=39212&amp;location=&amp;isMobile=0',
      hreflang: 'es',
      isSelected: false,
    },
    {
      link: 'https://www.zomato.com/cs/webroutes/getPage?page_url=/agra/restaurants?place_name=Agra&amp;dishv2_id=39212&amp;location=&amp;isMobile=0',
      hreflang: 'cs',
      isSelected: false,
    },
    {
      link: 'https://www.zomato.com/sk/webroutes/getPage?page_url=/agra/restaurants?place_name=Agra&amp;dishv2_id=39212&amp;location=&amp;isMobile=0',
      hreflang: 'sk',
      isSelected: false,
    },
    {
      link: 'https://www.zomato.com/pl/webroutes/getPage?page_url=/agra/restaurants?place_name=Agra&amp;dishv2_id=39212&amp;location=&amp;isMobile=0',
      hreflang: 'pl',
      isSelected: false,
    },
    {
      link: 'https://www.zomato.com/it/webroutes/getPage?page_url=/agra/restaurants?place_name=Agra&amp;dishv2_id=39212&amp;location=&amp;isMobile=0',
      hreflang: 'it',
      isSelected: false,
    },
    {
      link: 'https://www.zomato.com/vi/webroutes/getPage?page_url=/agra/restaurants?place_name=Agra&amp;dishv2_id=39212&amp;location=&amp;isMobile=0',
      hreflang: 'vi',
      isSelected: false,
    },
    {
      link: 'https://www.zomato.com/bn/webroutes/getPage?page_url=/agra/restaurants?place_name=Agra&amp;dishv2_id=39212&amp;location=&amp;isMobile=0',
      hreflang: 'bn',
      isSelected: false,
    },
    {
      link: 'https://www.zomato.com/te/webroutes/getPage?page_url=/agra/restaurants?place_name=Agra&amp;dishv2_id=39212&amp;location=&amp;isMobile=0',
      hreflang: 'te',
      isSelected: false,
    },
    {
      link: 'https://www.zomato.com/ta/webroutes/getPage?page_url=/agra/restaurants?place_name=Agra&amp;dishv2_id=39212&amp;location=&amp;isMobile=0',
      hreflang: 'ta',
      isSelected: false,
    },
    {
      link: 'https://www.zomato.com/kn/webroutes/getPage?page_url=/agra/restaurants?place_name=Agra&amp;dishv2_id=39212&amp;location=&amp;isMobile=0',
      hreflang: 'kn',
      isSelected: false,
    },
    {
      link: 'https://www.zomato.com/mr/webroutes/getPage?page_url=/agra/restaurants?place_name=Agra&amp;dishv2_id=39212&amp;location=&amp;isMobile=0',
      hreflang: 'mr',
      isSelected: false,
    },
    {
      link: 'https://www.zomato.com/gu/webroutes/getPage?page_url=/agra/restaurants?place_name=Agra&amp;dishv2_id=39212&amp;location=&amp;isMobile=0',
      hreflang: 'gu',
      isSelected: false,
    },
    {
      link: 'https://www.zomato.com/pa/webroutes/getPage?page_url=/agra/restaurants?place_name=Agra&amp;dishv2_id=39212&amp;location=&amp;isMobile=0',
      hreflang: 'pa',
      isSelected: false,
    },
    {
      link: 'https://www.zomato.com/ml/webroutes/getPage?page_url=/agra/restaurants?place_name=Agra&amp;dishv2_id=39212&amp;location=&amp;isMobile=0',
      hreflang: 'ml',
      isSelected: false,
    },
    {
      link: 'https://www.zomato.com/or/webroutes/getPage?page_url=/agra/restaurants?place_name=Agra&amp;dishv2_id=39212&amp;location=&amp;isMobile=0',
      hreflang: 'or',
      isSelected: false,
    },
  ],
  pageConfig: {
    showLocationBannerAutoPopup: false,
    locationBannerAutoDetectLoc: true,
    locationBannerDisableClose: false,
    showNewCityPage: false,
    showNewHeader: true,
    cacheMeta: {
      cacheable: false,
      'max-age': 172800,
      trackingData: {
        identifier: '34',
      },
    },
    hideCookieBanner: true,
    showRatingV2: true,
  },
  langKeys: {
    SEARCH_HERE: 'Search here',
    FILTERS: 'Filters',
    APPLY: 'Apply',
    ERROR_LOAD_SEARCH_RESULTS: 'Failed to load search results',
    ANY: 'Any',
    MINIMUM_COST: 'Minimum Cost',
    MAXIMUM_COST: 'Maximum Cost',
    COST_FOR_TWO: 'Cost for two',
    COST_PER_PERSON: 'Cost per person',
    RATING: 'Rating',
    NO_RESULT_TEXT:
      "Sorry! We couldn't find any results. Please try again with fewer filters",
    BACK_TO_HOME: 'Back to home',
    CLEAR_ALL: 'Clear all',
    RETRY_LOADING_BUTTON_CAPTION: 'Retry Loading',
    CHOOSE_ONE: 'Choose one',
    OPEN_APP_MODAL_TITLE: 'Open this page in the App',
    OPEN_APP_MODAL_DESCRIPTION:
      'Switch to the app for more offers, live order tracking and more.',
    OPEN_APP_MODAL_CLICK_ACTION_TEXT: 'Use the App',
    OPEN_APP_MODAL_CLOSE_ACTION_TEXT: 'Not Now',
    USE_APP_TEXT: 'Use App',
    VIEW_ALL_RESTAURANTS: 'Explore other restaurants',
    NO_RESULTS_FOUND: 'Sorry, no results found',
    EMPTY_STATE_DELIVERY:
      'No restaurants deliver to your current location at this time',
    EMPTY_STATE_TAKEAWAY:
      'No pickup restaurants available for your current location at this time',
    EMPTY_STATE_FILTERS_APPLIED: 'Try again with fewer filters',
    END_OF_SEARCH_TEXT: 'End of search results',
    END_OF_SEARCH_SUBTEXT: 'Explore more popular restaurants below',
    NO_SEARCH_RESULT_FOUND:
      'We could not understand what you mean, try rephrasing the query.',
    TRENDING_SEARCHES: 'Trending Searches',
    NO_TRENDING_SEARCH: 'No results found for Trending Searches',
    TOP_RESTAURANTS: 'Top Restaurants',
    SEARCH_PLACEHOLDER: 'Search for restaurant, cuisine or a dish',
    DETECT_LOCATION: 'Detect current location',
    DETECT_LOCATION_SUBTITLE: 'Using GPS',
    ADD_ADDRESS: 'Add address',
    SAVED_ADDRESSES: 'Saved Addresses',
    POPULAR_LOCATIONS: 'Popular Locations',
    LOCATION_NO_RESULT_SUB:
      'Check for spelling errors or search for a nearby location',
    LOCATION_NO_RESULT: 'No results found',
    SEARCH_MODAL_MOBILE_VIEW_TITLE: 'Select location',
    GEO_LOCATION_NO_BROWSER_SUPPORT:
      'Seems like, Your browser does not support Geolocation.',
    GEO_LOCATION_PERMISSION_DENIED:
      'Please enable location permission from settings and try again!',
    GEO_LOCATION_POSITION_UNAVAILABLE:
      "We can't locate your position, please try again!",
    GEO_LOCATION_TIMEOUT: 'Request for location has timed out!',
    GEO_LOCATION_UNKNOWN_ERROR: 'An unknown error occurred, Please try again!',
    GEO_LOCATION_DEFAULT_ERROR: 'An unknown error occurred, Please try again!',
    PROFILE_LINK_NAME: 'Profile',
    NOTIFICATIONS_LINK_NAME: 'Notifications',
    BOOKMARKS_LINK_NAME: 'Bookmarks',
    REVIEWS_LINK_NAME: 'Reviews',
    NETWORK_LINK_NAME: 'Network',
    FIND_FRIENDS_LINK_NAME: 'Find friends',
    SETTINGS_LINK_NAME: 'Settings',
    LOGOUT_LINK_NAME: 'Log out',
    LOGIN_FAILED_TITLE: 'Login Failed',
    SIGNUP_FAILED_TITLE: 'Signup Failed',
    OTP_VERIFICATION_TITLE: 'Enter OTP',
    LOGIN_TITLE: 'Log in',
    SIGNUP_TITLE: 'Sign up',
    SIGNUP_NAME_ERROR_MESSAGE: 'Please enter a valid name',
    SIGNUP_EMPTY_EMAIL_ERROR_MESSAGE: 'Please enter an email',
    SIGNUP_INVALID_EMAIL_ERROR_MESSAGE: 'Invalid Email id',
    SIGNUP_PHONE_ERROR_MESSAGE: 'Please enter phone number',
    SIGNUP_FULL_NAME_LABEL: 'Full Name',
    SIGNUP_EMAIL_LABEL: 'Email',
    SIGNUP_PHONE_LABEL: 'Phone number',
    TERMS_OF_SERVICE_TEXT: 'Terms of Service',
    PRIVACY_POLICY_TEXT: 'Privacy Policy',
    CONTENT_POLICIES: 'Content Policies',
    AGREE_TO_ZOMATO_POLICY_TEXT: "I agree to Zomato's {0}, {1} and {2}",
    CREATE_ACCOUNT_BUTTON_TEXT: 'Create account',
    ALREADY_HAVE_AN_ACCOUNT_TEXT: 'Already have an account? {0}',
    LOGIN_WITH_PHONE_ERROR:
      'Login with Phone number is not currently available',
    NEW_TO_ZOMATO_TEXT: 'New to Zomato?',
    SEND_OTP_TEXT: 'Send OTP',
    ERROR_MESSAAGE_BOX_TRY_OTHER_METHODS_TEXT: 'Try using other methods',
    ERROR_MESSAAGE_BOX_SKIP_FOR_NOW_TEXT: 'Skip for now',
    NEW_OTP_HAS_BEEN_SENT_TEXT: 'A new OTP has been sent',
    NOT_RECEIVED_OTP_TEXT: "Didn't receive OTP?",
    RESEND_NOW_TEXT: 'Resend Now',
    TERMINATE_VERIFICATION_TEXT:
      'Are you sure you want to terminate the verification?',
    YES_BUTTON_TEXT: 'Yes',
    NO_BUTTON_TEXT: 'No',
    CONTINUE_WITH_GOOGLE_BUTTON_TEXT: 'Continue with Google',
    ERROR_OCCURED_TEXT: 'Error occurred',
    OR_TEXT: 'or',
    OTP_TEXT_BOX_LABEL: 'OTP',
    OTP_TEXT_BOX_PROCEED_BUTTON: 'Proceed',
    OTP_NOT_RECEIVED_TEXT: 'Not received OTP? ',
    COOKIE_BANNER_TEXT:
      "By using this site you agree to Zomato&apos;s use of cookies to give you a personalised experience. Please read the <a href='/cookiepolicy' target='_blank'> cookie policy </a> for more information or to delete/block them.",
  },
};

const row = document.getElementById('row');
const restaurantInfo = zomato.page_data.sections.SECTION_SEARCH_RESULT;

restaurantInfo.forEach((obj) => {
  let restaurantName = obj.info.name;
  let restaurantImage = obj.info.image.url;
  let restaurantRating = obj.info.rating.aggregate_rating;
  const ratingColor = (rating) =>
    rating >= 4 ? 'success' : rating <= 3.9 ? 'warning' : 'danger';
  row.innerHTML += ` <div class="col-4">
  <div class="card mb-3">
    <img src="${restaurantImage}" class="img card-img-center"/>
    <div class="card-body">
      <h5 class="card-title">${restaurantName}</h5>
      <p>Rating: <span class="text-${ratingColor(
        restaurantRating
      )}">${restaurantRating}</span></p>
    </div>
  </div>
</div>`;
});

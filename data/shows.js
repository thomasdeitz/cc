const shows = [
  /***** v 2021 v *****/
  {
    datetime: "2021-12-10T19:45",
    venue: "Thirsty Bird Saloon",
    location: "Oconomowoc, WI"
  },
  {
    datetime: "2021-12-04T19:45",
    venue: "Thirsty Bird Saloon",
    location: "Oconomowoc, WI",
    notes: 'w/ Retrosonic'
  },
  {
    datetime: "2021-12-04T13:00",
    venue: "Washington County Humane Society - Festival of Trees",
    location: "Slinger, WI",
  },
  {
    datetime: "2021-11-26T18:00",
    venue: "Vino Etc.",
    location: "Oconomowoc, WI"
  },
  {
    datetime: "2021-11-27T19:00",
    venue: "The Etcetera",
    location: "Oconomowoc, WI",
  },
  {
    datetime: "2021-10-23T08:00",
    venue: "West Bend Farmers Market - The Antidote",
    location: "West Bend, WI",
  },
  {
    datetime: "2021-10-17T10:30",
    venue: "M & T's Gibbsville Orchard - Hallo-Apple-Ween Festival",
    location: "Sheboygan Falls, WI"
  },
  {
    datetime: "2021-10-15T20:00",
    venue: "The Back Bar",
    location: "Janesville, WI",
    notes: 'w/ The Other LA, Solar, & Common Threads'
  },
  {
    datetime: "2021-10-12T18:30",
    venue: "the BCKYRD",
    location: "Fitchburg, WI",
    notes: 'w/ Jeffrey Dallet, & The Lonesome Cobras'
  },
  {
    datetime: "2021-10-09T19:45",
    venue: "Thirsty Bird Saloon",
    location: "Oconomowoc, WI",
    notes: 'w/ Dirty Boogie'
  },
  {
    datetime: "2021-09-24T18:00",
    venue: "Wide Open Wisconsin - Washington County Fair Park",
    location: "West Bend, WI",
  },
  {
    datetime: "2021-09-25T11:00",
    venue: "Wide Open Wisconsin - Washington County Fair Park",
    location: "West Bend, WI",
  },
  {
    datetime: "2021-09-18T06:30",
    venue: "The Hive Taproom",
    location: "East Troy, WI",
    notes: 'w/ Indigo Canyon'
  },
  {
    datetime: "2021-09-18T12:00",
    venue: "Recovery Month Picnic - Grandview Park",
    location: "Waukesha, WI",
  },
  {
    datetime: "2021-09-11T13:00",
    venue: "Fall Fest - Oconomowoc",
    location: "Oconomowoc, WI"
  },
  {
    datetime: "2021-09-05T10:00",
    venue: "Wheels on Main - The Antidote",
    location: "West Bend, WI",
  },
  {
    datetime: "2021-09-04T12:00",
    venue: "Oconomowoc Skatepark - Grand Opening Celebration",
    location: "Oconomowoc, WI"
  },
  {
    datetime: "2021-08-28T18:30",
    venue: "Private Event",
    location: "Oconomowoc, WI",
  },
  {
    datetime: "2021-08-28T08:00",
    venue: "West Bend Farmers Market - Old Settlers Park",
    location: "West Bend, WI",
  },
  {
    datetime: "2021-08-05T16:00",
    venue: "One Barrel Brewing",
    location: "Egg Harbor - Door County, WI"
  },
  {
    datetime: "2021-08-04T17:00 Wed, Aug 4, 2021 @ 5 PM",
    venue: "Sister Bay Performance Pavilion - Concert in the Park",
    location: "Sister Bay - Door County, WI",
    notes: "w/ Unity The Band"
  },
  {
    datetime: "2021-07-31T08:00",
    venue: "West Bend Farmers Market - The Antidote",
    location: "West Bend, WI",
  },
  {
    datetime: "2021-07-30T19:00",
    venue: "Lac La Belle Band Shell - Bands at the Beach",
    location: "Oconomowoc, WI",
    notes: "w/ 5 Card Studs",
  },
  {
    datetime: "2021-07-03T12:00",
    venue: "Okauchee Lions Park - Okauchee Lake Music Festival",
    location: "Okauchee, WI",
  },
  {
    datetime: "2021-06-18T18:30",
    venue: "EP Release Party - Private Event",
    location: "Oconomowoc, WI",
  },
  /***** ^ 2021 ^ v 2022 v *****/
  {
    datetime: "2022-01-08T18:00",
    venue: "Woods Liquor Landing",
    location: "Randolph, WI",
    notes: 'w/ Sammy Ray'
  },
  {
    datetime: "2022-01-14T19:00",
    venue: "The Etcetera",
    location: "Oconomowoc, WI",
  },
  {
    datetime: "2022-01-22T13:00",
    venue: "West Bend Winter Warm-up - Old Settlers Park",
    location: "West Bend, WI",
  },
  {
    datetime: "2022-01-28T19:45",
    venue: "Thirsty Bird Saloon",
    location: "Oconomowoc, WI"
  },
  {
    datetime: "2022-01-29T14:00",
    venue: "The Etcetera - Chili Fest",
    location: "Oconomowoc, WI"
  },
  {
    datetime: "2022-02-11T19:00",
    venue: "The Etcetera",
    location: "Oconomowoc, WI",
  },
  {
    datetime: "2022-02-12T12:00",
    venue: "Private Event",
    location: "Oconomowoc, WI" 
  },
  {
    datetime: "2022-02-12T20:00",
    venue: "Mad Steintist",
    location: "Waukesha, WI",
    notes: 'w/ Dropbear Collective, HoneyFingers, & Nick Bacardi and The Rum Runners' 
  },
  {
    datetime: "2022-02-19T20:00",
    venue: "Traditions Pub",
    location: "Fillmore, WI"
  },
  {
    datetime: "2022-03-04T19:00",
    venue: "Henny's DugOut",
    location: "Lanon, WI",
  },
  {
    datetime: "2022-03-11T19:00",
    venue: "The Etcetera",
    location: "Oconomowoc, WI",
  },
  {
    datetime: "2022-04-01T19:30",
    venue: "Thirsty Bird Saloon",
    location: "Oconomowoc, WI"
  },
  {
    datetime: "2022-04-02T18:30",
    venue: "The Guitar For Life Cafe",
    location: "Waukesha, WI",
    notes: "w/ Louis Walker"
  },
  {
    datetime: "2022-04-08T20:00",
    venue: "The Etcetera",
    location: "Oconomowoc, WI",
  },
  {
    datetime: "2022-04-09T20:00",
    venue: "D & J's Sports Bar & Grill",
    location: "Watertown, WI",
    notes: 'w/ Sammy Ray'
  },
  {
    datetime: "2022-04-16T18:00",
    venue: "Vino Etc",
    location: "Oconomowoc, WI",
  },
  {
    datetime: "2022-04-22T17:00",
    venue: "The Pyramid Event Venue",
    location: "Lake Mills, WI",
    notes: 'w/ Jake WIlliams'
  },
  {
    datetime: "2022-04-23T20:00",
    venue: "Traditions Pub",
    location: "Fillmore, WI"
  },
  {
    datetime: "2022-04-28T17:00",
    venue: "Kranky's - Bike Night",
    location: "Pewaukee, WI",
    notes: "w/ John Gay"
  },
  {
    datetime: "2022-04-30T20:00",
    venue: "The Back Bar",
    location: "Janesville, WI",
    notes: "w/ The Rumours, Un-Broken, Let Fate Decide & Mickey Magnum"
  },
  {
    datetime: "2022-05-05T17:00",
    venue: "Kranky's - Bike Night",
    location: "Pewaukee, WI",
    notes: "w/ Jay Matthes"
  },
  {
    datetime: "2022-05-07T11:00",
    venue: "Midwest Mom Fest - Old Settlers Park",
    location: "West Bend, WI",
  },
  {
    datetime: "2022-05-13T19:31",
    venue: "The Etcetera",
    location: "Oconomowoc, WI",
  },
  {
    datetime: "2022-05-15T15:00",
    venue: "Dundee's Roadhouse and Live Music",
    location: "Dundee, WI",
    notes: "w/ Sammy Ray & Friends"
  },
  {
    datetime: "2022-05-19T17:00",
    venue: "Bike Night at Boozhag's Clubhouse",
    location: "Nashotah, WI",
    notes: "w/ Dan Lepien"
  },
  {
    datetime: "2022-05-20T20:00",
    venue: "Boozhag's Clubhouse",
    location: "Nashotah, WI"
  },
  {
    datetime: "2022-05-21T19:00",
    venue: "Henny's DugOut",
    location: "Lanon, WI",
  },
  {
    datetime: "2022-05-28T08:00",
    venue: "West Bend Farmers Market - Old Settlers Gazebo",
    location: "West Bend, WI",
  },
  {
    datetime: "2022-06-02T17:00",
    venue: "Bike Night at Boozhag's Clubhouse",
    location: "Nashotah, WI",
    notes: "w/ Rogue"
  },
  {
    datetime: "2022-06-03T18:00",
    venue: "Wisconsin Brewing Company",
    location: "Verona, WI",
  },
  {
    datetime: "2022-06-04T20:00",
    venue: "Traditions Pub",
    location: "Fillmore, WI"
  },
  {
    datetime: "2022-06-05T14:00",
    venue: "Mary's Caddyshack",
    location: "New Berlin, WI"
  },
  {
      datetime: "2022-06-10T19:30",
      venue: "Camp Northern Lights",
      location: "Campbellsport, WI"
  },
  {
    datetime: "2022-06-12T16:30",
    venue: "Mainstreet Music - Main Street Blues Jam",
    location: "Brooklynn, WI",
    notes: "w/ the BA Band Featuring Candy Cigarette"
  },
  {
    datetime: "2022-06-15T17:00",
    venue: "Hot Rod Car Show at Boozhag's Clubhouse",
    location: "Nashotah, WI"
  },
  {
    datetime: "2022-06-17T17:00",
    venue: "Private Party",
    location: "Okauchee, WI",
  },
  {
    datetime: "2022-06-18T08:00",
    venue: "West Bend Farmers Market - Antidote",
    location: "West Bend, WI",
  },
  {
    datetime: "2022-06-19T16:00",
    venue: "the baaree - Father's Day",
    location: "Thiensville, WI"
  },
  {
    datetime: "2022-06-24T00:00",
    venue: "Blues From The Top Music Festival",
    location: "Winter Park, CO",
  },
  {
    datetime: "2022-06-30T17:00",
    venue: "Bike Night at Boozhag's Clubhouse",
    location: "Nashotah, WI"
  },
  {
    datetime: "2022-07-02T12:00",
    venue: "Summerfest - The 2nd Floor Stage",
    location: "Milwaukee, WI",
  },
  {
    datetime: "2022-07-03T15:30",
    venue: "Private Party",
    location: "Dousman, WI",
  },
  {
    datetime: "2022-07-13T18:00",
    venue: "Red Rooster",
    location: "Madison, WI",
    notes: "w/ Tommy Bentz"
  },
  {
    datetime: "2022-07-14T17:00",
    venue: "Bike Night at Boozhag's Clubhouse",
    location: "Nashotah, WI",
    notes: "w/ Ira Deboer"
  },
  {
    datetime: "2022-07-16T08:00",
    venue: "West Bend Farmers Market - Old Settlers Gazebo",
    location: "West Bend, WI",
  },
  {
    datetime: "2022-07-16T17:30",
    venue: "6th Annual ORA/Pink Heals Charity Ride - Okauchee Lions Park",
    location: "Okauchee, WI",
  },
  {
    datetime: "2022-07-19T11:00",
    venue: "Thiensville Village Market",
    location: "Thiensville, WI",
  },
  {
    datetime: "2022-07-20T15:00",
    venue: "Waukesha County Fair",
    location: "Waukesha, WI",
  },
  {
    datetime: "2022-07-21T17:00",
    venue: "Bike Night at Boozhag's Clubhouse",
    location: "Nashotah, WI",
    notes: "w/ Chasing Denver"
  },
  {
    datetime: "2022-07-23T14:00",
    venue: "Daily Taco & Cantina - Cheelabration - 3:30, 5:30, 7:30, & 9:30 PM",
    location: "Thiensville, WI",
    notes: 'w/ Buffalo Gospel, Reverend Raven and the Chain Smokin\' Altar Boys feat. Westside Andy, Maple Road Blues Band, & Mississippi Leg Hounds'
  },
  {
    datetime: "2022-07-24T12:00",
    venue: "Crawfish Junction",
    location: "Johnson Creek, WI",
    notes: 'w/ The Roadhouse Chiefs'
  },
  {
    datetime: "2022-07-29T19:00",
    venue: "Henny's DugOut",
    location: "Lanon, WI",
  },
  {
    datetime: "2022-07-30T16:00",
    venue: "Private Party",
    location: "West Bend, WI",
  },
  {
    datetime: "2022-07-31T14:20",
    venue: "Washington County Fair - Why Go By Stage",
    location: "West Bend, WI"
  },
  {
    datetime: "2022-08-03T09:30",
    venue: "Camp Good Times",
    location: "Waukesha, WI"
  },
  {
    datetime: "2022-08-03T16:30",
    venue: "Sister Bay Performance Pavilion - Concert in the Park",
    location: "Sister Bay, WI",
    notes: 'w/ Unity The Band'
  },
  {
    datetime: "2022-08-06T08:00",
    venue: "West Bend Farmers Market - Antidote",
    location: "West Bend, WI",
  },
  {
    datetime: "2022-08-09T13:00",
    venue: "State Fair - Saz's BBQ Stage",
    location: "West Allis, WI",
    notes: 'w/ Sammy Ray'
  },
  {
    datetime: "2022-08-10T11:00",
    venue: "State Fair - Knucklehead Stage",
    location: "West Allis, WI",
  },
  {
    datetime: "2022-08-11T17:00",
    venue: "Bike Night at Boozhag's Clubhouse",
    location: "Nashotah, WI",
  },
  {
    datetime: "2022-08-13T13:00",
    venue: "One Barrel Brewing",
    location: "Egg Harbor, WI ",
  },
  {
    datetime: "2022-08-14T15:00",
    venue: "North Lake Bear Trap",
    location: "Hartland, WI ",
  },
  {
    datetime: "2022-08-18T17:00",
    venue: "Bike Night at Boozhag's Clubhouse",
    location: "Nashotah, WI",
    notes: 'w/ Two Dragons'
  },
  {
    datetime: "2022-08-21T16:00",
    venue: "the baaree",
    location: "Thiensville, WI"
  },
  {
    datetime: "2022-08-24T18:00",
    venue: "Kim's Pizza - Woodfire Wednesdays",
    location: "Stone Bank, WI"
  },
  {
    datetime: "2022-08-27T12:00",
    venue: "The Antidote",
    location: "West Bend, WI"
  },
  {
    datetime: "2022-09-01T18:00",
    venue: "Bike Night at Boozhag's Clubhouse",
    location: "Nashotah, WI",
  },
  {
    datetime: "2022-09-05T12:30",
    venue: "Hagfest at Boozhag's Clubhouse",
    location: "Nashotah, WI",
  },
  {
    datetime: "2022-09-08T17:00",
    venue: "Bike Night at Boozhag's Clubhouse",
    location: "Nashotah, WI",
    notes: "w/ Rogue"
  },
  {
    datetime: "2022-09-10T08:00",
    venue: "West Bend Farmers Market - Old Settlers Gazebo",
    location: "West Bend, WI",
  }, 
  {
    datetime: "2022-09-10T14:30",
    venue: "11th Annual Fall Festival",
    location: "Oconomowoc, WI",
  },
  {
    datetime: "2022-09-10T18:30",
    venue: "Martifest",
    location: "Oconomowoc, WI"
  },
  //{
    //datetime: "2022-09-15T17:00",
    //venue: "Interstate Music",
    //location: "Butler, WI",
    //notes: "w/ Kristine Kabbes & The Skallywags"
  //},
  {
    datetime: "2022-09-17T11:30",
    venue: "SOFA Softball Tournament - Banting Park",
    location: "Waukesha, WI",
  },
  {
    datetime: "2022-09-17T17:00",
    venue: "Wine Walk & Brew Fest",
    location: "Delafield, WI",
  },
  {
    datetime: "2022-09-24T12:00",
    venue: "The Antidote",
    location: "West Bend, WI"
  },
  {
    datetime: "2022-09-24T15:00",
    venue: "Wide Open Wisconsin",
    location: "West Bend, WI"
  },
  {
    datetime: "2022-10-01T08:00",
    venue: "West Bend Farmers Market - Old Settlers Gazebo",
    location: "West Bend, WI",
  },
  {
    datetime: "2022-10-01T15:00",
    venue: "An Afternoon in the Park - Regner Park",
    location: "West Bend, WI",
    notes: "w/ Batteries Not Included"
  },
  {
    datetime: "2022-10-08T20:00",
    venue: "Heileman's",
    location: "West Bend, WI",
  },
  {
    datetime: "2022-10-15T11:00",
    venue: "Rux Stadium - National Anthem",
    location: "Oconomowoc, WI",
  },
  {
    datetime: "2022-10-15T15:00",
    venue: "Hubbleton Brewing Taproom & Grill",
    location: "Watertown, WI"
  },
  {
    datetime: "2022-10-16T12:00",
    venue: "M & T's Gibbsville Orchard - Hallo-Apple-Ween Festival",
    location: "Sheboygan Falls, WI"
  },
  {
    datetime: "2022-10-22T11:00",
    venue: "Benefit 4 Mike, Jen & Kenny - Boozhag's Clubhouse",
    location: "Nashotah, WI"
  },
  {
    datetime: "2022-10-22T16:00",
    venue: "Private Party",
    location: "West Bend, WI"
  },
  {
    datetime: "2022-10-23T13:00",
    venue: "Boondocks Bbq & Brew",
    location: "Oconomowoc, WI"
  },
  {
    datetime: "2022-10-29T08:00",
    venue: "West Bend Farmers Market - Antidote",
    location: "West Bend, WI",
  },
  {
    datetime: "2022-11-11T19:00",
    venue: "Henny's DugOut",
    location: "Lanon, WI",
  },
  {
    datetime: "2022-11-20T12:00",
    venue: "Bilda's Friess Lake Pub",
    location: "Hubertus, WI"
  },
  {
    datetime: "2022-12-04T13:00",
    venue: "Washington County Humane Society - Festival of Trees",
    location: "Slinger, WI",
    notes: "Isaac & Lucas"
  },
  {
    datetime: "2022-12-10T16:00",
    venue: "Private Party",
    location: "Nashotah, WI",
    notes: "Isaac & Lucas"
  },
  {
    datetime: "2022-12-14T17:00",
    venue: "A+ Power Sports - Annual Customer Appreciation Holiday Party",
    location: "Elkhorn, WI",
    notes: "Isaac & Lucas"
  },
  {
    datetime: "2022-12-20T17:00",
    venue: "Bilda's Friess Lake Pub",
    location: "Hubertus, WI",
    notes: "Isaac & Lucas"
  },
  {
    datetime: "2022-12-30T19:00",
    venue: "Henny's DugOut",
    location: "Lanon, WI",
  },
  /***** ^ 2022 ^ v 2023 v *****/
  {
    datetime: "2023-01-06T18:00",
    venue: "West Bend Moose Lodge",
    location: "West Bend, WI",
    notes: "Isaac & Lucas"
  },
  {
    datetime: "2023-01-13T18:00",
    venue: "Wisconsin Brewing Company",
    location: "Verona, WI",
    notes: "Isaac & Lucas"
  },
  {
    datetime: "2023-01-14T18:00",
    venue: "Miramar Theatre - New Year Kick Off",
    location: "Milwaukee, WI"
  },
  {
    datetime: "2023-01-18T18:30",
    venue: "Red Rooster",
    location: "Madison, WI"
  },
  {
    datetime: "2023-01-21T12:00",
    venue: "Regner Park - Winter Warm Up Fat Bike Race",
    location: "West Bend, WI",
    notes: "Hugh Jass Extra Credit"
  },
  {
    datetime: "2023-01-27T17:00",
    venue: "Lilliput Records",
    location: "Milwaukee, WI"
  },
  {
    datetime: "2023-01-28T17:00",
    venue: "Miramar Theatre",
    location: "Milwaukee, WI",
    notes: "Supporting Jared James Nichols & Bourbon House"
  },
  {
    datetime: "2023-02-04T19:00",
    venue: "Henny's DugOut",
    location: "Lanon, WI",
  },
  {
    datetime: "2023-02-11T19:00",
    venue: "The Other Bar",
    location: "Dousman, WI",
    notes: "Isaac & Lucas"
  },
  {
    datetime: "2023-02-17T18:30",
    venue: "Big Turn Music Festival - Mandy's Coffee & Cafe",
    location: "Red Wing, MN"
  },
  {
    datetime: "2023-02-25T20:00",
    venue: "Thirsty Bird Saloon",
    location: "Oconomowoc, WI",
    notes: "Isaac & Lucas"
  },
  {
    datetime: "2023-03-01T18:00",
    venue: "IndieTuneUp",
    location: "Fitchburg, WI",
    notes: "w/ TSG: AP! & Ella Loup"
  },
  {
    datetime: "2023-03-04T14:30",
    venue: "Daily Taco & Cantina - Tune into Happy Hour",
    location: "Thiensville, WI",
    notes: "Isaac & Lucas"
  },
  {
    datetime: "2023-03-17T19:00",
    venue: "Main Street Music",
    location: "Brooklyn, WI",
    notes: "Supporting The Katie Scullin Band"
  },
  {
    datetime: "2023-04-15T19:00",
    venue: "Henny's DugOut",
    location: "Sussex, WI"
  },
  {
    datetime: "2023-04-19T19:00",
    venue: "Red Rooster",
    location: "Madison, WI"
  },
  {
    datetime: "2023-04-22T16:00",
    venue: "Private Party",
    location: "Helenville, WI",
  },
  {
    datetime: "2023-04-28T16:30",
    venue: "Private Party",
    location: "Milwaukee, WI",
    notes: "Isaac & Lucas"
  },
  {
    datetime: "2023-04-29T16:00",
    venue: "The Drafty Cellar",
    location: "Watertown, WI",
  },
  {
    datetime: "2023-05-06T20:00",
    venue: "Rustic Woods Campground Bar",
    location: "Waupaca, WI"
  },
  {
    datetime: "2023-05-13T17:00",
     venue: "Studio 301",
     location: "Portage, WI",
     notes: "w/ Ginseng & The Coves"
  },
  {
    datetime: "2023-05-19T14:00",
    venue: "Jam for Jam - The Barrel Inn",
    location: "Marshall, WI"
  },
  {
    datetime: "2023-05-20T15:00",
    venue: "St. Kilian FunFest - Hartford Town Hall",
    location: "Hartford, WI"
  },
  {
    datetime: "2023-05-21T12:00",
    venue: "HomeGrown Blues Festival - Foundry 45",
    location: "Kewaskum, WI",
    notes: "w/ Maple Road, The Stephen Hull Experience, Andy Gelles Band, Luke Cerny & the Toothpickers, Slow Train featuring Sue DaBaco, Pierre Lee, Slim & Turner, Mojo Road and The Incorruptibles"
  },
  {
    datetime: "2023-05-21T19:00",
    venue: "41st WAMI Award Show - Turner Hall Ballroom",
    location: "Milwaukee, WI",
  },
  {
    datetime: "2023-05-27T08:00",
    venue: "West Bend Farmers Market",
    location: "West Bend, WI",
  },
  {
    datetime: "2023-05-28T10:00",
    venue: "5K Afterparty Belfrē             ",
    location: "Delafield, WI",
  },
  {
    datetime: "2023-06-02T18:00",
    venue: "Wisconsin Brewing Company",
    location: "Verona, WI"
  }, 
  {
    datetime: "2023-06-03T19:00",
    venue: "River Bend RV Resort",
    location: "Watertown, WI"
  },
  {
    datetime: "2023-06-07T18:00",
    venue: "Bilda's Friess Lake Pub",
    location: "Hubertus, WI"
  },
  {
    datetime: "2023-06-08T18:00",
    venue: "Nixon Park Concert Series",
    location: "Hartland, WI",
    notes: "Supporting Depot Express"
  },
  //{ Double booked
    //datetime: "2023-06-11T16:00",
    //venue: "the baaree",
    //location: "Thiensville, WI"
  //},
  {
    datetime: "2023-06-11T12:00",
    venue: "Crawfish Junction",
    location: "Johnson Creek, WI"
  },
  {
    datetime: "2023-06-14T17:00",
    venue: "Wednesday Night Market at Belfrē",
    location: "Delafield, WI"
  },
  {
    datetime: "2023-06-16T17:30",
    venue: "SoLu Estate Winery",
    location: "Cascade, WI"
  },
  {
    datetime: "2023-06-17T14:00",
    venue: "Private Party",
    location: "Hartford, WI"
  },
  {
    datetime: "2023-06-23T17:30",
    venue: "Blues From The Top - Cooper Creek Stage",
    location: "Winter Park, CO"
  },
  {
    datetime: "2023-06-24T14:20",
    venue: "Blues From The Top - Check Out The Music Stage",
    location: "Winter Park, CO"
  },
  {
    datetime: "2023-06-25T15:00",
    venue: "Blues From The Top - Check Out The Music Stage",
    location: "Winter Park, CO"
  },
  {
    datetime: "2023-06-28T18:00",
    venue: "Bilda's Friess Lake Pub",
    location: "Hubertus, WI"
  },
  {
    datetime: "2023-06-29T18:00",
    venue: "The Red Mouse",
    location: "Cross Plains, WI"
  },
  {
    datetime: "2023-07-01T16:00",
    venue: "Grassway Organics - Pizza on the Farm",
    location: "East Troy, WI"
  },
  {
    datetime: "2023-07-02T16:00",
    venue: "Dundee's Roadhouse",
    location: "Dundee, WI"
  },
  {
    datetime: "2023-07-05T18:00",
    venue: "Bilda's Friess Lake Pub",
    location: "Hubertus, WI"
  },
  {
    datetime: "2023-07-06T20:00",
    venue: "Summerfest - Guitars For Vets WAMI Stage",
    location: "Milwaukee, WI"
  },
  {
    datetime: "2023-07-07T20:00",
    venue: "Camp Northern Lights",
    location: "Campbellsport, WI"
  },
  {
    datetime: "2023-07-08T13:00",
    venue: "Summerfest - Second Floor Stage",
    location: "Milwaukee, WI"
  },
  {
    datetime: "2023-07-11T17:00",
    venue: "Boozhag's Clubhouse - Tuesday Bike Night",
    location: "Nashotah, WI"
  },
  {
    datetime: "2023-07-12T17:00",
    venue: "Bilda's Friess Lake Pub",
    location: "Hubertus, WI"
  },
  {
    datetime: "2023-07-13T18:00",
    venue: "Nixon Park Concert Series",
    location: "Hartland, WI",
    notes: "Supporting Catelyn Picco and Devon Huckstep featuring Elliot Liebe"
  },
  {
    datetime: "2023-07-14T12:00",
    venue: "Boozhag's Clubhouse",
    location: "Nashotah, WI"
  },
  {
    datetime: "2023-07-15T11:00",
    venue: "BLONDIEPOP",
    location: "West Bend, WI",
  },
  {
    datetime: "2023-07-15T17:00",
    venue: "Private Party",
    location: "West Bend, WI",
  },
  {
    datetime: "2023-07-18T11:00",
    venue: "Thiensville Village Market",
    location: "Thiensville, WI",
  },
  {
    datetime: "2023-07-19T15:00",
    venue: "Waukesha County Fair - Coors Light Stage",
    location: "Waukesha, WI",
  },
  {
    datetime: "2023-07-20T18:30",
    venue: "Galaxie Theatre",
    location: "Johnson Creek, WI",
  },
  {
    datetime: "2023-07-21T15:00",
    venue: "Private Party",
    location: "Saukville, WI",
  },
  {
    datetime: "2023-07-22T14:00",
    venue: "Cheelabration - Daily Taco & Cantina - Set Breaks",
    location: "Thiensville, WI",
    notes: "w/ Big Al Dorn & The Blues Howlers, Leroy Airmaster, The Blues Disciples, The Jimmys & DJ Trans Am"
  },
  {
    datetime: "2023-07-23T16:00",
    venue: "Brothers' Pub",
    location: "Shawano, WI",
    notes: "Supporting The Champ Jaxon Band"
  },
  {
    datetime: "2023-07-26T18:30",
    venue: "Red Rooster",
    location: "Madison, WI"
  },
  {
    datetime: "2023-07-28T19:00",
    venue: "Henny's DugOut",
    location: "Lanon, WI",
  },
  {
    datetime: "2023-07-29T08:00",
    venue: "West Bend Farmers Market",
    location: "West Bend, WI",
  },
  {
    datetime: "2023-08-08T13:00",
    venue: "Wisconsin State Fair",
    location: "West Allis, WI",
    notes: "Supporting Sammy Ray"
  },
  {
    datetime: "2023-08-09T17:00",
    venue: "Bilda's Friess Lake Pub",
    location: "Hubertus, WI"
  },
  {
    datetime: "2023-08-12T11:00",
    venue: "BLONDIEPOP",
    location: "West Bend, WI",
  },
  {
    datetime: "2023-08-16T17:00",
    venue: "Wednesday Night Market at Belfre",
    location: "Delafield, WI"
  },
  {
    datetime: "2023-08-22T17:00",
    venue: "Boozhag's Clubhouse - Tuesday Bike Night",
    location: "Nashotah, WI"
  },
  {
    datetime: "2023-08-26T08:00",
    venue: "West Bend Farmers Market",
    location: "West Bend, WI",
  },
  {
    datetime: "2023-08-26T14:30",
    venue: "Private Party",
    location: "Campbellsport, WI",
  },
  {
    datetime: "2023-08-30T17:00",
    venue: "Bilda's Friess Lake Pub",
    location: "Hubertus, WI"
  },
  {
    datetime: "2023-09-01T18:30",
    venue: "Friday Night Live - Lumber Axe & BrewCade Pub",
    location: "Waukesha, WI"
  },
  {
    datetime: "2023-09-02T19:00",
    venue: "Vaudette Theatre",
    location: "Kaukauna, WI"
  },
  {
    datetime: "2023-09-03T11:30",
    venue: "Wheels on Main - Washington County Fair Park",
    location: "West Bend, WI"
  },
  {
    datetime: "2023-09-03T16:00",
    venue: "the baaree",
    location: "Thiensville, WI"
  },
  {
    datetime: "2023-09-04T12:00",
    venue: "HagFest - Boozhag's Clubhouse",
    location: "Nashotah, WI",
    notes: "Music All Weekend"
  },
  {
    datetime: "2023-09-09T13:00",
    venue: "Fall Fest",
    location: "Oconomowoc, WI",
    notes: "w/ Slim Rox, Kingfish Band, Failure to Launch"
  },
  {
    datetime: "2023-09-09T16:00",
    venue: "Martifest 2023",
    location: "Sullivan, WI",
    notes: "w/ MWB, Jessica & Stuie, Burnt Coil, Dropbear Collective & Angsty Beavers"
  },
  {
    datetime: "2023-09-09T19:30",
    venue: "Private Party",
    location: "Sullivan, WI",
  },
  {
    datetime: "2023-09-10T13:00",
    venue: "Blues Challenge 2023 - BOOTS BBQ",
    location: "Waubeka, WI",
    notes: "w/ Alex Wilson, The Stephen Hall Experience & The Katz Sass"
  },
  {
    datetime: "2023-09-16T11:00",
     venue: "SOFA Softball Tournament",
     location: "Waukesha, WI"
  },
  {
    datetime: "2023-09-16T19:00",
     venue: "The Hive Taproom",
     location: "East Troy, WI"
  },
  {
   datetime: "2023-09-23T14:00",
    venue: "Wide Open Wisconsin",
    location: "West Bend, WI"
  },
  {
    datetime: "2023-09-30T12:00",
     venue: "2023 Fall Festival and Boot Stomp - The Sunset Hill Farm",
     location: "Lake Mills, WI",
     notes: "w/ The Nightinjails & Vehicle 6"
  },
  {
    datetime: "2023-10-06T16:00",
    venue: "Hawkfest - Arrowhead High School",
    location: "Hartland, WI",
  },
  {
    datetime: "2023-10-07T08:00",
    venue: "West Bend Farmers Market",
    location: "West Bend, WI",
  },
  {
    datetime: "2023-10-07T19:00",
    venue: "Private Party",
    location: "Beechwood, WI",
  },
  {
    datetime: "2023-10-14T13:00",
    venue: "Private Party",
    location: "West Bend, WI",
  },
  {
    datetime: "2023-10-15T13:00",
    venue: "International Blues Challenge Fundraiser - Bilda's Friess Lake Pub",
    location: "Hubertus, WI"
  },
  {
    datetime: "2023-10-21T10:30",
    venue: "BLONDIEPOP",
    location: "West Bend, WI",
  },
  {
    datetime: "2023-10-28T20:00",
    venue: "Lumber Axe & BrewCade Pub",
    location: "Waukesha, WI"
  },
  {
    datetime: "2023-11-11T20:30",
    venue: "Stolley's Hogg Alley",
    location: "Oconomowoc, WI"
  },
  {
    datetime: "2023-11-12T17:00",
    venue: "Chicago Blues Challenge - Buddy Guy's Legends",
    location: "Chicago, IL",
    notes: "Performances by Becker/ Davis Duet – Benny Jenkin – Joe Asselin – Candy Cigarette – The Mike Felten Band – The John Millard Band – Indigo Blues Band – The Dave Lumsden Band – The Skylar Rogers Band – Stefan Hillesheim Trio – The Sean McKee Band – Ric Harris & The Heat Merchants – A Patch of Blues",
    link: "https://buddyguy.com/event/chicago-blues-challenge/buddy-guys-legends/chicago-illinois/",
    linkText: "Tickets"
  },
  {
    datetime: "2023-11-16T19:30",
    venue: "Genesee Theatre",
    location: "Waukegan, IL",
    notes: "Supporting Blackberry Smoke",
    link: "https://www.ticketmaster.com/event/07005EED84B41500?brand=genesee&camefrom=CFC_GENESEE",
    linkText: "Tickets"
  },
  {
    datetime: "2023-11-20T19:30",
    venue: "High Noon Saloon",
    location: "Madison, WI",
    notes: "Supporting Jared James Nichols & Cage Willis",
    link: "https://www.ticketmaster.com/event/07005F089C19196B",
    linkText: "Tickets"
  },
  {
    datetime: "2023-12-02T20:00",
    venue: "JJ's On The Bend",
    location: "Hartford, WI",
  },
  {
    datetime: "2023-12-03T14:00",
    venue: "Amplified Artist Sessions - Ope! Brewing",
    location: "West Allis, WI",
    notes: "In-the-round: Candy Cigarette, Cosmic Lovechild & Erin Krebs / Featured Band: Wolves With Virginia"
  },
  {
    datetime: "2023-12-08T20:00",
    venue: "Retro City Rockade",
    location: "Janesville, WI",
    notes: "w/ Take Back The Sun & Liquid Sky"
  },
  {
    datetime: "2023-12-16T19:00",
    venue: "Foundry 45",
    location: "Kewaskum, WI",
    notes: "Supporting Pete's Diary",
    link: "https://fb.me/e/365dQJLTY",
    linkText: "More Info"
  },
  {
    datetime: "2023-12-23T17:00",
    venue: "MKE Music Night LXIV - Anodyne Coffee Roasting Co. (Walker's Point Roastery)",
    location: "Milwaukee, WI",
    notes: "Isaac & Lucas w/ Tlalok & Luis Solis, Cullah & Mie, Rob Knapp & The Soul Patrol",
    link: "https://www.eventbrite.com/e/a-very-merry-mke-music-night-lxiv-tickets-762875961537",
    linkText: "Tickets"
  },
  {
    datetime: "2024-01-19T00:00",
    venue: "International Blues Challenge",
    location: "Memphis, TN"
  },
  {
    datetime: "2024-01-26T18:00",
    venue: "West Bend Moose Lodge",
    location: "West Bend, WI",
    notes: "Acoustic Set"
  },
  {
    datetime: "2024-02-02T19:30",
    venue: "The Bend Theatre",
    location: "West Bend, WI",
    notes: "Supporting Altered Five Blues Band",
    link: "https://www.simpletix.com/e/altered-five-blues-band-w-special-guest-ca-tickets-149195#smtx-click",
    linkText: "Tickets"
  },
  {
    datetime: "2024-02-16T20:00",
    venue: "Big Turn Music Fest - Tootsie Too's",
    location: "Red Wing, MN",
    linkText: "Tickets",
    link: "https://aftontickets.com/event/tickets/3px81g1j1k/YnRtZjI0Y2FuZHljaWdhcmV0dGU="
  },
  {
    datetime: "2024-02-24T20:00",
    venue: "Cactus Menekaunee",
    location: "Marinette, WI",
    notes: "w/ Wasted Pretty & Soup"
  },
  {
    datetime: "2024-02-25T16:00",
    venue: "Red Rooster",
    location: "Madison, WI",
    link: "https://redroostermadison.com/event/candy-cigarette-5/",
    linkText: "More Info"
  },
  {
    datetime: "2024-03-16T19:00",
    venue: "JJs On The Bend",
    location: "Hartford, WI",
    notes: "Isaac & Lucas supporting The Black Moods",
    linkText: "Tickets",
    link: "https://app.promotix.com/events/details/The-Black-Moods-tickets-2"
  },
  {
    datetime: "2024-03-21T20:00",
    venue: "Shank Hall",
    location: "Milwaukee, WI",
    notes: "Supporting Davy Knowles",
    link: "https://www.ticketweb.com/event/davy-knowles-shank-hall-tickets/13387663",
    linkText: "Tickets"
  },
  {
    datetime: "2024-04-19T20:00",
    venue: "The Back Bar",
    location: "Janesville, WI",
    notes: "Supporting Benjamin Trick & Motherwind w/ Three Left & Apex Aura",
    linkText: "More Info",
    link: "https://www.facebook.com/events/687651603456197",
  },
  {
    datetime: "2024-04-27T20:00",
    venue: "JC's Pub and Grub",
    location: "West Allis, WI",
    notes: "Isaac & Lucas w/ Whiskey and the Devil, Sharp Left Turn & Adorner (Solo)",
    linkText: "More Info",
    link: "https://www.facebook.com/events/739631575028741",
  },
  {
    datetime: "2024-05-17T14:00",
    venue: "Jam for Jam - The Barrel Inn",
    location: "Marshall, WI",
    notes: "May 16-19, 20 Bands, Free Tent Camping & Firewood",
    linkText: "Tickets",
    link: "https://www.etix.com/ticket/p/30380058/jam-for-jam-music-and-camping-festival-2024-marshall-jam-for-jam-festival",
  },
  {
    datetime: "2024-05-18T15:00",
    venue: "St Kilian FunFest 2024",
    location: "Hartford, WI",
    notes: "w/ Cherry Pie & Rebel Grace",
    linkText: "More Info",
    link: "https://www.facebook.com/events/1820924161707905",
  },
  {
    datetime: "2024-05-25T20:00",
    venue: "The Back Bar",
    location: "Janesville, WI",
    notes: "Supporting The Black Moods w/ SIIN, Adaddon's End & Gilded Cages",
    link: "https://the-back-bar.myshopify.com/products/concert-ticket-2024-05-25-2024-the-black-moods-wsg-tba",
    linkText: "Tickets"
  },
  {
    datetime: "2024-05-31T18:00",
    venue: "Beach House Beer Garden - Regner Park",
    location: "West Bend, WI",
    link: "https://www.facebook.com/events/433209072564796",
    linkText: "More Info"
  },
  {
    datetime: "2024-06-01T19:00",
    venue: "Mariner Theatre / Pixels Arcade - Wasted Pretty Album Release Show",
    location: "Marinette, WI",
    notes: "w/ Wasted Pretty & Too Much Tension"
  },
  {
    datetime: "2024-06-07T00:00",
    venue: "Glacier Valley Music Fest 2024",
    location: "Cambria, WI",
    notes: "Three Stages, 30+ Bands",
    link: "https://www.partymartymusic.com/gvmf",
    linkText: "More Info"
  },
  // { Cancelled
  //   datetime: "2024-06-08T18:00",
  //   venue: "Green Town on the Rocks",
  //   location: "Waukegan, IL",
  //   notes: "Supporting Pete's Diary",
  //   link: "https://www.facebook.com/events/944647243887316",
  //   linkText: "More Info"
  // },
  {
    datetime: "2024-06-12T17:30",
    venue: "Open Jam - Bilda's Friess Lake Pub",
    location: "Hubertus, WI"
  },
  {
    datetime: "2024-06-14T00:00",
    venue: "TBA",
    location: "Round Lake Heights, IL"
  },
  {
    datetime: "2024-06-16T00:00",
    venue: "Tumbled Rock Brewery",
    location: "Baraboo, WI",
  },
  {
    datetime: "2024-06-21T18:30",
    venue: "Friday Night Live - Vinyl Vault",
    location: "Waukesha, WI",
  },
  {
    datetime: "2024-06-22T20:00",
    venue: "At The Tracks",
    location: "Green Bay, WI",
    notes: "w/ The Spencer Smet Band & Modern Haunting",
    linkText: "$10 Cover"
  },
  {
    datetime: "2024-06-23T15:00",
    venue: "Red Rooster",
    location: "Madison, WI",
    //link: "https://redroostermadison.com/event/",
    //notes: "w/ Take Back The Sun",
    linkText: "$8 Cover"
  },
  {
    datetime: "2024-06-26T17:30",
    venue: "Open Jam - Bilda's Friess Lake Pub",
    location: "Hubertus, WI"
  },
  {
    datetime: "2024-06-28T00:00",
    venue: "Music on the Square - Cooper Creek Square",
    location: "Winter Park, CO"
  },
  {
    datetime: "2024-06-29T00:00",
    venue: "Blues from the Top - Check out the Music Stage",
    location: "Winter Park, CO",
    notes: "Ben Harper & The Innocent Criminals, Charlie Musselwhite, Ally Venable Band, GA-20 & Taj Farrant",
    link: "https://www.eventbrite.com/e/blues-from-the-top-music-festival-tickets-855642839767?aff=BluesFromTheTopwebsite",
    linkText: "Tickets"
  },
  {
    datetime: "2024-06-29T20:30",
    venue: "Devil's Craft",
    location: "Winter Park, CO",
    notes: "Supporting The Wiedls",
    //link: "https://www.eventbrite.com/e/emanuel-casablanca-with-candy-cigarette-tickets-902219993287?aff=oddtdtcreator",
    //linkText: "Tickets"
  },
  {
    datetime: "2024-06-30T00:00",
    venue: "Blues from the Top - Check out the Music Stage",
    location: "Winter Park, CO",
    notes: "Eric Gales Canned Heat, Tommy Castro & Deanna Bogart & Toronzo Cannon",
    link: "https://www.eventbrite.com/e/blues-from-the-top-music-festival-tickets-855642839767?aff=BluesFromTheTopwebsite",
    linkText: "Tickets"
  },
  {
    datetime: "2024-07-19T00:00",
    venue: "Private Party",
    location: "Wisconsin"
  },
  {
    datetime: "2024-07-20T00:00",
    venue: "Cheelabration",
    location: "Thiensville, WI",
  },
  {
    datetime: "2024-07-24T17:30",
    venue: "Open Jam - Bilda's Friess Lake Pub",
    location: "Hubertus, WI"
  },
  {
    datetime: "2024-07-27T19:30:00",
    venue: "Anodyne Coffee - Walker's Point Roastery",
    location: "Milwaukee, WI",
    notes: "w/ Pete's Diary & Wonderful Bluffer",
    link: "https://anodynecoffee.com/pages/concerts?fbclid=IwZXh0bgNhZW0CMTAAAR1uzqQS7QpRiUcPj4tPTwcJLMSFUavw9MWAk-l_P_Zs4piJiWmFHynnu2o_aem_XMh6gYUJDIQbW2KETBctTA#/events/109101",
    linkText: "Tickets"
  },
  {
    datetime: "2024-07-28T00:00",
    venue: "AtwoodFest - Sugar Maple Stage",
    location: "Madison, WI",
  },
  {
    datetime: "2024-08-02T00:00",
    venue: "Tumbled Rock Brewery",
    location: "Baraboo, WI",
  },
  {
    datetime: "2024-08-03T13:00",
    venue: "Moosefest - Regner Park",
    location: "West Bend, WI"
  },
  {
    datetime: "2024-08-04T00:00",
    venue: "Brother's Pub",
    location: "Shawano, WI",
    notes: "Supporting The Champ Jaxon Band"
  },
  {
    datetime: "2024-08-07T17:30",
    venue: "Open Jam - Bilda's Friess Lake Pub",
    location: "Hubertus, WI"
  },
  {
    datetime: "2024-08-09T15:00",
    venue: "Ashley for the Arts - Pavilion Stage",
    location: "Arcadia, WI",
    link: "https://www.etix.com/ticket/k/25448837/3day-weekend-pass-arcadia-ashley-for-the-arts?_gl=1*1t67twe*_gcl_aw*R0NMLjE3MjA0OTEyNzcuQ2p3S0NBanduSzYwQmhBOUVpd0FtcEhadzNGVUNDaU5yVHdhUG80QnkxX0ltRzBpWE1IdHR2SFQxNHY5Ukhjbkw3VjVSbnNpUGhIMWJob0NtRGdRQXZEX0J3RQ..*_gcl_au*MTY5MjcyNDgwLjE3MjA0OTEyNzc.*_ga*MjA0NzE1MjkwLjE3MjA0OTEyNzc.*_ga_7QRHLPDZCZ*MTcyMDQ5MTI3Ny4xLjAuMTcyMDQ5MTI3Ny42MC4wLjA.",
    linkText: "Tickets"
  },
  {
    datetime: "2024-08-11T16:00",
    venue: "the baaree",
    location: "Thiensville, WI",
  },
  {
    datetime: "2024-08-18T13:00",
    venue: "Crawfish Junction",
    location: "Johnson Creek, WI"
  },
  {
    datetime: "2024-08-21T17:30",
    venue: "Open Jam - Bilda's Friess Lake Pub",
    location: "Hubertus, WI"
  },
  {
    datetime: "2024-08-23T19:30",
    venue: "Retro City Rockade",
    location: "Janesville, WI",
    notes: "w/ Take Back The Sun & LARGEMOUTH",
    link: "https://www.facebook.com/events/2422227154636270",
    linkText: "More Info"
  },
  {
    datetime: "2024-08-24T19:00",
    venue: "The Hive Taproom",
    location: "East Troy, WI"
  },
  {
    datetime: "2024-09-02T14:00",
    venue: "Green Town on the Rocks",
    location: "Waukegan, IL",
    notes: "Supporting Pete's Diary",
    link: "https://www.facebook.com/events/1017190212639041",
    linkText: "More Info"
  },
  {
    datetime: "2024-09-06T16:00",
    venue: "Moonlit Movies: The Wizard of OZ - Downtown Oconomowoc",
    location: "Oconomowoc, WI",
  },
  {
    datetime: "2024-09-07T12:30",
    venue: "Fall Fest - Oconomowoc",
    location: "Oconomowoc, WI"
  },
  {
    datetime: "2024-09-07T16:30",
    venue: "MartiFest",
    location: "Sullivan, WI"
  },
  {
    datetime: "2024-09-13T00:00",
    venue: "RallyPoint",
    location: "Oconomowoc, WI",
    notes: "w/ Radiation",
    link: "https://www.ticketweb.com/event/radiation-candy-cigarette-at-rallypoint-tickets/13839453",
    linkText: "Tickets"
  },
  {
    datetime: "2024-09-14T20:00",
    venue: "Cactus Menekaunee",
    location: "Marinette, WI",
    notes: "w/ Wasted Pretty & Lucas Deitz"
  },
  {
    datetime: "2024-09-20T00:00",
    venue: "The Bend Theatre",
    location: "West Bend, WI",
    notes: "Supporting Lil Ed & The Blues Imperials",
    link: "https://www.simpletix.com/e/lil-ed-the-blues-imperials-w-special-guest-tickets-165821",
    linkText: "Tickets"
  },
  {
    datetime: "2024-10-05T00:00",
    venue: "Private Party",
    location: "Beechwood, WI",
  },
  {
    datetime: "2024-10-16T19:00",
    venue: "Red Rooster",
    location: "Madison, WI",
    notes: "Supporting Moon Goons",
    link: "https://redroostermadison.com/event/moon-goons-candy-cigarette/",
    linkText: "More Info"
  },
  // { Canceled Due to Weather
  //   datetime: "2024-10-30T18:00",
  //   venue: "The Truck Yard At The Tarlton",
  //   location: "Green Bay, WI",
  //   notes: "Supporting Motherwind with Broken Arrow",
  //   link: "https://www.facebook.com/events/873682151531580",
  //   linkText: "More Info"
  // },
  {
    datetime: "2024-11-22T00:00",
    venue: "Shank Hall",
    location: "Milwaukee, WI",
    notes: "Supporting Miles Nielsen & The Rusted Hearts",
    link: "https://www.ticketweb.com/event/miles-nielsen-the-rusted-shank-hall-tickets/13672973",
    linkText: "Tickets"
  },
  {
    datetime: "2024-11-23T20:00",
    venue: "GoodFellas Pub",
    location: "Marshfield, WI",
    notes: "Supporting Motherwind w/ Public Meltdown",
    link: "https://www.songkick.com/concerts/42183412-motherwind-at-goodfellas-pub?utm_source=11593&utm_medium=partner&utm_campaign=ticket-link&utm_content=10153875",
    linkText: "Tickets"
  },
  {
    datetime: "2024-12-12T00:00",
    venue: "Private Event",
    location: "Grafton, WI"
  },
  {
    datetime: "2024-12-21T00:00",
    venue: "Studio 301",
    location: "Portage, WI"
  },
  {
    datetime: "2025-01-11T00:00",
    venue: "The Garage",
    location: "Burnsville, MN",
    notes: "w/ TBA"
  },
    // {
  //   datetime: "2025-01-18T00:00",
  //   venue: "At The Tracks",
  //   location: "Green Bay, WI"
  // },
  {
      datetime: "2025-02-15T20:30",
      venue: "Big Turn Music Fest - Tootsie Too's",
      location: "Red Wing, MN",
      linkText: "Tickets",
      link: "https://aftontickets.com/event/buyticket/8qj4l2v79m",
      notes: "Special Acoustic Duo Set"
  },
  {
      datetime: "2025-06-14T19:00",
      venue: "The Hive",
      location: "East Troy, WI",
      notes: "An Evening with Candy Cigarette"
  },
  // {
  //   datetime: "2025-06-27T17:15",
  //   venue: "TBD",
  //   location: "Lincoln, NE"
  // },
  // {
  //   datetime: "2024-06-28T00:00",
  //   venue: "TBA",
  //   location: "WP, CO",
  // },
  // {
  //   datetime: "2024-06-29T00:00",
  //   venue: "TBA",
  //   location: "WP, CO",
  // },
  // {
  //   datetime: "2025-07-03T00:00",
  //   venue: "TBD",
  //   location: "Des Moines, IA"
  // },
  {
    datetime: "2025-07-18T00:00",
    venue: "Private Event",
    location: "Wisconsin"
  },
  {
    datetime: "2025-08-23T00:00",
    venue: "Private Event",
    location: "Okauchee, WI"
  },
];

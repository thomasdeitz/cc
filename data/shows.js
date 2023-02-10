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
  //{ - Cancelled due to conflict
    //datetime: "2022-02-25T19:45",
    //venue: "Thirsty Bird Saloon",
    //location: "Oconomowoc, WI"
  //},
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
    location: "Theinsville, WI"
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
  // { - Canceled due to cancelled vendors
  //   datetime: "2022-09-28T17:00",
  //   venue: "Belfrē Kitchen",
  //   location: "Delafield, WI",
  // },
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
  //{ - Canceled - weather i think
    //datetime: "2022-10-06T17:00",
    //venue: "Bike Night at Boozhag's Clubhouse",
    //location: "Nashotah, WI",
  //},
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
  //{ - Cancelled due to Isaac Illness
    //datetime: "2022-11-02T18:30",
    //venue: "Red Rooster",
    //location: "Madison, WI"
  //},
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
  //{ - Canceled due to double booking by venue
    //datetime: "2022-12-17T20:00",
    //venue: "Knucklehead Pub",
    //location: "Eagle, WI"
  //},
  {
    datetime: "2022-12-04T13:00",
    venue: "Duo - Washington County Humane Society - Festival of Trees",
    location: "Slinger, WI",
  },
  {
    datetime: "2022-12-10T16:00",
    venue: "Duo - Private Party",
    location: "Nashotah, WI",
  },
  {
    datetime: "2022-12-14T17:00",
    venue: "Duo - A+ Power Sports - Annual Customer Appreciation Holiday Party",
    location: "Elkhorn, WI",
  },
  {
    datetime: "2022-12-20T17:00",
    venue: "Duo - Bilda's Friess Lake Pub",
    location: "Hubertus, WI"
  },
  {
    datetime: "2022-12-30T19:00",
    venue: "Henny's DugOut",
    location: "Lanon, WI",
  },
  /***** ^ 2022 ^ v 2023 v *****/
  {
    datetime: "2023-01-06T18:00",
    venue: "Duo - West Bend Moose Lodge",
    location: "West Bend, WI",
  },
  {
    datetime: "2023-01-13T18:00",
    venue: "Duo - Wisconsin Brewing Company",
    location: "Verona, WI",
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
    venue: "Duo - The Other Bar",
    location: "Dousman, WI",
  },
  {
    datetime: "2023-02-17T12:00",
    venue: "Big Turn Music Festival",
    location: "Red Wing, MN"
  },
  {
    datetime: "2023-02-25T20:00",
    venue: "Duo - Thirsty Bird Saloon",
    location: "Oconomowoc, WI",
  },
  //{
    //datetime: "2023-03-01T18:00",
    //venue: "IndieTuneUp",
    //location: "Fitchburg, WI",
    //notes: "w/ Katie Scullin & TBD"
  //},
  {
    datetime: "2023-03-04T14:30",
    venue: "Duo - Daily Taco & Cantina - Tune into Happy Hour",
    location: "Thiensville, WI",
  },
  //{
    //datetime: "2023-03-17T19:00",
    //venue: "Main Street Music",
    //location: "Brooklyn, WI",
    //notes: "Supporting The Katie Scullin Band"
  //},
  {
    datetime: "2023-04-19T19:00",
    venue: "Red Rooster",
    location: "Madison, WI"
  },
  {
    datetime: "2023-04-22T16:00",
    venue: "Private Party",
    location: "TBD",
  },
  {
    datetime: "2023-04-28T16:30",
    venue: "Duo - Private Party",
    location: "Milwaukee, WI",
  },
  {
    datetime: "2023-04-29T16:00",
    venue: "Duo - The Drafty Cellar",
    location: "Watertown, WI",
  },
  {
    datetime: "2023-05-06T20:00",
    venue: "Rustic Woods Campground Bar",
    location: "Waupaca, WI"
  },
  {
    datetime: "2023-05-20T15:00",
    venue: "St. Killian FunFest - Hartford Town Hall",
    location: "Hartford, WI"
  },
  {
     datetime: "2023-05-21T12:00",
     venue: "Duo - TBD",
     location: "Kewaskum, WI"
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
    datetime: "2023-06-11T16:00",
    venue: "the baaree",
    location: "Theinsville, WI"
  },
  {
    datetime: "2023-06-14T17:00",
    venue: "Wednesday Night Markt at Belfrē",
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
    datetime: "2023-06-30T16:00",
    venue: "Grassway Organics - Pizza on the Farm",
    location: "East Troy, WI"
  },
  {
    datetime: "2023-07-02T16:00",
    venue: "Dundee's Roadhouse",
    location: "Dundee, WI"
  },
  {
    datetime: "2023-07-21T19:30",
    venue: "Private Party",
    location: "TBD",
  },
  {
    datetime: "2023-07-22T14:00",
    venue: "Cheelabration - Daily Taco & Cantina - Set Breaks",
    location: "Thiensville, WI",
    notes: "w/ Big Al Dorn & The Blues Howlers, Leroy Airmaster, The Blues Disciples, The Jimmys & DJ Trans Am"
  },
  //{
   //datetime: "2023-07-23T14:00",
    //venue: "Brothers' Pub",
    //location: "Shawano, WI",
    //notes: "w/ The Champ Jaxon Band"
  //},
  {
    datetime: "2023-07-26T19:00",
    venue: "Red Rooster",
    location: "Madison, WI"
  },
  {
    datetime: "2023-08-16T17:00",
    venue: "Duo - Wednesday Night Markt at Belfrē",
    location: "Delafield, WI"
  },
  {
    datetime: "2023-09-03T16:00",
    venue: "the baaree",
    location: "Theinsville, WI"
  },
  //{
   //datetime: "2023-10-09T19:00",
    //venue: "Martifest",
    //location: "Oconomowoc, WI",
  //},
  //{
   //datetime: "2023-10-23T15:00",
    //venue: "Wide Open Wisconsin",
    //location: "West Bend, WI"
  //},
];

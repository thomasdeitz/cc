const shows = [
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
      location: "Nashotah, WI",
      //notes: "w/ John Gay"
    },
    {
      datetime: "2022-07-02T12:00",
      venue: "Summerfest - The 2nd Floor Stage",
      location: "Milwaukee, WI",
    },
    {
      datetime: "2022-07-13T18:00",
      venue: "Red Rooster",
      location: "Madison, WI",
      notes: "w/ TBA"
    },
    {
      datetime: "2022-07-14T17:00",
      venue: "Bike Night at Boozhag's Clubhouse",
      location: "Nashotah, WI",
    },
    {
      datetime: "2022-07-16T08:00",
      venue: "West Bend Farmers Market - Old Settlers Gazebo",
      location: "West Bend, WI",
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
      datetime: "2022-07-31T14:20",
      venue: "Washington County Fair - Why Go By Stage",
      location: "West Bend, WI"
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
      datetime: "2022-08-18T17:00",
      venue: "Bike Night at Boozhag's Clubhouse",
      location: "Nashotah, WI",
    },
    {
      datetime: "2022-08-22T16:00",
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
      //notes: "w/ John Gay"
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
      datetime: "2022-09-15T17:00",
      venue: "TBD",
      location: "WI",
      //notes: "w/ Kristine Kabbes & The Skallywags"
    },
    {
      datetime: "2022-09-24T12:00",
      venue: "The Antidote",
      location: "West Bend, WI"
    },
    {
        datetime: "2022-09-24T15:30",
        venue: "Wide Open Wisconsin",
        location: "West Bend, WI"
    },
    {
      datetime: "2022-10-01T08:00",
      venue: "West Bend Farmers Market - Old Settlers Gazebo",
      location: "West Bend, WI",
    },
    {
      datetime: "2022-10-06T17:00",
      venue: "Bike Night at Boozhag's Clubhouse",
      location: "Nashotah, WI",
    },
    {
      datetime: "2022-10-15T14:00",
      venue: "Hubbleton Brewing",
      location: "Waterloo, WI"
    },
    {
      datetime: "2022-10-16T12:00",
      venue: "M & T's Gibbsville Orchard - Hallo-Apple-Ween Festival",
      location: "Sheboygan Falls, WI"
    },
    {
      datetime: "2022-10-29T08:00",
      venue: "West Bend Farmers Market - Antidote",
      location: "West Bend, WI",
    },
    {
      datetime: "2022-01-22T13:00",
      venue: "West Bend Winter Warm-up - Old Settlers Park",
      location: "West Bend, WI",
    },
    {
      datetime: "2022-01-14T19:00",
      venue: "The Etcetera",
      location: "Oconomowoc, WI",
    },
    {
      datetime: "2022-01-08T18:00",
      venue: "Woods Liquor Landing",
      location: "Randolph, WI",
      notes: 'w/ Sammy Ray'
    },
    /***** ^^^^ 2022 ^^^^ *****/
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
    }
  ];
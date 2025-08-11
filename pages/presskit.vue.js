const PressKit = {
    template: `
    <Hero />
    
    <Section background="" heading="Biography" alignment="center">
        Candy Cigarette delivers a blistering brand of raw, high-energy blues-rock, fueled by an unapologetic spirit that defies their age. Hailing from Oconomowoc, Wisconsin, identical twins Isaac (bass/vocals) and Lucas Deitz (guitar/vocals), both 15, and drummer Evan Sterken, 17, have been igniting stages across the Midwest and beyond. Their sound, a potent blend of 70s rock giants like Led Zeppelin and the modern fire of Rival Sons, captivates audiences with electrifying live performances. Searing guitar riffs and blood harmonies, coupled with a thunderous rhythmic drive, create an undeniable sonic force. Having shared stages with acclaimed artists such as Blackberry Smoke, Jared James Nichols, and many more, Candy Cigarette has proven their ability to command any crowd. Their latest single, "REVOLUTION," marks a powerful step forward, positioning Candy Cigarette as torchbearers for the future of rock and roll.
    </Section>
    <Section background="black" alignment="center">
        <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/artist/5maVQrBwrq5t6SoOiUsfVk?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        <iframe style="border-radius:12px; margin:auto; " width="560" height="315" src="https://www.youtube.com/embed/NG2uxuxIwm4?si=W_QSNH1WcqXMvRUT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </Section>
    <Section>
        <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/3o7cVfvCZaT1Gjt23SjHfX?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </Section>
    <Section heading="Upcoming Dates" background="black">
        <Dates length="10"  />
    </Section>
    <Section background="black" heading="Photos">
        <div class="photo-grid">
            <img height="auto" width="100%"
                src="./assets/IMG_8864.jpeg"
            />
            <img height="auto" width="100%"
                src="./assets/IMG_8864.jpeg"
            />
            <img height="auto" width="100%"
                src="./assets/IMG_8864.jpeg"
            />
            <img height="auto" width="100%"
                src="./assets/IMG_8864.jpeg"
            />
            <img height="auto" width="100%"
                src="./assets/HR-SF-CS1-0069_websize.jpg"
            />
            <img height="auto" width="100%"
                src="./assets/HR-SF-CS1-0096_websize.jpeg"
            />
            <img height="auto" width="100%"
                src="./assets/HR-SF-CS1-0102_websize.jpg"
            />
            <img height="auto" width="100%"
                src="./assets/IMG_8864.jpeg"
            />
        </div>
    </Section>
    <Section alignment="center">
        <blockquote>
            <p>No Frills! Just Bust Ass! Killer RocknRoll! Nailed down that Live energy without being Over Produced! Great Slice of RocknRoll!!</p>
            <cite>- Curt Z.</cite>
        </blockquote>
    </Section>
    <Section background="primary">
        <blockquote>
            <p>They've captured timeless rock and roll energy on Revolution -  a song that could be released in just about any decade and still inspire...</p>
            <cite>- Allen Halas / Breaking & Entering MKE</cite>
        </blockquote>
    </Section>
    <Section background="black" heading="Notable Venues">
            <div>
                <img height="auto" width="200px"
                    src="./assets/turnerhall.webp"
                />
                <img height="auto" width="200px"
                    src="./assets/highnoon.png"
                />
                                <img height="auto" width="200px"
                    src="./assets/xray.png"
                />
                <div>Turner Hall</div>
                <div>The Back Bar</div>
                <div>Shank Hall</div>
                <div>Genesee Theatre</div>
                <div>High Noon Saloon</div>
                <div>X-Ray Arcade</div>
                <div>Duffy's Tavern</div>
                <div>Miramar Theatre</div>
                <div>2454 West</div>
                <div>Devil's Craft</div>
                <div>The Bend Theatre</div>
                <div>Appleton Music Factory</div>
                <div>Navy Pier</div>
            </div>
    </Section>
    <Section background="primary" heading="Festivals">
            <div>
                <div>Blues From The Top</div>
                <div>International Blues Challenge</div>
                <div>Bitter Jester Music Festival</div>
                <div>Glacier Valley Music Festval</div>
                <div>Ashley for the Arts</div>
                <div>Summerfest</div>
                <div>Big Turn Music Festival</div>
            </div>
    </Section>
    <Section heading="Direct Support For">
            <div>
                <div>Blackberry Smoke</div>
                <div>The Black Moods</div>
                <div>Jared James Nichols</div>
                <div>The Band Feel</div>
                <div>Ace Monroe</div>
                <div>Davy Knowles</div>
                <div>Altered Five Blues Band</div>
                <div>Pete's Diary</div>
                <div>Lil' Ed</div>
                <div>King Falcon</div>
                <div>Motherwind</div>
                <div>The Champ Jaxon Band</div>
                <div>Miles Nielsen</div>
                <div>Chris Cain</div>
                <div>The Cold Stares</div>
                <div>The Steepwater Band</div>
                <div>The Roumors</div>
                <div>Bourbon House</div>
                <div>Stephen Hull</div>
                <div>Cage Willis</div>
                <div>Tyron Benoit</div>
            </div>
    </Section>
    <Section background="primary" heading="Core Information">

        <strike>Short Bio: A 1-2 paragraph blurb for quick reference.</strike>

        Long Bio: A more detailed version (around 1 page) for deeper dives.

        Fact Sheet/Highlights: A bulleted list of key achievements:

        <strike>Genre</strike>

        <strike>Formation date</strike>

        <strike>Notable performances (venues, festivals, opening slots)</strike>

        Albums/EPs released with release dates

        <strike>Awards or nominations</strike>

        Key press mentions or radio play

        <strike>Contact Information: Clear details for your band's representative (manager, publicist, or a designated band member):

        Name

        Email address

        Phone number

        Website/social media links</strike>

        Press Releases: Any official announcements, such as new album releases, tour dates, or major news. Keep these concise and to the point.

        <strike>Testimonials/Quotes: Positive blurbs from critics, other musicians, or industry professionals about your music or live performances.</strike>
    </Section>
    <Section heading="Visual & Audio Assets">
        High-Resolution Photos: Professional photos are crucial. Include a variety:

        Band Photos: Group shots, action shots, and individual portraits.

        Live Performance Photos: Show your energy on stage.

        Album Art: High-res images of your album or single covers.

        Tip: Provide both vertical and horizontal options, and include a mix of color and black & white if available.

        Music Files (Audio):

        Streamable Links: Spotify, Apple Music, Bandcamp, SoundCloud links to your best tracks (usually 2-3).

        Downloadable Tracks: High-quality MP3s or WAV files of a few key songs for reviewers or radio stations.

        Videos:

        Music Videos: Links to your official music videos.

        Live Performance Footage: High-quality videos of your band playing live.

        Interviews/Behind-the-Scenes: If available, these can add personality.

        Tip: Ensure video links go to platforms like YouTube or Vimeo.
    </Section>
    <Section background="black" heading="Supporting Materials">
        Discography: A list of all your official releases (albums, EPs, singles) with release dates and a brief description of each.

Tour Dates: A current list of upcoming performances.

Stage Plot & Input List: (Primarily for booking agents and venues)

Stage Plot: A diagram showing where each band member and their equipment will be positioned on stage.

Input List: Details all the inputs required by the sound engineer (microphones, direct inputs, etc.).

Social Media Links: Direct links to your active social media profiles (Instagram, Facebook, TikTok, X/Twitter).

Website Link: Your official band website.

Press Clippings/Media Coverage: Links or PDFs of past articles, reviews, or interviews about your band. This builds credibility.
    </Section>
    `
}
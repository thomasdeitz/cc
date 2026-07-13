const HomePage = {
    template: 
    `
        <Hero />
        <Section heading="Music" alignment="center">
            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/3o7cVfvCZaT1Gjt23SjHfX?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </Section>
        <Section heading="Upcoming Dates" background="black">
            <Dates length="5"  />
        </Section>
        <Section background="primary" heading="Sign Up for Updates">
            <Subscribe />
        </Section>
    `
}

// Sitemap

// Home / Logo
// Band / Shows / Store / Contact

// Home
// Header / Nav
// Hero Image
// Some Shows
// Some Merch
// Video
// Footer / Sign Up / Booking / Social / Copyright

// Band 
// Header / Nav
// Band Photo / Bio
// Member Photo / Bio
// Footer / Sign Up / Booking / Social / Copyright

// Shows
// Header / Nav
// Show List
// Footer / Sign Up / Booking / Social / Copyright

// Store
// Header / Nav
// Items
// Footer / Sign Up / Booking / Social / Copyright

// Contact
// Header / Nav
// Contact Form
// Footer / Sign Up / Booking / Social / Copyright
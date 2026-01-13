const PressKit = {
    template: `
    <Hero />
    
    <Section background="" heading="Biography" alignment="center">
        <div class="two-column">
            Candy Cigarette delivers a blistering brand of raw, high-energy blues-rock, fueled by an unapologetic spirit that defies their age. Hailing from Oconomowoc, Wisconsin, identical twins Isaac (bass/vocals) and Lucas Deitz (guitar/vocals), both 15, and drummer Evan Sterken, 17, have been igniting stages across the Midwest and beyond. Their sound, a potent blend of 70s rock giants like Led Zeppelin and the modern fire of Rival Sons, captivates audiences with electrifying live performances. Searing guitar riffs and blood harmonies, coupled with a thunderous rhythmic drive, create an undeniable sonic force. Having shared stages with acclaimed artists such as Blackberry Smoke, Jared James Nichols, and many more, Candy Cigarette has proven their ability to command any crowd. Their latest single, "REVOLUTION," marks a powerful step forward, positioning Candy Cigarette as torchbearers for the future of rock and roll.
        </div>
    </Section>
    <Section background="black" heading="Music" alignment="center">
        <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/3o7cVfvCZaT1Gjt23SjHfX?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </Section>
    <Section heading="Video" alignment="center">
         <div class="photo-grid">
            <iframe style="display:none; border-radius:12px; margin:auto;" width="auto" height="315" src="https://www.youtube.com/embed/NG2uxuxIwm4?si=W_QSNH1WcqXMvRUT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            
            <iframe style="border-radius:12px; margin:auto; aspect-ratio: 16 / 9;" width="100%" src="https://www.youtube.com/embed/COho60KAbxg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe style="border-radius:12px; margin:auto;aspect-ratio: 16 / 9;" width="100%" src="https://www.youtube.com/embed/FAaUJWI6jEc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe style="border-radius:12px; margin:auto;aspect-ratio: 16 / 9;" width="100%" src="https://www.youtube.com/embed/nd0Qm3J6IuA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe style="border-radius:12px; margin:auto;aspect-ratio: 16 / 9;" width="100%" src="https://www.youtube.com/embed/xUkYu6VVd7o?si=fuYHrk7Aflkqovua" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe style="display:none;" data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/artist/5maVQrBwrq5t6SoOiUsfVk?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
    </Section>
    <Section background="black" heading="Photos" alignment="center">
        <div class="photo-grid">
            <img height="auto" width="100%"
                src="./assets/HR-SF-CS1-0015.jpg"
            />
            <img height="auto" width="100%"
                src="./assets/HR-SF-CS1-0152.jpg"
            />
            <img height="auto" width="100%"
                src="./assets/HR-SF-CS1-0069.jpg"
            />
            <img height="auto" width="100%"
                src="./assets/HR-SF-CS1-0024.jpg"
            />
            <img height="auto" width="100%"
                src="./assets/HR-SF-CS1-0102.jpg"
            />
            <img height="auto" width="100%"
                src="./assets/HR-SF-CS1-0135.jpg"
            />
            <img height="auto" width="100%"
                src="./assets/HR-SF-CS1-0101.jpg"
            />
            <img height="auto" width="100%"
                src="./assets/HR-SF-CS1-0023.jpg"
            />
        </div>
    </Section>
    <Section alignment="center" heading="Talk on the Street">
        <div class="photo-grid">
        <blockquote>
            <p>No Frills! Just Bust Ass! Killer RocknRoll! Nailed down that Live energy without being Over Produced! Great Slice of RocknRoll!!</p>
            <cite>- Curt Z.</cite>
        </blockquote>
        <blockquote>
            <p>They've captured timeless rock and roll energy on Revolution -  a song that could be released in just about any decade and still inspire...</p>
            <cite>- Allen Halas / Breaking & Entering MKE</cite>
        </blockquote>
        </div>
    </Section>
    <Section heading="Upcoming Dates" background="black" alignment="center">
        <Dates length="10"  />
    </Section>
    <Section background="primary" heading="Notable Experience" alignment="center">
            <NotableDates /> 
    </Section>
    `
}
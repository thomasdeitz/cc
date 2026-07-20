const PressKit = {
    template: `
    <Hero />
    
    <Section background="" heading="Biography" alignment="center">
        <div class="">
            Powered by identical twin brothers Isaac and Lucas Deitz, Candy Cigarette brings a loud, fresh spin to classic blues-rock. Blending gritty vocal harmonies, riffy guitars, and deep grooves into a high-energy live show, they deliver a real and organic sound built for the stage. No gimmicks, no backing tracks, just pure live energy.
        </div>
    </Section>
    <Section background="black" heading="Video" alignment="center">      
        <iframe style="border-radius:12px; margin:auto; aspect-ratio: 16 / 9;" width="100%" src="https://www.youtube.com/embed/COho60KAbxg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>
        <div class="photo-grid">
            <iframe style="border-radius:12px; margin:auto;aspect-ratio: 16 / 9;" width="100%" src="https://www.youtube.com/embed/FAaUJWI6jEc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>
            <iframe style="border-radius:12px; margin:auto;aspect-ratio: 16 / 9;" width="100%" src="https://www.youtube.com/embed/nd0Qm3J6IuA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>
        </div>
    </Section>
    <Section heading="Music" alignment="center">
        <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/3o7cVfvCZaT1Gjt23SjHfX?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </Section>
    <Section style="display:none" background="black" heading="Photos" alignment="center">
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
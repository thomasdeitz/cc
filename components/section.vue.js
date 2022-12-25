const Section = {
    props: [
        'heading',
        'background'
    ],
    template: `
        <section :class="{ primary: background === 'primary', black: background === 'black' }">
            <div class="container">
                <h2>{{heading}}</h2>
                <slot></slot>
            </div>
        </section>
    `
}
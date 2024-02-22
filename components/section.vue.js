const Section = {
    props: [
        'heading',
        'background',
        'layout'
    ],
    template: `
        <section :class="{ split: layout === 'split', primary: background === 'primary', black: background === 'black' }">
            <div class="container">
                <h2>{{heading}}</h2>
                <slot></slot>
            </div>
        </section>
    `
}
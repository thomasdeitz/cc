const Section = {
    props: [
        'alignment',
        'heading',
        'background',
        'layout'
    ],
    template: `
        <section :class="{ split: layout === 'split', primary: background === 'primary', black: background === 'black', center: alignment === 'center'}">
            <div class="container">
                <h2>{{heading}}</h2>
                <slot></slot>
            </div>
        </section>
    `
}
const Pagefooter = {
    data() {
        return {
            today: new Date(),
        }
    },
    template: `
        <footer>
            <div class="container" background="black">
                <Connections />
                All rights reserved &copy; {{today.toLocaleDateString('en', { year: 'numeric' })}} Candy Cigarette
            </div>
        </footer>
    `
}
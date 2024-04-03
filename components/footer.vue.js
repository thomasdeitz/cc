const Pagefooter = {
    data() {
        return {
            today: new Date(),
        }
    },
    template: `
        <footer>
            <div class="container" background="black">
            <h2>Contact</h2>
                <small>
                    Reach out via 
                    <a href="mailto:candycigaretteband@gmail.com">Email</a> 
                    or call 
                    <a href="tel:2625678114">262.567.8114</a>.
                </small>
                <br/>
                <br />
                <Connections />
                <br/>
                <small>All rights reserved &copy; {{today.toLocaleDateString('en', { year: 'numeric' })}} Candy Cigarette</small>
            </div>
        </footer>
    `
}
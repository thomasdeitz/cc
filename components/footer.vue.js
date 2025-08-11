const Pagefooter = {
    data() {
        return {
            today: new Date(),
        }
    },
    template: `
        <footer>
            <div class="container" background="black">
            <h2>Connect</h2>
            <Connections />
            <br />
                <small>
                    <strong>Management & Booking</strong><br />
                    Thomas Deitz  /  <a href="mailto:candycigaretteband@gmail.com">Email</a>  /  <a href="tel:2625678114">262.567.8114</a>
                </small>
                <br/>
                <br/>
                <small>All rights reserved &copy; {{today.toLocaleDateString('en', { year: 'numeric' })}} Candy Cigarette</small>
            </div>
        </footer>
    `
}
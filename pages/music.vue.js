
const MusicPage = {
    data() {
        return {
            heading: "Upcoming Shows",
            today: new Date(),
            shows: shows
        }
    },
    computed: {
        sortedShows: function () {
            let shows = this.sortShows(this.shows.filter((show) => { return new Date(show.datetime) >= this.today }));
            shows = this.showAllShows ? shows : shows.slice(0, 5);
            return shows;
        }
    },
    methods: {
        sortShows(arrays) {
          return arrays.sort((a, b) => new Date(a.datetime) - new Date(b.datetime));
        }
    },
    template: `
        <section id="music">
            <h2 class="text-center">Music</h2>
            <Setlist />
        </section>
    `
}
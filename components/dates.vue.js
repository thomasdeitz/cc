const Dates = {
    data() {
        return {
            today: new Date(),
            shows: shows
        }
    },
    props: {
      length: Number
    },
    computed: {
        sortedShows: function () {
            const showCountShows = [...this.shows];
            console.log('2022 ', showCountShows.filter((show) => {return new Date(show.datetime) >= new Date("2022-01-01T00:00") && new Date(show.datetime) < new Date("2023-01-01T00:00")}).length);
            console.log('2023 ', showCountShows.filter((show) => {return new Date(show.datetime) >= new Date("2023-01-01T00:00") && new Date(show.datetime) < new Date("2024-01-01T00:00")}).length);
            let shows = this.sortShows(this.shows.filter((show) => { return new Date(show.datetime) >= this.today }));
            shows = this.length ? shows.slice(0, this.length) : shows;
            return shows;
        },
        sortPastShows(arrays) {
          return arrays.sort((a, b) => new Date(b.datetime) - new Date(a.datetime));
        }
    },
    methods: {
        sortShows(arrays) {
          return arrays.sort((a, b) => new Date(a.datetime) - new Date(b.datetime));
        }
    },
    template: `
    <div>
      <div class="show" v-for="show in sortedShows" :key="show.datetime">
        <div>
          {{new Date(show.datetime).toLocaleDateString('en', {month:'short'})}} {{new Date(show.datetime).getDate()}}, {{new Date(show.datetime).getFullYear()}}
        </div>
        <div class="name-location">
          {{show.venue}} @ {{ new Date(show.datetime).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }) }}
          <br/>
          <small v-if="show.notes">{{show.notes}}</small>
        </div>
        <div>{{show.location}}</div>
        
        <!-- <div>
          <small>
            <strong>{{new Date(show.datetime).toLocaleDateString(
              'en',
              {
              weekday: 'short',
              month: 'short',
              day: 'numeric',
              year: 'numeric',
              hour: 'numeric',
              minute: 'numeric'
              }
              )}}</strong>
          </small>         
        </div> -->

      </div>
      <br v-if="length" />
      <br v-if="length" />
      <router-link v-if="length" to="/dates" class="button">View All</router-link>
    </div>
    `
}
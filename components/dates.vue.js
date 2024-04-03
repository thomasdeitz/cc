const Dates = {
    data() {
        return {
            today: new Date(),
            shows: shows
        }
    },
    props: {
      length: String
    },
    computed: {
        sortedShows: function () {
            const showCountShows = [...this.shows];
            console.log('2021 ', showCountShows.filter((show) => {return new Date(show.datetime) >= new Date("2021-01-01T00:00") && new Date(show.datetime) < new Date("2022-01-01T00:00")}).length);
            console.log('2022 ', showCountShows.filter((show) => {return new Date(show.datetime) >= new Date("2022-01-01T00:00") && new Date(show.datetime) < new Date("2023-01-01T00:00")}).length);
            console.log('2023 ', showCountShows.filter((show) => {return new Date(show.datetime) >= new Date("2023-01-01T00:00") && new Date(show.datetime) < new Date("2024-01-01T00:00")}).length);
            console.log('2024 ', showCountShows.filter((show) => {return new Date(show.datetime) >= new Date("2024-01-01T00:00") && new Date(show.datetime) < new Date("2025-01-01T00:00")}).length);
            console.log('2023 so far', showCountShows.filter((show) => {return new Date(show.datetime) >= new Date("2023-01-01T00:00") && new Date(show.datetime) < this.today}).length);
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
    <div class="shows">
      <template v-for="show in sortedShows" :key="show.datetime">
        <div class="date">
          <b>{{new Date(show.datetime).toLocaleDateString('en', {month:'2-digit'})}}.{{new Date(show.datetime).toLocaleDateString('en', {day:'2-digit'})}}.{{new Date(show.datetime).toLocaleDateString('en', {year:'2-digit'})}}</b>
        </div>
        <div class="name-location">
          <b>{{show.location}}</b>
          <br/>
          <small>{{show.venue}} <span v-if="new Date(show.datetime).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }) !== '12:00 AM'">@ {{new Date(show.datetime).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}}</span></small>
          <br/>
          <small class="notes" v-if="show.notes">{{show.notes}}</small>
        </div>
        <div class="action">
          <a :href="show.link" target="_blank" title="Link to buy {{linkText}}" v-if="show.link" class="button">{{show.linkText}}</a>
          <strong v-if="show.linkText && !show.link">{{show.linkText}}</strong>
        </div>
        
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

            </template>
      <br v-if="length" />
      <br v-if="length" />
      
    </div>
    <router-link v-if="length" to="/dates" class="button">View All</router-link>
    <div>
    `
}
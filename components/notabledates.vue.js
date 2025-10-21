const NotableDates = {
    data() {
        return {
            today: new Date(),
            shows: shows
        }
    },
    computed: {
        sortedShows: function () {
            const notableShows = [...this.shows];
            let shows = this.sortShows(notableShows.filter((show) => {return show.notable == "true"}));
            return shows;
        }
    },
    methods: {
        sortShows(arrays) {
          return arrays.sort((b, a) => new Date(a.datetime) - new Date(b.datetime));
        }
    },
    template: `
      <div class="notableshows">
        <template v-for="show in sortedShows" :key="show.datetime">
          <div style="line-height: 1em;" class="name-location">
            <div><b>{{show.notableVenue ? show.notableVenue : show.venue}}</b></div>
            <div v-if="(show.notes && show.notableNotes !== 'false') || (show.notableNotes && show.notableNotes !== 'false')">{{show.notableNotes ? show.notableNotes : show.notes}}</div>
            <div><small>{{show.location}}</small></div>
          </div>
        </template>
    </div>
    `
}
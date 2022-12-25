const Setlist = {
    data() {
        return {
            setlist: songs
        }
    },
    template: `
        <section class="bg-black">
            <h2>Setlist</h2>
            <div>
            <div v-for="song in setlist" :key="song.name">
                <div>
                    <strong>{{song.name}}</strong> - {{song.artist}}
                </div>
            </div>
        </section>
    `
}
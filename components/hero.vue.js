const Hero = {
    computed: {
        letter: function () {
            const letters = ['a', 'b', 'c', 'd', 'e'];
            const randomIndex = Math.floor(Math.random() * letters.length);
            const randomLetter = letters[randomIndex];
            return randomLetter;
        }
    },
    template: `
        <section id="hero" class="3" :class="[letter]"></section>
    `    
}
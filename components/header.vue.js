const Pageheader = {
    template: `
        <header>
            <nav>
                <router-link to="/">
                    <Logo />
                </router-link>
                <ul>
                    <li><router-link to="/bio">About</router-link></li>
                    <li><router-link to="/shows">Shows</router-link></li>
                    <!--
                        <li><router-link to="/store">Store</router-link></li>
                        <li><router-link to="/contact">Contact</router-link></li>
                    -->
                </ul>
                <br />
                <Connections />
            </nav>
        </header>
    `
}
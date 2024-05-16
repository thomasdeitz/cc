const routes = [
    {
      path: "/",
      name: "Home",
      component: HomePage,
      meta: {
        props: {bodyClass: "home"}
      },
    },
    {
      path: "/presskit",
      name: "PressKit",
      component: PressKit,
      meta: {
        props: {bodyClass: "presskit"}
      },
    },
    { // Redirect
      path: "/dates",
      component: DatesPage,
      meta: {
        props: {bodyClass: ""}
      },
    },
    {
      path: "/shows",
      component: DatesPage,
      meta: {
        props: {bodyClass: ""}
      },
    },
    {
      path: "/store",
      component: StorePage,
      meta: {
        props: {bodyClass: ""}
      },
    },
    {
      path: "/music",
      component: MusicPage,
      meta: {
        props: {bodyClass: ""}
      },
    },
    { // Redirect
      path: "/bio",
      component: BioPage,
      meta: {
        props: {bodyClass: ""}
      },
    },
    {
      path: "/band",
      component: BioPage,
      meta: {
        props: {bodyClass: ""}
      },
    },
    {
      path: "/contact",
      component: ContactPage,
      meta: {
        props: {bodyClass: ""}
      },
    },
    { // 404 Catch
      path: "/:pathMatch(.*)*",
      component: HomePage,
      meta: {
        props: {bodyClass: "home"}
      },
    }
  ];

  const router = VueRouter.createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: VueRouter.createWebHashHistory(),
    scrollBehavior(to, from, savedPosition) {
      // always scroll to top
      return { top: 0 }
    },
    routes, // short for `routes: routes`
  });
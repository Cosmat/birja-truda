const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Index.vue") }],
    meta: {
      auth: false,
    },
  },
  {
    path: "/login",
    component: () => import("layouts/EmptyLayout.vue"),
    children: [
      { path: "/login", component: () => import("components/TheLogin") },
    ],
    meta: {
      auth: false,
    },
  },
  {
    path: "/registr",
    component: () => import("layouts/EmptyLayout.vue"),
    children: [
      { path: "/registr", component: () => import("components/TheRegistr") },
    ],
    meta: {
      auth: false,
    },
  },
  {
    path: "/profile",
    component: () => import("layouts/EmptyLayout.vue"),
    children: [
      { path: "/profile", component: () => import("pages/profile.vue") },
    ],
    meta: {
      auth: true,
    },
  },
  {
    path: "/error",
    component: () => import("layouts/EmptyLayout.vue"),
    children: [
      { path: "/error", component: () => import("pages/Error404.vue") },
    ],
    meta: {
      auth: false,
    },
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;

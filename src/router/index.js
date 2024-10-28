import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import JobsView from "@/views/JobsView.vue";
import JobView from "@/views/JobView.vue";
import NewJobView from "@/views/NewJobView.vue";
import EditJobView from "@/views/EditJobView.vue";
import NotFoundView from "@/views/NotFoundView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/jobs/:id",
      name: "jobs.show",
      component: JobView,
    },
    {
      path: "/jobs/new",
      name: "jobs.new",
      component: NewJobView,
    },
    {
      path: "/jobs/edit/:id",
      name: "jobs.edit",
      component: EditJobView,
    },
    {
      path: "/jobs",
      name: "jobs",
      component: JobsView,
    },
    {
      path: "/:catchAll(.*)",
      name: "notfound",
      component: NotFoundView,
    },
  ],
});

export default router;

import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import JobsView from "@/views/JobsView.vue";
import NewJobView from "@/views/NewJobView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/jobs",
      name: "jobs",
      component: JobsView,
    },
    {
      path: "/jobs/new",
      name: "jobs.new",
      component: NewJobView,
    },
  ],
});

export default router;

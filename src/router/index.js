import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NewStudent from "../views/NewStudent.vue";
import EditStudent from "../views/EditStudent.vue";
import ViewStudent from "../views/ViewStudent.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  // path to creating a student
  {
    path: "/createStudent",
    name: "createStudent",
    component: NewStudent,
  },
  // path to modify  a student
  {
    path: "/editStudent/:id",
    name: "editStudent",
    component: EditStudent,
  },
  // path to view a student
  {
    path: "/viewStudent/:id",
    name: "viewStudent",
    component: ViewStudent,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

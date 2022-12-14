import { createRouter, createWebHistory } from "vue-router";
import Hello from "./HelloVue.vue";
import Posts from "./PostsVue.vue";
import Post from "./PostVue.vue";
import NewPost from "./NewPost.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "Hello",
      component: Hello,
      path: "/hello",
    },
    {
      name: "posts",
      component: Posts,
      path: "/posts",
      children: [
        {
          name: "NewPost",
          component: NewPost,
          path: "new",
        },
        {
          name: "post",
          component: Post,
          path: ":id",
        },
      ],
    },
  ],
});

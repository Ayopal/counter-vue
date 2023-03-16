/** @format */

import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/homePage.vue";
import Counter from "@/views/counterPage.vue";
import Error from "@/views/errorPage.vue";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/",
			name: "Home",
			component: Home,
		},

		{
			path: "/counter",
			name: "Counter",
			component: Counter,
		},

		{
			path: "/:catchAll(.*)",
			name: "Error",
			component: Error,
		},
	],
});

createApp(App).use(router).mount("#app");


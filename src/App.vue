<!-- @format -->

<template>
	<!-- <img alt="Vue logo" src="./assets/logo.png"> -->
	<NavBar />
	<router-view></router-view>
</template>

<script>
//register components here

import NavBar from "./components/NavBar";

export default {
	name: "App",
	components: {
		NavBar,
	},
};
</script>

<style >
@import url("https://fonts.googleapis.com/css2?family=Sono:wght@300;400;500;600;700;800&display=swap");
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
body {
	width: 100%;
	height: 100%;
  font-family: 'Sono', sans-serif;
}

#app {
	width: 100%;
	height: 100%;
}
</style>

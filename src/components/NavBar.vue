<!-- @format -->

<template>
	<nav>
		<router-link to="/" class="logo-link">
			<div class="logo">
				<img alt="" src="../assets/logo.png" />
				<span>Countly</span>
			</div>
		</router-link>

		<ul>
			<li v-for="link in links" :key="link.id" :class="link.cl">
				<router-link :to="link.page" class="nav-list">
					{{ link.name }}
				</router-link>
			</li>
		</ul>
	</nav>
</template>

<script>
//importing components here

export default {
	name: "NavBar",

	data: function () {
		return {
			links: [
				{
					id: 1,
					name: "Home",
					page: "/",
					cl: "btn",
				},
				{
					id: 2,
					name: "Counter",
					page: "/counter",
					cl: "bn5",
				},
			],
		};
	},
};
</script>

<style scoped>
/* colors
#CF990F - gold
#8D8F92 - grey
#000000 - black
#DEE1E6- light grey
 */

nav {
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1rem 6rem;
	border-bottom: 3px solid #000;
	height: 15vh;
}

.logo {
	width: 20%;
	display: flex;
	align-items: center;
	gap: 5px;
}

.logo span {
	font-size: 30px;
	font-weight: bold;
	color: #cf990f;
}

.logo-link {
	text-decoration: none;
}

.logo img {
	width: 100%;
}

ul {
	display: flex;
	align-items: center;
	/* justify-content: end; */
	gap: 5rem;
	list-style: none;
	font-size: 24px;
}

.nav-list {
	text-decoration: none;
	outline: none;
	color: #cf990f;
	font-weight: bold;
}

.btn {
	transition: all 0.2s linear;
}

.btn:hover {
	transform: scale(1.1);
	letter-spacing: 1px;
}

.bn5 .nav-list {
	color: #fff;
	font-size: 20px;
	letter-spacing: 2px;
}

.bn5 {
	padding: 0.4em 1em;
	border: none;
	outline: none;
	color: #fff;
	background: #cf990f;
	cursor: pointer;
	position: relative;
	z-index: 0;
	border-radius: 5px;
}

.bn5:before {
	content: "";
	background: linear-gradient(
		45deg,
		#ff0000,
		#ff7300,
		#fffb00,
		#48ff00,
		#00ffd5,
		#002bff,
		#7a00ff,
		#ff00c8,
		#ff0000
	);
	position: absolute;
	top: -2px;
	left: -2px;
	background-size: 400%;
	z-index: -1;
	filter: blur(5px);
	width: calc(100% + 4px);
	height: calc(100% + 4px);
	animation: glowingbn5 20s linear infinite;
	opacity: 0;
	transition: opacity 0.3s ease-in-out;
	border-radius: 10px;
}

@keyframes glowingbn5 {
	0% {
		background-position: 0 0;
	}
	50% {
		background-position: 400% 0;
	}
	100% {
		background-position: 0 0;
	}
}

.bn5:active {
	color: #fff;
}

.bn5:active:after {
	background: transparent;
}

.bn5:hover:before {
	opacity: 1;
}

.bn5:after {
	z-index: -1;
	content: "";
	position: absolute;
	width: 100%;
	height: 100%;
	background: #cf990f;
	left: 0;
	top: 0;
	border-radius: 10px;
}

@media only screen and (max-width: 800px) {
	nav {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 1rem 5%;

		border-bottom: 3px solid #000;
		height: 15vh;
	}

	.logo {
		width: 20%;
	}

	.logo span {
		font-size: 1.5rem;
	}

	ul {
		gap: 0rem;
		font-size: 18px;
	}

.bn5 .nav-list {
  font-size: 14px;
}

	.btn {
		display: none;
	}
}
</style>

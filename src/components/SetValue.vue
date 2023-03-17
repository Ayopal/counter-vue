<!-- @format -->

<template>
	<button>
		<span> SetValue </span>
		<img src="../assets/set.png" alt="" />
	</button>
</template>

<style scoped>
/* colors
#CF990F - gold
#8D8F92 - grey
#000000 - black
#DEE1E6- light grey
 */

button {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 5px;
	background: #000;
	color: #fff;
	padding: 0.5rem 1rem;
	font-size: 18px;
	font-weight: 600;
	outline: none;
	border-radius: 50px;
	width: 200px;
	cursor: pointer;
}

@media only screen and (max-width: 800px) {
	button {
		border-radius: 25%;
		width: 50px;
	}
	button span {
		display: none;
	}
}
</style>

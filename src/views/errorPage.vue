<!-- @format -->

<template>
	<div class="container">
		<div class="errortext">
			<h1>Oooops!!</h1>
			<h2>You are looking for a page that doesn't exist'</h2>
			<p>
				I suggest you go back to the
				<router-link to="/" class="link">home page</router-link> and find
				yourself another route lol 😂❤️
			</p>
		</div>

		<div class="errorimg">
			<img src="../assets/404.png" />
		</div>
	</div>
</template>

<style scoped>
.container {
	width: 100%;
	height: 85vh;
	display: flex;
	align-items: center;
	/* justify-content: center; */
	justify-content: space-between;
	flex-direction: row;
	padding: 1rem 5rem;
}

.errortext {
	width: 50%;
}

h1 {
	font-size: 150px;
	font-weight: 600;
	line-height: 120%;
}

h2 {
	margin-bottom: 20px;
}

.link {
	text-decoration: none;
	padding: 5px 10px;
	border: 1px solid #8d8f92;
	color: #cf990f;
}
.errorimg {
	width: 40%;
}

.errorimg img {
	width: 100%;
}

nav {
	border: none;
}

@media screen and (max-width: 800px) {
	.container {
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 1rem 2rem;
	}

	.errortext {
		width: 100%;
		text-align: center;
	}

    .errortext p{
        padding: 10px 0px;
        line-height: 40px;

        }

	h1 {
		font-size: 50px;
		font-weight: 600;
		line-height: 120%;
	}

	.errorimg {
		width: 100%;
	}

	.errorimg img {
		width: 100%;
	}
}
</style>

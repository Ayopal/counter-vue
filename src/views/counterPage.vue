<!-- @format -->

<template>
	<div class="container">
		
		<div class="left-content">
		<div class="count">
			
			<h1>Counter</h1>
			<input
				type="text"
				placeholder="input a set value here"
				v-model.number="newValue"
			/>
			
			<p class="countly">Countly: {{ count }}</p>

			<select v-model="color">
				<option value='' disabled selected>Select a color to Fill Box</option>
				<option value="#ff0000">Red</option>
				<option value="#0000FF">Blue</option>
				<option value="#CF990F"> Gold</option>
				<option value="#000000"> Black </option>
			</select>
			<h3> Hexcode: <span :style="{color: `${color}`}"> {{ color }} </span> </h3>
			<!-- <p>Counter: {{ error.value }}   </p> -->
			<p v-show ="color && count == 100" style="color:green" class="error"> {{ msg }}   </p>
			<p v-show ="color && count >= 1" style="color:green" class="error"> {{ msg }}   </p>
			<p v-show ="color && count < 1" style="color:green" class="error"> {{ msg }}   </p>
			<p v-if ="!color && count == 0" style="color:red" class="error"> {{ msg }}   </p>
			<p v-if ="count <= 0" style="color:red" class="error"> {{ msg }}   </p>
			<p v-if ="count > 100" style="color:red" class="error"> {{ msg }}   </p>
			</div>

			<div class="btn">
			
			<div class="btn1">
				<Increment @click="increase" class="button"/>
				<Decrement @click="decrease" class="button"/>
			</div>
			<div class="btn2">
				<reset @click="resetValue" class="button"/>
				<setvalue @click="setValue" value="newValue" class="button"/>
			</div>
		</div>
	</div>
	
	<!-- <p :style="{fontSize: `${count}rem`}">Here is the counter pages</p> -->
	
	

		<div class="box1">
			<div
				class="box2"
				:style="{ width: `${count}%`, height: `${count}%`, background: `${color}` }"
			></div>
		</div>
	</div>
</template>

<script setup>
// import all composables

import Increment from "../components/IncreMent";
import Decrement from "../components/DecreMent";
import reset from "../components/ResetValue";
import setvalue from "../components/SetValue";

import { useCounter } from "../composable/counter";

const { msg, color, count, newValue, increase, decrease, resetValue, setValue } =
	useCounter();


// console.log(newValue.value);
console.log(msg);




</script>

<style scoped>
/* color: #C5CBD6 */

.container {
	/* background: #c5cbd6; */
	height: 85vh;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0rem 6rem;
}


input{
	width: 60%;
	height: 40px;
	padding: 1rem;
}

select{
padding: 5px;
}

.btn {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content:center;
	gap: 100px;
}

.button{
	
  transition: all 0.5s linear;
}

.button:hover{
  transform: scale(1.02);
}

.btn1, .btn2, .count {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 10px;

}
.left-content {
	width: 40%;
}



.count{
	position: relative;
	border: 1px solid black;
	padding: 5rem 10rem;
	margin-bottom: 20px;
	width: 100%;
	white-space: nowrap;
}

.countly {
	font-size: 16px;
	font-weight: 600;
}

.error {
	position: absolute;
	bottom: 10%;
	left: 50%;
	transform: translate(-50%, -50%);
}

.box1 {
	width: 600px;
	height: 600px;
	border: 1px solid black;
	position: relative;
}

.box2 {
	position: absolute;
	background: #0756e9;
	top: 0;
	left: 0;
	border: 1px solid black;
}


@media only screen and (max-width:800px){
.container{
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}



.left-content {
	width: 100%;
	flex: 1;
}



.count{
	position: relative;
	border: none;
	padding: 1rem 0rem 0rem;
	margin-bottom: 20px;
	align-items: center;
	justify-content: center;
	width: 100%;
}

h3 {
	font-size: 14px;
	width: 100%;
	display: block;
	white-space: nowrap;
	text-align:center;
	margin-bottom: 20px;
}

.btn {
	gap: 30px;
	margin-bottom: 5px;
}

.btn1, .btn2 {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	gap: 10px;

}

.box1 {
	width: 100vw;
	height: 100vh;;
	border: 1px solid black;
	position: relative;
}

.box2 {
	position: absolute;
	background: #0756e9;
	top: 0;
	left: 0;
	border: 1px solid black;
	/* border-radius: 0px 0px 50px 50px; */
}

.error {
	position: absolute;
	bottom: -5%;
	left: 50%;
	transform: translate(-50%, -50%);
	
	font-size: 12px;
	
	
}

}

@media only screen and (min-width: 820px) and (max-width: 1024px) {
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.left-content {
		width: 100%;
		flex: 1;
	}

	.count {
		position: relative;
		border: none;
		padding: 1rem 0rem 0rem;
		margin-bottom: 20px;
		align-items: center;
		justify-content: center;
		width: 100%;
	}

	.countly {
	font-size: 20px;
	font-weight: 600;
	letter-spacing: 5px;
	margin: 5px 0px;
}

	h3 {
		font-size: 18px;
		width: 100%;
		display: block;
		white-space: nowrap;
		text-align: center;
		margin-bottom: 20px;
	}

	.btn {
		gap: 10px;
		margin-bottom: 5px;
	}

	.btn1,
	.btn2 {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		gap: 10px;
	}

	.box1 {
		width: 100vw;
		height: 100vh;
		;
		border: 1px solid black;
		position: relative;
	}

	.box2 {
		position: absolute;
		background: #0756e9;
		top: 0;
		left: 0;
		border: 1px solid black;

	}

	.error {
		position: absolute;
		bottom: -5%;
		left: 50%;
		transform: translate(-50%, -50%);
		/* white-space: nowrap; */
		font-size: 12px;
	}
}
</style>

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
			
			<p>Countly: {{ count }}</p>
			<!-- <p>Counter: {{ increase }}   </p> -->
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
				:style="{ width: `${count}%`, height: `${count}%` }"
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

const { count, newValue, increase, decrease, resetValue, setValue } =
	useCounter();

// console.log(newValue.value);
// console.log(count.value);
</script>

<style scoped>
/* color: #C5CBD6 */

.container {
	background: #c5cbd6;
	height: 85vh;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0rem 6rem;
}


input{
	width: 100%;
	height: 40px;
	padding: 1rem;
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
  transform: scale(1.05);
}

.btn1, .btn2, .count {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 10px;

}

.count{
	border: 1px solid black;
	padding: 5rem 10rem;
	margin-bottom: 20px;
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
</style>

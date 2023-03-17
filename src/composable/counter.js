/** @format */

import { ref } from "vue";

export function useCounter() {
	const count = ref(0);
	const newValue = ref(0);
	const color = ref("");
	var msg = ref("");

	const increase = () => {
		if (count.value == 100) {
			// alert("You can't add more than 100 X");
			msg.value = " You have reached the maximum value of 100 X";
		} else if (color.value == "") {
			// alert("You can't add more than 100 X");
			msg.value = "Error: 🙌🙌 Boss abeg pick a color to conitnue";
		} else {
			count.value++;
			newValue.value = count.value;
			msg.value = "loading...";

			// console.log(typeof(newValue.value));
			// console.log(typeof(count.value));
		}
	};

	const decrease = () => {
		if (count.value < 1) {
			msg.value = "Error: Opps😒 you cannot go below zero";
		} else if (color.value == "") {
			// alert("You can't add more than 100 X");
			msg.value = "Error: Please select a color to conitnue";
		} else {
			count.value--;
			newValue.value = count.value;
			msg.value = "unloading...";
		}
	};
	const resetValue = () => {
		count.value = 0;
		newValue.value = 0;
		color.value = "";
		msg.value = "";
	};

	const setValue = () => {
		if (newValue.value > 100 || newValue.value < 1) {
			msg.value = "Error: Please add a number between 1 - 100 X";
		} else if (newValue.value == 100 && color.value !== "") {
			msg.value = " You have reached the maximum value of 100 X";
			count.value = newValue.value;
		} else if (color.value == "") {
			msg.value = "Error: Please select a color to conitnue";
		} else {
			count.value = newValue.value;
			msg.value = "";
		}
	};

	return {
		msg,
		color,
		count,
		newValue,
		increase,
		decrease,
		resetValue,
		setValue,
	};
}

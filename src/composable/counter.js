/** @format */

import { ref } from "vue";

export function useCounter() {
	const count = ref(0);
	const newValue = ref(0);

	const increase = () => {
		if (count.value == 100) {
			alert("You can't add more than 100 X");
		} else {
			count.value++;
			newValue.value = count.value;

			// console.log(typeof(newValue.value));
			// console.log(typeof(count.value));
		}
	};

	const decrease = () => {
		if (count.value < 0) {
			alert("You can't go below 0");
		} else {
			count.value--;
			newValue.value = count.value;
		}
	};
	const resetValue = () => {
		count.value = 0;
		newValue.value = 0;
	};

	const setValue = () => {
		if (newValue.value > 100 || newValue.value < 0) {
			alert("You can't add more than 5 items");
		} else {
			count.value = newValue.value;
		}
	};

	return { count, newValue, increase, decrease, resetValue, setValue };
}

const app = new Vue({
	template:
		'<div>' +
		'<button @click="increment">Click here</button>' +
		'<br>You clicked {{clicks}} times.' +
		'</div>',
	el: '#app',
	data() {
		return {clicks: 0};
	},
	methods: {
		increment() {
			this.clicks++;
		}
	}
});
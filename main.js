const Clicker = Vue.extend({
	template: '<div><button @click="emitClick">Click here</button></div>',
	methods: {
		emitClick() {
			this.$emit('click');
		}
	}
});

const Counter = Vue.extend({
	template: '<div>You clicked {{clicks}} times.</div>'
	props: {
		clicks: Number,
	}
});

const app = new Vue({
	template:
		'<div>' +
		'<Clicker @click="increment"/>' +
		'<Counter :clicks="clicks" />' +
		'</div>',
	el: '#app',
	components: {
		Clicker,
		Counter,
	},
	data() {
		return {clicks: 0};
	},
	methods: {
		increment() {
			this.clicks++;
		}
	}
});

const app = new Vue({
  el: '#app',
  data() {
    return {clicks: 0}
  },
  methods: {
    add() {
      this.clicks++;
    }
  },
  template: '<div><button @click="add">Click here</button><br>You clicked {{clicks}} times.</div>'
});

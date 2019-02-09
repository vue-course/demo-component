const app = new Vue({
  el: '#app',
  data() {
    return {clicks: 0}
  },
  template: '<div><button>Click here</button><br>You clicked {{clicks}} times.</div>'
});

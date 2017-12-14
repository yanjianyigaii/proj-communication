<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <router-view/>
    <ul id="messages"></ul>
    <form action="">
      <input id="m" autocomplete="off" /><button>Send</button>
    </form>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Test from './components/Test'
import TasksList from './components/TasksList'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
    var newRoutes = [
      {
        path: '/helloworld',
        name: 'HelloWorld',
        component: HelloWorld
      },
      {
        path: '/test',
        name: 'Test',
        component: Test
      },
      {
        path:'/tasks',
        name:'Tasks',
        component: TasksList
      }
    ]
    this.$router.addRoutes(newRoutes);

    var socket = io();
    $('form').submit(function(){
      socket.emit('chat message', $('#m').val());
      $('#m').val('');
      return false;
    });
    socket.on('chat message', function(msg){
      $('#messages').append($('<li>').text(msg));
    });
  }
}

</script>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font: 13px Helvetica, Arial; }
  form { background: #000; padding: 3px; position: fixed; bottom: 0; width: 100%; }
  form input { border: 0; padding: 10px; width: 90%; margin-right: .5%; }
  form button { width: 9%; background: rgb(130, 224, 255); border: none; padding: 10px; }
  #messages { list-style-type: none; margin: 0; padding: 0; }
  #messages li { padding: 5px 10px; }
  #messages li:nth-child(odd) { background: #eee; }
</style>
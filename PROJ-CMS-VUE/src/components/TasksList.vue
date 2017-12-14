<template>
  <div class="tasks-list">
    <h1>{{ title }}</h1>
    <ul id="tasks">
      <li v-for="task in tasks" v-bind:key="task.id">
        {{ task.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      title: 'Tasks',
      tasks:[]
    }
  },
  mounted(){
    var allTasks = [
      {
        id: 1,
        name: 'task 1',
        description: 'task 1 description'
      },
      {
        id: 2,
        name: 'task 2',
        description: 'task 2 description'
      }
    ];

    this.tasks = allTasks;
  }
}
</script>

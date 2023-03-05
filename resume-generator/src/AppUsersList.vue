<template>
    <div v-if="users.length !==0">
        <div class="card inline" :key="user.id" v-for="user in users">
         <h3> {{ user.firstName }}</h3>
         <button class="btn danger" @click="$emit('remove', user.id)">Delete</button>
        </div>
    </div>
    <div class="card center" v-else>
        <h4>No user</h4>
        <button class="btn" @click="$emit('load')">Load users</button>
    </div>
</template>

<script>
export default {
  props: ['users'],
  emits: ['load', 'remove']
}
</script>

<style scoped>
    .inline{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
</style>

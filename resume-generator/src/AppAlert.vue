<template>
    <div class="alert" :class="alert.type" v-if="alert">
        <h4>{{ alert.title }}</h4>
        <p>{{ alert.text }}</p>
        <button class="btn" :class="alert.type" @click="$emit('close')">Close</button>
    </div>
</template>

<script>

export default {
  props: ['alert'],
  emits: ['close']
}
</script>

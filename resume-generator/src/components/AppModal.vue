<template>
  <div class="modal-backdrop" @click.self="$emit('close')">
    <div class="modal">
        <h3>{{ comment.email }}</h3>
        <p>{{ comment.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['comment'],
  data () {
    return {}
  },
  mounted () {
    console.log(this.comment)
  }
}
</script>

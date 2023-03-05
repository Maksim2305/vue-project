<template>
    <ul class="list">
        <li class="list-item" @click=openComment>
          <div>
            <p><strong>{{ comment.email }}</strong></p>
            <small>{{ comment.body }}</small>
          </div>
        </li>
      </ul>
</template>
<script>

export default {
  props: ['comment'],
  methods: {
    openComment () {
      this.$emit('show-commnent', this.comment)
    }
  }
}
</script>

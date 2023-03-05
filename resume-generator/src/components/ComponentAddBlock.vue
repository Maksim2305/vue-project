<template>
    <form class="card card-w30" @submit.prevent="addBlock">
      <div class="form-control">
        <label for="type">Тип блока</label>
        <select id="type" v-model="type">
          <option value="title">Заголовок</option>
          <option value="subtitle">Подзаголовок</option>
          <option value="avatar">Аватар</option>
          <option value="text">Текст</option>
        </select>
      </div>

      <div class="form-control">
        <label for="value">Значение</label>
        <textarea id="value" rows="3" v-model="value" v-focus></textarea>
      </div>

      <button class="btn primary" :disabled="!isAllowToAdd">Добавить</button>
    </form>
</template>

<script>
import focusDirective from './utils/focusDirective'
export default {
  emits: ['add-block'],
  data () {
    return {
      blocks: [],
      value: '',
      type: 'title'
    }
  },
  methods: {
    addBlock () {
      this.$emit('add-block', {
        type: this.type,
        value: this.value,
        id: Date.now()
      })
      this.value = ''
      this.type = 'title'
    }
  },
  computed: {
    isAllowToAdd () {
      return this.value.length > 3
    }
  },
  directives: focusDirective
}
</script>

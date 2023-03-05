<template>

    <div class="modal alert" :class="type">
        <div style="display: flex; align-items: center; justify-content: space-between;">
            <h3 v-color:color.hover="myColor">{{ title }}</h3>
            <!-- <button :class="type" class="btn"
             @click="$emit('close')"
            >{{ textBtn || "Закрыть" }}
            </button> -->
            <button class="btn" @click="myColor = 'blue'">Изменить</button>
        </div>
        <p>{{ text }}</p>
        <p>Это окно закроется через {{ count }}</p>
    </div>

</template>

<script>
import colorDirective from './utils/colorDirective'

export default {
  data () {
    return {
      myColor: 'green',
      count: 5,
      interval: ''
    }
  },
  $emits: ['close'],
  props: {
    text: String,
    title: String,
    textBtn: String,
    type: {
      type: String,
      requiared: false,
      default: 'primary',
      validate (val) {
        ['primary', 'danger', 'warning'].includes(val)
      }
    }
  },
  directives: {
    color: colorDirective
  },
  unmounted () {
    console.log('unmounted')
    clearInterval(this.interval)
  },
  mounted () {
    this.interval = setInterval(() => {
      this.count--
      if (this.count === 0) {
        this.$emit('close')
      }
    }, 1000)
  }
}
</script>

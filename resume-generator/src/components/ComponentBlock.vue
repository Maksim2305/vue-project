<template>
    <div>
        <component v-for="block in blocks"
        :key="block.id"
        :is="'component-'+block.type"
        v-bind="{value: block.value}">
        </component>
    </div>
</template>

<script>
import ComponentAvatar from './ComponentAvatar.vue'
import ComponentTitle from './ComponentTitle.vue'
import ComponentSubtitle from './ComponentSubtitle.vue'
import ComponentText from './ComponentText.vue'
export default {
  props: ['blocks'],
  components: {
    ComponentTitle,
    ComponentSubtitle,
    ComponentAvatar,
    ComponentText
  },
  mounted () {
  }
}
</script>

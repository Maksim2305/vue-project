<template>
    <div v-if="message" :class="['alert', message.type]">
        <p class="alert-title">{{  message.title}}</p>
        <p>{{ message.value }}</p>
        <span class="alert-close" @click="close">&times;</span>
    </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
    setup(props) {
        const store = useStore()
        return {
            message: computed(() => store.state.message),
            close: () => store.commit('removeMessage')
        }
    }

    
}
</script>
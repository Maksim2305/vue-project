<template>
    <div class="sidebar" v-if="sidebar">
        <span class="sidebar-close" @click="close" >&times;</span>
        <div class="sidebar-content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem perferendis molestiae ipsa minima neque? Placeat voluptatem laudantium ab voluptas eius.</p>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
    setup(){
        const store = useStore()
        const sidebar = computed(() => store.state.sidebar)
        return {
            close: () => store.commit('closeSidebar'),
            sidebar
        }
    }
}
</script>
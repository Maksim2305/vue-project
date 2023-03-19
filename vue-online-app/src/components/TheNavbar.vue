<template>
    <nav class="navbar">
        <h3>Панель навигации <strong v-if="email">{{ email }}</strong></h3>
        <ul class="navbar-menu">
            <li>
                <router-link to="/">Заявки</router-link>
            </li>
            <li>
                <router-link to="/help">Помощь</router-link>
            </li>
            <li>
                <a href="#" @click.prevent="open">Сообщения</a>
            </li>
            <li>
                <a href="#" @click.prevent="logout">Выход</a>
            </li>
        </ul>
    </nav>
</template>

<script>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default {
    setup() {
        const router = useRouter()
        const store = useStore()
        const email = computed(() => store.getters['auth/email'])
        console.log(email)
        return {
            logout: ()=> {
                store.commit('auth/logout')
                router.push('/auth')
            },
            email,
            open: ()=> store.commit('openSidebar')
           
        }
    }
}
</script>
<template>
    <the-sidebar />
    <the-navbar />
    <div class="container with-nav">
        <alert-message/>
        <router-view></router-view>
    </div>
</template> 

<script>
import TheNavbar from '../components/TheNavbar.vue';
import AlertMessage from '../components/ui/AlertMessage.vue';
import TheSidebar from '../components/TheSidebar.vue';
export default {
    components: { TheNavbar, AlertMessage, TheSidebar }
    
}
</script>
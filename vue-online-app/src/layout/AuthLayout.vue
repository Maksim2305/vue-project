<template>
    <div class="container">
        <alert-message/>
        <router-view></router-view>
    </div>
</template>

<script>
import AlertMessage from '../components/ui/AlertMessage.vue';
export default {
    components: {AlertMessage}
}
</script>
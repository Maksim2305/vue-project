<template>
    <div class="question"  @click="open">
        <div class="question-title">{{ question.title }}</div>
        <div class="question-body" v-if="isOpen">{{ question.body }}</div>
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
    props: ['question'],
    setup() {
        const isOpen = ref(false)
        return {
            open: () => {
                isOpen.value = !isOpen.value
            },
            isOpen
        }
    }

}
</script>
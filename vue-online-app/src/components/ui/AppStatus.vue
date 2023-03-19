<template>
    <span :class="['badge', className]">{{ text }}</span>
</template>

<script>
import {ref, watch } from 'vue'
import { useStore } from 'vuex'

export default {
    props: {
        type: {
            type: String,
            required: true,
            validator(value) {
                return ['active', 'done', 'cancelled', 'pending'].includes(value)
            }
        }
    },
    setup(props) {
        watch(props, (val) => {
            className.value = classMap[val.type]
            text.value = textMap[val.type]
        })
        const classMap = {
            active: "primary",
            cancelled: "danger",
            done: "primary",
            pending: "warning"
        }
        const textMap = {
            active: "Активно",
            cancelled: "Отменено",
            done: "Завершено",
            pending: "Выполняется"
        }
        const className = ref(classMap[props.type])
        const text = ref(textMap[props.type])
        
        return {
            className,
            text
        }
    }
}
</script>
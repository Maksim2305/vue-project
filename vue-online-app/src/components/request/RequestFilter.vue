<template>
    <div class="filter">
        <div class="form-control">
            <input type="text" placeholder="Начните вводить имя..." v-model="text">
        </div>
       <div class="form-control">
        <select  v-model="status">
            <option disabled selected>Выберите статус</option>
            <option value="cancelled">Отменено</option>
            <option value="pending">Выполняется</option>
            <option value="active">Активно</option>
            <option value="done">Завершено</option>
        </select>
       </div>
       <button class="btn warning" v-if="isActive" @click="reset">Очистить</button>
    </div>
</template>

<script>
import { ref, watch, computed } from 'vue'
export default {
    emits: ['update:modelValue'],
    props: ['modelValue'],
    
    
    setup(_, {emit}) {
        const text = ref()
        const status = ref()
        const isActive = computed(() => text.value || status.value)

        watch([text, status], values => {
            emit('update:modelValue', {
                text: values[0],
                status: values[1]
            })
        })

        return {
            text,
            status,
            isActive,
            reset: () => {
                text.value = ''
                status.value = null
            }
        }
    }
    
    
}
</script>
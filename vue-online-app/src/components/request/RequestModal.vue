<template>
    <form @submit.prevent="onSubmit">
        <div class="form-control" :class="{invalid: fError}">
            <label for="fio">ФИО</label>
            <input type="text" id="fio" v-model="fio" @blur="fBlur">
            <small v-if="fError">{{ fError }}</small>
        </div>
        <div class="form-control" :class="{invalid: pError}">
            <label for="phone">Телефон</label>
            <input type="text" id="phone" v-model="phone" @blur="pBlur">
            <small v-if="pError">{{ pError }}</small>
        </div>
        <div class="form-control" :class="{invalid: aError}">
            <label for="amount">Сумма</label>
            <input type="text" id="amount" v-model="amount" @blur="aBlur">
            <small v-if="aError">{{ aError }}</small>

        </div>
        <div class="form-control">
            <label for="status">Статус</label>
            <select  id="status" v-model="status">
                <option value="done">Завершено</option>
                <option value="cancelled">Отменено</option>
                <option value="pending">Выполняется</option>
                <option value="active">Активно</option>
            </select>
        </div>
        <button class="btn primary" :disabled="isSubmitting">Создать</button>
    </form>
</template>


<script>
import { useStore } from 'vuex'
import { useRequestForm } from '../../use/request-form'
export default {    
    setup(_, { emit }) {
        const store = useStore()
        const submit = async values => {
            await store.dispatch('request/create', values)
            emit('created')
        }
        
        return {
            ...useRequestForm(submit)
        }
    }
}
</script>
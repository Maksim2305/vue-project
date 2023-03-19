<template>
    <form class="card" >
        <h1>Войти в систему</h1>
        <div :class="['form-control', {invalid: eError}]">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="email" @blur="eBlur">
            <small v-if="eError">{{ eError }}</small>
        </div>
        <div :class="['form-control', {invalid: pError}]">
            <label for="password">Password</label>
            <input type="password" id="password" v-model="password" @blur="pBlur">
            <small v-if="pError">{{ pError }}</small>
        </div>
        <button class="btn primary" type="submit" :disabled="isSubmitting || isTooManyAttempts" @click.prevent="onSubmit">Войти</button>
        <div v-if="isTooManyAttempts" class="text-danger">Превышено количество попыток</div>
    </form>
</template>

<script>
import {useLoginForm} from '../use/login-form'
import {useRoute} from 'vue-router'
import { useStore } from 'vuex'
 
export default {
    setup () {
        const route = useRoute()
        const store = useStore()
        if(route.query.message === 'auth'){
            store.dispatch('setMessage', {
                value: 'Пожалуйста, авторизуйтесь',
                type: 'warning',
                title: 'Внимание'
            })
        } 
        return{
            ...useLoginForm()
        }
    }
}
</script>
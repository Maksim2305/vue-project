import { computed, watch } from 'vue'
import { useField, useForm } from 'vee-validate'
import * as yup from 'yup'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export function useLoginForm() {
    const store = useStore()
    const router = useRouter()
    const {handleSubmit, isSubmitting, submitCount} = useForm()
        const { value: email, errorMessage: eError, handleBlur: eBlur} = useField(
            'email',
            yup
            .string()
            .trim()
            .required('введите email')
            .email('email должен быть валидным')
            )
        const { value: password, errorMessage: pError, handleBlur: pBlur} = useField(
            'password',
            yup
            .string()
            .trim()
            .min(6,'пароль не менее 6 символов')
            .required('введите пароль')
            )
            const onSubmit = handleSubmit(async (_,values) => {
               try{
                await store.dispatch('auth/login', values)
                router.push('/')
               } catch (e) {
                    
               }
            })
            const isTooManyAttempts = computed(()=> submitCount.value >= 5)
            watch(isTooManyAttempts, val =>{
                if(val) {
                    setTimeout(()=> submitCount.value = 0, 2000)
                }
            })
        return {
            email,
            password,
            eBlur,
            pBlur,
            pError,
            eError,
            onSubmit,
            isSubmitting,
            isTooManyAttempts,
        }
}
<template>
    <app-loader v-if="loading"/>
    <template v-else-if="request">
        <app-page title="Заявка" :back="true">
        <p><b>Имя Владельца: </b>{{ request.fio }}</p>
        <p><b>Телефон: </b>{{ request.phone }}</p>
        <p><b>Сумма: </b>{{ request.amount }}</p>
        <p><b>Статус: </b><app-status :type="request.status"/></p>
        <div class="form-control">
            <label for="status"><b>Статус</b></label>
            <select  id="status" v-model="status">
                <option value="done">Завершено</option>
                <option value="cancelled">Отменено</option>
                <option value="pending">Выполняется</option>
                <option value="active">Активно</option>
            </select>
        </div>
        <button class="btn danger" @click="remove">Удалить</button>
        <button class="btn" @click="update" v-if="hasChanges">Обновить</button>
    </app-page>
    </template>
    <h3 v-else class="text-center text-white">Заяка с ID {{ id }} не найдена</h3>
</template>
<script>
import { computed, onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import AppPage from '../components/ui/AppPage.vue';
import { useStore } from 'vuex';
import AppStatus from '../components/ui/AppStatus.vue';
import AppLoader from '../components/ui/AppLoader.vue';

export default {
  components: { AppPage, AppStatus, AppLoader },
  setup(props) {
    const route = useRoute()
    const store = useStore()
    const router = useRouter()
    const request = ref({})
    const loading = ref(true) 
    const status = ref()
    const hasChanges = ref(false)

    const remove = async() => {
        await store.dispatch('request/remove', route.params.id)
        router.push('/')
    }  
    const update = async() => {
        await store.dispatch('request/update', {...request.value, status: status.value, id: route.params.id})
        request.value.status = status.value
    }

    onMounted(async()=> {
        loading.value = true
        request.value = await store.dispatch('request/loadOne', route.params.id)
        loading.value = false
        status.value = request.value.status
    })
    return {
        id:route.params.id,
        request,
        loading,
        remove,
        update,
        status,
        hasChanges: computed(() =>  request.value.status !== status.value)
    }
  }
}
</script>
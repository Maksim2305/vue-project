<template>
  <app-loader v-if="loading"/>
  <app-page title="Список заявок" v-else>
    <template #header>
      <button class="btn primary" @click="modal = true">Создать</button>
    </template>
    <request-filter v-model="filter"/>
    <request-table :requests="requests"></request-table>

    <teleport to='body'>
      <app-modal v-if="modal" @close="modal = false" title="Создать заявку">
       <request-modal @created="modal = false"/>
      </app-modal>
    </teleport>
  </app-page>
</template>

<script>
import AppPage from '../components/ui/AppPage.vue';
import RequestTable from '../components/request/RequestTable.vue';
import AppModal from '../components/ui/AppModal.vue';
import RequestModal from '../components/request/RequestModal.vue'
import AppLoader from '../components/ui/AppLoader.vue'
import RequestFilter from '../components/request/RequestFilter.vue';

import { ref, computed, onMounted, watch } from 'vue';
import { useStore } from 'vuex';
export default {
  name: 'Home',
  components: {AppPage, RequestTable, AppModal, RequestModal, AppLoader, RequestFilter},
  setup () {
    const store = useStore()
    const requests = computed(()=> store.getters['request/request']
      .filter(request => {
        if(filter.value.text) {
          return request.fio.includes(filter.value.text)
        } return requests
      })
      .filter(request => {
        if(filter.value.status) {
          return request.status === filter.value.status
        } return requests
      })
      )
    const loading = ref(false)
    const filter = ref({})


    onMounted(async()=>{
      loading.value = true
      await store.dispatch('request/load')
      loading.value = false
    })
    return{
      modal: ref(false),
      requests,
      loading,
      filter
    }
  },
}
</script>

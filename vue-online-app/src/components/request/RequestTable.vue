<template>
    <h4 v-if="requests?.length === 0" class="text-center">Записей нет</h4>
    <table class="table" v-else>
        <thead>
            <tr>
                <th>#</th>
                <th>ФИО</th>
                <th>Телефон</th>
                <th>Сумма</th>
                <th>Статус</th>
                <th>Действия</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(r, idx) in requests" :key="r.id">
                <td>{{ idx + 1 }}</td>
                <td>{{ r.fio }}</td>
                <td>{{ r.phone }}</td>
                <td>{{ new Intl.NumberFormat(
                    'ru-RU', { style: 'currency', currency: 'RUB' }
                ).format(r.amount) }}</td>
                <td>
                    <app-status :type="r.status"/>
                </td>
                <td>
                    <router-link v-slot="{navigate}" custom :to="{name: 'Request', params:{id: r.id}}">
                        <button class="btn" @click="navigate">Открыть</button>
                    </router-link>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import AppStatus from '../ui/AppStatus.vue'
export default {
    props: ['requests'],
    components: { AppStatus }
}
</script>
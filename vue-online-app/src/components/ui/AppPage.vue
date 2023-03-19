<template>
    <div class="breadcrumbs" v-if="back">
        <router-link to="/" class="text-white">Вернуться к списку заявок</router-link>
    </div>
    <div v-if="title" class="card">
        <h1 class="card-title">{{ title }}
            <slot name="header"/>
        </h1>
        <slot />
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        back:{
            type: Boolean,
            required: false
        }
    },
    setup(props) {
        document.title = props.title
        return{
            title: props.title,
            back: props.back
        }
    }
    
}
</script>
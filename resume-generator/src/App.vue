<template>
  <div class="container column">
    <component-add-block @add-block="addBlock"></component-add-block>
    <div class="card card-w70" v-if="blocks.length" >
      <component-block :blocks="blocks"></component-block>
      <div>
      </div>
    </div>
    <div class="card card-w70" v-else>
      <h2>{{ $multiLang('app.title') }}</h2>
    </div>
  </div>
  <div class="container">
    <p>
      <button class="btn primary" @click="loadComments">Загрузить комментарии</button>
      <button class="btn primaty" @click="toggleAlert"> Открыть</button>
      <button class="btn primaty" @click="changeLang">{{ $multiLang('app.btn') }}</button>
    </p>
    <div class="card" v-if="!loading">
      <h2>Комментарии</h2>
      <component-comment-list
        v-for="comment in comments"
        :key="comment.id"
        :comment="comment"
        @show-commnent="openModal">
    </component-comment-list>
    </div>
    <div class="loader" v-else></div>
  </div>
  <app-modal v-if="modal"
   :comment="comment"
    @close="modal = false"
    >
  </app-modal>
  <app-alert v-if="alert"
    @close="alert = false"
    text="текс текст текст"
    title="Внимание!"
    >
  </app-alert>
</template>

<script>

import ComponentCommentList from './components/ComponentCommentList.vue'
import ComponentAddBlock from './components/ComponentAddBlock.vue'
import ComponentBlock from './components/ComponentBlock.vue'
import AppModal from './components/AppModal.vue'
import AppAlert from './components/AppAlert.vue'
import AlertMixin from './components/utils/AlertMixin'
export default {
  components: { ComponentCommentList, ComponentAddBlock, ComponentBlock, AppModal, AppAlert },
  mixins: [AlertMixin],
  inject: ['changeLn'],
  data () {
    return {
      blocks: [],
      loading: false,
      comments: [],
      modal: false,
      comment: {},
      lang: true
    }
  },
  methods: {
    addBlock (block) {
      this.blocks.push(block)
    },
    async loadComments () {
      try {
        this.loading = true
        const fetchComments = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=42')
        this.comments = await fetchComments.json()
      } catch (err) {
        console.log(err.message)
      } finally {
        this.loading = false
      }
    },
    openModal (value) {
      this.modal = true
      this.comment = value
    },
    changeLang () {
      this.lang = !this.lang
      this.changeLn(this.lang ? 'ru' : 'en')
      this.$forceUpdate()
    }
  }
}
</script>

<style>
  .avatar {
    display: flex;
    justify-content: center;
  }

  .avatar img {
    width: 150px;
    height: auto;
    border-radius: 50%;
  }
</style>

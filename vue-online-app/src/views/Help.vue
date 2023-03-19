<template>
  <app-page title="Помощь">
    <question-item v-for="question in questions" :key="question.title" :question="question">
    </question-item>
  </app-page>
</template>

<script>
import AppPage from '../components/ui/AppPage.vue';
import QuestionItem from '../components/ui/QuestionItem.vue';
export default {
  components: { AppPage, QuestionItem },
  name: 'Help',
  setup() {
    const questions = [
        {
          title: "Что есть в данной системе?",
          body: 'Какой то длинный текст Какой то длинный текст Какой то длинный текст Какой то длинный текст Какой то длинный текст'
        },
        {
          title: "Как работает авторизация?",
          body: 'Все реализовано на Firebase'
        }
    ]
    return {
      questions
    }
  }
}
</script>

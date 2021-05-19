<template>
  <transition-group name="home" tag="div" class="flex mt-4">
    <repo-card v-for="repo in repos" :key="repo.id" :repo="repo" />
  </transition-group>
</template>

<script lang="ts">
import { get } from 'vuex-pathify'
import RepoCard from './RepoCard.vue'

export default {
  transition: 'home',
  components: {
    RepoCard,
  },
  props: {
    query: {
      type: String,
      required: true,
    },
  },
  computed: {
    repos: get('repos'),
  },
  watch: {
    query: {
      immediate: true,
      handler(newVal) {
        this.$store.dispatch('loadRepos', newVal)
      },
    },
  },
}
</script>

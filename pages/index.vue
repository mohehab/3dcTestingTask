<template>
  <div class="container">
    <div>
      <Logo />
      <h2 class="title">Check Git Repos</h2>
    </div>
    <div>
      <!-- QUERY BUTTON -->
      <b-button
        @click="onShow('vue')"
        :variant="show.vue == true ? 'success' : 'secondary'"
        >Vue
        {{
          show.vue && $store.state.repos.length > 0
            ? '-' + $store.state.repos.length
            : ''
        }}</b-button
      >
      <b-button
        :variant="show.nuxt == true ? 'success' : 'secondary'"
        @click="onShow('nuxt')"
        >Nuxt
        {{
          show.nuxt && $store.state.repos.length > 0
            ? '-' + $store.state.repos.length
            : ''
        }}</b-button
      >
      <b-button
        :variant="show.react == true ? 'success' : 'secondary'"
        v-if="status == false"
        @click="onShow('react')"
        >React
        {{
          show.react && $store.state.repos.length > 0
            ? '-' + $store.state.repos.length
            : ''
        }}</b-button
      >
      <b-form-checkbox
        id="checkbox-1"
        v-model="status"
        name="checkbox-1"
        value="accepted"
      >
        Hide React
      </b-form-checkbox>
    </div>
    <div>
      <github-repos v-if="show.vue" query="vue" />
      <github-repos v-if="show.react" query="react" />
      <github-repos v-if="show.nuxt" query="nuxt" />
    </div>
  </div>
</template>

<script lang="ts">
import GithubRepos from '~/components/GithubRepos.vue'

export default {
  components: { GithubRepos },
  data() {
    return {
      status: false,
      show: {
        vue: true,
        react: false,
        nuxt: false,
      },
    }
  },
  methods: {
    // Dynamic function to more Buttons and queries
    onShow(query: string) {
      const showKeys = Object.keys(this.show)
      for (let i = 0; i < showKeys.length; i++) {
        if (query === showKeys[i]) {
          this.$set(this.show, query, true)
        } else {
          this.$set(this.show, showKeys[i], false)
        }
      }
    },
  },
}
</script>

export const state = () => ({
  repos: [],
})

export const mutations = {
  SET_REPOS: (state, repos) => (state.repos = repos),
}

export const actions = {
  async loadRepos({ commit }, query) {
    const response = await this.$api.github.getRepositories(query)
    commit('SET_REPOS', response.data.items)
  },
}

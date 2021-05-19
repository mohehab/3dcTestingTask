<template>
  <!-- CARD TEMPLETE -->
  <b-card
    :title="repo.name"
    :img-src="repo.owner.avatar_url"
    img-alt="Image"
    img-top
    tag="article"
    class="mb-4"
  >
    <b-card-text>
      {{ repo.desription }}
    </b-card-text>

    <b-button :href="repo.html_url" variant="primary" target="_blank">
      Check the Repo
    </b-button>
  </b-card>
</template>

<script>
export default {
  components: {},
  props: {
    repo: {
      type: Object,
      required: true,
    },
  },
}
</script>

<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card class="ma-1">
          <v-card-title class="headline mb-1">{{text.metaData.itemSlug}}</v-card-title>
          <v-card-text>
            <p class="primary--text subheading mt-0">{{text.metaData.itemSlug}}</p>
            <blockquote class="body-1" v-html="text.textBody.value"></blockquote>
            <p class="primary--text mt-2">{{text.metaData.publishedDate}}</p>
          </v-card-text>
          <v-card-actions><p><nuxt-link to="/textos">Volver a la lista de texts</nuxt-link></p></v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        text: this.$store.state.texts.find(x => x.metaData.itemSlug === this.$route.params.id)
      }
    }
  }
</script>

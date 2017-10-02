<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card class="ma-1">
          <v-card-title class="headline mb-1">{{ text.metaData.itemSlug }}</v-card-title>
          <v-card-text>
            <p class="primary--text subheading mt-0">{{ text.textAuthor[0].metaData.itemName }}</p>
            <blockquote class="body-1" v-html="theTextBody"></blockquote>
            <p class="primary--text mt-2">{{ text.metaData.publishedDate | dateEsLa }}</p>
          </v-card-text>
          <v-card-actions><p><nuxt-link to="/textos">Volver a la lista de texts</nuxt-link></p></v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import marked from 'marked'
  export default {
    data () {
      const theText = this.$store.state.texts.find(x => x.metaData.itemSlug === this.$route.params.id)
      const theTextBody = marked(theText.textBody.value)
      // const theTextBody = marked('# prueba')
      return {
        text: theText,
        theTextBody: theTextBody
      }
    }
  }
</script>

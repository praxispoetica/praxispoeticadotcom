<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card class="ma-1">
          <v-card-title primary-title> 
            <div>
              <h3 class="text-title">{{ text.metaData.itemName }}</h3>
              <v-avatar size="36px" class="left dark">
                <img :src=theAvatar>
                <h6 class="text-author">&nbsp;{{ text.textAuthor[0].metaData.itemName }}</h6>
              </v-avatar>
            </div>
          </v-card-title>
          <v-card-text>
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
      const theAvatar = process.env.ppcdn + theText.textAuthor[0].writerProfileMedia.mediaLink.linkUrl
      // const theTextBody = marked('# prueba')
      return {
        text: theText,
        theAvatar: theAvatar,
        theTextBody: theTextBody
      }
    }
  }
</script>

<css>
.text-title {
  color: #9a4c29;
}
</css>

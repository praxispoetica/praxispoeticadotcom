<template>
 <v-container>
  <v-layout row wrap>
    <v-flex xs12 sm3 v-for="text in texts" :key="text.metaData.itemSlug">
      <v-card class="ma-1">
        <v-card-title class="headline text-card">
          <nuxt-link :to="'/textos/'+text.metaData.itemSlug">
            {{ text.metaData.itemName }}
          </nuxt-link>
        </v-card-title>
        <v-card-text>
          <p>{{ text.textBody.value.replace(/<(?:.|\n)*?>/gm, '').substr(0,30) + '...' }}</p>
        </v-card-text>
        <v-card-actions>
          <p> {{ text.textAuthor[0].metaData.itemName }} </p>
          <p class="right">{{ text.metaData.publishedDate | dateEsLa }}</p>
        </v-card-actions>
      </v-card>
    </v-flex> 
  </v-layout>
 </v-container>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    computed: mapState([
      'texts'
    ])
  }
</script>

<style>
.text-card a {
  text-decoration: none !important;
  padding: 2px !important;
}
.text-card a:hover {
  color: #fff8e1 !important;
  background-color: #c47754 !important;
}
</style>

import axios from 'axios'

export const state = () => ({
  sidebar: false,
  textos: []
})

export const mutations = {
  toggleSidebar (state) {
    state.sidebar = !state.sidebar
  },
  setTexts (state, texts) {
    state.texts = texts
  }
}

export const actions = {
  async nuxtServerInit ({commit}) {
    let texts = await axios.get(process.env.scsurl + '/api/texts')
    commit('setTexts', texts.data)
  }
}

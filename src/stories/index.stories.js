/* eslint-disable import/no-extraneous-dependencies */
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import MyButton from '../components/MyButton.vue'

export default {
  title: 'Button'
}

export const withText = () => ({
  components: { MyButton },
  template: '<my-button @click="action">Hello Button</my-button>',
  methods: { action: action('clicked') }
})

export const withJSX = () => ({
  render () {
    return <my-button onClick={linkTo('Button', 'With Some Emoji')}>With JSX</my-button>
  }
})

export const withSomeEmoji = () => ({
  components: { MyButton },
  template: '<my-button>😀 😎 👍 💯</my-button>'
})

import JButton from './lib/Button'
import 'semantic-ui-css/semantic.min.css'

JButton.install = (Vue) => {
  Vue.component(JButton.name, JButton)
}

export default JButton

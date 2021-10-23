import JHeadline from '../index.js'
export default {
  title: 'JHeadline',
  component: JHeadline
}

export const Headline = () => ({
  components: { JHeadline },
  template: `
    <j-headline :level="1" icon="setting" size="mini">
      标题
      <div slot="sub">
        子标题
      </div>
    </j-headline>
  `
})

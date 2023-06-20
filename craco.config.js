// eslint-disable-next-line @typescript-eslint/no-var-requires
const WebpackBar = require('webpackbar')
// const CracoLessPlugin = require('craco-less')
module.exports = {
  webpack: {
    plugins: [
      new WebpackBar({
        profile: true
      })
    ]
  },
  plugins: [
    // {
    //   plugin: CracoLessPlugin,
    //   options: {
    //     lessLoaderOptions: {
    //       lessOptions: {
    //         modifyVars: { '@primary-color': '#1DA57A' },
    //         javascriptEnabled: true
    //       }
    //     }
    //   }
    // }
  ]
}

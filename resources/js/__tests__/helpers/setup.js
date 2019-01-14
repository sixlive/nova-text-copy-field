require('jsdom-global')()

const hooks = require('require-extension-hooks')

hooks('vue').plugin('vue').push()

require('@babel/register')({
  extensions: ['.vue', '.js']
})

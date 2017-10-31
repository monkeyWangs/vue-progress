import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'
import json from 'rollup-plugin-json'
import buble from 'rollup-plugin-buble'

const pkg = require('./package.json')

export default {
  input: './src/index.js',
  output: [
    { file: pkg.main, format: 'umd', moduleName: 'VueProgress' }
  ],
  plugins: [
    json(),
    nodeResolve({ jsnext: true }),
    commonjs(),
    buble()
  ],
  banner: `
    /**
     * vue-meta-info v${pkg.version}
     * (c) ${new Date().getFullYear()} monkeyWang
     * @license MIT
     */
  `.replace(/ {4}/gm, '').trim()
}

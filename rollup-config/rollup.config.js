import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';

import typescript from 'rollup-plugin-typescript2';

import image from '@rollup/plugin-image';
import postcss from 'rollup-plugin-postcss';

import html2 from 'rollup-plugin-html2';

const { NODE_ENV } = process.env;
const extensions = ['.js', '.jsx', '.ts', '.tsx', '.scss'];
console.log('??');
export default {
  input: './src/index.tsx',
  output: {
    file: 'dist/bundle.js',
    format: 'iife',
    sourcemap: true,
  },
  plugins: [
    resolve({ extensions }),
    image(),
    postcss({
      extensions: ['.css'],
    }),
    replace({
      preventAssignment: true,
      'process.env.NODE_ENV': JSON.stringify(
        NODE_ENV === 'production' ? 'production' : 'development'
      ),
    }),
    babel({
      extensions,
      presets: [
        '@babel/preset-env',
        '@babel/preset-typescript',
        '@babel/preset-react',
      ],
    }),
    commonjs(),
    typescript(),
    serve({
      open: false,
      verbose: true,
      contentBase: ['', 'dist'],
      host: 'localhost',
      port: 3000,
    }),
    livereload({ watch: 'dist' }),
    html2({
      template: 'public/index.html',
    }),
  ],
};

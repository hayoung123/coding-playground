import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';

import image from '@rollup/plugin-image';
import postcss from 'rollup-plugin-postcss';

import html2 from 'rollup-plugin-html2';
import typescript from 'rollup-plugin-typescript2';
const extensions = ['.js', '.jsx', '.ts', '.tsx', '.scss'];

export default {
  input: './src/index.tsx',
  output: {
    file: 'dist/bundle.js',
    format: 'es',
    sourcemap: true,
  },
  plugins: [
    replace({
      preventAssignment: true,
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    resolve(),
    commonjs(),
    babel({
      extensions,
      presets: [
        '@babel/preset-env',
        '@babel/preset-typescript',
        '@babel/preset-react',
      ],
    }),
    typescript(),
    image(),
    postcss({
      extensions: ['.css'],
    }),
    html2({
      template: 'public/index.html',
    }),
    serve({
      open: false,
      verbose: true,
      contentBase: ['', 'dist'],
      host: 'localhost',
      port: 3001,
    }),
    livereload({ watch: 'dist' }),
  ],
};

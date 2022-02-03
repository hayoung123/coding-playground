// rollup.config.js
import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import serve from 'rollup-plugin-serve';
import replace from '@rollup/plugin-replace';
import html2 from 'rollup-plugin-html2';

export default {
  input: 'src/index.tsx',
  output: {
    file: 'dist/bundle.js',
    format: 'es',
  },
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    resolve(),
    commonjs(),
    typescript(),
    html2({
      template: 'public/index.html',
    }),
    process.env.NODE_ENV === 'development' &&
      serve({
        open: true,
        verbose: true,
        contentBase: ['', 'dist'],
        host: 'localhost',
        port: 3000,
      }),
  ],
};

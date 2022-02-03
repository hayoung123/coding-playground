# rollup config

## React + TS 번들링 config

## rollup을 사용한 이유

1. 항상 웹팩만 사용해왔는데 react-router-dom 라이브러리를 보고 rollup이라는 번들러의 존재도 알게 되면서 많은 라이브러리에서 사용하는 것 같아서 시도
2. 모노레포를 알아보는데 여기서도 webpack 보다는 rollup을 많이 사용하더라. 모노레포를 해볼 때 필요해서 시도
3. rollup 홈페이지에 의하면 **간단하고**, **Tree-Shaking**이 잘된다고 한다. 또 umd, iife 같은 다양한 format으로 변형이 가능하다고 한다.

## rollup plugin

### default plugins

- rollup-plugin-serve: serve develpoment environment
- rollup-plugin-livereload: automatic browser refresh when the build file is changed
- @rollup/plugin-node-resolve: for importing modules installed with NPM
- @rollup/plugin-babel: transfiling JSX
  babel 없이도 잘 돌아가긴하는데 왜 다들 넣어놨을까?
- @rollup/plugin-commonjs: make code import ConnomJS module format
- @rollup/plugin-replace: replacing the process.env.NODE_ENV variable with a static string

### style plugins

- @rollup/plugin-image: processing image, including JPG, PNG, GIF, SVG, and WebPfiles
- @rollup/plugin-postcss: processing CSS files and inject it to the head tag of my HTML file

## rollup output format

- iife: run the code in browser
- cjs: run the code in Node.js server
- umn: run the code in both browser and Node.js server

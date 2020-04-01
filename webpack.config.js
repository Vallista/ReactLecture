const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  // mode : 현재 개발중인지? 실제 유저가 사용하는 버전인지
  // production : 유저가 사용하는 버전
  // development : 개발용 버전
  mode: 'development',
  entry: './src/index.js',
  // 번들링 해서 뽑아낼 경로
  output: {
    // node.js 에서 제공해주는 기본 path
    // __dirname : 현재 디렉토리
    // 현재 디렉토리/dist
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  // module : 파일을 읽는데 어떠한 영향을 주고 싶을때
  module: {
    // rules : 파일을 읽을 때 어떤 "규칙"으로 읽어라!
    rules: [
      {
        test: /\.html$/i,
        use: [ 'html-loader' ]
      },
      {
        // .svg 파일을 만나면
        test: /\.svg$/,
        // file-loader를 사용해라.
        use: {
          loader: 'file-loader',
          options: {
            name: 'images/[hash]-[name].[ext]'
          }
        }
      },
      {
        // .png 파일 혹은 jp(e?)g 파일을 만나면
        test: /\.(png|jp(e*))g$/,
        use: {
          // url-loader를 사용하는데,
          loader: 'url-loader',
          options: {
            // limit 8000 (8000개까지 허용한다)
            limit: 8000,
            // 이름양식은 images 폴더 안에, 블라블라-이름.jpeg(혹은 png)로 저장한다.
            name: 'images/[hash]-[name].[ext]'
          }
        }
      },
      {
        // 파일을 읽을때, 테스트를 할꺼야. 이 파일이 .css 파일인 지
        // regular expression (정규 표현식 / 유효성 검사)
        test: /\.s?css$/,
        // 읽었는데 얘가 css 파일이야 그러면 사용할꺼야(use) 배열 안에 있는 애들을
        oneOf: [
          {
            // module이냐 아니냐를 체크
            test: /\.module.s?css$/,
            use: [
              MiniCSSExtractPlugin.loader,
              {
                loader: 'css-loader',
                options: { modules: true }
              },
              'sass-loader'
            ]
          },
          {
            use: [ MiniCSSExtractPlugin.loader, 'css-loader', 'sass-loader' ]
          }
        ]
      },
      {
        // 파일을 읽을 때, mjs 파일이거나 (js 혹은 jsx) 파일일 때
        test: /\.(js|jsx)$/,
        // 그리고 node_modules 폴더 혹은 bower-components 폴더 안에 있는 애들은 제외하고
        exclude: /node_modules/,
        // 사용할꺼야
        use: {
          // babel-loader
          loader: 'babel-loader',
          // 사용하는데, presets은 @babel/preset-env
          options: {
            // javascript = es6, es5, es4 버전이 많은데,
            // preset-env 쓰게 되면 표준 방법으로 설정해주는
            presets: [ '@babel/preset-env', '@babel/preset-react' ]
          }
        }
      }
    ]
  },
  resolve: {
    extensions: [ '.jsx', '.js' ]
  },
  // plugin : 파일을 생성하거나, 삭제하거나 등의 input, output이 동시에 일어나는 일에 대해서
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new MiniCSSExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ]
}

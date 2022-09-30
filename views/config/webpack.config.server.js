const path = require('path');
const webpack = require('webpack');
// const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
// const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
const getClientEnvironment = require('./env');
const paths = require('./paths');

// CSS Module의 고유 className을 만들 때 필요한 옵션
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');

//https://thebook.io/080203/ch20/03/02-05/
//여기에서 쓰라고 했는데 쓰니까 오류나서 우선 안써봄. 20220930
// const nodeExternals = require('webpack-node-externals');

const publicUrl = paths.publicUrlOrPath.slice(0, -1);
const env = getClientEnvironment(publicUrl);

// style files regexes
const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;

module.exports = {
  mode: 'production',
  entry: paths.serverRenderJs,
  // Node.js 내장 모듈과 충돌이 일어나지 않으며 require 로 불러올 수 있는 형태로 번들링합니다
  target: 'node',
  output: {
    // 정해준 서버 경로에 render.js 라는 파일명으로 저장합니다
    path: paths.ssrBuild,
    filename: 'render.js',
    libraryTarget: 'commonjs2' // node 에서 불러올 수 있도록, commonjs2 스타일로 번들링 합니다
    // libraryTarget: 'commonjs2' // node 에서 불러올 수 있도록, commonjs2 스타일로 번들링 합니다
    // chunkFilename: 'js/[name].chunk.js', // 청크 파일 이름
    // publicPath: paths.publicUrlOrPath, // 정적 파일이 제공될 경로
  },
  resolve: {
    modules: ['node_modules', paths.appNodeModules].concat(
      process.env.NODE_PATH.split(path.delimiter).filter(Boolean)
    ),
    extensions: ['.js', '.json', '.jsx'],
  },
  module: {
    rules: [
      {
        oneOf: [
          // 자바스크립트를 위한 처리
          // 기존 webpack.config.js를 참고하여 작성
          {
            test: /.(js|mjs|jsx|ts|tsx)$/,
            include: paths.appSrc,
            loader: require.resolve('babel-loader'),
            options: {
              customize: require.resolve(
                'babel-preset-react-app/webpack-overrides'
              ),
              plugins: [
                [
                  require.resolve('babel-plugin-named-asset-import'),
                  {
                    loaderMap: {
                      svg: {
                        ReactComponent: '@svgr/webpack?-svgo![path]'
                      }
                    }
                  }
                ]
              ],
              cacheDirectory: true,
              cacheCompression: false,
              compact: false
            }
          },
          // CSS를 위한 처리
          {
            test: cssRegex,
            exclude: cssModuleRegex,
            //  exportOnlyLocals: true 옵션을 설정해야 실제 CSS 파일을 생성하지 않습니다.
            loader: require.resolve('css-loader'),
            options: {
              exportOnlyLocals: true
            }
          },
          // CSS Module을 위한 처리
          {
            test: cssModuleRegex,
            loader: require.resolve('css-loader'),
            options: {
              modules: true,
              exportOnlyLocals: true,
              getLocalIdent: getCSSModuleLocalIdent
            }
          },
          // Sass를 위한 처리
          {
            test: sassRegex,
            exclude: sassModuleRegex,
            use: [
              {
                loader: require.resolve('css-loader'),
                options: {
                  exportOnlyLocals: true
                }
              },
              require.resolve('sass-loader')
            ]
          },
          // Sass + CSS Module을 위한 처리
          {
            test: sassRegex,
            exclude: sassModuleRegex,
            use: [
              {
                loader: require.resolve('css-loader'),
                options: {
                  modules: true,
                  exportOnlyLocals: true,
                  getLocalIdent: getCSSModuleLocalIdent
                }
              },
              require.resolve('sass-loader')
            ]
          },
          // url-loader를 위한 설정
          // {
          //   test: [/.bmp$/, /.gif$/, /.jpe?g$/, /.png$/],
          //   loader: require.resolve('url-loader'),
          //   options: {
          //     emitFile: false, // 파일을 따로 저장하지 않는 옵션
          //     limit: 10000, // 원래는 9.76KB가 넘어가면 파일로 저장하는데
          //     // emitFile 값이 false일 때는 경로만 준비하고 파일은 저장하지 않습니다.
          //     name: 'static/media/[name].[hash:8].[ext]'
          //   }
          // },
          // 위에서 설정된 확장자를 제외한 파일들은
          // file-loader를 사용합니다.
          {
            loader: require.resolve('file-loader'),
            exclude: [/.(js|mjs|jsx|ts|tsx)$/, /.html$/, /.json$/],
            options: {
              emitFile: false, // 파일을 따로 저장하지 않는 옵션
              name: 'static/media/[name].[hash:8].[ext]'
            }
          }
        ]
      }
    ]
  },
  // resolve: {
  //   modules: ['node_modules']
  // },
  // externals: [nodeExternals()],
  // module: {
  //   strictExportPresence: true,
  //   rules: [
  //     {
  //       // oneOf는 내부의 모든 로더를 시도해보고, 해당되는 것이 없다면
  //       // 최하단의 file-loader를 실행시킵니다
  //       oneOf: [
  //         // 자바스크립트는 Babel 을 통하여 트랜스파일링합니다
  //         {
  //           test: /\.(js|jsx)$/,
  //           include: paths.appSrc,
  //           loader: require.resolve('babel-loader'),
  //           options: {
  //             cacheDirectory: true,
  //           },
  //         },
  //         /* css와 scss 파일을 불러올 때는
  //         css-loaders/locals를 실행하는 것이 중요합니다. 
  //         파일을 따로 만들어내지 않기 때문이죠 */
  //         {
  //           test: /\.css$/,
  //           loader: require.resolve('css-loader'),
  //           options: {
  //             exportOnlyLocals: true
  //           }
  //         },
  //         /* scss의 경우에는 CSS Module이 제대로 작동하도록
  //         production과 동일하게 설정하되 
  //         여기서도 css-loader/locals를 적용합니다 */
  //         {
  //           test: /\.scss$/,
  //           use: [
  //             {
  //               loader: require.resolve('css-loader'),
  //               options: {
  //                 importLoaders: 1,
  //                 modules: true,
  //                 // localIdentName: '[name]__[local]___[hash:base64:5]'
  //                 localIdentName: '[local]',
  //                 exportOnlyLocals: true
  //               },
  //             },
  //             {
  //               loader: require.resolve('sass-loader'),
  //               options: {
  //                 // includePaths: [paths.styles]
  //                 sassOptions: {
  //                   includePaths: [paths.appSrc + '/styles']
  //                 }
  //               }
  //             }
  //           ]
  //         },
  //         // 만약에 자바스크립트도, 스타일도 아니라면 파일로 취급합니다.
  //         // 여기서 emitFile: false 설정이 중요합니다.
  //         {
  //           loader: require.resolve('file-loader'),
  //           exclude: [/\.js$/, /\.html$/, /\.json$/],
  //           options: {
  //             name: 'static/media/[name].[hash:8].[ext]',
  //             // 경로만 만들고, 실제로 파일을 따로 저장하지는 않습니다.
  //             emitFile: false
  //           },
  //         }
  //       ]
  //     } 
  //   ],
  // },
  plugins: [
    // 필수 플러그인만 넣어줍니다
    new webpack.DefinePlugin(env.stringified),
    // new CaseSensitivePathsPlugin(),
    // new WatchMissingNodeModulesPlugin(paths.appNodeModules),
  ]
};



// const path = require('path');
// const webpack = require('webpack');
// // const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
// // const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
// const getClientEnvironment = require('./env');
// const paths = require('./paths');

// const cssRegex = /\.css$/;
// const cssModuleRegex = /\.module\.css$/;
// const sassRegex = /\.(scss|sass)$/;
// const sassModuleRegex = /\.module\.(scss|sass)$/;
// const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');
// const nodeExternals = require('webpack-node-externals');

// const publicUrl = '';
// const env = getClientEnvironment(publicUrl);

// module.exports = {
//   entry: paths.serverRenderJs,
//   // Node.js 내장 모듈과 충돌이 일어나지 않으며 require 로 불러올 수 있는 형태로 번들링합니다
//   target: 'node',
//   output: {
//     // 정해준 서버 경로에 render.js 라는 파일명으로 저장합니다
//     path: paths.ssrBuild,
//     filename: 'render.js',
//     libraryTarget: 'commonjs2' // node 에서 불러올 수 있도록, commonjs2 스타일로 번들링 합니다
//   },
//   resolve: {
//     modules: ['node_modules', paths.appNodeModules].concat(
//       process.env.NODE_PATH.split(path.delimiter).filter(Boolean)
//     ),
//     extensions: ['.js', '.json', '.jsx'],
//   },
//   module: {
//     strictExportPresence: true,
//     rules: [
//       {
//         oneOf: [
//           // 자바스크립트를 위한 처리
//           // 기존 webpack.config.js를 참고하여 작성
//           {
//             test: /.(js|mjs|jsx|ts|tsx)$/,
//             include: paths.appSrc,
//             loader: require.resolve('babel-loader'),
//             options: {
//               customize: require.resolve(
//                 'babel-preset-react-app/webpack-overrides'
//               ),
//               plugins: [
//                 [
//                   require.resolve('babel-plugin-named-asset-import'),
//                   {
//                     loaderMap: {
//                       svg: {
//                         ReactComponent: '@svgr/webpack?-svgo![path]'
//                       }
//                     }
//                   }
//                 ]
//               ],
//               cacheDirectory: true,
//               cacheCompression: false,
//               compact: false
//             }
//           },
//           // CSS를 위한 처리
//           {
//             test: cssRegex,
//             exclude: cssModuleRegex,
//             //  exportOnlyLocals: true 옵션을 설정해야 실제 CSS 파일을 생성하지 않습니다.
//             loader: require.resolve('css-loader'),
//             options: {
//               exportOnlyLocals: true
//             }
//           },
//           // CSS Module을 위한 처리
//           {
//             test: cssModuleRegex,
//             loader: require.resolve('css-loader'),
//             options: {
//               modules: true,
//               exportOnlyLocals: true,
//               getLocalIdent: getCSSModuleLocalIdent
//             }
//           },
//           // Sass를 위한 처리
//           {
//             test: sassRegex,
//             exclude: sassModuleRegex,
//             use: [
//               {
//                 loader: require.resolve('css-loader'),
//                 options: {
//                   exportOnlyLocals: true
//                 }
//               },
//               require.resolve('sass-loader')
//             ]
//           },
//           // Sass + CSS Module을 위한 처리
//           {
//             test: sassRegex,
//             exclude: sassModuleRegex,
//             use: [
//               {
//                 loader: require.resolve('css-loader'),
//                 options: {
//                   modules: true,
//                   exportOnlyLocals: true,
//                   getLocalIdent: getCSSModuleLocalIdent
//                 }
//               },
//               require.resolve('sass-loader')
//             ]
//           },
//           // url-loader를 위한 설정
//           // {
//           //   test: [/.bmp$/, /.gif$/, /.jpe?g$/, /.png$/],
//           //   loader: require.resolve('url-loader'),
//           //   options: {
//           //     emitFile: false, // 파일을 따로 저장하지 않는 옵션
//           //     limit: 10000, // 원래는 9.76KB가 넘어가면 파일로 저장하는데
//           //     // emitFile 값이 false일 때는 경로만 준비하고 파일은 저장하지 않습니다.
//           //     name: 'static/media/[name].[hash:8].[ext]'
//           //   }
//           // },
//           // 위에서 설정된 확장자를 제외한 파일들은
//           // file-loader를 사용합니다.
//           {
//             loader: require.resolve('file-loader'),
//             exclude: [/.(js|mjs|jsx|ts|tsx)$/, /.html$/, /.json$/],
//             options: {
//               emitFile: false, // 파일을 따로 저장하지 않는 옵션
//               name: 'static/media/[name].[hash:8].[ext]'
//             }
//           }
//         ]
//       }
//     ]
//   },
//   externals: [nodeExternals()],
//   plugins: [
//     // 필수 플러그인만 넣어줍니다
//     new webpack.DefinePlugin(env.stringified),
//     // new CaseSensitivePathsPlugin(),
//     // new WatchMissingNodeModulesPlugin(paths.appNodeModules),
//   ]
// };
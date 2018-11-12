var port = process.env.PORT || 3000;

var lessons = [
  "01-react-react-fundamentals-development-environment-setup",
  "02-react-hello-world-first-component",
  "03-react-the-render-method",
  "04-react-introduction-to-properties",
  "05-react-state-basics",
  "06-react-owner-ownee-relationship",
  "07-react-accessing-child-properties",
  "08-react-custom-proptype-validation",
  "09-react-react-synthetic-event-system",
  "10-react-using-refs-to-access-components",
  "11-react-component-lifecycle-mounting-basics",
  "12-react-component-lifecycle-mounting-usage",
  "13-react-component-lifecycle-updating",
  "14-react-dynamically-generated-components",
  "15-react-react-fundamentals-higher-order-components-replaces-mixins",
  "16-build-a-jsx-live-compiler",
  "17-jsx-deep-dive",
  "18-react-understand-react-children-utilities",
  "19-react-use-react-cloneelement-to-extend-functionality-of-children-components",
  "20-react-composable-components",
  "21-developer-tools",
  "no-video-17",
]

var entry = {}
lessons.forEach(function(lesson){
  entry[lesson] = './lessons/' + lesson + '/index.js'
})

module.exports = {
  mode: 'development',
  entry: entry,
  output: {
    path: __dirname + './lessons/',
    filename: "[name]/index.js",
    publicPath: '/'
  },
  devServer: {
    inline: true,
    contentBase: './lessons/',
    port: port
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};

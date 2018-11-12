var port = process.env.PORT || 3000;

var lessons = [
  "01-intro",
  "02-render",
  "03-properties",
  "04-state",
  "05-owner-ownee",
  "06-refs",
  "07-child-properties",
  "08-lifecycle-mounting",
  "09-lifecycle-mounting-usage",
  "10-lifecycle-updates",
  "11-higher-order",
  "12-composable",
  "13-dynamic",
  "14-build-compiler",
  "17-integration",
  "18-devtools",
  "prop-validation",
  "react-children",
  "cloneElement",
  "events"
]

var entry = {}
lessons.forEach(function(lesson){
  entry[lesson] = './lessons/' + lesson + '/main.js'
})

module.exports = {
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

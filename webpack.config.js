module.exports = {
	mode: "development",
	entry: './src/index.js',
	
	devServer: {
		contentBase: './dist'
	},
	devServer: {
		static: './dist',
  	},
	module: {
	      rules: [
		{
		      test: /\.scss$/,
		      use: [
		      // Creates `style` nodes from JS strings
		      "style-loader",
		      // Translates CSS into CommonJS
		      "css-loader",
		      // Compiles Sass to CSS
		      "sass-loader",
		      ],
		},
		{
			test: /\.(png|svg|jpg|jpeg|gif)$/i,
			type: 'asset/resource',
		   },
		{
		test: /\.png$/, 
		exclude: /node_modules/,
		loader: 'file-loader?name=images/[name].[ext]'
		}
	      ],
	    },
      };

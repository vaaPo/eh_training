Pretty retarded examples due old versions of jade/pug/hbs.
//TODO do complete rewrite with pug and hbs templates

'''bash
 mkdir start_handson_express_3

git add start_handson_express_3
cd start_handson_express_3
npm init -y

npm i -S express
echo "node_modules" > ./.gitignore
touch index.js
npm i -D nodemon
npm i -S fs
npm i -S lodash
npm i -S pug
npm i -S handlebars
npm i -S consolidate


cp ../egghead-getting-started-with-express/users.json .
npm run dev
'''

'''text


LEts see what is needed to upgrade this
On the express site (https://expressjs.com/en/guide/using-template-engines.html), I found that jade has been renamed Pug and that I can get the template engine by installing the npm package: $ npm install pug --save Then I could use it by using pug app.('view engine', 'pug') and changing the templates to *.pug
'''
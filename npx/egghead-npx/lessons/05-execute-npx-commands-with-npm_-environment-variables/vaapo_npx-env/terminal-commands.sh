 2083  cd 05-execute-npx-commands-with-npm_-environment-variables/
 2084  ls -la
 2085  mkdir vaapo_npx-env
 2086  cd vaapo_npx-env/
 2087  history
 2088  pwd
 2089  mkdir npx-env && cd $_
 2090  npm init -y
 2091  npm run env
 2092  npm run env | grep npm_
 2093  npm i babel{-cli,-preset-env,-plugin-transform-object-rest-spread}
 2094  npm i babel{-cli,-preset-env,-plugin-transform-object-rest-spread} -Ds
 2095  npx babel index.js -d lib
 2096  npx babel index.js -d lib/$npm_package_version
 2097  ls -al lib/
 2098  npx -c 'babel index.js -d lib/$npm_package_version'
 2099  echo edited pacakge.json
 2100  npm run build
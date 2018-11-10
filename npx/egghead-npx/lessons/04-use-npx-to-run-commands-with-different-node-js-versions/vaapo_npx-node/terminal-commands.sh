 2069  cd 04-use-npx-to-run-commands-with-different-node-js-versions/
 2070  ls -al
 2071  mkdir vaapo_npx-node
 2072  cd vaapo_npx-node/
 2073  mkdir npx-node && cd $_
 2074  node index.js
 2075  npx -p node@8.2.1 -- node index.js
 2076  npx -p node@8.3.0 -- node index.js
 
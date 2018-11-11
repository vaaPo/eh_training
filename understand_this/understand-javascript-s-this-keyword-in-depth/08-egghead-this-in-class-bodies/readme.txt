$node script_part1.js
$node script_part2.js   // this fails - arrow not yet supported in class

//so somekind of commandline trickery is needed to babel translitterate the code 
// something like this
// perhaps small babel course is needed

npx create-react-app playground
npm init
npm run babel
npm run babel | node
echo "function $2() {\n}\n\nmodule.exports = { $2 }" >> $1/$2.js
echo "const { $2 } = require('./$2');\n\nit('should test', () => {\n expect($2()).toBe()\n})" >> $1/$2.spec.js
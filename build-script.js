const fs = require('fs-extra');
const concat = require('concat');
const glob = require('glob');
const rimraf = require('rimraf');
var fss = require('fs');

(async function build() {
  await glob('./dist/arquetipoEjemplo/*-es2015.js', {"ignore":['./dist/arquetipoEjemplo/polyfills-css-shim-es2015.js', './dist/arquetipoEjemplo/vendors~polyfills-core-js-es2015.js', './dist/arquetipoEjemplo/vendors~polyfills-dom-es2015.js']}, (err, files)=>{
     fs.ensureDir('dist')
     concat(files, 'dist/arquetipoEjemplo/main.js')
  })

  await glob('./dist/arquetipoEjemplo/*.*', {"ignore":['./dist/arquetipoEjemplo/main.js']}, (err, files)=>{
    for (var i=0; i<files.length; i++) {
        fss.unlink(`${files[i]}`, function(error) {
        if (error) {
            throw error;
        }
       })
     }
  })
})()
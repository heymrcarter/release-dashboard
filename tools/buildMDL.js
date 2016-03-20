import fs from 'fs-extra';
import path from 'path';
import folors from 'colors';

const mdlPath = 'node_modules/react-mdl/extra';
const files = [
  {
    root: '../',
    dir: mdlPath,
    base: 'material-grid.css',
    ext: '.css',
    file: 'material-grid'
  },
  {
    root: '../',
    dir: mdlPath,
    base: 'material-grid.min.css',
    ext: '.css',
    file: 'material-grid.min'
  },
  {
    root: '../',
    dir: mdlPath,
    base: 'material.css',
    ext: '.css',
    file: 'material'
  },
  {
    root: '../',
    dir: mdlPath,
    base: 'material.min.css',
    ext: '.css',
    file: 'material.min'
  },
  {
    root: '../',
    dir: mdlPath,
    base: 'material.min.css.map',
    ext: '.map',
    file: 'material.min.css'
  },
  {
    root: '../',
    dir: mdlPath,
    base: 'material.js',
    ext: '.js',
    file: 'material'
  },
  {
    root: '../',
    dir: mdlPath,
    base: 'material.min.js',
    ext: '.js',
    file: 'material.min'
  },
  {
    root: '../',
    dir: mdlPath,
    base: 'material.min.js.map',
    ext: '.map',
    file: 'material.min.js'
  }
];

files.map(function (file) {
  fs.copy(path.format(file), `dist/${file.base}`, function (err) {
    if (err) {
      return console.log(err);
    }

    console.log(`${file.file} copied to dist/`.green);
  });
});

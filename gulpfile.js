const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass')); // Assuming you're using Dart Sass

// Define paths for your SCSS and CSS files
const scssPath = '"C:\Users\HP\OneDrive\Desktop\Internship Bank Misr\taskSCSS\scss"'; // Replace with your actual SCSS file path
const cssPath = '"C:\Users\HP\OneDrive\Desktop\Internship Bank Misr\taskSCSS\css"'; // Replace with your desired CSS file path

function buildStyles{}{
    return src("./scss/*.scss" , {allowEmpty: true}).pipe
}
function watchFiles(){
    watch(["./scss/*.scss"],buildStyles);
}

exports.default = series(buildStyles, watchFiles);


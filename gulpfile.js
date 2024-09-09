const gulp = require('gulp');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');

// Task to combine and minify CSS files stored in the Shopify assets folder
gulp.task('styles', function () {
  return gulp.src([
    './assets/theme.css',
    './assets/grid.css',
    './assets/title.css',
    './assets/text.css',
    './assets/button.css',
    './assets/media.css',
    './assets/form.css',
    './assets/field.css',
    './assets/quantity.css',
    './assets/social-share.css'
  ]) // List of CSS files in the assets folder
    .pipe(concat('base.min.css')) // Combine them into one file called combined-styles.min.css
    .pipe(cleanCSS()) // Minify the CSS
    .pipe(gulp.dest('./assets')); // Output the result to the assets folder
});

// Default task (runs when you run `gulp` in the terminal)
gulp.task('default', gulp.series('styles'));
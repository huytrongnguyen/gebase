/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
*/

const gulp = require('gulp');
const sass = require('gulp-sass');

function getConfigFromParams(process) {
  const { argv } = process,
        path = argv[argv.indexOf('--config') + 1];
  if (!path) {
    throw new Error('Cannot find configuration file, please specific with --config');
  }
  return require(path);
};

gulp.task('copy', (done) => {
  const config = getConfigFromParams(process),
        { outputPath = '', assets = [], fonts = [], styles = [], scripts = [] } = config;

  assets.forEach(value => gulp.src(`${value}/**/*`).pipe(gulp.dest(outputPath)));
  fonts.forEach(value => gulp.src(`${value}/**/*`).pipe(gulp.dest(`${outputPath}/fonts`)));
  styles.forEach(lib => gulp.src(lib).pipe(gulp.dest(`${outputPath}/css`)));
  scripts.forEach(lib => gulp.src(lib).pipe(gulp.dest(`${outputPath}/js`)));
  done();
});

gulp.task('style', () => {
  const config = getConfigFromParams(process),
        { outputPath, extractCss } = config;

  return gulp.src(extractCss)
      .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
      .pipe(gulp.dest(`${outputPath}/css`));
});

gulp.task('default', gulp.parallel('copy', 'style'));
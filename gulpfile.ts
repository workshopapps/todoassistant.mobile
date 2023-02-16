import gulp from 'gulp';
// import del from 'del';
import ts from 'gulp-typescript';
import eslint from 'gulp-eslint';

// Delete the dist directory
// export function clean() {
//   return del(['dist']);
// }

// Compile TypeScript files and move to dist directory
export function compile() {
  const tsProject = ts.createProject('tsconfig.json');
  return tsProject.src().pipe(tsProject()).js.pipe(gulp.dest('dist'));
}

// Run ESLint on the TypeScript files
export function lint() {
  return gulp
    .src(['src/**/*.ts'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
}

// Watch for changes in TypeScript files and compile
export function watch() {
  gulp.watch('src/**/*.ts', gulp.series(lint, compile));
}

// Default task: clean, lint, compile, and watch
export default gulp.series(lint, compile, watch);

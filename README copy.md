# Webpack Boilerplate
This is a starting place for projects using webpack.

## Technologies/Frameworks
- SCSS
- [webpack](https://webpack.js.org/)
- ES6
- [Mappy Breakpoints](https://github.com/zellwk/mappy-breakpoints)

## Initial Setup
Clone the repository and run `npm install` in the terminal from the directory to download all dependencies.

## Development
### CSS Guidelines
Mappy Breakpoints is included in this build to manage media query breakpoints. It is included via NPM and imported into `/_src/scss/styles.scss`.

### JS Guidelines
webpack is being used to bundle all JavaScript modules. You can import JS dependencies at `/_src/main.js`.

## Future Considerations/To-Dos
- [ ] Deploy to Heroku
- [ ] Add environment differences
- [ ] Revisit .htaccess file
- [ ] Add Tree shaking
- [ ] Add Sourcemaps
- [ ] HMR with extracted CSS
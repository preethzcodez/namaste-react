# NAMASTE REACT - ASSIGNMENT 02 - IGNITING OUR APP

## CODING
- intialize `npm` into your repo
- install `react` and `react-dom`
- remove CDN links of react
- install parcel
- ignite your app with parcel
- add scripts for “start” and “build” with parcel commands
- add `.gitignore` file
- add `browserlists`
- build a production version of your code using `parcel build`

## THEORY

### 01. What is NPM?
NPM is a package manager for the JavaScript programming language. It is the default package manager for the JavaScript runtime environment Node.js. NPM is used to install, share, and distribute packages (which are collections of code that are designed to be reusable) and to manage dependencies (libraries and packages that are required by your code). NPM is a command-line interface that is installed with Node.js, and it is used to download packages from the npm registry, which is a public repository of packages of open-source code. With NPM, developers can publish their own packages and use packages created by other developers. NPM helps to reduce the time and effort required to build and maintain large JavaScript applications by making it easy to reuse code and manage dependencies.

### 02. What is Parcel/Webpack? Why do we need it?
Parcel and Webpack are both module bundlers for JavaScript. A module bundler is a tool that takes the many small files that make up a large JavaScript application and combines them into a single file (or a few files) that can be loaded by the browser.

There are several reasons why developers use module bundlers:

- **Modularity:** JavaScript applications are often made up of many small files, each containing a specific piece of functionality. By using a module bundler, developers can organize their code into small, reusable modules that can be imported and exported as needed. This makes it easier to develop and maintain large applications.

- **Code optimization:** Module bundlers can perform various types of code optimization, such as minification (removing unnecessary characters from the code), tree shaking (removing unused code), and dead code elimination (removing code that is never executed). This can help to reduce the size of the final bundled code and improve the performance of the application.

- **Compatibility:** Some JavaScript features are not supported by all browsers. A module bundler can transform the code to make it compatible with a wider range of browsers, allowing developers to use newer features without worrying about browser compatibility issues.

- **Easy to use:** Module bundlers provide a simple interface for building and deploying JavaScript applications, making it easy for developers to set up and maintain their projects.

Parcel and Webpack are two of the most popular module bundlers. Both have their own strengths and are suitable for different types of projects. Developers can choose the one that best fits their needs.

### 03. What is .parcel-cache?
".parcel-cache" is a directory that is created by the module bundler Parcel when it runs. It is used to store the files that have been processed by Parcel, as well as any intermediate files that are generated during the build process. The cache is used to speed up subsequent builds by allowing Parcel to reuse the previously processed and optimized files, rather than having to start from scratch each time.

For example, if you are using Parcel to build a JavaScript application, it will create the ".parcel-cache" directory in the root of your project. Inside the cache directory, you will find a number of subdirectories that contain the files that have been processed by Parcel. These files may include the original source code, as well as any transformed or optimized versions of the code that were created during the build process.

The ".parcel-cache" directory is usually hidden by default, but you can view it by changing your operating system's settings to show hidden files. It is generally not recommended to modify the contents of the cache, as it is used by Parcel to optimize the build process and may cause issues if the cache is deleted or altered.

### 04. What is npx?
npx is a command-line tool that is included with npm. It is used to execute npm package binaries.

When you install an npm package that has a binary associated with it, the binary is typically added to the node_modules/.bin directory of your project. To run the binary, you would normally need to specify the full path to the binary, which can be cumbersome. With npx, you can run the binary by simply using its name. npx will automatically look in the node_modules/.bin directory for the binary and execute it.

For example, if you have installed an npm package called "my-package" that includes a binary called "my-binary", you can run the binary with the following command:
```
npx my-binary
```
npx can also be used to run packages that are not installed locally in your project. If you specify a package name that is not found in the node_modules/.bin directory, npx will automatically download and install the package from the npm registry, and then run the specified binary. This can be useful for trying out a package or running one-off scripts without the need to install it globally or add it to your project as a dependency.

### 05. What is difference between dependencies vs devDependencies?
### 06. What is Tree Shaking?
### 07. What is Hot Module Replacement?
### 08. List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words.
### 09. What is .gitignore? What should we add and not add into it?
### 10. What is the difference between package.json and package-lock.json?
### 11. Why should I not modify package-lock.json?
### 12. What is node_modules? Is it a good idea to push that on git?
### 13. What is the dist folder?
### 14. What is browserlists?
### 15. vite, webpack, parcel
### 16. ^ - caret and ~ - tilda
### 17. Script types in html

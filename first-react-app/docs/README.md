# First React App

Ensure you are in the correct directory. Your path should end in `/react-starter-files/first-react-app` e.g.

```shell
pwd
/react-starter-files/first-react-app
```

## Prerequisites

To run `vite`, you'll need to have Node 18.x or 20.x installed on your machine. 

To check your node.jsx version run the following command:

```shell
node -v
```

[Update to the latest stable version of Node](https://nodejs.org/en/) if your Node version is **earlier** than **18.0.0**.

Once the code is successfully installed, you will have a simple React single page application.

## Task: Create Your React App

Run the following command to create a React app in the current directory:

```shell
npm create vite@latest .
```
Answer the prompts as follows:

- `Current directory is not empty. Please choose how to proceed:` **Ignore files and continue**
- `Select a framework:` **React**
- `Select a variant:` **JavaScript**

Run the following command to initialise the React app

```shell
npm install
npm run dev
```

## Task: Configure Your React App

1. Open the [index.html](./index.html) file under the root folder and change the title tag to **"First React App"**.

2. Open the [index.css](./src/index.css) file under the **src** folder and change the background colour of the `:root` pseudo-element.

3. Make other cosmetic (look-and-feel only) changes to the [index.css](./src/index.css) and [App.css](./src/App.css) stylesheets and review the changes in your browser

4. Open [App.jsx](./src/App.jsx). Review the main function called `App()`. The return statement outputs what looks like HTML elements e.g. `<img>`, `<a>`, `<p>` tags 

5. Change the return statement to output new '**HTML**' elements, e.g.

``` HTML
<div className="App">
  <h1>My React Page</h1>
  <h2>This is my first React page…</h2>
</div>
```

![Example React App Homepage](./first-react-app.png)

6. Create a style variable for your new `<h1>` element in [App.jsx](./src/App.jsx). <br/><br/>**For more information on styling react elements, read [the React help pages][1]**

1. Create a variable called `h1Style`. The attributes of the style object are similar to CSS class attributes but using camelCase:

```JavaScript
const h1Style = { 
  "fontSize":"30px",
  "color": "#cc0000",
  "textTransform": "uppercase"
};
```
8. Connect the new style object to your `<h1>` element. 

![Example React App Homepage 2](./first-react-app_2.png)

[1]:(https://reactjs.org/docs/dom-elements.html#style)

9. Open [App.css](./src/App.css) and add a class called `.bio`.

10. Add a className property to the `<h2>` element in the [App.jsx](./src/App.jsx) file.

```JavaScript
className = "bio"
```

11. Add a short paragraph of text, e.g. _This is my first react page. I created it on …_.

## Task: Test Your React App

### Install Test Libraries

1. Stop the React server by pressing `q` then `Enter`, or open a new terminal.

2. Install Vitest and the React Testing Library as *dev dependencies*. A dev dependency is one that is only needed for the purposes of developing a library or application, but isn't required for deployment or execution. We install a dependency as dev only by using the `--save-dev` flag.

```shell
npm install --save-dev vitest @testing-library/jest-dom @testing-library/react
```

3. Add a `test` script to the package.json file to allow easy execution of any defined tests.

```json
{
  "scripts": {
    // other existing scripts...
    "preview": "vite preview", // IMPORTANT: Make sure to add a comma after the previous script!
    "test": "vitest"
  }
}
```

4. Add the `test.environment` property to the vite.config.js file to enable Vite's integration with JSDom.

```js
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
  },
});
```

Visit the [Vitest guide][1] for more information about Vitest and running tests.

### Set Up Tests

1. Open this project ([first-react-app][2]) in Visual Studio Code

2. Create a file in the **src** directory called `App.test.jsx`

3. Add the following test to check for the text "My React Page" on the page:

```js
import { afterEach, describe, expect, it } from "vitest"; // imports the describe and it functions from the Vitest library
import { cleanup, render, screen } from "@testing-library/react"; // imports the render and screen functions from the React Testing Library
import "@testing-library/jest-dom/vitest";
import App from "./App"; // imports the App component that we're testing

// runs a clean after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
});
```

4. Run the following command to start the test runner. The test runner will continue running and monitor any changes to the tests or classes until you close it by pressing `q` then `Enter`.

```shell
npm test
```

What is the result of the first test run?

5. Add the following test to check if the application loads without crashing and ensure the test passes:

```JS
describe("App", () => {
  it("renders the App component", () => {
    render(<App />);

    screen.debug(); // prints the rendered JSX from the App component to the command line
  });
});
```

6. Add the following test inside the `describe()` function body to check for specific content on the page and ensure the test passes:

```js
  it("renders the <h1> element", () => {
    render(<App />);

    const h1 = screen.getByText(/My React Page/i); // captures an element matching the specified text
    expect(h1).toBeInTheDocument(); // checks that the expected element exists in the document
  });
```

7. Add another test to check for the `<h2>` element you added in the previous task. Try searching for the text you enetered for the `<h2>` element e.g.

```js  
const h2 = screen.getByText(/This is my first React page.+/i);
```
The query above is trying to match any element on the screen that starts with the sentence *'This is my first React page'* using [regular expressions][4].

[1]:https://vitest.dev/guide/
[2]:/first-react-app/
[3]:/first-react-app/src/App.test.jsx 
[4]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
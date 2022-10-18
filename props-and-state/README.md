# Props & States

## Task: Understanding Props & State

1. Open this folder in VS Code. Open a terminal

1. The `props-and-state` folder contains a React project created using the `create-react-app` command

1. In your terminal window install the dependencies by running the command below:

```shell
npm install
```
4. Run the project from the terminal using the following command:

```shell
npm start
```
5. Explore the code in [index.js](src/index.js) and [components/GadgetList.js](src/components/GadgetList.js) file. Try to  understand how the code relates to the HTML that is displayed on the screen.

1. The following will be displayed when the project is run:
![Example Output](docs/electornic-store.png)

- The index.js file sets a variable with an array of objects called headphones
```JS
const headphones =  [....];
```

Each object has a title property.

```JS
{"title":"Headphones 1"}
```

- Review the code, find the `useState` hook. 

- What do you think it is doing? 

- Read the React documentation on [React Hooks](https://reactjs.org/docs/hooks-intro.html) for more information.
```JS
const [headphonesList] = useState(headphones);
```

7. Add another object to the headphones variable:
```JS
{"title":"Headphones 5"}
```

8. Add a price attribute to all the headphone objects 

```JS
{"title":"Headphones 5", "price":358.99}
```

9. Update the [GadgetList.js](src/components/GadgetList.js) to display the price.

1. Add style attributes to the `title` and `price` to improve the display:
![Example Output](docs/electornic-store-task1.png)

11. Open the developer tools in your browser. Although the code compiles and runs successfully you should see this warning:
![Warning](docs/key-warning.png)

12. Follow the [link to more information](https://reactjs.org/link/warning-keys) to resolve the warning in the code. 

_Hint: you will need to add unique IDs/Keys to each headphones object and add a key attribute when displaying them in the `GadgetList` component_

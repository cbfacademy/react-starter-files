# Nesting Components

## Task: Nesting Components with `props.children`

1.  Open the nesting-and-events folder in your React Starter Files repository
1. Install the dependencies by running 
```shell
npm install 
```
1. The folder contains two components declared in two files TaskContainer.js and [Task.js][1]. The `<TaskContainer/>` is the parent container for the `<Task/>`.
1. In the [index.js][2] file, add three `<Task/>` components to the `<TaskContainer/>` component. The `<Task/>` should have the following attributes:

```js
{"id":"task1","title":"Buy Milk","completed":true}
{"id":"task2","title":"Read a book","completed":false}
{"id":"task3","title":"Early morning run","completed":false}
```

[1]:/nesting-and-events/src/components/Task.js
[2]:/nesting-and-events/src/index.js
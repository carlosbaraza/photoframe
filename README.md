# PhotoFrame tutorial

In this tutorial we are going to build a simple picture slideshow web application. This
tutorial was written for a workshop at the TECH(K)NOW Day 2019. You can find
the [slides of the workshop here](), with an introduction to React.

Let's get started:

# Starting React application

There are multiple boilerplate tools to start a React application but a very common
one is [create-react-app](https://github.com/facebook/create-react-app), which is officially
supported by Facebook.

## Develop in the Cloud

For my workshop, I always recommend using a Cloud development environment because
it reduces the headaches debugging why something works in a machine and not in another. Everyone
has the same environment and it brings back the focus to the important matter, learning
React.

I would recommend the tool CodeSandbox.io, because it works pretty well and has a nice
IDE based on VSCode. It is great for bootstrapping a new idea.

[Create a new React app with `create-react-app` by simply clicking here.](https://codesandbox.io/s/new)

## Alternative: Develop in your machine Installing NodeJS and VSCode

The requirements to run `create-react-app` in your local machine are:

- [NodeJS](https://nodejs.org/en/). I recommend versions higher than 11.
- A code editor (IDE). I recommend [VisualStudio Code](https://code.visualstudio.com/)

If you are on Windows, I would recommend installing the Windows Subsystem for Linux (WSL)
and installing NodeJS in the WSL. Follow [this guide to get you started with WSL](https://nickjanetakis.com/blog/using-wsl-and-mobaxterm-to-create-a-linux-dev-environment-on-windows).
You can then install NodeJS [using the NodeSource installation guide](https://github.com/nodesource/distributions/blob/master/README.md).

Once you have NodeJS installed, you should be able to run this command in the
Terminal (OSX), iTerm2 (OSX), Hyper (All platforms), or terminal emulator of your choice
to create a new React app:

```
npx create-react-app my-app
cd my-app
npm start
```

Click the link provided to you in the Terminal to open in a browser the new app.

Open the `my-app` folder with VSCode to have a fully functional development environment.

# First changes to the app

Now that you have an app, open the `index.js` file and make some changes to the
components between the ``

```jsx
import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      {/* Make changes to elements here! And save the file to see the changes being automatically reflected in the browser. */}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

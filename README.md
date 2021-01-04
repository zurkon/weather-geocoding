<div align="center">

# Weather Geocoding

Weather App made with React :cloud:

<img src="./src/assets/examples/weather.gif" width="400" alt="App Demonstration"/>

</div>

# Description

This project was made using [`React`](https://github.com/facebook/react) and [`styled-components`](https://github.com/styled-components/styled-components).

The forecasting is made using 2 different APIs:

- [`Mapbox`](https://docs.mapbox.com/api/overview/) - To obtain city's coordinates.

- [`OpenWeatherMap`](https://openweathermap.org/api) - To get forecasting based on coordinates.


# Setup

You need to setup `.env` file with the APIs keys as `Environment Variables` to make this project work.

Environment Variables are a little different to config when working with `React`.

Reading the `Create React App` docs section about [Adding Custom Environment Variables](https://create-react-app.dev/docs/adding-custom-environment-variables/), you find this:
```
You must create custom environment variables beginning with REACT_APP_. Changing any environment variables will require you to restart the development server if it is running.
```

example:
```
REACT_APP_MAP_TOKEN=YOUR_TOKEN_HERE
```

Then, you can access this variable with `process.env` object:

```javascript
process.env.REACT_APP_MAP_TOKEN
```

## Disclaimer

`WARNING`: Do not store any secrets (such as private API keys) in your React app!

Environment variables are embedded into the build, meaning anyone can view them by inspecting your app's files.

# Features

- Get Weather Forecast from any city;
- The Background Image changes by current user dateTime;

<div align="center">

<img width="150" src="./src/assets/examples/blue.png"/>
 
<img width="150" src="./src/assets/examples/green.png"/>

<img width="150" src="./src/assets/examples/orange.png"/>

</div>

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

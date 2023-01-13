# Instructions

- You should aim to spend between 3 to 4 hours on the exercise
- Return the solution or make it available to us upon completion
- Please do not mention BeamTrail in your solution or repository name

## Minimum Technical Requirements

The solution should as a minimum be defined using:

- TypeScript
- ReactJS

## Task

Your task is to create a front-end UI displaying various Internet of Things (IoT) sensors based on data provided through a Web Socket endpoint.

The UI should be showing the sensors with their current state and the end-user should be able to connect and disconnect the sensors. There should also be a possibility to toggle whether to see all sensors or only the connected sensors.

Layout, colors, fonts and other styling is up to you to make sure the UI is as appealing and useable as possible.

## Web Socket Server

You are provided with a tiny backend server exposing Web Socket endpoint on <http://localhost:5000>.

From the `/server` directory in your terminal or IDE run the following command:

```bash
npm install && npm start
```

### API

On the client connection event, the API will stream back to the current state of the application in the format:

```typescript
{
  id: string;
  name: string;
  connected: boolean;
  unit: string;
  value: string;
}
```

The Web Socket endpoint accepts the following messages, where `id` is the sensor identifier:

```typescript
// Connect Sensor
{
  command: "connect";
  id: string;
}

// Disconnect Sensor
{
  command: "disconnect";
  id: string;
}
```

## Questions

- What aspect of this exercise did you find most interesting?
- What did you find most cumbersome to do?
- How can we further improve the user experience?

## Answers

- What aspect of this exercise did you find most interesting?
  1. Using a new library for icons, which is called react-icons.
  2. Working with the design, making it more clean and simple.
  3. Using websocket to show real-time data, using local server.
- What did you find most cumbersome to do?
  1. Styling components without using any design library, like material-ui or bootstrap, make it more responsive and adaptive.
- How can we further improve the user experience?

  1. Adding some infinite funny animation to sensor icon when we switch on the selected sensor.
  2. Adding unit tests to components and functions, including hooks, maybe we can also add e2e test, if we want to scale the dashboard.
  3. Adding Show only connected sensors state to localStorage so when we refresh the page we will get the current state of that button and sensors.
  4. We can also add sound effects to switch buttons.
  5. We can also do some code refactorings to components, to make them more smaller and readable.
  6. We can also add some error boundaries to components or for example when websocket connection is disconnected accidentally to show some warnings on the page and so on.
  7. We can also add some loader components with animation, instead of showing Loading... text.
  8. We can also add some transition animations to sensor cards when we switch them on.

  ### How to run the server and client applications

  1. From the `/server` directory in your terminal or IDE run the following command:

  - npm install && npm start

  2. From the `/client` directory in your terminal or IDE run the following command:

  - npm install && npm start

  If you are using mac os Monteray version, it can show error when you run server on <http://localhost:5000>, by showing that the PORT:5000 is already in use, in that case take a look on this article https://medium.com/pythonistas/port-5000-already-in-use-macos-monterey-issue-d86b02edd36c
# sensors-dashboard

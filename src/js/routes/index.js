// Component imports
import HomePage from '../containers/HomePage'

// Define all routes here
export const routes = [
  {
    exact: true,
    path: "/",
    component: HomePage
  },
  {
    path: "/home",
    component: HomePage,
  }
  // example for sub routes
  // {
  //   path: "/home",
  //   component: Tacos,
  //   routes: [
  //     {
  //       path: "/tacos/bus",
  //       component: Bus
  //     },
  //     {
  //       path: "/tacos/cart",
  //       component: Cart
  //     }
  //   ]
  // }
];

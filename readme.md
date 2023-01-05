app version based on intro to react context 14

### random

valueL ?? valueR - if valueL evaluated to null/undefined then return valueR

# Redux

- wrap app in `<provider store={store}>`, create slice which contains name, initial values and reducer
- reducer takes old state, an action to update and returns new value. when you create reducer, it automatically creates an action
- pass the reducer to the store or redux won't recognize it
- reactToolkitQuery. similar to react useQuery. define base end point and a builder function to specify more specific end points. also needs adding to store in a format such as `[petApi.reducerPath]: petApi.reducer,`. middleware added which intercepts an action to the store to change/observe data (log data and state changes to a server e.g). also allows caching similar to reactQuery

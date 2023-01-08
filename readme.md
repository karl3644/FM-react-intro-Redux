app version based on intro to react context 14

### random

valueL ?? valueR - if valueL evaluated to null/undefined then return valueR

## Redux

- wrap app in `<provider store={store}>`, create slice which contains name, initial values and reducer
- reducer takes old state, an action to update and returns new value. when you create reducer, it automatically creates an action
- pass the reducer to the store or redux won't recognize it
- reactToolkitQuery. similar to react useQuery. define base end point and a builder function to specify more specific end points. also needs adding to store in a format such as `[petApi.reducerPath]: petApi.reducer,`. middleware added which intercepts an action to the store to change/observe data (log data and state changes to a server e.g). also allows caching similar to reactQuery

## Testing

- install vitest (based on jest) testing library and happy-dom
- happy dom faster than jsDOM
- try to tell user stories through tests. think in user terms of what they would want to see when interacting
- **test** folder name is seen by vitest and everything in there is assumed to be a test. Can also name files by using filename.spec/filename.spec. run test by `npm t`

# bug examples from this app

1. `images.length` will fail if no array is passed in. changed to `images && images.length`
2. useHref() may be used only in the context of a <Router> component. Using <Link> tag without a router. Put static router in test file. (Static router works in node and not a browser env)

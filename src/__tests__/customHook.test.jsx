import { expect, test } from "vitest";
import { render, renderHook } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import useBreedList from "../useBreedList";
import { Provider } from "react-redux";
import store from "../store";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
      retry: false,
    },
  },
});

test("test custom hook", async () => {
  // result will be the returned value of the customHook. use this to test customHook
  const { result } = renderHook(() => useBreedList(""), {
    wrapper: ({ children }) => {
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </Provider>;
    },
  });

  const [breedList, status] = result.current;
  expect(breedList).toHaveLength(0);
  expect(status).toBe("loading");
});

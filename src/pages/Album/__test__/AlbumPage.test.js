import AlbumPage from "../AlbumPage";
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Route, MemoryRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

const renderPage = ({ albumId }) => {
  const queryClient = new QueryClient();

  return render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter initialEntries={[`/album/${albumId}`]}>
        <Route path="/album/:albumId">
          <AlbumPage />
        </Route>
      </MemoryRouter>
    </QueryClientProvider>,
    {
      route: "/album/1",
    }
  );
};

describe("album Page", () => {
  const component = renderPage({ albumId: 1 });
  const headerEl = component.getByTestId("header");

  test("should render header", () => {
    expect(headerEl).toBeInTheDocument();
  });
  test("header shound render correct text ", () => {
    expect(headerEl.textContent).toBe("Album");
  });
});

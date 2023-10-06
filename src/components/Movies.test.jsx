import { render, screen, fireEvent } from "../utils/testUtils";
import { describe, test, it } from "vitest";
import Movies from "./Movies";

describe("Movies component", () => {
  it("has a heading stating populära filmer", () => {
    // Arrange
    render(<Movies />);

    // Act
    const heading = screen.getByRole("heading", /populära filmer/i);

    // Assert
    expect(heading).toBeInTheDocument();
  });

  describe("has a button for adding favorites", () => {
    it("says gör till favorit", () => {
      render(<Movies />);
      const button = screen.getByRole("button", { name: /gör till favorit/i });
      expect(button).toBeInTheDocument();
    });

    it("has a green background color", () => {
      render(<Movies />);
      const button = screen.getByRole("button", { name: /gör till favorit/i });
      expect(button).toHaveStyle({ backgroundColor: "rgb(0, 255, 0)" });
    });

    it("clicking changes the background color to red", () => {
      render(<Movies />);
      const button = screen.getByRole("button", { name: /gör till favorit/i });
      fireEvent.click(button);
      expect(button).toHaveStyle({ "background-color": "rgb(255, 0, 0)" });
    });

    it("is disabled when the checkbox is checked", () => {
      render(<Movies />);
      const button = screen.getByRole("button", { name: /gör till favorit/i });
      const checkbox = screen.getByRole("checkbox", {
        name: /Avaktivera favoritknappen/i,
      });
      fireEvent.click(checkbox);
      expect(button).toBeDisabled();
    });
  });
  describe("has a checkbox for disabling the add to favorites button", () => {
    it("is unchecked initially", () => {
      render(<Movies />);
      const checkbox = screen.getByRole("checkbox", {
        name: /Avaktivera favoritknappen/i,
      });
      expect(checkbox).not.toBeChecked();
    });
  });
});

// kan också göra

// it("should have a button stating gör till favorit with red background color", () => {
//   render(<Movies />);
//   const button = screen.getByRole("button", { name: /gör till favorit/i });
//   expect(button).toBeInTheDocument();
//   expect(button).toHaveStyle({ backgroundColor: "red"})
// });

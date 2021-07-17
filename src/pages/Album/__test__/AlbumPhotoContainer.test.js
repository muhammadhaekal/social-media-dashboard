import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AlbumPhotoContainer from "../AlbumPhotoContainer";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import { Image } from "@chakra-ui/react";

configure({ adapter: new Adapter() });

const photos = [
  {
    albumId: 1,
    id: 1,
    title: "accusamus beatae ad facilis cum similique qui sunt",
    url: "https://via.placeholder.com/600/92c952",
    thumbnailUrl: "https://via.placeholder.com/150/92c952",
  },
  {
    albumId: 1,
    id: 2,
    title: "reprehenderit est deserunt velit ipsam",
    url: "https://via.placeholder.com/600/771796",
    thumbnailUrl: "https://via.placeholder.com/150/771796",
  },
];

test("should render images container", () => {
  const component = render(<AlbumPhotoContainer photos={photos} />);
  const imagesContainerEl = component.getByTestId("images-container");

  expect(imagesContainerEl).toBeInTheDocument();
});

describe("images container", () => {
  test("total image inside image container should be equal with photos props length", () => {
    const component = render(<AlbumPhotoContainer photos={photos} />);
    const imageContainerEl = component.getAllByTestId("image-container");

    expect(imageContainerEl).toHaveLength(2);
  });

  test("every image url must be match with thumbnailUrl data inside photos props", () => {
    const component = shallow(<AlbumPhotoContainer photos={photos} />);
    const images = component.find(Image);

    images.forEach((image, index) => {
      expect(image.prop("src")).toEqual(photos[index].thumbnailUrl);
    });
  });
});

import styled from "styled-components";

const HeaderStyle = styled.div`
  * {
    margin: 0;
    padding: 0;
    font-size: 20px;
    font-weight: light;
    list-style: none;
    text-decoration: none;
  }

  .wrap {
    /* border-bottom: 1px solid black; */
    background-image: url("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDg0NDw0NDQ0NDQ0NDQ0NDQ8NDQ0NFREWFhURFRMYHSggGBolGxMTITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0NFQ8NFSsZFRkrKysrKy0tKysrNzctLSsrLSsrKy0rLSsrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAIUBeQMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAAAAgEDBwT/xAAgEAEBAQEAAgMAAwEAAAAAAAAAARECAyESMUFRYYFx/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFxEBAQEBAAAAAAAAAAAAAAAAAAFBEf/aAAwDAQACEQMRAD8A9iAaZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMFAJFAJFAJFAJMUAkUAkUnABQCTFAJFAJFAJMUAkUAkUAkUAkUAkxQCcFAJFAJFAJFAJFAJFAJMUAAAAAAAAAAAAAAAxoy3AaMnTdAJWWHMBoAASgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGgCb0oBnUaUEyKKQAAAACDLGgAAAAAAAAAAAWgDJWgAAAAAAAAAAAAAAAADPk0AE9UFEhC2AWAAMz22UAsIM6oNGStADU2gqslbhIAAAAAAAAAAAzqNZvsGcxQAzW6AGhgAAAAAACaqEABkp0DWdQkaCIvWdM5BQAEc/JzbdXdaCfH9YpPcv59nOgo0TYCtMZPpHPk9g6SAAYNYAGgAAAUgAAM6rZTE6CgALSMsbIBoYAAAAAAAAAAABqYCmFpnoC+2yM5jaBWRsAGTS1koKDUAtl/k5bQcb5K683Y5Xx115mRah/1k4kuqoihaM6BM+930tGVvFv6BIpmNAwNNBlrUVXNBoMnQNLAAE1t+v8BpK+fXbi+jgo02MmX2DQZOgazG6aAFRoLCUAEK2gNZGgAAMl0taAUlKDL7Zn8nMO5oHfWRPF1fxmYTnPoDDS1IKl+0zv3iuecLyB1WcqgAMrPkCrUXqT3f05738O+N/gFy6azjnJhIBYSEjQZeSTGgDJGWKgAaAAX6BF4ipYzLIwF32mc4oBPXG/reecaAAAM+LQCAANYAzmtAAAGWNAA6+gBy58l11AqAAqe2AC4ADh3fdXOwVG3v8Apnjmy6CDfhgCquI8vfxmtEGePvVgUCgA4Xu7fYLEd5AEVrjfJd/rQB0tT4rboGCr6bKAAAAADP0AagCC0/IAf//Z");
    height: 150px;
    max-width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: white;
    & > .logo {
      color: black;
      margin-right: 100px;
    }
    & > .nav_bar > .nav {
      display: flex;
      margin-left: 200px;

      justify-content: space-evenly;
    }
    & > .nav_bar > .nav > li {
      color: #ff1493;
      width: 150px;
      & > a {
        color: black;
      }
      & > a:hover {
        color: green;
      }
    }
  }
`;

const Responsive = ({ children }) => {
  return <HeaderStyle>{children}</HeaderStyle>;
};

export default Responsive;

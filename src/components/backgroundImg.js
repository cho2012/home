function BackgroundImage({ url, height, width, backgroundSize }) {
  return (
    <div
      style={{ backgroundImage: `url(${url})`, width, height, backgroundSize }}
    ></div>
  );
}
export default BackgroundImage;

// height: 500px;
// background-image: url("../../images/slides.png");
// background-size: cover;
// background-position-y: 50%;
// display: flex;
// justify-content: space-between;
// align-items: center;å

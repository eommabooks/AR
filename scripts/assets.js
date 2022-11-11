const bookLength = 8;
const bookPageLength = 8;

const sceneEl = document.querySelector("a-scene");
const assetsEl = sceneEl.querySelector("a-assets");

for (let bookCount = 0; bookCount <= bookLength; bookCount++) {
  for (
    let bookPageCount = 1;
    bookPageCount <= bookPageLength;
    bookPageCount++
  ) {
    const backgroundImgTag = document.createElement("img");
    backgroundImgTag.id = `b${bookCount}-p${bookPageCount}-bg`;
    backgroundImgTag.setAttribute(
      "src",
      `./assets/book${bookCount}/page${bookPageCount}/background.png`
    );

    const objectImgTag = document.createElement("img");
    objectImgTag.id = `b${bookCount}-p${bookPageCount}-ob`;
    objectImgTag.setAttribute(
      "src",
      `./assets/book${bookCount}/page${bookPageCount}/object.png`
    );

    const audioTag = document.createElement("audio");
    audioTag.id = `b${bookCount}-p${bookPageCount}-so`;
    audioTag.setAttribute(
      "src",
      `./assets/book${bookCount}/page${bookPageCount}/sound.mp3`
    );
    audioTag.setAttribute("type", "audio/mp3");
    audioTag.setAttribute("preload", "auto");

    assetsEl.appendChild(backgroundImgTag);
    assetsEl.appendChild(objectImgTag);
    assetsEl.appendChild(audioTag);
  }
}

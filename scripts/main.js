/*
assets id : b${n}-p${n}-{bg, ob, so}
sound id : sound-b${n}-p${n}
marker id : marker-b${n}-p${n}
soundHandler : soundhandler${book}-${page}
*/

// constant - book 수 설정, page 수 설정 //
const bookLength = 1;
const bookPageLength = 8;

const animationJumpTagList = ["b1-p1", "b1-p2"];
const animationScaleTagList = ["b1-p3", "b1-p4"];
const animationRotationTagList = ["b1-p5", "b1-p6"];

let markerValue = 0;

const Init = () => {
  const sceneEl = document.querySelector("a-scene");
  const assetsEl = sceneEl.querySelector("a-assets");

  for (let bookCount = 0; bookCount <= bookLength; bookCount++) {
    for (
      let bookPageCount = 1;
      bookPageCount <= bookPageLength;
      bookPageCount++
    ) {
      // assets.js
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

      // main.js - insertBefore
      const aMarkerTag = document.createElement("a-marker");
      aMarkerTag.id = `marker-b${bookCount}-p${bookPageCount}`;
      aMarkerTag.setAttribute("type", "barcode");
      aMarkerTag.setAttribute("value", `${markerValue++}`);

      const aSoundTag = document.createElement("a-sound");
      aSoundTag.id = `marker-b${bookCount}-p${bookPageCount}`;
      aSoundTag.setAttribute("src", `#b${bookCount}-p${bookPageCount}-so`);
      aSoundTag.setAttribute("autoplay", "false");
      aSoundTag.setAttribute("soundhandler", "");

      const aEntityTag = document.createElement("a-entity");
      aEntityTag.setAttribute("rotation", "0 0 0");

      const aBackgroundTag = document.createElement("a-image");
      aBackgroundTag.setAttribute("src", `#b${bookCount}-p${bookPageCount}-bg`);
      aBackgroundTag.setAttribute("position", "0 2.5 0");
      aBackgroundTag.setAttribute("rotation", "0 0 0");
      aBackgroundTag.setAttribute("scale", "5 5 5");

      const aObjectTag = document.createElement("a-image");
      aObjectTag.setAttribute("src", `#b${bookCount}-p${bookPageCount}-ob`);
      aObjectTag.setAttribute("position", "0 2.5 0");
      aObjectTag.setAttribute("rotation", "0 0 0");
      aObjectTag.setAttribute("scale", "5 5 5");

      // add animation
      if (animationJumpTagList.includes(`b${bookCount}-p${bookPageCount}`)) {
        aObjectTag.setAttribute("animation-jump", "");
      }
      if (animationScaleTagList.includes(`b${bookCount}-p${bookPageCount}`)) {
        aObjectTag.setAttribute("animation-scale", "");
      }
      if (
        animationRotationTagList.includes(`b${bookCount}-p${bookPageCount}`)
      ) {
        aObjectTag.setAttribute("animation-rotation", "");
      }

      aEntityTag.appendChild(aBackgroundTag);
      aEntityTag.appendChild(aObjectTag);

      aMarkerTag.appendChild(aSoundTag);
      aMarkerTag.appendChild(aEntityTag);

      sceneEl.insertBefore(aMarkerTag, sceneEl.lastChild);
    }
  }
};

window.onload = Init;

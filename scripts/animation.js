// animation-jump // 점프 애니메이션 //
// animation-scale // 축소 확장 //
// animation-scale-stop // 축소 확장 멈춤 //
// animation-scale-large // 축소 확장 크게 //
// animation-scale-updown // 늘였다 줄였다 (위아래로) //
// animation-scale-side // 늘였다 줄였다 (양옆으로) //
// animation-rotation-fast // 빙글빙글 (빠르게) //
// animation-rotation-slow // 빙글빙글 (느리게) //
// animation-rotation-z // 오뚜기 //
// animation-opacity // 사라졌다 나타났다 //
let defaultScale = [8, 8, 8];

// toScale x와 y 사이즈를 1씩 늘림
const toScale = (x, y, z) => {
  let defaultScaleTemp = new Array(3);
  defaultScaleTemp[0] = defaultScale[0] + x;
  defaultScaleTemp[1] = defaultScale[1] + y;
  defaultScaleTemp[2] = defaultScale[2] + z;

  return defaultScaleTemp.join(" ");
};

// 점프 애니메이션 //
// animation-jump //
AFRAME.registerComponent("animation-jump", {
  init: function () {
    this.entity = this.el;

    this.entity.setAttribute("animation__jump", {
      property: "position",
      to: "0 5 0.5",
      dir: "alternate",
      dur: "1000",
      loop: "true",
      easing: "easeInOutQuad",
    });
  },
});

// 확장-축소 반복, 커지고 작아지고 //
// animation-scale //
AFRAME.registerComponent("animation-scale", {
  init: function () {
    this.entity = this.el;
    this.fromScale = defaultScale.join(" ");

    this.entity.setAttribute("animation__scale", {
      property: "scale",
      to: toScale(2, 2, 0),
      dir: "alternate",
      dur: "1000",
      loop: "true",
      easing: "easeInOutQuad",
    });
  },
});

// 확장하고 멈춤 //
// animation-scale-stop //
AFRAME.registerComponent("animation-scale-stop", {
  init: function () {
    this.entity = this.el;
    this.fromScale = defaultScale.join(" ");
    this.running = false;

    this.entity.setAttribute("animation__scale", {
      property: "scale",
      from: toScale(-2, -2, 0),
      to: toScale(2, 2, 0),
      dur: "3000",
      easing: "easeInOutQuint",
      loop: "true",
      //startEvents: "start",
      //pauseEvents: "pause",
    });
  },

  // trigger 마커가 보일때마다 다시 시작
  /* tick: function () {
    if (this.running == false && this.markerEl.object3D.visible == true) {
      //this.entity.emit("start");
      this.running = true;
    } else if (
      this.running == true &&
      this.markerEl.object3D.visible == false
    ) {
      //this.entity.emit("pause");
      this.running = false;
    }
  }, */
});

// 축소하고 멈춤 //
// animation-scale-stop-reverse //
AFRAME.registerComponent("animation-scale-stop-reverse", {
  init: function () {
    this.entity = this.el;
    this.fromScale = defaultScale.join(" ");
    this.running = false;

    this.entity.setAttribute("animation__scale", {
      property: "scale",
      from: toScale(0, 0, 0),
      to: toScale(-8, -8, 0),
      dur: "10000",
      easing: "linear",
      loop: "true",
      //startEvents: "start",
      //pauseEvents: "pause",
    });
  },

  // trigger 마커가 보일때마다 다시 시작
  /* tick: function () {
    if (this.running == false && this.markerEl.object3D.visible == true) {
      //this.entity.emit("start");
      this.running = true;
    } else if (
      this.running == true &&
      this.markerEl.object3D.visible == false
    ) {
      //this.entity.emit("pause");
      this.running = false;
    }
  }, */
});

// 크게 확장-축소 반복, 커지고 작아지고 (큰버전) //
// animation-scale-large //
AFRAME.registerComponent("animation-scale-large", {
  init: function () {
    this.entity = this.el;
    this.fromScale = defaultScale.join(" ");

    this.entity.setAttribute("animation__scale", {
      property: "scale",
      from: toScale(-5, -5, 0),
      to: toScale(2, 2, 0),
      delay: "2000",
      dur: "1000",
      loop: "true",
      dir: "alternate",
      easing: "easeInOutQuad",
    });
  },
});

// 늘였다 줄였다 (위아래로) //
// animation-scale-updown //
AFRAME.registerComponent("animation-scale-updown", {
  init: function () {
    this.entity = this.el;

    this.entity.setAttribute("animation__scale", {
      property: "scale",
      from: toScale(0, -3, 0),
      to: toScale(0, 3, 0),
      dir: "alternate",
      dur: "1000",
      loop: "true",
      easing: "easeInOutQuad",
    });
  },
});

// 늘였다 줄였다 (양옆으로) //
// animation-scale-side //
AFRAME.registerComponent("animation-scale-side", {
  init: function () {
    this.entity = this.el;

    this.entity.setAttribute("animation__scale", {
      property: "scale",
      from: toScale(-3, 0, 0),
      to: toScale(3, 0, 0),
      dir: "alternate",
      dur: "1000",
      loop: "true",
      easing: "easeInOutQuad",
    });
  },
});

// 빙글빙글 (빠르게) //
// animation-rotation-fast //
AFRAME.registerComponent("animation-rotation-fast", {
  init: function () {
    this.entity = this.el;

    this.entity.setAttribute("animation__rotation", {
      property: "rotation",
      from: "0 0 0",
      to: "0 0 360",
      dur: "1000",
      loop: "true",
      easing: "linear",
    });
  },
});

// 빙글빙글 (느리게) //
// animation-rotation-slow //
AFRAME.registerComponent("animation-rotation-slow", {
  init: function () {
    this.entity = this.el;

    this.entity.setAttribute("animation__rotation", {
      property: "rotation",
      from: "0 0 0",
      to: "0 0 360",
      dur: "3000",
      loop: "true",
      easing: "linear",
    });
  },
});

// 이름표 마커에 사용됨. //
// animation-rotation-y //
AFRAME.registerComponent("animation-rotation-y", {
  init: function () {
    this.entity = this.el;

    this.entity.setAttribute("animation__rotation", {
      property: "rotation",
      from: "0 0 0",
      to: "0 360 0",
      dur: "4000",
      loop: "true",
      easing: "linear",
    });
  },
});

// 오뚜기 //
// animation-rotation-z //
AFRAME.registerComponent("animation-rotation-z", {
  init: function () {
    this.entity = this.el;

    this.entity.setAttribute("animation__rotation", {
      property: "rotation",
      from: "0 0 -20",
      to: "0 0 20",
      dir: "alternate",
      dur: "1000",
      loop: "true",
      easing: "easeInOutQuad",
    });
  },
});

// 사라졌다 나타났다 //
// animation-opacity //
AFRAME.registerComponent("animation-opacity", {
  init: function () {
    this.entity = this.el;

    this.entity.setAttribute("animation__opacity", {
      property: "material.opacity",
      to: "0 0 0",
      dir: "alternate",
      dur: "1000",
      loop: "true",
      easing: "easeInOutQuad",
    });
  },
});

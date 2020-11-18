import { gsap } from "gsap";
// import { PixiPlugin } from "gsap/PixiPlugin.js";
// import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";

import { hexToHsl, hslToString } from "@/utils/hslColors";

//without this line, PixiPlugin and MotionPathPlugin may get dropped by your bundler (tree shaking)...
// gsap.registerPlugin(PixiPlugin, MotionPathPlugin);

const LEFT_BLOB_ID = "leftBlob";
const RIGHT_BLOB_ID = "rightBlob";

const isClient = !!process.client;
const timelines = {};

const getRandomH = (h) => gsap.utils.random(h - 20, h + 20, 1);
const getRandomS = (s) => gsap.utils.random(s - 3, s + 3, 1);
const getRandomL = (l) => gsap.utils.random(l - 3, l + 3, 1);
const getRandomX = () => gsap.utils.random(-200, 200, 1);
const getRandomY = () => gsap.utils.random(-200, 200, 1);
const getRandomScaleX = () => gsap.utils.random(0.7, 1.5);
const getRandomScaleY = () => gsap.utils.random(0.7, 1.5);
const getRandomDuration = () => gsap.utils.random(3, 6);
const getHsl = ({ h, s, l }) => `hsl(${h},${s}%,${l}%)`;

const createTimeline = (id, hex) => {
  if (!isClient) return;

  const { h, s, l } = hexToHsl(hex);
  const el = document.getElementById(id);
  const getRandomHsl = () => getHsl({ h: getRandomH(h), s: getRandomS(s), l: getRandomL(l) });
  if (timelines[id]) { timelines[id].kill() }

  timelines[id] = gsap.timeline({ ease: "power2.inOut", repeat: -1 });
  timelines[id].to(el, {
    x: 1.2 * getRandomX(),
    y: 1.2 * getRandomY(),
    scaleX: 1.2 * getRandomScaleX(),
    scaleY: 1.2 * getRandomScaleY(),
    duration: 1,
    backgroundColor: hex,
  });

  Array.from({ length: 4 }).forEach(() => {
    timelines[id].to(el, {
      x: getRandomX(),
      y: getRandomY(),
      // filter: `blur(${getRandomX}px)`,
      scaleX: getRandomScaleX(),
      scaleY: getRandomScaleY(),
      duration: getRandomDuration(),
      backgroundColor: getRandomHsl(),
    });
  });
  timelines[id].to(el, {
    x: 0,
    y: 0,
    scaleX: 1,
    scaleY: 1,
    duration: getRandomDuration(),
    backgroundColor: hex,
  });
};

export const state = () => ({
  leftBlobEl: null,
  rightBlobEl: null,
  leftBlobColorHex: "transparent",
  rightBlobColorHex: "transparent",
  leftTimeline: null,
  rightTimeline: null,
});

export const getters = {
  leftBlobStyle: (state) => ({ backgroundColor: state.leftBlobColorHex ?? "transparent" }),
  rightBlobStyle: (state) => ({ backgroundColor: state.rightBlobColorHex ?? "transparent" }),
  leftBlobHsl: (state) => hexToHsl(state.leftBlobColorHex),
  rightBlobHsl: (state) => hexToHsl(state.rightBlobColorHex),
  talkBtnColor: (state) => ({ color: state.rightBlobColorHex }),
};

export const mutations = {
  setBlobElements(state) {
    console.log("did it happen?");
    console.log({ state });
    // state.leftBlobEl = leftBlobEl;
    // state.rightBlobEl = rightBlobEl;
  },
  setBlobColorsHex(state, { leftBlobColorHex, rightBlobColorHex }) {
    console.log("did it happen?");
    state.leftBlobColorHex = leftBlobColorHex;
    state.rightBlobColorHex = rightBlobColorHex;
  },
};

export const actions = {
  initBlobs({ state, commit }) {
    console.log(state);
    console.log("initialize timelines");
    createTimeline(LEFT_BLOB_ID, state.leftBlobColorHex);
    createTimeline(RIGHT_BLOB_ID, state.rightBlobColorHex);
    commit("setBlobElements");
  },
  updateBlobColorsHex({ commit, state }, { leftBlobColorHex, rightBlobColorHex }) {
    console.log("do some fancy animations here");
    console.log("...and start new pulsing");
    // commit("setBlobColorsHex", { leftBlobColorHex, rightBlobColorHex });
    commit("setBlobColorsHex", {
      leftBlobColorHex: leftBlobColorHex,
      rightBlobColorHex: rightBlobColorHex,
    });
    createTimeline(LEFT_BLOB_ID, state.leftBlobColorHex);
    createTimeline(RIGHT_BLOB_ID, state.rightBlobColorHex);
  },
};

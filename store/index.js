export const state = () => ({
  leftBlobColor: null,
  rightBlobColor: null,
});

export const getters = {
  talkBtnColor: (state) => ({ color: state.rightBlobColor }),
  leftBlobStyle: (state) => ({ backgroundColor: state.leftBlobColor ?? "transparent" }),
  rightBlobStyle: (state) => ({ backgroundColor: state.rightBlobColor ?? "transparent" }),
};

export const mutations = {
  setBlobColors(state, { leftBlobColor, rightBlobColor }) {
    state.leftBlobColor = leftBlobColor;
    state.rightBlobColor = rightBlobColor;
  },
};

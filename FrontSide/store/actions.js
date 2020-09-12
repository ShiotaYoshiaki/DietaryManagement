export function UpdateKeyword({ commit }, value) {
  commit("UpdateKeyword", value);
}
export function searchFunc({commit}) {
  commit("searchFunc");
}
export function changeSort({commit}) {
  commit("changeSort");
}
export function sortedCooks({commit}) {
  commit("sortedCooks");
}
export function addFunc ({commit}) {
  commit("addFunc");
}
export function UpdateKeyword(state, newKeyword) {
  state.keyword = newKeyword;
}
export function searchFunc(status) {
  const searched = status.cooks.filter((value) => {
    const indexNum = value.message.indexOf(status.keyword);
    return indexNum !== -1;
  });
  status.cooks = searched;
}
export function changeSort(status) {
  const sorted = status.cooks.map((cook) => {
    return cook.message;
  });
  sorted.sort();
  const sortedCooks = sorted.map(param => {
    status.cooks.find(cook =>  cook.message === param)
  });
    status.cooks = sortedCooks;
}
export function addFunc(status) {
  const boolemAdd = status.cooks.filter((value) => {
    const filterValue = value.checked;
    return filterValue;
  });
  boolemAdd.forEach((element) => {
    this.AddRecipe.push(element);
  });
}
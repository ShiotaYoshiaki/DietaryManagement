export function UpdateKeyword(state, newKeyword) {
  state.keyword = newKeyword;
}
export function searchFunc(status) {
  const searched = status.MyRecipe.filter((value) => {
    const indexNum = value.message.indexOf(status.keyword);
    return indexNum !== -1;
  });
  status.MyRecipe = searched;
}
export function changeSort(status) {
  const sorted = status.MyRecipe.map((value) => {
    // console.log(value.message);
    return value.message;
  });
  sorted.sort();
  const sortedMyRecipe = sorted.map((data) => {
    return status.MyRecipe.find((recipe) => recipe.message === data);
  });
}
export function addFunc(status) {
  const boolemAdd = status.MyRecipe.filter((value) => {
    const filterValue = value.checked;
    return filterValue;
  });
  boolemAdd.forEach((element) => {
    status.EMPTY_RECIPE.push(element);
  });
}

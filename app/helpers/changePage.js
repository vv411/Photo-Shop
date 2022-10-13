import { helper } from '@ember/component/helper';

//Go to next or previous page
function changePage(args) {
  let [currPage, change] = args;
  let newPage = parseInt(currPage, 10);

  newPage = newPage == 1 && change < 0 ? newPage : newPage + change;

  return newPage;
}

export default helper(changePage);

import { getRegExp } from "korean-regexp";

function 한글조건(targetText, input) {
  let 정규문자 = getRegExp(input, {
    initialSearch: true,
    fuzzy: true,
  });
  if (targetText.search(정규문자) > -1) return true;
}
export default function 입력값을만족하는배열(arr, input, filterCondition) {
  return arr.filter((val) => 한글조건(val[`${filterCondition}`], input));
}

export default function arrayToString(arr: string[]): string {
  if (arr.constructor !== Array) { return arr.toString(); }
  const tempArr: string[] = [];
  arr.forEach((e) => tempArr.push('"' + e + '"'));
  return tempArr.toString();
}

export function addPointerInStringValue(value: string) {
  const addPointer =
    value.substring(0, 3) +
    '.' +
    value.substring(3, 6) +
    '.' +
    value.substring(6, 9) +
    '.' +
    value.substring(9, 12);

  return addPointer;
}

function getFirstValueFromArray<T>(array: T[]) {
    return array[0];
}

const FirstValueNumber = getFirstValueFromArray<number>([1, 2, 5, 6]);
const FirstValueString = getFirstValueFromArray<string>(["5", "b", "e", "d"]);

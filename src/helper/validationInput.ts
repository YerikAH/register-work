export function validateNumber(
  input: string,
  setNumber: React.Dispatch<React.SetStateAction<number>>,
  limitNumber: number
) {
  const noSpace = input.trim();
  let regexOnlyNumber: RegExp = /^[0-9]+$/;
  if (!regexOnlyNumber.test(noSpace.trim())) {
    console.log("Datos incorrectos");
  } else {
    const stringToNumber = parseInt(noSpace);

    if (stringToNumber >= limitNumber) {
      setNumber(limitNumber);
    } else if (stringToNumber <= 0) {
      setNumber(0);
    } else {
      setNumber(stringToNumber);
    }
  }
}

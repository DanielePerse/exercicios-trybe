const newFunction = (string) => {
  let string2 = "Tryber x aqui!";
  let result = "";
  for (let i = 0; i < string2.length; i += 1) {
    if (string2[i] === "x") {
      result = result + string;
    } else {
      result = result + string2[i];
    }
  }
  return result;
}
//console.log(newFunction("Bebeto"));

const arraySkills = ["Javascript", "GitHub", "Internet", "Css", "html"];

const otherFunction = (newFunction()) => {

}
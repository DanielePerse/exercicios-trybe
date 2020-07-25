let inteiros = [2, 3, 2, 5, 8, 2, 3];

function array(inteiros) {
    let repeat = 0;
    for (let index in inteiros) {
        for (let index2 in inteiros) {
            if (inteiros[index] === inteiros[index2]) {
                repeat += 1;
                //rever a lógica
            }
        }
    }
}
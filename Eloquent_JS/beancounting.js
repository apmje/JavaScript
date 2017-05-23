function countChar(str, letter) {
    var count = "";
    for (i = 0; i < str.length; i++) {
        if (str.charAt(i) === letter)
            count += letter;
    }
    return count.length;

}

function countBs(str) {
     return countChar(str, "B");
}
console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));

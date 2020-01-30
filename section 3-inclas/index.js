var age = "abdo"

if (age < 12) {
    console.log("kid")
} else if (age >= 12 && age < 20) {
    console.log("teenager")
} else if (age >= 20 && age < 45) {
    console.log("man")
} else if (age >= 45) {
    console.log("old")
} else {
    alert("must be number")
}
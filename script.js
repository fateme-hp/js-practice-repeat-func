// Ex: فانکشن بسازید که تعداد ستاره وسط رو ما مشخص کنیم.
// Ex : 3xp
// starRepeat(10)
//     *
//     **
//     ***
//     ****
//     *****
//     ******
//     *******
//     ********
//     *********
//     **********
//     *********
//     ********
//     *******
//     ******
//     *****
//     ****
//     ***
//     **
//     *

function starRepeat(num) {
  //Define variables

  let star = "*",
    output;

  // Define a for loop repeat count

  for (let i = 1; i <= num; i++) {
    output = star.repeat(i);
    console.log(output);
  }
  //reverse 
  for (let i = 1; i <= num; i++) {
    output = star.repeat(num-i);
    console.log(output);
  }
}

starRepeat(10);


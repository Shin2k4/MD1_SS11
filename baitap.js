// bài 1:

let height = Number(prompt("Mời bạn nhập chiều cao!"));
let weigth = Number(prompt("Mời bạn nhập cân nặng!"));
let bmi = Number(weigth / (height * height));

if (bmi < 18) {
    document.write("Underweight");
} else if (bmi < 25.0) {
    document.write("Normal");
} else if (bmi < 30.0) {
    document.write("Overweight");
} else {
    document.write("Obese");
}



// bài 2:

// let month = prompt("mời bạn nhập tháng muốn tính");
// switch (new Date().getDay()) {
//     case 0:
//         month = "Tháng 1 có 31 ngày";
//         break;
//     case 1:
//         month = "Tháng 2 có 28 ngày";
//         break;
//     case 2:
//         month = "Tháng 3 có 28 ngày ";
//         break;
//     case 3:
//         month = "Tháng 4 có 28 ngày";
//         break;
//     case 4:
//         month = "Tháng 5 có 28 ngày";
//         break;
//     case 5:
//         month = "Tháng 6 có 28 ngày";
//         break;
//     case 6:
//         month = "Tháng 7 có 28 ngày";
//         break;
//     case 7:
//         month = "Tháng 8 có 28 ngày";
//         break;
//     case 8:
//         month = "Tháng 9 có 28 ngày";
//         break;
//     case 9:
//         month = "Tháng 10 có 28 ngày";
//         break;
//     case 10:
//         month = "Tháng 11 có 28 ngày";
//         break;
//     case 11:
//         month = "Tháng 12 có 28 ngày";
// }
// document.getElementById("demo").innerHTML = "Today is " + month;
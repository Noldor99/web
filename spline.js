const btns = document.querySelectorAll(".spline__btn");

btns.forEach((btn) => {
   btn.addEventListener("click", function () {
      inp__next_d = this.parentElement.querySelector(".spline__value-d");
      d = +inp__next_d.value;

      if (d >= 6 && d < 8) {
         b = 2;
         h = 2;
         l_1 = 1.2;
         l_2 = 1;
         l = "6-20";
      }
      if (d >= 8 && d < 10) {
         b = 3;
         h = 3;
         l_1 = 1.8;
         l_2 = 1.4;
         l = "6-36";
      }
      if (d >= 10 && d < 12) {
         b = 4;
         h = 4;
         l_1 = 2.5;
         l_2 = 1.8;
         l = "8-45";
      }
      if (d >= 12 && d < 17) {
         b = 5;
         h = 5;
         l_1 = 3;
         l_2 = 2.3;
         l = "10-56";
      }
      if (d >= 17 && d < 22) {
         b = 6;
         h = 6;
         l_1 = 3.5;
         l_2 = 2.8;
         l = "14-70";
      }
      if (d >= 22 && d < 30) {
         b = 8;
         h = 7;
         l_1 = 4;
         l_2 = 3.3;
         l = "18-90";
      }
      if (d >= 30 && d < 38) {
         b = 10;
         h = 8;
         l_1 = 5;
         l_2 = 3.3;
         l = "22-110";
      }
      if (d >= 38 && d < 44) {
         b = 12;
         h = 8;
         l_1 = 5;
         l_2 = 3.3;
         l = "28-140";
      }
      if (d >= 44 && d < 50) {
         b = 14;
         h = 9;
         l_1 = 5.5;
         l_2 = 3.8;
         l = "36-160";
      }
      if (d >= 50 && d < 58) {
         b = 16;
         h = 10;
         l_1 = 6;
         l_2 = 4.3;
         l = "45-180";
      }
      if (d >= 58 && d < 65) {
         b = 18;
         h = 11;
         l_1 = 7;
         l_2 = 4.4;
         l = "50-200";
      }
      if (d >= 65 && d < 75) {
         b = 20;
         h = 12;
         l_1 = 7.5;
         l_2 = 4.9;
         l = "56-220";
      }
      if (d >= 75 && d < 85) {
         b = 22;
         h = 14;
         l_1 = 9;
         l_2 = 5.4;
         l = "63-250";
      }
      if (d >= 85 && d < 95) {
         b = 25;
         h = 14;
         l_1 = 9;
         l_2 = 5.4;
         l = "70-280";
      }
      if (d >= 95 && d < 110) {
         b = 28;
         h = 16;
         l_1 = 10;
         l_2 = 6.4;
         l = "80-320";
      }
      if (d >= 110 && d < 130) {
         b = 32;
         h = 18;
         l_1 = 11;
         l_2 = 7.4;
         l = "90-360";
      }

      inp__next_b = this.parentElement.querySelector(".spline__value-b");
      inp__next_b.value = b;

      inp__next_h = this.parentElement.querySelector(".spline__value-h");
      inp__next_h.value = h;

      inp__next_l_1 = this.parentElement.querySelector(".spline__value-l_1");
      inp__next_l_1.value = l_1;

      inp__next_l_2 = this.parentElement.querySelector(".spline__value-l_2");
      inp__next_l_2.value = l_2;

      inp__next_l = this.parentElement.querySelector(".spline__value-l");
      inp__next_l.value = l;

      inp__next_minus = this.parentElement.querySelector(
         ".spline__value-minus"
      );
      inp__next_minus.value = +d - +l_1;

      inp__next_plus = this.parentElement.querySelector(".spline__value-plus");
      inp__next_plus.value = +d + +l_2;
   });
});

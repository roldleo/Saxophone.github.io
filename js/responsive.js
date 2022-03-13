let x = window.matchMedia("(max-width: 430px)");
function responsive438() {
  if (x.matches) {
    $("#CC").addClass("container");
    $("#CC").removeClass("container-fluid");
    $("#ht").removeClass("ms-5");
    $("#hi-1").addClass("col-12");
    $("#hi-1").removeClass("col-1 sticky-element");
    $("#hi-2").addClass("col-12");
    $("#hi-2").removeClass("col-6 sticky-element ");
    $("#hi-i-2").addClass("dinant438");
    $("#hi-i-2").removeClass("history-2");
    $("#hi-3").addClass("col-12");
    $("#hi-3").removeClass("col-2 sticky-element");
    $("#hi-i-3").removeClass("history-3");
    $("#hi-4").addClass("col-12");
    $("#hi-4").removeClass("col-5 sticky-element");
    $("#he1").addClass("col-12");
    $("#he1").removeClass("col-6");
    $("#he2").addClass("col-12");
    $("#he2").removeClass("col-5");
    $("#he3").addClass("col-12");
    $("#he3").removeClass("col-6 ");
    $("#he4").addClass("col-12 he-4-438");
    $("#he4").removeClass("col-5");

    $("#tt").removeClass("ms-5");
    $("#ttd").addClass("col-12 ms-3");
    $("#ttd").removeClass("col-8 ms-5");
    $("#type1").addClass("col-6 mb-4");
    $("#type1").removeClass("col-3");
    $("#type2").addClass("col-6 mb-4");
    $("#type2").removeClass("col-3");
    $("#type3").addClass("col-6");
    $("#type3").removeClass("col-3");
    $("#type4").addClass("col-6");
    $("#type4").removeClass("col-3");
    $("#td").addClass("col-12");
    $("#td").removeClass("col-8 ms-4");

    $("#SS").addClass("container");
    $("#SS").removeClass("container-fluid");
    $("#ST").addClass("");
    $("#ST").removeClass("ms-5");
    $("#r-ssd").removeClass("ms-5");
    $("#ssd").removeClass("ms-4");
    $("#mp-i").addClass("col-12");
    $("#mp-i").removeClass("col-4");
    $("#mp-t").addClass("col-12");
    $("#mp-t").removeClass("col-4");
    $("#n-t").addClass("col-12");
    $("#n-t").removeClass("col-7");
    $("#n-i").addClass("col-12");
    $("#n-i").removeClass("col-3");
    $("#b-i").addClass("col-12");
    $("#b-i").removeClass("col-4");
    $("#b-t").addClass("col-12");
    $("#b-t").removeClass("col-7");
  }
}
responsive438();

let y = window.matchMedia("(max-width: 884px)");
function responsive884() {
  if (y.matches) {
    $("#mp-i").addClass("ms--5");
    $("#b-t").removeClass("col-7");
  }
}
responsive884();

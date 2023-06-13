let screenWidth = window.innerWidth;

function featurePopup() {
  let features = document.getElementById("fdd_menu");
  features.classList.toggle("display");
  var f_count = features.classList.length;
  if (f_count==4) {
    document.getElementById("feat_arr_dwn").style.display="none"
    document.getElementById("feat_arr_up").style.display="flex"
    features.style.position = screenWidth<=768 ? "relative" : "absolute"
  } else if (f_count==3) { 
    document.getElementById("feat_arr_dwn").style.display="flex"
    document.getElementById("feat_arr_up").style.display="none"
    features.style.position = screenWidth<=768 ? "absolute" : "ralative"
  };

}

function companyPopup() {
  let company = document.getElementById("cdd_menu");
  company.classList.toggle("display");
  var c_count = company.classList.length;
  console.log(c_count)
    if (c_count == 4) {
      document.getElementById("comp_arr_dwn").style.display="none"
      document.getElementById("comp_arr_up").style.display="flex"
      company.style.position=screenWidth<=999 ? "relative" : "absolute"
    } else if (c_count == 3) { 
      document.getElementById("comp_arr_dwn").style.display="flex"
      document.getElementById("comp_arr_up").style.display="none"
      company.style.position=screenWidth<=999 ? "absolute" : "ralative"
  };
}

// alert(`Device width is ${screenWidth}`)

function openMenu() {
  let open = document.getElementById("mobile-nav");
  open.classList.toggle("open")
  open.style.display = "flex"
}
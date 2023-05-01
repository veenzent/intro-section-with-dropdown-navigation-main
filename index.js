function featurePopup() {
  let features = document.getElementById("fdd_menu");
  features.classList.toggle("display");
  var f_count = features.classList.length;
  if (f_count == 4) {
    document.getElementById("feat_arr_dwn").style.display="none"
    document.getElementById("feat_arr_up").style.display="flex"
  } else if (f_count == 3) { 
    document.getElementById("feat_arr_dwn").style.display="flex"
    document.getElementById("feat_arr_up").style.display="none"
  };
}

function companyPopup() {
  let company = document.getElementById("cdd_menu");
  company.classList.toggle("display");
  var c_count = company.classList.length;
    if (c_count == 3) {
      document.getElementById("comp_arr_dwn").style.display="none"
      document.getElementById("comp_arr_up").style.display="flex"
  } else if (c_count == 2) { 
      document.getElementById("comp_arr_dwn").style.display="flex"
      document.getElementById("comp_arr_up").style.display="none"
  };
}
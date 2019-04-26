function log(a) {
  console.log(a);
}

function search(s) {
  var reg = new RegExp((s||"").replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), "gim");
  $("li").each(function (index, elt) {
    var find = function (selector) {
      if ($("#chk" + selector).is(":checked")) {
        return $(elt).find("."+selector).text()
      } else {
        return ""
      }
    }
    var h = "" + find("paperTitle") + find("authors") + find("abstract") + find("keywords")
    if (h.match(reg)) {
      $(elt).show()
    } else {
      $(elt).hide()
    }
  })
}

function updateSearch() {
  log($("#txtSearch").val())
  search($("#txtSearch").val())
}

function forceSearch(s) {
  $("#txtSearch").val(s)
  updateSearch()
}

$(function(){ // Code to be executed once all the html is ready
  $("input[type='checkbox']").on("change", function(){
    log("chk")
    updateSearch()
  });
  // Clear the search box on page load
  $("#txtSearch").val("");
  var s = window.location.search.substr(1);
  if (s != null && s != "" && s[0] == 'q') {
    forceSearch(decodeURI(s).split('=')[1])
  }

}
)
function log(a) {
  console.log(a)
}

function search(s) {
  var reg = new RegExp(s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), "gim");
  $("li").each(function (index) {
    var h = $(this).text()
    if (h.match(reg)) {
      $(this).show()
    } else {
      $(this).hide()
    }
  })
}

function updateSearch() {
  log($("#txtSearch").val())
  search($("#txtSearch").val())
}

function forceSearch(s){
  $("#txtSearch").val(s)
  updateSearch()
}
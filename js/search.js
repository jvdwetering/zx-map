function log(a) {
  console.log(a);
}

function search(s) {
  var reg = new RegExp((s || "").replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), "gim");
  $("li").each(function (index, elt) {
    var find = function (selector) {
      if ($("#chk" + selector).is(":checked")) {
        return $(elt).find("." + selector).text()
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
  // Show all years
  $("h2").show()
  log($("#txtSearch").val())
  search($("#txtSearch").val())
  // Hide all unused years
  $("h2").filter(function (i, e) {
    return $(e).next().get(0).nodeName == "UL"
  }).filter(function (i, e) {
    return $(e).next().children().filter(function (j, f) {
      return $(f).css("display") !== "none"
    }).length == 0
  }).hide()
}

function forceSearch(s) {
  $("#txtSearch").val(s)
  updateSearch()
}

$(function () { // Code to be executed once all the html is ready
  $("input[type='checkbox']").on("change", function () {
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
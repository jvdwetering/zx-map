var start = function () {

  var data = {
    nodes: [],
    links: []
  }
  var addNode = function (id, text, type) {
    data.nodes.push({
      id: id,
      text: text,
      type: type || 0
    })
  }

  var addLink = function (a, b) {
    data.links.push({
      source: a,
      target: b
    })
  }

  addNode(1,"Oxford", "place")
  addNode(12,"Edinburgh", "place")
  addNode(15,"Aalto", "place")
  addNode(18,"Amsterdam", "place")
  addNode(21,"Paris", "place")
  addNode(32,"London", "place")
  addNode(36,"Cambridge", "place")
  addNode(38,"Nancy", "place")
  addNode(43,"Talinn", "place")
  addNode(48,"Sussex", "place")
  addNode(50,"Birmingham", "place")
  addNode(52,"Durham", "place")
  addNode(0,"Aleks Kissinger", "person")
  addNode(10,"Alex Cowtan", "person")
  addNode(11,"Robert Booth", "person")
  addNode(14,"Alexandru Paler", "person")
  addNode(17,"John van de Wetering", "person")
  addNode(20,"Agustin Borgna", "person")
  addNode(23,"Konstantinos Meichanetzidis", "person")
  addNode(26,"Cole Comfort", "person")
  addNode(29,"Dominic Horsman", "person")
  addNode(31,"Richard East", "person")
  addNode(34,"Will Simmons", "person")
  addNode(35,"Ross Duncan", "person")
  addNode(37,"Simon Perdrix", "person")
  addNode(39,"Titouan Carette", "person")
  addNode(40,"Renaud Vilmart", "person")
  addNode(42,"Amar Hadzihasanovic", "person")
  addNode(46,"Bob Coecke", "person")
  addNode(47,"Niel de Beaudrap", "person")
  addNode(49,"Miriam Backens", "person")
  addNode(51,"Nicholas Chancellor", "person")
  addNode(53,"Emmanuel Jeandel", "person")
  addNode(54,"Giovanni de Felice", "person")
  addNode(55,"Quanlong Wang", "person")
  addNode(2,"ZH", "field")
  addNode(3,"PyZX", "field")
  addNode(4,"Circuit optimisation", "field")
  addNode(5,"Circuit simulation", "field")
  addNode(6,"Circuit extraction", "field")
  addNode(7,"Error correcting codes", "field")
  addNode(8,"Quantomatic", "field")
  addNode(9,"Foundations", "field")
  addNode(13,"Infinite-dimensional ZX", "field")
  addNode(16,"Surface codes", "field")
  addNode(19,"MBQC", "field")
  addNode(22,"Mixed ZX", "field")
  addNode(24,"NLP", "field")
  addNode(25,"Tensor networks", "field")
  addNode(27,"Completeness", "field")
  addNode(28,"String diagrams", "field")
  addNode(30,"Scalable ZX", "field")
  addNode(33,"Algorithms", "field")
  addNode(41,"ΔZX", "field")
  addNode(44,"ZW", "field")
  addNode(45,"Fermionic QC", "field")
  addNode(56,"Qudits", "field")
  addLink(1,0)
  addLink(2,0)
  addLink(3,0)
  addLink(4,0)
  addLink(5,0)
  addLink(6,0)
  addLink(7,0)
  addLink(8,0)
  addLink(9,0)
  addLink(1,10)
  addLink(4,10)
  addLink(12,11)
  addLink(13,11)
  addLink(15,14)
  addLink(4,14)
  addLink(16,14)
  addLink(6,14)
  addLink(18,17)
  addLink(2,17)
  addLink(3,17)
  addLink(19,17)
  addLink(4,17)
  addLink(6,17)
  addLink(5,17)
  addLink(21,20)
  addLink(4,20)
  addLink(3,20)
  addLink(22,20)
  addLink(1,23)
  addLink(24,23)
  addLink(25,23)
  addLink(1,26)
  addLink(27,26)
  addLink(28,26)
  addLink(1,29)
  addLink(16,29)
  addLink(7,29)
  addLink(30,29)
  addLink(22,29)
  addLink(32,31)
  addLink(16,31)
  addLink(30,31)
  addLink(22,31)
  addLink(13,31)
  addLink(33,31)
  addLink(1,34)
  addLink(4,34)
  addLink(36,35)
  addLink(4,35)
  addLink(19,35)
  addLink(8,35)
  addLink(38,37)
  addLink(27,37)
  addLink(19,37)
  addLink(16,37)
  addLink(22,37)
  addLink(21,39)
  addLink(27,39)
  addLink(22,39)
  addLink(30,39)
  addLink(21,40)
  addLink(27,40)
  addLink(41,40)
  addLink(22,40)
  addLink(43,42)
  addLink(44,42)
  addLink(45,42)
  addLink(1,46)
  addLink(27,46)
  addLink(4,46)
  addLink(44,46)
  addLink(24,46)
  addLink(48,47)
  addLink(4,47)
  addLink(19,47)
  addLink(16,47)
  addLink(33,47)
  addLink(50,49)
  addLink(27,49)
  addLink(2,49)
  addLink(6,49)
  addLink(52,51)
  addLink(7,51)
  addLink(25,51)
  addLink(38,53)
  addLink(27,53)
  addLink(22,53)
  addLink(1,54)
  addLink(44,54)
  addLink(45,54)
  addLink(24,54)
  addLink(1,55)
  addLink(27,55)
  addLink(4,55)
  addLink(56,55)
  addLink(41,55)


  // Event handling

  var selected = null;

  drag = simulation => {

    function dragstarted(d) {
      if (!d3.event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
      if (selected != null) {
        $("#info-"+selected).toggle();
      }
      $("#info-"+d.id).toggle();
      selected = d.id;
    }

    function dragged(d) {
      d.fx = d3.event.x;
      d.fy = d3.event.y;
    }

    function dragended(d) {
      if (!d3.event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }

    return d3.drag()
      .on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended);
  }


  // Map drawing

  const links = data.links.map(d => Object.create(d));
  const nodes = data.nodes.map(d => Object.create(d));


  const constrain = function (x) {
    return Math.max(-size * 0.9, Math.min(x, size * 0.9))
  }


  const constrainForce = function (alpha) {
    for (var i = 0, n = nodes.length, node, k = alpha * 0.1; i < n; ++i) {
      node = nodes[i];
      node.x = constrain(node.x);
      node.y = constrain(node.y);
    }
  }

  const midForce = function (alpha) {
    for (var i = 0, n = nodes.length, node, k = alpha * 0.1; i < n; ++i) {
      node = nodes[i];
      var str = 200;
      node.vx -= str*k * Math.pow(1.1*node.x / size, 3);
      node.vy -= str*k * Math.pow(1.1*node.y / size, 3);
    }
  }

  const categoryForce = function (alpha) {
    for (var i = 0, n = nodes.length, node, k = alpha * 0.1; i < n; ++i) {
      node = nodes[i];
      if (node.type === "field") {
        node.y -= k * (node.y - 0.9 * size);
      }
      if (node.type === "place") {
        node.x -= k * (node.x - 0.9 * size);
      }
    }
  }

  const simulation = d3.forceSimulation(nodes)
    .force("link", d3.forceLink(links).id(d => d.id))
    .force("charge", d3.forceManyBody().strength(-300))
    .force("mid", midForce)
    .force("center", d3.forceCenter(0, 0))
    .force("constrain", constrainForce)
    //.force("category", categoryForce)

    
    /*
    */


  const size = 700

  const svg = d3.select("#map").append("svg")
    .attr("width", "90%")
    .attr("height", "90%")
    .attr('viewBox', `-${size} -${size} ${2*size} ${2*size}`)

  g = svg.append('g');

  svg.call(d3.zoom()
    .scaleExtent([1 / 2, 8])
    .on("zoom", zoomed));

  function zoomed() {
    g.attr("transform", d3.event.transform);
  }

  const link = g.append("g")
    .attr("stroke", "#999")
    .attr("stroke-opacity", 0.6)
    .selectAll("line")
    .data(links)
    .join("line")
    .attr("color", function (d) {
      switch (d.type) {
        case 0:
          return "blue";
        default:
          return "red";
      }
    });


  var color = function (a) {
    switch (a) {
      case "place":
        return "#DAA";
      case "person":
        return "#ADA";
      case "field":
        return "#AAD";
      default:
        return "black";
    }
  }

  var node = g.append("g")
    .attr("class", "nodes")
    .selectAll("g")
    .data(nodes)
    .enter().append("g")
    .call(drag(simulation));

  var labels1 = node.append("text")
    .attr("text-anchor", "middle")
    .text(function (d) {
      return d.text;
    })
    .attr('x', 6)
    .attr('y', 3);


  function getTextBox(selection) {
    selection.each(function (d) {
      d.bbox = this.getBBox();
    })
  }

  node.call(getTextBox)
    .append("rect")
    .attr("x", function (d) {
      return d.bbox.x
    })
    .attr("y", function (d) {
      return d.bbox.y
    })
    .attr("width", function (d) {
      return d.bbox.width
    })
    .attr("height", function (d) {
      return d.bbox.height
    })
    .attr("fill", d => color(d.type))
    .attr("opacity", "0.2")


  var labels2 = node.append("text")
    .attr("text-anchor", "middle")
    .text(function (d) {
      return d.text;
    })
    .attr('x', 6)
    .attr('y', 3);



  simulation.on("tick", () => {
    link
      .attr("x1", d => d.source.x)
      .attr("y1", d => d.source.y)
      .attr("x2", d => d.target.x)
      .attr("y2", d => d.target.y);

    node
      .attr("transform", d => `translate(${d.x},${d.y})`);
  });

  // invalidation.then(() => simulation.stop());
}
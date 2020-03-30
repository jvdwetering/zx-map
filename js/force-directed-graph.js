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
  addNode(11,"Cambridge", "place")
  addNode(13,"Nancy", "place")
  addNode(16,"Linz", "place")
  addNode(19,"Nijmegen", "place")
  addNode(22,"Paris", "place")
  addNode(31,"London", "place")
  addNode(37,"Grenoble", "place")
  addNode(42,"Glasgow", "place")
  addNode(48,"Kyoto", "place")
  addNode(54,"Birmingham", "place")
  addNode(56,"Durham", "place")
  addNode(0,"Aleks Kissinger", "person")
  addNode(10,"Alex Cowtan", "person")
  addNode(12,"Robert Booth", "person")
  addNode(15,"Alexandru Paler", "person")
  addNode(18,"John van de Wetering", "person")
  addNode(21,"Agustin Borgna", "person")
  addNode(24,"Konstantinos Meichanetzidis", "person")
  addNode(27,"Cole Comfort", "person")
  addNode(30,"Kang Feng Ng", "person")
  addNode(36,"Dominic Horsman", "person")
  addNode(39,"Richard East", "person")
  addNode(40,"Will Simmons", "person")
  addNode(41,"Ross Duncan", "person")
  addNode(43,"Simon Perdrix", "person")
  addNode(44,"Titouan Carette", "person")
  addNode(45,"Renaud Vilmart", "person")
  addNode(47,"Amar Hadzihasanovic", "person")
  addNode(49,"Bob Coecke", "person")
  addNode(50,"Niel de Beaudrap", "person")
  addNode(51,"Hector Miller-Bakewell", "person")
  addNode(53,"Miriam Backens", "person")
  addNode(55,"Nicholas Chancellor", "person")
  addNode(57,"Joe Collins", "person")
  addNode(59,"Emmanuel Jeandel", "person")
  addNode(60,"Giovanni de Felice", "person")
  addNode(61,"Stefano Gogioso", "person")
  addNode(63,"Quanlong Wang", "person")
  addNode(2,"ZH", "field")
  addNode(3,"PyZX", "field")
  addNode(4,"Circuit optimisation", "field")
  addNode(5,"Circuit simulation", "field")
  addNode(6,"Circuit extraction", "field")
  addNode(7,"Error correcting codes", "field")
  addNode(8,"Quantomatic", "field")
  addNode(9,"Foundations", "field")
  addNode(14,"Infinite-dimensional ZX", "field")
  addNode(17,"Surface codes", "field")
  addNode(20,"MBQC", "field")
  addNode(23,"Mixed ZX", "field")
  addNode(25,"NLP", "field")
  addNode(26,"Tensor networks", "field")
  addNode(28,"Completeness", "field")
  addNode(29,"String diagrams", "field")
  addNode(32,"ZW", "field")
  addNode(33,"Qudits", "field")
  addNode(34,"Fermionic QC", "field")
  addNode(35,"Algorithms", "field")
  addNode(38,"Scalable ZX", "field")
  addNode(46,"ΔZX", "field")
  addNode(52,"ZQ", "field")
  addNode(58,"Hopf algebras", "field")
  addNode(62,"ZX-Dynamics", "field")
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
  addLink(11,10)
  addLink(4,10)
  addLink(13,12)
  addLink(14,12)
  addLink(16,15)
  addLink(4,15)
  addLink(17,15)
  addLink(6,15)
  addLink(19,18)
  addLink(2,18)
  addLink(3,18)
  addLink(20,18)
  addLink(4,18)
  addLink(6,18)
  addLink(5,18)
  addLink(13,21)
  addLink(22,21)
  addLink(4,21)
  addLink(3,21)
  addLink(23,21)
  addLink(1,24)
  addLink(25,24)
  addLink(26,24)
  addLink(1,27)
  addLink(28,27)
  addLink(29,27)
  addLink(31,30)
  addLink(32,30)
  addLink(28,30)
  addLink(33,30)
  addLink(34,30)
  addLink(35,30)
  addLink(37,36)
  addLink(17,36)
  addLink(7,36)
  addLink(38,36)
  addLink(23,36)
  addLink(37,39)
  addLink(17,39)
  addLink(38,39)
  addLink(23,39)
  addLink(14,39)
  addLink(35,39)
  addLink(11,40)
  addLink(4,40)
  addLink(11,41)
  addLink(42,41)
  addLink(4,41)
  addLink(20,41)
  addLink(8,41)
  addLink(13,43)
  addLink(28,43)
  addLink(20,43)
  addLink(17,43)
  addLink(23,43)
  addLink(13,44)
  addLink(28,44)
  addLink(23,44)
  addLink(38,44)
  addLink(13,45)
  addLink(28,45)
  addLink(46,45)
  addLink(23,45)
  addLink(48,47)
  addLink(32,47)
  addLink(34,47)
  addLink(1,49)
  addLink(28,49)
  addLink(4,49)
  addLink(32,49)
  addLink(25,49)
  addLink(1,50)
  addLink(4,50)
  addLink(20,50)
  addLink(17,50)
  addLink(35,50)
  addLink(1,51)
  addLink(8,51)
  addLink(28,51)
  addLink(52,51)
  addLink(2,51)
  addLink(29,51)
  addLink(54,53)
  addLink(28,53)
  addLink(2,53)
  addLink(6,53)
  addLink(56,55)
  addLink(7,55)
  addLink(26,55)
  addLink(42,57)
  addLink(58,57)
  addLink(13,59)
  addLink(28,59)
  addLink(23,59)
  addLink(1,60)
  addLink(32,60)
  addLink(34,60)
  addLink(25,60)
  addLink(1,61)
  addLink(62,61)
  addLink(9,61)
  addLink(14,61)
  addLink(1,63)
  addLink(28,63)
  addLink(4,63)
  addLink(33,63)
  addLink(46,63)


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
      if (node.type == "field") {
        node.y -= k * (node.y - 0.9 * size);
      }
      if (node.type == "place") {
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
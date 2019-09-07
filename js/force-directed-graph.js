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

  addNode(1,"London", "place")
  addNode(22,"Grenoble", "place")
  addNode(36,"Piza", "place")
  addNode(51,"Cambridge", "place")
  addNode(18,"Nancy", "place")
  addNode(32,"Kyoto", "place")
  addNode(5,"Oxford", "place")
  addNode(38,"Durham", "place")
  addNode(46,"Glasgow", "place")
  addNode(9,"Nijmegen", "place")
  addNode(54,"Niel de Beaudrap", "person")
  addNode(14,"Miriam Backens", "person")
  addNode(31,"Amar Hadzihasanovic", "person")
  addNode(48,"Kang Feng Ng", "person")
  addNode(47,"Bob Coecke", "person")
  addNode(29,"Quanlong Wang", "person")
  addNode(17,"Emmanuel Jeandel", "person")
  addNode(0,"Fabio Zanasi", "person")
  addNode(39,"Richard East", "person")
  addNode(20,"Vladimir Zamziev", "person")
  addNode(52,"Titouan Carette", "person")
  addNode(26,"Simon Perdrix", "person")
  addNode(45,"Joe Collins", "person")
  addNode(35,"Philipe Borehi", "person")
  addNode(8,"Sal Wolffs", "person")
  addNode(49,"Aleks Kissinger", "person")
  addNode(53,"Ross Duncan", "person")
  addNode(11,"John van de Wetering", "person")
  addNode(21,"Dominic Horsman", "person")
  addNode(28,"Stach Kuijpers", "person")
  addNode(43,"Stefano Gogioso", "person")
  addNode(4,"Hector Miller-Bakewell", "person")
  addNode(42,"Giovanni de Felice", "person")
  addNode(40,"Renaud Vilmart", "person")
  addNode(50,"Will Simons", "person")
  addNode(37,"Nicholas Chancellor", "person")
  addNode(25,"Scalable ZX", "field")
  addNode(33,"ZW", "field")
  addNode(16,"Foundations", "field")
  addNode(24,"Error correcting codes", "field")
  addNode(3,"String diagrams", "field")
  addNode(19,"Mixed ZX", "field")
  addNode(2,"Hopf algebras", "field")
  addNode(10,"ZH", "field")
  addNode(41,"ΔZX", "field")
  addNode(27,"MBQC", "field")
  addNode(12,"PyZX", "field")
  addNode(13,"Circuit optimisation", "field")
  addNode(6,"Quantomatic", "field")
  addNode(34,"Fermionic QC", "field")
  addNode(15,"Completeness", "field")
  addNode(44,"ZX-Dynamics", "field")
  addNode(30,"Qudits", "field")
  addNode(23,"Surface codes", "field")
  addNode(7,"CoSy", "field")
  addLink(1,0)
  addLink(2,0)
  addLink(3,0)
  addLink(5,4)
  addLink(6,4)
  addLink(7,4)
  addLink(9,8)
  addLink(10,8)
  addLink(9,11)
  addLink(10,11)
  addLink(12,11)
  addLink(13,11)
  addLink(1,14)
  addLink(15,14)
  addLink(10,14)
  addLink(16,14)
  addLink(18,17)
  addLink(15,17)
  addLink(19,17)
  addLink(18,20)
  addLink(6,20)
  addLink(22,21)
  addLink(23,21)
  addLink(24,21)
  addLink(25,21)
  addLink(19,21)
  addLink(18,26)
  addLink(15,26)
  addLink(27,26)
  addLink(23,26)
  addLink(19,26)
  addLink(9,28)
  addLink(10,28)
  addLink(5,29)
  addLink(15,29)
  addLink(13,29)
  addLink(16,29)
  addLink(30,29)
  addLink(32,31)
  addLink(33,31)
  addLink(34,31)
  addLink(36,35)
  addLink(2,35)
  addLink(3,35)
  addLink(38,37)
  addLink(24,37)
  addLink(22,39)
  addLink(23,39)
  addLink(25,39)
  addLink(19,39)
  addLink(18,40)
  addLink(15,40)
  addLink(41,40)
  addLink(19,40)
  addLink(5,42)
  addLink(33,42)
  addLink(34,42)
  addLink(5,43)
  addLink(44,43)
  addLink(16,43)
  addLink(46,45)
  addLink(2,45)
  addLink(5,47)
  addLink(15,47)
  addLink(13,47)
  addLink(16,47)
  addLink(33,47)
  addLink(9,48)
  addLink(33,48)
  addLink(15,48)
  addLink(25,48)
  addLink(30,48)
  addLink(34,48)
  addLink(9,49)
  addLink(10,49)
  addLink(12,49)
  addLink(13,49)
  addLink(24,49)
  addLink(6,49)
  addLink(16,49)
  addLink(7,49)
  addLink(51,50)
  addLink(13,50)
  addLink(18,52)
  addLink(15,52)
  addLink(19,52)
  addLink(25,52)
  addLink(51,53)
  addLink(13,53)
  addLink(27,53)
  addLink(6,53)
  addLink(16,53)
  addLink(5,54)
  addLink(13,54)
  addLink(27,54)
  addLink(23,54)
  addLink(10,54)


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
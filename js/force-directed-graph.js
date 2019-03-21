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

  addNode(0, "Oxford", "place")
  addNode(1, "Nijmegen", "place")
  addNode(2, "Paris", "place")
  addNode(3, "Dublin", "place")
  addNode(4, "Strathclyde", "place")
  addNode(6, "Cambridge", "place")
  addNode(7, "Nancy", "place")
  addNode(8, "Grenoble", "place")
  addNode(9, "Line", "place")
  addNode(10, "Southern England", "place")
  addNode(11, "Piza", "place")
  addNode(12, "Kyoto", "place")
  addNode(13, "Aleks Kissinger", "person")
  addNode(14, "John van de Wetering", "person")
  addNode(15, "Sal Wolffs", "person")
  addNode(16, "Stach Kuijpers", "person")
  addNode(17, "Kang Feng Ng", "person")
  addNode(18, "Mehdi Mhalla", "person")
  addNode(20, "Dominic Horsman", "person")
  addNode(21, "Richard East", "person")
  addNode(22, "Will Simons", "person")
  addNode(23, "Ross Duncan", "person")
  addNode(24, "Vladimir Zamziev", "person")
  addNode(25, "Simon Perdrix", "person")
  addNode(26, "Titouan Carette", "person")
  addNode(27, "Renaud Vilmart", "person")
  addNode(28, "Alexandru Paler", "person")
  addNode(29, "Amar Hadjihasanovic", "person")
  addNode(30, "Philipe Borehi", "person")
  addNode(31, "Fabio Gaducci", "person")
  addNode(32, "Robin Pidileu", "person")
  addNode(33, "Bob Coecke", "person")
  addNode(34, "Niel de Beaudrap", "person")
  addNode(35, "Hector Miller-Bakewell", "person")
  addNode(36, "Miriam Backens", "person")
  addNode(38, "Durham", "place")
  addNode(39, "Nick Chancellor", "person")
  addNode(40, "Joe Collins", "person")
  addNode(42, "Lee O'Riordan", "person")
  addNode(43, "Fabio Zinasi", "person")
  addNode(44, "Robert Booth", "person")
  //addNode(45, "", "person")
  addNode(46, "Emmanuel Jeandel", "person")
  addNode(48, "Damian Markham", "person")
  addNode(49, "Giovanni de Felice", "person")
  addNode(50, "Quanlong Wang", "person")
  addNode(51, "ZH", "field")
  addNode(52, "Circuit Optimisation", "field")
  addNode(53, "PyZX", "field")
  addNode(54, "Lattice Surgery", "field")
  addNode(55, "Completeness", "field")
  addNode(56, "CoSy", "field")
  addNode(57, "ΔZX", "field")
  addNode(58, "Quantomatic", "field")
  addNode(59, "ZW", "field")
  addNode(60, "Scalable ZX", "field")
  addNode(61, "Qudits", "field")
  addNode(62, "Hopf algebras", "field")
  addNode(63, "NLP", "field")
  addNode(64, "Quantum Emulation", "field")
  addNode(65, "Complexity Theory", "field")
  addNode(66, "Fermionic QC", "field")
  addNode(67, "Concurrency", "field")
  addNode(68, "MBQC", "field")
  addNode(69, "Mixed ZX", "field")
  addNode(70, "Error Correcting Codes", "field")
  addNode(71, "Phase-free ZH", "field")
  addNode(72, "Surface Codes", "field")
  addLink(13, 1)
  addLink(17, 1)
  addLink(16, 1)
  addLink(15, 1)
  addLink(14, 1)
  addLink(16, 51)
  addLink(13, 51)
  addLink(15, 51)
  addLink(14, 51)
  addLink(13, 52)
  addLink(14, 52)
  addLink(7, 24)
  addLink(7, 25)
  addLink(46, 7)
  addLink(26, 7)
  addLink(27, 7)
  addLink(28, 9)
  addLink(8, 21)
  addLink(20, 8)
  addLink(8, 18)
  addLink(44, 2)
  addLink(30, 11)
  addLink(11, 31)
  addLink(12, 29)
  addLink(3, 42)
  addLink(32, 10)
  addLink(10, 43)
  addLink(0, 49)
  addLink(0, 33)
  addLink(0, 34)
  addLink(50, 0)
  addLink(35, 0)
  addLink(0, 36)
  addLink(40, 4)
  addLink(38, 39)
  addLink(6, 23)
  addLink(6, 22)
  addLink(13, 53)
  addLink(53, 14)
  addLink(20, 54)
  addLink(36, 51)
  addLink(23, 52)
  addLink(22, 52)
  addLink(27, 55)
  addLink(25, 55)
  addLink(52, 25)
  addLink(35, 56)
  addLink(27, 57)
  addLink(57, 50)
  addLink(50, 52)
  addLink(35, 58)
  addLink(29, 59)
  addLink(21, 54)
  addLink(20, 52)
  addLink(25, 54)
  addLink(24, 58)
  addLink(13, 58)
  addLink(46, 55)
  addLink(20, 60)
  addLink(60, 26)
  addLink(21, 60)
  addLink(17, 52)
  addLink(17, 55)
  addLink(2, 48)
  addLink(40, 62)
  addLink(42, 63)
  addLink(33, 63)
  addLink(34, 54)
  addLink(34, 64)
  addLink(64, 39)
  addLink(14, 64)
  addLink(50, 55)
  addLink(36, 65)
  addLink(34, 65)
  addLink(65, 14)
  addLink(29, 66)
  addLink(31, 62)
  addLink(62, 30)
  addLink(32, 67)
  addLink(67, 43)
  addLink(26, 61)
  addLink(23, 68)
  addLink(68, 25)
  addLink(18, 68)
  addLink(21, 69)
  addLink(69, 20)
  addLink(27, 69)
  addLink(69, 26)
  addLink(25, 69)
  addLink(46, 69)
  addLink(20, 70)
  addLink(13, 70)
  addLink(15, 71)
  addLink(71, 14)
  addLink(26, 62)
  addLink(28, 72)
  addLink(20, 72)
  addLink(34, 72)
  addLink(39, 72)
  addLink(23, 72)
  addLink(54, 39)
  addLink(17, 59)
  addLink(17, 60)


  // Event handling


  drag = simulation => {

    function dragstarted(d) {
      if (!d3.event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
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

  const link = svg.append("g")
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

  var node = svg.append("g")
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
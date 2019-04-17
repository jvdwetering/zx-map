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

  addNode(45,"Cambridge", "place")
  addNode(28,"Durham", "place")
  addNode(16,"Nancy", "place")
  addNode(10,"Grenoble", "place")
  addNode(32,"Kyoto", "place")
  addNode(7,"Nijmegen", "place")
  addNode(20,"London", "place")
  addNode(1,"Oxford", "place")
  addNode(35,"Glasgow", "place")
  addNode(30,"Piza", "place")
  addNode(36,"Niel de Beaudrap", "person")
  addNode(49,"John van de Wetering", "person")
  addNode(24,"Quanlong Wang", "person")
  addNode(27,"Nicholas Chancellor", "person")
  addNode(53,"Vladimir Zamziev", "person")
  addNode(31,"Amar Hadjihasanovic", "person")
  addNode(51,"Will Simons", "person")
  addNode(34,"Joe Collins", "person")
  addNode(18,"Stach Kuijpers", "person")
  addNode(44,"Ross Duncan", "person")
  addNode(50,"Giovanni de Felice", "person")
  addNode(23,"Titouan Carette", "person")
  addNode(26,"Richard East", "person")
  addNode(15,"Renaud Vilmart", "person")
  addNode(0,"Bob Coecke", "person")
  addNode(19,"Fabio Zanasi", "person")
  addNode(37,"Stefano Gogioso", "person")
  addNode(9,"Dominic Horsman", "person")
  addNode(47,"Aleks Kissinger", "person")
  addNode(40,"Hector Miller-Bakewell", "person")
  addNode(52,"Simon Perdrix", "person")
  addNode(29,"Philipe Borehi", "person")
  addNode(39,"Miriam Backens", "person")
  addNode(43,"Emmanuel Jeandel", "person")
  addNode(54,"Kang Feng Ng", "person")
  addNode(6,"Sal Wolffs", "person")
  addNode(4,"Foundations", "field")
  addNode(5,"ZW", "field")
  addNode(3,"Circuit optimisation", "field")
  addNode(41,"Quantomatic", "field")
  addNode(21,"Hopf algebras", "field")
  addNode(14,"Mixed ZX", "field")
  addNode(12,"Error correcting codes", "field")
  addNode(33,"Fermionic QC", "field")
  addNode(8,"ZH", "field")
  addNode(25,"Qudits", "field")
  addNode(11,"Surface codes", "field")
  addNode(46,"MBQC", "field")
  addNode(38,"ZX-Dynamics", "field")
  addNode(13,"Scalable ZX", "field")
  addNode(48,"PyZX", "field")
  addNode(2,"Completeness", "field")
  addNode(22,"String diagrams", "field")
  addNode(17,"ΔZX", "field")
  addNode(42,"CoSy", "field")
  addLink(1,0)
  addLink(2,0)
  addLink(3,0)
  addLink(4,0)
  addLink(5,0)
  addLink(7,6)
  addLink(8,6)
  addLink(10,9)
  addLink(11,9)
  addLink(12,9)
  addLink(13,9)
  addLink(14,9)
  addLink(16,15)
  addLink(2,15)
  addLink(17,15)
  addLink(14,15)
  addLink(7,18)
  addLink(8,18)
  addLink(20,19)
  addLink(21,19)
  addLink(22,19)
  addLink(16,23)
  addLink(2,23)
  addLink(14,23)
  addLink(13,23)
  addLink(1,24)
  addLink(2,24)
  addLink(3,24)
  addLink(4,24)
  addLink(25,24)
  addLink(10,26)
  addLink(11,26)
  addLink(13,26)
  addLink(14,26)
  addLink(28,27)
  addLink(12,27)
  addLink(30,29)
  addLink(21,29)
  addLink(22,29)
  addLink(32,31)
  addLink(5,31)
  addLink(33,31)
  addLink(35,34)
  addLink(21,34)
  addLink(1,36)
  addLink(3,36)
  addLink(1,37)
  addLink(38,37)
  addLink(4,37)
  addLink(20,39)
  addLink(2,39)
  addLink(8,39)
  addLink(4,39)
  addLink(1,40)
  addLink(41,40)
  addLink(42,40)
  addLink(16,43)
  addLink(2,43)
  addLink(14,43)
  addLink(45,44)
  addLink(3,44)
  addLink(46,44)
  addLink(41,44)
  addLink(4,44)
  addLink(7,47)
  addLink(8,47)
  addLink(48,47)
  addLink(3,47)
  addLink(12,47)
  addLink(41,47)
  addLink(4,47)
  addLink(42,47)
  addLink(7,49)
  addLink(8,49)
  addLink(48,49)
  addLink(3,49)
  addLink(1,50)
  addLink(5,50)
  addLink(33,50)
  addLink(45,51)
  addLink(3,51)
  addLink(16,52)
  addLink(2,52)
  addLink(46,52)
  addLink(11,52)
  addLink(14,52)
  addLink(16,53)
  addLink(41,53)
  addLink(7,54)
  addLink(5,54)
  addLink(2,54)
  addLink(13,54)
  addLink(25,54)
  addLink(33,54)


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
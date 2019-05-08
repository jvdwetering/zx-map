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

  addNode(36,"Piza", "place")
  addNode(4,"Nijmegen", "place")
  addNode(40,"Cambridge", "place")
  addNode(48,"Kyoto", "place")
  addNode(16,"Nancy", "place")
  addNode(1,"Glasgow", "place")
  addNode(32,"Grenoble", "place")
  addNode(13,"London", "place")
  addNode(18,"Oxford", "place")
  addNode(50,"Durham", "place")
  addNode(28,"Niel de Beaudrap", "person")
  addNode(49,"Nicholas Chancellor", "person")
  addNode(35,"Philipe Borehi", "person")
  addNode(54,"Miriam Backens", "person")
  addNode(0,"Joe Collins", "person")
  addNode(51,"Renaud Vilmart", "person")
  addNode(46,"John van de Wetering", "person")
  addNode(3,"Aleks Kissinger", "person")
  addNode(44,"Ross Duncan", "person")
  addNode(47,"Amar Hadzihasanovic", "person")
  addNode(31,"Dominic Horsman", "person")
  addNode(17,"Hector Miller-Bakewell", "person")
  addNode(33,"Bob Coecke", "person")
  addNode(12,"Fabio Zanasi", "person")
  addNode(42,"Stefano Gogioso", "person")
  addNode(22,"Stach Kuijpers", "person")
  addNode(53,"Giovanni de Felice", "person")
  addNode(15,"Vladimir Zamziev", "person")
  addNode(19,"Quanlong Wang", "person")
  addNode(29,"Titouan Carette", "person")
  addNode(24,"Simon Perdrix", "person")
  addNode(41,"Richard East", "person")
  addNode(37,"Kang Feng Ng", "person")
  addNode(23,"Sal Wolffs", "person")
  addNode(45,"Emmanuel Jeandel", "person")
  addNode(39,"Will Simons", "person")
  addNode(20,"Completeness", "field")
  addNode(9,"Quantomatic", "field")
  addNode(14,"String diagrams", "field")
  addNode(43,"ZX-Dynamics", "field")
  addNode(11,"CoSy", "field")
  addNode(52,"ΔZX", "field")
  addNode(8,"Error correcting codes", "field")
  addNode(38,"Fermionic QC", "field")
  addNode(25,"MBQC", "field")
  addNode(30,"Scalable ZX", "field")
  addNode(10,"Foundations", "field")
  addNode(27,"Mixed ZX", "field")
  addNode(26,"Surface codes", "field")
  addNode(21,"Qudits", "field")
  addNode(34,"ZW", "field")
  addNode(2,"Hopf algebras", "field")
  addNode(6,"PyZX", "field")
  addNode(5,"ZH", "field")
  addNode(7,"Circuit optimisation", "field")
  addLink(1,0)
  addLink(2,0)
  addLink(4,3)
  addLink(5,3)
  addLink(6,3)
  addLink(7,3)
  addLink(8,3)
  addLink(9,3)
  addLink(10,3)
  addLink(11,3)
  addLink(13,12)
  addLink(2,12)
  addLink(14,12)
  addLink(16,15)
  addLink(9,15)
  addLink(18,17)
  addLink(9,17)
  addLink(11,17)
  addLink(18,19)
  addLink(20,19)
  addLink(7,19)
  addLink(10,19)
  addLink(21,19)
  addLink(4,22)
  addLink(5,22)
  addLink(4,23)
  addLink(5,23)
  addLink(16,24)
  addLink(20,24)
  addLink(25,24)
  addLink(26,24)
  addLink(27,24)
  addLink(18,28)
  addLink(7,28)
  addLink(25,28)
  addLink(26,28)
  addLink(5,28)
  addLink(16,29)
  addLink(20,29)
  addLink(27,29)
  addLink(30,29)
  addLink(32,31)
  addLink(26,31)
  addLink(8,31)
  addLink(30,31)
  addLink(27,31)
  addLink(18,33)
  addLink(20,33)
  addLink(7,33)
  addLink(10,33)
  addLink(34,33)
  addLink(36,35)
  addLink(2,35)
  addLink(14,35)
  addLink(4,37)
  addLink(34,37)
  addLink(20,37)
  addLink(30,37)
  addLink(21,37)
  addLink(38,37)
  addLink(40,39)
  addLink(7,39)
  addLink(32,41)
  addLink(26,41)
  addLink(30,41)
  addLink(27,41)
  addLink(18,42)
  addLink(43,42)
  addLink(10,42)
  addLink(40,44)
  addLink(7,44)
  addLink(25,44)
  addLink(9,44)
  addLink(10,44)
  addLink(16,45)
  addLink(20,45)
  addLink(27,45)
  addLink(4,46)
  addLink(5,46)
  addLink(6,46)
  addLink(7,46)
  addLink(48,47)
  addLink(34,47)
  addLink(38,47)
  addLink(50,49)
  addLink(8,49)
  addLink(16,51)
  addLink(20,51)
  addLink(52,51)
  addLink(27,51)
  addLink(18,53)
  addLink(34,53)
  addLink(38,53)
  addLink(13,54)
  addLink(20,54)
  addLink(5,54)
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
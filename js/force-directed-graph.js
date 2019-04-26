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

  addNode(11,"Nijmegen", "place")
  addNode(48,"Glasgow", "place")
  addNode(5,"Grenoble", "place")
  addNode(53,"Kyoto", "place")
  addNode(1,"Oxford", "place")
  addNode(26,"London", "place")
  addNode(50,"Durham", "place")
  addNode(45,"Cambridge", "place")
  addNode(14,"Nancy", "place")
  addNode(35,"Piza", "place")
  addNode(19,"Hector Miller-Bakewell", "person")
  addNode(54,"Will Simons", "person")
  addNode(36,"Emmanuel Jeandel", "person")
  addNode(52,"Amar Hadzihasanovic", "person")
  addNode(42,"Renaud Vilmart", "person")
  addNode(46,"Titouan Carette", "person")
  addNode(0,"Giovanni de Felice", "person")
  addNode(33,"John van de Wetering", "person")
  addNode(34,"Philipe Borehi", "person")
  addNode(21,"Bob Coecke", "person")
  addNode(24,"Niel de Beaudrap", "person")
  addNode(37,"Sal Wolffs", "person")
  addNode(25,"Fabio Zanasi", "person")
  addNode(39,"Quanlong Wang", "person")
  addNode(44,"Ross Duncan", "person")
  addNode(29,"Aleks Kissinger", "person")
  addNode(51,"Kang Feng Ng", "person")
  addNode(41,"Richard East", "person")
  addNode(16,"Stefano Gogioso", "person")
  addNode(4,"Dominic Horsman", "person")
  addNode(13,"Vladimir Zamziev", "person")
  addNode(38,"Miriam Backens", "person")
  addNode(10,"Stach Kuijpers", "person")
  addNode(47,"Joe Collins", "person")
  addNode(49,"Nicholas Chancellor", "person")
  addNode(31,"Simon Perdrix", "person")
  addNode(6,"Surface codes", "field")
  addNode(22,"Completeness", "field")
  addNode(2,"ZW", "field")
  addNode(18,"Foundations", "field")
  addNode(27,"Hopf algebras", "field")
  addNode(15,"Quantomatic", "field")
  addNode(9,"Mixed ZX", "field")
  addNode(7,"Error correcting codes", "field")
  addNode(43,"ΔZX", "field")
  addNode(23,"Circuit optimisation", "field")
  addNode(8,"Scalable ZX", "field")
  addNode(40,"Qudits", "field")
  addNode(30,"PyZX", "field")
  addNode(20,"CoSy", "field")
  addNode(28,"String diagrams", "field")
  addNode(17,"ZX-Dynamics", "field")
  addNode(12,"ZH", "field")
  addNode(3,"Fermionic QC", "field")
  addNode(32,"MBQC", "field")
  addLink(1,0)
  addLink(2,0)
  addLink(3,0)
  addLink(5,4)
  addLink(6,4)
  addLink(7,4)
  addLink(8,4)
  addLink(9,4)
  addLink(11,10)
  addLink(12,10)
  addLink(14,13)
  addLink(15,13)
  addLink(1,16)
  addLink(17,16)
  addLink(18,16)
  addLink(1,19)
  addLink(15,19)
  addLink(20,19)
  addLink(1,21)
  addLink(22,21)
  addLink(23,21)
  addLink(18,21)
  addLink(2,21)
  addLink(1,24)
  addLink(23,24)
  addLink(26,25)
  addLink(27,25)
  addLink(28,25)
  addLink(11,29)
  addLink(12,29)
  addLink(30,29)
  addLink(23,29)
  addLink(7,29)
  addLink(15,29)
  addLink(18,29)
  addLink(20,29)
  addLink(14,31)
  addLink(22,31)
  addLink(32,31)
  addLink(6,31)
  addLink(9,31)
  addLink(11,33)
  addLink(12,33)
  addLink(30,33)
  addLink(23,33)
  addLink(35,34)
  addLink(27,34)
  addLink(28,34)
  addLink(14,36)
  addLink(22,36)
  addLink(9,36)
  addLink(11,37)
  addLink(12,37)
  addLink(26,38)
  addLink(22,38)
  addLink(12,38)
  addLink(18,38)
  addLink(1,39)
  addLink(22,39)
  addLink(23,39)
  addLink(18,39)
  addLink(40,39)
  addLink(5,41)
  addLink(6,41)
  addLink(8,41)
  addLink(9,41)
  addLink(14,42)
  addLink(22,42)
  addLink(43,42)
  addLink(9,42)
  addLink(45,44)
  addLink(23,44)
  addLink(32,44)
  addLink(15,44)
  addLink(18,44)
  addLink(14,46)
  addLink(22,46)
  addLink(9,46)
  addLink(8,46)
  addLink(48,47)
  addLink(27,47)
  addLink(50,49)
  addLink(7,49)
  addLink(11,51)
  addLink(2,51)
  addLink(22,51)
  addLink(8,51)
  addLink(40,51)
  addLink(3,51)
  addLink(53,52)
  addLink(2,52)
  addLink(3,52)
  addLink(45,54)
  addLink(23,54)


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
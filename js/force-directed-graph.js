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

  addNode(48,"Piza", "place")
  addNode(54,"Durham", "place")
  addNode(40,"Grenoble", "place")
  addNode(5,"Glasgow", "place")
  addNode(17,"Nijmegen", "place")
  addNode(8,"Nancy", "place")
  addNode(42,"London", "place")
  addNode(15,"Kyoto", "place")
  addNode(1,"Oxford", "place")
  addNode(32,"Cambridge", "place")
  addNode(33,"Kang Feng Ng", "person")
  addNode(41,"Fabio Zanasi", "person")
  addNode(24,"Emmanuel Jeandel", "person")
  addNode(46,"Will Simons", "person")
  addNode(7,"Renaud Vilmart", "person")
  addNode(37,"Titouan Carette", "person")
  addNode(50,"Stefano Gogioso", "person")
  addNode(21,"Niel de Beaudrap", "person")
  addNode(4,"Joe Collins", "person")
  addNode(52,"Bob Coecke", "person")
  addNode(28,"Aleks Kissinger", "person")
  addNode(49,"Dominic Horsman", "person")
  addNode(36,"Stach Kuijpers", "person")
  addNode(53,"Nicholas Chancellor", "person")
  addNode(25,"Quanlong Wang", "person")
  addNode(12,"Vladimir Zamziev", "person")
  addNode(38,"Simon Perdrix", "person")
  addNode(39,"Richard East", "person")
  addNode(14,"Amar Hadzihasanovic", "person")
  addNode(47,"Philipe Borehi", "person")
  addNode(0,"Giovanni de Felice", "person")
  addNode(16,"John van de Wetering", "person")
  addNode(45,"Sal Wolffs", "person")
  addNode(31,"Ross Duncan", "person")
  addNode(44,"Miriam Backens", "person")
  addNode(35,"Hector Miller-Bakewell", "person")
  addNode(3,"Fermionic QC", "field")
  addNode(22,"MBQC", "field")
  addNode(19,"PyZX", "field")
  addNode(18,"ZH", "field")
  addNode(29,"Error correcting codes", "field")
  addNode(13,"Quantomatic", "field")
  addNode(10,"ΔZX", "field")
  addNode(6,"Hopf algebras", "field")
  addNode(26,"Foundations", "field")
  addNode(11,"Mixed ZX", "field")
  addNode(2,"ZW", "field")
  addNode(27,"Qudits", "field")
  addNode(34,"Scalable ZX", "field")
  addNode(43,"String diagrams", "field")
  addNode(30,"CoSy", "field")
  addNode(23,"Surface codes", "field")
  addNode(51,"ZX-Dynamics", "field")
  addNode(9,"Completeness", "field")
  addNode(20,"Circuit optimisation", "field")
  addLink(1,0)
  addLink(2,0)
  addLink(3,0)
  addLink(5,4)
  addLink(6,4)
  addLink(8,7)
  addLink(9,7)
  addLink(10,7)
  addLink(11,7)
  addLink(8,12)
  addLink(13,12)
  addLink(15,14)
  addLink(2,14)
  addLink(3,14)
  addLink(17,16)
  addLink(18,16)
  addLink(19,16)
  addLink(20,16)
  addLink(1,21)
  addLink(20,21)
  addLink(22,21)
  addLink(23,21)
  addLink(18,21)
  addLink(8,24)
  addLink(9,24)
  addLink(11,24)
  addLink(1,25)
  addLink(9,25)
  addLink(20,25)
  addLink(26,25)
  addLink(27,25)
  addLink(17,28)
  addLink(18,28)
  addLink(19,28)
  addLink(20,28)
  addLink(29,28)
  addLink(13,28)
  addLink(26,28)
  addLink(30,28)
  addLink(32,31)
  addLink(20,31)
  addLink(22,31)
  addLink(13,31)
  addLink(26,31)
  addLink(17,33)
  addLink(2,33)
  addLink(9,33)
  addLink(34,33)
  addLink(27,33)
  addLink(3,33)
  addLink(1,35)
  addLink(13,35)
  addLink(30,35)
  addLink(17,36)
  addLink(18,36)
  addLink(8,37)
  addLink(9,37)
  addLink(11,37)
  addLink(34,37)
  addLink(8,38)
  addLink(9,38)
  addLink(22,38)
  addLink(23,38)
  addLink(11,38)
  addLink(40,39)
  addLink(23,39)
  addLink(34,39)
  addLink(11,39)
  addLink(42,41)
  addLink(6,41)
  addLink(43,41)
  addLink(42,44)
  addLink(9,44)
  addLink(18,44)
  addLink(26,44)
  addLink(17,45)
  addLink(18,45)
  addLink(32,46)
  addLink(20,46)
  addLink(48,47)
  addLink(6,47)
  addLink(43,47)
  addLink(40,49)
  addLink(23,49)
  addLink(29,49)
  addLink(34,49)
  addLink(11,49)
  addLink(1,50)
  addLink(51,50)
  addLink(26,50)
  addLink(1,52)
  addLink(9,52)
  addLink(20,52)
  addLink(26,52)
  addLink(2,52)
  addLink(54,53)
  addLink(29,53)


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
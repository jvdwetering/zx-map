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

  addNode(43,"Piza", "place")
  addNode(8,"Durham", "place")
  addNode(47,"Grenoble", "place")
  addNode(31,"Glasgow", "place")
  addNode(25,"London", "place")
  addNode(23,"Cambridge", "place")
  addNode(4,"Oxford", "place")
  addNode(1,"Nijmegen", "place")
  addNode(16,"Kyoto", "place")
  addNode(20,"Nancy", "place")
  addNode(39,"Giovanni de Felice", "person")
  addNode(19,"Vladimir Zamziev", "person")
  addNode(49,"Bob Coecke", "person")
  addNode(24,"Miriam Backens", "person")
  addNode(30,"Joe Collins", "person")
  addNode(42,"Philipe Borehi", "person")
  addNode(7,"Nicholas Chancellor", "person")
  addNode(15,"Amar Hadzihasanovic", "person")
  addNode(3,"Stefano Gogioso", "person")
  addNode(0,"Sal Wolffs", "person")
  addNode(51,"Richard East", "person")
  addNode(38,"Emmanuel Jeandel", "person")
  addNode(52,"John van de Wetering", "person")
  addNode(54,"Simon Perdrix", "person")
  addNode(27,"Kang Feng Ng", "person")
  addNode(50,"Quanlong Wang", "person")
  addNode(33,"Aleks Kissinger", "person")
  addNode(10,"Niel de Beaudrap", "person")
  addNode(46,"Dominic Horsman", "person")
  addNode(53,"Will Simons", "person")
  addNode(14,"Stach Kuijpers", "person")
  addNode(44,"Renaud Vilmart", "person")
  addNode(48,"Hector Miller-Bakewell", "person")
  addNode(22,"Ross Duncan", "person")
  addNode(36,"Titouan Carette", "person")
  addNode(40,"Fabio Zanasi", "person")
  addNode(37,"Mixed ZX", "field")
  addNode(21,"Quantomatic", "field")
  addNode(13,"Surface codes", "field")
  addNode(28,"Scalable ZX", "field")
  addNode(35,"CoSy", "field")
  addNode(12,"MBQC", "field")
  addNode(34,"PyZX", "field")
  addNode(41,"String diagrams", "field")
  addNode(29,"Qudits", "field")
  addNode(17,"ZW", "field")
  addNode(2,"ZH", "field")
  addNode(6,"Foundations", "field")
  addNode(32,"Hopf algebras", "field")
  addNode(9,"Error correcting codes", "field")
  addNode(45,"ΔZX", "field")
  addNode(5,"ZX-Dynamics", "field")
  addNode(11,"Circuit optimisation", "field")
  addNode(18,"Fermionic QC", "field")
  addNode(26,"Completeness", "field")
  addLink(1,0)
  addLink(2,0)
  addLink(4,3)
  addLink(5,3)
  addLink(6,3)
  addLink(8,7)
  addLink(9,7)
  addLink(4,10)
  addLink(11,10)
  addLink(12,10)
  addLink(13,10)
  addLink(2,10)
  addLink(1,14)
  addLink(2,14)
  addLink(16,15)
  addLink(17,15)
  addLink(18,15)
  addLink(20,19)
  addLink(21,19)
  addLink(23,22)
  addLink(11,22)
  addLink(12,22)
  addLink(21,22)
  addLink(6,22)
  addLink(25,24)
  addLink(26,24)
  addLink(2,24)
  addLink(6,24)
  addLink(1,27)
  addLink(17,27)
  addLink(26,27)
  addLink(28,27)
  addLink(29,27)
  addLink(18,27)
  addLink(31,30)
  addLink(32,30)
  addLink(1,33)
  addLink(2,33)
  addLink(34,33)
  addLink(11,33)
  addLink(9,33)
  addLink(21,33)
  addLink(6,33)
  addLink(35,33)
  addLink(20,36)
  addLink(26,36)
  addLink(37,36)
  addLink(28,36)
  addLink(20,38)
  addLink(26,38)
  addLink(37,38)
  addLink(4,39)
  addLink(17,39)
  addLink(18,39)
  addLink(25,40)
  addLink(32,40)
  addLink(41,40)
  addLink(43,42)
  addLink(32,42)
  addLink(41,42)
  addLink(20,44)
  addLink(26,44)
  addLink(45,44)
  addLink(37,44)
  addLink(47,46)
  addLink(13,46)
  addLink(9,46)
  addLink(28,46)
  addLink(37,46)
  addLink(4,48)
  addLink(21,48)
  addLink(35,48)
  addLink(4,49)
  addLink(26,49)
  addLink(11,49)
  addLink(6,49)
  addLink(17,49)
  addLink(4,50)
  addLink(26,50)
  addLink(11,50)
  addLink(6,50)
  addLink(29,50)
  addLink(47,51)
  addLink(13,51)
  addLink(28,51)
  addLink(37,51)
  addLink(1,52)
  addLink(2,52)
  addLink(34,52)
  addLink(11,52)
  addLink(23,53)
  addLink(11,53)
  addLink(20,54)
  addLink(26,54)
  addLink(12,54)
  addLink(13,54)
  addLink(37,54)


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
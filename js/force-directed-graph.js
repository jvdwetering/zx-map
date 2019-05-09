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

  addNode(13,"Cambridge", "place")
  addNode(34,"Grenoble", "place")
  addNode(9,"Oxford", "place")
  addNode(1,"Nijmegen", "place")
  addNode(36,"Piza", "place")
  addNode(48,"Glasgow", "place")
  addNode(16,"Durham", "place")
  addNode(4,"Nancy", "place")
  addNode(22,"London", "place")
  addNode(41,"Kyoto", "place")
  addNode(12,"Will Simons", "person")
  addNode(45,"Aleks Kissinger", "person")
  addNode(18,"Niel de Beaudrap", "person")
  addNode(51,"Quanlong Wang", "person")
  addNode(8,"Giovanni de Felice", "person")
  addNode(28,"Miriam Backens", "person")
  addNode(15,"Nicholas Chancellor", "person")
  addNode(49,"Hector Miller-Bakewell", "person")
  addNode(31,"Vladimir Zamziev", "person")
  addNode(47,"Joe Collins", "person")
  addNode(52,"Dominic Horsman", "person")
  addNode(37,"Sal Wolffs", "person")
  addNode(38,"Stefano Gogioso", "person")
  addNode(54,"Titouan Carette", "person")
  addNode(40,"Amar Hadzihasanovic", "person")
  addNode(21,"Fabio Zanasi", "person")
  addNode(42,"Simon Perdrix", "person")
  addNode(43,"John van de Wetering", "person")
  addNode(50,"Bob Coecke", "person")
  addNode(25,"Kang Feng Ng", "person")
  addNode(35,"Philipe Borehi", "person")
  addNode(33,"Richard East", "person")
  addNode(53,"Ross Duncan", "person")
  addNode(0,"Stach Kuijpers", "person")
  addNode(30,"Emmanuel Jeandel", "person")
  addNode(3,"Renaud Vilmart", "person")
  addNode(46,"CoSy", "field")
  addNode(44,"PyZX", "field")
  addNode(7,"Mixed ZX", "field")
  addNode(5,"Completeness", "field")
  addNode(2,"ZH", "field")
  addNode(10,"ZW", "field")
  addNode(23,"Hopf algebras", "field")
  addNode(6,"ΔZX", "field")
  addNode(29,"Foundations", "field")
  addNode(39,"ZX-Dynamics", "field")
  addNode(19,"MBQC", "field")
  addNode(17,"Error correcting codes", "field")
  addNode(27,"Qudits", "field")
  addNode(14,"Circuit optimisation", "field")
  addNode(11,"Fermionic QC", "field")
  addNode(26,"Scalable ZX", "field")
  addNode(32,"Quantomatic", "field")
  addNode(24,"String diagrams", "field")
  addNode(20,"Surface codes", "field")
  addLink(1,0)
  addLink(2,0)
  addLink(4,3)
  addLink(5,3)
  addLink(6,3)
  addLink(7,3)
  addLink(9,8)
  addLink(10,8)
  addLink(11,8)
  addLink(13,12)
  addLink(14,12)
  addLink(16,15)
  addLink(17,15)
  addLink(9,18)
  addLink(14,18)
  addLink(19,18)
  addLink(20,18)
  addLink(2,18)
  addLink(22,21)
  addLink(23,21)
  addLink(24,21)
  addLink(1,25)
  addLink(10,25)
  addLink(5,25)
  addLink(26,25)
  addLink(27,25)
  addLink(11,25)
  addLink(22,28)
  addLink(5,28)
  addLink(2,28)
  addLink(29,28)
  addLink(4,30)
  addLink(5,30)
  addLink(7,30)
  addLink(4,31)
  addLink(32,31)
  addLink(34,33)
  addLink(20,33)
  addLink(26,33)
  addLink(7,33)
  addLink(36,35)
  addLink(23,35)
  addLink(24,35)
  addLink(1,37)
  addLink(2,37)
  addLink(9,38)
  addLink(39,38)
  addLink(29,38)
  addLink(41,40)
  addLink(10,40)
  addLink(11,40)
  addLink(4,42)
  addLink(5,42)
  addLink(19,42)
  addLink(20,42)
  addLink(7,42)
  addLink(1,43)
  addLink(2,43)
  addLink(44,43)
  addLink(14,43)
  addLink(1,45)
  addLink(2,45)
  addLink(44,45)
  addLink(14,45)
  addLink(17,45)
  addLink(32,45)
  addLink(29,45)
  addLink(46,45)
  addLink(48,47)
  addLink(23,47)
  addLink(9,49)
  addLink(32,49)
  addLink(46,49)
  addLink(9,50)
  addLink(5,50)
  addLink(14,50)
  addLink(29,50)
  addLink(10,50)
  addLink(9,51)
  addLink(5,51)
  addLink(14,51)
  addLink(29,51)
  addLink(27,51)
  addLink(34,52)
  addLink(20,52)
  addLink(17,52)
  addLink(26,52)
  addLink(7,52)
  addLink(13,53)
  addLink(14,53)
  addLink(19,53)
  addLink(32,53)
  addLink(29,53)
  addLink(4,54)
  addLink(5,54)
  addLink(7,54)
  addLink(26,54)


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
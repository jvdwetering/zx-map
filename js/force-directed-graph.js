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

  addNode(31,"Nijmegen", "place")
  addNode(46,"Durham", "place")
  addNode(5,"Kyoto", "place")
  addNode(48,"Piza", "place")
  addNode(16,"Cambridge", "place")
  addNode(26,"Grenoble", "place")
  addNode(29,"Oxford", "place")
  addNode(9,"Nancy", "place")
  addNode(14,"Glasgow", "place")
  addNode(1,"London", "place")
  addNode(45,"Nicholas Chancellor", "person")
  addNode(53,"Kang Feng Ng", "person")
  addNode(4,"Amar Hadzihasanovic", "person")
  addNode(47,"Philipe Borehi", "person")
  addNode(24,"Emmanuel Jeandel", "person")
  addNode(50,"Vladimir Zamziev", "person")
  addNode(54,"Dominic Horsman", "person")
  addNode(36,"Stach Kuijpers", "person")
  addNode(0,"Fabio Zanasi", "person")
  addNode(15,"Will Simons", "person")
  addNode(13,"Joe Collins", "person")
  addNode(18,"Ross Duncan", "person")
  addNode(41,"Giovanni de Felice", "person")
  addNode(37,"Simon Perdrix", "person")
  addNode(8,"Titouan Carette", "person")
  addNode(42,"Quanlong Wang", "person")
  addNode(28,"Bob Coecke", "person")
  addNode(44,"Niel de Beaudrap", "person")
  addNode(38,"Aleks Kissinger", "person")
  addNode(25,"Richard East", "person")
  addNode(40,"Sal Wolffs", "person")
  addNode(51,"Stefano Gogioso", "person")
  addNode(22,"Renaud Vilmart", "person")
  addNode(49,"Miriam Backens", "person")
  addNode(34,"Hector Miller-Bakewell", "person")
  addNode(30,"John van de Wetering", "person")
  addNode(10,"Completeness", "field")
  addNode(23,"ΔZX", "field")
  addNode(20,"Quantomatic", "field")
  addNode(11,"Mixed ZX", "field")
  addNode(19,"MBQC", "field")
  addNode(3,"String diagrams", "field")
  addNode(21,"Foundations", "field")
  addNode(6,"ZW", "field")
  addNode(33,"PyZX", "field")
  addNode(27,"Surface codes", "field")
  addNode(12,"Scalable ZX", "field")
  addNode(17,"Circuit optimisation", "field")
  addNode(35,"CoSy", "field")
  addNode(7,"Fermionic QC", "field")
  addNode(2,"Hopf algebras", "field")
  addNode(52,"ZX-Dynamics", "field")
  addNode(43,"Qudits", "field")
  addNode(39,"Error correcting codes", "field")
  addNode(32,"ZH", "field")
  addLink(1,0)
  addLink(2,0)
  addLink(3,0)
  addLink(5,4)
  addLink(6,4)
  addLink(7,4)
  addLink(9,8)
  addLink(10,8)
  addLink(11,8)
  addLink(12,8)
  addLink(14,13)
  addLink(2,13)
  addLink(16,15)
  addLink(17,15)
  addLink(16,18)
  addLink(17,18)
  addLink(19,18)
  addLink(20,18)
  addLink(21,18)
  addLink(9,22)
  addLink(10,22)
  addLink(23,22)
  addLink(11,22)
  addLink(9,24)
  addLink(10,24)
  addLink(11,24)
  addLink(26,25)
  addLink(27,25)
  addLink(12,25)
  addLink(11,25)
  addLink(29,28)
  addLink(10,28)
  addLink(17,28)
  addLink(21,28)
  addLink(6,28)
  addLink(31,30)
  addLink(32,30)
  addLink(33,30)
  addLink(17,30)
  addLink(29,34)
  addLink(20,34)
  addLink(35,34)
  addLink(31,36)
  addLink(32,36)
  addLink(9,37)
  addLink(10,37)
  addLink(19,37)
  addLink(27,37)
  addLink(11,37)
  addLink(31,38)
  addLink(32,38)
  addLink(33,38)
  addLink(17,38)
  addLink(39,38)
  addLink(20,38)
  addLink(21,38)
  addLink(35,38)
  addLink(31,40)
  addLink(32,40)
  addLink(29,41)
  addLink(6,41)
  addLink(7,41)
  addLink(29,42)
  addLink(10,42)
  addLink(17,42)
  addLink(21,42)
  addLink(43,42)
  addLink(29,44)
  addLink(17,44)
  addLink(19,44)
  addLink(27,44)
  addLink(32,44)
  addLink(46,45)
  addLink(39,45)
  addLink(48,47)
  addLink(2,47)
  addLink(3,47)
  addLink(1,49)
  addLink(10,49)
  addLink(32,49)
  addLink(21,49)
  addLink(9,50)
  addLink(20,50)
  addLink(29,51)
  addLink(52,51)
  addLink(21,51)
  addLink(31,53)
  addLink(6,53)
  addLink(10,53)
  addLink(12,53)
  addLink(43,53)
  addLink(7,53)
  addLink(26,54)
  addLink(27,54)
  addLink(39,54)
  addLink(12,54)
  addLink(11,54)


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
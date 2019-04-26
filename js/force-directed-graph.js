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

  addNode(40,"Kyoto", "place")
  addNode(34,"Cambridge", "place")
  addNode(13,"Grenoble", "place")
  addNode(44,"London", "place")
  addNode(1,"Nancy", "place")
  addNode(25,"Piza", "place")
  addNode(37,"Glasgow", "place")
  addNode(18,"Oxford", "place")
  addNode(29,"Durham", "place")
  addNode(4,"Nijmegen", "place")
  addNode(43,"Miriam Backens", "person")
  addNode(47,"Stefano Gogioso", "person")
  addNode(32,"John van de Wetering", "person")
  addNode(21,"Aleks Kissinger", "person")
  addNode(53,"Titouan Carette", "person")
  addNode(28,"Nicholas Chancellor", "person")
  addNode(46,"Will Simons", "person")
  addNode(24,"Philipe Borehi", "person")
  addNode(0,"Vladimir Zamziev", "person")
  addNode(17,"Quanlong Wang", "person")
  addNode(51,"Emmanuel Jeandel", "person")
  addNode(39,"Amar Hadzihasanovic", "person")
  addNode(49,"Simon Perdrix", "person")
  addNode(54,"Fabio Zanasi", "person")
  addNode(30,"Renaud Vilmart", "person")
  addNode(10,"Stach Kuijpers", "person")
  addNode(36,"Joe Collins", "person")
  addNode(50,"Bob Coecke", "person")
  addNode(3,"Kang Feng Ng", "person")
  addNode(52,"Richard East", "person")
  addNode(12,"Dominic Horsman", "person")
  addNode(42,"Hector Miller-Bakewell", "person")
  addNode(45,"Giovanni de Felice", "person")
  addNode(41,"Niel de Beaudrap", "person")
  addNode(33,"Ross Duncan", "person")
  addNode(38,"Sal Wolffs", "person")
  addNode(23,"CoSy", "field")
  addNode(26,"Hopf algebras", "field")
  addNode(48,"ZX-Dynamics", "field")
  addNode(15,"Error correcting codes", "field")
  addNode(22,"PyZX", "field")
  addNode(6,"Completeness", "field")
  addNode(35,"MBQC", "field")
  addNode(31,"ΔZX", "field")
  addNode(7,"Scalable ZX", "field")
  addNode(27,"String diagrams", "field")
  addNode(14,"Surface codes", "field")
  addNode(11,"ZH", "field")
  addNode(2,"Quantomatic", "field")
  addNode(19,"Circuit optimisation", "field")
  addNode(8,"Qudits", "field")
  addNode(20,"Foundations", "field")
  addNode(16,"Mixed ZX", "field")
  addNode(5,"ZW", "field")
  addNode(9,"Fermionic QC", "field")
  addLink(1,0)
  addLink(2,0)
  addLink(4,3)
  addLink(5,3)
  addLink(6,3)
  addLink(7,3)
  addLink(8,3)
  addLink(9,3)
  addLink(4,10)
  addLink(11,10)
  addLink(13,12)
  addLink(14,12)
  addLink(15,12)
  addLink(7,12)
  addLink(16,12)
  addLink(18,17)
  addLink(6,17)
  addLink(19,17)
  addLink(20,17)
  addLink(8,17)
  addLink(4,21)
  addLink(11,21)
  addLink(22,21)
  addLink(19,21)
  addLink(15,21)
  addLink(2,21)
  addLink(20,21)
  addLink(23,21)
  addLink(25,24)
  addLink(26,24)
  addLink(27,24)
  addLink(29,28)
  addLink(15,28)
  addLink(1,30)
  addLink(6,30)
  addLink(31,30)
  addLink(16,30)
  addLink(4,32)
  addLink(11,32)
  addLink(22,32)
  addLink(19,32)
  addLink(34,33)
  addLink(19,33)
  addLink(35,33)
  addLink(2,33)
  addLink(20,33)
  addLink(37,36)
  addLink(26,36)
  addLink(4,38)
  addLink(11,38)
  addLink(40,39)
  addLink(5,39)
  addLink(9,39)
  addLink(18,41)
  addLink(19,41)
  addLink(18,42)
  addLink(2,42)
  addLink(23,42)
  addLink(44,43)
  addLink(6,43)
  addLink(11,43)
  addLink(20,43)
  addLink(18,45)
  addLink(5,45)
  addLink(9,45)
  addLink(34,46)
  addLink(19,46)
  addLink(18,47)
  addLink(48,47)
  addLink(20,47)
  addLink(1,49)
  addLink(6,49)
  addLink(35,49)
  addLink(14,49)
  addLink(16,49)
  addLink(18,50)
  addLink(6,50)
  addLink(19,50)
  addLink(20,50)
  addLink(5,50)
  addLink(1,51)
  addLink(6,51)
  addLink(16,51)
  addLink(13,52)
  addLink(14,52)
  addLink(7,52)
  addLink(16,52)
  addLink(1,53)
  addLink(6,53)
  addLink(16,53)
  addLink(7,53)
  addLink(44,54)
  addLink(26,54)
  addLink(27,54)


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
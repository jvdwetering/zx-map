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

  addNode(39,"Nijmegen", "place")
  addNode(1,"Oxford", "place")
  addNode(49,"Glasgow", "place")
  addNode(20,"Grenoble", "place")
  addNode(12,"Nancy", "place")
  addNode(17,"Cambridge", "place")
  addNode(44,"Kyoto", "place")
  addNode(32,"Piza", "place")
  addNode(28,"London", "place")
  addNode(52,"Durham", "place")
  addNode(22,"Emmanuel Jeandel", "person")
  addNode(0,"Bob Coecke", "person")
  addNode(53,"Aleks Kissinger", "person")
  addNode(31,"Philipe Borehi", "person")
  addNode(37,"Vladimir Zamziev", "person")
  addNode(16,"Will Simons", "person")
  addNode(45,"Titouan Carette", "person")
  addNode(54,"Stach Kuijpers", "person")
  addNode(33,"Renaud Vilmart", "person")
  addNode(19,"Richard East", "person")
  addNode(11,"Simon Perdrix", "person")
  addNode(9,"Quanlong Wang", "person")
  addNode(25,"Stefano Gogioso", "person")
  addNode(27,"Fabio Zanasi", "person")
  addNode(43,"Amar Hadzihasanovic", "person")
  addNode(47,"Sal Wolffs", "person")
  addNode(51,"Nicholas Chancellor", "person")
  addNode(23,"Dominic Horsman", "person")
  addNode(38,"John van de Wetering", "person")
  addNode(42,"Miriam Backens", "person")
  addNode(48,"Joe Collins", "person")
  addNode(46,"Kang Feng Ng", "person")
  addNode(50,"Niel de Beaudrap", "person")
  addNode(35,"Giovanni de Felice", "person")
  addNode(6,"Hector Miller-Bakewell", "person")
  addNode(18,"Ross Duncan", "person")
  addNode(10,"Qudits", "field")
  addNode(4,"Foundations", "field")
  addNode(30,"String diagrams", "field")
  addNode(5,"ZW", "field")
  addNode(3,"Circuit optimisation", "field")
  addNode(2,"Completeness", "field")
  addNode(7,"Quantomatic", "field")
  addNode(34,"ΔZX", "field")
  addNode(41,"PyZX", "field")
  addNode(36,"Fermionic QC", "field")
  addNode(8,"CoSy", "field")
  addNode(29,"Hopf algebras", "field")
  addNode(21,"Scalable ZX", "field")
  addNode(26,"ZX-Dynamics", "field")
  addNode(13,"MBQC", "field")
  addNode(15,"Mixed ZX", "field")
  addNode(14,"Surface codes", "field")
  addNode(40,"ZH", "field")
  addNode(24,"Error correcting codes", "field")
  addLink(1,0)
  addLink(2,0)
  addLink(3,0)
  addLink(4,0)
  addLink(5,0)
  addLink(1,6)
  addLink(7,6)
  addLink(8,6)
  addLink(1,9)
  addLink(2,9)
  addLink(3,9)
  addLink(4,9)
  addLink(10,9)
  addLink(12,11)
  addLink(2,11)
  addLink(13,11)
  addLink(14,11)
  addLink(15,11)
  addLink(17,16)
  addLink(3,16)
  addLink(17,18)
  addLink(3,18)
  addLink(13,18)
  addLink(7,18)
  addLink(4,18)
  addLink(20,19)
  addLink(14,19)
  addLink(21,19)
  addLink(15,19)
  addLink(12,22)
  addLink(2,22)
  addLink(15,22)
  addLink(20,23)
  addLink(14,23)
  addLink(24,23)
  addLink(21,23)
  addLink(15,23)
  addLink(1,25)
  addLink(26,25)
  addLink(4,25)
  addLink(28,27)
  addLink(29,27)
  addLink(30,27)
  addLink(32,31)
  addLink(29,31)
  addLink(30,31)
  addLink(12,33)
  addLink(2,33)
  addLink(34,33)
  addLink(15,33)
  addLink(1,35)
  addLink(5,35)
  addLink(36,35)
  addLink(12,37)
  addLink(7,37)
  addLink(39,38)
  addLink(40,38)
  addLink(41,38)
  addLink(3,38)
  addLink(28,42)
  addLink(2,42)
  addLink(40,42)
  addLink(4,42)
  addLink(44,43)
  addLink(5,43)
  addLink(36,43)
  addLink(12,45)
  addLink(2,45)
  addLink(15,45)
  addLink(21,45)
  addLink(39,46)
  addLink(5,46)
  addLink(2,46)
  addLink(21,46)
  addLink(10,46)
  addLink(36,46)
  addLink(39,47)
  addLink(40,47)
  addLink(49,48)
  addLink(29,48)
  addLink(1,50)
  addLink(3,50)
  addLink(13,50)
  addLink(14,50)
  addLink(40,50)
  addLink(52,51)
  addLink(24,51)
  addLink(39,53)
  addLink(40,53)
  addLink(41,53)
  addLink(3,53)
  addLink(24,53)
  addLink(7,53)
  addLink(4,53)
  addLink(8,53)
  addLink(39,54)
  addLink(40,54)


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
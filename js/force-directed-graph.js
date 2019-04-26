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

  addNode(37,"Durham", "place")
  addNode(1,"Nancy", "place")
  addNode(41,"London", "place")
  addNode(16,"Nijmegen", "place")
  addNode(51,"Piza", "place")
  addNode(7,"Oxford", "place")
  addNode(43,"Cambridge", "place")
  addNode(22,"Grenoble", "place")
  addNode(19,"Glasgow", "place")
  addNode(35,"Kyoto", "place")
  addNode(11,"Bob Coecke", "person")
  addNode(46,"Aleks Kissinger", "person")
  addNode(18,"Joe Collins", "person")
  addNode(40,"Miriam Backens", "person")
  addNode(30,"Hector Miller-Bakewell", "person")
  addNode(54,"Titouan Carette", "person")
  addNode(49,"Giovanni de Felice", "person")
  addNode(44,"Fabio Zanasi", "person")
  addNode(34,"Amar Hadzihasanovic", "person")
  addNode(52,"Renaud Vilmart", "person")
  addNode(13,"Stefano Gogioso", "person")
  addNode(47,"Vladimir Zamziev", "person")
  addNode(24,"Niel de Beaudrap", "person")
  addNode(28,"Kang Feng Ng", "person")
  addNode(26,"John van de Wetering", "person")
  addNode(48,"Ross Duncan", "person")
  addNode(42,"Will Simons", "person")
  addNode(36,"Nicholas Chancellor", "person")
  addNode(25,"Stach Kuijpers", "person")
  addNode(6,"Quanlong Wang", "person")
  addNode(50,"Philipe Borehi", "person")
  addNode(21,"Richard East", "person")
  addNode(33,"Emmanuel Jeandel", "person")
  addNode(15,"Sal Wolffs", "person")
  addNode(0,"Simon Perdrix", "person")
  addNode(39,"Dominic Horsman", "person")
  addNode(5,"Mixed ZX", "field")
  addNode(27,"PyZX", "field")
  addNode(32,"CoSy", "field")
  addNode(8,"Circuit optimisation", "field")
  addNode(4,"Surface codes", "field")
  addNode(20,"Hopf algebras", "field")
  addNode(23,"Scalable ZX", "field")
  addNode(45,"String diagrams", "field")
  addNode(17,"ZH", "field")
  addNode(38,"Error correcting codes", "field")
  addNode(3,"MBQC", "field")
  addNode(9,"Foundations", "field")
  addNode(31,"Quantomatic", "field")
  addNode(12,"ZW", "field")
  addNode(2,"Completeness", "field")
  addNode(53,"ΔZX", "field")
  addNode(14,"ZX-Dynamics", "field")
  addNode(29,"Fermionic QC", "field")
  addNode(10,"Qudits", "field")
  addLink(1,0)
  addLink(2,0)
  addLink(3,0)
  addLink(4,0)
  addLink(5,0)
  addLink(7,6)
  addLink(2,6)
  addLink(8,6)
  addLink(9,6)
  addLink(10,6)
  addLink(7,11)
  addLink(2,11)
  addLink(8,11)
  addLink(9,11)
  addLink(12,11)
  addLink(7,13)
  addLink(14,13)
  addLink(9,13)
  addLink(16,15)
  addLink(17,15)
  addLink(19,18)
  addLink(20,18)
  addLink(22,21)
  addLink(4,21)
  addLink(23,21)
  addLink(5,21)
  addLink(7,24)
  addLink(8,24)
  addLink(16,25)
  addLink(17,25)
  addLink(16,26)
  addLink(17,26)
  addLink(27,26)
  addLink(8,26)
  addLink(16,28)
  addLink(12,28)
  addLink(2,28)
  addLink(23,28)
  addLink(10,28)
  addLink(29,28)
  addLink(7,30)
  addLink(31,30)
  addLink(32,30)
  addLink(1,33)
  addLink(2,33)
  addLink(5,33)
  addLink(35,34)
  addLink(12,34)
  addLink(29,34)
  addLink(37,36)
  addLink(38,36)
  addLink(22,39)
  addLink(4,39)
  addLink(38,39)
  addLink(23,39)
  addLink(5,39)
  addLink(41,40)
  addLink(2,40)
  addLink(17,40)
  addLink(9,40)
  addLink(43,42)
  addLink(8,42)
  addLink(41,44)
  addLink(20,44)
  addLink(45,44)
  addLink(16,46)
  addLink(17,46)
  addLink(27,46)
  addLink(8,46)
  addLink(38,46)
  addLink(31,46)
  addLink(9,46)
  addLink(32,46)
  addLink(1,47)
  addLink(31,47)
  addLink(43,48)
  addLink(8,48)
  addLink(3,48)
  addLink(31,48)
  addLink(9,48)
  addLink(7,49)
  addLink(12,49)
  addLink(29,49)
  addLink(51,50)
  addLink(20,50)
  addLink(45,50)
  addLink(1,52)
  addLink(2,52)
  addLink(53,52)
  addLink(5,52)
  addLink(1,54)
  addLink(2,54)
  addLink(5,54)
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
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

  addNode(1,"Nijmegen", "place")
  addNode(27,"Kyoto", "place")
  addNode(4,"Oxford", "place")
  addNode(29,"Durham", "place")
  addNode(13,"Nancy", "place")
  addNode(23,"Cambridge", "place")
  addNode(9,"Piza", "place")
  addNode(35,"London", "place")
  addNode(43,"Glasgow", "place")
  addNode(52,"Grenoble", "place")
  addNode(0,"Sal Wolffs", "person")
  addNode(42,"Joe Collins", "person")
  addNode(46,"Aleks Kissinger", "person")
  addNode(49,"Quanlong Wang", "person")
  addNode(12,"Renaud Vilmart", "person")
  addNode(38,"Giovanni de Felice", "person")
  addNode(40,"Stefano Gogioso", "person")
  addNode(3,"Niel de Beaudrap", "person")
  addNode(44,"Vladimir Zamziev", "person")
  addNode(17,"Kang Feng Ng", "person")
  addNode(53,"Hector Miller-Bakewell", "person")
  addNode(34,"Miriam Backens", "person")
  addNode(31,"Stach Kuijpers", "person")
  addNode(22,"Ross Duncan", "person")
  addNode(50,"Simon Perdrix", "person")
  addNode(32,"John van de Wetering", "person")
  addNode(37,"Fabio Zanasi", "person")
  addNode(54,"Richard East", "person")
  addNode(39,"Emmanuel Jeandel", "person")
  addNode(36,"Bob Coecke", "person")
  addNode(45,"Titouan Carette", "person")
  addNode(28,"Nicholas Chancellor", "person")
  addNode(48,"Will Simons", "person")
  addNode(51,"Dominic Horsman", "person")
  addNode(26,"Amar Hadzihasanovic", "person")
  addNode(8,"Philipe Borehi", "person")
  addNode(25,"Foundations", "field")
  addNode(10,"Hopf algebras", "field")
  addNode(5,"Circuit optimisation", "field")
  addNode(19,"Scalable ZX", "field")
  addNode(33,"PyZX", "field")
  addNode(30,"Error correcting codes", "field")
  addNode(2,"ZH", "field")
  addNode(16,"Mixed ZX", "field")
  addNode(14,"Completeness", "field")
  addNode(15,"ΔZX", "field")
  addNode(20,"Qudits", "field")
  addNode(24,"Quantomatic", "field")
  addNode(7,"Surface codes", "field")
  addNode(47,"CoSy", "field")
  addNode(11,"String diagrams", "field")
  addNode(6,"MBQC", "field")
  addNode(41,"ZX-Dynamics", "field")
  addNode(18,"ZW", "field")
  addNode(21,"Fermionic QC", "field")
  addLink(1,0)
  addLink(2,0)
  addLink(4,3)
  addLink(5,3)
  addLink(6,3)
  addLink(7,3)
  addLink(2,3)
  addLink(9,8)
  addLink(10,8)
  addLink(11,8)
  addLink(13,12)
  addLink(14,12)
  addLink(15,12)
  addLink(16,12)
  addLink(1,17)
  addLink(18,17)
  addLink(14,17)
  addLink(19,17)
  addLink(20,17)
  addLink(21,17)
  addLink(23,22)
  addLink(5,22)
  addLink(6,22)
  addLink(24,22)
  addLink(25,22)
  addLink(27,26)
  addLink(18,26)
  addLink(21,26)
  addLink(29,28)
  addLink(30,28)
  addLink(1,31)
  addLink(2,31)
  addLink(1,32)
  addLink(2,32)
  addLink(33,32)
  addLink(5,32)
  addLink(35,34)
  addLink(14,34)
  addLink(2,34)
  addLink(25,34)
  addLink(4,36)
  addLink(14,36)
  addLink(5,36)
  addLink(25,36)
  addLink(18,36)
  addLink(35,37)
  addLink(10,37)
  addLink(11,37)
  addLink(4,38)
  addLink(18,38)
  addLink(21,38)
  addLink(13,39)
  addLink(14,39)
  addLink(16,39)
  addLink(4,40)
  addLink(41,40)
  addLink(25,40)
  addLink(43,42)
  addLink(10,42)
  addLink(13,44)
  addLink(24,44)
  addLink(13,45)
  addLink(14,45)
  addLink(16,45)
  addLink(19,45)
  addLink(1,46)
  addLink(2,46)
  addLink(33,46)
  addLink(5,46)
  addLink(30,46)
  addLink(24,46)
  addLink(25,46)
  addLink(47,46)
  addLink(23,48)
  addLink(5,48)
  addLink(4,49)
  addLink(14,49)
  addLink(5,49)
  addLink(25,49)
  addLink(20,49)
  addLink(13,50)
  addLink(14,50)
  addLink(6,50)
  addLink(7,50)
  addLink(16,50)
  addLink(52,51)
  addLink(7,51)
  addLink(30,51)
  addLink(19,51)
  addLink(16,51)
  addLink(4,53)
  addLink(24,53)
  addLink(47,53)
  addLink(52,54)
  addLink(7,54)
  addLink(19,54)
  addLink(16,54)


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
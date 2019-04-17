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
  addNode(33,"Oxford", "place")
  addNode(1,"Nancy", "place")
  addNode(10,"Grenoble", "place")
  addNode(29,"Glasgow", "place")
  addNode(23,"London", "place")
  addNode(6,"Kyoto", "place")
  addNode(17,"Nijmegen", "place")
  addNode(26,"Cambridge", "place")
  addNode(14,"Durham", "place")
  addNode(24,"Kang Feng Ng", "person")
  addNode(38,"Will Simons", "person")
  addNode(16,"Aleks Kissinger", "person")
  addNode(9,"Richard East", "person")
  addNode(34,"Titouan Carette", "person")
  addNode(48,"Vladimir Zamziev", "person")
  addNode(31,"Simon Perdrix", "person")
  addNode(46,"Emmanuel Jeandel", "person")
  addNode(25,"Ross Duncan", "person")
  addNode(49,"Hector Miller-Bakewell", "person")
  addNode(35,"Sal Wolffs", "person")
  addNode(32,"Quanlong Wang", "person")
  addNode(44,"John van de Wetering", "person")
  addNode(42,"Philipe Borehi", "person")
  addNode(28,"Joe Collins", "person")
  addNode(40,"Niel de Beaudrap", "person")
  addNode(41,"Bob Coecke", "person")
  addNode(5,"Amar Hadjihasanovic", "person")
  addNode(47,"Giovanni de Felice", "person")
  addNode(13,"Nicholas Chancellor", "person")
  addNode(45,"Dominic Horsman", "person")
  addNode(0,"Renaud Vilmart", "person")
  addNode(22,"Miriam Backens", "person")
  addNode(39,"Stach Kuijpers", "person")
  addNode(36,"Fabio Zanasi", "person")
  addNode(2,"Completeness", "field")
  addNode(3,"ΔZX", "field")
  addNode(37,"String diagrams", "field")
  addNode(11,"Surface codes", "field")
  addNode(20,"Circuit optimisation", "field")
  addNode(7,"ZW", "field")
  addNode(4,"Mixed ZX", "field")
  addNode(8,"Fermionic QC", "field")
  addNode(27,"MBQC", "field")
  addNode(12,"Scalable ZX", "field")
  addNode(19,"PyZX", "field")
  addNode(21,"Quantomatic", "field")
  addNode(15,"Error correcting codes", "field")
  addNode(50,"CoSy", "field")
  addNode(18,"ZH", "field")
  addNode(30,"Hopf algebras", "field")
  addLink(1,0)
  addLink(2,0)
  addLink(3,0)
  addLink(4,0)
  addLink(6,5)
  addLink(7,5)
  addLink(8,5)
  addLink(10,9)
  addLink(11,9)
  addLink(12,9)
  addLink(4,9)
  addLink(14,13)
  addLink(15,13)
  addLink(17,16)
  addLink(18,16)
  addLink(19,16)
  addLink(20,16)
  addLink(15,16)
  addLink(21,16)
  addLink(23,22)
  addLink(2,22)
  addLink(18,22)
  addLink(17,24)
  addLink(7,24)
  addLink(2,24)
  addLink(12,24)
  addLink(26,25)
  addLink(20,25)
  addLink(27,25)
  addLink(21,25)
  addLink(29,28)
  addLink(30,28)
  addLink(1,31)
  addLink(2,31)
  addLink(27,31)
  addLink(11,31)
  addLink(4,31)
  addLink(33,32)
  addLink(2,32)
  addLink(20,32)
  addLink(1,34)
  addLink(2,34)
  addLink(4,34)
  addLink(12,34)
  addLink(17,35)
  addLink(18,35)
  addLink(23,36)
  addLink(30,36)
  addLink(37,36)
  addLink(26,38)
  addLink(20,38)
  addLink(17,39)
  addLink(18,39)
  addLink(33,40)
  addLink(20,40)
  addLink(33,41)
  addLink(2,41)
  addLink(20,41)
  addLink(43,42)
  addLink(30,42)
  addLink(37,42)
  addLink(17,44)
  addLink(18,44)
  addLink(19,44)
  addLink(20,44)
  addLink(10,45)
  addLink(11,45)
  addLink(15,45)
  addLink(12,45)
  addLink(4,45)
  addLink(1,46)
  addLink(2,46)
  addLink(4,46)
  addLink(33,47)
  addLink(7,47)
  addLink(8,47)
  addLink(1,48)
  addLink(21,48)
  addLink(33,49)
  addLink(21,49)
  addLink(50,49)


  // Event handling


  drag = simulation => {

    function dragstarted(d) {
      if (!d3.event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
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
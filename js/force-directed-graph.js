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

  addNode(10,"London", "place")
  addNode(5,"Nancy", "place")
  addNode(19,"Nijmegen", "place")
  addNode(14,"Glasgow", "place")
  addNode(44,"Kyoto", "place")
  addNode(54,"Piza", "place")
  addNode(24,"Grenoble", "place")
  addNode(1,"Oxford", "place")
  addNode(50,"Cambridge", "place")
  addNode(31,"Durham", "place")
  addNode(9,"Miriam Backens", "person")
  addNode(47,"Fabio Zanasi", "person")
  addNode(35,"Stach Kuijpers", "person")
  addNode(23,"Richard East", "person")
  addNode(16,"Niel de Beaudrap", "person")
  addNode(45,"Stefano Gogioso", "person")
  addNode(53,"Philipe Borehi", "person")
  addNode(49,"Will Simons", "person")
  addNode(22,"Emmanuel Jeandel", "person")
  addNode(34,"Vladimir Zamziev", "person")
  addNode(4,"Renaud Vilmart", "person")
  addNode(39,"Sal Wolffs", "person")
  addNode(42,"John van de Wetering", "person")
  addNode(51,"Kang Feng Ng", "person")
  addNode(18,"Aleks Kissinger", "person")
  addNode(0,"Hector Miller-Bakewell", "person")
  addNode(52,"Ross Duncan", "person")
  addNode(32,"Quanlong Wang", "person")
  addNode(43,"Amar Hadzihasanovic", "person")
  addNode(36,"Giovanni de Felice", "person")
  addNode(30,"Nicholas Chancellor", "person")
  addNode(41,"Bob Coecke", "person")
  addNode(13,"Joe Collins", "person")
  addNode(40,"Dominic Horsman", "person")
  addNode(28,"Simon Perdrix", "person")
  addNode(27,"Titouan Carette", "person")
  addNode(11,"ZH", "field")
  addNode(26,"Scalable ZX", "field")
  addNode(6,"Completeness", "field")
  addNode(46,"ZX-Dynamics", "field")
  addNode(48,"String diagrams", "field")
  addNode(29,"MBQC", "field")
  addNode(20,"PyZX", "field")
  addNode(37,"ZW", "field")
  addNode(33,"Qudits", "field")
  addNode(12,"Foundations", "field")
  addNode(3,"CoSy", "field")
  addNode(17,"Circuit optimisation", "field")
  addNode(7,"ΔZX", "field")
  addNode(2,"Quantomatic", "field")
  addNode(38,"Fermionic QC", "field")
  addNode(8,"Mixed ZX", "field")
  addNode(21,"Error correcting codes", "field")
  addNode(25,"Surface codes", "field")
  addNode(15,"Hopf algebras", "field")
  addLink(1,0)
  addLink(2,0)
  addLink(3,0)
  addLink(5,4)
  addLink(6,4)
  addLink(7,4)
  addLink(8,4)
  addLink(10,9)
  addLink(6,9)
  addLink(11,9)
  addLink(12,9)
  addLink(14,13)
  addLink(15,13)
  addLink(1,16)
  addLink(17,16)
  addLink(19,18)
  addLink(11,18)
  addLink(20,18)
  addLink(17,18)
  addLink(21,18)
  addLink(2,18)
  addLink(12,18)
  addLink(3,18)
  addLink(5,22)
  addLink(6,22)
  addLink(8,22)
  addLink(24,23)
  addLink(25,23)
  addLink(26,23)
  addLink(8,23)
  addLink(5,27)
  addLink(6,27)
  addLink(8,27)
  addLink(26,27)
  addLink(5,28)
  addLink(6,28)
  addLink(29,28)
  addLink(25,28)
  addLink(8,28)
  addLink(31,30)
  addLink(21,30)
  addLink(1,32)
  addLink(6,32)
  addLink(17,32)
  addLink(12,32)
  addLink(33,32)
  addLink(5,34)
  addLink(2,34)
  addLink(19,35)
  addLink(11,35)
  addLink(1,36)
  addLink(37,36)
  addLink(38,36)
  addLink(19,39)
  addLink(11,39)
  addLink(24,40)
  addLink(25,40)
  addLink(21,40)
  addLink(26,40)
  addLink(8,40)
  addLink(1,41)
  addLink(6,41)
  addLink(17,41)
  addLink(12,41)
  addLink(37,41)
  addLink(19,42)
  addLink(11,42)
  addLink(20,42)
  addLink(17,42)
  addLink(44,43)
  addLink(37,43)
  addLink(38,43)
  addLink(1,45)
  addLink(46,45)
  addLink(12,45)
  addLink(10,47)
  addLink(15,47)
  addLink(48,47)
  addLink(50,49)
  addLink(17,49)
  addLink(19,51)
  addLink(37,51)
  addLink(6,51)
  addLink(26,51)
  addLink(33,51)
  addLink(38,51)
  addLink(50,52)
  addLink(17,52)
  addLink(29,52)
  addLink(2,52)
  addLink(12,52)
  addLink(54,53)
  addLink(15,53)
  addLink(48,53)


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
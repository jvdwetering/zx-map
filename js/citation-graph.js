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

  addNode(0,"Completeness...", "paper")
  addNode(1,"SZX-calculus...", "paper")
  addNode(2,"Generalised ...", "paper")
  addNode(3,"Towards Mini...", "paper")
  addNode(4,"A Complete G...", "paper")
  addNode(5,"Qutrit Dichr...", "paper")
  addNode(6,"Pivoting mak...", "paper")
  addNode(7,"A Generic No...", "paper")
  addNode(8,"Completeness...", "paper")
  addNode(9,"Making the s...", "paper")
  addNode(10,"A Complete A...", "paper")
  addNode(11,"Models of Mu...", "paper")
  addNode(12,"Complete set...", "paper")
  addNode(13,"A graphical ...", "paper")
  addNode(14,"Graph-theore...", "paper")
  addNode(15,"Two Complete...", "paper")
  addNode(16,"A Near-Optim...", "paper")
  addNode(17,"Completeness...", "paper")
  addNode(18,"Quantomatic:...", "paper")
  addNode(19,"Graphs State...", "paper")
  addNode(20,"Quantum pict...", "paper")
  addNode(21,"A diagrammat...", "paper")
  addNode(22,"Hopf-Frobeni...", "paper")
  addNode(23,"The composit...", "paper")
  addNode(24,"Verifying th...", "paper")
  addNode(25,"ZX-rules for...", "paper")
  addNode(26,"Qutrit ZX-ca...", "paper")
  addNode(27,"Towards norm...", "paper")
  addNode(28,"Quantum Prot...", "paper")
  addNode(29,"Graphical Fo...", "paper")
  addNode(30,"Completeness...", "paper")
  addNode(31,"The GHZ/W-ca...", "paper")
  addNode(32,"Depicting qu...", "paper")
  addNode(33,"Categorifyin...", "paper")
  addNode(34,"Trichromatic...", "paper")
  addNode(35,"Diagrammatic...", "paper")
  addNode(36,"Reducing T-c...", "paper")
  addNode(37,"ZX-Calculus:...", "paper")
  addNode(38,"Environment ...", "paper")
  addNode(39,"Phase groups...", "paper")
  addNode(40,"Strong compl...", "paper")
  addNode(41,"The ZX-calcu...", "paper")
  addNode(42,"Picturing Qu...", "paper")
  addNode(43,"A universal ...", "paper")
  addNode(44,"Interacting ...", "paper")
  addNode(45,"Completeness...", "paper")
  addNode(46,"The ZX-calcu...", "paper")
  addNode(47,"The rational...", "paper")
  addNode(48,"Universal MB...", "paper")
  addNode(49,"Graphical St...", "paper")
  addNode(50,"A ZX-Calculu...", "paper")
  addNode(51,"The ZX calcu...", "paper")
  addNode(52,"PyZX: Large ...", "paper")
  addNode(53,"Y-Calculus: ...", "paper")
  addNode(54,"Optimising C...", "paper")
  addNode(55,"Three qubit ...", "paper")
  addNode(56,"Superdense C...", "paper")
  addNode(57,"A Simplified...", "paper")
  addNode(58,"A Diagrammat...", "paper")
  addNode(59,"CNOT circuit...", "paper")
  addNode(60,"Interacting ...", "paper")
  addNode(61,"The ZX calcu...", "paper")
  addNode(62,"Pauli Fusion...", "paper")
  addNode(63,"Equivalence ...", "paper")
  addNode(64,"Supplementar...", "paper")
  addNode(65,"Completeness...", "paper")
  addNode(66,"The ZX-calcu...", "paper")
  addNode(67,"Quantum pict...", "paper")
  addNode(68,"Rewriting me...", "paper")
  addNode(69,"Verifying th...", "paper")
  addNode(70,"ZH: A Comple...", "paper")
  addNode(71,"Finite Verif...", "paper")
  addNode(72,"The algebra ...", "paper")
  addLink(1,0)
  addLink(62,0)
  addLink(0,4)
  addLink(16,4)
  addLink(7,4)
  addLink(10,4)
  addLink(17,4)
  addLink(32,5)
  addLink(63,5)
  addLink(26,5)
  addLink(1,6)
  addLink(0,6)
  addLink(5,6)
  addLink(1,7)
  addLink(0,7)
  addLink(47,7)
  addLink(7,8)
  addLink(50,8)
  addLink(22,10)
  addLink(54,10)
  addLink(7,10)
  addLink(50,10)
  addLink(26,10)
  addLink(8,10)
  addLink(72,10)
  addLink(43,10)
  addLink(53,10)
  addLink(49,10)
  addLink(1,13)
  addLink(70,13)
  addLink(69,13)
  addLink(6,13)
  addLink(30,13)
  addLink(16,13)
  addLink(0,13)
  addLink(1,14)
  addLink(62,14)
  addLink(29,14)
  addLink(65,14)
  addLink(52,14)
  addLink(59,14)
  addLink(36,14)
  addLink(0,14)
  addLink(48,14)
  addLink(14,15)
  addLink(30,15)
  addLink(16,15)
  addLink(47,15)
  addLink(36,15)
  addLink(62,15)
  addLink(1,15)
  addLink(65,15)
  addLink(0,15)
  addLink(1,16)
  addLink(52,16)
  addLink(0,16)
  addLink(62,16)
  addLink(71,16)
  addLink(22,17)
  addLink(29,17)
  addLink(65,17)
  addLink(30,17)
  addLink(54,17)
  addLink(7,17)
  addLink(70,17)
  addLink(50,17)
  addLink(26,17)
  addLink(8,17)
  addLink(72,17)
  addLink(43,17)
  addLink(33,17)
  addLink(53,17)
  addLink(49,17)
  addLink(17,17)
  addLink(17,18)
  addLink(60,19)
  addLink(38,19)
  addLink(20,19)
  addLink(0,20)
  addLink(16,20)
  addLink(50,20)
  addLink(26,20)
  addLink(72,20)
  addLink(66,20)
  addLink(12,20)
  addLink(32,20)
  addLink(34,20)
  addLink(67,20)
  addLink(72,21)
  addLink(43,21)
  addLink(30,21)
  addLink(47,21)
  addLink(71,21)
  addLink(52,23)
  addLink(60,23)
  addLink(31,23)
  addLink(55,23)
  addLink(38,23)
  addLink(16,24)
  addLink(7,24)
  addLink(54,24)
  addLink(30,24)
  addLink(0,24)
  addLink(0,25)
  addLink(16,25)
  addLink(22,30)
  addLink(29,30)
  addLink(65,30)
  addLink(30,30)
  addLink(54,30)
  addLink(7,30)
  addLink(70,30)
  addLink(50,30)
  addLink(26,30)
  addLink(8,30)
  addLink(72,30)
  addLink(43,30)
  addLink(33,30)
  addLink(53,30)
  addLink(49,30)
  addLink(17,30)
  addLink(21,31)
  addLink(72,31)
  addLink(27,31)
  addLink(5,32)
  addLink(6,34)
  addLink(7,35)
  addLink(1,36)
  addLink(62,36)
  addLink(29,36)
  addLink(65,36)
  addLink(52,36)
  addLink(59,36)
  addLink(14,36)
  addLink(14,37)
  addLink(30,37)
  addLink(16,37)
  addLink(47,37)
  addLink(60,38)
  addLink(32,39)
  addLink(31,39)
  addLink(38,39)
  addLink(46,41)
  addLink(29,42)
  addLink(65,42)
  addLink(36,42)
  addLink(70,42)
  addLink(8,42)
  addLink(61,42)
  addLink(49,42)
  addLink(29,43)
  addLink(65,43)
  addLink(30,43)
  addLink(54,43)
  addLink(7,43)
  addLink(70,43)
  addLink(50,43)
  addLink(8,43)
  addLink(72,43)
  addLink(49,43)
  addLink(14,43)
  addLink(48,43)
  addLink(71,43)
  addLink(22,44)
  addLink(29,44)
  addLink(65,44)
  addLink(52,44)
  addLink(0,44)
  addLink(14,44)
  addLink(54,44)
  addLink(16,44)
  addLink(70,44)
  addLink(50,44)
  addLink(26,44)
  addLink(24,44)
  addLink(33,44)
  addLink(53,44)
  addLink(17,44)
  addLink(57,44)
  addLink(9,44)
  addLink(46,44)
  addLink(66,44)
  addLink(12,44)
  addLink(5,44)
  addLink(41,44)
  addLink(32,44)
  addLink(6,44)
  addLink(69,44)
  addLink(56,44)
  addLink(34,44)
  addLink(38,44)
  addLink(39,44)
  addLink(23,44)
  addLink(20,44)
  addLink(22,45)
  addLink(29,45)
  addLink(65,45)
  addLink(30,45)
  addLink(54,45)
  addLink(7,45)
  addLink(70,45)
  addLink(50,45)
  addLink(26,45)
  addLink(8,45)
  addLink(72,45)
  addLink(43,45)
  addLink(33,45)
  addLink(53,45)
  addLink(49,45)
  addLink(17,45)
  addLink(26,46)
  addLink(43,46)
  addLink(33,46)
  addLink(1,48)
  addLink(52,48)
  addLink(1,49)
  addLink(62,49)
  addLink(29,49)
  addLink(65,49)
  addLink(36,49)
  addLink(0,49)
  addLink(54,49)
  addLink(16,49)
  addLink(7,49)
  addLink(50,49)
  addLink(26,49)
  addLink(43,49)
  addLink(24,49)
  addLink(7,50)
  addLink(30,50)
  addLink(65,50)
  addLink(29,52)
  addLink(14,52)
  addLink(48,52)
  addLink(70,53)
  addLink(14,54)
  addLink(65,54)
  addLink(56,55)
  addLink(34,55)
  addLink(41,56)
  addLink(17,56)
  addLink(63,57)
  addLink(64,57)
  addLink(65,58)
  addLink(1,59)
  addLink(62,59)
  addLink(14,59)
  addLink(22,60)
  addLink(29,60)
  addLink(65,60)
  addLink(52,60)
  addLink(0,60)
  addLink(14,60)
  addLink(54,60)
  addLink(16,60)
  addLink(70,60)
  addLink(50,60)
  addLink(26,60)
  addLink(24,60)
  addLink(33,60)
  addLink(53,60)
  addLink(17,60)
  addLink(57,60)
  addLink(9,60)
  addLink(46,60)
  addLink(66,60)
  addLink(12,60)
  addLink(5,60)
  addLink(41,60)
  addLink(32,60)
  addLink(6,60)
  addLink(69,60)
  addLink(56,60)
  addLink(34,60)
  addLink(38,60)
  addLink(39,60)
  addLink(23,60)
  addLink(20,60)
  addLink(1,61)
  addLink(62,61)
  addLink(29,61)
  addLink(65,61)
  addLink(30,61)
  addLink(0,61)
  addLink(16,61)
  addLink(7,61)
  addLink(50,61)
  addLink(26,63)
  addLink(17,64)
  addLink(14,64)
  addLink(54,64)
  addLink(2,64)
  addLink(30,64)
  addLink(16,64)
  addLink(47,64)
  addLink(1,66)
  addLink(0,66)
  addLink(14,66)
  addLink(54,66)
  addLink(16,66)
  addLink(50,66)
  addLink(26,66)
  addLink(24,66)
  addLink(48,66)
  addLink(53,66)
  addLink(49,66)
  addLink(57,66)
  addLink(9,66)
  addLink(46,66)
  addLink(12,66)
  addLink(41,66)
  addLink(32,66)
  addLink(6,66)
  addLink(0,67)
  addLink(16,67)
  addLink(50,67)
  addLink(26,67)
  addLink(66,67)
  addLink(12,67)
  addLink(32,67)
  addLink(34,67)
  addLink(60,68)
  addLink(66,68)
  addLink(23,68)
  addLink(38,68)
  addLink(40,68)
  addLink(18,68)
  addLink(67,68)
  addLink(41,68)
  addLink(69,68)
  addLink(6,68)
  addLink(43,68)
  addLink(13,68)
  addLink(31,68)
  addLink(32,68)
  addLink(17,68)
  addLink(25,68)
  addLink(14,68)
  addLink(48,68)
  addLink(26,68)
  addLink(30,68)
  addLink(16,68)
  addLink(62,68)
  addLink(1,68)
  addLink(65,68)
  addLink(0,68)
  addLink(1,69)
  addLink(62,69)
  addLink(43,69)
  addLink(12,69)
  addLink(41,69)
  addLink(52,70)
  addLink(36,70)
  addLink(48,70)
  addLink(1,70)
  addLink(71,70)
  addLink(65,70)
  addLink(0,70)
  addLink(29,70)
  addLink(1,72)
  addLink(0,72)
  addLink(7,72)
  addLink(70,72)
  addLink(50,72)
  addLink(8,72)


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
    return Math.max(-size * 1.2, Math.min(x, size * 1.2))
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
    .force("charge", d3.forceManyBody().strength(-500))
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

  g = svg.append("g");

  svg.call(d3.zoom()
    .scaleExtent([1 / 2, 8])
    .on("zoom", zoomed));

  function zoomed() {
    g.attr("transform", d3.event.transform);
  }


  g.append('defs').append('marker')
    .attr('id','arrowhead')
    .attr('viewBox','-0 -5 10 10')
    .attr('refX',13)
    .attr('refY',0)
    .attr('orient','auto')
    .attr('markerWidth',8)
    .attr('markerHeight',8)
    .attr('xoverflow','visible')
    .append('svg:path')
    .attr('d', 'M 0,-5 L 10 ,0 L 0,5')
    .attr('fill', '#F22')
    .attr('fill-opacity', 0.8)
    .style('stroke','none');

  // var colorRange = ["#999", "#999"]
  // var color = d3.scaleLinear().range(colorRange).domain([1, 2]);

  // var linearGradient = g.append("defs")
  //   .append("linearGradient")
  //   .attr("id", "linear-gradient")
  //   .attr("gradientTransform", "rotate(90)");

  // linearGradient.append("stop")
  //   .attr("offset", "0%")
  //   .attr("stop-color", color(1));
  // linearGradient.append("stop")
  //   .attr("offset", "100%")
  //   .attr("stop-color", color(2));
    

  const link = g.append("g")
    .attr("stroke", "#999")
    .selectAll("line")
    .data(links)
    .join("line")
    //.attr("stroke", "url(#linear-gradient)")
    .attr("stroke-opacity", 0.7)
    .attr('marker-end','url(#arrowhead)')
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
      case "paper":
        return "#ADA";
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
const data = [
    {"Scene": 1, "Description": "Opening: Random Thoughts", "Radius": 10, "Angle (Degrees)": 0, "Size": 7, "Color (Hex)": "#A9A9A9", "Opacity": 1.0},
    {"Scene": 2, "Description": "First Conversation in Train Car", "Radius": 20, "Angle (Degrees)": 20, "Size": 8, "Color (Hex)": "#1E90FF", "Opacity": 1.0},
    {"Scene": 3, "Description": "Car Ride/Clementine's Apartment", "Radius": 30, "Angle (Degrees)": 40, "Size": 9, "Color (Hex)": "#1E90FF", "Opacity": 1.0},
    {"Scene": 4, "Description": "Joel Calls/Frozen Lake", "Radius": 40, "Angle (Degrees)": 60, "Size": 8, "Color (Hex)": "#32CD32", "Opacity": 0.3},
    {"Scene": 5, "Description": "Opening Credits", "Radius": 50, "Angle (Degrees)": 80, "Size": 7, "Color (Hex)": "#A9A9A9", "Opacity": 1.0},
    {"Scene": 6, "Description": "Checking the Mail/Taking Medicine", "Radius": 60, "Angle (Degrees)": 100, "Size": 7, "Color (Hex)": "#A9A9A9", "Opacity": 0.1},
    {"Scene": 7, "Description": "Joel Talking to Friends", "Radius": 70, "Angle (Degrees)": 120, "Size": 7, "Color (Hex)": "#D3D3D3", "Opacity": 0.1},
    {"Scene": 8, "Description": "Lacuna, Inc. Office Visit", "Radius": 80, "Angle (Degrees)": 140, "Size": 7, "Color (Hex)": "#D3D3D3", "Opacity": 0.1},
    {"Scene": 9, "Description": "Collecting Memories", "Radius": 90, "Angle (Degrees)": 160, "Size": 8, "Color (Hex)": "#FFE4B5", "Opacity": 0.2},
    {"Scene": 10, "Description": "Meeting Stan/Doctor's Appointment", "Radius": 100, "Angle (Degrees)": 180, "Size": 7, "Color (Hex)": "#D3D3D3", "Opacity": 0.1},
    {"Scene": 11, "Description": "Night/Preparing the Equipment", "Radius": 110, "Angle (Degrees)": 200, "Size": 6, "Color (Hex)": "#A9A9A9", "Opacity": 1.0},
    {"Scene": 12, "Description": "Removing First Memory", "Radius": 120, "Angle (Degrees)": 220, "Size": 6, "Color (Hex)": "#FFD700", "Opacity": 0.6},
    {"Scene": 13, "Description": "Clementine in Joel's Memory", "Radius": 130, "Angle (Degrees)": 240, "Size": 7, "Color (Hex)": "#FFD700", "Opacity": 0.7},
    {"Scene": 14, "Description": "Joel Wants to Hide Clementine", "Radius": 140, "Angle (Degrees)": 260, "Size": 8, "Color (Hex)": "#FFD700", "Opacity": 0.8},
    {"Scene": 15, "Description": "Memory of Childhood Home", "Radius": 150, "Angle (Degrees)": 280, "Size": 9, "Color (Hex)": "#FF4500", "Opacity": 0.9},
    {"Scene": 16, "Description": "Hiding Clementine in Childhood Memories", "Radius": 160, "Angle (Degrees)": 300, "Size": 10, "Color (Hex)": "#FF4500", "Opacity": 1.0},
    {"Scene": 17, "Description": "Fleeing Through Memories", "Radius": 170, "Angle (Degrees)": 320, "Size": 6, "Color (Hex)": "#FFD700", "Opacity": 0.6},
    {"Scene": 18, "Description": "Nightmare Memory", "Radius": 180, "Angle (Degrees)": 340, "Size": 5, "Color (Hex)": "#FF6347", "Opacity": 0.5},
    {"Scene": 19, "Description": "Happy Memories", "Radius": 190, "Angle (Degrees)": 360, "Size": 7, "Color (Hex)": "#1E90FF", "Opacity": 0.7},
    {"Scene": 20, "Description": "Falling in Love", "Radius": 200, "Angle (Degrees)": 380, "Size": 8, "Color (Hex)": "#1E90FF", "Opacity": 0.8},
    {"Scene": 21, "Description": "Memory Disruption", "Radius": 210, "Angle (Degrees)": 400, "Size": 4, "Color (Hex)": "#FF6347", "Opacity": 0.4},
    {"Scene": 22, "Description": "Joel's Last Memory", "Radius": 220, "Angle (Degrees)": 420, "Size": 5, "Color (Hex)": "#FF6347", "Opacity": 0.5},
    {"Scene": 23, "Description": "Morning After Procedure", "Radius": 230, "Angle (Degrees)": 440, "Size": 1, "Color (Hex)": "#A9A9A9", "Opacity": 1.0},
    {"Scene": 24, "Description": "Realizing the Truth", "Radius": 240, "Angle (Degrees)": 460, "Size": 8, "Color (Hex)": "#FFD700", "Opacity": 0.8},
    {"Scene": 25, "Description": "Confronting the Past", "Radius": 250, "Angle (Degrees)": 480, "Size": 9, "Color (Hex)": "#FFD700", "Opacity": 0.9},
    {"Scene": 26, "Description": "Reconnecting with Clementine", "Radius": 260, "Angle (Degrees)": 500, "Size": 10, "Color (Hex)": "#32CD32", "Opacity": 1.0},
    {"Scene": 27, "Description": "Hopeful Ending", "Radius": 270, "Angle (Degrees)": 520, "Size": 10, "Color (Hex)": "#32CD32", "Opacity": 1.0},
    {"Scene": 28, "Description": "Lost Memory", "Radius": 280, "Angle (Degrees)": 540, "Size": 9, "Color (Hex)": "#FFD700", "Opacity": 0.6},
    {"Scene": 29, "Description": "Confession from Clementine", "Radius": 290, "Angle (Degrees)": 560, "Size": 7, "Color (Hex)": "#FFD700", "Opacity": 0.8},
    {"Scene": 30, "Description": "Joel's Confusion", "Radius": 300, "Angle (Degrees)": 580, "Size": 8, "Color (Hex)": "#FF4500", "Opacity": 0.8},
    {"Scene": 31, "Description": "Memory Conflict", "Radius": 310, "Angle (Degrees)": 600, "Size": 8, "Color (Hex)": "#FF4500", "Opacity": 0.8},
    {"Scene": 32, "Description": "Hiding Memories Together", "Radius": 320, "Angle (Degrees)": 620, "Size": 9, "Color (Hex)": "#FFD700", "Opacity": 0.8},
    {"Scene": 33, "Description": "Heartbreak Memory", "Radius": 330, "Angle (Degrees)": 640, "Size": 6, "Color (Hex)": "#FF4500", "Opacity": 0.5},
    {"Scene": 34, "Description": "Hope Lost", "Radius": 340, "Angle (Degrees)": 660, "Size": 7, "Color (Hex)": "#FF4500", "Opacity": 0.8},
    {"Scene": 35, "Description": "Friendship Memories", "Radius": 350, "Angle (Degrees)": 680, "Size": 6, "Color (Hex)": "#1E90FF", "Opacity": 0.8},
    {"Scene": 36, "Description": "Memory Escape Plan", "Radius": 360, "Angle (Degrees)": 700, "Size": 8, "Color (Hex)": "#FFD700", "Opacity": 0.9},
    {"Scene": 37, "Description": "New Beginnings", "Radius": 370, "Angle (Degrees)": 720, "Size": 10, "Color (Hex)": "#32CD32", "Opacity": 1.0},
    {"Scene": 38, "Description": "Goodbye to Clementine", "Radius": 380, "Angle (Degrees)": 740, "Size": 7, "Color (Hex)": "#FF4500", "Opacity": 0.8},
    {"Scene": 39, "Description": "Lacuna's Secret", "Radius": 390, "Angle (Degrees)": 760, "Size": 5, "Color (Hex)": "#FF4500", "Opacity": 0.7},
    {"Scene": 40, "Description": "Final Conflict", "Radius": 400, "Angle (Degrees)": 780, "Size": 8, "Color (Hex)": "#FFD700", "Opacity": 0.9},
    {"Scene": 41, "Description": "Reunion with Clementine", "Radius": 410, "Angle (Degrees)": 800, "Size": 9, "Color (Hex)": "#32CD32", "Opacity": 0.9},
    {"Scene": 42, "Description": "Facing the Truth", "Radius": 420, "Angle (Degrees)": 820, "Size": 8, "Color (Hex)": "#FFD700", "Opacity": 0.8},
    {"Scene": 43, "Description": "Joel's Happiness", "Radius": 430, "Angle (Degrees)": 840, "Size": 9, "Color (Hex)": "#32CD32", "Opacity": 1.0},
    {"Scene": 44, "Description": "Conclusion", "Radius": 440, "Angle (Degrees)": 860, "Size": 10, "Color (Hex)": "#32CD32", "Opacity": 1.0}
  ];
  
  
  const width = 800;
  const height = 800;
  const svg = d3.select("#chart")
    .append("svg")
    .attr("width", width)
    .attr("height", height);
  
  const tooltip = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);
  
  const g = svg.append("g")
    .attr("transform", `translate(${width / 2}, ${height / 2})`);
  
  g.selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", d => d.Radius * Math.cos(d["Angle (Degrees)"] * Math.PI / 180))
    .attr("cy", d => d.Radius * Math.sin(d["Angle (Degrees)"] * Math.PI / 180))
    .attr("r", d => d.Size)
    .attr("fill", d => d["Color (Hex)"])
    .attr("opacity", d => d.Opacity)
    .on("mouseover", function(event, d) {
      tooltip.transition().duration(200).style("opacity", 0.9);
      tooltip.html(`<strong>Scene ${d.Scene}:</strong> ${d.Description}`)
        .style("left", (event.pageX + 10) + "px")
        .style("top", (event.pageY - 20) + "px");
    })
    .on("mouseout", () => {
      tooltip.transition().duration(500).style("opacity", 0);
    });
  

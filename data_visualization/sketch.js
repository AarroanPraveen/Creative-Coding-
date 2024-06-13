let table;

function preload() {
  // Load the CSV file
  table = loadTable('data.csv', 'csv', 'header');
}

function setup() {
  createCanvas(800, 600);
  noLoop(); // No need to continuously update the draw function
}

function draw() {
  background(255);
  
  let margin = 50;
  let chartWidth = width - 2 * margin;
  let chartHeight = height - 2 * margin;
  let maxData = 0;
  
  // Get the data and find the maximum value
  let sales = [];
  let labels = [];
  for (let r = 0; r < table.getRowCount(); r++) {
    let sale = table.getNum(r, 'Sales');
    sales.push(sale);
    labels.push(table.getString(r, 'Day'));
    if (sale > maxData) {
      maxData = sale;
    }
  }
  
  // Draw the bars
  for (let i = 0; i < sales.length; i++) {
    let barWidth = chartWidth / sales.length - 20;
    let barHeight = map(sales[i], 0, maxData, 0, chartHeight);
    let x = margin + i * (chartWidth / sales.length);
    let y = height - margin - barHeight;
    
    fill(random(255),random(255),random(255));
    rect(x, y, barWidth, barHeight);
    
    // Draw the labels
    fill(0);
    textAlign(CENTER, CENTER);
    text(labels[i], x + barWidth / 2, height - margin / 2);
  }
  
  // Draw the y-axis
  stroke(0);
  line(margin, height - margin, margin, margin);
  
  // Draw the x-axis
  line(margin, height - margin, width - margin, height - margin);
  
  // Draw the y-axis labels
  for (let i = 0; i <= maxData; i += maxData / 5) {
    let y = map(i, 0, maxData, height - margin, margin);
    fill(0);
    textAlign(RIGHT, CENTER);
    text(i, margin - 10, y);
    stroke(200);
    line(margin, y, width - margin, y);
  }
}

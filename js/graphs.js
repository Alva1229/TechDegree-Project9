var ctx = document.getElementById("myChart").getContext("2d");

var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
        datasets: [{
            label: '# of Votes',
            data: [500, 600, 1100, 1000, 1500, 2000, 1500, 1300, 1700, 2300, 2400, 2500, 2300],
            backgroundColor: [
                'rgba(153, 102, 255, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgb(76, 69, 117)',
                'rgb(76, 69, 117)',
                'rgb(76, 69, 117)',
                'rgb(76, 69, 117)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
            lineTension: 0
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

var ctx = document.getElementById("barChart").getContext("2d");

var barChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [{
            label: '# of Votes',
            data: [75, 100, 175, 125, 225, 200, 100],
            backgroundColor: [
                'rgb(76, 69, 117)',
                'rgb(76, 69, 117)',
                'rgb(76, 69, 117)',
                'rgb(76, 69, 117)',
                'rgb(76, 69, 117)',
                'rgb(76, 69, 117)',
                'rgb(76, 69, 117)'
            ],
            borderColor: [
                'rgb(76, 69, 117)',
                'rgb(76, 69, 117)',
                'rgb(76, 69, 117)',
                'rgb(76, 69, 117)',
                'rgb(76, 69, 117)',
                'rgb(76, 69, 117)',
                'rgb(76, 69, 117)'
            ],
            borderWidth: 1,
           
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:false
                }
            }]
        }
    }
});

var ctx = document.getElementById("doughnutChart").getContext("2d");

var doughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["Phones", "Tablets", "Desktop"],
        datasets: [{
            label: '# of Votes',
            data: [90, 80, 400],
            backgroundColor: [
                'rgba(112, 198, 107, 1)',
                'rgba(74, 165, 164)',
                'rgb(76, 69, 117)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(112, 198, 107, 1)',
                'rgba(74, 165, 164)',
                'rgb(76, 69, 117)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
    
        }]
    },
    options: {
        legend: {
          position: "right"
          },
          scales: {
            xAxes: [{
                display: false,
                gridLines: false
              }],
              yAxes: [{
                  display: false,
                  gridLines: false,
                  ticks: {
                      beginAtZero:true
                  }
              }]
          }
      }
  });
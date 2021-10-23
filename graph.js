//Global option 
// setup
const data = {
    labels:['Boston', 'Worcester', 'Springfield', 'Lowell', 'Campbridge', 'New Bedford'],
    datasets:[{
        label: 'Population',
        data: [
            617594,
            1811045,
            153060,
            106519,
            105162,
            95072
        ],
        borderColor: '#72ebba',
        tension: 0.5
    }]
};

// config
const config = {
    type: 'line',
    data,
    options: {
        scales: {
         y:{ticks:{
            color:'#4D1ED3'
         },
            beginAtZero: true,
            },
         x:{ticks:{
            color:'#4D1ED3'
            },
                beginAtZero: true,
         }

        }
    }
};

// init /render block
const myChart = new Chart(
    document.getElementById('tch-graph'),
    config
);

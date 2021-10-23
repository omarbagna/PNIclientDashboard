let tchChart = document.getElementById('tch-graph').getContext('2d');

let tchCongestion = new Chart(tchChart, {
    type: 'line',
    data: {
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
    },
    options: {
        layout:{
            height:500,
            width:800
        }
    }
});
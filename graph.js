Chart.defaults.font.size = 16;
Chart.defaults.color = '#4D1ED3';

// setup
const data = {
    labels:['Accra', 'Kumasi', 'Tamale', 'Wa', 'Cape Coast', 'Tema'],
    datasets:[{
        label: 'Sample Data',
        data: [
            6175,
            4811,
            8530,
            5065,
            3051,
            9507
        ],
        borderColor: '#72ebba',
        tension: 0.3
    }]
};


// TCH congestion config
const tchConfig = {
    type: 'line',
    data,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                },

            x: {
                beginAtZero: true,
                }
            }
        }
    };


// TCH congestion config
const sdcchConfig = {
    type: 'bar',
    data,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                },

            x: {
                beginAtZero: true,
                }
            }
        }
    };


// TCH congestion config
const callDropConfig = {
    type: 'line',
    data,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                },

            x: {
                beginAtZero: true,
                }
            }
        }
    };


// TCH congestion config
const callConnectConfig = {
    type: 'bar',
    data,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                },

            x: {
                beginAtZero: true,
                }
            }
        }
    };


// render tch graph
const tchChart = new Chart(
    document.getElementById('tch-graph'),
    tchConfig
    );

// render sdcch graph
const sdcchChart = new Chart(
    document.getElementById('sdcch-graph'),
    sdcchConfig
    );

// render call drop graph
const callDropChart = new Chart(
    document.getElementById('callDrop-graph'),
    callDropConfig
    );

// render call connection graph
const callConnectChart = new Chart(
    document.getElementById('callConnect-graph'),
    callConnectConfig
    );

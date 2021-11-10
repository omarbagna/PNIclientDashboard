Chart.defaults.font.size = 16;
Chart.defaults.color = '#4D1ED3';

// setup
const dataSDCCH = {
    labels:['HHOHHO', 'LUBOMBO', 'MANZINI', 'SHISELWENI'],
    datasets:[{
        label: 'SDCCH CONGESTION RATE',
        data: [
            0.142032,
            0.227501,
            0.200934,
            0.197348
        ],
        borderColor: '#72ebba',
        tension: 0.3
    }]
};

const dataTCH = {
    labels:['SDCCH CONGESTION', 'TCH CONGESTION', 'CALL DROP RATE', 'CALL CONNECTION SUCCESS RATE'],
    datasets:[{
        label: 'HHOHHO',
        data: [
            0.13,
            0.21,
            0.01,
            99.85
        ],
        borderColor: '#72ebba',
        backgroundColor: ['#ff2d2e', '#A3A3A3', '#ffcc00'],
        tension: 0.3
    }]
};

const dataCallDrop = {
    labels:['HHOHHO', 'LUBOMBO', 'MANZINI', 'SHISELWENI'],
    datasets:[{
        label: 'CALL DROP RATE',
        data: [
            0.133143,
            0.252976,
            0.220919,
            0.38988
        ],
        borderColor: '#72ebba',
        tension: 0.3
    }]
};

const dataCallConnect = {
    labels:['HHOHHO', 'LUBOMBO', 'MANZINI', 'SHISELWENI'],
    datasets:[{
        label: 'CALL CONNECTION SUCCESS RATE',
        data: [
            98.1761,
            89.6593,
            96.6578,
            97.0419
        ],
        borderColor: '#72ebba',
        tension: 0.3
    }]
};

const alarmsData = {
    labels:['SDCCH CONGESTION', 'DOWNTIME FOR RADIO ACCESS', 'CALL DROP RATE', 'CALL CONNECTION SUCCESS RATE'],
    datasets:[{
        data: [
            652,
            53,
            846,
            2470
        ],
        backgroundColor: ['#003f5c', '#7a5195', '#ef5675', '#ffa600'],
    }]
};

const degradationData = {
    labels:['CRTICAL', 'MAJOR', 'MINOR'],
    datasets:[{
        data: [
            27,
            58,
            15
        ],
        backgroundColor: ['#ff2d2e', '#A3A3A3', '#ffcc00'],
    }]
};


// TCH congestion config
const tchConfig = {
    type: 'line',
    data: dataTCH,
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
    type: 'line',
    data: dataSDCCH,
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
    data: dataCallDrop,
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
    type: 'line',
    data: dataCallConnect,
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


// Alarms Pie config
const alarmsConfig = {
    type: 'pie',
    data: alarmsData,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        }
    };

const degradationConfig = {
    type: 'pie',
    data: degradationData,
    options: {
        responsive: true,
        maintainAspectRatio: false,
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


// render alarms pie
const alarmsPieChart = new Chart(
    document.getElementById('alarms-pie'),
    alarmsConfig
    );


// render degradation pie
const degradationPieChart = new Chart(
    document.getElementById('degradation-pie'),
    degradationConfig
    );

// HIDE ALL DATA
document.getElementById('smaller_cards').style.display = 'none';
document.getElementById('regional-data').style.display = 'none';
document.getElementById('alarms-data').style.display = 'none';

// ACCESS THE TABLES ON THE PAGE
let table = document.getElementById("region-table");
let alarms = document.getElementById("alarms-table");


document.getElementById('geranBtn').addEventListener('click', load2gData)
document.getElementById('utranBtn').addEventListener('click', load3gData)
document.getElementById('lteBtn').addEventListener('click', load4gData)


var geran2gData = 
[
    ['HhoHho','0.13','0.21','0.01','99.85%'],
    ['Manzini','0.18','0.84','0.38','99.82%'],
    ['Shiselweni','0.57','0.01','3.02','99.29%'],
    ['Lubombo','2.81','0.45','0.82','99.02%']
]

var geran2gAlarms = 
[
    ['1','SDCCH CONGESTION','652'],
    ['2','DOWNTIME FOR RADIO ACCESS','53'],
    ['3','CALL DROP RATE','846'],
    ['4','CALL CONNECTION SUCCESS RATE','2470'],
]

var utran3gData = 
[
    ['HhoHho','0.20','99.47','99.05','0.30'],
    ['Manzini','0.29','99.03','98.42','0.49'],
    ['Shiselweni','0.45','99.51','99.26','0.39'],
    ['Lubombo','0.47','99.45','99.04','0.49']
]

var utran3gAlarms = 
[
    ['1','Voice Call Drop Rate','139'],
    ['2','Voice Call Connection Success Rate','1139'],
    ['3','Data Access Success Rate','884'],
    ['4','Data Drop Rate','14'],
]


var lte4gData = 
[
    ['HhoHho','99.58','0.29','18.99','1.85'],
    ['Lubombo','99.01','0.46','17.84','1.32'],
    ['Manzini','99.70','0.27','18.21','2.03'],
    ['Shiselweni','99.62','0.50','17.66','1.19']
]

var lte4gAlarms = 
[
    ['1','Data Service Access Success Rate','742'],
    ['2','Data Service Drop Rate','26'],
    ['3','DL speed','12'],
    ['4','Downtime for Radio Access','74'],
]



function load2gData(){
    // NATIONAL LEVEL CARD INFORMATION
    document.getElementById('smaller_cards').style.display = 'grid';

    document.getElementById('national-card-one-text').innerHTML = "TCH <br>CONGESTION"
    document.getElementById('national-card-one-number').innerHTML = "0.31"
    document.getElementById('national-card-two-text').innerHTML = "SDCCH <br>CONGESTION"
    document.getElementById('national-card-two-number').innerHTML = "0.22"
    document.getElementById('national-card-three-text').innerHTML = "CALL DROP <br>RATE"
    document.getElementById('national-card-three-number').innerHTML = "0.21"
    document.getElementById('national-card-four-text').innerHTML = "CALL CONNECTION <br>SUCCESS RATE"
    document.getElementById('national-card-four-number').innerHTML = "93.52"

    // REGIONAL DATA TABLE TITLES
    document.getElementById('regional-data').style.display = 'flex';

    document.getElementById('region-table-data-title').innerHTML = "GERAN 2G KPIs"
    document.getElementById('region-table-data-column1-title').innerHTML = "SDCCH <br>CONGESTION"
    document.getElementById('region-table-data-column2-title').innerHTML = "TCH <br>CONGESTION"
    document.getElementById('region-table-data-column3-title').innerHTML = "CALL DROP RATE"
    document.getElementById('region-table-data-column4-title').innerHTML = "CALL CONNECTION <br>SUCCESS RATE"

    // ALARMS TABLE DATA
    document.getElementById('alarms-data').style.display = 'flex';

    document.getElementById('alarms-table-data-title').innerHTML = "2G KPIs"
    document.getElementById('alarms-table-data-row1-text').innerHTML = geran2gAlarms[0][1]
    document.getElementById('alarms-table-data-row1-number').innerHTML = geran2gAlarms[0][2]
    document.getElementById('alarms-table-data-row2-text').innerHTML = geran2gAlarms[1][1]
    document.getElementById('alarms-table-data-row2-number').innerHTML = geran2gAlarms[1][2]
    document.getElementById('alarms-table-data-row3-text').innerHTML = geran2gAlarms[2][1]
    document.getElementById('alarms-table-data-row3-number').innerHTML = geran2gAlarms[2][2]
    document.getElementById('alarms-table-data-row4-text').innerHTML = geran2gAlarms[3][1]
    document.getElementById('alarms-table-data-row4-number').innerHTML = geran2gAlarms[3][2]

    document.getElementById('criticalPercentage').innerHTML = '27%'
    document.getElementById('minorPercentage').innerHTML = '58%'
    document.getElementById('majorPercentage').innerHTML = '15%'


    // REGIONAL DATA VALUES
    // rows
    for(var i = 1; i < table.rows.length; i++)
    {
        // cells
        for(var j = 0; j < table.rows[i].cells.length; j++)
        {
            table.rows[i].cells[j].innerHTML = geran2gData[i - 1][j];
        }
    };
    
    
}


function load3gData(){
    // NATIONAL LEVEL CARD INFORMATION
    document.getElementById('smaller_cards').style.display = 'grid';

    document.getElementById('national-card-one-text').innerHTML = "VOICE CALL <br>DROP RATE "
    document.getElementById('national-card-one-number').innerHTML = "0.26"
    document.getElementById('national-card-two-text').innerHTML = "VOICE CALL SETUP <br>SUCCESS RATE"
    document.getElementById('national-card-two-number').innerHTML = "98.27"
    document.getElementById('national-card-three-text').innerHTML = "DATA ACCESS <br>SUCCESS RATE"
    document.getElementById('national-card-three-number').innerHTML = "98.27"
    document.getElementById('national-card-four-text').innerHTML = "DATA <br>DROP RATE"
    document.getElementById('national-card-four-number').innerHTML = "0.43"


    // REGIONAL DATA TABLE TITLES
    document.getElementById('regional-data').style.display = 'flex';

    document.getElementById('region-table-data-title').innerHTML = "UTRAN 3G KPIs"
    document.getElementById('region-table-data-column1-title').innerHTML = "VOICE CALL<br>DROP RATE"
    document.getElementById('region-table-data-column2-title').innerHTML = "VOICE CALL CONNECTION<br>SUCCESS RATE"
    document.getElementById('region-table-data-column3-title').innerHTML = "DATA ACCESS<br>SUCCESS RATE"
    document.getElementById('region-table-data-column4-title').innerHTML = "DATA DROP RATE"
    

    // ALARMS TABLE DATA
    document.getElementById('alarms-data').style.display = 'flex';

    document.getElementById('alarms-table-data-title').innerHTML = "3G KPIs"
    document.getElementById('alarms-table-data-row1-text').innerHTML = utran3gAlarms[0][1]
    document.getElementById('alarms-table-data-row1-number').innerHTML = utran3gAlarms[0][2]
    document.getElementById('alarms-table-data-row2-text').innerHTML = utran3gAlarms[1][1]
    document.getElementById('alarms-table-data-row2-number').innerHTML = utran3gAlarms[1][2]
    document.getElementById('alarms-table-data-row3-text').innerHTML = utran3gAlarms[2][1]
    document.getElementById('alarms-table-data-row3-number').innerHTML = utran3gAlarms[2][2]
    document.getElementById('alarms-table-data-row4-text').innerHTML = utran3gAlarms[3][1]
    document.getElementById('alarms-table-data-row4-number').innerHTML = utran3gAlarms[3][2]

    document.getElementById('criticalPercentage').innerHTML = '37%'
    document.getElementById('minorPercentage').innerHTML = '38%'
    document.getElementById('majorPercentage').innerHTML = '25%'


    // REGIONAL DATA VALUES
    // rows
    for(var i = 1; i < table.rows.length; i++)
    {
        // cells
        for(var j = 0; j < table.rows[i].cells.length; j++)
        {
            table.rows[i].cells[j].innerHTML = utran3gData[i - 1][j];
        }
    }
}


function load4gData(){
    // NATIONAL LEVEL CARD INFORMATION
    document.getElementById('smaller_cards').style.display = 'grid';

    document.getElementById('national-card-one-text').innerHTML = "DATA SERVICE ACCESS <br>SUCCESS RATE"
    document.getElementById('national-card-one-number').innerHTML = "99.56"
    document.getElementById('national-card-two-text').innerHTML = "DATA SERVICE <br>DROP RATE"
    document.getElementById('national-card-two-number').innerHTML = "0.34"
    document.getElementById('national-card-three-text').innerHTML = "DATA DL <br>THROUGHPUT"
    document.getElementById('national-card-three-number').innerHTML = "18.25"
    document.getElementById('national-card-four-text').innerHTML = "DATA UL <br>THROUGHPUT"
    document.getElementById('national-card-four-number').innerHTML = "1.83"


    // REGIONAL DATA TABLE TITLES
    document.getElementById('regional-data').style.display = 'flex';
    
    document.getElementById('region-table-data-title').innerHTML = "LTE 4G KPIs"
    document.getElementById('region-table-data-column1-title').innerHTML = "DATA SERVICE ACCESS <br>SUCCESS RATE"
    document.getElementById('region-table-data-column2-title').innerHTML = "DATA SERVICE <br>DROP RATE"
    document.getElementById('region-table-data-column3-title').innerHTML = "DATA DL THROUGHPUT"
    document.getElementById('region-table-data-column4-title').innerHTML = "DATA UL THROUGHPUT"
    

    // ALARMS TABLE DATA
    document.getElementById('alarms-data').style.display = 'flex';

    document.getElementById('alarms-table-data-title').innerHTML = "4G KPIs"
    document.getElementById('alarms-table-data-row1-text').innerHTML = lte4gAlarms[0][1]
    document.getElementById('alarms-table-data-row1-number').innerHTML = lte4gAlarms[0][2]
    document.getElementById('alarms-table-data-row2-text').innerHTML = lte4gAlarms[1][1]
    document.getElementById('alarms-table-data-row2-number').innerHTML = lte4gAlarms[1][2]
    document.getElementById('alarms-table-data-row3-text').innerHTML = lte4gAlarms[2][1]
    document.getElementById('alarms-table-data-row3-number').innerHTML = lte4gAlarms[2][2]
    document.getElementById('alarms-table-data-row4-text').innerHTML = lte4gAlarms[3][1]
    document.getElementById('alarms-table-data-row4-number').innerHTML = lte4gAlarms[3][2]

    document.getElementById('criticalPercentage').innerHTML = '15%'
    document.getElementById('minorPercentage').innerHTML = '40%'
    document.getElementById('majorPercentage').innerHTML = '45%'

    // REGIONAL DATA VALUES
    // rows
    for(var i = 1; i < table.rows.length; i++)
    {
        // cells
        for(var j = 0; j < table.rows[i].cells.length; j++)
        {
            table.rows[i].cells[j].innerHTML = lte4gData[i - 1][j];
        }
    }
}
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
    ['HhoHho','0.15','0.31','0.21','98.85%'],
    ['Manzini','0.89','0.39','0.68','97.82%'],
    ['Shiselweni','0.77','0.51','3.72','96.29%'],
    ['Lubombo','3.71','0.65','0.92','95.02%']
]

var geran2gAlarms = 
[
    ['1','SDCCH CONGESTION','782'],
    ['2','DOWNTIME FOR RADIO ACCESS','73'],
    ['3','CALL DROP RATE','685'],
    ['4','CALL CONNECTION SUCCESS RATE','4652'],
]

var utran3gData = 
[
    ['HhoHho','0.64','92.47','99.21','0.65'],
    ['Manzini','0.31','98.23','99.42','0.41'],
    ['Shiselweni','0.68','93.51','93.26','0.12'],
    ['Lubombo','0.23','88.45','99.61','0.35']
]

var utran3gAlarms = 
[
    ['1','Voice Call Drop Rate','412'],
    ['2','Voice Call Connection Success Rate','5424'],
    ['3','Data Access Success Rate','785'],
    ['4','Data Drop Rate','72'],
]


var lte4gData = 
[
    ['HhoHho','99.35','0.13','16.99','3.85'],
    ['Lubombo','99.86','0.13','10.41','2.22'],
    ['Manzini','91.13','0.32','18.13','4.30'],
    ['Shiselweni','90.62','0.16','19.94','1.21']
]

var lte4gAlarms = 
[
    ['1','Data Service Access Success Rate','2404'],
    ['2','Data Service Drop Rate','45'],
    ['3','DL speed','21'],
    ['4','Downtime for Radio Access','56'],
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
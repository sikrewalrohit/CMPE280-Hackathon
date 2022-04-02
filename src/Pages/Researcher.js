import React from 'react'
import Sidebar from '../Sidebar/sidebar.js';
import Navbar from '../Navbar/navbar.js';
import { Slider } from '@mui/material';
import { useState, useEffect } from "react";
import Typography from '@mui/material/Typography';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { FaGem } from "react-icons/fa";
import { FcComboChart, FcGlobe, FcLeftDown} from "react-icons/fc";
import { Chart } from "react-google-charts";


function valuetext(value) {
    return `${value}`;
}



const Researcher = () => {

    const [value, setValue] = useState([1960, 2020]);
    const [gdp, setGdp] = useState();

    

const handleChange = (e, value) => {
    setValue(value);
    // console.log(value);
}

useEffect(() => {
    const gdpUsd = {
      data: [
          {
            "Year": 1960,
            "GDP (current US$) India": 37029883875,
            "GDP (current US$) China": 59716467625,
            "GDP (current US$) USA": 543300000000
          },
          {
            "Year": 1961,
            "GDP (current US$) India": 39232435784,
            "GDP (current US$) China": 50056868958,
            "GDP (current US$) USA": 563300000000
          },
          {
            "Year": 1962,
            "GDP (current US$) India": 42161481859,
            "GDP (current US$) China": 47209359006,
            "GDP (current US$) USA": 605100000000
          },
          {
            "Year": 1963,
            "GDP (current US$) India": 48421923459,
            "GDP (current US$) China": 50706799903,
            "GDP (current US$) USA": 638600000000
          },
          {
            "Year": 1964,
            "GDP (current US$) India": 56480289941,
            "GDP (current US$) China": 59708343489,
            "GDP (current US$) USA": 685800000000
          },
          {
            "Year": 1965,
            "GDP (current US$) India": 59554854575,
            "GDP (current US$) China": 70436266147,
            "GDP (current US$) USA": 743700000000
          },
          {
            "Year": 1966,
            "GDP (current US$) India": 45865462034,
            "GDP (current US$) China": 76720285970,
            "GDP (current US$) USA": 815000000000
          },
          {
            "Year": 1967,
            "GDP (current US$) India": 50134942203,
            "GDP (current US$) China": 72881631327,
            "GDP (current US$) USA": 861700000000
          },
          {
            "Year": 1968,
            "GDP (current US$) India": 53085455871,
            "GDP (current US$) China": 70846535056,
            "GDP (current US$) USA": 942500000000
          },
          {
            "Year": 1969,
            "GDP (current US$) India": 58447995017,
            "GDP (current US$) China": 79705906247,
            "GDP (current US$) USA": 1019900000000
          },
          {
            "Year": 1970,
            "GDP (current US$) India": 62422483055,
            "GDP (current US$) China": 92602973434,
            "GDP (current US$) USA": 1073300000000
          },
          {
            "Year": 1971,
            "GDP (current US$) India": 67350988021,
            "GDP (current US$) China": 99800958648,
            "GDP (current US$) USA": 1164850000000
          },
          {
            "Year": 1972,
            "GDP (current US$) India": 71463193830,
            "GDP (current US$) China": 113688000000,
            "GDP (current US$) USA": 1279110000000
          },
          {
            "Year": 1973,
            "GDP (current US$) India": 85515269586,
            "GDP (current US$) China": 138544000000,
            "GDP (current US$) USA": 1425380000000
          },
          {
            "Year": 1974,
            "GDP (current US$) India": 99525899116,
            "GDP (current US$) China": 144182000000,
            "GDP (current US$) USA": 1545240000000
          },
          {
            "Year": 1975,
            "GDP (current US$) India": 98472796457,
            "GDP (current US$) China": 163432000000,
            "GDP (current US$) USA": 1684900000000
          },
          {
            "Year": 1976,
            "GDP (current US$) India": 102717000000,
            "GDP (current US$) China": 153940000000,
            "GDP (current US$) USA": 1873410000000
          },
          {
            "Year": 1977,
            "GDP (current US$) India": 121487000000,
            "GDP (current US$) China": 174938000000,
            "GDP (current US$) USA": 2081830000000
          },
          {
            "Year": 1978,
            "GDP (current US$) India": 137300000000,
            "GDP (current US$) China": 149541000000,
            "GDP (current US$) USA": 2351600000000
          },
          {
            "Year": 1979,
            "GDP (current US$) India": 152992000000,
            "GDP (current US$) China": 178281000000,
            "GDP (current US$) USA": 2627330000000
          },
          {
            "Year": 1980,
            "GDP (current US$) India": 186325000000,
            "GDP (current US$) China": 191149000000,
            "GDP (current US$) USA": 2857310000000
          },
          {
            "Year": 1981,
            "GDP (current US$) India": 193491000000,
            "GDP (current US$) China": 195866000000,
            "GDP (current US$) USA": 3207040000000
          },
          {
            "Year": 1982,
            "GDP (current US$) India": 200715000000,
            "GDP (current US$) China": 205090000000,
            "GDP (current US$) USA": 3343790000000
          },
          {
            "Year": 1983,
            "GDP (current US$) India": 218262000000,
            "GDP (current US$) China": 230687000000,
            "GDP (current US$) USA": 3634040000000
          },
          {
            "Year": 1984,
            "GDP (current US$) India": 212158000000,
            "GDP (current US$) China": 259947000000,
            "GDP (current US$) USA": 4037610000000
          },
          {
            "Year": 1985,
            "GDP (current US$) India": 232512000000,
            "GDP (current US$) China": 309488000000,
            "GDP (current US$) USA": 4338980000000
          },
          {
            "Year": 1986,
            "GDP (current US$) India": 248986000000,
            "GDP (current US$) China": 300758000000,
            "GDP (current US$) USA": 4579630000000
          },
          {
            "Year": 1987,
            "GDP (current US$) India": 279034000000,
            "GDP (current US$) China": 272973000000,
            "GDP (current US$) USA": 4855220000000
          },
          {
            "Year": 1988,
            "GDP (current US$) India": 296589000000,
            "GDP (current US$) China": 312354000000,
            "GDP (current US$) USA": 5236440000000
          },
          {
            "Year": 1989,
            "GDP (current US$) India": 296042000000,
            "GDP (current US$) China": 347768000000,
            "GDP (current US$) USA": 5641580000000
          },
          {
            "Year": 1990,
            "GDP (current US$) India": 320979000000,
            "GDP (current US$) China": 360858000000,
            "GDP (current US$) USA": 5963140000000
          },
          {
            "Year": 1991,
            "GDP (current US$) India": 270105000000,
            "GDP (current US$) China": 383373000000,
            "GDP (current US$) USA": 6158130000000
          },
          {
            "Year": 1992,
            "GDP (current US$) India": 288208000000,
            "GDP (current US$) China": 426916000000,
            "GDP (current US$) USA": 6520330000000
          },
          {
            "Year": 1993,
            "GDP (current US$) India": 279296000000,
            "GDP (current US$) China": 444731000000,
            "GDP (current US$) USA": 6858560000000
          },
          {
            "Year": 1994,
            "GDP (current US$) India": 327276000000,
            "GDP (current US$) China": 564325000000,
            "GDP (current US$) USA": 7287240000000
          },
          {
            "Year": 1995,
            "GDP (current US$) India": 360282000000,
            "GDP (current US$) China": 734548000000,
            "GDP (current US$) USA": 7639750000000
          },
          {
            "Year": 1996,
            "GDP (current US$) India": 392897000000,
            "GDP (current US$) China": 863747000000,
            "GDP (current US$) USA": 8073120000000
          },
          {
            "Year": 1997,
            "GDP (current US$) India": 415868000000,
            "GDP (current US$) China": 961604000000,
            "GDP (current US$) USA": 8577550000000
          },
          {
            "Year": 1998,
            "GDP (current US$) India": 421351000000,
            "GDP (current US$) China": 1029040000000,
            "GDP (current US$) USA": 9062820000000
          },
          {
            "Year": 1999,
            "GDP (current US$) India": 458820000000,
            "GDP (current US$) China": 1094000000000,
            "GDP (current US$) USA": 9630660000000
          },
          {
            "Year": 2000,
            "GDP (current US$) India": 468395000000,
            "GDP (current US$) China": 1211350000000,
            "GDP (current US$) USA": 10252300000000
          },
          {
            "Year": 2001,
            "GDP (current US$) India": 485441000000,
            "GDP (current US$) China": 1339400000000,
            "GDP (current US$) USA": 10581800000000
          },
          {
            "Year": 2002,
            "GDP (current US$) India": 514938000000,
            "GDP (current US$) China": 1470550000000,
            "GDP (current US$) USA": 10936400000000
          },
          {
            "Year": 2003,
            "GDP (current US$) India": 607699000000,
            "GDP (current US$) China": 1660290000000,
            "GDP (current US$) USA": 11458200000000
          },
          {
            "Year": 2004,
            "GDP (current US$) India": 709149000000,
            "GDP (current US$) China": 1955350000000,
            "GDP (current US$) USA": 12213700000000
          },
          {
            "Year": 2005,
            "GDP (current US$) India": 820382000000,
            "GDP (current US$) China": 2285970000000,
            "GDP (current US$) USA": 13036600000000
          },
          {
            "Year": 2006,
            "GDP (current US$) India": 940260000000,
            "GDP (current US$) China": 2752130000000,
            "GDP (current US$) USA": 13814600000000
          },
          {
            "Year": 2007,
            "GDP (current US$) India": 1216740000000,
            "GDP (current US$) China": 3550340000000,
            "GDP (current US$) USA": 14451900000000
          },
          {
            "Year": 2008,
            "GDP (current US$) India": 1198900000000,
            "GDP (current US$) China": 4594310000000,
            "GDP (current US$) USA": 14712800000000
          },
          {
            "Year": 2009,
            "GDP (current US$) India": 1341890000000,
            "GDP (current US$) China": 5101700000000,
            "GDP (current US$) USA": 14448900000000
          },
          {
            "Year": 2010,
            "GDP (current US$) India": 1675620000000,
            "GDP (current US$) China": 6087160000000,
            "GDP (current US$) USA": 14992100000000
          },
          {
            "Year": 2011,
            "GDP (current US$) India": 1823050000000,
            "GDP (current US$) China": 7551500000000,
            "GDP (current US$) USA": 15542600000000
          },
          {
            "Year": 2012,
            "GDP (current US$) India": 1827640000000,
            "GDP (current US$) China": 8532230000000,
            "GDP (current US$) USA": 16197000000000
          },
          {
            "Year": 2013,
            "GDP (current US$) India": 1856720000000,
            "GDP (current US$) China": 9570410000000,
            "GDP (current US$) USA": 16784800000000
          },
          {
            "Year": 2014,
            "GDP (current US$) India": 2039130000000,
            "GDP (current US$) China": 10475700000000,
            "GDP (current US$) USA": 17527200000000
          },
          {
            "Year": 2015,
            "GDP (current US$) India": 2103590000000,
            "GDP (current US$) China": 11061600000000,
            "GDP (current US$) USA": 18238300000000
          },
          {
            "Year": 2016,
            "GDP (current US$) India": 2294800000000,
            "GDP (current US$) China": 11233300000000,
            "GDP (current US$) USA": 18745100000000
          },
          {
            "Year": 2017,
            "GDP (current US$) India": 2651470000000,
            "GDP (current US$) China": 12310400000000,
            "GDP (current US$) USA": 19543000000000
          },
          {
            "Year": 2018,
            "GDP (current US$) India": 2701110000000,
            "GDP (current US$) China": 13894800000000,
            "GDP (current US$) USA": 20611900000000
          },
          {
            "Year": 2019,
            "GDP (current US$) India": 2870500000000,
            "GDP (current US$) China": 14279900000000,
            "GDP (current US$) USA": 21433200000000
          },
          {
            "Year": 2020,
            "GDP (current US$) India": 2622980000000,
            "GDP (current US$) China": 14722700000000,
            "GDP (current US$) USA": 20936600000000
          }
        ]
  }

  var result = [['Year', "GDP (current US$) India", "GDP (current US$) China",  "GDP (current US$) USA"]];

  for (let i in gdpUsd.data){
    result.push([]);
    for (let j in gdpUsd.data[i]){
      result[result.length - 1].push(gdpUsd.data[i][j])
    }
  }

  setGdp(result);
}, []);
  return (
    <>
        <Navbar/>
        <div class="row">
            <div class="col-md-4">

                <ProSidebar>
                    <Menu iconShape="square">
                        <MenuItem icon={<FaGem />}>Dashboard</MenuItem>

                            <SubMenu title="Macroeconomic(USD)" icon={<FcComboChart />}>
                                <MenuItem draggable="true" >GDP (USD)</MenuItem>
                                <MenuItem draggable="true">FDI Inflows (USD)</MenuItem>
                                <MenuItem draggable="true">FDI Outflows (USD)</MenuItem>
                                <MenuItem draggable="true">Import/Export Flow</MenuItem>
                            </SubMenu>

                            <SubMenu title="Agriculture" icon={<FcGlobe />}>
                                <MenuItem draggable="true">Contribution of Agri (%GDP)</MenuItem>
                                <MenuItem draggable="true">Credit</MenuItem>
                                <MenuItem draggable="true">Fertilizers</MenuItem>
                                <MenuItem draggable="true">Fertilizers PROD</MenuItem>
                            </SubMenu>

                            <SubMenu title="Dept Services" icon={<FcLeftDown />}>
                                <MenuItem draggable="true">Reserves</MenuItem>
                                <MenuItem draggable="true">GNI</MenuItem>
                                <MenuItem draggable="true">Total Debt(%)</MenuItem>
                            </SubMenu>
                    </Menu>
                </ProSidebar>
            
            </div>
            <div class="col-md-8">
                <Typography id="input-slider" gutterBottom>
                    <h4>Select Year Range</h4>
                </Typography>
                <Slider
                    getAriaLabel={() => 'Year range'}
                    value={value}
                    min={1960}
                    step={1}
                    max={2020}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    color="secondary"
                    aria-label="Select Year Range"
                    getAriaValueText={valuetext}
                    sx={{ width: 600 }}
                />
                  <Chart
                    chartType="LineChart"
                    data={gdp}
            
                    width="100%"
                    height="400px"
                    legendToggle
                />

                <div id="target">
                    <canvas id="lineChart" width="1500" height="700">
                    </canvas>
                </div>
            </div>
        </div>
    </>
  )
}

export default Researcher
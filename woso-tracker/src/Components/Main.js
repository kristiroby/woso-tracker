import React, { useState, useEffect } from 'react';
import Table from './Table'
import WomensTable from './WomensTable'

// reusable table that can receive data to populate list

export default function Main(props) {
    const [table, setTable] = useState(['individual']);
    const [tableName, setTableName] = useState(["Women's and Men's Standings"])
    const [buttonText, setButtonText] = useState(["Show Combined Table"])
    const [mensData, setMensData] = useState(null);
    const mensStandings = []
    useEffect(() => {
        getMensData()
    }, [])
    const getMensData = async () => {
        await fetch('https://api-football-v1.p.rapidapi.com/v3/standings?season=2022&league=39', {
        "headers": {
                "method": "GET",
                "x-rapidapi-key": `${process.env.REACT_APP_API_KEY}`
            }    
        })
        .then(response => response.json())
        .then(response => setMensData(response.response[0].league))
    //  .then(response => console.log(response.response[0].league))
        .catch(err => console.error(err));
    }

    mensData && mensData.standings[0].map(team => 
        mensStandings.push({
            id: team.team.id,
            name: team.team.name,
            points: team.points
        })
    )

    const [womensData, setWomensData] = useState(null);
    useEffect(() => {
        getWomensData()
    }, [])

    const getWomensData = async () => {
        await fetch('https://api-football-v1.p.rapidapi.com/v3/standings?season=2022&league=44', {
        "headers": {
             "method": "GET",
             "x-rapidapi-key": `${process.env.REACT_APP_API_KEY}`
            }    
        })
     .then(response => response.json())
     .then(response => setWomensData(response.response[0].league))
    //  .then(response => console.log(response.response[0].league))
     .catch(err => console.error(err));
    }

    const womensStandings = []
    womensData && womensData.standings[0].map(team => 
        womensStandings.push({
            id: team.team.id,
            name: team.team.name,
            points: team.points
        })
    )

    const combinedStandings = []
    for (let i = 0; i < womensStandings.length; i++) {
        for (let j = 0; j < mensStandings.length; j++) {
            if (womensStandings[i].name.includes(mensStandings[j].name)) {
                combinedStandings.push({
                    name: mensStandings[j].name,
                    points: mensStandings[j].points + womensStandings[i].points,
                })
            }
        }
    }
    const sortedStandings = combinedStandings.sort((a,b) => b.points-a.points)

    const handleClick = () => {
        tableName == "Combined Standings" ? setTableName("Women's and Men's Standings") : setTableName("Combined Standings")
        buttonText == "Show Women's and Men's Tables" ? setButtonText("Show Combined Table") : setButtonText("Show Women's and Men's Tables")
        table == 'combined' ? setTable("individual")  : setTable("combined")
    }
    return (
        <div>
            <h3>{tableName}</h3>
            <button onClick={handleClick}>{buttonText}</button>
            <div>
                {table == 'combined'
                    ? <Table standings={combinedStandings}/>
                    : <div > 
                        <div style={{display: 'inline-block'}}>
                            <h4>Men's Table</h4>
                            <Table standings={mensStandings}/>
                        </div>
                        <div style={{display: 'inline-block'}}>
                            <h4>Women's Table</h4>
                            <Table standings={womensStandings}/>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}
  

// wsl id = 44
// nwsl = 254
// msl = 253
// epl = 39
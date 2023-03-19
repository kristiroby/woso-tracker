import React, { useState, useEffect, Fragment } from 'react';

export default function WomensTable() {
    const [table, setTable] = useState([]);
    // useEffect(() => {
    //     getData()
    // }, [])
    // const getData = async () => {
    //     await fetch('https://api-football-v1.p.rapidapi.com/v3/standings?season=2022&league=44', {
    //     "headers": {
    //          "method": "GET",
    //          "x-rapidapi-key": `${process.env.REACT_APP_API_KEY}`
    //         }    
    //     })
    //  .then(response => response.json())
    // //  .then(response => setTable(response.response[0].league))
    //  .then(response => console.log(response.response[0].league))
    //  .catch(err => console.error(err));
    // }
    const womensStandings = {
        "id": 44,
        "name": "FA WSL",
        "country": "England",
        "logo": "https://media.api-sports.io/football/leagues/44.png",
        "flag": "https://media.api-sports.io/flags/gb.svg",
        "season": 2022,
        "standings": [
            [
                {
                    "rank": 1,
                    "team": {
                        "id": 4898,
                        "name": "Manchester United W",
                        "logo": "https://media-3.api-sports.io/football/teams/4898.png"
                    },
                    "points": 32,
                    "goalsDiff": 26,
                    "group": "FA WSL",
                    "form": "WDWWD",
                    "status": "same",
                    "description": null,
                    "all": {
                        "played": 13,
                        "win": 10,
                        "draw": 2,
                        "lose": 1,
                        "goals": {
                            "for": 33,
                            "against": 7
                        }
                    },
                    "home": {
                        "played": 6,
                        "win": 4,
                        "draw": 1,
                        "lose": 1,
                        "goals": {
                            "for": 20,
                            "against": 3
                        }
                    },
                    "away": {
                        "played": 7,
                        "win": 6,
                        "draw": 1,
                        "lose": 0,
                        "goals": {
                            "for": 13,
                            "against": 4
                        }
                    },
                    "update": "2023-02-13T00:00:00+00:00"
                },
                {
                    "rank": 2,
                    "team": {
                        "id": 1853,
                        "name": "Chelsea W",
                        "logo": "https://media.api-sports.io/football/teams/1853.png"
                    },
                    "points": 31,
                    "goalsDiff": 24,
                    "group": "FA WSL",
                    "form": "WDWW",
                    "status": "same",
                    "description": null,
                    "all": {
                        "played": 12,
                        "win": 10,
                        "draw": 1,
                        "lose": 1,
                        "goals": {
                            "for": 35,
                            "against": 11
                        }
                    },
                    "home": {
                        "played": 5,
                        "win": 5,
                        "draw": 0,
                        "lose": 0,
                        "goals": {
                            "for": 14,
                            "against": 4
                        }
                    },
                    "away": {
                        "played": 7,
                        "win": 5,
                        "draw": 1,
                        "lose": 1,
                        "goals": {
                            "for": 21,
                            "against": 7
                        }
                    },
                    "update": "2023-02-13T00:00:00+00:00"
                },
                {
                    "rank": 3,
                    "team": {
                        "id": 1854,
                        "name": "Manchester City W",
                        "logo": "https://media.api-sports.io/football/teams/1854.png"
                    },
                    "points": 29,
                    "goalsDiff": 15,
                    "group": "FA WSL",
                    "form": "WWDWD",
                    "status": "same",
                    "description": null,
                    "all": {
                        "played": 13,
                        "win": 9,
                        "draw": 2,
                        "lose": 2,
                        "goals": {
                            "for": 27,
                            "against": 12
                        }
                    },
                    "home": {
                        "played": 6,
                        "win": 4,
                        "draw": 2,
                        "lose": 0,
                        "goals": {
                            "for": 13,
                            "against": 5
                        }
                    },
                    "away": {
                        "played": 7,
                        "win": 5,
                        "draw": 0,
                        "lose": 2,
                        "goals": {
                            "for": 14,
                            "against": 7
                        }
                    },
                    "update": "2023-02-13T00:00:00+00:00"
                },
                {
                    "rank": 4,
                    "team": {
                        "id": 1850,
                        "name": "Arsenal W",
                        "logo": "https://media.api-sports.io/football/teams/1850.png"
                    },
                    "points": 26,
                    "goalsDiff": 19,
                    "group": "FA WSL",
                    "form": "LDDWW",
                    "status": "same",
                    "description": null,
                    "all": {
                        "played": 12,
                        "win": 8,
                        "draw": 2,
                        "lose": 2,
                        "goals": {
                            "for": 27,
                            "against": 8
                        }
                    },
                    "home": {
                        "played": 6,
                        "win": 4,
                        "draw": 1,
                        "lose": 1,
                        "goals": {
                            "for": 15,
                            "against": 5
                        }
                    },
                    "away": {
                        "played": 6,
                        "win": 4,
                        "draw": 1,
                        "lose": 1,
                        "goals": {
                            "for": 12,
                            "against": 3
                        }
                    },
                    "update": "2023-02-13T00:00:00+00:00"
                },
                {
                    "rank": 5,
                    "team": {
                        "id": 14219,
                        "name": "Aston Villa W",
                        "logo": "https://media-3.api-sports.io/football/teams/14219.png"
                    },
                    "points": 20,
                    "goalsDiff": -1,
                    "group": "FA WSL",
                    "form": "WDDWL",
                    "status": "same",
                    "description": null,
                    "all": {
                        "played": 13,
                        "win": 6,
                        "draw": 2,
                        "lose": 5,
                        "goals": {
                            "for": 23,
                            "against": 24
                        }
                    },
                    "home": {
                        "played": 7,
                        "win": 3,
                        "draw": 1,
                        "lose": 3,
                        "goals": {
                            "for": 12,
                            "against": 13
                        }
                    },
                    "away": {
                        "played": 6,
                        "win": 3,
                        "draw": 1,
                        "lose": 2,
                        "goals": {
                            "for": 11,
                            "against": 11
                        }
                    },
                    "update": "2023-02-13T00:00:00+00:00"
                },
                {
                    "rank": 6,
                    "team": {
                        "id": 1855,
                        "name": "Everton W",
                        "logo": "https://media.api-sports.io/football/teams/1855.png"
                    },
                    "points": 19,
                    "goalsDiff": 4,
                    "group": "FA WSL",
                    "form": "DWWWL",
                    "status": "same",
                    "description": null,
                    "all": {
                        "played": 12,
                        "win": 6,
                        "draw": 1,
                        "lose": 5,
                        "goals": {
                            "for": 16,
                            "against": 12
                        }
                    },
                    "home": {
                        "played": 6,
                        "win": 3,
                        "draw": 0,
                        "lose": 3,
                        "goals": {
                            "for": 9,
                            "against": 10
                        }
                    },
                    "away": {
                        "played": 6,
                        "win": 3,
                        "draw": 1,
                        "lose": 2,
                        "goals": {
                            "for": 7,
                            "against": 2
                        }
                    },
                    "update": "2023-02-13T00:00:00+00:00"
                },
                {
                    "rank": 7,
                    "team": {
                        "id": 1856,
                        "name": "West Ham W",
                        "logo": "https://media.api-sports.io/football/teams/1856.png"
                    },
                    "points": 16,
                    "goalsDiff": -7,
                    "group": "FA WSL",
                    "form": "DLLWL",
                    "status": "same",
                    "description": null,
                    "all": {
                        "played": 13,
                        "win": 5,
                        "draw": 1,
                        "lose": 7,
                        "goals": {
                            "for": 15,
                            "against": 22
                        }
                    },
                    "home": {
                        "played": 7,
                        "win": 3,
                        "draw": 1,
                        "lose": 3,
                        "goals": {
                            "for": 9,
                            "against": 10
                        }
                    },
                    "away": {
                        "played": 6,
                        "win": 2,
                        "draw": 0,
                        "lose": 4,
                        "goals": {
                            "for": 6,
                            "against": 12
                        }
                    },
                    "update": "2023-02-13T00:00:00+00:00"
                },
                {
                    "rank": 8,
                    "team": {
                        "id": 1847,
                        "name": "Liverpool W",
                        "logo": "https://media-3.api-sports.io/football/teams/1847.png"
                    },
                    "points": 11,
                    "goalsDiff": -10,
                    "group": "FA WSL",
                    "form": "LWLW",
                    "status": "same",
                    "description": null,
                    "all": {
                        "played": 12,
                        "win": 3,
                        "draw": 2,
                        "lose": 7,
                        "goals": {
                            "for": 13,
                            "against": 23
                        }
                    },
                    "home": {
                        "played": 7,
                        "win": 3,
                        "draw": 0,
                        "lose": 4,
                        "goals": {
                            "for": 6,
                            "against": 8
                        }
                    },
                    "away": {
                        "played": 5,
                        "win": 0,
                        "draw": 2,
                        "lose": 3,
                        "goals": {
                            "for": 7,
                            "against": 15
                        }
                    },
                    "update": "2023-02-13T00:00:00+00:00"
                },
                {
                    "rank": 9,
                    "team": {
                        "id": 4899,
                        "name": "Tottenham Hotspur W",
                        "logo": "https://media-3.api-sports.io/football/teams/4899.png"
                    },
                    "points": 9,
                    "goalsDiff": -9,
                    "group": "FA WSL",
                    "form": "LLLLL",
                    "status": "same",
                    "description": null,
                    "all": {
                        "played": 12,
                        "win": 3,
                        "draw": 0,
                        "lose": 9,
                        "goals": {
                            "for": 15,
                            "against": 24
                        }
                    },
                    "home": {
                        "played": 6,
                        "win": 1,
                        "draw": 0,
                        "lose": 5,
                        "goals": {
                            "for": 4,
                            "against": 13
                        }
                    },
                    "away": {
                        "played": 6,
                        "win": 2,
                        "draw": 0,
                        "lose": 4,
                        "goals": {
                            "for": 11,
                            "against": 11
                        }
                    },
                    "update": "2023-02-13T00:00:00+00:00"
                },
                {
                    "rank": 10,
                    "team": {
                        "id": 1857,
                        "name": "Brighton W",
                        "logo": "https://media.api-sports.io/football/teams/1857.png"
                    },
                    "points": 8,
                    "goalsDiff": -25,
                    "group": "FA WSL",
                    "form": "LDLLD",
                    "status": "same",
                    "description": null,
                    "all": {
                        "played": 11,
                        "win": 2,
                        "draw": 2,
                        "lose": 7,
                        "goals": {
                            "for": 14,
                            "against": 39
                        }
                    },
                    "home": {
                        "played": 5,
                        "win": 1,
                        "draw": 1,
                        "lose": 3,
                        "goals": {
                            "for": 7,
                            "against": 20
                        }
                    },
                    "away": {
                        "played": 6,
                        "win": 1,
                        "draw": 1,
                        "lose": 4,
                        "goals": {
                            "for": 7,
                            "against": 19
                        }
                    },
                    "update": "2023-02-13T00:00:00+00:00"
                },
                {
                    "rank": 11,
                    "team": {
                        "id": 1852,
                        "name": "Reading W",
                        "logo": "https://media.api-sports.io/football/teams/1852.png"
                    },
                    "points": 7,
                    "goalsDiff": -15,
                    "group": "FA WSL",
                    "form": "LLLLW",
                    "status": "same",
                    "description": null,
                    "all": {
                        "played": 13,
                        "win": 2,
                        "draw": 1,
                        "lose": 10,
                        "goals": {
                            "for": 14,
                            "against": 29
                        }
                    },
                    "home": {
                        "played": 6,
                        "win": 2,
                        "draw": 1,
                        "lose": 3,
                        "goals": {
                            "for": 6,
                            "against": 9
                        }
                    },
                    "away": {
                        "played": 7,
                        "win": 0,
                        "draw": 0,
                        "lose": 7,
                        "goals": {
                            "for": 8,
                            "against": 20
                        }
                    },
                    "update": "2023-02-13T00:00:00+00:00"
                },
                {
                    "rank": 12,
                    "team": {
                        "id": 15404,
                        "name": "Leicester City WFC",
                        "logo": "https://media.api-sports.io/football/teams/15404.png"
                    },
                    "points": 6,
                    "goalsDiff": -21,
                    "group": "FA WSL",
                    "form": "WLWLL",
                    "status": "same",
                    "description": null,
                    "all": {
                        "played": 12,
                        "win": 2,
                        "draw": 0,
                        "lose": 10,
                        "goals": {
                            "for": 6,
                            "against": 27
                        }
                    },
                    "home": {
                        "played": 7,
                        "win": 1,
                        "draw": 0,
                        "lose": 6,
                        "goals": {
                            "for": 4,
                            "against": 19
                        }
                    },
                    "away": {
                        "played": 5,
                        "win": 1,
                        "draw": 0,
                        "lose": 4,
                        "goals": {
                            "for": 2,
                            "against": 8
                        }
                    },
                    "update": "2023-02-13T00:00:00+00:00"
                }
            ]
        ]
    }

    const names = womensStandings.standings[0].map(team => 
        <li 
            key={team.team.id}
        >
            {team.team.name}: &nbsp; 
            {team.points}
            {/* <img src={team.team.logo}></img> */}
        </li>
    )

    return (
        <div>
            <h3>{table.name}</h3>
            {/* <img src={table.logo} /> */}
            <ol>{names}</ol>
        </div>
    )
}
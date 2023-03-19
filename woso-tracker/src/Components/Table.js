import React, { useState, useEffect, Fragment } from 'react';
import CombinedTable from './CombinedTable'
import WomensTable from './WomensTable'
import MensTable from './MensTable'

export default function Table() {
    const [table, setTable] = useState(['combined']);
    const [tableName, setTableName] = useState(['Combined Standings'])
    const [buttonText, setButtonText] = useState(["Show Women's and Men's Tables"])

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
    const mensStandings = {
      "id": 39,
      "name": "Premier League",
      "country": "England",
      "logo": "https://media-2.api-sports.io/football/leagues/39.png",
      "flag": "https://media-1.api-sports.io/flags/gb.svg",
      "season": 2022,
      "standings": [
          [
              {
                  "rank": 1,
                  "team": {
                      "id": 42,
                      "name": "Arsenal",
                      "logo": "https://media-1.api-sports.io/football/teams/42.png"
                  },
                  "points": 66,
                  "goalsDiff": 37,
                  "group": "Premier League",
                  "form": "WWWWW",
                  "status": "same",
                  "description": "Promotion - Champions League (Group Stage)",
                  "all": {
                      "played": 27,
                      "win": 21,
                      "draw": 3,
                      "lose": 3,
                      "goals": {
                          "for": 62,
                          "against": 25
                      }
                  },
                  "home": {
                      "played": 13,
                      "win": 10,
                      "draw": 2,
                      "lose": 1,
                      "goals": {
                          "for": 34,
                          "against": 16
                      }
                  },
                  "away": {
                      "played": 14,
                      "win": 11,
                      "draw": 1,
                      "lose": 2,
                      "goals": {
                          "for": 28,
                          "against": 9
                      }
                  },
                  "update": "2023-03-17T00:00:00+00:00"
              },
              {
                  "rank": 2,
                  "team": {
                      "id": 50,
                      "name": "Manchester City",
                      "logo": "https://media-2.api-sports.io/football/teams/50.png"
                  },
                  "points": 61,
                  "goalsDiff": 42,
                  "group": "Premier League",
                  "form": "WWWDW",
                  "status": "same",
                  "description": "Promotion - Champions League (Group Stage)",
                  "all": {
                      "played": 27,
                      "win": 19,
                      "draw": 4,
                      "lose": 4,
                      "goals": {
                          "for": 67,
                          "against": 25
                      }
                  },
                  "home": {
                      "played": 13,
                      "win": 11,
                      "draw": 1,
                      "lose": 1,
                      "goals": {
                          "for": 43,
                          "against": 13
                      }
                  },
                  "away": {
                      "played": 14,
                      "win": 8,
                      "draw": 3,
                      "lose": 3,
                      "goals": {
                          "for": 24,
                          "against": 12
                      }
                  },
                  "update": "2023-03-17T00:00:00+00:00"
              },
              {
                  "rank": 3,
                  "team": {
                      "id": 33,
                      "name": "Manchester United",
                      "logo": "https://media-1.api-sports.io/football/teams/33.png"
                  },
                  "points": 50,
                  "goalsDiff": 6,
                  "group": "Premier League",
                  "form": "DLWWD",
                  "status": "same",
                  "description": "Promotion - Champions League (Group Stage)",
                  "all": {
                      "played": 26,
                      "win": 15,
                      "draw": 5,
                      "lose": 6,
                      "goals": {
                          "for": 41,
                          "against": 35
                      }
                  },
                  "home": {
                      "played": 13,
                      "win": 9,
                      "draw": 3,
                      "lose": 1,
                      "goals": {
                          "for": 24,
                          "against": 8
                      }
                  },
                  "away": {
                      "played": 13,
                      "win": 6,
                      "draw": 2,
                      "lose": 5,
                      "goals": {
                          "for": 17,
                          "against": 27
                      }
                  },
                  "update": "2023-03-17T00:00:00+00:00"
              },
              {
                  "rank": 4,
                  "team": {
                      "id": 47,
                      "name": "Tottenham",
                      "logo": "https://media-1.api-sports.io/football/teams/47.png"
                  },
                  "points": 48,
                  "goalsDiff": 12,
                  "group": "Premier League",
                  "form": "WLWWL",
                  "status": "same",
                  "description": "Promotion - Champions League (Group Stage)",
                  "all": {
                      "played": 27,
                      "win": 15,
                      "draw": 3,
                      "lose": 9,
                      "goals": {
                          "for": 49,
                          "against": 37
                      }
                  },
                  "home": {
                      "played": 14,
                      "win": 10,
                      "draw": 0,
                      "lose": 4,
                      "goals": {
                          "for": 29,
                          "against": 16
                      }
                  },
                  "away": {
                      "played": 13,
                      "win": 5,
                      "draw": 3,
                      "lose": 5,
                      "goals": {
                          "for": 20,
                          "against": 21
                      }
                  },
                  "update": "2023-03-17T00:00:00+00:00"
              },
              {
                  "rank": 5,
                  "team": {
                      "id": 34,
                      "name": "Newcastle",
                      "logo": "https://media-3.api-sports.io/football/teams/34.png"
                  },
                  "points": 44,
                  "goalsDiff": 19,
                  "group": "Premier League",
                  "form": "WLLDD",
                  "status": "same",
                  "description": "Promotion - Europa League (Group Stage)",
                  "all": {
                      "played": 25,
                      "win": 11,
                      "draw": 11,
                      "lose": 3,
                      "goals": {
                          "for": 37,
                          "against": 18
                      }
                  },
                  "home": {
                      "played": 13,
                      "win": 7,
                      "draw": 5,
                      "lose": 1,
                      "goals": {
                          "for": 21,
                          "against": 9
                      }
                  },
                  "away": {
                      "played": 12,
                      "win": 4,
                      "draw": 6,
                      "lose": 2,
                      "goals": {
                          "for": 16,
                          "against": 9
                      }
                  },
                  "update": "2023-03-17T00:00:00+00:00"
              },
              {
                  "rank": 6,
                  "team": {
                      "id": 40,
                      "name": "Liverpool",
                      "logo": "https://media-2.api-sports.io/football/teams/40.png"
                  },
                  "points": 42,
                  "goalsDiff": 18,
                  "group": "Premier League",
                  "form": "LWWDW",
                  "status": "same",
                  "description": null,
                  "all": {
                      "played": 26,
                      "win": 12,
                      "draw": 6,
                      "lose": 8,
                      "goals": {
                          "for": 47,
                          "against": 29
                      }
                  },
                  "home": {
                      "played": 13,
                      "win": 9,
                      "draw": 3,
                      "lose": 1,
                      "goals": {
                          "for": 34,
                          "against": 9
                      }
                  },
                  "away": {
                      "played": 13,
                      "win": 3,
                      "draw": 3,
                      "lose": 7,
                      "goals": {
                          "for": 13,
                          "against": 20
                      }
                  },
                  "update": "2023-03-17T00:00:00+00:00"
              },
              {
                  "rank": 7,
                  "team": {
                      "id": 51,
                      "name": "Brighton",
                      "logo": "https://media-2.api-sports.io/football/teams/51.png"
                  },
                  "points": 42,
                  "goalsDiff": 15,
                  "group": "Premier League",
                  "form": "WDWLD",
                  "status": "same",
                  "description": null,
                  "all": {
                      "played": 25,
                      "win": 12,
                      "draw": 6,
                      "lose": 7,
                      "goals": {
                          "for": 46,
                          "against": 31
                      }
                  },
                  "home": {
                      "played": 13,
                      "win": 7,
                      "draw": 2,
                      "lose": 4,
                      "goals": {
                          "for": 22,
                          "against": 11
                      }
                  },
                  "away": {
                      "played": 12,
                      "win": 5,
                      "draw": 4,
                      "lose": 3,
                      "goals": {
                          "for": 24,
                          "against": 20
                      }
                  },
                  "update": "2023-03-17T00:00:00+00:00"
              },
              {
                  "rank": 8,
                  "team": {
                      "id": 55,
                      "name": "Brentford",
                      "logo": "https://media-3.api-sports.io/football/teams/55.png"
                  },
                  "points": 41,
                  "goalsDiff": 9,
                  "group": "Premier League",
                  "form": "WLWDD",
                  "status": "same",
                  "description": null,
                  "all": {
                      "played": 26,
                      "win": 10,
                      "draw": 11,
                      "lose": 5,
                      "goals": {
                          "for": 42,
                          "against": 33
                      }
                  },
                  "home": {
                      "played": 13,
                      "win": 7,
                      "draw": 5,
                      "lose": 1,
                      "goals": {
                          "for": 27,
                          "against": 13
                      }
                  },
                  "away": {
                      "played": 13,
                      "win": 3,
                      "draw": 6,
                      "lose": 4,
                      "goals": {
                          "for": 15,
                          "against": 20
                      }
                  },
                  "update": "2023-03-17T00:00:00+00:00"
              },
              {
                  "rank": 9,
                  "team": {
                      "id": 36,
                      "name": "Fulham",
                      "logo": "https://media-2.api-sports.io/football/teams/36.png"
                  },
                  "points": 39,
                  "goalsDiff": 1,
                  "group": "Premier League",
                  "form": "LLDWW",
                  "status": "same",
                  "description": null,
                  "all": {
                      "played": 27,
                      "win": 11,
                      "draw": 6,
                      "lose": 10,
                      "goals": {
                          "for": 38,
                          "against": 37
                      }
                  },
                  "home": {
                      "played": 14,
                      "win": 6,
                      "draw": 4,
                      "lose": 4,
                      "goals": {
                          "for": 21,
                          "against": 20
                      }
                  },
                  "away": {
                      "played": 13,
                      "win": 5,
                      "draw": 2,
                      "lose": 6,
                      "goals": {
                          "for": 17,
                          "against": 17
                      }
                  },
                  "update": "2023-03-17T00:00:00+00:00"
              },
              {
                  "rank": 10,
                  "team": {
                      "id": 49,
                      "name": "Chelsea",
                      "logo": "https://media-3.api-sports.io/football/teams/49.png"
                  },
                  "points": 37,
                  "goalsDiff": 1,
                  "group": "Premier League",
                  "form": "WWLLD",
                  "status": "same",
                  "description": null,
                  "all": {
                      "played": 26,
                      "win": 10,
                      "draw": 7,
                      "lose": 9,
                      "goals": {
                          "for": 27,
                          "against": 26
                      }
                  },
                  "home": {
                      "played": 12,
                      "win": 6,
                      "draw": 3,
                      "lose": 3,
                      "goals": {
                          "for": 14,
                          "against": 8
                      }
                  },
                  "away": {
                      "played": 14,
                      "win": 4,
                      "draw": 4,
                      "lose": 6,
                      "goals": {
                          "for": 13,
                          "against": 18
                      }
                  },
                  "update": "2023-03-17T00:00:00+00:00"
              },
              {
                  "rank": 11,
                  "team": {
                      "id": 66,
                      "name": "Aston Villa",
                      "logo": "https://media-3.api-sports.io/football/teams/66.png"
                  },
                  "points": 35,
                  "goalsDiff": -7,
                  "group": "Premier League",
                  "form": "DWWLL",
                  "status": "same",
                  "description": null,
                  "all": {
                      "played": 26,
                      "win": 10,
                      "draw": 5,
                      "lose": 11,
                      "goals": {
                          "for": 32,
                          "against": 39
                      }
                  },
                  "home": {
                      "played": 13,
                      "win": 6,
                      "draw": 2,
                      "lose": 5,
                      "goals": {
                          "for": 20,
                          "against": 19
                      }
                  },
                  "away": {
                      "played": 13,
                      "win": 4,
                      "draw": 3,
                      "lose": 6,
                      "goals": {
                          "for": 12,
                          "against": 20
                      }
                  },
                  "update": "2023-03-17T00:00:00+00:00"
              },
              {
                  "rank": 12,
                  "team": {
                      "id": 52,
                      "name": "Crystal Palace",
                      "logo": "https://media-3.api-sports.io/football/teams/52.png"
                  },
                  "points": 27,
                  "goalsDiff": -13,
                  "group": "Premier League",
                  "form": "LLLDD",
                  "status": "same",
                  "description": null,
                  "all": {
                      "played": 27,
                      "win": 6,
                      "draw": 9,
                      "lose": 12,
                      "goals": {
                          "for": 21,
                          "against": 34
                      }
                  },
                  "home": {
                      "played": 14,
                      "win": 4,
                      "draw": 5,
                      "lose": 5,
                      "goals": {
                          "for": 12,
                          "against": 18
                      }
                  },
                  "away": {
                      "played": 13,
                      "win": 2,
                      "draw": 4,
                      "lose": 7,
                      "goals": {
                          "for": 9,
                          "against": 16
                      }
                  },
                  "update": "2023-03-17T00:00:00+00:00"
              },
              {
                  "rank": 13,
                  "team": {
                      "id": 39,
                      "name": "Wolves",
                      "logo": "https://media-1.api-sports.io/football/teams/39.png"
                  },
                  "points": 27,
                  "goalsDiff": -17,
                  "group": "Premier League",
                  "form": "LWLDL",
                  "status": "same",
                  "description": null,
                  "all": {
                      "played": 27,
                      "win": 7,
                      "draw": 6,
                      "lose": 14,
                      "goals": {
                          "for": 20,
                          "against": 37
                      }
                  },
                  "home": {
                      "played": 13,
                      "win": 5,
                      "draw": 2,
                      "lose": 6,
                      "goals": {
                          "for": 10,
                          "against": 15
                      }
                  },
                  "away": {
                      "played": 14,
                      "win": 2,
                      "draw": 4,
                      "lose": 8,
                      "goals": {
                          "for": 10,
                          "against": 22
                      }
                  },
                  "update": "2023-03-17T00:00:00+00:00"
              },
              {
                  "rank": 14,
                  "team": {
                      "id": 65,
                      "name": "Nottingham Forest",
                      "logo": "https://media-2.api-sports.io/football/teams/65.png"
                  },
                  "points": 26,
                  "goalsDiff": -26,
                  "group": "Premier League",
                  "form": "LDLDL",
                  "status": "same",
                  "description": null,
                  "all": {
                      "played": 26,
                      "win": 6,
                      "draw": 8,
                      "lose": 12,
                      "goals": {
                          "for": 21,
                          "against": 47
                      }
                  },
                  "home": {
                      "played": 13,
                      "win": 5,
                      "draw": 5,
                      "lose": 3,
                      "goals": {
                          "for": 17,
                          "against": 15
                      }
                  },
                  "away": {
                      "played": 13,
                      "win": 1,
                      "draw": 3,
                      "lose": 9,
                      "goals": {
                          "for": 4,
                          "against": 32
                      }
                  },
                  "update": "2023-03-17T00:00:00+00:00"
              },
              {
                  "rank": 15,
                  "team": {
                      "id": 45,
                      "name": "Everton",
                      "logo": "https://media-2.api-sports.io/football/teams/45.png"
                  },
                  "points": 25,
                  "goalsDiff": -18,
                  "group": "Premier League",
                  "form": "WDLLW",
                  "status": "same",
                  "description": null,
                  "all": {
                      "played": 27,
                      "win": 6,
                      "draw": 7,
                      "lose": 14,
                      "goals": {
                          "for": 20,
                          "against": 38
                      }
                  },
                  "home": {
                      "played": 14,
                      "win": 5,
                      "draw": 2,
                      "lose": 7,
                      "goals": {
                          "for": 12,
                          "against": 16
                      }
                  },
                  "away": {
                      "played": 13,
                      "win": 1,
                      "draw": 5,
                      "lose": 7,
                      "goals": {
                          "for": 8,
                          "against": 22
                      }
                  },
                  "update": "2023-03-17T00:00:00+00:00"
              },
              {
                  "rank": 16,
                  "team": {
                      "id": 46,
                      "name": "Leicester",
                      "logo": "https://media-2.api-sports.io/football/teams/46.png"
                  },
                  "points": 24,
                  "goalsDiff": -9,
                  "group": "Premier League",
                  "form": "LLLLW",
                  "status": "same",
                  "description": null,
                  "all": {
                      "played": 26,
                      "win": 7,
                      "draw": 3,
                      "lose": 16,
                      "goals": {
                          "for": 37,
                          "against": 46
                      }
                  },
                  "home": {
                      "played": 13,
                      "win": 3,
                      "draw": 3,
                      "lose": 7,
                      "goals": {
                          "for": 16,
                          "against": 17
                      }
                  },
                  "away": {
                      "played": 13,
                      "win": 4,
                      "draw": 0,
                      "lose": 9,
                      "goals": {
                          "for": 21,
                          "against": 29
                      }
                  },
                  "update": "2023-03-17T00:00:00+00:00"
              },
              {
                  "rank": 17,
                  "team": {
                      "id": 48,
                      "name": "West Ham",
                      "logo": "https://media-2.api-sports.io/football/teams/48.png"
                  },
                  "points": 24,
                  "goalsDiff": -10,
                  "group": "Premier League",
                  "form": "DLWLD",
                  "status": "same",
                  "description": null,
                  "all": {
                      "played": 26,
                      "win": 6,
                      "draw": 6,
                      "lose": 14,
                      "goals": {
                          "for": 24,
                          "against": 34
                      }
                  },
                  "home": {
                      "played": 13,
                      "win": 5,
                      "draw": 3,
                      "lose": 5,
                      "goals": {
                          "for": 17,
                          "against": 14
                      }
                  },
                  "away": {
                      "played": 13,
                      "win": 1,
                      "draw": 3,
                      "lose": 9,
                      "goals": {
                          "for": 7,
                          "against": 20
                      }
                  },
                  "update": "2023-03-17T00:00:00+00:00"
              },
              {
                  "rank": 18,
                  "team": {
                      "id": 35,
                      "name": "Bournemouth",
                      "logo": "https://media-2.api-sports.io/football/teams/35.png"
                  },
                  "points": 24,
                  "goalsDiff": -26,
                  "group": "Premier League",
                  "form": "WLLWD",
                  "status": "same",
                  "description": "Relegation - Championship",
                  "all": {
                      "played": 26,
                      "win": 6,
                      "draw": 6,
                      "lose": 14,
                      "goals": {
                          "for": 25,
                          "against": 51
                      }
                  },
                  "home": {
                      "played": 13,
                      "win": 4,
                      "draw": 4,
                      "lose": 5,
                      "goals": {
                          "for": 13,
                          "against": 16
                      }
                  },
                  "away": {
                      "played": 13,
                      "win": 2,
                      "draw": 2,
                      "lose": 9,
                      "goals": {
                          "for": 12,
                          "against": 35
                      }
                  },
                  "update": "2023-03-17T00:00:00+00:00"
              },
              {
                  "rank": 19,
                  "team": {
                      "id": 63,
                      "name": "Leeds",
                      "logo": "https://media-1.api-sports.io/football/teams/63.png"
                  },
                  "points": 23,
                  "goalsDiff": -11,
                  "group": "Premier League",
                  "form": "DLWLL",
                  "status": "same",
                  "description": "Relegation - Championship",
                  "all": {
                      "played": 26,
                      "win": 5,
                      "draw": 8,
                      "lose": 13,
                      "goals": {
                          "for": 31,
                          "against": 42
                      }
                  },
                  "home": {
                      "played": 13,
                      "win": 4,
                      "draw": 5,
                      "lose": 4,
                      "goals": {
                          "for": 18,
                          "against": 18
                      }
                  },
                  "away": {
                      "played": 13,
                      "win": 1,
                      "draw": 3,
                      "lose": 9,
                      "goals": {
                          "for": 13,
                          "against": 24
                      }
                  },
                  "update": "2023-03-17T00:00:00+00:00"
              },
              {
                  "rank": 20,
                  "team": {
                      "id": 41,
                      "name": "Southampton",
                      "logo": "https://media-2.api-sports.io/football/teams/41.png"
                  },
                  "points": 22,
                  "goalsDiff": -23,
                  "group": "Premier League",
                  "form": "LDWLW",
                  "status": "same",
                  "description": "Relegation - Championship",
                  "all": {
                      "played": 27,
                      "win": 6,
                      "draw": 4,
                      "lose": 17,
                      "goals": {
                          "for": 20,
                          "against": 43
                      }
                  },
                  "home": {
                      "played": 13,
                      "win": 2,
                      "draw": 3,
                      "lose": 8,
                      "goals": {
                          "for": 11,
                          "against": 21
                      }
                  },
                  "away": {
                      "played": 14,
                      "win": 4,
                      "draw": 1,
                      "lose": 9,
                      "goals": {
                          "for": 9,
                          "against": 22
                      }
                  },
                  "update": "2023-03-17T00:00:00+00:00"
              }
          ]
      ]
  }
    const names = mensStandings.standings[0].map(team => 
        <li 
            key={team.team.id}
        >
            {team.team.name} 
            {/* <img src={team.team.logo}></img> */}
        </li>
    )

    const handleClick = () => {
        tableName == "Combined Standings" ? setTableName("Women's and Men's Standings") : setTableName("Combined Standings")
        buttonText == "Show Women's and Men's Tables" ? setButtonText("Show Combined Table") : setButtonText("Show Women's and Men's Tables")
        table == 'combined' ? setTable("individual")  : setTable("combined")

    }
    return (
        <div>
            <h3>{tableName}</h3>
            <button onClick={handleClick}>{buttonText}</button>
            {table == 'combined' ? <WomensTable /> : <MensTable />}
            {/* <CombinedTable /> */}
        </div>
    )
}
  

// wsl id = 44
// nwsl = 254
// msl = 253
// epl = 39
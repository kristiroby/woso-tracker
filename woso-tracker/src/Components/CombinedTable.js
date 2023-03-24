// import React from 'react';
// import Table from './Table';
// import WomensTable from './WomensTable';
// import MensTable from './MensTable';

// export default function CombinedTable(props) {
    
//     const mensTable = []
//     props.mensData.map(team => mensTable.push({
//         id: team.id,
//         name: team.name,
//         points: team.points
//     }))

//     const womensTable = []
//     props.womensStandings.map(team => womensTable.push({
//         name: team.team.name,
//         points: team.points
//     }))

//     const combinedStandings = []
//     for (let i = 0; i < womensTable.length; i++) {
//         for (let j = 0; j < mensTable.length; j++) {
//             if (womensTable[i].name.includes(mensTable[j].name)) {
//                 combinedStandings.push({
//                     name: mensTable[j].name,
//                     points: mensTable[j].points + womensTable[i].points,
//                 })
//             }
//         }
//     }
//     const sortedStandings = combinedStandings.sort((a,b) => b.points-a.points)

//     return (
//         console.log(props)
//         // <Table standings={sortedStandings}/>
//     )
// }
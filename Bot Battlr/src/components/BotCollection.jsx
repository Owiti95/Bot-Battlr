import React from 'react'

const BotCollection = ({bot, onAddClick, onDeleteClick}) => (
    <tr onClick={()=>onAddClick(bot)} style={{cursor: 'pointer'}}>
    <td>{bot.id}</td>
    <td>{bot.name}</td>
    <td>{bot.health}</td>
    <td>{bot.damage}</td>
    <td>{bot.armor}</td>
    <td>{bot.bot_class}</td>
    <td>
    <img
    src={bot.avatar_url}
    alt={bot.name}
    style={{width: '100px', height: 'auto'}}
    onError={(e) => e.target.src = 'https://via.placeholder.com/100'}
    />
    </td>
    <td>
        <button onClick={()=>onDeleteClick(bot.id)}>X</button>
    </td>
    </tr>
);
// {
//   return (
//     <div>BotCollection</div>
//   )
// }

export default BotCollection;
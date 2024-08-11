import React from 'react'

const YourBotArmy = () => {
    <tr>
        <td>{bot.id}</td>
        <td>{bot.name}</td>
        <td>{bot.health}</td>
        <td>bot.damage</td>
        <td>bot.armor</td>
        <td>
            <img
            src={bot.avatar_url}
            alt={bot.name}
            style={{width: '95px', height: 'auto' }}
            onError={(e) => e.target.src = 'https://via.placeholder.com/100'}
            />
        </td>
        <td>
            <button>Remove</button>
        </td>
    </tr>
}

export default YourBotArmy
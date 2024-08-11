import React, {useEffect, useState} from 'react'
import axios from 'axios'
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';
import Table from './Table';

function FetchData() {
    const [data, setData] = useState([])
    const [selectedBots, setSelectedBots] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8001/bots')
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    }, []);

    const handleAddClick = (bot) => {
        if (!selectedBots.some(selected => selected.id === bot.id)){
            setSelectedBots([...selectedBots, bot]);
            console.log('added bot', bot);
        }
    };

    const handleRemoveClick = (botId) => {
        setSelectedBots(selectedBots.filter(bot => bot.id !== botId));
    };

    const handleDeleteClick = (botId) => {
        axios.delete('http://localhost:8001/bots/${botId}')
        .then(() => {
            setData(data.filter(bot => bot.id !== botId));
            setSelectedBots(selectedBots.filter(bot => bot.id !== botId));
        })
        .catch(err => console.log("Failed to delete", err));
    };
    
    const botHeaders = ['id', 'name', 'health', 'damage', 'armor', 'bot_class', 'avatar_url', 'actions'];
    const selectedBotHeaders = botHeaders;

    const botRows = data.map(bot => (
        <BotRow
        key={bot.id}
        bot={bot}
        onAddClick={handleAddClick}
        onDeleteClick={handleDeleteClick}/>
    ));
    const selectedBotRows = selectedBots.map(bot => (
        <selectedBotRow
        key={bot.id}
        bot={bot}
        onRemoveClick={handleRemoveClick}/>
    ));
  return (
    <div>
        <div>
            <h2>Bots Collection</h2>
            <Table headers={botHeaders} rows={botRows}/>

            {selectedBots.length > 0 && (
            <div>
                <h2>My Army</h2>
                <Table headers={selectedBotHeaders} rows={selectedBotRows}/>
                </div>
            )}
        </div>
    </div>
  );
}

export default FetchData
// src/Chatbot.js
import React, { useState } from 'react';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState('');

    const openChat = () => {
        setIsOpen(true);
    };

    const closeChat = () => {
        setIsOpen(false);
    };

    const handleSend = () => {
        if (userInput.trim() !== '') {
            setMessages([...messages, { text: userInput, sender: 'user' }]);
            setUserInput('');
            // Here you would typically send the userInput to your chatbot API and get a response
        }
    };

    return (
        <div className="fixed bottom-4 right-4 ">
            {!isOpen && (
                <button 
                    className="bg-cyan-500 text-white p-2 rounded-full shadow-xl hover:bg-cyan-600 transition duration-300"
                    onClick={openChat}
                >
                    <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/chatbot-7851672-6321956.png?f=webp&w=256"  className=" w-15 h-14" alt="" />
                </button>
            )}
            {isOpen && (
                <div className="bg-white w-80 h-96 shadow-xl rounded-lg flex flex-col">
                    <div className="flex justify-between items-center p-4 border-b">
                        <h2 className="text-md font-normal">Chatbot</h2>
                        <button 
                            className="text-gray-500 hover:text-gray-700 transition duration-300"
                            onClick={closeChat}
                        >
                            ×
                        </button>
                    </div>
                    <div className="flex-1 p-4 overflow-y-auto">
                        {messages.map((message, index) => (
                            <div key={index} className={`my-2 p-2 rounded ${message.sender === 'user' ? 'bg-blue-100 self-end' : 'bg-gray-100 self-start'}`}>
                                {message.text}
                            </div>
                        ))}
                    </div>
                    <div className="p-4 border-t flex items-center">
                        <input 
                            type="text" 
                            className="flex-1 border rounded p-2 mr-2" 
                            placeholder="Type a message..." 
                            value={userInput} 
                            onChange={(e) => setUserInput(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                        />
                        <button 
                            className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition duration-300"
                            onClick={handleSend}
                        >
                            Send
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;

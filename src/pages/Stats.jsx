import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { useState, useEffect } from "react";

const COLORS =['#a855f7', '#22c55e', '#eab308'];

export default function Stats(){
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        const saved = localStorage.getItem('timeline');
        if (saved) setEntries(JSON.parse(saved));
    }, []);

    const data = [
        { name: 'Text', value: entries.filter(e => e.type === 'Text').length, fill: '#a855f7'}, 
        { name: 'Call', value: entries.filter(e => e.type === 'Call').length, fill: '#22c55e'}, 
        { name: 'Video', value: entries.filter(e => e.type === 'Video').length, fill: '#eab300'}, 
    ];
    const chartData = data.every(item => item.value === 0) ? [{name: 'No Data', value: 1, fill: '#b8e30e'}]: data.filter(item => item.value > 0);
    return (
        <div className="max-w-4xl mx-auto px-6 py-10">
            <h1 className=" text-center text-3xl font-bold mb-10">Friendship Analytics</h1>
            <div className="bg-emerald-100  p-10 rounded-3xl">
                <ResponsiveContainer width="100%" height={400}>
                    <PieChart>
                        <Pie
                        data={chartData}
                        cx="50%"
                        cy="50%"
                        innerRadius={100}
                        outerRadius={140}
                        dataKey="value"
                        >{chartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill || COLORS[index % COLORS.length ]}/>
                        ))}
                        </Pie>
                        <Tooltip/>
                        <Legend/>
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
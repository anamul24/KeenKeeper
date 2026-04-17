import { useState, useEffect } from "react";
import { Phone, MessageCircle, Video,  } from "lucide-react";

const icons = {
    Call: Phone,
    Text: MessageCircle,
    Video: Video,
};

export default function Timeline(){
    const [entris, setEntries] = useState([]);
    const [filter, setFilter] = useState('All');

    useEffect(() =>{
        const saved = localStorage.getItem('timeline');
        if (saved) setEntries(JSON.parse(saved));
    }, []);

    const filtered = filter === 'All' ? entris : entris.filter(e => e.type === filter);

    return(
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8  md:py-12">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Timeline</h1>
                <div className="flex gap-2">
                    {['All', 'Call', 'Text', 'Video'].map(f => (
                        <button key={f} onClick={() => setFilter(f)} className={`px-4 py-2.5 rounded-2xl text-sm font-medium ${filter === f ? 'bg-emerald-500 text-white' : 'bg-gray-100'}`}>{f}</button>
                    ))}
                </div>
            </div>

            <div className="space-y-4">
                {filtered.length === 0 && (
                    <p className="text-gray-500 text-center py-10">No interactions yet. Go to a Friend's page and do a Quick Check-in</p>
                )}
                {filtered.map(entry => {
                    const Icon = icons[entry.type];
                    return(
                        <div key={entry.id} className="bg-white p-6 rounded-3xl flex gap-6 items-start">
                            <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                                <Icon size={25} className="text-emerald-600" />
                            </div>
                            <div>
                                <div className="font-medium">{entry.title}</div>
                                <div className="text-sm text-gray-500 mt-1">
                                    {new Date(entry.date).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric',
                                    })}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
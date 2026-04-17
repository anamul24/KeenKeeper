import { useState, useEffect } from "react";
import FriendCard from '../components/FriendCard.jsx';
import { Plus } from 'lucide-react';
import friendsData from '../data/friends.json';

export default function Home(){
    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        const timer = setTimeout(() =>{
            setFriends(friendsData.friends);
            setLoading(false);
        }, 200);
        return () => clearTimeout(timer);
    }, []);

    if(loading) {
        return(
            <div className="p-8 min-h-70vh flex flex-col items-center justify-center bg-gray-50">
                <div className="relative">      
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-1">
                        <div className="w-2 h-2 bg-emerald-600 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
                        <div className="w-2 h-2 bg-emerald-600 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
                        <div className="w-2 h-2 bg-emerald-600 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
                    </div>
                </div>
                <p className="mt-12 text-gray-600 font-medium">Loading your Friends</p>
            </div>
        );
    }
    const total = friends.length;
    const onTrack = friends.filter(f => f.status === 'on-track').length;
    const needAttention = friends.filter(f => f.status === 'overdue' || f.status === 'almost due').length;

    return(
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12">
        <div className="text-center mb-10 md:mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 loading-tight">Friends to keep close in your life</h1>
            <p className="text-gray-600 max-w-lg mx-auto mb-8 text-base md:text-lg">Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
            <button className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3.5 rounded-2xl font-medium text-sm md:text-base transition"><Plus size={20} />Add a Friend</button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-10 md:mb-16">
            {[
                { label: "Total Friends", value: total },
                { label: "On Track", value: onTrack },
                { label: "Need Attention", value: needAttention },
                { label: "Interactions This Month", value: 12 },
            ].map((item, i) =>(
                <div key={i} className="bg-white p-5 md:p-6 rounded-3xl shadow-sm border text-center">
                    <div className="text-3xl md:text-4xl font-semibold text-emerald-700">{item.value}</div>
                    <div className="text-gray-600 mt-1 text-sm md:text-base">{item.label}</div>
                </div>
            ))}
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 px-1">Your Friends</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
            {friends.map((friend) => (
                <FriendCard key={friend.id} friend={friend} />
            ))}
        </div>
      </div>  
    );
}
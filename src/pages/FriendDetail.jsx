import { useParams, useNavigate } from "react-router-dom";
import friendsData from '../data/friends.json';
import { Phone, MessageCircle, Video, Clock, Archive, Trash2, } from "lucide-react";
import { toast } from "react-toastify";
import { useState } from "react";

export default function FriendDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const friend = friendsData.friends.find(f => f.id === Number(id));
    const [timeline, setTimeline] = useState(() => {
        const saved = localStorage.getItem('timeline');
        return saved ? JSON.parse(saved): [];
    });

    if (!friend) return <div className="p-10 text-center">Friend not found</div>;

    const handleAction = (type) =>{
        const entry ={
            id: Date.now(), type,
            title: `${type} with ${friend.name}`,
            date: new Date().toISOString()
        };
        const prev = JSON.parse(localStorage.getItem("timeline")) || [];
        const updated = [entry, ...prev];

        localStorage.setItem("timeline", JSON.stringify(updated));
        toast.success(`${type} logged succeessfully`);
    };

    const statusColor = friend.status === 'overdue' ? 'text-red-600' : friend.status === 'almost due' ? 'text-yellow-400' : 'text-emerald-500 ';

    return(
        <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-12 gap-7">
            <div className="md:col-span-5">
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                    <img src={friend.picture} alt={friend.name} className="w-38 h-38 rounded-2xl mx-auto object-cover" />
                    <h1 className="text-3xl font-bold text-center mt-6">{friend.name}</h1>
                    <div className={`text-center mt-2 font-medium ${statusColor}`}>{friend.status.toUpperCase()}</div>
                    <div className="flex gap-2 justify-center mt-6">
                        {friend.tags.map((tag, i) =>(
                            <span key={i} className="bg-gray-100 px-4 py-1 rounded-full text-sm">{tag}</span>
                        ))} 
                    </div>
                    <div className="text-sm mt-8 text-center text-gray-600">{friend.bio}</div>
                    <div className="text-center mt-4 text-sm text-gray-500">Email: {friend.email}</div>

                    <div className="grid grid-cols-3 gap-4 mt-12">
                        <button className="bg-gray-100 flex flex-col items-center gap-2 p-4 hover:bg-gray-50 rounded-2xl ">
                            <Clock className="text-emerald-600" size={24} /> Snooze 2 Weeks
                        </button>
                        <button className="bg-gray-100 flex flex-col items-center gap-2 p-4 hover:bg-gray-50 rounded-2xl ">
                            <Archive className="text-emerald-600" size={24} /> Archive
                        </button>
                        <button onClick={() => navigate('/')} className="bg-gray-100 flex flex-col items-center gap-2 p-4 hover:bg-gray-50 rounded-2xl text-red-600 ">
                            <Trash2 className="text-emerald-600 font-bold" size={24} /> Delete
                        </button>
                    </div>
                </div>
            </div>

            <div className="md:col-span-7 space-y-8">
                <div className="grid grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-3xl">
                        <div className="text-3xl font-bold">{friend.days_since_contact}</div>
                        <div className="text-gray-600">Days Since Contact</div>
                    </div>
                    <div className="bg-white p-6 rounded-3xl">
                        <div className="text-3xl font-bold">{friend.goal}</div>
                        <div className="text-gray-600">Goal (Days)</div>
                    </div>
                    <div className="bg-white p-6 rounded-3xl">
                        <div className="text-3xl font-bold">Feb 27, 2026</div>
                        <div className="text-gray-600">Next Due</div>
                    </div>
                </div>
                <div className="bg-white p-8 rounded-3xl">
                    <div className="flex justify-between items-center">
                        <div>
                            <div className="font-semibold">Relationship Goal</div>
                            <div>Connect every {friend.goal} days</div>
                        </div>
                        <button className="text-emerald-600 font-medium">Edit</button>
                    </div>
                </div>
                <div className="bg-white p-8 rounded-3xl">
                    <div className="font-semibold mb-6">Quick Check-In</div>
                    <div className="grid grid-cols-3 gap-4">
                        <button onClick={() => handleAction('Call')} className="flex flex-col items-center gap-3 p-8 bg-gray-50 hover:bg-emerald-50 rounded-3xl transition">
                            <Phone size={28} className="text-emerald-600"/>
                            <span>Call</span>
                        </button>
                        <button onClick={() => handleAction('Text')} className="flex flex-col items-center gap-3 p-8 bg-gray-50 hover:bg-emerald-50 rounded-3xl transition">
                            <MessageCircle size={28} className="text-emerald-600"/>
                            <span>text</span>
                        </button>
                        <button onClick={() => handleAction('Video')} className="flex flex-col items-center gap-3 p-8 bg-gray-50 hover:bg-emerald-50 rounded-3xl transition">
                            <Video size={28} className="text-emerald-600"/>
                            <span>Video</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

}
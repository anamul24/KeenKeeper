import { Home, Clock, BarChart3 } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const link = [
    { 
        to: '/',
        label: 'Home',
        icon: Home
    },
    { 
        to: '/timeline',
        label: 'Timeline',
        icon: Clock
    },
    { 
        to: '/stats',
        label: 'Stats',
        icon: BarChart3
    },
];

export default function Navbar(){
    return(
        <nav className='backdrop-blur-xl bg-white/20 border-white/30 sticky top-0 z-50 shadow-sm'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 py-4'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                        <h3 className='font-bold text-2xl text-emerald-800'>Keen<span className='font-bold text-emerald-400'>Keeper</span></h3>
                    </div>

                    <div className='flex gap-2 sm:gap-8 text-sm font-medium'>
                        {link.map(({to, label, icon: Icon}) =>(
                            <NavLink key={to} to={to} className={({ isActive }) =>
                            `flex items-center gap-2 px-4 py-2.5 rounded-2xl transition-all ${
                                isActive ?'bg-emerald-200 text-emerald-800 font-semibold':'text-gray-500 hover:bg-gray-100 hover:text-emerald-600'}`}>
                                <Icon size={20}/>
                                <span className='hidden sm:inline'>{label}</span>
                            </NavLink>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}
import { Link } from 'react-router-dom';

export default function FriendCard({ friend }) {
  const getStatusStyle = (status) => {
    if (status === 'overdue') {
      return 'bg-red-500 text-white';
    } else if (status === 'almost due') {
      return 'bg-yellow-400 text-white';
    } else {
      return 'bg-emerald-500 text-white';
    }
  };

  return (
    <Link to={`/friends/${friend.id}`} className="block">
      <div className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-100 h-full flex flex-col items-center text-center">
        
        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md mb-5">
          <img 
            src={friend.picture} 
            alt={friend.name}
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="font-semibold text-xl text-gray-900 mb-1">
          {friend.name}
        </h3>
        <p className="text-gray-500 text-sm mb-4">
          {friend.days_since_contact}d ago
        </p>
        <div className="flex flex-wrap gap-2 justify-center mb-6">
          {friend.tags.map((tag, index) => (
            <span 
              key={index}
              className="text-xs font-medium px-4 py-1 bg-emerald-100 text-emerald-700 rounded-2xl"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className={`px-6 py-2 text-sm font-semibold rounded-2xl ${getStatusStyle(friend.status)}`}>
          {friend.status === 'overdue' ? 'Overdue' : 
           friend.status === 'almost due' ? 'Almost Due' : 'On Track'}
        </div>

      </div>
    </Link>
  );
}
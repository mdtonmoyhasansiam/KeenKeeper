export default function FriendCard({ friend }) {
  const statusColor = friend.status === 'overdue' ? 'bg-red-500' : friend.status === 'almost due' ? 'bg-orange-500' : 'bg-emerald-600';
  return (
    <div className="bg-white rounded-3xl shadow-sm overflow-hidden hover:shadow-md transition-all">
      <div className="p-6">
        <img src={friend.picture} alt={friend.name} className="w-20 h-20 mx-auto rounded-2xl object-cover" />
        <h3 className="text-center font-semibold text-lg mt-4">{friend.name}</h3>
        <p className="text-center text-sm text-gray-500">{friend.days_since_contact}d ago</p>
        <div className="flex flex-wrap justify-center gap-2 mt-3">
          {friend.tags.map(tag => <span key={tag} className="text-xs bg-emerald-100 text-emerald-700 px-3 py-1 rounded-3xl">{tag}</span>)}
        </div>
        <div className={`${statusColor} text-white text-xs font-medium px-4 py-1.5 rounded-3xl mt-4 text-center`}>
          {friend.status === 'overdue' ? 'Overdue' : friend.status === 'almost due' ? 'Almost Due' : 'On-Track'}
        </div>
      </div>
    </div>
  );
}
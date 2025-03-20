import { useState, useEffect } from "react";
import { Mail, Phone } from "lucide-react"; 

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <div className="p-8 bg-gradient-to-br from-blue-100 to-blue-300 min-h-screen">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">Meet Our Users</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="p-6 bg-white shadow-lg rounded-xl transform transition duration-300 hover:scale-105 hover:shadow-xl flex flex-col items-center"
          >
            <div className="w-16 h-16 bg-blue-500 text-white flex items-center justify-center rounded-full text-2xl font-bold">
              {user.name.charAt(0)}
            </div>
            <h3 className="text-xl font-semibold mt-4 text-gray-800">{user.name}</h3>
            <p className="text-gray-600 mt-2 flex items-center">
              <Mail className="w-5 h-5 mr-2 text-blue-500" /> {user.email}
            </p>
            <p className="text-gray-500 text-sm mt-1 flex items-center">
              <Phone className="w-5 h-5 mr-2 text-green-500" /> {user.phone}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;

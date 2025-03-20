import Hero from "../components/Hero";
import Users from "../components/Users";
import Services from "../components/Services";
import Pricing from "../components/Pricing";
import Contact from "../components/Contact";
import SearchBar from "../components/SearchBar";
import { useEffect, useState } from "react";

import ServiceCard from "../components/ServiceCard";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const loadUsers = async () => {
      const data = await fetchUsers();
      setUsers(data);
    };
    loadUsers();
  }, []);

  return (
    <div className="w-full min-h-screen">
      <Hero />
     <ServiceCard/>
      <Services />
      <Pricing />
      <Contact />
      <Users/>
    </div>
  );
};

export default Home;

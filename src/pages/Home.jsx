import Hero from "../components/Hero";
import Users from "../components/Users";
import Services from "../components/Services";
import Pricing from "../components/Pricing";
import Contact from "../components/Contact";
import Nav from  "../components/Nav";
import Footer from  "../components/Footer";
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
        <Nav />
        <section id="hero">
          <Hero />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="pricing">
          <Pricing />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Users />
        <Footer />
      </div>
  );
};

export default Home;

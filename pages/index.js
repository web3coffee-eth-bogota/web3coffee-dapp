import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import { useToast } from "@chakra-ui/react";
import Hero from "./components/Hero";
import Feature from "./components/Feature";
import Profile from "./components/Profile";



import Footer from "./components/Footer";


export default function Home() {
  const toast = useToast();

  useEffect(() => {
    toast({
      title: "Connect Wallet",
      description: "connect to Polygon Mumbai for testing",
      status: "info",
      duration: 4000,
      isClosable: false,
      position: "bottom-right",
    });
  }, [toast]);
  return (
    <>
      
      <Navbar />
      <Hero />
      <Feature />
      <Profile />      
      <Footer />
     
    </>
  );
}
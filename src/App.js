import React from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Card from "./components/props";

import "./styles.css";

function MyApp() {
  return (
    <>
      <Header />
      <Hero />
      <Card
        imgSrc="https://images.unsplash.com/photo-1666627830631-4e3d18bb9f73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        name="web diary"
        phone="123456"
        eMail="webdiary@gmail.com"
      />

      <Card
        imgSrc="https://images.unsplash.com/photo-1677432799784-bf63c79df7eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        name="debug media"
        phone="123456"
        eMail="webdiary@gmail.com"
      />

      <Card
        imgSrc="https://images.unsplash.com/photo-1677781320313-5259cb21e51d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        name="code malayalam"
        phone="123456"
        eMail="webdiary@gmail.com"
      />
      <Footer />
    </>
  );
}

export default MyApp;

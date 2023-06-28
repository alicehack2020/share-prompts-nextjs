import Feed from "@components/Feed";
import React from "react";

const Home = () => {


  return (
    <section className="w-full flex-col flex-center">
      <h1 className="head_text text-center">
        Discovered & Share  
        <br />
        <span className="orange_gradient text-center">AI Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. A quia alias
        eligendi aperiam illo nemo reprehenderit ipsa consequuntur. Excepturi
        dolorem nemo distinctio, totam placeat voluptatum error aut natus nihil!
        Explicabo!
      </p>

      <Feed/>
    </section>
  );
};

export default Home;

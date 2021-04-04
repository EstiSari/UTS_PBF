import React, { useState, useEffect } from "react";
import Gambar from './Image/Me.jpeg'
import './Style/About.css'



const About = () => {
    return (
      <div className="details" >
                            <img src={Gambar} alt=""/>
                            <div className="box">
                                <div className="cart">
                                    <h2>Esti Putri Juniar Puspita Sari</h2>
                                </div>
                                <div className="card" >
                           <div className="content">
                               <h3>
                                   Kediri 24 Juni 2000
                               </h3>
                               <h3>
                                 Perempuan
                               </h3>
                               <h3>
                                 Jl Ir Soekarno Kab. Kukar
                               </h3>
                           </div>
                       </div>
                            </div>
                        </div>
  );
};

export default About;

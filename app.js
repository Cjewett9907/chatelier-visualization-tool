import React from 'react'

class MoleculeSimulator extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        return(
            <div>

                <div id='splash' onclick="this.style.display = 'none'">
                    <h1>Welcome to the Molecular Visualization Sandbox</h1>
                    <h2>The reaction is 2H + O = H2O </h2>
                    <h2>If 2 white hydrogen atoms are able to touch 1 red oxygen atom the formation of water is possible</h2>
                    <h2>Experiment with the reaction conditions to see if it increases or decreases the odds of driving the reaction forward</h2>

                    <h1>CLICK ANYWHERE TO CONTINUE</h1>
                    <img src="https://myschoolpage.com/wp-content/uploads/2017/04/element-img.jpg" alt="" />
                </div>

    
                <section id="flex_parent">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Uxm6-vrKwP0qcMiaZpn0YR2m5u5W7Sj-37UwETkV5cLG9Knnlw" alt="beaker image" />
                    <button onclick="prepDraw(10,25,'1','red'); this.disabled = true" >Add Oxygen</button>
                    <button onclick="prepDraw(20,20,'2','white'); this.disabled = true" >Add Hydrogen</button>
                    <button onclick="GlobalTemp += 1" >Heat up the reaction!</button>
                    <button onclick="GlobalTemp = 1" >Cool off the reaction!</button>
                    <button onclick="prepDraw(50,20,'3','white'); this.disabled = true" >Increase Hydrogen Concentration!</button>
                    <button onclick="prepDraw(25,25,'4','red'); this.disabled = true" >Increase Oxygen Concentration!</button>
                    <button onclick="prepDraw(30,25,'5','red', true); this.disabled = true" >Increase Water Concentration!</button>

                    
                </section>

                <section>
                    <canvas id='canvas1' width='1100' height='800'></canvas>
                    <canvas id='canvas2' width='1100' height='800'></canvas>
                    <canvas id='canvas3' width='1100' height='800'></canvas>
                    <canvas id='canvas4' width='1100' height='800'></canvas>
                    <canvas id='canvas5' width='1100' height='800'></canvas>
                </section>


            </div>
        );
    }
}


// document.addEventListener("DOMCONTENTLOADED", {

// })
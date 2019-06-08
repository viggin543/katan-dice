import React, {useEffect, useRef, useState} from 'react'
import ReactDice from 'react-dice-complete'
import 'react-dice-complete/dist/react-dice-complete.css'
import blue from "./blue.png"
import yellow from "./yellow.png"
import green from "./green.png"
import pirate from "./pirate.png"
import katan from "./catan.png"
import background from "./background.jpg"
import styled from 'styled-components';

import {AwesomeButton} from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';


const FlexColumn = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`;


const FlexRow = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;






function Event({logo, key}) {
    return <img src={logo} key={key} style={{width: "120px", height: "120px", margin: "15px"}} alt=""/>;
}


const eventsRolling = [blue, green, pirate, yellow].sort(() => Math.random() - 0.5);
function FlippingEvent() {
    const [eventId, setEventId] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setEventId((eventId+1) % 4)
        }, 400);
        return () => clearInterval(interval)
    },[eventId]);


    return <div>
        {
            <Event logo={eventsRolling[eventId]}/>
        }
    </div>
}

function NextEvent({rolling}) {
    const events = [blue, green, pirate, yellow,pirate,pirate];

    return rolling ? <FlippingEvent/> : <Event logo={events[Math.round(Math.random() * 100 % 6 - 1)]}/>

}

const SubTitile = styled.p`
  font-size: 35px;
  position: absolute;
  color: darkgoldenrod;
`;


export default function App() {
    const diceEl = useRef(null);
    const [rolling, setRolling] = useState(false);


    function rollDoneCallback(num) {
        setRolling(false)
    }

    function rollIt() {
        setRolling(true);
        return diceEl.current.rollAll();
    }

    return (
        <FlexColumn>



            <FlexColumn>
                <img src={katan} alt="kattan"/>
                <SubTitile>OF CITIES AND KNIGHTS</SubTitile>
            </FlexColumn>
            <FlexColumn>
                <ReactDice
                    numDice={2}
                    faceColor={"Wheat"}
                    dotColor={"Black"}
                    dieSize={120}
                    rollDone={rollDoneCallback}
                    ref={diceEl}
                />
            </FlexColumn>
            <FlexRow>
                <NextEvent rolling={rolling}/>
            </FlexRow>
            <FlexColumn>
                <AwesomeButton type="primary" action={rollIt}>ROLL</AwesomeButton>
            </FlexColumn>
        </FlexColumn>

    )
}




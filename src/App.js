import React, {useEffect, useRef, useState} from 'react'
import ReactDice from 'react-dice-complete'
import 'react-dice-complete/dist/react-dice-complete.css'
import blue from "./blue.png"
import yellow from "./yellow.png"
import green from "./green.png"
import pirate from "./pirate.png"
import katan from "./catan.png"
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
            setEventId((eventId + 1) % 4)
        }, 400);
        return () => clearInterval(interval)
    }, [eventId]);


    return <div>
        {
            <Event logo={eventsRolling[eventId]}/>
        }
    </div>
}

function NextEvent({rolling}) {
    const events = [blue, green, pirate, yellow, pirate, pirate];

    return rolling ? <FlippingEvent/> : <Event logo={events[Math.round(Math.random() * 100 % 6 - 1)]}/>

}

const SubTitile = styled.p`
  font-size: 35px;
  color: darkgoldenrod;
  text-align: center;
`;

const HeaderImage = styled.div`
@media (max-width:629px) {
    img {
        display: none;
    }
}
`;


export default function App() {
    const diceE1 = useRef(null);
    const diceE2 = useRef(null);
    const [rolling, setRolling] = useState(false);


    function rollDoneCallback(num) {
        setRolling(false)
    }

    function rollIt() {
        setRolling(true);
         diceE1.current.rollAll();
         diceE2.current.rollAll();
    }

    return (
        <FlexColumn>
            <FlexColumn>
                <HeaderImage>
                    <img src={katan} alt="kattan"/>
                </HeaderImage>
                <SubTitile>CATAN OF CITIES AND KNIGHTS</SubTitile>
            </FlexColumn>
            <FlexColumn>
                <FlexRow>
                    <ReactDice
                        numDice={1}
                        faceColor={"Wheat"}
                        dotColor={"Black"}
                        dieSize={120}
                        rollDone={rollDoneCallback}
                        ref={diceE1}
                    />
                    <ReactDice
                        numDice={1}
                        faceColor={"red"}
                        dotColor={"Black"}
                        dieSize={120}
                        rollDone={rollDoneCallback}
                        ref={diceE2}
                    />
                </FlexRow>
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




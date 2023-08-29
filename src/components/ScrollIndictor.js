import {useState, useEffect} from 'react';
import { ScrollIndictorContainer } from '../styled';

const ScrollIndictor = ({color}) => {
    let [w, setW] = useState(0);
    useEffect(()=>{
        window.onscroll = ()=>{
            let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            setW((winScroll / height) * 100)
        }
    })
  return (
    <ScrollIndictorContainer>
        <div
            style={{
                height: 8,
                backgroundColor: color,
                width: `${w}%`,
                borderTopRightRadius: 4,
                borderBottomRightRadius: 4
            }}
        ></div>
    </ScrollIndictorContainer>
  )
}

export default ScrollIndictor
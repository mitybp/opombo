import {useState, useEffect} from 'react'

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
    <div className='scrollindicator-container'>
        <div
            style={{
                height: 8,
                backgroundColor: color,
                width: `${w}%`,
                borderTopRightRadius: 4,
                borderBottomRightRadius: 4
            }}
        ></div>
    </div>
  )
}

export default ScrollIndictor
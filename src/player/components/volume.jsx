import React from 'react';
import VolumeIcon from '../../icons/components/volume.jsx'
import './volume.css'

const Volume = props => (
    <button className="Volume" >
        <div onClick={props.handleToggleVolume}>
            <VolumeIcon 
                color="white"
                size={25}
                
            />
        </div>
        
        <div className="Volume-range">
            <input 
                type="range"
                min={0}
                max={1}
                step={.05}
                onChange={props.handleVolumeChange}
                value={props.volume}
            />
        </div>
        
    </button>
)

export default Volume;
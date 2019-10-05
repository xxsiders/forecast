import React from 'react';
import { Image } from 'react-native';

const ConditionImage = props => {
    switch (props.src) {
        case 'c':
            return <Image source={require('../../assets/img/c.png')} style={{ width: 60, height: 60, marginBottom: 10 }} />
        case 'h':
            return <Image source={require('../../assets/img/h.png')} style={{ width: 60, height: 60, marginBottom: 10 }} />
        case 'hc':
            return <Image source={require('../../assets/img/hc.png')} style={{ width: 60, height: 60, marginBottom: 10 }} />
        case 'hr':
            return <Image source={require('../../assets/img/hr.png')} style={{ width: 60, height: 60, marginBottom: 10 }} />
        case 'lc':
            return <Image source={require('../../assets/img/lc.png')} style={{ width: 60, height: 60, marginBottom: 10 }} />
        case 'lr':
            return <Image source={require('../../assets/img/lr.png')} style={{ width: 60, height: 60, marginBottom: 10 }} />
        case 's':
            return <Image source={require('../../assets/img/s.png')} style={{ width: 60, height: 60, marginBottom: 10 }} />
        case 'sl':
            return <Image source={require('../../assets/img/sl.png')} style={{ width: 60, height: 60, marginBottom: 10 }} />
        case 'sn':
            return <Image source={require('../../assets/img/sn.png')} style={{ width: 60, height: 60, marginBottom: 10 }} />
        case 't':
            return <Image source={require('../../assets/img/t.png')} style={{ width: 60, height: 60, marginBottom: 10 }} />
        default:
            return;
    }
}

export default ConditionImage
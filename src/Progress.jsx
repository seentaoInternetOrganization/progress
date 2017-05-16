import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';

let seed = 0;
const now = Date.now();

function getUuid() {
  return `rcNotification_${now}_${seed++}`;
}

const Progress = React.createClass({
  propTypes: {
    prefixCls: PropTypes.string,
    transitionName: PropTypes.string,
    animation: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    percent: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    width: PropTypes.number,
    style: PropTypes.object,
  },

  getDefaultProps() {
    return {
      prefixCls: 'rc-notification',
      animation: 'fade',
      percent: 0,
      width: 1200,
      style: {
        top: 65,
        left: '50%',
      },
    };
  },

  getInitialState() {
    return {
      notices: [],
    };
  },

  render() {
    const {percent, width} = this.props;
    let percentNum = 0;
    let percentStr = percent;
    if ((percent instanceof Number) || (typeof percent === 'number')){
      percentStr = percent+'%';
      percentNum = percent/100;
    }else{
      const percentArr = percent.split("/");
      if(percentArr.length>1){
        if(Number(percentArr[1])<=0){
          percentNum = 0;
        }else{
          percentNum = Number(percentArr[0])/Number(percentArr[1]);
        }
      }
    }
    let marginLeft = 0;
    let isFull = width*percentNum>(width-48);
    if(isFull){
      marginLeft = width-49;
    }else{
      marginLeft = width*percentNum;
    }
    return (
      <div className="kcxq_00_02" style={{width:width}}>
          <div className={percentNum==1?"kcxq_00_03_full":"kcxq_00_03"} style={{marginLeft:marginLeft}}>{percentStr}</div>
          <div className="kcxq_00_04">
              <div className={percentNum==1?"kcxq_00_05_full":"kcxq_00_05"} style={{width:marginLeft+1}}></div>
          </div>
      </div>
    );
  },
});


export default Progress;

import React, { useEffect, useState } from 'react';
import { themeDialogColors } from '../../theme/theme';

export const PrograssBar = ({ progressName, setIsProgressEnd, }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
            const progressing = setInterval(() => {
                progressFunc(progressing);
            }, 10);
    },[]);

    const progressFunc = (progressing) => {
            if(progress > 100 ){
                setIsProgressEnd(true);
                return clearInterval(progressing);
            } else {
            setProgress(progress++);
        }
    };

    return (
        <div
            style={{
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                alignItems: 'center',
                maxWidth:'550px',
                minWidth:'500px'
            }}
        >
            <div
                style={{
                    display:'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems:'center',
                    width:'100%',

                    fontFamily: 'Poppins',
                    fontWeight: '600',
                    fontSize: '16px',
                    color: `${themeDialogColors.text1}`,

                    padding: '0px 20px 5px 20px'
                }}
            >
                <div>
                    {`${progressName}`}
                </div>
                <div
                    style={{
                        transition: '0.3s'
                    }}
                >
                    {`${progress}%`}
                </div>
            </div>
            <div 
                style={{
                    width:'100%',
                    backgroundColor: `${themeDialogColors.text5}`,
                    height:'16px',
                    borderRadius:'20px',
                    display:'flex',
                    // justifyContent: 'flex-start',
                    alignItems: 'center'
                }}
            >
                <div
                    style={{
                        width:`calc(${progress}% - 6px)`,
                        background: `${themeDialogColors.background4}`,
                        borderRadius: '20px',
                        height:'10px',
                        marginLeft: '3px',
                        transition: '0.3s'
                    }}
                >
                </div>
            </div>
        </div>
    );
};
import React from 'react';
import { Card, CardActionArea, CardContent, IconButton, Stack } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { themeColors } from '../../theme/theme';

export const BasicCardComponent = (props) => {
    return (
        <>
           <Card
                sx={{
                    background: `${themeColors.Background1}`,
                    backdropFilter: 'blur(100px)',
                    borderRadius:'8px',
                    minHeight:'80px',
                    boxSizing: 'border-box',
                    border: `1px solid ${themeColors.border1}`,
                    position: 'relative',
                    // color: '#8790C2',
                }}
                elevation={0}
                {...props}
            >
                {props.children}
            </Card>  
        </>
    );
};


export const CardComponentWithDeleteBtn = ({onClickDelete, children}) => {
    return (
        <>
           <Card
                sx={{
                    background: `${themeColors.Background1}`,
                    backdropFilter: 'blur(100px)',
                    borderRadius:'8px',
                    minHeight:'80px',
                    boxSizing: 'border-box',
                    border: '1px solid',
                    position: 'relative',
                    color: `${themeColors.text2}`,
                }}
                elevation={0}
                // {...props}
            >
                <Stack
                    sx={{
                        height: '100%', 
                        minHeight:'80px',
                    }}
                    direction={'row'}
                    justifyContent={'space-between'}
                >
                    <CardContent
                        sx={{
                            width:'100%'
                        }}
                    >
                        {children}
                    </CardContent>
                    <CardActionArea
                        color={themeColors.background8}
                        sx={{
                            background: `${themeColors.background8}`,
                            width: '150px'
                        }}
                        onClick={() => onClickDelete()}
                    >
                        <Stack
                            justifyContent={'center'}
                            alignItems={'center'}
                        >
                            <DeleteIcon 
                                sx={{
                                    color: `${themeColors.text9}`
                                }}
                                fontSize='medium'
                            />
                        </Stack>
                    </CardActionArea>
                </Stack>
            </Card>  
        </>
    );
};
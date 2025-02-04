"use client";

import React, { useState } from 'react';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';

import { Card, Container, Typography } from '@mui/material';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
// my component
import EventDialog from './components/event-dialog';

import LaptopMacIcon from '@mui/icons-material/LaptopMac';

export default function CustomizedTimeline() {
    const [dialogOpen, setDialogOpen] = useState(false);

    const openDialog = () => {
        setDialogOpen(true);
        console.log('Dialog opened');
    };

    return (
        <Container>
            <Timeline position="alternate">
                <Typography 
                    variant="h6" 
                    align="center"
                    fontSize={35}
                >
                    Those are some of the events <i>we</i> have hosted in the past and the ones <i>we</i> are planning to host in the future.
                </Typography>
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        align="center"
                        variant="body2"
                        color="text.secondary"
                    >
                        
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        variant="body2"
                        color="text.secondary"
                    >
                        Jan - 2025
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot color="primary">
                            <LaptopMacIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '24px', px: 2 }}>
                        <Card sx={{ ml: 'auto', minHeight: 500 }}>
                            <CardActionArea
                                onClick={
                                    // now let's open the dialog
                                    () => {
                                        openDialog();
                                    }
                                }
                            >
                                <CardMedia
                                    component="img"
                                    height="auto"
                                    image="../events/ggj2025/portada.png"
                                    alt="Global Game Jam Banner"
                                />
                                <CardContent
                                    mt={'auto'}
                                >
                                    <Typography gutterBottom variant="h5" component="div">
                                        Global Game Jam 2025
                                    </Typography>
                                    <Typography variant="body2" sx={{  color: 'text.secondary' }}>
                                        International event hosted by ENAC (National School of Cinematographic Arts) in Mexico City.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        variant="body2"
                        color="text.secondary"
                    >
                        2025
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot color="primary">
                            
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '24px', px: 2 }}>
                        <Card sx={{ ml: 'auto', minHeight: 500 }}>
                            <CardActionArea
                                onClick={
                                    // now let's open the dialog
                                    () => {
                                        // do nothing
                                    }
                                }
                            >
                                <CardMedia
                                    component="img"
                                    height="auto"
                                    image="../events/coming-soon/coming-soon.jpg"
                                    alt="Coming Soon Banner"
                                />
                                <CardContent
                                    mt={'auto'}
                                >
                                    <Typography gutterBottom variant="h5" component="div">
                                        Stay Tuned
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        New and awesome events are coming in the near future.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
            <EventDialog 
                open={dialogOpen} 
                onClose={() => setDialogOpen(false)} 
                listType="ggj25"
            />
        </Container>
    );
}

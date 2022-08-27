import React from 'react'
import { Grid, Link } from '@mui/material';
import MuiTypography from '@mui/material/Typography';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';
import image1  from '../../assets/images/users/alpha1.jpg';


function Offers() {
    return (
        <MainCard title="Offers">
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12} sm={6}>
            <SubCard title="Information ">
            <Grid container direction="column" spacing={1}>
                <Grid item>
                    <MuiTypography variant="subtitle1" gutterBottom>
                       Due date
                    </MuiTypography>
                </Grid>
                <Grid item>
                    <MuiTypography variant="subtitle2" gutterBottom>
                        2/12/2022
                    </MuiTypography>
                </Grid>
            </Grid>
            <Grid container direction="column" spacing={1}>
                <Grid item>
                    <MuiTypography variant="subtitle1" gutterBottom>
                    List Price
                    </MuiTypography>
                </Grid>
                <Grid item>
                    <MuiTypography variant="subtitle2" gutterBottom>
                        4565$
                    </MuiTypography>
                </Grid>
            </Grid>
            <Grid container direction="column" spacing={1}>
                <Grid item>
                    <MuiTypography variant="subtitle1" gutterBottom>
                    Major Terms of Sale
                    </MuiTypography>
                </Grid>
                <Grid item>
                    <MuiTypography variant="subtitle2" gutterBottom>
                       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum commodi maxime possimus cupiditate natus aperiam assumenda! Harum, sed, tempora obcaecati recusandae unde sit, rerum quidem dignissimos possimus ipsam iste pariatur!
                    </MuiTypography>
                </Grid>
            </Grid>
            <Grid container direction="column" spacing={1}>
                <Grid item>
                    <MuiTypography variant="subtitle1" gutterBottom>
                    Court Confirmation Status
                    </MuiTypography>
                </Grid>
                <Grid item>
                    <MuiTypography variant="subtitle2" gutterBottom>
                        approval yes
                    </MuiTypography>
                </Grid>
                <button>Download Information</button>
            </Grid>
        </SubCard>
            </Grid>
            <Grid item xs={12} sm={6}>
                <SubCard title="Download - offer term sheet ">
                    <Grid container direction="column" spacing={1}>
                        <Grid item>
                            <MuiTypography variant="subtitle1" gutterBottom>
                                agent picture
                            </MuiTypography>
                            <img src={image1} alt="Alpha.png" srcset="" />
                        </Grid>
                    </Grid>
                    <Grid container direction="column" spacing={1}>
                        <Grid item>
                            <MuiTypography variant="subtitle1" gutterBottom>
                                Agent Name
                            </MuiTypography>
                        </Grid>
                        <Grid item>
                            <MuiTypography variant="subtitle2" gutterBottom>
                                Alpha
                            </MuiTypography>
                        </Grid>
                    </Grid>
                    <Grid container direction="column" spacing={1}>
                        <Grid item>
                            <MuiTypography variant="subtitle1" gutterBottom>
                                Broker
                            </MuiTypography>
                        </Grid>
                        <Grid item>
                            <MuiTypography variant="subtitle2" gutterBottom>
                                Ghayas
                            </MuiTypography>
                        </Grid>
                    </Grid>
                    <Grid container direction="column" spacing={1}>
                        <Grid item>
                            <MuiTypography variant="subtitle1" gutterBottom>
                                DRE#
                            </MuiTypography>
                        </Grid>
                        <Grid item>
                            <MuiTypography variant="subtitle2" gutterBottom>
                                42201
                            </MuiTypography>
                        </Grid>
                    </Grid>
                    <Grid container direction="column" spacing={1}>
                        <Grid item>
                            <MuiTypography variant="subtitle1" gutterBottom>
                                Brokerage Logo
                            </MuiTypography>
                        </Grid>
                        <Grid item>
                            <MuiTypography variant="subtitle2" gutterBottom>
                                imagee123.png
                            </MuiTypography>
                        </Grid>
                        <button>Download</button>
                    </Grid>
                </SubCard>
            </Grid>
        </Grid>
    </MainCard>
    )
}

export default Offers

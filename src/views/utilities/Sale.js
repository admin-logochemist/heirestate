import React from 'react'
import { Grid, Link } from '@mui/material';
import MuiTypography from '@mui/material/Typography';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';


function Sale() {
  return (
    <div>
    <MainCard title="Property Sale">
    <Grid container spacing={gridSpacing}>
    <Grid item xs={12} sm={6}>
                <SubCard title="Photos">
                    <Grid container direction="column" spacing={1}>
                        <Grid item>
                            <MuiTypography variant="subtitle1" gutterBottom>
                                Working on image Carousels
                            </MuiTypography>
                        </Grid>
                    </Grid>
                </SubCard>
            </Grid>
    </Grid>
    </MainCard>
    </div>
  )
}

export default Sale
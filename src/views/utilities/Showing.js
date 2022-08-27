import PropTypes from 'prop-types';

// material-ui
import { Box, Card, Grid, Typography } from '@mui/material';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';

// ===============================|| COLOR BOX ||=============================== //

const ColorBox = ({ bgcolor, title, data, dark }) => (
    <>
        <Card sx={{ mb: 3 }}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    py: 4.5,
                    bgcolor,
                    color: dark ? 'grey.800' : '#ffffff'
                }}
            >
                {title && (
                    <Typography variant="subtitle1" color="inherit">
                        {title}
                    </Typography>
                )}
                {!title && <Box sx={{ p: 1.15 }} />}
            </Box>
        </Card>
        {data && (
            <Grid container justifyContent="space-between" alignItems="center">
                <Grid item>
                    <Typography variant="subtitle2">{data.label}</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="subtitle1" sx={{ textTransform: 'uppercase' }}>
                        {data.color}
                    </Typography>
                </Grid>
            </Grid>
        )}
    </>
);

ColorBox.propTypes = {
    bgcolor: PropTypes.string,
    title: PropTypes.string,
    data: PropTypes.object.isRequired,
    dark: PropTypes.bool
};

// ===============================|| UI COLOR ||=============================== //

const Showing = () => (
    <MainCard title="Showing">
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <SubCard title="Details">
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox bgcolor="orange.main" title="Avability" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                        <ColorBox bgcolor="orange.main" title="Avability" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={2}>
                    <ColorBox bgcolor="orange.main" title="Avability" />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={2}>
                <ColorBox bgcolor="orange.main" title="Avability" />
            </Grid>
                    </Grid>
                </SubCard>
            </Grid>
            <Grid item xs={12}>
                <SubCard title="Options">
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox
                                bgcolor="secondary.light"
                                // data={{ label: 'DeepPurple-50', color: '#ede7f6' }}
                                title="Select/Schedule"
                                dark
                            />
                            <button>Select</button>
                            <button>Update</button>
                            <button>Delete</button>
                        </Grid>
                    </Grid>
                </SubCard>
            </Grid>
            <Grid item xs={12}>
                <SubCard title="Display">
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox bgcolor="success.light" title="Agent" dark />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox bgcolor="success.main" title="Atty" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox bgcolor="success.main" title="PR" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox bgcolor="success.dark" title="heir" />
                        </Grid>
                    </Grid>
                </SubCard>
            </Grid>
           
           
          
         {/*   <Grid item xs={12}>
                <SubCard title="Grey Color">
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox bgcolor="grey.50" data={{ label: 'Grey-50', color: '#fafafa' }} title="grey[50]" dark />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox bgcolor="grey.100" data={{ label: 'Grey-100', color: '#f5f5f5' }} title="grey[100]" dark />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox bgcolor="grey.200" data={{ label: 'Grey-200', color: '#eeeeee' }} title="grey[200]" dark />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox bgcolor="grey.300" data={{ label: 'Grey-300', color: '#e0e0e0' }} title="grey[300]" dark />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox bgcolor="grey.500" data={{ label: 'Grey-500', color: '#9e9e9e' }} title="grey[500]" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox bgcolor="grey.700" data={{ label: 'Grey-600', color: '#757575' }} title="grey[600]" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox bgcolor="grey.700" data={{ label: 'Grey-700', color: '#616161' }} title="grey[700]" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox bgcolor="grey.900" data={{ label: 'Grey-900', color: '#212121' }} title="grey[900]" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox bgcolor="#fff" data={{ label: 'Pure White', color: '#ffffff' }} title="Pure White" dark />
                        </Grid>
                    </Grid>
                </SubCard>
          </Grid>*/}
        </Grid>
    </MainCard>
);

export default Showing;

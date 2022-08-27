import { Grid, Link } from '@mui/material';
import MuiTypography from '@mui/material/Typography';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';
import image1  from '../../assets/images/users/alpha1.jpg';

// ==============================|| TYPOGRAPHY ||============================== //

const Property = () => (
    <MainCard title="Property">
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12} sm={6}>
                <SubCard title="Details">
                    <Grid container direction="column" spacing={1}>
                        <Grid item>
                            <button>Request Showing</button>
                            <button>Submit Offer</button>
                        </Grid>
                        <Grid item>
                            <MuiTypography variant="h4" gutterBottom>
                                Address
                            </MuiTypography>
                        </Grid>
                        <Grid item>
                            <MuiTypography variant="h4" gutterBottom>
                                Price
                            </MuiTypography>
                        </Grid>
                        <Grid item>
                            <MuiTypography variant="h4" gutterBottom>
                                Bed
                            </MuiTypography>
                        </Grid>
                        <Grid item>
                            <MuiTypography variant="h4" gutterBottom>
                                Bath
                            </MuiTypography>
                        </Grid>
                        <Grid item>
                            <MuiTypography variant="h4" gutterBottom>
                                Sq feet
                            </MuiTypography>
                        </Grid>
                        <Grid item>
                            <MuiTypography variant="h4" gutterBottom>
                                Lot Size
                            </MuiTypography>
                        </Grid>
                        <Grid item>
                            <MuiTypography variant="h4" gutterBottom>
                                Zonning
                            </MuiTypography>
                        </Grid>
                    </Grid>
                </SubCard>
            </Grid>
            <Grid item xs={12} sm={6}>
                <SubCard title="AGENT INFO ">
                    <Grid container direction="column" spacing={1}>
                        <Grid item>
                            <MuiTypography variant="subtitle1" gutterBottom>
                                agent picture
                            </MuiTypography>
                            <img src={image1} alt="Alpha.png" srcset="" width={200} height={200}/>
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
                                John
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
                    </Grid>
                </SubCard>
            </Grid>
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
            <Grid item xs={12} sm={6}>
                <SubCard title="Description">
                    <Grid container direction="column" spacing={1}>
                        <Grid item>
                            <MuiTypography variant="body1" gutterBottom>
                                Alpha1. Lorem ipsum dolor sit connecter adieu siccing eliot. Quos blanditiis tenetur unde suscipit, quam
                                beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?
                                Eum quasi quidem quibusdam.
                            </MuiTypography>
                        </Grid>
                        <Grid item>
                            <MuiTypography variant="body2" gutterBottom>
                                Arbab. Lorem ipsum dolor sit connecter adieu siccing eliot. Quos blanditiis tenetur unde suscipit, quam
                                beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?
                                Eum quasi quidem quibusdam.
                            </MuiTypography>
                        </Grid>
                    </Grid>
                </SubCard>
            </Grid>
            <Grid item xs={12} sm={6}>
                <SubCard title="Virtual Walkthrough">
                    <Grid container direction="column" spacing={1}>
                        <Grid item>
                            <MuiTypography variant="body1" gutterBottom>
                                Alpha1. Lorem ipsum dolor sit connecter adieu siccing eliot. Quos blanditiis tenetur unde suscipit, quam
                                beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?
                                Eum quasi quidem quibusdam.
                            </MuiTypography>
                        </Grid>
                        <Grid item>
                            <MuiTypography variant="body2" gutterBottom>
                                Arbab. Lorem ipsum dolor sit connecter adieu siccing eliot. Quos blanditiis tenetur unde suscipit, quam
                                beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?
                                Eum quasi quidem quibusdam.
                            </MuiTypography>
                        </Grid>
                    </Grid>
                </SubCard>
            </Grid>
            <Grid item xs={12} sm={6}>
                <SubCard title="Extra">
                    <Grid container direction="column" spacing={1}>
                        <Grid item>
                            <MuiTypography variant="button" display="block" gutterBottom>
                                button text
                            </MuiTypography>
                        </Grid>
                        <Grid item>
                            <MuiTypography variant="caption" display="block" gutterBottom>
                                caption text
                            </MuiTypography>
                        </Grid>
                        <Grid item>
                            <MuiTypography variant="overline" display="block" gutterBottom>
                                Documents
                            </MuiTypography>
                        </Grid>
                        <Grid item>
                            <MuiTypography
                                variant="body2"
                                color="primary"
                                component={Link}
                                href="https://binarychemist.com"
                                target="_blank"
                                display="block"
                                underline="hover"
                                gutterBottom
                            >
                                https://binarychemist.com
                            </MuiTypography>
                        </Grid>
                    </Grid>
                </SubCard>
            </Grid>
            <Grid item xs={12} sm={6}>
                <SubCard title="Video Tour">
                    <Grid container direction="column" spacing={1}>
                        <Grid item>
                            <MuiTypography variant="button" display="block" gutterBottom>
                                Video Need To upload
                            </MuiTypography>
                        </Grid>
                        <Grid item>
                            <MuiTypography variant="caption" display="block" gutterBottom>
                                Video contains discription
                            </MuiTypography>
                            <iframe width="100%" height="315" src="https://www.youtube.com/embed/1hLBCOlptq8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </Grid>
                    </Grid>
                </SubCard>
            </Grid>
            <Grid item xs={12} sm={6}>
            <SubCard title="Features">
                <Grid container direction="column" spacing={1}>
                    <Grid item>
                        <MuiTypography variant="button" display="block" gutterBottom>
                            Bathrooms
                        </MuiTypography>
                    </Grid>
                    <Grid item>
                        <MuiTypography variant="caption" display="block" gutterBottom>
                            Garden
                        </MuiTypography>
                    </Grid>
                    <Grid item>
                    <MuiTypography variant="caption" display="block" gutterBottom>
                        Kitchen
                    </MuiTypography>
                </Grid>
                </Grid>
            </SubCard>
        </Grid>
        </Grid>
    </MainCard>
);

export default Property;

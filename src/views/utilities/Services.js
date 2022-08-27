import { styled } from '@mui/material/styles';
import { Card } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
// import SecondaryAction from 'ui-component/cards/CardSecondaryAction';

// styles
// const IFrameWrapper = styled('iframe')(({ theme }) => ({
//     height: 'calc(100vh - 210px)',
//     border: '1px solid',
//     borderColor: theme.palette.primary.light
// }));

// ============================|| MATERIAL ICONS ||============================ //

const Services = () => {
    return(
        <MainCard title="Services">
    <Card sx={{ overflow: 'hidden' }}>
    <h1>alpha1</h1>
    </Card>
    </MainCard>
    )
};

export default Services;

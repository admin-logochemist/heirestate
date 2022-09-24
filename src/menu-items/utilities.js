// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill, IconAnchorOff, IconCloudComputing, IconArticle } from '@tabler/icons';
// constant
const icons = {
    IconTypography,
    IconPalette,
    IconShadow,
    IconWindmill,
    IconAnchorOff,
    IconCloudComputing,
    IconArticle
};
// ==============================|| UTILITIES MENU ITEMS ||============================== //

const utilities = {
    id: 'utilities',
    title: 'Utilities',
    type: 'group',
    children: [
        {
            id: 'property',
            title: 'Property',
            type: 'item',
            url: '/d/utils/property',
            icon: icons.IconTypography,
            breadcrumbs: false
        },
        {
            id: 'showing',
            title: 'Showing',
            type: 'item',
            url: '/d/utils/showing',
            icon: icons.IconPalette,
            breadcrumbs: false
        },
        {
            id: 'offers',
            title: 'Offers',
            type: 'item',
            url: '/d/utils/offers',
            icon: icons.IconShadow,
            breadcrumbs: false
        },
        {
            id: 'comps',
            title: 'Comps',
            type: 'item',
            url: '/d/utils/comps',
            icon: icons.IconCloudComputing,
            breadcrumbs: false
        },
        {
            id: 'sale',
            title: 'Sale',
            type: 'item',
            url: '/d/utils/sale',
            icon: icons.IconAnchorOff,
            breadcrumbs: false
        },
        {
            id: 'probate',
            title: 'Probate',
            type: 'item',
            url: '/d/utils/probate',
            icon: icons.IconArticle,
            breadcrumbs: false
        },
        {
            id: 'services',
            title: 'Services',
            type: 'item',
            url: '/d/utils/services',
            icon: icons.IconArticle,
            breadcrumbs: false
        },
        {
            id: 'icons',
            title: 'Usefull Doc',
            type: 'collapse',
            icon: icons.IconWindmill,
            children: [
                {
                    id: 'courtconfirmation',
                    title: 'COURT CONFIRMATION',
                    type: 'item',
                    url: '/d/icons/courtconfirmation',
                    breadcrumbs: false
                },
                {
                    id: 'contact',
                    title: 'CONTACT',
                    type: 'item',
                    url: '/d/icons/contact',
                    breadcrumbs: false
                }
            ]
        }
    ]
};

export default utilities;

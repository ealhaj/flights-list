import FlightAdd from './views/add';
import FlightList from './views/list';

export const routes = [
    {
        path: '/flights',
        element: <FlightList />
    },
    {
        path: '/flights/add',
        element: <FlightAdd />
    }
];
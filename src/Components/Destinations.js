import { useQuery, gql } from '@apollo/client';

function Destinations() {
    const { loading, data } = useQuery(FETCH_DESTINATIONS);

    return (
        <>
            {
                loading ? "Loading..." :
                    data.destinations.map(destination =>
                        <div key={destination.id} style={{ border: "1px solid black" }}>
                            <h6>{destination.status}</h6>
                            <h6>{destination.updatedAt}</h6>
                            <h6>{destination.createdAt}</h6>
                            <h6>{destination.name}</h6>
                            <h6>{destination.description}</h6>
                        </div>
                    )
            }
        </>
    )
}

const FETCH_DESTINATIONS = gql`
{
    destinations
    {
        status
        updatedAt
        createdAt
        name
        description
        id
    }
}
`;

export default Destinations
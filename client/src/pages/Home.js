import { useQuery } from '@apollo/client'
import { QUERY_ROUTINES } from '../utils/queries'

const Home = () => {
    const { loading, data } = useQuery(QUERY_ROUTINES)
    const routines = data?.routines || []
    console.log(routines)
    return (
        <main>
            <div>Hello</div>
        </main>
    )
}

export default Home;
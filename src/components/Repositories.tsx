import { useFetchRepositories } from "../hooks/useRepos";
import CardRepository from "./CardRepository";
import { useRepoStore } from '../store/useRepoStore'

function Repositories() {
    const { data, error, isError, isLoading, isSuccess } = useFetchRepositories();
    if (isLoading) return <h1>Is loading</h1>
    if (isError) return <h1>Is error</h1>

    const { addFavoriteRepo, removeFavoriteRepo, favoriteReposIds } = useRepoStore()

    return (
        <h2>
            {data.map(repository => (
                <CardRepository 
                    repository={repository} 
                    key={repository.id} 
                    isFavorite={favoriteReposIds.includes(repository.id)}
                />
            ))}
        </h2>
    )
}

export default Repositories
import { Repository } from '../hooks/types'
import { useRepoStore } from '../store/useRepoStore'

type CardProps = {
    repository: Repository,
    isFavorite: boolean,
}

function CardRepository({ repository, isFavorite, }: CardProps) {
    const { addFavoriteRepo, removeFavoriteRepo, favoriteReposIds } = useRepoStore();
    return (
        <div className="p-12 bg-gray-700 rounded-xl mb-5 drop-shadow-xl flex flex-row align-middle justify-between">
            <div>
                <h2 className=' text-2xl'><strong>{repository.name}</strong> / {repository.owner.login}</h2>
                <small>{repository.created_at}</small>
            </div>
            <div className='flex align-middle'>
                <button
                    className={
                        !isFavorite
                            ? 'bg-cyan-200 text-gray-700 py-4 px-8 rounded-xl drop-shadow-xl'
                            : ' bg-slate-500 text-gray-100 py-4 px-8 rounded-xl drop-shadow-xl'
                    }

                    onClick={
                        !isFavorite ?
                            () => addFavoriteRepo(repository.id)
                            : () => removeFavoriteRepo(repository.id)
                    }>
                    {!isFavorite ? 'Like' : 'Dislike'}
                </button>
            </div>
        </div>
    )
}

export default CardRepository
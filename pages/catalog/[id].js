import { useRouter } from 'next/router'

export default () => {
    const router = useRouter()
    const {id} = router.query
    return <h1>Single product with id:{id}</h1>
}
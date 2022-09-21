import { useRouter } from 'next/router'

export default () => {
    const router = useRouter()
    const {id} = router.query
    return <p>Single product with id: <strong style={{color: 'red'}}>{id}</strong></p>
}
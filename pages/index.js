import Link from 'next/link'

export default () => (
    <div>
        <h1>Index page!</h1>
        <ul>
            <li><Link href='/catalog'>Goto to main product catalog page</Link></li>
            <li><Link href='/catalog/1'>Goto to product 1</Link></li>
            <li><Link href='/catalog/2'>Goto to product 2</Link></li>
            <li><Link href='/catalog/3'>Goto to product 3</Link></li>
        </ul>
        
    </div>
)
import CardList from '@/components/cardlist/CardList'
import CategoryLIst from '@/components/categorylist/CategoryLIst'
import Featured from '@/components/featured/Featured'
import Menu from '@/components/menu/Menu'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Featured />
      <CategoryLIst />
      <div>
        <CardList />
        <Menu/>
      </div>
    </main>
  )
}

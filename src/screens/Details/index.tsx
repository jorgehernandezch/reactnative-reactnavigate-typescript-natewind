import { Header } from '../../components/Header'
import { PageAuth } from '../../components/Page/Auth'

export const Details = ({ navigation }: { navigation: any }) => {
  return (
    <PageAuth>
      <Header navigation={navigation} page="Details Page" />
    </PageAuth>
  )
}

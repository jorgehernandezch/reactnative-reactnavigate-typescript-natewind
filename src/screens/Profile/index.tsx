import { PageAuth } from '../../components/Page/Auth'
import { Header } from '../../components/Header'

export const Profile = ({ navigation }: { navigation: any }) => {
  return (
    <PageAuth>
      <Header navigation={navigation} page="PROFILE PAGE" />
    </PageAuth>
  )
}

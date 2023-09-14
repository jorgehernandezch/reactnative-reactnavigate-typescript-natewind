import { PageAuth } from '../../components/Page/Auth'
import { Text } from 'react-native'

export const Profile = ({ navigation }: { navigation: any }) => {
  return (
    <PageAuth onPress={() => navigation.goBack()} page="Profile">
      <Text className="font-[latoRegular] text-base text-sky-700 uppercase">
        Profile
      </Text>
    </PageAuth>
  )
}

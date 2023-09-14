import { PageAuth } from '../../components/Page/Auth'
import { Text } from 'react-native'

export const Details = ({ navigation }: { navigation: any }) => {
  return (
    <PageAuth onPress={() => navigation.goBack()} page="Details">
      <Text className="font-[latoRegular] text-base text-sky-700 uppercase">
        Details
      </Text>
    </PageAuth>
  )
}

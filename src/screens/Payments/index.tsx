import { Text } from 'react-native'
import { PageAuth } from '../../components/Page/Auth'

export const Payments = ({ navigation }: { navigation: any }) => {
  return (
    <PageAuth onPress={() => navigation.goBack()} page="Payments">
      <Text className="font-[latoRegular] text-base text-sky-700 uppercase">
        Payments
      </Text>
    </PageAuth>
  )
}

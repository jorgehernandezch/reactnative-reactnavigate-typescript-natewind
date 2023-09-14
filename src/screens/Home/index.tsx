import { Text } from 'react-native'
import { Button } from '../../components/Button'
import { PageAuth } from '../../components/Page/Auth'

export const Home = ({ navigation }: { navigation: any }) => {
  return (
    <PageAuth page="Home" onPress={() => navigation.openDrawer()}>
      <Text className="font-[latoBold] text-sky-700 text-2xl uppercase mb-3">
        REACT NATIVE SETUP APP
      </Text>
      <Text className="font-[latoLight] text-black text-lg mb-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic optio,
        earum non odio iure tempora perspiciatis quasi. Nostrum, aut nisi
        tenetur modi necessitatibus eaque dicta quis consequuntur dolorem error
        nulla? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
        accusantium voluptatibus officiis nam adipisci atque, sit, similique
        ipsum harum quis quasi. Dolores nisi, nostrum molestiae quidem odit ut
        voluptatibus fugit!
      </Text>
      <Text className="font-[latoLight] text-black text-lg mb-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic optio,
        earum non odio iure tempora perspiciatis quasi. Nostrum, aut nisi
        tenetur modi necessitatibus eaque dicta quis consequuntur dolorem error
        nulla? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
        accusantium voluptatibus officiis nam adipisci atque, sit, similique
        ipsum harum quis quasi. Dolores nisi, nostrum molestiae quidem odit ut
        voluptatibus fugit!
      </Text>
      <Text className="font-[latoLight] text-black text-lg mb-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic optio,
        earum non odio iure tempora perspiciatis quasi. Nostrum, aut nisi
        tenetur modi necessitatibus eaque dicta quis consequuntur dolorem error
        nulla? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
        accusantium voluptatibus officiis nam adipisci atque, sit, similique
        ipsum harum quis quasi. Dolores nisi, nostrum molestiae quidem odit ut
        voluptatibus fugit!
      </Text>
      <Text className="font-[latoLight] text-black text-lg mb-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic optio,
        earum non odio iure tempora perspiciatis quasi. Nostrum, aut nisi
        tenetur modi necessitatibus eaque dicta quis consequuntur dolorem error
        nulla? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
        accusantium voluptatibus officiis nam adipisci atque, sit, similique
        ipsum harum quis quasi. Dolores nisi, nostrum molestiae quidem odit ut
        voluptatibus fugit!
      </Text>
      <Button onPress={() => navigation.navigate('details')} text="Details" />
    </PageAuth>
  )
}

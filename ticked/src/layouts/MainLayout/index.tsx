import React, {useLayoutEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from "./index.styles"
import { Header } from '../../components'

type MainLayoutProps = {
  children: React.ReactNode
}

const MainLayout = ({children}: MainLayoutProps) => {
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])


  return (
    <SafeAreaView style={styles.container}>
      <Header name="" />
      {children}
    </SafeAreaView>
  )
}

export default MainLayout
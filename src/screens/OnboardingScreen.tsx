import { View, Text, Image } from 'react-native'
import React from 'react'

import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = () => {
  return (
    <View className='flex-1'>
      <Onboarding
        onSkip={() => console.log('skip')} 
        pages={[
          {
            backgroundColor: '#fff',
            image: <Image className='h-40' source={require('../assets/onboarding/home1.png')} />,
            title: 'Onboarding',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
          {
            backgroundColor: '#fe6e58',
            image: <Image source={require('../assets/onboarding/home1.png')} />,
            title: 'The Title',
            subtitle: 'This is the subtitle that sumplements the title.',
          },
          {
            backgroundColor: '#999',
            image: <Image source={require('../assets/onboarding/home1.png')} />,
            title: 'Triangle',
            subtitle: "Beautiful, isn't it?",
          },
        ]}
      />
    </View>
  )
}

export default OnboardingScreen
import {View, Text, Image} from 'react-native';
import React from 'react';

import Onboarding from 'react-native-onboarding-swiper';
import {Button} from 'react-native-paper';
import { OnboardFlow } from 'react-native-onboard';
import { useNavigation } from '@react-navigation/native';

const OnboardingScreen = () => {

  const navigation = useNavigation();

  return (
    <View className="flex-1">
      <OnboardFlow 
        type='fullscreen'
        primaryColor='#714DD9'
        onDone={() => navigation.navigate('Login')}
        paginationColor='#714DD9'
        paginationSelectedColor='#714DD9'
        enableSkip
        pages={[
          {
            title: 'Managing your tasks the easy way', 
            subtitle: 'The most useful todo list app that breaks tasks into easy steps',
            imageUri: Image.resolveAssetSource(require('../assets/onboarding/home1.png')).uri,
          },
          {
            title: 'Customize your experience',
            subtitle: 'Receive a reminder call from your VA and assign your tasks',
            imageUri: Image.resolveAssetSource(require('../assets/onboarding/home2.png')).uri,
          }
        ]}
      />
      {/* <Onboarding
        DotComponent={Dot}
        SkipButtonComponent={Skip}
        NextButtonComponent={Next}
        onSkip={() => console.log('skip')}
        pages={[
          {
            backgroundColor: '#fff',
            image: (
              <Image
                className="h-96 w-56"
                source={require('../assets/onboarding/home1.png')}
              />
            ),
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
      /> */}
    </View>
  );
};

export default OnboardingScreen;

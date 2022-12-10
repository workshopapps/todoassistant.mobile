import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

import arrows from '../../../assets/arrows.png';
import location from '../../../assets/location.png';
import ranking from '../../../assets/ranking.png';
import volume from '../../../assets/volume.png';
import { Button } from '../../../components/Button';
const Subscription = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        backgroundColor: '#f9f7ff',
        paddingTop: 30,
        paddingBottom: 20,
        paddingLeft: 20,
      }}>
      <Text
        style={{
          fontSize: 16,
          fontWeight: '400',
          paddingTop: 20,
          paddingLeft: 20,
          paddingBottom: 24,
          color: '#707070',
        }}>
        Benefit includes:
      </Text>
      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <Image source={location} style={{ width: 24, height: 24, margin: 15 }} />
        <View style={{ display: 'flex', flexDirection: 'column' }}>
          <Text style={{ fontSize: 14, fontWeight: '600', color: '#333333' }}>All Location</Text>
          <Text style={{ fontSize: 12, fontWeight: '400', color: '#333333' }}>
            Content through any of our 97 locations.
          </Text>
        </View>
      </View>
      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <Image source={ranking} style={{ width: 24, height: 24, margin: 15 }} />
        <View style={{ display: 'flex', flexDirection: 'column' }}>
          <Text style={{ fontSize: 14, fontWeight: '600', color: '#333333' }}>Top Speed</Text>
          <Text style={{ fontSize: 12, fontWeight: '400', color: '#333333' }}>
            Don’t let safety in the way of enjoying media.
          </Text>
        </View>
      </View>
      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <Image source={volume} style={{ width: 24, height: 24, margin: 15 }} />
        <View style={{ display: 'flex', flexDirection: 'column' }}>
          <Text style={{ fontSize: 14, fontWeight: '600', color: '#333333' }}>No Ads </Text>
          <Text style={{ fontSize: 12, fontWeight: '400', paddingBottom: 24, color: '#333333' }}>
            Get rid of all those banners and videos.
          </Text>
        </View>
      </View>
      <View style={{ display: 'flex', flexDirection: 'row', paddingLeft: 20 }}>
        <TouchableOpacity onPress={() => navigation.navigate('Subscription2')}>
          <View
            style={{
              height: 130,
              width: 157,
              backgroundColor: '#714DD9',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 8,
            }}>
            <Text style={{ fontSize: 16, fontWeight: '600', color: '#ffffff', paddingBottom: 20 }}>
              Basic
            </Text>
            <Text style={{ fontSize: 20, fontWeight: '600', color: '#ffffff' }}>Free /7 days</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Subscription2')}>
          <View
            style={{
              height: 130,
              width: 157,
              backgroundColor: '#ffffff',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 8,
              borderColor: '#714DD9',
              borderWidth: 1,
              marginLeft: 10,
            }}>
            <Text style={{ fontSize: 16, fontWeight: '600', color: '#714DD9', paddingBottom: 20 }}>
              Standard
            </Text>
            <Text style={{ fontSize: 20, fontWeight: '600', color: '#333333' }}>$ 12.00 /mth</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ paddingTop: 20, alignItems: 'center' }}>
        <Text style={{ fontSize: 14, fontWeight: '600', color: '#707070', paddingBottom: 20 }}>
          Try out with this discount
        </Text>
      </View>
      <Button
        onPress={() => navigation.navigate('Subscription2')}
        style={{ fontSize: 14 }}
        title="Get 1 month $6.00"
      />
      <View style={{ marginLeft: 20 }}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '600',
            color: '#707070',
            paddingLeft: 20,
            paddingTop: 80,
            textAlign: 'center',
          }}>
          Subscription will automatically renew and your{'\n'} credit card will be charged at the
          end of each{'\n'} period.
        </Text>
      </View>
    </View>
  );
};

export default Subscription;

const styles = StyleSheet.create({});

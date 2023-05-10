import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Dimensions,
  TouchableOpacity,
  NativeModules,
} from 'react-native';
import React, {useEffect, useState} from 'react';

const Home = () => {
  const [touchs, setTouches] = useState([
    {id: 1, star: false, status: '0'},
    {id: 2, star: false, status: '0'},
    {id: 3, star: false, status: '0'},
    {id: 4, star: false, status: '0'},
    {id: 5, star: false, status: '0'},
    {id: 6, star: false, status: '0'},
    {id: 7, star: false, status: '0'},
    {id: 8, star: false, status: '0'},
    {id: 9, star: false, status: '0'},
    {id: 10, star: false, status: '0'},
    {id: 11, star: true, status: '0'},
    {id: 12, star: false, status: '0'},
    {id: 13, star: false, status: '0'},
    {id: 14, star: false, status: '0'},
    {id: 15, star: true, status: '0'},
    {id: 16, star: false, status: '0'},
    {id: 17, star: false, status: '0'},
    {id: 18, star: false, status: '0'},
    {id: 19, star: false, status: '0'},
    {id: 20, star: false, status: '0'},
    {id: 21, star: false, status: '0'},
    {id: 22, star: false, status: '0'},
    {id: 23, star: false, status: '0'},
    {id: 24, star: false, status: '0'},
    {id: 25, star: false, status: '0'},
    {id: 26, star: false, status: '0'},
    {id: 27, star: false, status: '0'},
    {id: 28, star: false, status: '0'},
    {id: 29, star: false, status: '0'},
    {id: 30, star: false, status: '0'},
    {id: 31, star: false, status: '0'},
    {id: 32, star: false, status: '0'},
    {id: 33, star: false, status: '0'},
    {id: 34, star: false, status: '0'},
    {id: 35, star: true, status: '0'},
    {id: 36, star: false, status: '0'},
    {id: 37, star: false, status: '0'},
    {id: 38, star: false, status: '0'},
    {id: 39, star: false, status: '0'},
    {id: 40, star: false, status: '0'},
    {id: 41, star: false, status: '0'},
    {id: 42, star: false, status: '0'},
    {id: 43, star: false, status: '0'},
    {id: 44, star: false, status: '0'},
    {id: 45, star: false, status: '0'},
    {id: 46, star: false, status: '0'},
    {id: 47, star: false, status: '0'},
    {id: 48, star: false, status: '0'},
    {id: 49, star: false, status: '0'},
    {id: 50, star: false, status: '0'},
    {id: 51, star: false, status: '0'},
    {id: 52, star: false, status: '0'},
    {id: 53, star: false, status: '0'},
    {id: 54, star: false, status: '0'},
    {id: 55, star: false, status: '0'},
    {id: 56, star: false, status: '0'},
    {id: 57, star: false, status: '0'},
    {id: 58, star: false, status: '0'},
    {id: 59, star: false, status: '0'},
    {id: 60, star: false, status: '0'},
    {id: 61, star: true, status: '0'},
    {id: 62, star: false, status: '0'},
    {id: 63, star: false, status: '0'},
    {id: 64, star: false, status: '0'},
    {id: 65, star: false, status: '0'},
    {id: 66, star: false, status: '0'},
    {id: 67, star: false, status: '0'},
    {id: 68, star: false, status: '0'},
    {id: 69, star: false, status: '0'},
    {id: 70, star: false, status: '0'},
    {id: 71, star: false, status: '0'},
    {id: 72, star: false, status: '0'},
    {id: 73, star: true, status: '0'},
    {id: 74, star: false, status: '0'},
    {id: 75, star: false, status: '0'},
    {id: 76, star: false, status: '0'},
    {id: 77, star: false, status: '0'},
    {id: 78, star: false, status: '0'},
    {id: 79, star: false, status: '0'},
    {id: 80, star: false, status: '0'},
    {id: 81, star: false, status: '0'},
    {id: 82, star: false, status: '0'},
    {id: 83, star: false, status: '0'},
    {id: 84, star: false, status: '0'},
  ]);

  useEffect(() => {
    console.log('object');
  }, [healt, stars]);

  const [healt, setHealt] = useState(3);
  const [stars, setStars] = useState(0);
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState('false');
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  return (
    <SafeAreaView>
      <View
        style={{
          width: windowWidth,
          height: windowHeight,
          alignItems: 'center',
          backgroundColor: '#BCD1ED',
        }}>
        <View style={{paddingVertical: 20}}>
          <Text style={{fontWeight: '700', fontSize: 20}}>Saklambaç</Text>
        </View>
        <View style={{paddingBottom: 20}}>
          <Text>Lütfen saklı olan yıldızları bulunca üzerine dokunun</Text>
        </View>
        <View style={{width: windowWidth * 0.905, height: windowWidth * 1.25}}>
          <Image
            source={require('../assets/images/game.jpeg')}
            style={{width: windowWidth * 0.91, height: windowWidth * 1.25}}
          />
          <View
            style={{
              position: 'absolute',
              width: windowWidth * 0.91,
              height: windowWidth * 1.25,
              display: 'flex',
              flexWrap: 'wrap',
              flexDirection: 'row',
              paddingTop: windowWidth * 0.005,
              paddingLeft: windowWidth * 0.005,
            }}>
            {touchs.map((touch, index) => (
              <TouchableOpacity
                disabled={touch.status == '0' ? false : true}
                onPress={() => {
                  if (touch.star == true && stars < 5 && healt > 0) {
                    touch.status = '1';
                    setStars(stars + 1);
                    if (stars == 4) {
                      setModal(true);
                      setTitle(
                        'Tebrikler oyunu kazandınız.',
                      );
                    }
                    console.log('status', stars);
                  } else if (touch.star == false && healt > 0 && stars < 5) {
                    touch.status = '2';
                    console.log('status', touch.status);
                    setHealt(healt - 1);
                    if (healt == 1) {
                      setModal(true);
                      setTitle(
                        'Malesef maalesef kaybettiniz',
                      );
                    }
                    console.log('healt', healt);
                  }
                }}
                style={[
                  {
                    borderWidth: 1,
                    borderColor: 'white',
                    width: (windowWidth * 0.905) / 7 - 0.1,
                    height: windowWidth * 0.104,
                  },
                  {
                    backgroundColor:
                      touch.status == '2'
                        ? 'red'
                        : touch.status == '1' && 'green',
                  },
                ]}></TouchableOpacity>
            ))}
          </View>
        </View>
        <View style={{width: windowWidth * 0.9, paddingVertical: 10}}>
          <View style={{flexDirection: 'row'}}>
            <Text>Yıldız : </Text>
            <View style={{flexDirection: 'row'}}>
              {stars >= 1 && (
                <Image
                  source={require('../assets/images/star.png')}
                  style={{width: 20, height: 20, marginHorizontal: 2}}
                />
              )}
              {stars >= 2 && (
                <Image
                  source={require('../assets/images/star.png')}
                  style={{width: 20, height: 20, marginHorizontal: 2}}
                />
              )}
              {stars >= 3 && (
                <Image
                  source={require('../assets/images/star.png')}
                  style={{width: 20, height: 20, marginHorizontal: 2}}
                />
              )}
              {stars >= 4 && (
                <Image
                  source={require('../assets/images/star.png')}
                  style={{width: 20, height: 20, marginHorizontal: 2}}
                />
              )}
              {stars >= 5 && (
                <Image
                  source={require('../assets/images/star.png')}
                  style={{width: 20, height: 20, marginHorizontal: 2}}
                />
              )}
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text>Can : </Text>
            <View style={{flexDirection: 'row'}}>
              {healt >= 1 && (
                <Image
                  source={require('../assets/images/heart.png')}
                  style={{width: 20, height: 20, marginHorizontal: 2}}
                />
              )}
              {healt >= 2 && (
                <Image
                  source={require('../assets/images/heart.png')}
                  style={{width: 20, height: 20, marginHorizontal: 2}}
                />
              )}
              {healt >= 3 && (
                <Image
                  source={require('../assets/images/heart.png')}
                  style={{width: 20, height: 20, marginHorizontal: 2}}
                />
              )}
            </View>
          </View>
        </View>
        {modal && (
          <View
            style={{
              position: 'absolute',
              width: windowWidth,
              height: windowHeight,
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{backgroundColor: 'white', padding: 10, borderRadius: 10}}>
              <Text
                style={{
                  textAlign: 'center',
                  width: windowWidth * 0.5,
                  margin: 5,
                }}>
                {title}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  width: windowWidth * 0.5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  onPress={() => {
                    setModal(false);
                    NativeModules.DevSettings.reload();
                  }}
                  style={{
                    backgroundColor: '#BCD1ED',
                    padding: 5,
                    borderRadius: 5,
                    margin: 5,
                  }}>
                  <Text>Tamam</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});

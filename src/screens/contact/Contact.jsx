import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {MAIN_DARK, WHITE} from '../../utils/color/Colors';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomInput from '../../components/input/CustomInput';
import BgButton from '../../components/button/BgButton';
import Toast from 'react-native-toast-message';
import Loader from '../../components/loader/Loader';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    try {
      setLoading(true);

      if (!name || !email || !message) {
        setLoading(false);
        Toast.show({
          type: 'error',
          text1: 'All fields are required.',
        });
        return;
      }

      const data = JSON.stringify({
        name,
        email,
        message,
      });

      setTimeout(() => {
        console.log(data);
        Toast.show({
          type: 'success',
          text1: 'Form submitted',
          text2: 'We received your message!',
        });

        setName('');
        setEmail('');
        setMessage('');

        setLoading(false);
      }, 2000);
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Failed to submit.',
      });
    }
  };

  return (
    <>
      {loading && <Loader />}

      <View style={styles.container}>
        <View style={styles.sideView} />

        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View style={styles.inputsMainContainer}>
            <View style={styles.inputsView}>
              <View style={styles.iconView}>
                <Icon name="chatbubble-ellipses" size={40} color={MAIN_DARK} />
              </View>
              <Text style={styles.text}>Contact us</Text>
              <View style={{marginBottom: 20}}>
                <CustomInput
                  value={name}
                  onChangeText={txt => setName(txt)}
                  icon={'person'}
                  placeholder={'Enter your name'}
                />
                <CustomInput
                  value={email}
                  onChangeText={txt => setEmail(txt)}
                  icon={'email'}
                  placeholder={'Enter your email'}
                />
                <CustomInput
                  value={message}
                  onChangeText={txt => setMessage(txt)}
                  icon={'message'}
                  placeholder={'Type your message here...'}
                  multiline={true}
                />
                <BgButton
                  onClick={() => handleSubmit()}
                  title={'Send Message'}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
  },
  sideView: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: scale(150),
    backgroundColor: 'rgba(35, 43, 93, 0.4)',
    zIndex: 0,
  },
  inputsMainContainer: {
    height: '100%',
    paddingBottom: moderateVerticalScale(100),
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: moderateVerticalScale(150),
    marginTop: moderateVerticalScale(20),
  },
  inputsView: {
    width: '85%',
    backgroundColor: MAIN_DARK,
    borderRadius: moderateScale(16),
    padding: moderateScale(16),
    zIndex: 1,
  },
  text: {
    color: WHITE,
    fontSize: moderateScale(24),
    fontFamily: 'Quicksand-SemiBold',
  },
  iconView: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: WHITE,
    padding: moderateScale(5),
    borderRadius: moderateScale(100),
    right: -15,
    bottom: -25,
  },
});

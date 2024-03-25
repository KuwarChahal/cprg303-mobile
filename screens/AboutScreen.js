import React from 'react';
import { SafeAreaView, Button, Text} from 'react-native';
import MainLayout from '../layouts/MainLayout';

const AboutScreen = ({ navigation }) => {
  const currentDate = new Date().toDateString();

  return (
    <MainLayout>
      <SafeAreaView>
        <Text>App Name: Your ToDo App</Text>
        <Text>Author: ਕੁਵਰ ਚਹਿਲ</Text>
        <Text>Current Date: {currentDate}</Text>
        <Button
          title="Go back"
          onPress={() => navigation.goBack()}
        />
      </SafeAreaView>
    </MainLayout>
  );
}

export default AboutScreen;

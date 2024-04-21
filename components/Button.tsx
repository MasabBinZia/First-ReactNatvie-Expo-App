import { Text, TouchableOpacity } from 'react-native';

export const Button = ({ onPress, title }: { onPress?: () => void; title: string }) => {
  return (
    <TouchableOpacity className={styles.button} onPress={onPress}>
      <Text className={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  button: 'items-center bg-yellow-500 rounded-full w-1/2 py-6 shadow-md p-4',
  buttonText: 'text-white text-xl font-semibold text-center',
};

import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import { Stack } from 'expo-router';

interface PostData {
  id: number;
  title: string;
  body: string;
}

export default function Home() {
  const [data, setData] = useState<PostData[]>([]);

  const getData = async () => {
    const URL = `https://jsonplaceholder.typicode.com/posts`;
    try {
      const response = await fetch(URL);
      const result: PostData[] = await response.json();
      setData(result);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Stack.Screen options={{ title: 'Tab Two' }} />
      <ScrollView style={styles.container}>
        {data.length > 0 ? (
          data.map((post) => (
            <View
              key={post.id}
              style={styles.postContainer}
              className="rounded-lg bg-yellow-300 text-white">
              <Text style={styles.title}>{post.title}</Text>
              <Text style={styles.body}>{post.body}</Text>
            </View>
          ))
        ) : (
          <Text>Loading...</Text>
        )}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  postContainer: {
    borderWidth: 1,
    padding: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  body: {
    marginTop: 8,
  },
});

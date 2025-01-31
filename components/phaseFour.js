import React, { useState, useCallback } from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

const screenWidth = Dimensions.get('window').width;

// Expanded list of phoneme practice videos
const youtubeVideos = [
  { id: '1', videoId: 'eExqpZ98lUc', title: 'Short Vowel Sounds' },
  { id: '2', videoId: '-uEaORL6y8E', title: 'Long Vowel Sounds' },
  { id: '3', videoId: 'VxBEmaaSh1c', title: 'Phonics for Beginners' },
  { id: '4', videoId: '3ovJIxTQpsU', title: 'Blending Sounds Practice' },
  { id: '5', videoId: 'XdVdfZYMZ-o', title: 'Digraphs (ch, sh, th, wh, ph)' },
  { id: '6', videoId: 'Xhul8092j1g', title: 'Silent E Rule' },
  { id: '7', videoId: 'iWRsVUOJj9M', title: 'R-Controlled Vowels (ar, er, ir, or, ur)' },
  { id: '8', videoId: 'PluqmHMSqZk', title: 'Diphthongs (ou, ow, oi, oy)' },
  { id: '9', videoId: '-y3K3WFfVVk', title: 'Consonant Blends (bl, gr, sp, tr, etc.)' },
  { id: '10', videoId: 'VQqWs9qIyYU', title: 'Advanced Phonics Practice' },
];

export default function PhaseFour() {
  const [playing, setPlaying] = useState(false);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Phoneme Practice Videos</Text>
      {youtubeVideos.map((video) => (
        <View key={video.id} style={styles.videoContainer}>
          <Text style={styles.videoTitle}>{video.title}</Text>
          <YoutubePlayer
            height={200}
            width={screenWidth - 20}
            videoId={video.videoId}
            play={playing}
            onChangeState={(event) => {
              if (event === 'ended') setPlaying(false);
            }}
          />
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#182854',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color:"white"
  },
  videoContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  videoTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
    color:"white"
  },
});


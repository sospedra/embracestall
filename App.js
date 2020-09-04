import React, { useEffect, useState } from "react"
import { SafeAreaView, Text, StyleSheet } from "react-native"
import * as Font from "expo-font"

export default function App() {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    ;(async () => {
      await Font.loadAsync({
        lazer84: require("./assets/lazer84.ttf"),
      })
      setIsReady(true)
    })()
  }, [])

  return (
    <SafeAreaView style={s.app}>
      {isReady ? (
        <Text style={s.glorious}>GLORY!</Text>
      ) : (
        <Text style={s.stall}>* sad noises *</Text>
      )}
    </SafeAreaView>
  )
}

const s = StyleSheet.create({
  app: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    padding: 8,
  },
  stall: {
    fontSize: 20,
    textAlign: "center",
  },
  glorious: {
    fontFamily: "lazer84",
    fontSize: 32,
    textAlign: "center",
  },
})

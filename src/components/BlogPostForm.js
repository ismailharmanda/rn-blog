import React, { useContext, useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

const BlogPostForm = ({
  initialValues: { title: initialTitle, content: initialContent },
  onSubmit,
}) => {
  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent);

  return (
    <View>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput
        onChangeText={(text) => setTitle(text)}
        value={title}
        style={styles.input}
      />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput
        onChangeText={(text) => setContent(text)}
        value={content}
        style={styles.input}
      />
      <Button
        onPress={() => onSubmit({ title, content })}
        title="Save Blog Post"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  label: { fontSize: 20, marginBottom: 5 },
});
BlogPostForm.defaultProps = {
  initialValues: { title: "", content: "" },
};
export default BlogPostForm;

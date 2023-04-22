import { Button, Text } from "react-native";
import {
  useGetPostsQuery,
  useGetPostsByIdQuery,
  useAddNewPostMutation,
} from "./redux/posts.service";
import { useEffect, useState } from "react";

export const Posts = () => {
  const { isLoading, data, error } = useGetPostsQuery(undefined);

  const [
    addNewPost,
    { isSuccess: postSuccess, isLoading: postLoading, isError: errorPosts },
  ] = useAddNewPostMutation();

  const getFivePosts = () => {
    if (data?.length) {
      return data.slice(0, 3);
    }
    return "no posts";
  };

  console.log(postLoading, postSuccess, error);

  return (
    <>
      {isLoading && <Text>Posts are loading......</Text>}
      <Text>{JSON.stringify(getFivePosts())}</Text>
      <Button
        onPress={() =>
          addNewPost({ userId: 2, id: 3, title: "title", body: "body string" })
        }
        title="Add new post"
      />
      <Text>{JSON.stringify(error)}</Text>
      <Text>Posts</Text>
    </>
  );
};

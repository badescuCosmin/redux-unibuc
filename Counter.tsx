import { Button, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { increment, selectCounterValue } from "./redux/counter.slice";

export const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(selectCounterValue);

  return (
    <>
      <Text>Counter component</Text>
      <Text>Counter value is {counterValue}</Text>
      <Button
        title="Change counter value"
        onPress={() => dispatch(increment())}
      />
    </>
  );
};

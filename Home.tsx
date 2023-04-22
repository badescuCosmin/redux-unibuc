import { Button, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { increseByAmount, selectCounterValue } from "./redux/counter.slice";

export const Home = () => {
  const counterValue = useSelector(selectCounterValue);
  const dispatch = useDispatch();
  return (
    <>
      <Text>Home component - counter value is {counterValue}</Text>
      <Button
        title="Dispatch action from home"
        onPress={() => dispatch(increseByAmount(100))}
      />
    </>
  );
};
